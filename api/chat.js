// api/chat.js
import { anthropic } from "@ai-sdk/anthropic"
import { streamText } from "ai"
import { getConfig } from "../.vitepress/config/AIConfig.js"

// Allow streaming responses up to 30 seconds
export const maxDuration = 30

/**
 * Обработчик POST-запроса
 * @param {Request} req - Объект запроса
 */
export async function POST(req) {
  console.log("🔵 API: Получен запрос к /api/chat")

  try {
    // Получаем URL объект из запроса для доступа к параметрам
    const url = new URL(req.url)

    // Получаем параметр mode из строки запроса
    // Например: /api/chat?mode=tourism
    const mode = url.searchParams.get("mode") || "default"

    // Получаем конфигурацию для указанного режима
    const config = getConfig(mode)
    console.log(`🔵 API: Выбран режим "${mode}" - ${config.description}`)
    console.log(`🔵 API: Используется модель: ${config.model}`)

    const body = await req.json()
    const messages = body.messages || []
    console.log(`🔵 API: Получено ${messages.length} сообщений`)

    // Логируем только последнее сообщение для отладки
    if (messages.length > 0) {
      const lastMessage = messages[messages.length - 1]
      console.log(`🔵 API: Последнее сообщение от ${lastMessage.role}: ${lastMessage.content.substring(0, 100)}...`)
    }

    console.log("🔵 API: Отправка запроса к AI...")

    // Отправляем запрос к ИИ с выбранной моделью и системным промптом
    const result = await streamText({
      model: anthropic(config.model),
      system: config.prompt,
      messages,
    })

    console.log("🔵 API: Получен ответ от AI, начинаем стриминг...")

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
 * Обработчик GET-запроса для получения доступных режимов
 */
export async function GET() {
  const { MODES } = await import("@config/AIConfig.js")

  // Формируем информацию о доступных режимах без раскрытия внутренних деталей
  const availableModes = Object.entries(MODES).map(([key, value]) => ({
    id: key,
    name: key.charAt(0).toUpperCase() + key.slice(1),
    description: value.description,
  }))

  return new Response(
    JSON.stringify({
      availableModes,
      defaultMode: "default",
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=3600",
      },
    },
  )
}
