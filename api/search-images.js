// api/search-images.js
import { searchImages } from "./AIChat/image-service.js"

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

  console.log(`🔵 SEARCH-API: Поиск изображений для запроса "${query}"`)

  try {
    // Вызываем функцию поиска изображений
    const images = await searchImages(query, 1)
    console.log(`🔵 SEARCH-API: Найдено ${images.length} изображений`)

    return new Response(JSON.stringify({ images }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
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
        headers: { "Content-Type": "application/json" },
      },
    )
  }
}
