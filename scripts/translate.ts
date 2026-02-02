/**
 * Automated translation script for project documentation and files
 *
 * Description:
 * - Translates Markdown, Vue, TypeScript and JavaScript files into multiple languages
 * - Uses AI models (OpenAI GPT-4 and Anthropic Claude) for high-quality translations
 * - Automatically switches between models on errors
 * - Synchronizes file structure between originals and translations
 * - Translates only modified files (incremental translation) by default
 * - Optionally validates translated files for compilation errors
 * - Automatically retranslates problematic files with alternative models when errors are detected
 * - Supports translation to a specific locale with --locale parameter
 * - Supports unconditional translation of all files with --all parameter
 *
 * Usage:
 * tsx translate.ts <config-path> [--locale <locale-code>] [--all]
 *
 * Examples:
 * tsx ../../scripts/translate.ts ./scripts/translateConfig.ts
 * tsx ../../scripts/translate.ts ./scripts/translateConfig.ts --locale ru
 * tsx ../../scripts/translate.ts ./scripts/translateConfig.ts --all
 * tsx ../../scripts/translate.ts ./scripts/translateConfig.ts --locale es --all
 *
 * Requirements:
 * - Environment variables: OPENAI_API_KEY, ANTHROPIC_API_KEY
 * - Configuration file with translation settings
 * - translatePrompt.ts file with getPromptForTranslation function
 */

import Anthropic from "@anthropic-ai/sdk"
import OpenAI from "openai"
import * as fs from "fs"
import * as path from "path"
import * as dotenv from "dotenv"
import { fileURLToPath } from "url"

interface Language {
  code: string
  name: string
}

interface Model {
  name?: string // для обратной совместимости
}

interface Config {
  rootDir: string
  rootTranslateDir: string
  configDir: string
  configTranslateDir: string
  promptModule?: string
  checkBuildErrors?: boolean
  buildCommand?: string
  languages: Record<string, Language>
  models: Record<string, Model | string[]>
  exclude?: string[]
  allowedExtensions: string[]
}

interface TranslateTask {
  file: string
  lang: Language
  targetPath: string
}

interface AssetTask {
  file: string
  lang: Language
  targetPath: string
}

interface FileWithError {
  file: string
  targetPath: string
  lang: Language
  error: string
}

/**
 * Run "vercal pull" to load environment variables
 * @see https://vercel.com/docs/cli/pull
 */
dotenv.config({ path: [".vercel/.env.development.local", ".env.local"] })

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Parse command line arguments
const args = process.argv.slice(2)
const configPath = args[0]

// Parse optional parameters
const targetLocale = args.includes("--locale") ? args[args.indexOf("--locale") + 1] : null
const translateAll = args.includes("--all")

if (!configPath) {
  console.error("❌ Usage: tsx translate.ts <config-path> [--locale <locale-code>] [--all]")
  process.exit(1)
}

const resolvedConfigPath = path.resolve(configPath)
const { config } = (await import(`file://${resolvedConfigPath}`)) as { config: Config }

// Define base config directory for proper path resolution
const configDir = path.dirname(resolvedConfigPath)

// Validate target locale if provided
if (targetLocale) {
  const availableLocales = Object.values(config.languages).map((lang) => lang.code)
  if (!availableLocales.includes(targetLocale)) {
    console.error(`❌ Invalid locale: ${targetLocale}`)
    console.error(`Available locales: ${availableLocales.join(", ")}`)
    process.exit(1)
  }
  console.log(`🎯 Target locale: ${targetLocale}`)
}

if (translateAll) {
  console.log(`🔄 Mode: Translate all files unconditionally`)
} else {
  console.log(`⚡ Mode: Translate only modified files`)
}

/**
 * Filters languages based on target locale parameter
 * @returns Filtered languages object
 */
function getFilteredLanguages(): Record<string, Language> {
  if (targetLocale) {
    const targetLang = Object.entries(config.languages).find(([_, lang]) => lang.code === targetLocale)
    if (targetLang) {
      return { [targetLang[0]]: targetLang[1] }
    }
    return {}
  }
  return config.languages
}

