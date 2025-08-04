/**
 * AI Chat API Endpoint
 *
 * Handles AI chat interactions using Anthropic Claude models.
 * Processes user messages, applies system prompts, and streams responses.
 * Supports multiple chat modes with automatic language detection.
 *
 * Features:
 * - AI-powered conversation handling
 * - Automatic language detection from user questions
 * - System prompt injection with business context
 * - Message history processing
 * - Streaming responses
 * - Multiple chat modes (basic, followup)
 * - Semantic search integration via tools
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
}

/**
 * Обработчик POST-запроса
 */
export async function POST(request: Request): Promise<Response> {
  try {
    const body = (await request.json()) as ChatRequest
    let messages = body.messages || []
    const { mode } = body

    console.log(`🔵 API: Получено ${messages.length} сообщений, режим: ${mode}`)

    // Отправляем запрос к ИИ с выбранным системным промптом и инструментами
    const result = streamText({
      model: anthropic(prompts[mode].model),
      messages: messages,
      system: prompts[mode].prompt,
      maxTokens: prompts[mode].maxTokens,
      temperature: prompts[mode].temperature,
      presencePenalty: prompts[mode].presencePenalty,
      frequencyPenalty: prompts[mode].frequencyPenalty,
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
