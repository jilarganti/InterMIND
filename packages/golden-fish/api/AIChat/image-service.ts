/**
 * Image Search Service API
 *
 * Provides image search functionality using Google Custom Search Engine.
 * Searches for relevant images based on query strings with configurable limits.
 * Handles API key validation, error handling, and response processing.
 *
 * Features:
 * - Google Custom Search Engine integration
 * - Query normalization and encoding
 * - Configurable result limits (1-10 images)
 * - Image filtering (photo, large size, safe search)
 * - Comprehensive error handling
 * - Performance monitoring
 * - Detailed logging
 */

import fetch from "node-fetch"

// Types
interface SearchImage {
  url: string
  title: string
}

interface GoogleSearchResponse {
  items?: Array<{
    link: string
    title: string
    snippet?: string
  }>
  searchInformation?: {
    totalResults: string
  }
}

// API-ключ для Google Custom Search
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY
const SEARCH_ENGINE_ID = process.env.SEARCH_ENGINE_ID

/**
 * Функция для поиска изображений
 * @param query - Поисковый запрос
 * @param limit - Количество результатов (по умолчанию 1)
 * @returns Массив найденных изображений
 */
export async function searchImages(query: string, limit: number = 1): Promise<SearchImage[]> {
  console.log(`🟢 IMAGE-SERVICE: Начинаем поиск изображений для запроса "${query}" (лимит: ${limit})`)

  // Проверяем наличие ключей
  if (!GOOGLE_API_KEY) {
    console.error("🔴 IMAGE-SERVICE: Отсутствует GOOGLE_API_KEY в переменных окружения")
    return []
  }

  if (!SEARCH_ENGINE_ID) {
    console.error("🔴 IMAGE-SERVICE: Отсутствует SEARCH_ENGINE_ID в переменных окружения")
    return []
  }

  console.log(`🟢 IMAGE-SERVICE: Ключи API настроены корректно`)

  try {
    // Ограничиваем запрашиваемое количество изображений до 10
    const validLimit = Math.min(Math.max(1, limit), 10)

    const url = `https://www.googleapis.com/customsearch/v1?key=${GOOGLE_API_KEY}&cx=${SEARCH_ENGINE_ID}&q=${encodeURIComponent(query)}&searchType=image&num=${validLimit}&safe=active&imgType=photo&imgSize=large`
    console.log(`🟢 IMAGE-SERVICE: Отправляем запрос к Google CSE API: ${url.substring(0, url.indexOf("key=") + 5)}...HIDDEN...`)

    const startTime = Date.now()
    const response = await fetch(url)
    const responseTime = Date.now() - startTime

    console.log(`🟢 IMAGE-SERVICE: Получен ответ от Google CSE API, статус: ${response.status}, время: ${responseTime}ms`)

    if (!response.ok) {
      const errorBody = await response.text()
      console.error(`🔴 IMAGE-SERVICE: Ошибка ответа Google CSE API: ${response.status} ${response.statusText}`)
      console.error(`🔴 IMAGE-SERVICE: Тело ошибки: ${errorBody.substring(0, 500)}...`)
      return []
    }

    const data = (await response.json()) as GoogleSearchResponse
    console.log(`🟢 IMAGE-SERVICE: Данные успешно получены от API`)

    // Проверка структуры данных
    if (!data) {
      console.error("🔴 IMAGE-SERVICE: Получены пустые данные от API")
      return []
    }

    if (typeof data !== "object") {
      console.error("🔴 IMAGE-SERVICE: Неверный формат данных от API")
      return []
    }

    // Логируем структуру ответа
    console.log("🟢 IMAGE-SERVICE: Структура ответа API:")
    console.log(`  - Ключи верхнего уровня: ${Object.keys(data).join(", ")}`)

    if (!data.items || !Array.isArray(data.items)) {
      console.log("🟡 IMAGE-SERVICE: Поле 'items' отсутствует или не является массивом")
      return []
    }

    const images: SearchImage[] = data.items.map((item) => ({
      url: item.link,
      title: item.title || "Без названия",
    }))

    console.log(`🟢 IMAGE-SERVICE: Найдено ${images.length} изображений`)

    if (images.length > 0) {
      console.log("🟢 IMAGE-SERVICE: Возвращаем " + images.length + " изображений:")
      images.forEach((img, index) => {
        const truncatedTitle = img.title.length > 30 ? img.title.substring(0, 30) + "..." : img.title
        const truncatedUrl = img.url.length > 50 ? img.url.substring(0, 50) + "..." : img.url
        console.log(`  - #${index + 1}: ${truncatedTitle} | URL: ${truncatedUrl}`)
      })
    }

    return images
  } catch (error) {
    console.error("🔴 IMAGE-SERVICE: Ошибка при поиске изображений:", error)
    return []
  }
}
