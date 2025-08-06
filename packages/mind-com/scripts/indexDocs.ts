/**
 * Vector Database Indexing Script for InterMIND Documentation
 *
 * Парсит английскую документацию, разбивает по заголовкам H2/H3,
 * создает векторные эмбеддинги и загружает в Pinecone для ИИ чата.
 *
 * Особенности:
 * - Обрабатывает .md, .vue, .svg файлы через ИИ
 * - Разбивает контент по заголовкам для точного поиска
 * - Генерирует относительные ссылки для мультиязычности
 * - Автоматически определяет категории по структуре папок
 * - Полная переиндексация (инкрементальное обновление на втором этапе)
 *
 * Usage:
 * tsx indexDocs.ts ./scripts/indexConfig.ts
 */

import * as fs from "fs"
import * as path from "path"
import * as dotenv from "dotenv"
import { fileURLToPath } from "url"
import OpenAI from "openai"
import { Pinecone } from "@pinecone-database/pinecone"
import Anthropic from "@anthropic-ai/sdk"

interface Config {
  rootDir: string
  pineconeIndex: string
  embeddingModel: string
  embeddingDimensions: number
  exclude: string[]
  allowedExtensions: string[]
  chunkStrategy: string
  minTextLength: number
  maxChunkLength: number
}

interface DocumentChunk {
  id: string
  text: string
  url: string
  title: string
  category: string
  sourceFile: string
  headingLevel: number
  lastModified: string
}

interface ProcessedFile {
  path: string
  category: string
  chunks: DocumentChunk[]
}

// Load environment variables
dotenv.config({ path: [".vercel/.env.development.local", ".env.local"] })

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

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

/**
 * Validates that required API keys are available
 */
function validateApiKeys() {
  const missingKeys: string[] = []

  if (!process.env.OPENAI_API_KEY) {
    missingKeys.push("OPENAI_API_KEY")
  }

  if (!process.env.PINECONE_API_KEY) {
    missingKeys.push("PINECONE_API_KEY")
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    missingKeys.push("ANTHROPIC_API_KEY")
  }

  if (missingKeys.length > 0) {
    console.error("❌ Missing required environment variables:")
    missingKeys.forEach((key) => console.error(`   - ${key}`))
    console.error("\n💡 To fix this:")
    console.error("   1. Run: vercel pull")
    console.error("   2. Or set the environment variables manually in .env.local")
    process.exit(1)
  }
}

// Validate API keys
validateApiKeys()

// Initialize clients
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
const pinecone = new Pinecone({ apiKey: process.env.PINECONE_API_KEY })
const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

const index = pinecone.index(config.pineconeIndex)

/**
 * Extracts text content from various file types using AI
 */
async function extractTextWithAI(content: string, filePath: string, fileExtension: string): Promise<string> {
  const prompt = `Extract all readable text content from this ${fileExtension} file for documentation indexing.

Requirements:
- Extract ALL readable text, including headings, paragraphs, lists, code comments
- Preserve markdown formatting and structure
- For Vue files: extract text from <template> and meaningful comments
- For SVG files: extract title, description, and text elements
- Remove only technical markup that doesn't contain readable content
- Keep the original language (English)

File path: ${filePath}
File content:
${content}

Return only the extracted text content:`

  try {
    const message = await anthropic.messages.create({
      model: "claude-3-5-haiku-20241022",
      max_tokens: 4000,
      temperature: 0,
      messages: [{ role: "user", content: prompt }],
    })

    const contentBlock = message.content[0]
    return contentBlock.type === "text" ? contentBlock.text.trim() : content
  } catch (error) {
    console.warn(`⚠️ AI extraction failed for ${filePath}, using raw content:`, error.message)
    return content
  }
}

/**
 * Determines category from file path structure
 */
function getCategoryFromPath(filePath: string, rootDir: string): string {
  const relativePath = path.relative(rootDir, filePath)
  const pathParts = relativePath.split(path.sep)

  if (pathParts.length <= 1) {
    return "General"
  }

  // Convert folder structure to readable category
  const categoryPath = pathParts.slice(0, -1).join("/")

  // Transform common patterns to readable names
  const categoryMap: Record<string, string> = {
    "product/overview": "Product Overview",
    "product/guide": "User Guide",
    "product": "Product",
    "resources/company": "Company Information",
    "resources": "Resources & Support",
    "blog": "Blog & News",
    "examples": "Examples & Tutorials",
  }

  return categoryMap[categoryPath] || pathParts[0].charAt(0).toUpperCase() + pathParts[0].slice(1)
}

/**
 * Converts heading text to URL-safe anchor
 */
function headingToAnchor(heading: string): string {
  return heading
    .toLowerCase()
    .replace(/[^\w\s-]/g, "") // Remove special characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-") // Replace multiple hyphens with single
    .replace(/^-|-$/g, "") // Remove leading/trailing hyphens
}

/**
 * Generates relative URL for a file and optional heading
 */
function generateRelativeUrl(filePath: string, rootDir: string, heading?: string): string {
  const relativePath = path.relative(rootDir, filePath)
  let url = relativePath.replace(/\.md$/, "").replace(/index$/, "")
  
  // Remove leading and trailing slashes to make it truly relative
  url = url.replace(/^\/+|\/+$/g, "")
  
  // Handle root index case
  if (!url || url === "") {
    url = "."
  }
  
  // Add heading anchor if provided
  if (heading) {
    url += "#" + headingToAnchor(heading)
  }
  
  return url
}

