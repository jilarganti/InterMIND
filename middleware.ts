export default function middleware(request) {
  const url = new URL(request.url)
  const response = new Response(null, {
    headers: { "x-middleware-next": "1" },
  })

  // Логирование всех запросов
  const logEntry = {
    timestamp: new Date().toISOString(),
    method: request.method,
    url: request.url,
    headers: Object.fromEntries(request.headers.entries()),
    ip: request.ip,
  }
  console.log("Request logged:", JSON.stringify(logEntry, null, 2))

  // Пропускаем статические файлы и API-маршруты
  if (shouldSkipRequest(url)) {
    return response
  }

  // Обработка UTM-параметров
  handleUtmParameters(url, response)

  // Автовыбор локали
  handleLocaleRedirect(request, url, response)

  return response
}

function shouldSkipRequest(url) {
  return (
    url.pathname.startsWith("/_next/") || url.pathname.startsWith("/api/") || url.pathname.match(/\.(ico|png|jpg|jpeg|gif|css|js|json|xml|txt|webmanifest)$/)
  )
}

function handleUtmParameters(url, response) {
  const utmParams = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"]
  const utmValues = {}

  utmParams.forEach((param) => {
    const value = url.searchParams.get(param)
    if (value) utmValues[param] = value
  })

  if (Object.keys(utmValues).length > 0) {
    response.headers.set("Set-Cookie", `nf_utm=${encodeURIComponent(JSON.stringify(utmValues))}; Max-Age=2592000; Path=/; SameSite=Lax`)
    console.log("UTM parameters saved:", utmValues)
  }
}

function handleLocaleRedirect(request, url, response) {
  // Проверяем user-agent на бота
  const userAgent = request.headers.get("user-agent") || ""
  if (/bot|googlebot|crawler|spider|robot|crawling/i.test(userAgent)) {
    console.log("Bot detected, skipping locale redirect")
    return
  }

  // Проверяем существующую куку
  const cookieHeader = request.headers.get("cookie") || ""
  if (cookieHeader.includes("nf_lang=")) {
    console.log("Locale cookie already exists")
    return
  }

  // Определяем язык браузера
  const supportedLangs = ["ar", "bn", "es", "fa", "fr", "hi", "id", "ja", "ko", "ml", "pt", "ru", "ta", "te", "tr", "uk", "ur", "vi", "zh"]
  const acceptLanguage = request.headers.get("accept-language") || "en"
  const browserLang = acceptLanguage.split(",")[0].split("-")[0].toLowerCase()

  // Если язык поддерживается и не английский
  if (supportedLangs.includes(browserLang)) {
    const currentPath = url.pathname
    const currentLang = currentPath.split("/")[1]

    if (!currentLang || !supportedLangs.includes(currentLang)) {
      const newPath = `/${browserLang}${currentPath === "/" ? "" : currentPath}`
      console.log(`Redirecting to locale: ${newPath}`)

      response.headers.set("Set-Cookie", `nf_lang=${browserLang}; Max-Age=31536000; Path=/; SameSite=Lax`)

      return Response.redirect(new URL(newPath, url.origin), 307)
    }
  }
}
