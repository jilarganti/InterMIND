import { fetch, Response, Request } from "undici"

export async function GET(request: Request) {
  console.log("GET request" + request)
  const response: Response = await fetch("https://api.vercel.app/products")
  const products = await response.json()
  return new Response(JSON.stringify(products), {
    headers: { "Content-Type": "application/json" },
  })
}
