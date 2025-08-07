/**
 * Vector Database Indexing Script for InterMIND Documentation
 *
 * Парсит markdown документацию, разбивает по заголовкам H2/H3,
 * создает векторные эмбеддинги и загружает в Pinecone для ИИ чата.
 *
 * Особенности:
 * - Обрабатывает только .md файлы
 * - Разбивает контент по заголовкам для точного поиска
 * - Генерирует относительные ссыл    // Process all files
    const allChunks: DocumentChunk[] = []

    for (const file of files) {
      try {
        const chunks = processFile(file, rootDir)
        allChunks.push(...chunks)
      } catch (error) {
        console.error(`❌ Error processing ${file}:`, error.message)
      }
    }

    console.log(`\n📊 Processing Summary:`)
    console.log(`   - Files processed: ${files.length}`)
    console.log(`   - Total chunks generated: ${allChunks.length}`)ности
 * - Простая структура без категоризации
 * - Полная переиндексация
 *
 * Usage:
 * tsx indexDocs.ts ./scripts/indexConfig.ts
 */

import * as fs from "fs"
import * as path from "path"
import * as dotenv from "dotenv"
import OpenAI from "openai"
import { Pinecone } from "@pinecone-database/pinecone"

interface Config {
  rootDir: string
  pineconeIndex: string
  embeddingModel: string
  exclude: string[]
  allowedExtensions: string[]
  minTextLength: number
  maxChunkLength: number
}

interface DocumentChunk {
  id: string
  text: string
  url: string
}

// Load environment variables
dotenv.config({ path: [".vercel/.env.development.local", ".env.local"] })

// Get config path from command line arguments
const configPath = process.argv[2]
if (!configPath) {
  console.error("❌ Usage: tsx indexDocs.ts <config-path>")
  console.error("❌ Example: tsx indexDocs.ts ./scripts/indexConfig.ts")
  process.exit(1)
}

const resolvedConfigPath = path.resolve(configPath)
const { config } = (await import(`file://${resolvedConfigPath}`)) as { config: Config }

// Define base config directory for proper path resolution
const configDir = path.dirname(resolvedConfigPath)

/**
 * Resolves relative paths from the configuration file directory
 */
function resolveFromConfig(relativePath: string) {
  return path.resolve(configDir, relativePath)
}

// Validate API keys
if (!process.env.OPENAI_API_KEY || !process.env.PINECONE_API_KEY) {
  throw new Error("Missing required API keys: OPENAI_API_KEY, PINECONE_API_KEY")
}

// Initialize clients
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
const pinecone = new Pinecone({ apiKey: process.env.PINECONE_API_KEY })

const index = pinecone.index(config.pineconeIndex)

/**
 * Generates relative URL for a file
 */
function generateRelativeUrl(filePath: string, rootDir: string): string {
  return path.relative(rootDir, filePath).replace(/\.md$/, "") || "."
}

/**
 * Splits content by headings H2/H3 for better chunk granularity
 */
