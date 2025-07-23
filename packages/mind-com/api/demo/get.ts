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
