export type Audience = "legacy" | "new"

// Visitor cohort, resolved once and shared via useState (so SSR and hydration
// agree — no flash). On the homepage it comes from the Nitro `audience`
// middleware (server/middleware/audience.ts), which also sniffs the legacy GA
// cookie / product referrer. On every other page the middleware does not run, so
// we fall back to the `mind_aud` cookie it persisted on an earlier visit. New /
// unknown visitors default to "new".
export function useAudience() {
  return useState<Audience>("audience", () => {
    const fromContext = import.meta.server ? useRequestEvent()?.context.audience : null
    if (fromContext === "legacy" || fromContext === "new") return fromContext

    const persisted = useCookie<Audience | null>("mind_aud").value
    return persisted === "legacy" ? "legacy" : "new"
  })
}
