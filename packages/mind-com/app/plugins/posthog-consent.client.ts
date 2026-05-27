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
 * ── WIRING ──────────────────────────────────────────────────────────────────
 * Add PostHog as a Data Processing Service in the Usercentrics dashboard
 * (Service Settings → add PostHog), then put its Service ID in
 * NUXT_PUBLIC_UC_POSTHOG_ID. Until that id is set, the service is matched by a
 * case-insensitive "posthog" name match as a fallback. While the service does
 * not exist in the CMP yet, consent reads as "unknown" and PostHog stays off.
 *
 * V3 API: `window.__ucCmp.getConsentDetails()` returns a Promise resolving to
 * `{ services: Record<serviceId, { name, consent?: { given: boolean } }> }`.
 * Lifecycle events: `UC_UI_INITIALIZED` (ready) and `UC_UI_CMP_EVENT` (change).
 */

type PosthogClient = {
  opt_in_capturing: () => void
  opt_out_capturing: () => void
  has_opted_in_capturing: () => boolean
}

type UcServiceData = { name?: string; consent?: { given?: boolean } }
type UcConsentDetails = { services?: Record<string, UcServiceData> }

async function readPosthogConsent(serviceId: string): Promise<boolean | undefined> {
  const getDetails = (window as unknown as { __ucCmp?: { getConsentDetails?: () => Promise<UcConsentDetails> } }).__ucCmp?.getConsentDetails

  if (!getDetails) return undefined // CMP not loaded/ready yet — try again on the next event.

  let details: UcConsentDetails
  try {
    details = await getDetails()
  } catch {
    return undefined
  }

  const services = details?.services
  if (!services) return undefined

  const entries = Object.entries(services)
  const match = (serviceId && entries.find(([id]) => id === serviceId)) || entries.find(([, s]) => s.name?.toLowerCase().includes("posthog"))

  if (!match) return undefined // PostHog not configured as a UC service yet.
  return match[1].consent?.given === true
}

export default defineNuxtPlugin({
  name: "posthog-consent",
  dependsOn: ["posthog"],
  setup(nuxtApp) {
    const ph = nuxtApp.$clientPosthog as PosthogClient | undefined
    if (!ph?.opt_in_capturing) return

    const serviceId = (useRuntimeConfig().public.ucPosthogId as string) || ""

    const sync = async () => {
      const granted = await readPosthogConsent(serviceId)
      if (granted === undefined) return // Unknown — leave PostHog as-is (opted out).
      if (granted) {
        if (!ph.has_opted_in_capturing()) ph.opt_in_capturing()
      } else {
        ph.opt_out_capturing()
      }
    }

    // Manual escape hatch, e.g. to call from a custom Usercentrics callback.
    ;(window as unknown as { __syncAnalyticsConsent?: () => void }).__syncAnalyticsConsent = () => void sync()

    // Run once now (CMP may already be up) and on the V3 lifecycle events.
    void sync()
    window.addEventListener("UC_UI_INITIALIZED", () => void sync())
    window.addEventListener("UC_UI_CMP_EVENT", () => void sync()) // accept / deny / change
  },
})
