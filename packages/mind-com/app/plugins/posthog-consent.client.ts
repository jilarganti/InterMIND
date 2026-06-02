/**
 * Gates PostHog capture behind Usercentrics consent (Web CMP V3).
 *
 * PostHog is configured with `opt_out_capturing_by_default: true`
 * (nuxt.config.ts), so nothing is captured until this plugin opts in. We read
 * the consent state for the PostHog Data Processing Service from the
 * Usercentrics CMP (loaded via the V3 loader in nuxt.config app.head) and
 * mirror it onto posthog-js, re-syncing whenever the visitor changes their
 * choice.
 *
 * ── REGION AWARENESS ─────────────────────────────────────────────────────────
 * The CMP is configured `displayOnlyForEU: true`, so the consent banner is
 * shown ONLY to EU/EEA visitors. For everyone else (e.g. US, UAE) the banner
 * never appears and the PostHog service stays at its `false` default — which
 * would otherwise leave ALL non-EU traffic opted out forever.
 *
 * `getConsentDetails()` exposes `consent.required` (V3): `true` when consent
 * must be collected for this visitor (EU/EEA), `false` when it isn't legally
 * required for their region. We therefore opt in when EITHER the PostHog
 * service was explicitly granted (EU users who accepted) OR consent is not
 * required for this visitor (non-EU). EU users who haven't accepted stay
 * opted out.
 *
 * ── WIRING ──────────────────────────────────────────────────────────────────
 * Add PostHog as a Data Processing Service in the Usercentrics dashboard
 * (Service Settings → add PostHog), then put its Service ID in
 * NUXT_PUBLIC_UC_POSTHOG_ID. Until that id is set, the service is matched by a
 * case-insensitive "posthog" name match as a fallback.
 *
 * V3 API: `window.__ucCmp.getConsentDetails()` returns a Promise resolving to
 * `{ consent: { required: boolean, status, ... }, services: Record<serviceId, { name, consent?: { given: boolean } }> }`.
 * Lifecycle events: `UC_UI_INITIALIZED` (ready) and `UC_UI_CMP_EVENT` (change).
 *
 * ── TIMING ───────────────────────────────────────────────────────────────────
 * The CMP computes consent asynchronously (`updatedBy: "onInitialPageLoad"`),
 * so a single read at plugin setup can win the race and see an unsettled
 * "unknown" state. And for non-EU visitors the banner never renders, so
 * `UC_UI_INITIALIZED` may never fire to trigger a re-read. We therefore poll
 * `getConsentDetails()` on a resilient setInterval until we opt in (see the
 * poll loop below), in addition to listening for the lifecycle events.
 *
 * Append `?ph_debug` to the URL to log what the CMP returned and the resulting
 * opt-in/out decision to the console.
 */

type PosthogClient = {
  opt_in_capturing: () => void
  opt_out_capturing: () => void
  has_opted_in_capturing: () => boolean
  capture: (event: string, properties?: Record<string, unknown>) => void
}

type UcServiceData = { name?: string; consent?: { given?: boolean } }
type UcConsentData = { required?: boolean; status?: string }
type UcConsentDetails = { consent?: UcConsentData; services?: Record<string, UcServiceData> }

type ConsentDecision = "in" | "out" | "unknown"

async function readConsentDecision(serviceId: string, debug: boolean): Promise<ConsentDecision> {
  const cmp = (window as unknown as { __ucCmp?: { getConsentDetails?: () => Promise<UcConsentDetails> } }).__ucCmp

  if (!cmp?.getConsentDetails) return "unknown" // CMP not loaded/ready yet — try again on the next event.

  let details: UcConsentDetails
  try {
    // MUST call as a method: getConsentDetails() reads `this` internally, so a
    // detached `const f = cmp.getConsentDetails; f()` throws and we'd always
    // fall through to "unknown" (this silently broke capture since launch).
    details = await cmp.getConsentDetails()
  } catch {
    return "unknown"
  }

  const services = details?.services
  const entries = services ? Object.entries(services) : []
  const match = (serviceId && entries.find(([id]) => id === serviceId)) || entries.find(([, s]) => s.name?.toLowerCase().includes("posthog"))
  const phGiven = match?.[1].consent?.given
  const required = details?.consent?.required

  const decision: ConsentDecision =
    phGiven === true
      ? "in" // Explicit opt-in (typically an EU visitor who accepted Marketing).
      : required === false
        ? "in" // Consent isn't required for this visitor's region (e.g. non-EU) — capture is lawful.
        : required === true
          ? "out" // Consent required (EU) but PostHog not granted.
          : "unknown" // CMP state still settling / fields absent — leave PostHog as-is.

  if (debug) console.info("[posthog-consent]", { decision, required, phGiven, serviceMatched: !!match, status: details?.consent?.status })

  return decision
}

export default defineNuxtPlugin({
  name: "posthog-consent",
  dependsOn: ["posthog"],
  setup(nuxtApp) {
    const ph = nuxtApp.$clientPosthog as PosthogClient | undefined
    if (!ph?.opt_in_capturing) return

    const serviceId = (useRuntimeConfig().public.ucPosthogId as string) || ""
    const debug = /[?&]ph_debug\b/.test(window.location.search)

    // Set once we've opted in — stops the poll. We intentionally do NOT stop on
    // "out": for a non-EU visitor the CMP first reports "unknown", then resolves
    // to a grant a second or two later, and never fires a lifecycle event (no
    // banner renders) — so we must keep re-checking until "in".
    let optedIn = false

    const apply = async () => {
      if (optedIn) return
      let decision: ConsentDecision
      try {
        decision = await readConsentDecision(serviceId, debug)
      } catch {
        return // transient CMP error — the next tick retries
      }
      if (decision === "in") {
        optedIn = true
        if (!ph.has_opted_in_capturing()) ph.opt_in_capturing()
        // The landing $pageview is suppressed while opted out and isn't replayed
        // on opt-in, so capture it explicitly to keep first-touch attribution.
        // Subsequent loads opt in from the persisted flag and capture natively.
        ph.capture("$pageview")
      } else if (decision === "out") {
        ph.opt_out_capturing() // stay opted out, but keep polling — may still resolve to "in"
      }
      // "unknown" — CMP still settling; keep polling.
    }

    // Manual escape hatch, e.g. to call from a custom Usercentrics callback.
    ;(window as unknown as { __syncAnalyticsConsent?: () => void }).__syncAnalyticsConsent = () => void apply()

    // Re-apply whenever the visitor accepts/denies/changes in the CMP UI (EU).
    window.addEventListener("UC_UI_INITIALIZED", () => void apply())
    window.addEventListener("UC_UI_CMP_EVENT", () => void apply())

    // The CMP computes consent asynchronously (`onInitialPageLoad`) and, for
    // non-EU visitors, never fires a lifecycle event — so we poll until opted
    // in. Use setInterval (NOT a self-rescheduling setTimeout): one slow or
    // rejected tick must not break the chain and strand the visitor opted out.
    let ticks = 0
    const timer = window.setInterval(() => {
      void apply()
      if (optedIn || ++ticks >= 120) window.clearInterval(timer) // 120 × 250ms ≈ 30s
    }, 250)
    void apply()
  },
})
