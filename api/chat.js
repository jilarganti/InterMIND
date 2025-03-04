// api/chat.js
import { anthropic } from "@ai-sdk/anthropic"
import { streamText } from "ai"

// Allow streaming responses up to 30 seconds
export const maxDuration = 30

/**
 * Обработчик POST-запроса
 * @param {{ json: () => any; }} req
 */
export async function POST(req) {
  console.log("🔵 API: Получен запрос к /api/chat")

  try {
    const body = await req.json()
    const messages = body.messages || []
    console.log(`🔵 API: Получено ${messages.length} сообщений`)

    // Логируем только последнее сообщение для отладки
    if (messages.length > 0) {
      console.log(`🔵 API: Последнее сообщение от ${messages[messages.length - 1].role}: ${messages[messages.length - 1].content.substring(0, 100)}...`)
    }

    console.log("🔵 API: Отправка запроса к AI...")

    // Отправляем запрос к ИИ с инструкцией по изображениям
    const result = await streamText({
      model: anthropic("claude-3-5-sonnet-20241022"),
      system: `Вы помощник, который отвечает наглядно, используя изображения где это уместно.
      Когда вы хотите проиллюстрировать ответ, укажите [NEEDS_IMAGE:поисковый_запрос] 
      в тексте. Например, если вы описываете Эйфелеву башню, добавьте 
      [NEEDS_IMAGE:Эйфелева башня Париж]. Используйте конкретные и четкие запросы 
      для изображений.`,
      messages,
    })

    console.log("🔵 API: Получен ответ от AI, начинаем стриминг...")

    // ВАЖНОЕ ИЗМЕНЕНИЕ: просто возвращаем стандартный ответ от streamText
    // Это позволит клиенту нормально получить поток данных
    return result.toDataStreamResponse()
  } catch (error) {
    console.error("🔴 API: Ошибка при обработке запроса:", error)

    return new Response(JSON.stringify({ error: String(error) }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}
