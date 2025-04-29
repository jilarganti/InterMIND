// api/chat.js
import { anthropic } from "@ai-sdk/anthropic"
import { openai } from "@ai-sdk/openai"
import { groq } from "@ai-sdk/groq"
import { deepseek } from "@ai-sdk/deepseek"
import { streamText } from "ai"
import { BUSINESS_PROMPT, FOLLOW_UP_PROMPT } from "../packages/golden-fish/docs/.vitepress/config/AIConfig.js"
import fs from "fs"
import fetch from "node-fetch"

// Allow streaming responses up to 30 seconds
export const maxDuration = 30
let llmsTxt, llmsFullTxt

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

  // Читаем содержимое файлов
  // Загружаем свежие данные
  llmsTxt = await getContent("packages/golden-fish/docs/.vitepress/dist/llms.txt", "llmsTxt")
  llmsTxt = llmsTxt.replace(/\.md/g, "")
  llmsFullTxt = await getContent("packages/golden-fish/docs/.vitepress/dist/llms-full.txt", "llmsFullTxt")

  // console.log("llms.txt content:", llmsTxt)

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
    systemPrompt = `${llmsTxt} \n ${llmsFullTxt} \n Пожалуйста, отвечай на языке: ${language}. \n` + systemPrompt

    // Отправляем запрос к ИИ с выбранным системным промптом
    const result = streamText({
      // model: anthropic("claude-3-5-sonnet-20241022"),
      // model: anthropic("claude-3-5-haiku-20241022"),
      model: anthropic("claude-3-sonnet-20240229"),
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

async function getContent(filePath, tag) {
  // Определяем окружение
  let content;
  
  try {
    if (process.env.VERCEL_ENV === "development" || process.env.NODE_ENV === "development") {
      // Local development - read from filesystem
      console.log(`🔵 Reading file from local filesystem: ${filePath}`);
      content = fs.readFileSync(filePath, "utf8");
    } else {
      // Production - fetch from URL
      // Use the current hostname rather than relying on environment variables
      const baseUrl = process.env.VERCEL_URL 
        ? `https://${process.env.VERCEL_URL}`
        : process.env.VERCEL_BRANCH_URL
        ? `https://${process.env.VERCEL_BRANCH_URL}`
        : "https://golden-fish.ae"; // Fallback to your main domain
      
      // Находим в пути "/dist/" и отсекаем всё до и включая
      let urlPath = filePath;
      const distIndex = filePath.indexOf("/dist/");

      if (distIndex !== -1) {
        urlPath = filePath.substring(distIndex + 6); // +6 чтобы отсечь и сам "/dist/"
      }

      const fullUrl = `${baseUrl}/${urlPath}`;
      console.log(`🔵 Fetching content from: ${fullUrl}`);
      
      const response = await fetch(fullUrl, {
        headers: {
          // Add potential headers that might help with authentication
          "Cache-Control": "no-cache",
          "User-Agent": "GoldenFishAPI/1.0",
        },
      });

      if (!response.ok) {
        console.error(`🔴 HTTP Error: ${response.status} ${response.statusText} when fetching ${fullUrl}`);
        
        // Try fallback URL without using environment variables
        const projectUrl = "https://golden-fish.ae";
        const fallbackUrl = `${projectUrl}/${urlPath}`;
        console.log(`🔵 Trying fallback URL: ${fallbackUrl}`);
        
        const fallbackResponse = await fetch(fallbackUrl);
        if (!fallbackResponse.ok) {
          throw new Error(`HTTP Error: ${response.status} при получении ${fullUrl} и fallback ${fallbackUrl}`);
        }
        
        content = await fallbackResponse.text();
      } else {
        content = await response.text();
      }
    }

    // Return content with tag
    return `<${tag}>\n${content}\n</${tag}>`;
  } catch (error) {
    console.error(`🔴 Error in getContent for ${filePath}:`, error);
    // Return empty placeholder with tag to avoid breaking the flow
    return `<${tag}>\n# Error loading content\n</${tag}>`;
  }
}
