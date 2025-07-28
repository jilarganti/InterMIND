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
  languages: Record<string, Language>
  models: Record<string, Model>
  exclude?: string[]
  allowedExtensions: string[]
}

/**
 * Run "vercal pull" to load environment variables
 * @see https://vercel.com/docs/cli/pull
 */
dotenv.config({ path: [".vercel/.env.development.local", ".env.local"] })

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Получаем путь к конфигу из аргументов командной строки
const configPath = process.argv[2] || "./config.js"
const resolvedConfigPath = path.resolve(configPath)
const { config } = (await import(`file://${resolvedConfigPath}`)) as { config: Config }

// Определяем базовую директорию конфига для правильного разрешения путей
const configDir = path.dirname(resolvedConfigPath)

// Функция для разрешения путей относительно конфига
function resolveFromConfig(relativePath: string) {
  return path.resolve(configDir, relativePath)
}

// Импорт prompt функции
const promptModulePath = path.resolve(configDir, "translatePrompt.js")
const { getPromptForTranslation } = await import(`file://${promptModulePath}`)

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })
const xai = new OpenAI({ apiKey: process.env.XAI_API_KEY, baseURL: "https://api.x.ai/v1" })

// Функция для получения следующей модели из конфига
function getNextModel(currentModel: string) {
  const modelEntries = Object.entries(config.models)
  const currentIndex = modelEntries.findIndex(([key]) => key === currentModel)

  if (currentIndex === -1 || currentIndex === modelEntries.length - 1) {
    return null
  }

  return modelEntries[currentIndex + 1][0]
}

// Функция для применения всех необходимых замен в контенте
function applyContentReplacements(content: string, langCode: string) {
  let modifiedContent = content

  // Замена для конфигов
  modifiedContent = modifiedContent.replace(/export const en =/, `export const ${langCode} =`)

  // Замена BASE_PATH
  modifiedContent = modifiedContent.replace(/BASE_PATH = ""/, `BASE_PATH = "/${langCode}"`)

  return modifiedContent
}

async function translateWithOpenAI(content: string, targetLang: string, langCode: string) {
  const completion = await openai.chat.completions.create({
    model: config.models.gpt4.name,
    temperature: 0,
    messages: [{ role: "user", content: getPromptForTranslation(content, targetLang, langCode) }],
  })

  const result = completion.choices[0].message.content
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

async function translateWithGrok(content: string, targetLang: string, langCode: string) {
  const completion = await xai.chat.completions.create({
    model: config.models.grok.name,
    temperature: 0,
    messages: [{ role: "user", content: getPromptForTranslation(content, targetLang, langCode) }],
  })

  const result = completion.choices[0].message.content
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
    case "grok":
      translatedContent = await translateWithGrok(content, targetLang, langCode)
      break
    default:
      throw new Error(`Неизвестная модель: ${model}`)
  }

  // Проверяем на неполный перевод
  // if (/\[[^[\]]+(\.\.\.|[?])\]/.test(translatedContent)) {
  //   throw new Error("Неполный перевод")
  // }

  // Проверяем что текст не заканчивается на неполный перевод
  if (/\[[^<][^[\]]*?(\.\.\.|[?])\]\s*$/.test(translatedContent)) {
    throw new Error("Неполный перевод")
  }

  return translatedContent.trim()
}

async function translateMarkdown(content: string, currentModel: string, targetLang: string, langCode: string) {
  try {
    if (!content.trim()) return content

    const translatedContent = await translateWithModel(currentModel, content, targetLang, langCode)
    return translatedContent
  } catch (error) {
    // Получаем следующую модель
    const nextModel = getNextModel(currentModel)

    if (nextModel) {
      console.log(`⚠️ Ошибка перевода с моделью ${currentModel}: ${error.message}`)
      console.log(`↪️ Пробуем модель ${nextModel}...`)
      // Рекурсивно вызываем перевод со следующей моделью
      return await translateMarkdown(content, nextModel, targetLang, langCode)
    }

    // Если следующей модели нет - пробрасываем ошибку
    console.error(`❌ Все модели перевода исчерпаны. Последняя ошибка: ${error.message}`)
    throw error
  }
}

function splitByH2(content: string) {
  const parts = content.split("\n## ")
  return parts.map((part, i) => (i === 0 ? part.trim() : "## " + part.trim())).filter(Boolean)
}

