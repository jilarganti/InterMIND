/**
 * Тест полной интеграции AI чата с изображениями
 */
import { anthropic } from "@ai-sdk/anthropic"
import { generateText } from "ai"
import { prompts } from "../docs/.vitepress/config/AIConfig.js"
import { semanticSearchTool } from "../api/lib/aiChatLib.js"
import * as dotenv from "dotenv"

// Load environment variables
dotenv.config({ path: [".vercel/.env.development.local", ".env.local"] })

async function testChatWithImages() {
  try {
    console.log("🤖 Тестируем AI чат с изображениями...")
    
    const testMessage = "How does real-time translation work in InterMind?"
    
    console.log(`📝 Вопрос: ${testMessage}`)
    console.log("🔍 Отправляем запрос AI...")
    
    const result = await generateText({
      model: anthropic("claude-3-5-haiku-20241022"),
      messages: [
        {
          role: "user",
          content: testMessage
        }
      ],
      system: prompts.basic.prompt,
      maxTokens: prompts.basic.maxTokens,
      temperature: prompts.basic.temperature,
      tools: {
        searchKnowledgeBase: semanticSearchTool,
      },
      toolChoice: "auto",
      maxSteps: 5,
    })
    
    console.log("\n=== ОТВЕТ AI ===")
    console.log(result.text)
    
    console.log("\n=== ИНСТРУМЕНТЫ ===")
    if (result.toolResults && result.toolResults.length > 0) {
      result.toolResults.forEach((toolResult, index) => {
        console.log(`\nТool ${index + 1}:`)
        console.log(`Name: ${toolResult.toolName}`)
        console.log(`Args: ${JSON.stringify(toolResult.args)}`)
        console.log(`Result: ${toolResult.result}`)
      })
    } else {
      console.log("Инструменты не использовались")
    }
    
  } catch (error) {
    console.error("❌ Ошибка:", error)
  }
}

testChatWithImages()
