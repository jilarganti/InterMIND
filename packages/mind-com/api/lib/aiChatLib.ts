/**
 * Semantic Search Tool с Upstash Vector
 * Использует Upstash Vector и OpenAI напрямую
 */

import { tool } from "ai"
import { z } from "zod"
import { Index } from "@upstash/vector"
import { Pinecone } from "@pinecone-database/pinecone"
import OpenAI from "openai"

// Выбор векторной БД: можно поменять на "pinecone"
const USE_VECTOR_DB = "upstash" as "upstash" | "pinecone"

// Проверка переменных окружения
if (!process.env.OPENAI_API_KEY) {
  console.error("❌ Отсутствует OPENAI_API_KEY!")
}

if (USE_VECTOR_DB === "upstash" && (!process.env.UPSTASH_VECTOR_REST_URL || !process.env.UPSTASH_VECTOR_REST_TOKEN)) {
  console.error("❌ Отсутствуют API ключи для Upstash!")
}

if (USE_VECTOR_DB === "pinecone" && (!process.env.PINECONE_API_KEY || !process.env.PINECONE_INDEX_NAME)) {
  console.error("❌ Отсутствуют API ключи для Pinecone!")
}

// Инициализация OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

// Инициализация Upstash Vector (только если используем)
const upstashIndex =
  USE_VECTOR_DB === "upstash"
    ? new Index({
        url: process.env.UPSTASH_VECTOR_REST_URL!,
        token: process.env.UPSTASH_VECTOR_REST_TOKEN!,
      })
    : null

// Инициализация Pinecone (только если используем)
const pinecone =
  USE_VECTOR_DB === "pinecone"
    ? new Pinecone({
        apiKey: process.env.PINECONE_API_KEY!,
      })
    : null

const pineconeIndex = pinecone ? pinecone.index(process.env.PINECONE_INDEX_NAME!) : null

// Функция создания эмбеддингов для Upstash Vector (384 измерения)
async function createUpstashEmbedding(text: string): Promise<number[]> {
  const response = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: text,
    dimensions: 384, // Upstash требует 384 размерности
  })
  return response.data[0].embedding
}

// Функция создания эмбеддингов для Pinecone (1536 измерений)
async function createPineconeEmbedding(text: string): Promise<number[]> {
  const response = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: text,
    dimensions: 1536, // Pinecone использует 1536 измерений
  })
  return response.data[0].embedding
}

// Функция для извлечения заголовка из чанка
function extractHeadingFromChunk(text: string): string {
  const lines = text.split("\n")

  for (const line of lines) {
    // Ищем H1 или H2 заголовок
    const headingMatch = line.match(/^#{1,2}\s+(.+)$/)
    if (headingMatch) {
      return headingMatch[1].trim()
    }
  }

  // Если заголовок не найден, возвращаем первые слова текста
  const words = text
    .replace(/[#*`\[\]()]/g, "")
    .trim()
    .split(/\s+/)
  return words.slice(0, 4).join(" ") + (words.length > 4 ? "..." : "")
}

// Инструмент семантического поиска
export const semanticSearchTool = tool({
  description: "Search for information in the InterMIND knowledge base about features, capabilities, pricing, and other documentation",
  parameters: z.object({
    query: z.string().describe("The search query to find relevant information"),
    limit: z.number().optional().default(5).describe("Maximum number of results to return"),
  }),
  execute: async ({ query, limit = 5 }) => {
    try {
      console.log(`🔍 Searching for: "${query}" using ${USE_VECTOR_DB}`)

      let searchResponse: any[]

      if (USE_VECTOR_DB === "upstash") {
        // Используем Upstash Vector
        const queryEmbedding = await createUpstashEmbedding(query)
        console.log(`📡 Отправляем запрос в Upstash Vector...`)

        if (!upstashIndex) {
          throw new Error("Upstash index не инициализирован")
        }

        searchResponse = await upstashIndex.query({
          vector: queryEmbedding,
          topK: limit,
          includeMetadata: true,
        })

        console.log(`📊 Получено ${searchResponse.length || 0} результатов от Upstash`)
      } else {
        // Используем Pinecone
        const queryEmbedding = await createPineconeEmbedding(query)
        console.log(`📡 Отправляем запрос в Pinecone...`)

        if (!pineconeIndex) {
          throw new Error("Pinecone index не инициализирован")
        }

        const pineconeResponse = await pineconeIndex.query({
          vector: queryEmbedding,
          topK: limit,
          includeMetadata: true,
        })

        searchResponse = pineconeResponse.matches || []
        console.log(`📊 Получено ${searchResponse.length || 0} результатов от Pinecone`)
      }

      // Обрабатываем результаты одинаково для обеих БД
      const relevantResults = searchResponse.map((result) => {
        const metadata = result.metadata || {}

        return {
          content: metadata.text || "",
          url: metadata.url || "",
          score: result.score || 0,
        }
      })

      console.log(`✅ Возвращаем ${relevantResults.length} результатов`)

      if (relevantResults.length === 0) {
        console.log(`⚠️ ${USE_VECTOR_DB} не вернул результатов`)
        return "No relevant information found for your query. The search did not return any results with sufficient relevance."
      }

      // Форматируем результаты
      const formattedResults = relevantResults
        .map((result, index) => {
          const headingTitle = extractHeadingFromChunk(String(result.content))
          const sourceText = `[${headingTitle}](${result.url})\nRelevance: ${(result.score * 100).toFixed(0)}%`
          return `[${index + 1}] ${result.content}\n${sourceText}`
        })
        .join("\n\n---\n\n")

      // Возвращаем результаты в виде строки для AI
      console.log(`💬 Возвращаем ${relevantResults.length} результатов AI`)
      console.log(`💬 ${formattedResults}`)
      return `Found ${relevantResults.length} relevant results from InterMIND documentation:\n\n${formattedResults}`
    } catch (error) {
      console.error("Search error:", error)
      const errorMessage = error instanceof Error ? error.message : "Unknown error"
      return `Failed to search the knowledge base: ${errorMessage}`
    }
  },
})
