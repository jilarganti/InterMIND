// First-party reverse proxy for PostHog.
//
// `nuxt-posthog` is configured with `proxy: true` (nuxt.config.ts), which points
// posthog-js's api_host at `<origin>/ingest/ph`. Forwarding capture through our
// own domain stops ad-blockers from silently dropping ~10-25% of events.
//
// Static assets and remote config (`static/`, `array/`) go to the EU asset host;
// everything else (events, flags, surveys API) to the EU ingestion host. We
// preserve the visitor's IP via x-forwarded-for so PostHog geolocates the user
// and not our serverless node. Adapted from posthog.com/docs/advanced/proxy/nuxt.
const API_HOST = "eu.i.posthog.com"
const ASSET_HOST = "eu-assets.i.posthog.com"
const EXCLUDED_REQUEST_HEADERS = ["host", "connection", "content-length", "transfer-encoding", "accept-encoding"]
const EXCLUDED_RESPONSE_HEADERS = ["content-encoding", "content-length", "transfer-encoding"]

export default defineEventHandler(async (event) => {
  const path = event.context.params?.path || ""
  const search = getRequestURL(event).search || ""

  const useAssetHost = path.startsWith("static/") || path.startsWith("array/")
  const hostname = useAssetHost ? ASSET_HOST : API_HOST
  const targetUrl = `https://${hostname}/${path}${search}`

  const headers = new Headers()
  for (const [key, value] of Object.entries(getRequestHeaders(event))) {
    if (value && !EXCLUDED_REQUEST_HEADERS.includes(key.toLowerCase())) headers.set(key, value)
  }
  headers.set("host", hostname)

  // Keep the real client IP so geolocation reflects the visitor, not the edge node.
  const clientIp = getHeader(event, "x-forwarded-for") || getRequestIP(event)
  if (clientIp) headers.set("x-forwarded-for", clientIp)

  // Read the body as a raw buffer to preserve gzip-compressed payloads.
  const body = event.method !== "GET" && event.method !== "HEAD" ? await readRawBody(event, false) : undefined

  // Buffer is a valid body at runtime (Uint8Array subclass); cast past the DOM fetch types.
  const response = await fetch(targetUrl, { method: event.method, headers, body: body as BodyInit | undefined })

  for (const [key, value] of response.headers.entries()) {
    if (!EXCLUDED_RESPONSE_HEADERS.includes(key.toLowerCase())) setResponseHeader(event, key, value)
  }
  setResponseStatus(event, response.status)

  return Buffer.from(await response.arrayBuffer())
})
