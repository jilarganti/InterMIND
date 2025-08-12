/**
 * Ultra-Fast Upstash Vector Indexing Script
 * Создает все эмбеддинги одним запросом, загружает все векторы за раз
 */

import * as dotenv from "dotenv"
import * as fs from "fs"
import * as path from "path"
import { glob } from "glob"
import { createRequire } from "module"
const require = createRequire(import.meta.url)
const matter = require("gray-matter")
import OpenAI from "openai"
import { Index } from "@upstash/vector"
import { config } from "./indexConfig"

// Load environment variables
import { fileURLToPath } from "url"
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const envPath = path.join(__dirname, "../.vercel/.env.development.local")
if (fs.existsSync(envPath)) {
  dotenv.config({ path: envPath })
}

interface DocumentChunk {
  id: string
  text: string
  metadata: {
    text: string
    url: string
    source: string
    heading?: string
  }
}

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
const index = new Index({
  url: process.env.UPSTASH_VECTOR_REST_URL,
  token: process.env.UPSTASH_VECTOR_REST_TOKEN,
})

/**
 * Process markdown file into chunks
 */
function processFile(filePath: string, rootDir: string): DocumentChunk[] {
  const content = fs.readFileSync(filePath, "utf8")
  const { data: frontMatter, content: markdownContent } = matter(content)

  const relativePath = path.relative(rootDir, filePath)
  const urlPath = relativePath.replace(/\.md$/, "").replace(/\/index$/, "")
  const url = urlPath || "/"

  const chunks: DocumentChunk[] = []
  const sections = markdownContent.split(/(?=^#{2,3}\s)/m)

  sections.forEach((section, index) => {
    const trimmedSection = section.trim()
    if (!trimmedSection) return

    const headingMatch = trimmedSection.match(/^#{2,3}\s+(.+)/)
    const heading = headingMatch ? headingMatch[1] : undefined

    chunks.push({
      id: `${relativePath.replace(/\.md$/, "")}-${index}`,
      text: trimmedSection,
      metadata: {
        text: trimmedSection,
        url,
        source: relativePath,
        heading,
      },
    })
  })

  return chunks
}

/**
 * Create ALL embeddings in a single batch request
 */
async function createAllEmbeddings(texts: string[]): Promise<number[][]> {
  console.log(`🚀 Creating ${texts.length} embeddings in ONE batch request...`)

  const startTime = Date.now()

  try {
    const response = await openai.embeddings.create({
      model: "text-embedding-3-small",
      input: texts, // Все тексты сразу!
      dimensions: 384,
    })

    const duration = Date.now() - startTime
    console.log(`⚡ All embeddings created in ${Math.round(duration / 1000)}s`)

    return response.data.map((item) => item.embedding)
  } catch (error) {
    console.error("❌ Error creating embeddings:", error)
    throw error
  }
}

/**
 * Upload ALL vectors to Upstash in one go
 */
async function uploadAllVectors(chunks: DocumentChunk[], embeddings: number[][]) {
  console.log(`📤 Uploading ${chunks.length} vectors in ONE batch...`)

  const startTime = Date.now()

  // Формируем все векторы
  const vectors = chunks.map((chunk, index) => ({
    id: chunk.id,
    vector: embeddings[index],
    metadata: chunk.metadata,
  }))

  try {
    await index.upsert(vectors)

    const duration = Date.now() - startTime
    console.log(`⚡ All vectors uploaded in ${Math.round(duration / 1000)}s`)
  } catch (error) {
    console.error("❌ Error uploading vectors:", error)
    throw error
  }
}

/**
 * Main function - максимально простая и быстрая
 */
async function main() {
  try {
    console.log("🚀 Ultra-Fast Upstash Vector Indexing")
    console.log("=".repeat(50))

    const totalStartTime = Date.now()
    const rootDir = path.resolve(__dirname, config.rootDir)

    // 1. Find all markdown files
    console.log("📁 Finding markdown files...")
    const pattern = path.join(rootDir, "**/*.md")
    const allFiles = await glob(pattern, { ignore: config.exclude.map((ex) => path.join(rootDir, ex)) })
    const files = allFiles.filter((file) => config.allowedExtensions.includes(path.extname(file)))
    console.log(`   Found ${files.length} files`)

    // 2. Process all files into chunks
    console.log("📝 Processing files into chunks...")
    const allChunks: DocumentChunk[] = []
    for (const file of files) {
      const chunks = processFile(file, rootDir)
      allChunks.push(...chunks)
    }
    console.log(`   Generated ${allChunks.length} chunks`)

    // 3. Clear index
    console.log("🗑️ Clearing existing vectors...")
    await index.reset()
    console.log("   Index cleared")

    // 4. Create ALL embeddings at once
    const allTexts = allChunks.map((chunk) => chunk.text)
    const allEmbeddings = await createAllEmbeddings(allTexts)

    // 5. Upload ALL vectors at once
    await uploadAllVectors(allChunks, allEmbeddings)

    // 6. Final stats
    const totalDuration = Date.now() - totalStartTime
    console.log(`\n🎉 ULTRA-FAST INDEXING COMPLETE!`)
    console.log(`⏱️  Total time: ${Math.round(totalDuration / 1000)}s`)
    console.log(`📊 Chunks indexed: ${allChunks.length}`)
    console.log(`🚀 Ready for lightning-fast AI search!`)
  } catch (error) {
    console.error("\n💥 Error:", error)
    process.exit(1)
  }
}

main()
