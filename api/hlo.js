// @ts-check

/**
 * @param {string} request
 */
export async function GET(request) {
  console.log("GET request" + request)
  const response = await fetch("https://api.vercel.app/products")
  const products = await response.json()
  return Response.json(products)
}