/**
 * Splits content by headings H2/H3 for better chunk granularity
 */
function splitContentByHeadings(content: string, filePath: string, rootDir: string): DocumentChunk[] {
  const chunks: DocumentChunk[] = []
  const lines = content.split("\n")

  let currentChunk = ""
  let currentHeading = ""
  let headingLevel = 1
  let chunkIndex = 0

  const category = getCategoryFromPath(filePath, rootDir)
  const lastModified = fs.statSync(filePath).mtime.toISOString()

  for (const line of lines) {
    const headingMatch = line.match(/^(#{2,3})\s+(.+)$/)

    if (headingMatch) {
      // Save previous chunk if it has content
      if (currentChunk.trim() && currentChunk.trim().length >= config.minTextLength) {
        const chunkId = `${path.relative(rootDir, filePath)}-${chunkIndex}`

        chunks.push({
          id: chunkId,
          text: currentChunk.trim(),
          url: generateRelativeUrl(filePath, rootDir, currentHeading),
          title: currentHeading || path.basename(filePath, path.extname(filePath)),
          category,
          sourceFile: path.relative(rootDir, filePath),
          headingLevel,
          lastModified,
        })

        chunkIndex++
      }

      // Start new chunk
      headingLevel = headingMatch[1].length
      currentHeading = headingMatch[2].trim()
      currentChunk = line + "\n"
    } else {
      currentChunk += line + "\n"

      // Split large chunks
      if (currentChunk.length > config.maxChunkLength) {
        const chunkId = `${path.relative(rootDir, filePath)}-${chunkIndex}`

        chunks.push({
          id: chunkId,
          text: currentChunk.trim(),
          url: generateRelativeUrl(filePath, rootDir, currentHeading),
          title: currentHeading || path.basename(filePath, path.extname(filePath)),
          category,
          sourceFile: path.relative(rootDir, filePath),
          headingLevel,
          lastModified,
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
      url: generateRelativeUrl(filePath, rootDir, currentHeading),
      title: currentHeading || path.basename(filePath, path.extname(filePath)),
      category,
      sourceFile: path.relative(rootDir, filePath),
      headingLevel,
      lastModified,
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
async function processFile(filePath: string, rootDir: string): Promise<ProcessedFile> {
  console.log(`📄 Processing: ${path.relative(rootDir, filePath)}`)

  const content = fs.readFileSync(filePath, "utf8")
  const fileExtension = path.extname(filePath)

  let processedContent = content

  // Extract text using AI for non-markdown files
  if (fileExtension !== ".md") {
    processedContent = await extractTextWithAI(content, filePath, fileExtension)
  }

  const chunks = splitContentByHeadings(processedContent, filePath, rootDir)
  const category = getCategoryFromPath(filePath, rootDir)

  console.log(`   ✅ Generated ${chunks.length} chunks`)

  return {
    path: filePath,
    category,
    chunks,
  }
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

  const batchSize = 100
  const batches = []

  for (let i = 0; i < allChunks.length; i += batchSize) {
    batches.push(allChunks.slice(i, i + batchSize))
  }

  for (let batchIndex = 0; batchIndex < batches.length; batchIndex++) {
    const batch = batches[batchIndex]

    console.log(`📦 Processing batch ${batchIndex + 1}/${batches.length} (${batch.length} vectors)`)

    const vectors = []

    for (const chunk of batch) {
      try {
        const embedding = await createEmbedding(chunk.text)

        vectors.push({
          id: chunk.id,
          values: embedding,
          metadata: {
            text: chunk.text,
            url: chunk.url,
            title: chunk.title,
            category: chunk.category,
            source_file: chunk.sourceFile,
            heading_level: chunk.headingLevel,
            last_modified: chunk.lastModified,
          },
        })
      } catch (error) {
        console.error(`❌ Error processing chunk ${chunk.id}:`, error.message)
      }
    }

    if (vectors.length > 0) {
      try {
        await index.upsert(vectors)
        console.log(`   ✅ Uploaded ${vectors.length} vectors`)
      } catch (error) {
        console.error(`❌ Error uploading batch ${batchIndex + 1}:`, error.message)
      }
    }

    // Small delay between batches to avoid rate limits
    if (batchIndex < batches.length - 1) {
      await new Promise((resolve) => setTimeout(resolve, 1000))
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
    const processedFiles: ProcessedFile[] = []

    for (const file of files) {
      try {
        const processedFile = await processFile(file, rootDir)
        processedFiles.push(processedFile)
        allChunks.push(...processedFile.chunks)
      } catch (error) {
        console.error(`❌ Error processing ${file}:`, error.message)
      }
    }

    console.log(`\n📊 Processing Summary:`)
    console.log(`   - Files processed: ${processedFiles.length}`)
    console.log(`   - Total chunks generated: ${allChunks.length}`)

    // Group by category for statistics
    const categoryStats = allChunks.reduce(
      (acc, chunk) => {
        acc[chunk.category] = (acc[chunk.category] || 0) + 1
        return acc
      },
      {} as Record<string, number>,
    )

    console.log(`   - Chunks by category:`)
    Object.entries(categoryStats).forEach(([category, count]) => {
      console.log(`     • ${category}: ${count}`)
    })

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
