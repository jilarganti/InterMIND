/**
 * Decides whether PostHog runs for this visitor (owner 2026-11-24; replaces the Usercentrics
 * CMP gate).
 *
 * mind.com shows no cookie banner. PostHog is configured with
 * `opt_out_capturing_by_default: true` (nuxt.config.ts), so nothing is captured until this
 * plugin opts in, and it opts in only where analytics needs no consent:
 *
 * - a visitor from the European Economic Area, the United Kingdom or Switzerland — PostHog
 *   stays off. Nobody is asked, so nobody is tracked. A browser that said yes in the old
 *   banner is switched back off: there is no banner left to withdraw that yes in;
 * - everyone else — PostHog is switched on.
 *
 * The country is the server's knowledge (Vercel's geo header), read from
 * /api/consent-region. No answer (network error, unknown country) counts as "consent needed":
 * analytics stays off.
 *
 * posthog-js captures the landing `$pageview` itself when it is opted in
 * (`capture_pageview: true`), so nothing is captured by hand here — the explicit capture the
 * old gate made counted every full page load twice.
 *
 * Append `?ph_debug` to the URL to log the decision to the console.
 */

type PosthogClient = {
  opt_in_capturing: () => void
  opt_out_capturing: () => void
  has_opted_in_capturing: () => boolean
}

export default defineNuxtPlugin({
  name: "posthog-consent",
  dependsOn: ["posthog"],
  setup(nuxtApp) {
    const ph = nuxtApp.$clientPosthog as PosthogClient | undefined
    if (!ph?.opt_in_capturing) return

    const debug = /[?&]ph_debug\b/.test(window.location.search)

    // Not awaited: the page must not wait for analytics.
    void (async () => {
      let required = true
      try {
        const answer = await $fetch<{ required?: boolean }>("/api/consent-region")
        required = answer?.required !== false
      } catch {
        // No answer — treated as "consent needed".
      }

      const wasOn = ph.has_opted_in_capturing()
      if (required) {
        if (wasOn) ph.opt_out_capturing()
      } else if (!wasOn) {
        ph.opt_in_capturing()
      }

      if (debug) console.info("[posthog-consent]", { required, wasOn, on: ph.has_opted_in_capturing() })
    })()
  },
})
