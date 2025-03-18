// @ts-nocheck
// api/image-service.js
import fetch from "node-fetch"

// API-ключ для Google Custom Search
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY
const SEARCH_ENGINE_ID = process.env.SEARCH_ENGINE_ID

/**
 * Функция для поиска изображений
 * @param {string} query - Поисковый запрос
 * @param {number} [limit=1] - Количество результатов
 * @returns {Promise<Array<{url: string, title: string}>>} Массив найденных изображений
 */
export async function searchImages(query, limit = 1) {
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
    const url = `https://www.googleapis.com/customsearch/v1?key=${GOOGLE_API_KEY}&cx=${SEARCH_ENGINE_ID}&q=${encodeURIComponent(query)}&searchType=image&num=${limit}&safe=active&imgType=photo&imgSize=large`
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

    const data = await response.json()
    console.log(`🟢 IMAGE-SERVICE: Данные успешно получены от API`)

    // Проверка структуры данных
    if (!data) {
      console.error("🔴 IMAGE-SERVICE: Получены пустые данные от API")
      return []
    }

    if (typeof data !== "object") {
      console.error(`🔴 IMAGE-SERVICE: Неверный формат данных от API: ${typeof data}`)
      return []
    }

    // Логируем структуру ответа для отладки
    console.log(`🟢 IMAGE-SERVICE: Структура ответа API:`)
    console.log(`  - Ключи верхнего уровня: ${Object.keys(data).join(", ")}`)

    if (!("items" in data)) {
      console.warn(`🟡 IMAGE-SERVICE: В ответе API отсутствует ключ 'items'`)
      // Логируем первые 500 символов ответа для отладки
      console.log(`🟢 IMAGE-SERVICE: Начало ответа API: ${JSON.stringify(data).substring(0, 500)}...`)
      return []
    }

    if (!Array.isArray(data.items)) {
      console.error(`🔴 IMAGE-SERVICE: Поле 'items' не является массивом: ${typeof data.items}`)
      return []
    }

    console.log(`🟢 IMAGE-SERVICE: Найдено ${data.items.length} изображений`)

    // Формируем результат
    const results = data.items.map((item) => {
      if (!item.link) {
        console.warn(`🟡 IMAGE-SERVICE: У элемента отсутствует URL (link)`)
      }
      return {
        url: item.link || "",
        title: item.title || "",
      }
    })

    console.log(`🟢 IMAGE-SERVICE: Возвращаем ${results.length} изображений:`)
    // Логируем только первые несколько результатов
    results.slice(0, 2).forEach((item, index) => {
      console.log(`  - #${index + 1}: ${item.title.substring(0, 30)}... | URL: ${item.url.substring(0, 50)}...`)
    })

    return results
  } catch (error) {
    console.error(`🔴 IMAGE-SERVICE: Ошибка при поиске изображений:`, error)

    // Дополнительное логирование для сетевых ошибок
    if (error.code === "ENOTFOUND" || error.code === "ETIMEDOUT") {
      console.error(`🔴 IMAGE-SERVICE: Сетевая ошибка: ${error.code}. Проверьте соединение с интернетом.`)
    }

    if (error.response) {
      console.error(`🔴 IMAGE-SERVICE: Статус ответа: ${error.response.status}`)
      console.error(`🔴 IMAGE-SERVICE: Заголовки ответа:`, error.response.headers)
    }

    return []
  }
}