/**
 * Resolves relative paths from the configuration file directory
 * @param relativePath - Relative path
 * @returns Absolute path
 */
function resolveFromConfig(relativePath: string) {
  return path.resolve(configDir, relativePath)
}

// Import prompt function
const promptModulePath = config.promptModule ? resolveFromConfig(config.promptModule) : path.resolve(configDir, "translatePrompt.ts")
const { getPromptForTranslation } = await import(`file://${promptModulePath}`)

/**
 * Validates that required API keys are available
 */
function validateApiKeys() {
  const missingKeys: string[] = []

  if (!process.env.OPENAI_API_KEY) {
    missingKeys.push("OPENAI_API_KEY")
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
    console.error("")
    process.exit(1)
  }
}

// Validate API keys before creating clients
validateApiKeys()

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

/**
 * Gets model name from configuration (supports both old and new format)
 * @param modelKey - Model key (e.g., 'gpt4', 'claude')
 * @param modelIndex - Index for array format (default: 0)
 * @returns Model name
 */
function getModelName(modelKey: string, modelIndex: number = 0): string {
  const modelConfig = config.models[modelKey]

  if (Array.isArray(modelConfig)) {
    return modelConfig[modelIndex] || modelConfig[0]
  } else if (modelConfig && "name" in modelConfig) {
    return modelConfig.name!
  }

  throw new Error(`Invalid model configuration for ${modelKey}`)
}

/**
 * Gets the next model from configuration for fallback mechanism
 * @param currentModel - Current model
 * @returns Next model key or null if no more models available
 */
function getNextModel(currentModel: string) {
  const modelEntries = Object.entries(config.models)
  const currentIndex = modelEntries.findIndex(([key]) => key === currentModel)

  if (currentIndex === -1 || currentIndex === modelEntries.length - 1) {
    return null
  }

  return modelEntries[currentIndex + 1][0]
}

/**
 * Applies necessary replacements to translated content
 * @param content - Translated content
 * @param langCode - Language code
 * @returns Content with applied replacements
 */
function applyContentReplacements(content: string, langCode: string) {
  let modifiedContent = content

  // Config replacement
  modifiedContent = modifiedContent.replace(/export const en =/, `export const ${langCode} =`)

  // BASE_PATH replacement
  modifiedContent = modifiedContent.replace(/BASE_PATH = ""/, `BASE_PATH = "/${langCode}"`)

  return modifiedContent
}

/**
 * Removes translation wrapper tags from the content
 * @param content - Content that may contain translation tags
 * @returns Cleaned content without tags
 */
function removeTranslationTags(content: string): string {
  // Remove opening and closing tags with any content between them
  const match = content.match(/<translated_markdown>([\s\S]*)<\/translated_markdown>/)
  if (match) {
    return match[1].trim()
  }

  // Fallback: remove any stray tags if regex didn't match
  let cleaned = content.replace(/<translated_markdown>/gi, "").replace(/<\/translated_markdown>/gi, "")

  return cleaned.trim()
}

async function translateWithOpenAI(content: string, targetLang: string, langCode: string, modelIndex: number = 0) {
  const completion = await openai.chat.completions.create({
    model: getModelName("gpt4", modelIndex),
    temperature: 0,
    messages: [{ role: "user", content: getPromptForTranslation(content, targetLang, langCode) }],
  })

  const result = completion.choices[0].message.content || ""
  return removeTranslationTags(result)
}

async function translateWithClaude(content: string, targetLang: string, langCode: string, modelIndex: number = 0) {
  const message = await anthropic.messages.create({
    model: getModelName("claude", modelIndex),
    max_tokens: 4096,
    temperature: 0,
    messages: [{ role: "user", content: getPromptForTranslation(content, targetLang, langCode) }],
  })

  const contentBlock = message.content[0]
  const result = contentBlock.type === "text" ? contentBlock.text : ""
  return removeTranslationTags(result)
}

