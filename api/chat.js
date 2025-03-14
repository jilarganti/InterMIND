// api/chat.js
import { anthropic } from "@ai-sdk/anthropic"
import { streamText } from "ai"
import { BUSINESS_PROMPT, FOLLOW_UP_PROMPT } from "../.vitepress/config/AIConfig.js"

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

    // Получаем режим запроса из body (по умолчанию 'default')
    const mode = body.mode || "default"
    console.log(`🔵 API: Получено ${messages.length} сообщений, режим: ${mode}`)

    // Логируем только последнее сообщение для отладки
    if (messages.length > 0) {
      console.log(`🔵 API: Последнее сообщение от ${messages[messages.length - 1].role}: ${messages[messages.length - 1].content.substring(0, 100)}...`)
    }

    console.log(`🔵 API: Отправка запроса к AI в режиме ${mode}...`)

    // Выбираем системный промпт в зависимости от режима
    let systemPrompt = BUSINESS_PROMPT // По умолчанию используем бизнес-промпт

    if (mode === "followup") {
      systemPrompt = FOLLOW_UP_PROMPT
      console.log("🔵 API: Используется промпт для уточняющих запросов")
    }

    // Отправляем запрос к ИИ с выбранным системным промптом
    const result = await streamText({
      model: anthropic("claude-3-5-sonnet-20241022"),
      // model: anthropic("claude-3-haiku-20240307"),
      system: systemPrompt,
      messages,
      maxTokens: 4000, // Устанавливаем явное ограничение токенов
    })

    console.log("🔵 API: Получен ответ от AI, начинаем стриминг...")

    // Возвращаем стандартный ответ от streamText
    return result.toDataStreamResponse()
  } catch (error) {
    console.error("🔴 API: Ошибка при обработке запроса:", error)

    return new Response(JSON.stringify({ error: String(error) }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}
