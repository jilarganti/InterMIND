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
import { prompts } from "../docs/.vitepress/config/AIConfig.js"
import { semanticSearchTool } from "./lib/aiChatLib.js"

interface ChatMessage {
  role: "user" | "assistant" | "system"
  content: string
}

interface ChatRequest {
  messages: ChatMessage[]
  mode?: "basic" | "followup"
  language?: string // Локаль текущей страницы (например, "ru", "en", "ar")
}

/**
 * Обработчик POST-запроса
 */
export async function POST(request: Request): Promise<Response> {
  try {
    const body = (await request.json()) as ChatRequest
    let messages = body.messages || []
    const { mode = "basic", language = "en" } = body

    console.log(`🔵 API: Получено ${messages.length} сообщений, режим: ${mode}, язык: ${language}`)

    let stepCount = 0

    // Заменяем плейсхолдер {{LOCALE}} в системном промпте на реальную локаль
    const systemPrompt = prompts[mode].prompt.replace(/\{\{LOCALE\}\}/g, language)

    console.log(`🌍 API: Системный промпт подготовлен для локали: ${language}`)
    console.log(`📝 API: Первые 200 символов промпта: ${systemPrompt.substring(0, 200)}...`)

    // Отправляем запрос к ИИ с выбранным системным промптом и инструментами
    const result = streamText({
      // @ts-ignore - type compatibility issue between ai@4.x SDK versions
      model: anthropic(prompts[mode].model),
      messages: messages,
      system: systemPrompt,
      maxTokens: prompts[mode].maxTokens,
      temperature: prompts[mode].temperature,
      presencePenalty: prompts[mode].presencePenalty,
      frequencyPenalty: prompts[mode].frequencyPenalty,
      tools: {
        searchKnowledgeBase: semanticSearchTool,
      },
      toolChoice: "auto",
      maxSteps: 3,
      onStepFinish: ({ text, toolCalls, toolResults, finishReason, usage }) => {
        stepCount++
        console.log(`🔧 Шаг ${stepCount}:`, {
          hasText: !!text,
          textLength: text?.length || 0,
          textPreview: text ? text.substring(0, 100) + "..." : "нет текста",
          toolCallsCount: toolCalls?.length || 0,
          toolResultsCount: toolResults?.length || 0,
          finishReason,
          tokens: usage.totalTokens,
        })
      },
      onFinish: ({ text, usage }) => {
        console.log(`✅ Стриминг завершен. Токенов: ${usage.totalTokens}`)
        console.log(`📝 Финальный текст: ${text ? text.substring(0, 200) + "..." : "НЕТ ТЕКСТА!"}`)
      },
      abortSignal: request.signal,
    })

    console.log("🔵 API: Получен ответ от AI, начинаем стриминг...")

    // Возвращаем data stream ответ (поддерживает tool calls в v4)
    return result.toDataStreamResponse({
      headers: {
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
        "X-Content-Type-Options": "nosniff",
      },
    })
  } catch (error) {
    console.error("🔴 API: Ошибка при обработке запроса:", error)

    // Различаем типы ошибок
    const errorMessage = error instanceof Error ? error.message : String(error)
    const errorType = error instanceof Error ? error.constructor.name : "UnknownError"

    console.error(`🔴 Тип ошибки: ${errorType}, сообщение: ${errorMessage}`)

    return new Response(
      JSON.stringify({
        error: errorMessage,
        type: errorType,
        timestamp: new Date().toISOString(),
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    )
  }
}
