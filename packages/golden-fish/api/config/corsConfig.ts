/**
 * CORS Configuration for API Endpoints
 *
 * Domain access control configuration for securing API endpoints.
 * Validates incoming requests against allowed domains list to prevent
 * unauthorized access from unknown origins.
 *
 * Features:
 * - Origin and referer header validation
 * - Fallback domain checking
 * - Development domain support
 * - Access logging and warnings
 */

// Allowed domains for API endpoints
export const ALLOWED_DOMAINS = ["localhost", "goldenfish.ae", "status.goldenfish.ae"]

// Function to check allowed domain
export function isAllowedDomain(request: Request): boolean {
  const origin = request.headers.get("origin")
  const referer = request.headers.get("referer")

  // Allow if no origin and referer (for direct requests)
  if (!origin && !referer) {
    return true
  }

  // Check origin
  if (origin) {
    try {
      const originUrl = new URL(origin)
      const hostname = originUrl.hostname

      if (ALLOWED_DOMAINS.includes(hostname)) {
        return true
      } else {
        console.warn(`🚫 Access denied from unauthorized domain: ${hostname} (origin)`)
      }
    } catch (e) {
      console.warn("Invalid origin URL:", origin)
    }
  }

  // Check referer as fallback
  if (referer) {
    try {
      const refererUrl = new URL(referer)
      const hostname = refererUrl.hostname

      if (ALLOWED_DOMAINS.includes(hostname)) {
        return true
      } else {
        console.warn(`🚫 Access denied from unauthorized domain: ${hostname} (referer)`)
      }
    } catch (e) {
      console.warn("Invalid referer URL:", referer)
    }
  }

  return false
}