async function translateWithModel(model: string, content: string, targetLang: string, langCode: string, modelIndex: number = 0) {
  let translatedContent
  switch (model) {
    case "gpt4":
      translatedContent = await translateWithOpenAI(content, targetLang, langCode, modelIndex)
      break
    case "claude":
      translatedContent = await translateWithClaude(content, targetLang, langCode, modelIndex)
      break
    default:
      throw new Error(`Unknown model: ${model}`)
  }

  // Additional safety check to remove any remaining tags
  return removeTranslationTags(translatedContent.trim())
}

async function translateMarkdown(content: string, currentModel: string, targetLang: string, langCode: string, modelIndex: number = 0) {
  if (!content.trim()) return content

  const translatedContent = await translateWithModel(currentModel, content, targetLang, langCode, modelIndex)
  // Final safety check before returning
  return removeTranslationTags(translatedContent)
}

/**
 * Checks if HTML tags are balanced in the given content
 * @param content - Content to check
 * @returns Object with balance status and information about unclosed tags
 */
function checkHtmlTagBalance(content: string): { balanced: boolean; unclosedTags: string[]; openCount: number; closeCount: number } {
  const openTags: string[] = []
  const unclosedTags: string[] = []

  // Vue components that should be ignored in balance checking
  const vueComponents = [
    "herosection",
    "navbutton",
    "featureblock",
    "featurecards",
    "featurecard",
    "videoplayer",
    "autoscrolltestimonials",
    "pricingplans",
    "pricingplan",
    "authbutton",
    "contactform",
    "accordiongroup",
    "homefooter",
    "button",
  ]

  // Match all opening and closing tags, including self-closing tags
  const tagPattern = /<(\/)?([\w-]+)(?:\s[^>]*)?(\/)?\s*>/g
  let match

  while ((match = tagPattern.exec(content)) !== null) {
    const isClosing = match[1] === "/"
    const tagName = match[2].toLowerCase()
    const isSelfClosing = match[3] === "/" || ["img", "br", "hr", "input", "meta", "link"].includes(tagName)

    // Skip Vue components
    if (vueComponents.includes(tagName)) {
      continue
    }

    if (isSelfClosing) {
      continue // Skip self-closing tags
    }

    if (isClosing) {
      // This is a closing tag
      const lastOpenTag = openTags[openTags.length - 1]
      if (lastOpenTag === tagName) {
        openTags.pop()
      } else {
        // Mismatched closing tag - silently track without logging
      }
    } else {
      // This is an opening tag
      openTags.push(tagName)
    }
  }

  // Count all div tags specifically
  const divOpenCount = (content.match(/<div[^>]*>/g) || []).length
  const divCloseCount = (content.match(/<\/div>/g) || []).length

  return {
    balanced: openTags.length === 0,
    unclosedTags: openTags,
    openCount: divOpenCount,
    closeCount: divCloseCount,
  }
}

/**
 * Splits content by H2 headers while ensuring HTML tags remain balanced
 * @param content - Markdown content to split
 * @returns Array of content parts with balanced HTML tags
 */
function splitByH2(content: string) {
  const parts = content.split("\n## ")
  const balancedParts: string[] = []

  for (let i = 0; i < parts.length; i++) {
    let part = i === 0 ? parts[i].trim() : "## " + parts[i].trim()

    if (!part) continue

    // Check HTML tag balance
    const balance = checkHtmlTagBalance(part)

    if (!balance.balanced && balance.unclosedTags.length > 0) {
      // Silently try to find missing closing tags in the next parts
      let nextPartIndex = i + 1
      let combinedPart = part

      while (nextPartIndex < parts.length && !checkHtmlTagBalance(combinedPart).balanced) {
        const nextPart = nextPartIndex === 0 ? parts[nextPartIndex] : "\n## " + parts[nextPartIndex]
        combinedPart += "\n\n" + nextPart
        nextPartIndex++
      }

      if (checkHtmlTagBalance(combinedPart).balanced) {
        balancedParts.push(combinedPart.trim())
        i = nextPartIndex - 1 // Skip the merged parts
        continue
      }
    }

    balancedParts.push(part)
  }

  return balancedParts.filter(Boolean)
}

