// Tells the browser whether analytics would need this visitor's consent, by the country Vercel
// saw the request come from (`x-vercel-ip-country`). Read by app/plugins/posthog-consent.client.ts.
// Never cached: the answer belongs to the visitor, not to the URL.
export default defineEventHandler((event) => {
  setResponseHeader(event, "Cache-Control", "private, no-store")
  return { required: consentRequiredFor(getRequestHeader(event, "x-vercel-ip-country")) }
})
