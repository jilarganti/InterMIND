// api/search-images.js
import { searchImages } from "./AIChat/image-service.js"

/**
 * Нормализует поисковый запрос для стабильного кеширования
 * @param {string} query - Поисковый запрос
 * @returns {string} - Нормализованный запрос
 */
function normalizeQuery(query) {
  if (!query) return ""
  return query
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ")
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
}

// @ts-ignore
export async function GET(req) {
  console.log("🔵 SEARCH-API: Получен запрос на поиск изображений")

  // Извлекаем параметр запроса
  const url = new URL(req.url)
  const query = url.searchParams.get("q")

  if (!query) {
    console.error("🔴 SEARCH-API: Отсутствует параметр запроса 'q'")
    return new Response(JSON.stringify({ error: "Missing query parameter" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    })
  }

  // Нормализуем запрос для лучшего кеширования
  const normalizedQuery = normalizeQuery(query)
  console.log(`🔵 SEARCH-API: Поиск изображений для запроса "${query}" (нормализовано: "${normalizedQuery}")`)

  try {
    // Вызываем функцию поиска изображений
    const images = await searchImages(query, 1)
    console.log(`🔵 SEARCH-API: Найдено ${images.length} изображений`)

    // Настройки кеширования для Vercel Edge Network, работают и с Vitepress
    return new Response(JSON.stringify({ images }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        // Основные директивы кеширования:
        "Cache-Control": "public, max-age=86400, s-maxage=604800",
        // Дополнительные директивы для CDN:
        "CDN-Cache-Control": "public, max-age=604800",
        "Vercel-CDN-Cache-Control": "public, max-age=604800",
        // Для обеспечения актуальности данных:
        "stale-while-revalidate": "86400",
      },
    })
  } catch (error) {
    console.error("🔴 SEARCH-API: Ошибка при поиске изображений:", error)
    return new Response(
      JSON.stringify({
        error: "Error searching for images",
        details: String(error),
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-store, no-cache",
        },
      },
    )
  }
}