async function getAllFiles(dir: string): Promise<string[]> {
  const files: string[] = []
  const items = fs.readdirSync(dir)

  for (const item of items) {
    const fullPath = path.join(dir, item)

    if (config.exclude?.some((excluded) => fullPath.includes(excluded))) {
      continue
    }

    // Skip VitePress cache/temp files
    if (item.includes(".timestamp-") && item.endsWith(".mjs")) {
      continue
    }

    const stat = fs.statSync(fullPath)

    if (stat.isDirectory()) {
      files.push(...(await getAllFiles(fullPath)))
    } else {
      // Return all files, not just those with allowed extensions
      files.push(fullPath)
    }
  }

  return files
}

/**
 * @param {string} sourceFile
 * @param {string} targetFile
 * @returns {Promise<boolean>}
 */
async function needsTranslation(sourceFile: string, targetFile: string) {
  // If --all flag is set, always translate
  if (translateAll) {
    return true
  }

  if (!fs.existsSync(targetFile)) {
    return true
  }

  const sourceStats = fs.statSync(sourceFile)
  const targetStats = fs.statSync(targetFile)

  const sourceTime = Math.floor(sourceStats.mtimeMs / 1000)
  const targetTime = Math.floor(targetStats.mtimeMs / 1000)

  return sourceTime > targetTime
}

async function syncFileStructure() {
  console.log("🔍 Synchronizing translation file structure...")

  const rootDir = resolveFromConfig(config.rootDir)
  const rootTranslateDir = resolveFromConfig(config.rootTranslateDir)

  // Check directory existence
  if (!fs.existsSync(rootDir)) {
    throw new Error(`Source directory not found: ${rootDir}`)
  }

  // Get original files structure
  const originalFiles = new Set()
  const originalDirs = new Set()

  function processOriginalPath(filePath: string) {
    originalFiles.add(filePath)
    let dir = path.dirname(filePath)
    while (dir !== rootDir) {
      originalDirs.add(dir)
      dir = path.dirname(dir)
    }
  }

  // Collect all original paths
  const files = await getAllFiles(rootDir)
  files.forEach(processOriginalPath)

  // Check each language
  const filteredLanguages = getFilteredLanguages()
  for (const [langCode, lang] of Object.entries(filteredLanguages)) {
    const langDir = path.join(rootTranslateDir, lang.code)
    if (!fs.existsSync(langDir)) continue

    console.log(`\n📂 Checking ${lang.name} structure...`)
    let removedFiles = 0
    let removedDirs = 0
    let removedLogs = 0

    // Check translated files
    async function checkTranslatedFiles(dir: string) {
      const items = fs.readdirSync(dir)

      for (const item of items) {
        const fullPath = path.join(dir, item)
        const stat = fs.statSync(fullPath)

        if (config.exclude?.some((excluded) => fullPath.includes(excluded))) {
          continue
        }

        if (stat.isDirectory()) {
          await checkTranslatedFiles(fullPath)
        } else {
          if (item.endsWith(".log")) {
            fs.unlinkSync(fullPath)
            removedLogs++
            console.log(`🗑️  Deleted log file: ${path.relative(langDir, fullPath)}`)
          } else {
            const ext = path.extname(item)
            if (config.allowedExtensions.includes(ext)) {
              const relativePath = path.relative(langDir, fullPath)
              const originalPath = path.join(rootDir, relativePath)

              if (!originalFiles.has(originalPath)) {
                fs.unlinkSync(fullPath)
                removedFiles++
                console.log(`🗑️  Deleted outdated file: ${relativePath}`)
              }
            }
          }
        }
      }
    }

    await checkTranslatedFiles(langDir)

    // Then check and remove empty directories
    function removeEmptyDirs(dir: string) {
      const items = fs.readdirSync(dir)

      for (const item of items) {
        const fullPath = path.join(dir, item)
        if (fs.statSync(fullPath).isDirectory()) {
          removeEmptyDirs(fullPath)
          if (fs.readdirSync(fullPath).length === 0) {
            fs.rmdirSync(fullPath)
            removedDirs++
            console.log(`🗑️  Removed empty directory: ${path.relative(langDir, fullPath)}`)
          }
        }
      }
    }

    removeEmptyDirs(langDir)

    if (removedFiles > 0 || removedDirs > 0 || removedLogs > 0) {
      console.log(`✨ Cleaned ${removedFiles} files, ${removedDirs} directories and ${removedLogs} log files`)
    } else {
      console.log(`✨ Structure is up to date`)
    }
  }
}

