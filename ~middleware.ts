/**
 *
 * Концептуально этот код работает в корне вашего проекта, и он будет запускаться на каждом запросе к вашему приложению.
 * Но лучше использовть middleware vercel в самом крайнем случае, потому что работает плохо и ненадежно для vue-приложений.
 *
 */

/**
 * Vercel Edge Middleware for automatic language redirection
 *
 * This middleware automatically redirects users to their preferred language version
 * of the website based on their browser's Accept-Language header. It runs on every
 * request but has several optimizations:
 *
 * 1. Static files and API routes are excluded to improve performance
 * 2. Once the language cookie is set, no more redirects occur
 * 3. Only supported languages trigger a redirect
 * 4. English language users are never redirected
 *
 * The client-side code sets the language cookie after the redirect to remember
 * the user's language preference for future visits.
 */
export default function middleware(request) {
  const url = new URL(request.url)
  const response = new Response(null, { headers: { "x-middleware-next": "1" } })

  const supportedLanguages = ["ar", "bn", "es", "fa", "fr", "hi", "id", "ja", "ko", "ml", "pt", "ru", "ta", "te", "tr", "uk", "ur", "vi", "zh"]

  // Skip static files and API routes
  if (
    url.pathname.match(/\.(ico|png|jpg|jpeg|gif|css|js|json|xml|txt|webmanifest|avif|webp|woff2|svg)$/) ||
    url.pathname.startsWith("/api/") ||
    url.pathname.startsWith("/assets/") ||
    url.pathname.startsWith("/img/") ||
    url.pathname.startsWith("/video/") ||
    url.pathname.startsWith("/vp-icons")
  ) {
    return response
  }

  // Check if language cookie exists
  const cookieHeader = request.headers.get("cookie") || ""
  const hasCookie = cookieHeader.includes("nf_lang=")

  // If cookie exists, no redirect needed
  if (hasCookie) {
    return response
  }

  // Get current language from URL path
  const pathSegments = url.pathname.split("/").filter(Boolean)
  const currentLang = pathSegments[0] && supportedLanguages.includes(pathSegments[0]) ? pathSegments[0] : "en"

  // Determine browser language
  const acceptLanguage = request.headers.get("accept-language") || "en"
  const browserLang = acceptLanguage.split(",")[0].split("-")[0].toLowerCase()

  // Check if redirection is needed
  const isSupported = supportedLanguages.includes(browserLang)
  const needsRedirect = isSupported && currentLang !== browserLang && browserLang !== "en"

  if (needsRedirect) {
    // Clean the path from any language prefix
    const localeRegex = new RegExp(`^\/(?:en|${supportedLanguages.join("|")})\/|(\.[^/.]+)$`, "g")
    const cleanPath = url.pathname.replace(localeRegex, "")

    // Create the new path with user's preferred language
    const newPath = `/${browserLang}/${cleanPath}`.replace(/\/+/g, "/")

    // Perform the redirect
    return Response.redirect(new URL(newPath, url.origin), 307)
  }

  return response
}
