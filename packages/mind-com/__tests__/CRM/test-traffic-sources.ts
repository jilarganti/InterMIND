/**
 * Скрипт для автоматического тестирования разных источников трафика
 *
 * Запуск: node --experimental-specifier-resolution=node --loader ts-node/esm __tests__/crm/test-traffic-sources.ts
 */

import fetch from "node-fetch"
import { v4 as uuidv4 } from "uuid"

// Конфигурация
const API_ENDPOINT = process.env.API_ENDPOINT || "http://localhost:5173/api/createContactAndLead"
const SITE_ORIGIN_ID = process.env.SITE_ORIGIN_ID || "test-origin-id"

// Интерфейсы для типизации данных
interface TrafficSource {
  name: string
  params?: Record<string, string>
  referrer?: string
  expectedSource: string
}

interface FormData {
  name: string
  email: string
  webSite: string
  category: string
  message: string
  channel: string
  channelId: string
  originId: string
  leadSource: string
  countryCode: string
  countryName: string
}

interface ApiResponse {
  success: boolean
  message?: string
}

interface TestResult {
  source: string
  success: boolean
  leadSource?: string
  expectedSource?: string
  match?: boolean
  error?: string
}

// Список тестовых источников трафика
const trafficSources: TrafficSource[] = [
  // Контекстная реклама
  {
    name: "Google Ads Search",
    params: { utm_source: "google_ads", utm_medium: "cpc", utm_campaign: "winter_2025" },
    expectedSource: "ADS[winter_2025]",
  },
  {
    name: "Google Ads Display",
    params: { utm_source: "google_ads", utm_medium: "display", utm_campaign: "spring_promo" },
    expectedSource: "ADS[spring_promo]",
  },
  {
    name: "Bing Ads",
    params: { utm_source: "bing", utm_medium: "cpc", utm_campaign: "banking_uae" },
    expectedSource: "ADS[banking_uae]",
  },

  // Социальные сети
  {
    name: "Facebook",
    params: { utm_source: "facebook", utm_medium: "social", utm_campaign: "social_posts" },
    expectedSource: "social_posts[social]",
  },
  {
    name: "Instagram",
    params: { utm_source: "instagram", utm_medium: "social", utm_campaign: "stories" },
    expectedSource: "stories[social]",
  },

  // Email маркетинг
  {
    name: "Newsletter",
    params: { utm_source: "newsletter", utm_medium: "email", utm_campaign: "weekly_update" },
    expectedSource: "weekly_update[email]",
  },

  // Органический поиск (через референсы)
  {
    name: "Google Organic",
    referrer: "https://www.google.com/search?q=golden+visa+uae",
    expectedSource: "Organic",
  },
  {
    name: "Bing Organic",
    referrer: "https://www.bing.com/search?q=business+setup+dubai",
    expectedSource: "Organic",
  },

  // Реферальный трафик
  {
    name: "Partner Website",
    referrer: "https://partner-website.com/recommended-services",
    expectedSource: "Referral",
  },

  // Прямой трафик
  {
    name: "Direct Traffic",
    expectedSource: "Direct",
  },
]

/**
 * Создает тестовые данные для формы
 * @param sourceName - Название источника трафика
 * @returns Объект с данными формы
 */
function createTestFormData(sourceName: string): Omit<FormData, "leadSource"> {
  const testId = uuidv4().substring(0, 8)
  return {
    name: `[test] Traffic Source ${sourceName} - ${testId}`,
    email: `test.${testId}@example.com`,
    webSite: "https://companyname.com/",
    category: "Contacts",
    message: `Автоматический тест источника трафика: ${sourceName}`,
    channel: "Web forms",
    channelId: "Test Script",
    originId: SITE_ORIGIN_ID,
    countryCode: "US",
    countryName: "United States",
  }
}

/**
 * Отправляет тестовую заявку с имитацией источника трафика
 * @param source - Информация об источнике трафика
 * @returns Результат запроса
 */
