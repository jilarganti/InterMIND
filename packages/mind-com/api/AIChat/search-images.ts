/**
 * Search Images API Endpoint
 *
 * REST API endpoint for searching images using Google Custom Search.
 * Handles query processing, normalization, caching, and response optimization.
 * Provides efficient image search with memory caching and CDN optimization.
 *
 * Features:
 * - Query parameter extraction and validation
 * - Query normalization for consistent caching
 * - In-memory caching with TTL
 * - Configurable result limits (1-10)
 * - CDN-optimized headers
 * - Cache cleanup and management
 * - Error handling and logging
 */

import { searchImages } from "./image-service.js"

// Types
interface SearchResult {
  images: Array<{
    url: string
    title: string
  }>
}

interface CacheEntry {
  timestamp: number
  data: SearchResult
}

/**
 * Нормализует поисковый запрос для стабильного кеширования
 * @param query - Поисковый запрос
 * @returns Нормализованный запрос
 */
function normalizeQuery(query: string): string {
  if (!query) return ""
  return query
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ")
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
}

/**
 * Кеш запросов к API (только для текущей сессии)
 */
const memoryCache = new Map<string, CacheEntry>()

// Время жизни кеша в памяти - 1 час (в миллисекундах)
const CACHE_TTL = 60 * 60 * 1000

export async function GET(request: Request): Promise<Response> {
  console.log("🔵 SEARCH-API: Получен запрос на поиск изображений")

  // Извлекаем параметры запроса
  const url = new URL(request.url)
  const query = url.searchParams.get("q")
  const limit = parseInt(url.searchParams.get("limit") || "1", 10)

  // Ограничиваем максимальное значение limit до 10
  const validLimit = Math.min(Math.max(1, limit), 10)

  if (!query) {
    console.error("🔴 SEARCH-API: Отсутствует параметр запроса 'q'")
    return new Response(JSON.stringify({ error: "Missing query parameter" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    })
  }

  // Нормализуем запрос для лучшего кеширования
  const normalizedQuery = normalizeQuery(query)
  console.log(`🔵 SEARCH-API: Поиск изображений для запроса "${query}" (нормализовано: "${normalizedQuery}", limit: ${validLimit})`)

  // Пытаемся найти результат в кеше в памяти
  const now = Date.now()
  const cachedResult = memoryCache.get(`${normalizedQuery}_${validLimit}`) // Используем limit как часть ключа кеша

  if (cachedResult && now - cachedResult.timestamp < CACHE_TTL) {
    console.log(`🔵 SEARCH-API: Найдено в кеше, возвращаем кешированный результат для "${normalizedQuery}"`)
    return new Response(JSON.stringify(cachedResult.data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=86400, s-maxage=604800",
        "X-Cache": "HIT",
      },
    })
  }

  try {
    // Вызываем функцию поиска изображений с указанным лимитом
    const images = await searchImages(query, validLimit)
    console.log(`🔵 SEARCH-API: Найдено ${images.length} изображений`)

    // Формируем результат
    const result: SearchResult = { images }

    // Сохраняем в кеше в памяти
    memoryCache.set(`${normalizedQuery}_${validLimit}`, {
      timestamp: now,
      data: result,
    })

    // Очищаем старые записи из кеша, если их больше 100
    if (memoryCache.size > 100) {
      const keysToDelete: string[] = []

      memoryCache.forEach((value, key) => {
        if (now - value.timestamp > CACHE_TTL) {
          keysToDelete.push(key)
        }
      })

      keysToDelete.forEach((key) => memoryCache.delete(key))
    }

    // Настройки кеширования для Vercel Edge Network, работают и с Vitepress
    return new Response(JSON.stringify(result), {
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
        // Метка для отслеживания кеширования
        "X-Cache": "MISS",
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