async function cleanupTranslations() {
  console.log("🧹 Checking for outdated configs...")

  const configTranslateDir = resolveFromConfig(config.configTranslateDir)

  if (!fs.existsSync(configTranslateDir)) {
    return
  }

  let totalRemoved = 0
  const removedFiles: string[] = []

  const configFiles = fs.readdirSync(configTranslateDir)
  for (const file of configFiles) {
    if (!file.endsWith(".ts")) continue
    const langCode = file.replace(".ts", "")

    // Only remove configs for languages that don't exist in the main config
    // Don't filter by current selection (targetLocale)
    if (langCode === "en" || Object.values(config.languages).some((l) => l.code === langCode)) {
      continue
    }

    const configPath = path.join(configTranslateDir, file)
    fs.unlinkSync(configPath)
    totalRemoved++
    removedFiles.push(configPath)
  }

  if (totalRemoved > 0) {
    console.log(`\n🗑️ Removed ${totalRemoved} outdated language configs:`)
    removedFiles.forEach((file) => console.log(`  - ${file}`))
    console.log("")
  } else {
    console.log("✨ No outdated language configs found\n")
  }
}

/**
 * @param {string} file
 * @param {string} targetPath
 * @param {Object} lang
 * @param {string} firstModelKey
 * @param {string} rootDir
 */
async function translateFile(file: string, targetPath: string, lang: Language, firstModelKey: string, rootDir: string, modelIndex: number = 0) {
  const startTime = Date.now()
  const content = fs.readFileSync(file, "utf8")
  let translatedContent = ""

  try {
    const parts = splitByH2(content)

    for (const part of parts) {
      const translatedPart = await translateMarkdown(part, firstModelKey, lang.name, lang.code, modelIndex)
      translatedContent += translatedPart + "\n\n"
    }

    translatedContent = applyContentReplacements(translatedContent, lang.code)

    // Validate HTML tag balance before saving
    const originalBalance = checkHtmlTagBalance(content)
    const translatedBalance = checkHtmlTagBalance(translatedContent)

    if (!translatedBalance.balanced) {
      // Save to log file for manual review (silent)
      const logPath = targetPath.replace(path.extname(targetPath), ".validation.log")
      const relativePath = path.relative(rootDir, file)
      const logContent = [
        `Translation validation failed for ${relativePath}`,
        `Language: ${lang.name} (${lang.code})`,
        ``,
        `Original HTML tags:`,
        `  - DIV open: ${originalBalance.openCount}`,
        `  - DIV close: ${originalBalance.closeCount}`,
        `  - Balanced: ${originalBalance.balanced}`,
        ``,
        `Translated HTML tags:`,
        `  - DIV open: ${translatedBalance.openCount}`,
        `  - DIV close: ${translatedBalance.closeCount}`,
        `  - Balanced: ${translatedBalance.balanced}`,
        `  - Unclosed tags: ${translatedBalance.unclosedTags.join(", ") || "none"}`,
        ``,
        `Translated content:`,
        `${"=".repeat(80)}`,
        translatedContent,
      ].join("\n")

      fs.writeFileSync(logPath, logContent)
    }

    fs.mkdirSync(path.dirname(targetPath), { recursive: true })
    fs.writeFileSync(targetPath, translatedContent.trim())

    const duration = ((Date.now() - startTime) / 1000).toFixed(1)
    const relativePath = path.relative(rootDir, file)

    if (translatedBalance.balanced) {
      console.log(`✅ ${relativePath} → ${lang.name} (${duration}s)`)
    } else {
      console.log(`⚠️  ${relativePath} → ${lang.name} (${duration}s) - HTML tags may need review`)
    }
  } catch (error: any) {
    const relativePath = path.relative(rootDir, file)
    console.error(`❌ ${relativePath} → ${lang.name}: ${error.message}`)

    if (translatedContent.trim()) {
      const logPath = targetPath.replace(path.extname(targetPath), ".log")
      fs.writeFileSync(logPath, translatedContent.trim())
    }
  }
}

