// api/chat.js
import { anthropic } from "@ai-sdk/anthropic"
import { streamText } from "ai"
import { BUSINESS_PROMPT } from "../.vitepress/config/AIConfig.js"

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

    // Получаем системный промпт из конфигурации
    const systemPrompt = BUSINESS_PROMPT

    // Отправляем запрос к ИИ с системным промптом
    const result = await streamText({
      model: anthropic("claude-3-5-sonnet-20241022"),
      // model: anthropic("claude-3-haiku-20240307"),
      system: systemPrompt,
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