async function getAllFiles(dir: string) {
  const files = []
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
      // Возвращаем все файлы, не только с разрешенными расширениями
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
  console.log("🔍 Синхронизация файловой структуры переводов...")

  const rootDir = resolveFromConfig(config.rootDir)
  const rootTranslateDir = resolveFromConfig(config.rootTranslateDir)

  // Проверяем существование директорий
  if (!fs.existsSync(rootDir)) {
    throw new Error(`Исходная директория не найдена: ${rootDir}`)
  }

  // Получаем структуру оригинальных файлов
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

  // Собираем все оригинальные пути
  const files = await getAllFiles(rootDir)
  files.forEach(processOriginalPath)

  // Проверяем каждый язык
  for (const [langCode, lang] of Object.entries(config.languages)) {
    const langDir = path.join(rootTranslateDir, lang.code)
    if (!fs.existsSync(langDir)) continue

    console.log(`\n📂 Проверка структуры ${lang.name}...`)
    let removedFiles = 0
    let removedDirs = 0
    let removedLogs = 0

    // Проверяем файлы перевода
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
            console.log(`🗑️  Удален лог файл: ${path.relative(langDir, fullPath)}`)
          } else {
            const ext = path.extname(item)
            if (config.allowedExtensions.includes(ext)) {
              const relativePath = path.relative(langDir, fullPath)
              const originalPath = path.join(rootDir, relativePath)

              if (!originalFiles.has(originalPath)) {
                fs.unlinkSync(fullPath)
                removedFiles++
                console.log(`🗑️  Удален устаревший файл: ${relativePath}`)
              }
            }
          }
        }
      }
    }

    await checkTranslatedFiles(langDir)

    // Затем проверяем и удаляем пустые директории
    function removeEmptyDirs(dir: string) {
      const items = fs.readdirSync(dir)

      for (const item of items) {
        const fullPath = path.join(dir, item)
        if (fs.statSync(fullPath).isDirectory()) {
          removeEmptyDirs(fullPath)
          if (fs.readdirSync(fullPath).length === 0) {
            fs.rmdirSync(fullPath)
            removedDirs++
            console.log(`🗑️  Удалена пустая директория: ${path.relative(langDir, fullPath)}`)
          }
        }
      }
    }

    removeEmptyDirs(langDir)

    if (removedFiles > 0 || removedDirs > 0 || removedLogs > 0) {
      console.log(`✨ Очищено ${removedFiles} файлов, ${removedDirs} директорий и ${removedLogs} лог файлов`)
    } else {
      console.log(`✨ Структура актуальна`)
    }
  }
}

async function cleanupTranslations() {
  console.log("🧹 Проверка устаревших конфигов...")

  const configTranslateDir = resolveFromConfig(config.configTranslateDir)

  if (!fs.existsSync(configTranslateDir)) {
    return
  }

  let totalRemoved = 0
  const removedFiles = []

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
    console.log(`\n🗑️ Удалено ${totalRemoved} устаревших языковых конфигов:`)
    removedFiles.forEach((file) => console.log(`  - ${file}`))
    console.log("")
  } else {
    console.log("✨ Устаревших языковых конфигов не найдено\n")
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
    console.log(`💡 Начинаем перевод с модели: ${firstModelKey}`)

    const rootDir = resolveFromConfig(config.rootDir)
    const rootTranslateDir = resolveFromConfig(config.rootTranslateDir)
    const configDirPath = resolveFromConfig(config.configDir)
    const configTranslateDir = resolveFromConfig(config.configTranslateDir)

    console.log(`📁 Исходная директория: ${rootDir}`)
    console.log(`📁 Директория переводов: ${rootTranslateDir}`)

    await syncFileStructure()
    await cleanupTranslations()

    // Исходный конфиг берем из configDir
    const sourceConfigPath = path.join(configDirPath, "en.ts")
    console.log(`📝 Переводим конфиги из ${sourceConfigPath}`)

    if (!fs.existsSync(sourceConfigPath)) {
      throw new Error(`Не найден исходный конфиг: ${sourceConfigPath}`)
    }

    try {
      const sourceConfig = fs.readFileSync(sourceConfigPath, "utf8")

      for (const [langCode, lang] of Object.entries(config.languages)) {
        const targetConfigPath = path.join(configTranslateDir, `${lang.code}.ts`)

        const startTime = Date.now()

        if (!(await needsTranslation(sourceConfigPath, targetConfigPath))) {
          console.log(`✨ Конфиг ${lang.name} актуален`)
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
          console.log(`✅ Конфиг → ${lang.name} (${duration}s)`)
        } catch (error) {
          console.error(`❌ Конфиг → ${lang.name}: ${error.message}`)
        }
      }
    } catch (error) {
      console.error(`❌ Ошибка чтения конфига:`, error.message)
    }

    const files = await getAllFiles(rootDir)
    console.log(`📝 Найдено ${files.length} файлов в ${rootDir}`)

    const translatableTasks = []
    const assetTasks = []

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
      console.log("✨ Все файлы актуальны!")
      return
    }

    console.log(`⏳ Требуется обработать ${totalTasks} файлов (${translatableTasks.length} для перевода, ${assetTasks.length} для копирования)`)

    for (const task of assetTasks) {
      await copyAssetFile(task.file, task.targetPath, rootDir)
    }

    for (const task of translatableTasks) {
      await translateFile(task.file, task.targetPath, task.lang, firstModelKey, rootDir)
    }

    console.log("\n✨ Готово!")
  } catch (error) {
    console.error(`❌ Ошибка:`, error.message)
  }
}

translateFiles()