function splitContentByHeadings(content: string, filePath: string, rootDir: string): DocumentChunk[] {
  const chunks: DocumentChunk[] = []
  const lines = content.split("\n")

  let currentChunk = ""
  let chunkIndex = 0

  for (const line of lines) {
    const headingMatch = line.match(/^(#{2,3})\s+(.+)$/)

    if (headingMatch) {
      // Save previous chunk if it has content
      if (currentChunk.trim() && currentChunk.trim().length >= config.minTextLength) {
        const chunkId = `${path.relative(rootDir, filePath)}-${chunkIndex}`

        chunks.push({
          id: chunkId,
          text: currentChunk.trim(),
          url: generateRelativeUrl(filePath, rootDir),
        })

        chunkIndex++
      }

      // Start new chunk
      currentChunk = line + "\n"
    } else {
      currentChunk += line + "\n"

      // Split large chunks
      if (currentChunk.length > config.maxChunkLength) {
        const chunkId = `${path.relative(rootDir, filePath)}-${chunkIndex}`

        chunks.push({
          id: chunkId,
          text: currentChunk.trim(),
          url: generateRelativeUrl(filePath, rootDir),
        })

        chunkIndex++
        currentChunk = ""
      }
    }
  }

  // Add final chunk
  if (currentChunk.trim() && currentChunk.trim().length >= config.minTextLength) {
    const chunkId = `${path.relative(rootDir, filePath)}-${chunkIndex}`

    chunks.push({
      id: chunkId,
      text: currentChunk.trim(),
      url: generateRelativeUrl(filePath, rootDir),
    })
  }

  return chunks
}

/**
 * Creates embedding vector for text
 */
async function createEmbedding(text: string): Promise<number[]> {
  try {
    const response = await openai.embeddings.create({
      model: config.embeddingModel,
      input: text,
    })
    return response.data[0].embedding
  } catch (error) {
    console.error("❌ Error creating embedding:", error.message)
    throw error
  }
}

/**
 * Gets all files recursively from directory
 */
async function getAllFiles(dir: string): Promise<string[]> {
  const files: string[] = []

  if (!fs.existsSync(dir)) {
    throw new Error(`Directory not found: ${dir}`)
  }

  const items = fs.readdirSync(dir)

  for (const item of items) {
    const fullPath = path.join(dir, item)

    // Skip excluded paths
    if (
      config.exclude?.some((excluded) => {
        const pattern = excluded.replace(/\*/g, ".*")
        return new RegExp(pattern).test(fullPath) || fullPath.includes(excluded.replace("/*", ""))
      })
    ) {
      continue
    }

    const stat = fs.statSync(fullPath)

    if (stat.isDirectory()) {
      files.push(...(await getAllFiles(fullPath)))
    } else {
      const ext = path.extname(item)
      if (config.allowedExtensions.includes(ext)) {
        files.push(fullPath)
      }
    }
  }

  return files
}

/**
 * Processes a single file and returns chunks
 */
function processFile(filePath: string, rootDir: string): DocumentChunk[] {
  console.log(`📄 Processing: ${path.relative(rootDir, filePath)}`)

  const content = fs.readFileSync(filePath, "utf8")
  const chunks = splitContentByHeadings(content, filePath, rootDir)

  console.log(`   ✅ Generated ${chunks.length} chunks`)
  return chunks
}

/**
 * Clears existing vectors from Pinecone index
 */
async function clearIndex() {
  console.log("🗑️ Clearing existing vectors from Pinecone index...")

  try {
    await index.deleteAll()
    console.log("✅ Index cleared successfully")
  } catch (error) {
    console.error("❌ Error clearing index:", error.message)
    throw error
  }
}

/**
 * Uploads chunks to Pinecone in batches
 */
async function uploadToPinecone(allChunks: DocumentChunk[]) {
  console.log(`📤 Uploading ${allChunks.length} chunks to Pinecone...`)

  const batchSize = 1000 // Increased batch size for better Pinecone performance
  const batches = []

  for (let i = 0; i < allChunks.length; i += batchSize) {
    batches.push(allChunks.slice(i, i + batchSize))
  }

  for (let batchIndex = 0; batchIndex < batches.length; batchIndex++) {
    const batch = batches[batchIndex]

    console.log(`📦 Processing batch ${batchIndex + 1}/${batches.length} (${batch.length} vectors)`)

    const vectors = []

    // Process chunks in parallel for faster embedding creation
    const embeddingPromises = batch.map(async (chunk) => {
      try {
        const embedding = await createEmbedding(chunk.text)
        return {
          id: chunk.id,
          values: embedding,
          metadata: {
            text: chunk.text,
            url: chunk.url,
          },
        }
      } catch (error) {
        console.error(`❌ Error processing chunk ${chunk.id}:`, error.message)
        return null
      }
    })

    const results = await Promise.all(embeddingPromises)
    vectors.push(...results.filter(Boolean))

    if (vectors.length > 0) {
      try {
        await index.upsert(vectors)
        console.log(`   ✅ Uploaded ${vectors.length} vectors`)
      } catch (error) {
        console.error(`❌ Error uploading batch ${batchIndex + 1}:`, error.message)
      }
    }

    // Reduce delay between batches for faster processing
    if (batchIndex < batches.length - 1) {
      await new Promise((resolve) => setTimeout(resolve, 200)) // Reduced from 1000ms to 200ms
    }
  }
}

/**
 * Main indexing function
 */
async function indexDocumentation() {
  try {
    console.log("🚀 Starting documentation indexing...")
    console.log(`📁 Source directory: ${resolveFromConfig(config.rootDir)}`)
    console.log(`🎯 Pinecone index: ${config.pineconeIndex}`)

    const rootDir = resolveFromConfig(config.rootDir)
    const files = await getAllFiles(rootDir)

    console.log(`📚 Found ${files.length} files to process`)

    if (files.length === 0) {
      console.log("⚠️ No files found to process")
      return
    }

    // Clear existing index
    await clearIndex()

    // Process all files
    const allChunks: DocumentChunk[] = []

    for (const file of files) {
      try {
        const chunks = processFile(file, rootDir)
        allChunks.push(...chunks)
      } catch (error) {
        console.error(`❌ Error processing ${file}:`, error.message)
      }
    }

    console.log(`\n📊 Processing Summary:`)
    console.log(`   - Files processed: ${files.length}`)
    console.log(`   - Total chunks generated: ${allChunks.length}`)

    if (allChunks.length === 0) {
      console.log("⚠️ No chunks generated")
      return
    }

    // Upload to Pinecone
    await uploadToPinecone(allChunks)

    console.log("\n✨ Documentation indexing completed successfully!")
    console.log(`🎯 Vector database ready for AI chat with ${allChunks.length} searchable chunks`)
  } catch (error) {
    console.error("❌ Indexing failed:", error.message)
    process.exit(1)
  }
}

// Run the indexing
indexDocumentation()