/**
 * Runs project build and returns files with compilation errors
 */
async function checkBuildErrors(rootDir: string): Promise<FileWithError[]> {
  console.log("\n🔍 Checking compilation errors...")

  try {
    // Get parent directory (monorepo root)
    const monorepoRoot = path.resolve(rootDir, "../../../")

    // Use build command from config or default
    const buildCommand = config.buildCommand || "pnpm build"

    // Run build
    const { exec } = await import("child_process")
    const { promisify } = await import("util")
    const execAsync = promisify(exec)

    try {
      await execAsync(buildCommand, {
        cwd: monorepoRoot,
        env: { ...process.env, NODE_ENV: "production" },
      })
      console.log("✅ Build completed successfully!")
      return []
    } catch (buildError: any) {
      // Parse errors from build output
      const errorOutput = buildError.stdout + buildError.stderr
      const filesWithErrors: FileWithError[] = []
      const processedFiles = new Set<string>()

      console.log("🔍 Analyzing build output for errors...")

      // Debug: show part of the error output
      if (errorOutput.includes("i18n")) {
        console.log("📋 Found i18n-related errors in output")
      }

      // Patterns to search for errors in files
      const patterns = [
        // VitePress/YAML errors - specific pattern for the error you're seeing
        /file:\s*([^\s]+\.md)/gi,
        // TypeScript/JavaScript errors
        /([^\s]+\.(ts|js|vue)):\d+:\d+.*?(?:error|Error)/gi,
        // Markdown/VitePress errors
        /(?:Error|error).*?([^\s]+\.md)/gi,
        // Vue SFC errors
        /\[vue.*?\].*?([^\s]+\.vue)/gi,
        // Build errors with file path
        /\[.*?\].*?error.*?file:\s*([^\s]+)/gi,
        // General pattern
        /([^\s]+\.(md|vue|ts|js)).*?(?:error|Error)/gi,
      ]

      for (const pattern of patterns) {
        const matches = errorOutput.matchAll(pattern)

        for (const match of matches) {
          let errorFile = match[1]

          // Handle different match groups from different patterns
          if (!errorFile && match[2]) {
            errorFile = match[2]
          }

          if (!errorFile) continue

          // Check if this is a file from translations directory
          if ((errorFile.includes("/i18n/") || errorFile.includes("\\i18n\\")) && !processedFiles.has(errorFile)) {
            processedFiles.add(errorFile)

            // Extract language and original path from error file path
            const langMatch = errorFile.match(/[\/\\]i18n[\/\\]([^\/\\]+)[\/\\](.+)/)
            if (langMatch) {
              const langCode = langMatch[1]
              const relativePath = langMatch[2]
              const lang = Object.values(config.languages).find((l) => l.code === langCode)

              if (lang) {
                // Extract more detailed error information from the full output
                const lines = errorOutput.split("\n")
                let errorDetails = match[0]

                // Look for more context around the error
                const errorLineIndex = lines.findIndex((line: string) => line.includes(errorFile))
                if (errorLineIndex >= 0) {
                  // Get a few lines around the error for better context
                  const contextLines = lines
                    .slice(Math.max(0, errorLineIndex - 2), Math.min(lines.length, errorLineIndex + 3))
                    .filter((line: string) => line.trim())

                  if (contextLines.length > 0) {
                    errorDetails = contextLines.join(" | ")
                  }
                }

                // Try to extract line and column information
                const lineMatch = errorDetails.match(/(?:line|Line)\s+(\d+)(?:.*?(?:column|Column)\s+(\d+))?/)
                const finalErrorDetails = lineMatch ? `Line ${lineMatch[1]}${lineMatch[2] ? `, Column ${lineMatch[2]}` : ""}: ${errorDetails}` : errorDetails

                filesWithErrors.push({
                  file: path.join(rootDir, relativePath),
                  targetPath: path.resolve(errorFile),
                  lang: lang,
                  error: finalErrorDetails.substring(0, 200) + (finalErrorDetails.length > 200 ? "..." : ""),
                })
              }
            }
          }
        }
      }

      if (filesWithErrors.length > 0) {
        console.log(`⚠️ Found ${filesWithErrors.length} files with compilation errors`)
        filesWithErrors.forEach((fileError) => {
          console.log(`  📄 ${path.relative(rootDir, fileError.file)} (${fileError.lang.name})`)
          console.log(`      ${fileError.error.substring(0, 100)}...`)
        })
        return filesWithErrors
      }

      // If no specific errors found but build failed
      console.log("⚠️ Build failed with errors, but specific files could not be determined")
      return []
    }
  } catch (error: any) {
    console.error("❌ Error checking build:", error.message)
    return []
  }
}

