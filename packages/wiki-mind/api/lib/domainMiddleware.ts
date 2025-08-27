/**
 * Domain Security Middleware for API Endpoints
 *
 * Middleware functions for checking domain access permissions on API requests.
 * Provides wrapper functions to enforce domain validation before processing
 * API requests, returning appropriate error responses for unauthorized domains.
 *
 * Features:
 * - Domain validation middleware wrapper
 * - Standardized error responses
 * - Request handler abstraction
 * - Security logging integration
 */

import { isAllowedDomain } from "../config/corsConfig.js"

/**
 * Creates Response with access denied error
 */
export function createAccessDeniedResponse(): Response {
  return new Response(
    JSON.stringify({
      success: false,
      message: "Access denied: Domain not allowed",
      code: "DOMAIN_NOT_ALLOWED",
    }),
    {
      status: 403,
      headers: {
        "Content-Type": "application/json",
      },
    },
  )
}

/**
 * Middleware function for domain checking
 */
export async function withDomainCheck<T>(request: Request, handler: (request: Request) => Promise<T>): Promise<T | Response> {
  if (!isAllowedDomain(request)) {
    return createAccessDeniedResponse()
  }

  return handler(request)
}
