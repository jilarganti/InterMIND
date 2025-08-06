/**
 * Semantic Search Tool без LangChain
 * Использует Pinecone и OpenAI напрямую
 */

import { tool } from "ai"
import { z } from "zod"
import { Pinecone } from "@pinecone-database/pinecone"
import OpenAI from "openai"

if (!process.env.PINECONE_API_KEY || !process.env.OPENAI_API_KEY) console.error("❌ Отсутствуют API ключи!")

const pinecone = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY,
})

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

// Получаем индекс
const index = pinecone.index(process.env.PINECONE_INDEX_NAME)

// Функция для создания эмбеддингов
async function createEmbedding(text: string): Promise<number[]> {
  const response = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: text,
  })
  return response.data[0].embedding
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
      console.log(`🔍 Searching for: "${query}"`)

      // Создаем эмбеддинг для запроса
      const queryEmbedding = await createEmbedding(query)

      // Ищем в Pinecone
      console.log(`📡 Отправляем запрос в Pinecone...`)
      const searchResponse = await index.query({
        vector: queryEmbedding,
        topK: limit,
        includeMetadata: true,
      })

      console.log(`📊 Получено ${searchResponse.matches?.length || 0} результатов от Pinecone`)

      // Фильтруем результаты по релевантности
      const relevantResults =
        searchResponse.matches
          ?.filter((match) => (match.score || 0) > 0.4)
          .map((match) => {
            const metadata = match.metadata || {}
            
            // Parse images if available
            let images: any[] = []
            if (metadata.images) {
              try {
                images = JSON.parse(metadata.images as string)
              } catch (e) {
                console.warn("Failed to parse images metadata:", e)
              }
            }
            
            return {
              content: metadata.text || "",
              url: metadata.url || "",
              title: metadata.title || "",
              category: metadata.category || "",
              source: metadata.source_file || "InterMIND Documentation",
              score: match.score || 0,
              images: images,
              hasImages: metadata.has_images === true,
              imageCount: metadata.image_count || 0,
              firstImageUrl: metadata.first_image_url || null,
              firstImageAlt: metadata.first_image_alt || null,
            }
          }) || []

      console.log(`✅ После фильтрации (>40%): ${relevantResults.length} релевантных результатов`)

      if (relevantResults.length === 0) {
        console.log("⚠️ Нет результатов с релевантностью выше 40%")
        return "No relevant information found for your query. The search did not return any results with sufficient relevance."
      }

      // Форматируем результаты с URL-ссылками и изображениями
      const formattedResults = relevantResults
        .map((result, index) => {
          const urlText = result.url ? `\nLink: ${result.url}` : ""
          const titleText = result.title ? `\nTitle: ${result.title}` : ""
          const categoryText = result.category ? `\nCategory: ${result.category}` : ""
          
          // Add image information if available
          let imageText = ""
          if (result.hasImages && result.images.length > 0) {
            const imageList = result.images.map((img: any) => 
              `![${img.alt || 'Diagram'}](${img.relativeUrl})`
            ).join('\n')
            imageText = `\nImages:\n${imageList}`
          }

          return `[${index + 1}] ${result.content}${titleText}${urlText}${categoryText}${imageText}\n(Source: ${result.source}, Relevance: ${(result.score * 100).toFixed(0)}%)`
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