/**
 * Retranslates files with compilation errors using alternative models
 */
async function retranslateFilesWithErrors(filesWithErrors: FileWithError[], rootDir: string) {
  if (filesWithErrors.length === 0) return

  console.log("\n🔄 Retranslating files with errors...")

  // Get list of models for fallback
  const modelKeys = Object.keys(config.models)

  for (const fileWithError of filesWithErrors) {
    console.log(`\n📝 Retranslating: ${path.relative(rootDir, fileWithError.file)} → ${fileWithError.lang.name}`)
    console.log(`   Error: ${fileWithError.error}`)

    let translated = false

    // Try all models and their variants in sequence
    for (let i = 1; i < modelKeys.length && !translated; i++) {
      const modelKey = modelKeys[i]
      const modelConfig = config.models[modelKey]
      const modelVariants = Array.isArray(modelConfig) ? modelConfig : [modelConfig]

      for (let variantIndex = 0; variantIndex < modelVariants.length && !translated; variantIndex++) {
        const modelName = Array.isArray(modelConfig) ? modelConfig[variantIndex] : modelConfig.name
        console.log(`   Trying model: ${modelKey} (${modelName})`)

        try {
          await translateFile(fileWithError.file, fileWithError.targetPath, fileWithError.lang, modelKey, rootDir, variantIndex)
          console.log(`   ✅ Successfully retranslated with model ${modelKey} (${modelName})`)
          translated = true
        } catch (error: any) {
          console.log(`   ❌ Translation error: ${error.message}`)
        }
      }
    }

    if (!translated) {
      console.error(`   ❌ Could not retranslate with any model`)
    }
  }
}

/**
 * @param {string} sourceFile
 * @param {string} targetPath
 * @param {string} rootDir
 */
async function copyAssetFile(sourceFile: string, targetPath: string, rootDir: string) {
  const startTime = Date.now()

  try {
    fs.mkdirSync(path.dirname(targetPath), { recursive: true })
    fs.copyFileSync(sourceFile, targetPath)

    const duration = ((Date.now() - startTime) / 1000).toFixed(1)
    const relativePath = path.relative(rootDir, sourceFile)
    console.log(`📄 ${relativePath} → copied (${duration}s)`)
  } catch (error: any) {
    const relativePath = path.relative(rootDir, sourceFile)
    console.error(`❌ ${relativePath} → copy failed: ${error.message}`)
  }
}

