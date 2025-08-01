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
import { openai } from "@ai-sdk/openai"
import { streamText } from "ai"
import { prompts } from "../../docs/.vitepress/config/AIConfig.js"
import * as fs from "fs"
import fetch from "node-fetch"

interface ChatMessage {
  role: "user" | "assistant" | "system"
  content: string
}

interface ChatRequest {
  messages: ChatMessage[]
  mode?: "basic" | "followup"
  language?: string
}

let llmsTxt: string

/**
 * Обработчик POST-запроса
 */
export async function POST(request: Request): Promise<Response> {
  console.log("🔵 API: Получен запрос к /api/chat")

  try {
    // Читаем содержимое основного файла с метаданными
    llmsTxt = await getContent("docs/.vitepress/dist/llms.txt", "llmsTxt")
    llmsTxt = llmsTxt.replace(/\.md/g, "")

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
    systemPrompt = `${llmsTxt} \n Пожалуйста, отвечай на языке: ${language}. \n` + systemPrompt

    // Простая проверка размера промпта
    const promptLength = systemPrompt.length
    console.log(`🔍 Размер системного промпта: ${promptLength} символов`)

    // Отправляем запрос к ИИ с выбранным системным промптом
    const result = streamText({
      model: anthropic(systemPromptConfig.model), // Используем модель из конфигурации
      system: systemPrompt,
      messages,
      maxTokens: systemPromptConfig.maxTokens,
      temperature: systemPromptConfig.temperature,
      presencePenalty: systemPromptConfig.presencePenalty,
      frequencyPenalty: systemPromptConfig.frequencyPenalty,
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
 * Получение контента файла в зависимости от окружения
 * @param filePath - путь к файлу
 * @param tag - тег для обертки контента
 * @returns содержимое файла с тегом
 */
async function getContent(filePath: string, tag: string): Promise<string> {
  let content: string

  // В локальной разработке (vercel dev) читаем файл напрямую из файловой системы
  const isLocalDev = process.env.VERCEL_URL?.includes("localhost")

  if (isLocalDev) {
    content = fs.readFileSync(filePath, "utf8")
  } else {
    // Определяем окружение для production/preview
    const baseUrl = "https://" + (process.env.VERCEL_URL || process.env.VERCEL_BRANCH_URL)
    // Находим в пути "/dist/" и отсекаем всё до и включая
    let urlPath = filePath
    const distIndex = filePath.indexOf("/dist/")

    if (distIndex !== -1) {
      urlPath = filePath.substring(distIndex + 6) // +6 чтобы отсечь и сам "/dist/"
    }

    const fullUrl = `${baseUrl}/${urlPath}`
    console.log("🔵 API: Получаем контент по URL:", fullUrl)
    const response = await fetch(fullUrl, {
      headers: {
        "x-vercel-protection-bypass": process.env.VERCEL_AUTOMATION_BYPASS_SECRET || "",
      },
    })

    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status} при получении ${fullUrl}`)
    }

    content = await response.text()
  }

  // Возвращаем контент с тегом
  return `<${tag}>\n${content}\n</${tag}>`
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
