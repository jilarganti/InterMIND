/**
 * AI Chat API Endpoint
 *
 * Handles AI chat interactions using Anthropic Claude models.
 * Processes user messages, applies system prompts, and streams responses.
 * Supports multiple chat modes and languages with content filtering.
 *
 * Features:
 * - AI-powered conversation handling
 * - Multiple language support
 * - System prompt injection with business context
 * - Message history processing
 * - Content filtering (figure tags removal)
 * - Streaming responses
 * - Multiple chat modes (basic, followup)
 * - Development/production environment handling
 */

import { anthropic } from "@ai-sdk/anthropic"
import { streamText } from "ai"
import { prompts } from "../../docs/.vitepress/config/AIConfig.js"
import { semanticSearchTool } from "./semanticSearch.js"

interface ChatMessage {
  role: "user" | "assistant" | "system"
  content: string
}

interface ChatRequest {
  messages: ChatMessage[]
  mode?: "basic" | "followup"
  language?: string
}

/**
 * Обработчик POST-запроса
 */
export async function POST(request: Request): Promise<Response> {
  console.log("🔵 API: Получен запрос к /api/chat")

  try {
    const body = (await request.json()) as ChatRequest
    let messages = body.messages || []
    const { mode, language } = body

    console.log(`🔵 API: Получено ${messages.length} сообщений, режим: ${mode}, язык: ${language}`)

    /**
     * Костыль для очистки сообщений от тегов figure.
     * В норме теги не должны попадать в историю сообщений.
     */
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
    let systemPromptConfig = mode === "followup" ? prompts.followup : prompts.basic

    console.log("🔵 API: Режим запроса: " + mode)

    // Получаем текст промпта из конфигурации
    let systemPrompt = systemPromptConfig.name

    // Добавляем информацию о языке в системный промпт
    systemPrompt = `Пожалуйста, отвечай на языке: ${language}. \n` + systemPrompt

    // Простая проверка размера промпта
    const promptLength = systemPrompt.length
    console.log(`🔍 Размер системного промпта: ${promptLength} символов`)

    // Отправляем запрос к ИИ с выбранным системным промптом и инструментами
    const result = await streamText({
      model: anthropic("claude-3-5-sonnet-20240620"),
      messages: messages,
      system: systemPrompt,
      maxTokens: systemPromptConfig.maxTokens,
      temperature: systemPromptConfig.temperature,
      presencePenalty: systemPromptConfig.presencePenalty,
      frequencyPenalty: systemPromptConfig.frequencyPenalty,
      tools: {
        searchKnowledgeBase: semanticSearchTool,
      },
      toolChoice: "auto", // Позволяем модели решать, когда использовать инструмент
      maxSteps: 5, // Позволяем несколько вызовов инструментов
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

/**
 * Функция для удаления тегов figure из текста сообщения
 * @param content - содержимое сообщения
 * @returns очищенное содержимое
 */
function removeFigureTags(content: string): string {
  if (typeof content !== "string") return content

  // Удаляем теги <figure> и </figure> и весь контент между ними
  return content.replace(/<figure\b[^>]*>[\s\S]*?<\/figure>/gi, "")
}
