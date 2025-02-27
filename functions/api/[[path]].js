/**
 * Cloudflare Pages (front) -> Cloudflare Worker (poxy) -> Vercel API endpoint -> Pipedrive CRM
 *
 * 1. Cloudflare Pages (front) – packages/site/.vitepress/theme/composables/useFormSubmit.ts
 * 2. Cloudflare Worker (proxy) – packages/site/functions/api/[[path]].js
 * 3. Vercel API endpoint – packages/site/api/createContactAndLead.js
 */
export async function onRequest(context) {
  const url = new URL(context.request.url)
  const vercelUrl = `https://goldenfish-api.vercel.app${url.pathname}`

  try {
    const response = await fetch(vercelUrl, {
      method: context.request.method,
      headers: {
        ...context.request.headers,
        "Content-Type": "application/json",
      },
      body: context.request.body,
    })

    // Проверяем что получили валидный JSON
    const data = await response.json()

    return new Response(JSON.stringify(data), {
      status: response.status,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    })
  } catch (error) {
    console.error("Worker error:", error)
    return new Response(
      JSON.stringify({
        success: false,
        message: "Internal server error",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      },
    )
  }
}
