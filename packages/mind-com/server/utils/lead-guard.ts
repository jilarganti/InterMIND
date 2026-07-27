import { getRequestHeader, getRequestIP, type H3Event } from "h3"

const TURNSTILE_VERIFY = "https://challenges.cloudflare.com/turnstile/v0/siteverify"

/** Hosts allowed to post leads: the campaign site and the product, incl. their preview deploys. */
const ALLOWED_ORIGIN_SUFFIXES = [".mind.com", ".intermind.com", ".vercel.app"] as const
const ALLOWED_ORIGIN_HOSTS = ["mind.com", "intermind.com", "localhost"] as const

export type LeadRejection = { reason: "origin" | "rate-limit" | "captcha"; status: number }

function originAllowed(rawOrigin: string): boolean {
  let host: string
  try {
    host = new URL(rawOrigin).hostname
  } catch {
    return false
  }
  if (ALLOWED_ORIGIN_HOSTS.includes(host as (typeof ALLOWED_ORIGIN_HOSTS)[number])) return true
  return ALLOWED_ORIGIN_SUFFIXES.some((suffix) => host.endsWith(suffix))
}

/**
 * Fixed-window counter, per instance. A serverless fleet means each instance
 * holds its own window, so the effective limit is per-instance — enough to cap a
 * single-source flood, and deliberately not a distributed quota.
 */
const RATE_LIMIT_MAX = 5
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000
const hits = new Map<string, { count: number; resetAt: number }>()

function rateLimited(ip: string, now: number): boolean {
  for (const [key, entry] of hits) if (entry.resetAt <= now) hits.delete(key)

  const entry = hits.get(ip)
  if (!entry || entry.resetAt <= now) {
    hits.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
    return false
  }
  entry.count += 1
  return entry.count > RATE_LIMIT_MAX
}

async function captchaValid(token: string | undefined, ip: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY
  // Unset secret means the guard is not provisioned yet; fail OPEN so a missing
  // env var can never silently swallow real leads. The origin + rate-limit
  // checks above still apply.
  if (!secret) return true
  if (!token) return false

  try {
    const res = await fetch(TURNSTILE_VERIFY, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ secret, response: token, remoteip: ip }),
    })
    const body = (await res.json()) as { success?: boolean }
    return body.success === true
  } catch (error) {
    // Cloudflare unreachable — fail OPEN for the same reason as an unset secret.
    console.error("[lead-guard] Turnstile verify unreachable:", (error as Error).message)
    return true
  }
}

/**
 * Gate a lead submission. Returns null when the request may proceed, or the
 * rejection to answer with. Order is cheapest-first: origin, then rate limit,
 * then the network round-trip to Cloudflare.
 */
export async function guardLeadSubmission(event: H3Event, captchaToken: string | undefined, now: number = Date.now()): Promise<LeadRejection | null> {
  const origin = getRequestHeader(event, "origin")
  // A browser always sends Origin on a cross-origin POST with a JSON body; a
  // bare scripted POST typically sends none. Absent origin is therefore rejected.
  if (!origin || !originAllowed(origin)) return { reason: "origin", status: 403 }

  const ip = getRequestIP(event, { xForwardedFor: true }) || "unknown"
  if (rateLimited(ip, now)) return { reason: "rate-limit", status: 429 }

  if (!(await captchaValid(captchaToken, ip))) return { reason: "captcha", status: 403 }

  return null
}

/** Test seam — the module-level window would otherwise leak between cases. */
export function __resetRateLimit() {
  hits.clear()
}
