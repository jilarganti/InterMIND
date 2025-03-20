// api/chat.js
import { anthropic } from "@ai-sdk/anthropic"
import { streamText } from "ai"
import { BUSINESS_PROMPT, FOLLOW_UP_PROMPT } from "../.vitepress/config/AIConfig.js"

// Allow streaming responses up to 30 seconds
export const maxDuration = 30

/**
 * Функция для удаления тегов figure из текста сообщения
 * @param {string} content - содержимое сообщения
 * @returns {string} - очищенное содержимое
 */
function removeFigureTags(content) {
  if (typeof content !== "string") return content

  // Удаляем теги <figure> и </figure> и весь контент между ними
  return content.replace(/<figure\b[^>]*>[\s\S]*?<\/figure>/gi, "")
}

/**
 * Обработчик POST-запроса
 * @param {{ json: () => any; }} req
 */
export async function POST(req) {
  console.log("🔵 API: Получен запрос к /api/chat")

  try {
    const body = await req.json()
    let messages = body.messages || []

    // Получаем режим запроса из body (по умолчанию 'default')
    const mode = body.mode || "default"
    console.log(`🔵 API: Получено ${messages.length} сообщений, режим: ${mode}`)

    /**
     * Костыль для очистки сообщений от тегов figure. В норме теги не должны попадать в историю сообщений.
     */
    // @ts-ignore
    const cleanedMessages = messages.map((msg) => {
      if (msg.role === "assistant") {
        return {
          ...msg,
          content: removeFigureTags(msg.content),
        }
      }
      return msg
    })

    // Используем очищенные сообщения
    messages = cleanedMessages

    // Выбираем системный промпт в зависимости от режима
    let systemPrompt = BUSINESS_PROMPT // По умолчанию используем бизнес-промпт

    if (mode === "followup") {
      systemPrompt = FOLLOW_UP_PROMPT
      console.log("🔵 API: Используется промпт для уточняющих запросов")
    }

    // Отправляем запрос к ИИ с выбранным системным промптом
    const result = await streamText({
      // model: anthropic("claude-3-5-sonnet-20241022"),
      model: anthropic("claude-3-5-haiku-20241022"),
      // model: anthropic("claude-3-sonnet-20240229"),
      // model: anthropic("claude-3-haiku-20240307"),
      // model: groq("gemma2-9b-it"),
      // model: openai("gpt-4-turbo"),
      // model: openai("gpt-4o-mini"),
      // model: deepseek('deepseek-chat'),
      system: systemPrompt,
      messages,
      // maxTokens: 4000,
      temperature: 0.3,
      presencePenalty: 0.3,
      frequencyPenalty: 0.3,

      // stop: ["<figure>", "</figure>"],
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
