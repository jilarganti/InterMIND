// Decides which homepage variant a visitor gets — WITHOUT any change to
// inter.mind.com. The apex mind.com and the legacy product inter.mind.com share
// the registrable domain `mind.com`, so the GA cookie the old product set with
// the default `cookie_domain: auto` (GTM-PC59BD7Z) landed on `.mind.com` and is
// readable here. That cookie — or a referrer coming from the product — marks a
// "legacy" visitor (the ~1y inter.mind.com cohort). Everyone else is "new" and
// gets the clean brand homepage. The verdict is cached in our own first-party
// `mind_aud` cookie so it stays stable and we stop re-sniffing on later visits.
//
// New / unknown / bot traffic (no _ga, no product referrer) resolves to "new",
// which is also what Googlebot indexes — the legacy variant is opt-in only.

const PRODUCT_HOST = /(^|\.)(inter\.mind\.com|intermind\.com)$/i
const LOCALE_HOME = /^\/(es|pt|fr|de|ru|zh)$/

function isHomePath(rawPath: string): boolean {
  const path = (rawPath.split("?")[0] || "/").replace(/\/+$/, "") || "/"
  return path === "/" || LOCALE_HOME.test(path)
}

export default defineEventHandler((event) => {
  // The audience only changes what the homepage renders, so skip everything else
  // (assets, API, blog, legal …) — no need to sniff cookies or vary their cache.
  if (!isHomePath(event.path)) return

  const cookies = parseCookies(event)
  let audience: "legacy" | "new" | null = cookies.mind_aud === "legacy" || cookies.mind_aud === "new" ? cookies.mind_aud : null

  if (!audience) {
    const hasGaCookie = Object.keys(cookies).some((name) => name === "_ga" || name.startsWith("_ga_"))

    let fromProduct = false
    const referer = getRequestHeader(event, "referer")
    if (referer) {
      try {
        fromProduct = PRODUCT_HOST.test(new URL(referer).hostname)
      } catch {
        // malformed Referer header — treat as no signal
      }
    }

    audience = hasGaCookie || fromProduct ? "legacy" : "new"

    // Persist the verdict on `.mind.com` so it survives across visits (and so a
    // legacy visitor who later arrives without a referrer stays legacy). Scope
    // the cookie to the real domain in prod; stay host-only / non-secure on
    // localhost so it still works in dev.
    const host = getRequestHost(event)
    const onMindDomain = /(^|\.)mind\.com(:\d+)?$/i.test(host)
    const isLocalhost = host.startsWith("localhost") || host.startsWith("127.0.0.1")
    setCookie(event, "mind_aud", audience, {
      domain: onMindDomain ? ".mind.com" : undefined,
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
      secure: !isLocalhost,
    })
  }

  event.context.audience = audience

  // This response is personalised per visitor — keep shared/CDN caches from
  // serving the wrong variant to the wrong cohort.
  setResponseHeader(event, "Cache-Control", "private, no-cache, must-revalidate")
  appendResponseHeader(event, "Vary", "Cookie")
})
