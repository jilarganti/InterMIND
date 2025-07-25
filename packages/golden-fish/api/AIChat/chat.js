// api/chat.js
import { anthropic } from "@ai-sdk/anthropic"
import { openai } from "@ai-sdk/openai"
import { groq } from "@ai-sdk/groq"
// import { deepseek } from "@ai-sdk/deepseek"
import { streamText } from "ai"
import { BUSINESS_PROMPT, FOLLOW_UP_PROMPT } from "../../docs/.vitepress/config/AIConfig.js"
import fs from "fs"
import fetch from "node-fetch"

// Allow streaming responses up to 30 seconds
export const maxDuration = 30
let llmsTxt

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

  // Читаем содержимое основного файла с метаданными
  llmsTxt = await getContent("docs/.vitepress/dist/llms.txt", "llmsTxt")
  llmsTxt = llmsTxt.replace(/\.md/g, "")

  try {
    const body = await req.json()
    let messages = body.messages || []
    const { mode, language } = body

    // Получаем режим запроса из body (по умолчанию 'default')
    // const mode = body.mode || "default"
    // Получаем язык из body (по умолчанию 'ru')

    // const language = body.language || "ru"

    console.log(`🔵 API: Получено ${messages.length} сообщений, режим: ${mode}, язык: ${language}`)

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

    console.log("🔵 API: Режим запроса: " + mode)

    if (mode === "followup") {
      systemPrompt = FOLLOW_UP_PROMPT
    }

    // Добавляем информацию о языке в системный промпт
    systemPrompt = `${llmsTxt} \n Пожалуйста, отвечай на языке: ${language}. \n` + systemPrompt

    // Простая проверка размера промпта
    const promptLength = systemPrompt.length
    console.log(`🔍 Размер системного промпта: ${promptLength} символов`)

    // Отправляем запрос к ИИ с выбранным системным промптом
    const result = streamText({
      model: anthropic("claude-3-5-haiku-20241022"), // Быстрая и эффективная модель
      system: systemPrompt,
      messages,
      maxTokens: 4000,
      temperature: 0.3,
      presencePenalty: 0.3,
      frequencyPenalty: 0.3,
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

async function getContent(filePath, tag) {
  let content

  // В локальной разработке (vercel dev) читаем файл напрямую из файловой системы
  // VERCEL_ENV может быть 'development' при использовании vercel dev
  const isLocalDev =
    process.env.VERCEL_ENV === "development" ||
    process.env.NODE_ENV === "development" ||
    !process.env.VERCEL_URL ||
    process.env.VERCEL_URL?.includes("localhost")

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
