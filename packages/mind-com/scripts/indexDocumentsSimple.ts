/**
 * Индексирование документов без LangChain
 * Использует Pinecone и OpenAI напрямую
 */

import { promises as fs } from "fs"
// import path from "path"
import { Pinecone } from "@pinecone-database/pinecone"
import OpenAI from "openai"
// import dotenv from "dotenv"

// import * as fs from "fs"
import * as path from "path"
import * as dotenv from "dotenv"

// Загружаем переменные окружения
dotenv.config({ path: path.resolve(process.cwd(), ".env") })
dotenv.config({ path: path.resolve(process.cwd(), ".vercel/.env.development.local") })

// Проверяем переменные окружения
if (!process.env.PINECONE_API_KEY || !process.env.OPENAI_API_KEY) {
  console.error("❌ Не найдены необходимые переменные окружения")
  console.error("PINECONE_API_KEY:", process.env.PINECONE_API_KEY ? "✅" : "❌")
  console.error("OPENAI_API_KEY:", process.env.OPENAI_API_KEY ? "✅" : "❌")
  process.exit(1)
}

// Инициализация клиентов
const pinecone = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY,
})

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

const INDEX_NAME = "intermind-docs"

// Простая функция разбиения текста на чанки
function splitText(text: string, chunkSize: number = 1000, overlap: number = 200): string[] {
  const chunks: string[] = []
  let start = 0

  while (start < text.length) {
    const end = Math.min(start + chunkSize, text.length)
    chunks.push(text.slice(start, end))
    start = end - overlap

    // Избегаем бесконечного цикла
    if (start >= text.length - overlap) break
  }

  return chunks
}

// Функция для создания эмбеддингов
async function createEmbeddings(texts: string[]): Promise<number[][]> {
  const response = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: texts,
  })
  return response.data.map((item) => item.embedding)
}

// Основная функция индексирования
async function indexDocuments() {
  console.log("📚 Начинаем индексирование документов...\n")

  // Проверяем переменные окружения
  if (!process.env.PINECONE_API_KEY || !process.env.OPENAI_API_KEY) {
    console.error("❌ Не найдены необходимые переменные окружения")
    process.exit(1)
  }

  // Читаем файл с документацией
  const docPath = path.resolve(process.cwd(), "./docs/.vitepress/dist/llms-full.txt")
  console.log(`📄 Читаем файл: ${docPath}`)

  const content = await fs.readFile(docPath, "utf-8")
  console.log(`📏 Размер файла: ${(content.length / 1024).toFixed(1)} KB\n`)

  // Разбиваем на чанки
  const chunks = splitText(content)
  console.log(`🔪 Разбито на ${chunks.length} чанков\n`)

  // Получаем индекс
  const index = pinecone.index(INDEX_NAME)

  // Обрабатываем чанки батчами
  const batchSize = 10
  let processed = 0

  for (let i = 0; i < chunks.length; i += batchSize) {
    const batch = chunks.slice(i, i + batchSize)

    // Создаем эмбеддинги для батча
    console.log(`🔄 Обрабатываем чанки ${i + 1}-${Math.min(i + batchSize, chunks.length)}...`)
    const embeddings = await createEmbeddings(batch)

    // Подготавливаем данные для Pinecone
    const vectors = batch.map((text, idx) => ({
      id: `doc-chunk-${i + idx}`,
      values: embeddings[idx],
      metadata: {
        text: text.substring(0, 2000), // Ограничиваем размер метаданных
        source: "InterMIND Documentation",
        chunkIndex: i + idx,
      },
    }))

    // Загружаем в Pinecone
    await index.upsert(vectors)
    processed += batch.length

    console.log(`✅ Проиндексировано: ${processed}/${chunks.length}`)
  }

  console.log("\n🎉 Индексирование завершено!")

  // Проверяем статистику
  const stats = await index.describeIndexStats()
  console.log(`\n📊 Статистика индекса:`)
  console.log(`   - Векторов в индексе: ${stats.totalRecordCount}`)
  console.log(`   - Размерность: ${stats.dimension}`)
}

// Запускаем индексирование
indexDocuments().catch(console.error)
