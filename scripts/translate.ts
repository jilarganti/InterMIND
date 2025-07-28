/**
 * Automated translation script for project documentation and files
 *
 * Description:
 * - Translates Markdown, Vue, TypeScript and JavaScript files into multiple languages
 * - Uses AI models (OpenAI GPT-4 and Anthropic Claude) for high-quality translations
 * - Automatically switches between models on errors
 * - Synchronizes file structure between originals and translations
 * - Translates only modified files (incremental translation)
 * - Optionally validates translated files for compilation errors
 * - Automatically retranslates problematic files with alternative models when errors are detected
 *
 * Usage:
 * tsx translate.ts <config-path>
 *
 * Example:
 * tsx ../../scripts/translate.ts ./scripts/translateConfig.ts
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
  name: string
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
  models: Record<string, Model>
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

// Get config path from command line arguments
const configPath = process.argv[2]
const resolvedConfigPath = path.resolve(configPath)
const { config } = (await import(`file://${resolvedConfigPath}`)) as { config: Config }

// Define base config directory for proper path resolution
const configDir = path.dirname(resolvedConfigPath)

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

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

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

async function translateWithOpenAI(content: string, targetLang: string, langCode: string) {
  const completion = await openai.chat.completions.create({
    model: config.models.gpt4.name,
    temperature: 0,
    messages: [{ role: "user", content: getPromptForTranslation(content, targetLang, langCode) }],
  })

  const result = completion.choices[0].message.content || ""
  const match = result.match(/<translated_markdown>([\s\S]*)<\/translated_markdown>/)
  return match ? match[1].trim() : result
}

async function translateWithClaude(content: string, targetLang: string, langCode: string) {
  const message = await anthropic.messages.create({
    model: config.models.claude.name,
    max_tokens: 4096,
    temperature: 0,
    messages: [{ role: "user", content: getPromptForTranslation(content, targetLang, langCode) }],
  })

  const contentBlock = message.content[0]
  const result = contentBlock.type === "text" ? contentBlock.text : ""
  const match = result.match(/<translated_markdown>([\s\S]*)<\/translated_markdown>/)
  return match ? match[1].trim() : result
}

async function translateWithModel(model: string, content: string, targetLang: string, langCode: string) {
  let translatedContent
  switch (model) {
    case "gpt4":
      translatedContent = await translateWithOpenAI(content, targetLang, langCode)
      break
    case "claude":
      translatedContent = await translateWithClaude(content, targetLang, langCode)
      break
    default:
      throw new Error(`Unknown model: ${model}`)
  }

  // Check for incomplete translation
  // if (/\[[^[\]]+(\.\.\.|[?])\]/.test(translatedContent)) {
  //   throw new Error("Incomplete translation")
  // }

  // Check if text ends with incomplete translation
  if (/\[[^<][^[\]]*?(\.\.\.|[?])\]\s*$/.test(translatedContent)) {
    throw new Error("Incomplete translation")
  }

  return translatedContent.trim()
}

async function translateMarkdown(content: string, currentModel: string, targetLang: string, langCode: string) {
  try {
    if (!content.trim()) return content

    const translatedContent = await translateWithModel(currentModel, content, targetLang, langCode)
    return translatedContent
  } catch (error) {
    // Get next model
    const nextModel = getNextModel(currentModel)

    if (nextModel) {
      console.log(`⚠️ Translation error with model ${currentModel}: ${error.message}`)
      console.log(`↪️ Trying model ${nextModel}...`)
      // Recursively call translation with next model
      return await translateMarkdown(content, nextModel, targetLang, langCode)
    }

    // If no more models - throw error
    console.error(`❌ All translation models exhausted. Last error: ${error.message}`)
    throw error
  }
}

function splitByH2(content: string) {
  const parts = content.split("\n## ")
  return parts.map((part, i) => (i === 0 ? part.trim() : "## " + part.trim())).filter(Boolean)
}

async function getAllFiles(dir: string): Promise<string[]> {
  const files: string[] = []
  const items = fs.readdirSync(dir)

  for (const item of items) {
    const fullPath = path.join(dir, item)

    if (config.exclude?.some((excluded) => fullPath.includes(excluded))) {
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
async function needsTranslation(sourceFile, targetFile) {
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
  for (const [langCode, lang] of Object.entries(config.languages)) {
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
async function translateFile(file: string, targetPath: string, lang: Language, firstModelKey: string, rootDir: string) {
  const startTime = Date.now()
  const content = fs.readFileSync(file, "utf8")
  let translatedContent = ""

  try {
    const parts = splitByH2(content)

    for (const part of parts) {
      const translatedPart = await translateMarkdown(part, firstModelKey, lang.name, lang.code)
      translatedContent += translatedPart + "\n\n"
    }

    translatedContent = applyContentReplacements(translatedContent, lang.code)

    fs.mkdirSync(path.dirname(targetPath), { recursive: true })
    fs.writeFileSync(targetPath, translatedContent.trim())

    const duration = ((Date.now() - startTime) / 1000).toFixed(1)
    const relativePath = path.relative(rootDir, file)
    console.log(`✅ ${relativePath} → ${lang.name} (${duration}s)`)
  } catch (error) {
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

      // Patterns to search for errors in files
      const patterns = [
        // TypeScript/JavaScript errors
        /([^\s]+\.(ts|js|vue)):\d+:\d+.*?(?:error|Error)/gi,
        // Markdown/VitePress errors
        /(?:Error|error).*?([^\s]+\.md)/gi,
        // Vue SFC errors
        /\[vue.*?\].*?([^\s]+\.vue)/gi,
        // General pattern
        /([^\s]+\.(md|vue|ts|js)).*?(?:error|Error)/gi,
      ]

      for (const pattern of patterns) {
        const matches = errorOutput.matchAll(pattern)

        for (const match of matches) {
          const errorFile = match[1]

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
                // Extract more detailed error information
                const errorContext = match[0]
                const lineMatch = errorContext.match(/:(\d+):(\d+)/)
                const errorDetails = lineMatch ? `Line ${lineMatch[1]}, Column ${lineMatch[2]}` : errorContext

                filesWithErrors.push({
                  file: path.join(rootDir, relativePath),
                  targetPath: path.resolve(errorFile),
                  lang: lang,
                  error: errorDetails,
                })
              }
            }
          }
        }
      }

      if (filesWithErrors.length > 0) {
        console.log(`⚠️ Found ${filesWithErrors.length} files with compilation errors`)
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

    // Try all models in sequence
    for (let i = 1; i < modelKeys.length && !translated; i++) {
      const modelKey = modelKeys[i]
      console.log(`   Trying model: ${modelKey}`)

      try {
        await translateFile(fileWithError.file, fileWithError.targetPath, fileWithError.lang, modelKey, rootDir)

        // Check if error is fixed
        const newErrors = await checkBuildErrors(rootDir)
        const stillHasError = newErrors.some((e) => e.targetPath === fileWithError.targetPath && e.lang.code === fileWithError.lang.code)

        if (!stillHasError) {
          console.log(`   ✅ Successfully translated with model ${modelKey}`)
          translated = true
        } else {
          console.log(`   ⚠️ Compilation error persists`)
        }
      } catch (error: any) {
        console.log(`   ❌ Translation error: ${error.message}`)
      }
    }

    if (!translated) {
      console.error(`   ❌ Could not fix error with any model`)
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
  } catch (error) {
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

      for (const [langCode, lang] of Object.entries(config.languages)) {
        const targetConfigPath = path.join(configTranslateDir, `${lang.code}.ts`)

        const startTime = Date.now()

        if (!(await needsTranslation(sourceConfigPath, targetConfigPath))) {
          console.log(`✨ Config ${lang.name} is up to date`)
          continue
        }

        try {
          const translatedConfig = await translateMarkdown(sourceConfig, firstModelKey, lang.name, lang.code)
          const finalConfig = applyContentReplacements(translatedConfig, lang.code)

          const configDirTarget = path.dirname(targetConfigPath)
          if (!fs.existsSync(configDirTarget)) {
            fs.mkdirSync(configDirTarget, { recursive: true })
          }

          fs.writeFileSync(targetConfigPath, finalConfig)

          const duration = ((Date.now() - startTime) / 1000).toFixed(1)
          console.log(`✅ Config → ${lang.name} (${duration}s)`)
        } catch (error) {
          console.error(`❌ Config → ${lang.name}: ${error.message}`)
        }
      }
    } catch (error) {
      console.error(`❌ Error reading config:`, error.message)
    }

    const files = await getAllFiles(rootDir)
    console.log(`📝 Found ${files.length} files in ${rootDir}`)

    const translatableTasks: TranslateTask[] = []
    const assetTasks: AssetTask[] = []

    for (const [langCode, lang] of Object.entries(config.languages)) {
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
  } catch (error) {
    console.error(`❌ Error:`, error.message)
  }
}

translateFiles()
