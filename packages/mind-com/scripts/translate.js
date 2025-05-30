import Anthropic from "@anthropic-ai/sdk"
import OpenAI from "openai"
import * as fs from "fs"
import * as path from "path"
import * as dotenv from "dotenv"
import { config } from "./config.js"
import { getPromptForTranslation } from "./prompt.js"

dotenv.config()

// let hasOpenAI = process.env.OPENAI_API_KEY
// let hasAnthropic = process.env.ANTHROPIC_API_KEY
// let hasXAI = process.env.XAI_API_KEY

// if (!hasOpenAI && !hasAnthropic && !hasXAI) {
//   console.error("❌ Добавьте API ключи в .env файл для LLM моделей")
//   process.exit(1)
// }

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })
const xai = new OpenAI({ apiKey: process.env.XAI_API_KEY, baseURL: "https://api.x.ai/v1" })

// Функция для получения следующей модели из конфига
function getNextModel(currentModel) {
  const modelEntries = Object.entries(config.models)
  const currentIndex = modelEntries.findIndex(([key]) => key === currentModel)

  if (currentIndex === -1 || currentIndex === modelEntries.length - 1) {
    return null
  }

  return modelEntries[currentIndex + 1][0]
}

// Функция для применения всех необходимых замен в контенте
function applyContentReplacements(content, langCode) {
  let modifiedContent = content

  // Замена для конфигов
  modifiedContent = modifiedContent.replace(/export const en =/, `export const ${langCode} =`)

  // Замена BASE_PATH
  modifiedContent = modifiedContent.replace(/BASE_PATH = ""/, `BASE_PATH = "/${langCode}"`)

  return modifiedContent
}

async function translateWithOpenAI(content, targetLang, langCode) {
  const completion = await openai.chat.completions.create({
    model: config.models.gpt4.name,
    temperature: 0,
    messages: [{ role: "user", content: getPromptForTranslation(content, targetLang, langCode) }],
  })

  const result = completion.choices[0].message.content
  const match = result.match(/<translated_markdown>([\s\S]*)<\/translated_markdown>/)
  return match ? match[1].trim() : result
}

async function translateWithClaude(content, targetLang, langCode) {
  const message = await anthropic.messages.create({
    model: config.models.claude.name,
    max_tokens: 4096,
    temperature: 0,
    messages: [{ role: "user", content: getPromptForTranslation(content, targetLang, langCode) }],
  })

  const result = message.content[0].text
  const match = result.match(/<translated_markdown>([\s\S]*)<\/translated_markdown>/)
  return match ? match[1].trim() : result
}

async function translateWithGrok(content, targetLang, langCode) {
  const completion = await xai.chat.completions.create({
    model: config.models.grok.name,
    temperature: 0,
    messages: [{ role: "user", content: getPromptForTranslation(content, targetLang, langCode) }],
  })

  const result = completion.choices[0].message.content
  const match = result.match(/<translated_markdown>([\s\S]*)<\/translated_markdown>/)
  return match ? match[1].trim() : result
}

