import type { ApiRequest, ApiResponse } from "./types/api"

export async function GET(request: ApiRequest) {
  console.log("GET request" + request)
  const response = await fetch("https://api.vercel.app/products")
  const products = await response.json()
  return new Response(JSON.stringify(products), {
    headers: { "Content-Type": "application/json" },
  })
}
