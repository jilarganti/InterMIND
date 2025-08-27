/**
 * Скрипт для автоматического тестирования разных источников трафика
 *
 * Запуск: node --experimental-specifier-resolution=node --loader ts-node/esm __tests__/crm/test-traffic-sources.ts
 */

import fetch from "node-fetch"
import { v4 as uuidv4 } from "uuid"

// Конфигурация
const API_ENDPOINT = process.env.API_ENDPOINT || "http://localhost:5173/api/signUp"

// Интерфейсы для типизации данных
interface TrafficSource {
  name: string
  params?: Record<string, string>
  referrer?: string
  expectedSource: string
}

interface SignUpData {
  email: string
  name: string
  utm: {
    source: string
    campaign: string
  }
  params: {
    method?: string
    plan: string
  }
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
    params: { utm_source: "google_ads", utm_campaign: "winter_2025" },
    expectedSource: "google_ads[winter_2025]",
  },
  {
    name: "Google Ads Display",
    params: { utm_source: "google_ads", utm_campaign: "spring_promo" },
    expectedSource: "google_ads[spring_promo]",
  },
  {
    name: "Bing Ads",
    params: { utm_source: "bing", utm_campaign: "banking_uae" },
    expectedSource: "bing[banking_uae]",
  },

  // Социальные сети
  {
    name: "Facebook",
    params: { utm_source: "facebook", utm_campaign: "social_posts" },
    expectedSource: "facebook[social_posts]",
  },
  {
    name: "Instagram",
    params: { utm_source: "instagram", utm_campaign: "stories" },
    expectedSource: "instagram[stories]",
  },

  // Email маркетинг
  {
    name: "Newsletter",
    params: { utm_source: "newsletter", utm_campaign: "weekly_update" },
    expectedSource: "newsletter[weekly_update]",
  },

  // Только источник без кампании
  {
    name: "LinkedIn",
    params: { utm_source: "linkedin" },
    expectedSource: "linkedin",
  },

  // Только кампания без источника
  {
    name: "Campaign Only",
    params: { utm_campaign: "promo_2025" },
    expectedSource: "promo_2025",
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
function createTestSignUpData(sourceName: string): { email: string; name: string } {
  const testId = uuidv4().substring(0, 8)
  return {
    name: `[test] Traffic Source ${sourceName} - ${testId}`,
    email: `test.${testId}@example.com`,
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
    const baseData = createTestSignUpData(source.name)
    let expectedSource: string

    // Определяем источник на основе параметров или референса
    if (source.params) {
      // Имитируем UTM-параметры
      expectedSource = determineSourceFromUtm(source.params)
    } else if (source.referrer) {
      // Имитируем referrer
      expectedSource = determineSourceFromReferrer(source.referrer)
    } else {
      // Прямой трафик
      expectedSource = "Direct"
    }

    const signUpData: SignUpData = {
      ...baseData,
      utm: {
        source: source.params?.utm_source || expectedSource,
        campaign: source.params?.utm_campaign || "direct",
      },
      params: {
        method: undefined,
        plan: "Basic",
      },
    }

    console.log(`📤 Отправка данных с источником: ${signUpData.utm.source}[${signUpData.utm.campaign}]`)

    // Отправляем запрос к API
    const response = await fetch(API_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signUpData),
    })

    const responseData = (await response.json()) as ApiResponse

    // Проверяем результат
    const actualSource = `${signUpData.utm.source}${signUpData.utm.campaign !== "direct" ? `[${signUpData.utm.campaign}]` : ""}`

    if (responseData.success) {
      console.log(`✅ Успешно: ${source.name} → ${actualSource}`)
      if (actualSource === source.expectedSource) {
        console.log(`✅ Ожидаемый источник совпадает: ${source.expectedSource}`)
      } else {
        console.log(`⚠️ Ожидаемый источник НЕ совпадает: ожидался ${source.expectedSource}, получен ${actualSource}`)
      }
    } else {
      console.error(`❌ Ошибка: ${responseData.message}`)
    }

    return {
      source: source.name,
      success: responseData.success,
      leadSource: actualSource,
      expectedSource: source.expectedSource,
      match: actualSource === source.expectedSource,
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
  // Если есть utm_source, используем его
  if (params.utm_source) {
    let source = params.utm_source

    // Добавляем utm_campaign, если есть
    if (params.utm_campaign) {
      source += `[${params.utm_campaign}]`
    }

    return source
  }

  // Если есть только utm_campaign
  if (params.utm_campaign) {
    return params.utm_campaign
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
