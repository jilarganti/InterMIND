/**
 * Тестовый скрипт для проверки поиска с изображениями
 */
import { Pinecone } from "@pinecone-database/pinecone"
import OpenAI from "openai"
import * as dotenv from "dotenv"

// Load environment variables
dotenv.config({ path: [".vercel/.env.development.local", ".env.local"] })

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

async function testImageSearch() {
  const query = "how translation works"
  console.log(`🔍 Searching for: "${query}"`)

  // Создаем эмбеддинг для запроса
  const queryEmbedding = await createEmbedding(query)

  // Ищем в Pinecone
  console.log(`📡 Отправляем запрос в Pinecone...`)
  const searchResponse = await index.query({
    vector: queryEmbedding,
    topK: 5,
    includeMetadata: true,
  })

  console.log(`📊 Получено ${searchResponse.matches?.length || 0} результатов`)

  // Проверяем результаты с изображениями
  const relevantResults = searchResponse.matches
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
        title: metadata.title || "",
        url: metadata.url || "",
        score: match.score || 0,
        hasImages: metadata.has_images === true,
        imageCount: metadata.image_count || 0,
        images: images,
      }
    }) || []

  console.log("\n=== РЕЗУЛЬТАТЫ ПОИСКА ===")
  relevantResults.forEach((result, index) => {
    console.log(`\n[${index + 1}] ${result.title}`)
    console.log(`Score: ${(result.score * 100).toFixed(0)}%`)
    console.log(`URL: ${result.url}`)
    
    if (result.hasImages) {
      console.log(`📸 Images: ${result.imageCount}`)
      result.images.forEach((img: any, imgIndex: number) => {
        console.log(`  ${imgIndex + 1}. ${img.alt} -> ${img.relativeUrl}`)
      })
    } else {
      console.log("📸 Images: none")
    }
  })
}

testImageSearch().catch(console.error)