async function translateWithModel(model, content, targetLang, langCode) {
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

async function translateMarkdown(content, currentModel, targetLang, langCode) {
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

function splitByH2(content) {
  const parts = content.split("\n## ")
  return parts.map((part, i) => (i === 0 ? part.trim() : "## " + part.trim())).filter(Boolean)
}

async function getAllMarkdownFiles(dir) {
  const files = []
  const items = fs.readdirSync(dir)

  for (const item of items) {
    const fullPath = path.join(dir, item)

    if (config.exclude?.some((excluded) => fullPath.includes(excluded))) {
      continue
    }

    const stat = fs.statSync(fullPath)

    if (stat.isDirectory()) {
      files.push(...(await getAllMarkdownFiles(fullPath)))
    } else if (item.endsWith(".md")) {
      files.push(fullPath)
    }
  }

  return files
}

async function needsTranslation(sourceFile, targetFile) {
  if (!fs.existsSync(targetFile)) {
    console.log(`👻 Файл перевода не существует: ${targetFile}`)
    return true
  }

  const sourceStats = fs.statSync(sourceFile)
  const targetStats = fs.statSync(targetFile)

  // Округляем до секунд для избежания проблем с миллисекундами
  const sourceTime = Math.floor(sourceStats.mtimeMs / 1000)
  const targetTime = Math.floor(targetStats.mtimeMs / 1000)

  const needsUpdate = sourceTime > targetTime

  if (needsUpdate) {
    // console.log(`\n🔄 Требуется перевод:`)
    // console.log(`Source: ${sourceFile}`)
    // console.log(`- Modified: ${sourceStats.mtime.toLocaleString()}`)
    // console.log(`Target: ${targetFile}`)
    // console.log(`- Modified: ${targetStats.mtime.toLocaleString()}\n`)
  }

  return needsUpdate
}

async function syncFileStructure() {
  console.log("🔍 Синхронизация файловой структуры переводов...")

  // Получаем структуру оригинальных файлов
  const originalFiles = new Set()
  const originalDirs = new Set()

  function processOriginalPath(filePath) {
    originalFiles.add(filePath)
    let dir = path.dirname(filePath)
    while (dir !== config.rootDir) {
      originalDirs.add(dir)
      dir = path.dirname(dir)
    }
  }

  // Собираем все оригинальные пути
  const files = await getAllMarkdownFiles(config.rootDir)
  files.forEach(processOriginalPath)

  // Проверяем каждый язык
  for (const [langCode, lang] of Object.entries(config.languages)) {
    const langDir = path.join(config.rootTranslateDir, lang.code) // добавляем lang.code
    if (!fs.existsSync(langDir)) continue

    console.log(`\n📂 Проверка структуры ${lang.name}...`)
    let removedFiles = 0
    let removedDirs = 0
    let removedLogs = 0

    // Проверяем файлы перевода
    async function checkTranslatedFiles(dir) {
      const items = fs.readdirSync(dir)

      for (const item of items) {
        const fullPath = path.join(dir, item)
        const stat = fs.statSync(fullPath)

        // Пропускаем исключенные пути
        if (config.exclude?.some((excluded) => fullPath.includes(excluded))) {
          continue
        }

        if (stat.isDirectory()) {
          await checkTranslatedFiles(fullPath)
        } else {
          if (item.endsWith(".log")) {
            // Удаляем .log файлы
            fs.unlinkSync(fullPath)
            removedLogs++
            console.log(`🗑️  Удален лог файл: ${path.relative(langDir, fullPath)}`)
          } else if (item.endsWith(".md")) {
            // Проверяем markdown файлы
            const relativePath = path.relative(langDir, fullPath)
            const originalPath = path.join(config.rootDir, relativePath)

            if (!originalFiles.has(originalPath)) {
              fs.unlinkSync(fullPath)
              removedFiles++
              console.log(`🗑️  Удален устаревший файл: ${relativePath}`)
            }
          }
        }
      }
    }

    // Сначала проверяем и удаляем файлы
    await checkTranslatedFiles(langDir)

    // Затем проверяем и удаляем пустые директории
    function removeEmptyDirs(dir) {
      const items = fs.readdirSync(dir)

      for (const item of items) {
        const fullPath = path.join(dir, item)
        if (fs.statSync(fullPath).isDirectory()) {
          removeEmptyDirs(fullPath)
          // Проверяем, осталась ли директория пустой после рекурсии
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

  const configLangDir = path.join(config.configTranslateDir)

  if (!fs.existsSync(configLangDir)) {
    return
  }

  let totalRemoved = 0
  const removedFiles = []

  const configFiles = fs.readdirSync(configLangDir)
  for (const file of configFiles) {
    if (!file.endsWith(".ts")) continue
    const langCode = file.replace(".ts", "")

    if (langCode === "en" || Object.values(config.languages).some((l) => l.code === langCode)) {
      continue
    }

    const configPath = path.join(configLangDir, file)
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

async function translateFile(file, targetPath, lang, firstModelKey) {
  const startTime = Date.now()
  const content = fs.readFileSync(file, "utf8")
  let translatedContent = ""

  try {
    const parts = splitByH2(content)

    for (const part of parts) {
      const translatedPart = await translateMarkdown(part, firstModelKey, lang.name, lang.code)
      translatedContent += translatedPart + "\n\n"
    }

    // Применяем все замены к переведенному контенту
    translatedContent = applyContentReplacements(translatedContent, lang.code)

    fs.mkdirSync(path.dirname(targetPath), { recursive: true })
    fs.writeFileSync(targetPath, translatedContent.trim())

    const duration = ((Date.now() - startTime) / 1000).toFixed(1)
    const relativePath = path.relative(config.rootDir, file)
    console.log(`✅ ${relativePath} → ${lang.name} (${duration}s)`)
  } catch (error) {
    const relativePath = path.relative(config.rootDir, file)
    console.error(`❌ ${relativePath} → ${lang.name}: ${error.message}`)

    // Сохраняем промежуточный результат в лог при ошибке
    if (translatedContent.trim()) {
      const logPath = targetPath.replace(".md", ".log")
      fs.writeFileSync(logPath, translatedContent.trim())
    }
  }
}

async function translateFiles() {
  try {
    const firstModelKey = Object.keys(config.models)[0]
    console.log(`💡 Начинаем перевод с модели: ${firstModelKey}`)

    await syncFileStructure() // Добавляем сюда
    await cleanupTranslations()

    // Исходный конфиг берем из configDir
    const sourceConfigPath = path.join(config.configDir, "en.ts")
    console.log(`📝 Переводим конфиги из ${sourceConfigPath}`)

    if (!fs.existsSync(sourceConfigPath)) {
      throw new Error(`Не найден исходный конфиг: ${sourceConfigPath}`)
    }

    try {
      const sourceConfig = fs.readFileSync(sourceConfigPath, "utf8")

      for (const [langCode, lang] of Object.entries(config.languages)) {
        const targetConfigPath = path.join(config.configTranslateDir, `${lang.code}.ts`)

        const startTime = Date.now()

        if (!(await needsTranslation(sourceConfigPath, targetConfigPath))) {
          console.log(`✨ Конфиг ${lang.name} актуален`)
          continue
        }

        try {
          const translatedConfig = await translateMarkdown(sourceConfig, firstModelKey, lang.name, lang.code)

          // Применяем все замены к переведенному конфигу
          const finalConfig = applyContentReplacements(translatedConfig, lang.code)

          const configDir = path.dirname(targetConfigPath)
          if (!fs.existsSync(configDir)) {
            fs.mkdirSync(configDir, { recursive: true })
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

    const files = await getAllMarkdownFiles(config.rootDir)
    console.log(`📝 Найдено ${files.length} markdown файлов в ${config.rootDir}`)

    const tasks = []

    for (const [langCode, lang] of Object.entries(config.languages)) {
      for (const file of files) {
        const relativePath = path.relative(config.rootDir, file)

        const targetPath = path.join(config.rootTranslateDir, lang.code, relativePath)

        if (await needsTranslation(file, targetPath)) {
          tasks.push({ file, lang, targetPath })
        }
      }
    }

    if (tasks.length === 0) {
      console.log("✨ Все переводы актуальны!")
      return
    }

    console.log(`⏳ Требуется перевести ${tasks.length} файлов`)

    for (const task of tasks) {
      await translateFile(task.file, task.targetPath, task.lang, firstModelKey)
    }

    console.log("\n✨ Готово!")
  } catch (error) {
    console.error(`❌ Ошибка:`, error.message)
  }
}

translateFiles()