async function sendTestLead(source: TrafficSource): Promise<TestResult> {
  try {
    console.log(`🔵 Тестирование источника: ${source.name}`)

    // Создаем данные для формы
    const formDataBase = createTestFormData(source.name)
    let leadSource: string

    // Определяем источник на основе параметров или референса
    if (source.params) {
      // Имитируем UTM-параметры
      leadSource = determineSourceFromUtm(source.params)
    } else if (source.referrer) {
      // Имитируем referrer
      leadSource = determineSourceFromReferrer(source.referrer)
    } else {
      // Прямой трафик
      leadSource = "Direct"
    }

    const formData: FormData = {
      ...formDataBase,
      leadSource,
    }

    console.log(`📤 Отправка данных с источником: ${formData.leadSource}`)

    // Отправляем запрос к API
    const response = await fetch(API_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })

    const responseData = (await response.json()) as ApiResponse

    // Проверяем результат
    if (responseData.success) {
      console.log(`✅ Успешно: ${source.name} → ${formData.leadSource}`)
      if (formData.leadSource === source.expectedSource) {
        console.log(`✅ Ожидаемый источник совпадает: ${source.expectedSource}`)
      } else {
        console.log(`⚠️ Ожидаемый источник НЕ совпадает: ожидался ${source.expectedSource}, получен ${formData.leadSource}`)
      }
    } else {
      console.error(`❌ Ошибка: ${responseData.message}`)
    }

    return {
      source: source.name,
      success: responseData.success,
      leadSource: formData.leadSource,
      expectedSource: source.expectedSource,
      match: formData.leadSource === source.expectedSource,
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error)
    console.error(`❌ Исключение при тестировании ${source.name}:`, errorMessage)
    return {
      source: source.name,
      success: false,
      error: errorMessage,
    }
  }
}

/**
 * Имитирует логику определения источника из UTM-параметров
 * @param params - UTM-параметры
 * @returns Источник трафика
 */
function determineSourceFromUtm(params: Record<string, string>): string {
  // Проверяем на контекстную рекламу
  if (params.utm_source === "google_ads" || params.utm_medium === "cpc") {
    if (params.utm_campaign) {
      return `ADS[${params.utm_campaign}]`
    }
    return "ADS"
  }

  // Другие источники с кампаниями
  if (params.utm_campaign) {
    if (params.utm_medium) {
      return `${params.utm_campaign}[${params.utm_medium}]`
    }
    return params.utm_campaign
  }

  // Если есть только utm_source
  if (params.utm_source) {
    return params.utm_source
  }

  return "Unknown"
}

/**
 * Имитирует логику определения источника из referrer
 * @param referrer - URL референса
 * @returns Источник трафика
 */
function determineSourceFromReferrer(referrer: string): string {
  // Проверяем поисковые системы
  const searchEngines = ["google.", "bing.", "yahoo.", "yandex.", "baidu."]
  const isOrganic = searchEngines.some((engine) => referrer.includes(engine))

  return isOrganic ? "Organic" : "Referral"
}

/**
 * Запускает тестирование всех источников трафика
 */
async function runTests(): Promise<void> {
  console.log("🚀 Запуск тестирования источников трафика")

  const results: TestResult[] = []
  const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

  // Последовательное тестирование с задержкой
  for (const source of trafficSources) {
    const result = await sendTestLead(source)
    results.push(result)

    // Задержка между запросами, чтобы не перегружать API
    await delay(2000)
  }

  // Выводим общий отчет
  console.log("\n📊 Отчет по тестированию:")
  console.log("------------------------")

  let successCount = 0
  let matchCount = 0

  results.forEach((result) => {
    const statusIcon = result.success ? "✅" : "❌"
    console.log(`${statusIcon} ${result.source}: ${result.success ? "успешно" : "ошибка"}`)

    if (result.success) {
      successCount++
      const matchIcon = result.match ? "✓" : "✗"
      console.log(`   Источник: ${result.leadSource} (ожидался: ${result.expectedSource}) ${matchIcon}`)

      if (result.match) matchCount++
    } else if (result.error) {
      console.log(`   Ошибка: ${result.error}`)
    }
  })

  console.log("------------------------")
  console.log(`Итого: ${successCount}/${results.length} успешных запросов, ${matchCount}/${successCount} корректных источников`)
  console.log("\n⚠️ ВАЖНО: Проверьте лиды в CRM, чтобы убедиться, что они были успешно созданы и имеют правильные источники!")
}

// Запускаем тесты
runTests().catch((error) => {
  console.error("❌ Критическая ошибка:", error)
  process.exit(1)
})
