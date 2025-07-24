// .vitepress/theme/utils/utm.ts
/**
 * Утилиты для работы с UTM-параметрами
 */

// Список всех UTM-параметров для отслеживания
const UTM_PARAMS = ["utm_source", "utm_campaign"]

// Префикс для ключей в локальном хранилище
const STORAGE_PREFIX = "gf_utm_"

// Срок хранения UTM-параметров (30 дней в миллисекундах)
const UTM_EXPIRY = 30 * 24 * 60 * 60 * 1000

/**
 * Извлекает UTM-параметры из URL
 */
export function extractUtmFromUrl(): Record<string, string> {
  if (typeof window === "undefined") return {}

  const urlParams = new URLSearchParams(window.location.search)
  const utmParams: Record<string, string> = {}

  UTM_PARAMS.forEach((param) => {
    const value = urlParams.get(param)
    if (value) {
      utmParams[param] = value
    }
  })

  return utmParams
}

/**
 * Сохраняет UTM-параметры в localStorage с временем жизни
 */
export function saveUtmParams(params: Record<string, string>): void {
  if (typeof window === "undefined" || !params || Object.keys(params).length === 0) return

  const expiryTime = Date.now() + UTM_EXPIRY

  Object.keys(params).forEach((key) => {
    const storageItem = {
      value: params[key],
      expiry: expiryTime,
    }
    localStorage.setItem(`${STORAGE_PREFIX}${key}`, JSON.stringify(storageItem))
  })

  // Сохраняем дату первого посещения, если её ещё нет
  if (!localStorage.getItem(`${STORAGE_PREFIX}first_visit`)) {
    localStorage.setItem(
      `${STORAGE_PREFIX}first_visit`,
      JSON.stringify({
        value: new Date().toISOString(),
        expiry: expiryTime,
      }),
    )
  }
}

/**
 * Получает сохраненные UTM-параметры из localStorage
 */
export function getSavedUtmParams(): Record<string, string> {
  if (typeof window === "undefined") return {}

  const params: Record<string, string> = {}
  const now = Date.now()

  // Получаем все ключи из localStorage
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)

    if (key && key.startsWith(STORAGE_PREFIX)) {
      try {
        const item = JSON.parse(localStorage.getItem(key) || "")

        // Проверяем срок действия
        if (item.expiry && item.expiry > now) {
          const paramName = key.replace(STORAGE_PREFIX, "")
          params[paramName] = item.value
        } else {
          // Удаляем просроченные параметры
          localStorage.removeItem(key)
        }
      } catch (e) {
        console.error(`Error parsing UTM param from localStorage: ${key}`, e)
      }
    }
  }

  return params
}

/**
 * Определяет источник трафика на основе UTM-параметров и referrer
 */
export function determineTrafficSource(): string {
  // Проверяем UTM-параметры
  const utmParams = getSavedUtmParams()

  // Если есть utm_source, используем его
  if (utmParams.utm_source) {
    let source = utmParams.utm_source

    // Добавляем utm_campaign, если есть
    if (utmParams.utm_campaign) {
      source += `[${utmParams.utm_campaign}]`
    }

    return source
  }

  // Если есть только utm_campaign
  if (utmParams.utm_campaign) {
    return utmParams.utm_campaign
  }

  // Если нет referrer - это прямой трафик
  const referrer = typeof document !== "undefined" ? document.referrer : ""
  if (!referrer) {
    return "Direct"
  }

  // Проверяем основные поисковые системы
  const searchEngines = ["google.", "bing.", "yahoo.", "yandex.", "baidu."]
  const isOrganic = searchEngines.some((engine) => referrer.includes(engine))

  return isOrganic ? "Organic" : "Referral"
}

/**
 * Получает UTM-параметры в формате для API
 */
export function getUtmForApi(): { source: string; campaign: string } {
  const utmParams = getSavedUtmParams()

  return {
    source: utmParams.utm_source || determineTrafficSource(),
    campaign: utmParams.utm_campaign || "direct",
  }
}

/**
 * Инициализирует отслеживание UTM-параметров
 * Должен вызываться при загрузке приложения
 */
export function initUtmTracking(): void {
  // if (typeof window === "undefined") return

  // Извлекаем параметры из URL
  const urlParams = extractUtmFromUrl()

  // Если есть параметры в URL, сохраняем их
  if (Object.keys(urlParams).length > 0) {
    saveUtmParams(urlParams)
  }
}
