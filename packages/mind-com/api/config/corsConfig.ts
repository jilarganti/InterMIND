// Разрешенные домены для API endpoints
export const ALLOWED_DOMAINS = ["localhost", "mind.com", "inter.mind.com", "status.mind.com", "i14n.com"]

// Функция для проверки разрешенного домена
export function isAllowedDomain(request: Request): boolean {
  const origin = request.headers.get("origin")
  const referer = request.headers.get("referer")

  // Если нет origin и referer, разрешаем (для случаев прямых запросов)
  if (!origin && !referer) {
    return true
  }

  // Проверяем origin
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

  // Проверяем referer как fallback
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
