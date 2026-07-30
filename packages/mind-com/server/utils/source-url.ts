/**
 * Resolve the source-page URL recorded on a CRM lead: the path the form declared
 * (reliable, survives Referrer-Policy stripping, keeps the locale prefix) resolved
 * against the request origin; falls back to the Referer header, then the origin.
 * The declared path is client input — anything that isn't a plain site path is ignored.
 */
export function resolveSourceUrl(page: unknown, referer: string | undefined, origin: string): string {
  if (typeof page === "string" && page.length <= 64 && /^\/[\w\-/]*$/.test(page)) return origin + page
  return referer || origin
}