async function translateFiles() {
  try {
    const firstModelKey = Object.keys(config.models)[0]
    console.log(`💡 Starting translation with model: ${firstModelKey}`)

    const rootDir = resolveFromConfig(config.rootDir)
    const rootTranslateDir = resolveFromConfig(config.rootTranslateDir)
    const configDirPath = resolveFromConfig(config.configDir)
    const configTranslateDir = resolveFromConfig(config.configTranslateDir)

    console.log(`📁 Source directory: ${rootDir}`)
    console.log(`📁 Translation directory: ${rootTranslateDir}`)

    const filteredLanguages = getFilteredLanguages()
    const languageNames = Object.values(filteredLanguages)
      .map((lang) => lang.name)
      .join(", ")
    console.log(`🌍 Target languages: ${languageNames} (${Object.keys(filteredLanguages).length} languages)`)

    await syncFileStructure()
    await cleanupTranslations()

    // Get source config from configDir
    const sourceConfigPath = path.join(configDirPath, "en.ts")
    console.log(`📝 Translating configs from ${sourceConfigPath}`)

    if (!fs.existsSync(sourceConfigPath)) {
      throw new Error(`Source config not found: ${sourceConfigPath}`)
    }

    try {
      const sourceConfig = fs.readFileSync(sourceConfigPath, "utf8")

      for (const [langCode, lang] of Object.entries(filteredLanguages)) {
        const targetConfigPath = path.join(configTranslateDir, `${lang.code}.ts`)

        const startTime = Date.now()

        if (!(await needsTranslation(sourceConfigPath, targetConfigPath))) {
          console.log(`✨ Config ${lang.name} is up to date`)
          continue
        }

        try {
          const translatedConfig = await translateMarkdown(sourceConfig, firstModelKey, lang.name, lang.code, 0)
          const finalConfig = applyContentReplacements(translatedConfig, lang.code)

          const configDirTarget = path.dirname(targetConfigPath)
          if (!fs.existsSync(configDirTarget)) {
            fs.mkdirSync(configDirTarget, { recursive: true })
          }

          fs.writeFileSync(targetConfigPath, finalConfig)

          const duration = ((Date.now() - startTime) / 1000).toFixed(1)
          console.log(`✅ Config → ${lang.name} (${duration}s)`)
        } catch (error: any) {
          console.error(`❌ Config → ${lang.name}: ${error.message}`)
        }
      }
    } catch (error: any) {
      console.error(`❌ Error reading config:`, error.message)
    }

    const files = await getAllFiles(rootDir)
    console.log(`📝 Found ${files.length} files in ${rootDir}`)

    const translatableTasks: TranslateTask[] = []
    const assetTasks: AssetTask[] = []

    for (const [langCode, lang] of Object.entries(filteredLanguages)) {
      for (const file of files) {
        const relativePath = path.relative(rootDir, file)
        const targetPath = path.join(rootTranslateDir, lang.code, relativePath)
        const ext = path.extname(file)

        if (config.allowedExtensions.includes(ext)) {
          if (await needsTranslation(file, targetPath)) {
            translatableTasks.push({ file, lang, targetPath })
          }
        } else {
          if (await needsTranslation(file, targetPath)) {
            assetTasks.push({ file, lang, targetPath })
          }
        }
      }
    }

    const totalTasks = translatableTasks.length + assetTasks.length

    if (totalTasks === 0) {
      console.log("✨ All files are up to date!")
      return
    }

    console.log(`⏳ Need to process ${totalTasks} files (${translatableTasks.length} for translation, ${assetTasks.length} for copying)`)

    for (const task of assetTasks) {
      await copyAssetFile(task.file, task.targetPath, rootDir)
    }

    for (const task of translatableTasks) {
      await translateFile(task.file, task.targetPath, task.lang, firstModelKey, rootDir)
    }

    // Check compilation errors after translation (if enabled in config)
    if (config.checkBuildErrors) {
      const filesWithErrors = await checkBuildErrors(rootDir)

      if (filesWithErrors.length > 0) {
        // Retranslate files with errors
        await retranslateFilesWithErrors(filesWithErrors, rootDir)

        // Final check
        const finalErrors = await checkBuildErrors(rootDir)
        if (finalErrors.length > 0) {
          console.log("\n⚠️ Files with compilation errors remain:")
          for (const error of finalErrors) {
            console.log(`  - ${path.relative(rootDir, error.file)} → ${error.lang.name}`)
          }
        }
      }
    }

    console.log("\n✨ Done!")
  } catch (error: any) {
    console.error(`❌ Error:`, error.message)
  }
}

translateFiles()
