/**
 * Простой тест проверки метаданных векторов
 */
import { Pinecone } from "@pinecone-database/pinecone"
import * as dotenv from "dotenv"

// Load environment variables
dotenv.config({ path: [".vercel/.env.development.local", ".env.local"] })

const pinecone = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY,
})

// Получаем индекс
const index = pinecone.index(process.env.PINECONE_INDEX_NAME)

async function checkVectors() {
  try {
    console.log("🔍 Получаем статистику индекса...")
    
    const stats = await index.describeIndexStats()
    console.log(`📊 Общее количество векторов: ${stats.totalRecordCount}`)
    console.log(`📊 Размерность: ${stats.dimension}`)
    
    // Попробуем получить один случайный вектор для проверки метаданных
    console.log("🔍 Проверяем метаданные векторов...")
    
    // Получаем список всех векторов (первые несколько)
    const queryResult = await index.query({
      vector: new Array(stats.dimension).fill(0.1),
      topK: 3,
      includeMetadata: true,
    })
    
    console.log(`📊 Найдено векторов: ${queryResult.matches.length}`)
    
    queryResult.matches.forEach((match, index) => {
      console.log(`\n[${index + 1}] Vector ID: ${match.id}`)
      console.log(`Title: ${match.metadata?.title || 'N/A'}`)
      console.log(`URL: ${match.metadata?.url || 'N/A'}`)
      console.log(`Has images: ${match.metadata?.has_images || false}`)
      console.log(`Image count: ${match.metadata?.image_count || 0}`)
      
      if (match.metadata?.images) {
        console.log(`Images data: ${match.metadata.images}`)
      }
    })
    
  } catch (error) {
    console.error("❌ Ошибка:", error)
  }
}

checkVectors()
