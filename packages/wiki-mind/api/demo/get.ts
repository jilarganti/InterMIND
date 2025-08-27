/**
 * Demo API Endpoint
 *
 * Demonstration endpoint that fetches product data from Vercel API.
 * Protected by domain validation middleware and serves as an example
 * of how to implement secure API endpoints with external data fetching.
 *
 * Features:
 * - Domain-protected access
 * - External API integration
 * - JSON response formatting
 * - Error handling
 */

import { withDomainCheck } from "../lib/domainMiddleware.js"

export async function GET(request: Request) {
  return withDomainCheck(request, async (request) => {
    const response: Response = await fetch("https://api.vercel.app/products")
    const products = await response.json()
    return new Response(JSON.stringify(products), {
      headers: { "Content-Type": "application/json" },
    })
  })
}
