// scripts/ai/translate.ts
import Anthropic from "@anthropic-ai/sdk"
import OpenAI from "openai"
import * as fs from "fs"
import * as path from "path"
import * as dotenv from "dotenv"
import { config as appConfig } from "../config.js"
import { getPromptForTranslation } from "../prompt.js"

dotenv.config()

// Custom error for incomplete translations
// Updated Error Classes
class TranslationError extends Error {
  public modelOutput?: string;
  public partialAttempt?: string;

  constructor(message: string, modelOutput?: string, partialAttempt?: string) {
    super(message);
    this.name = this.constructor.name; // Ensures correct error name
    this.modelOutput = modelOutput;
    this.partialAttempt = partialAttempt;
  }
}

class IncompleteTranslationError extends TranslationError {
  constructor(message: string, modelOutput: string, partialAttempt?: string) {
    super(message, modelOutput, partialAttempt || modelOutput); // If partialAttempt is not given, use modelOutput
    this.name = "IncompleteTranslationError";
  }
}

// Define types for better code quality and maintainability
interface ModelConfig {
  name: string
  // Add other properties if they exist in your config
}

interface LanguageConfig {
  code: string
  name: string
}

interface AppConfig {
  models: Record<string, ModelConfig>
  exclude?: string[]
  rootDir: string
  rootTranslateDir: string
  configTranslateDir: string
  configDir: string
  languages: Record<string, LanguageConfig>
}

// Cast the imported config to our defined type
const config = appConfig as AppConfig

// API Clients
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })
const xai = new OpenAI({ apiKey: process.env.XAI_API_KEY, baseURL: "https://api.x.ai/v1" })

// Функция для получения следующей модели из конфига
function getNextModel(currentModel: string): string | null {
  const modelEntries = Object.entries(config.models)
  const currentIndex = modelEntries.findIndex(([key]) => key === currentModel)

  if (currentIndex === -1 || currentIndex === modelEntries.length - 1) {
    return null
  }

  return modelEntries[currentIndex + 1][0]
}

// Функция для применения всех необходимых замен в контенте
function applyContentReplacements(content: string, langCode: string): string {
  let modifiedContent = content

  // Замена для конфигов
  modifiedContent = modifiedContent.replace(/export const en =/, `export const ${langCode} =`)

  // Замена BASE_PATH
  modifiedContent = modifiedContent.replace(/BASE_PATH = ""/, `BASE_PATH = "/${langCode}"`)

  return modifiedContent
}

async function translateWithOpenAI(content: string, targetLang: string, langCode: string): Promise<string> {
  try {
    const completion = await openai.chat.completions.create({
      model: config.models.gpt4.name,
      temperature: 0,
      messages: [{ role: "user", content: getPromptForTranslation(content, targetLang, langCode) }],
    });
    return completion.choices[0].message.content || "";
  } catch (sdkError: any) {
    const errorMessage = `OpenAI API Error: ${sdkError.message}`;
    let errorDetails = "";
    if (sdkError.response && sdkError.response.data) {
      errorDetails = JSON.stringify(sdkError.response.data);
    } else if (sdkError.error) {
      errorDetails = JSON.stringify(sdkError.error);
    } else {
      errorDetails = sdkError.toString();
    }
    throw new TranslationError(errorMessage, errorDetails);
  }
}

async function translateWithClaude(content: string, targetLang: string, langCode: string): Promise<string> {
  try {
    const message = await anthropic.messages.create({
      model: config.models.claude.name,
      max_tokens: 4096,
      temperature: 0,
      messages: [{ role: "user", content: getPromptForTranslation(content, targetLang, langCode) }],
    });

    // Correctly access the text from the ContentBlock
    let result = "";
    if (message.content[0].type === "text") {
      result = message.content[0].text;
    }
    return result;
  } catch (sdkError: any) {
    const errorMessage = `Anthropic API Error: ${sdkError.message}`;
    let errorDetails = "";
    if (sdkError.response && sdkError.response.data) {
      errorDetails = JSON.stringify(sdkError.response.data);
    } else if (sdkError.error) { // Anthropic SDK error structure
      errorDetails = JSON.stringify(sdkError.error);
    } else {
      errorDetails = sdkError.toString();
    }
    throw new TranslationError(errorMessage, errorDetails);
  }
}

async function translateWithGrok(content: string, targetLang: string, langCode: string): Promise<string> {
  try {
    const completion = await xai.chat.completions.create({
      model: config.models.grok.name,
      temperature: 0,
      messages: [{ role: "user", content: getPromptForTranslation(content, targetLang, langCode) }],
    });
    return completion.choices[0].message.content || "";
  } catch (sdkError: any) {
    const errorMessage = `XAI API Error: ${sdkError.message}`;
    let errorDetails = "";
    if (sdkError.response && sdkError.response.data) {
      errorDetails = JSON.stringify(sdkError.response.data);
    } else if (sdkError.error) {
      errorDetails = JSON.stringify(sdkError.error);
    } else {
      errorDetails = sdkError.toString();
    }
    throw new TranslationError(errorMessage, errorDetails);
  }
}

async function translateWithModel(model: string, content: string, targetLang: string, langCode: string): Promise<string> {
  let rawModelOutput: string = "";

  try {
    switch (model) {
      case "gpt4":
        rawModelOutput = await translateWithOpenAI(content, targetLang, langCode);
        break;
      case "claude":
        rawModelOutput = await translateWithClaude(content, targetLang, langCode);
        break;
      case "grok":
        rawModelOutput = await translateWithGrok(content, targetLang, langCode);
        break;
      default:
        throw new Error(`Неизвестная модель: ${model}`); // This is a non-TranslationError
    }

    const match = rawModelOutput.match(/<translated_markdown>([\s\S]*)<\/translated_markdown>/);
    let extractedTranslation: string;

    if (match && match[1] !== undefined) { // Ensure match[1] exists
      extractedTranslation = match[1].trim();
    } else {
      if (rawModelOutput.trim() !== "") {
        throw new TranslationError(
          "Отсутствуют теги <translated_markdown> или они пусты в ответе LLM.",
          rawModelOutput,
          rawModelOutput
        );
      } else {
        extractedTranslation = ""; // Raw output was empty, so extracted is empty
      }
    }

    // Check for LLM's own "incomplete" markers in the *extracted* content
    if (extractedTranslation && /\[[^\[\]]+(\.\.\.|[?])\]/.test(extractedTranslation)) {
      throw new IncompleteTranslationError(
        "Неполный перевод (маркер от LLM в извлеченном тексте)",
        rawModelOutput,
        extractedTranslation
      );
    }

    return extractedTranslation.trim();

  } catch (error: any) {
    // If it's already a TranslationError (including IncompleteTranslationError or SDK-wrapped ones), re-throw it.
    if (error instanceof TranslationError) {
      throw error;
    }
    // For other unexpected errors during model interaction (e.g. the "Неизвестная модель" Error)
    // or if an SDK error wasn't caught and wrapped by translateWith<ModelName> (should not happen with new changes)
    // Wrap it as a generic TranslationError. modelOutput might be undefined here.
    throw new TranslationError(`Ошибка при обработке ответа модели ${model}: ${error.message}`, rawModelOutput || "Raw model output not available");
  }
}

async function translateMarkdown(content: string, currentModel: string, targetLang: string, langCode: string): Promise<string> {
  try {
    if (!content.trim()) return content;

    const translatedContent = await translateWithModel(currentModel, content, targetLang, langCode);
    return translatedContent;
  } catch (error: any) {
    const nextModel = getNextModel(currentModel);

    console.log(`⚠️ Ошибка перевода с моделью ${currentModel}: ${error.message}`);

    if (error instanceof TranslationError && error.modelOutput) {
      console.log(`📦 Raw output от ${currentModel}:\n${error.modelOutput}`);
    }

    if (error instanceof IncompleteTranslationError) {
      const lastLine = (error.partialAttempt || "").trim().split("\n").pop() || "";
      console.log(`📝 Последняя строка (извлеченного) неполного перевода от ${currentModel}: \"${lastLine}\"`);
    }

    if (nextModel) {
      console.log(`↪️ Пробуем модель ${nextModel}...`);
      return await translateMarkdown(content, nextModel, targetLang, langCode);
    }

    console.error(`❌ Все модели перевода исчерпаны для этой части. Последняя ошибка от ${currentModel}: ${error.message}`);
    if (error instanceof TranslationError && error.modelOutput) { // Log for final error too
        console.log(`📦 Raw output (финальная ошибка от ${currentModel}):\n${error.modelOutput}`);
    }
    throw error;
  }
}

function splitByH2(content: string): string[] {
  const parts = content.split("\n## ")
  return parts.map((part, i) => (i === 0 ? part.trim() : "## " + part.trim())).filter(Boolean)
}

async function getAllMarkdownFiles(dir: string): Promise<string[]> {
  const files: string[] = []
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

async function needsTranslation(sourceFile: string, targetFile: string): Promise<boolean> {
  if (!fs.existsSync(targetFile)) {
    console.log(`👻 Файл перевода не существует: ${targetFile}`)
    return true
  }

  const sourceStats = fs.statSync(sourceFile)
  const targetStats = fs.statSync(targetFile)

  const sourceTime = Math.floor(sourceStats.mtimeMs / 1000)
  const targetTime = Math.floor(targetStats.mtimeMs / 1000)

  const needsUpdate = sourceTime > targetTime
  return needsUpdate
}

async function syncFileStructure(): Promise<void> {
  console.log("🔍 Синхронизация файловой структуры переводов...")

  const originalFiles = new Set<string>()
  const originalDirs = new Set<string>()

  function processOriginalPath(filePath: string) {
    originalFiles.add(filePath)
    let dir = path.dirname(filePath)
    while (dir !== config.rootDir) {
      originalDirs.add(dir)
      dir = path.dirname(dir)
    }
  }

  const files = await getAllMarkdownFiles(config.rootDir)
  files.forEach(processOriginalPath)

  for (const [, lang] of Object.entries(config.languages)) {
    const langDir = path.join(config.rootTranslateDir, lang.code)
    if (!fs.existsSync(langDir)) continue

    console.log(`\n📂 Проверка структуры ${lang.name}...`)
    let removedFiles = 0
    let removedDirs = 0
    let removedLogs = 0

    async function checkTranslatedFiles(currentDir: string): Promise<void> {
      const items = fs.readdirSync(currentDir)
      for (const item of items) {
        const fullPath = path.join(currentDir, item)
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
          } else if (item.endsWith(".md")) {
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

    await checkTranslatedFiles(langDir)

    function removeEmptyDirs(currentDir: string) {
      const items = fs.readdirSync(currentDir)
      for (const item of items) {
        const fullPath = path.join(currentDir, item)
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

async function cleanupTranslations(): Promise<void> {
  console.log("🧹 Проверка устаревших конфигов...")
  const configLangDir = path.join(config.configTranslateDir)

  if (!fs.existsSync(configLangDir)) {
    return
  }

  let totalRemoved = 0
  const removedFilePaths: string[] = []
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
    removedFilePaths.push(configPath)
  }

  if (totalRemoved > 0) {
    console.log(`\n🗑️ Удалено ${totalRemoved} устаревших языковых конфигов:`)
    removedFilePaths.forEach((file) => console.log(`  - ${file}`))
    console.log("")
  } else {
    console.log("✨ Устаревших языковых конфигов не найдено\n")
  }
}

interface TranslationTask {
  file: string
  targetPath: string
  lang: LanguageConfig
  firstModelKey: string
}

async function translateFile(task: TranslationTask): Promise<void> {
  const { file, targetPath, lang, firstModelKey } = task;
  const startTime = Date.now();
  const content = fs.readFileSync(file, "utf8");
  let accumulatedTranslatedContent = "";
  const logPath = targetPath.replace(/\.md$/, ".log"); // Ensure only .md at the end is replaced

  try {
    // Ensure log directory exists
    fs.mkdirSync(path.dirname(logPath), { recursive: true });

    const parts = splitByH2(content);
    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      if (!part.trim()) { // Skip empty parts
        if (i < parts.length - 1) accumulatedTranslatedContent += "\n\n"; // Maintain spacing if it's not the last part
        continue;
      }
      try {
        const translatedPart = await translateMarkdown(part, firstModelKey, lang.name, lang.code);
        accumulatedTranslatedContent += translatedPart;
        if (i < parts.length - 1 && translatedPart.trim() && parts[i+1]?.trim()) { // Add separator if not last part and current/next part is not empty
            accumulatedTranslatedContent += "\n\n";
        }
        
        // Write current progress to log file after each part
        fs.writeFileSync(logPath, accumulatedTranslatedContent.trim());
      } catch (error: any) {
        const relativePartPath = path.relative(config.rootDir, file) + ` (часть ${i + 1})`;
        console.error(`❌ Часть файла ${relativePartPath} → ${lang.name} не переведена: ${error.message}`);
        throw new Error(`Ошибка при переводе части файла ${file} (часть ${i+1}): ${error.message}. Промежуточный результат в ${logPath}`);
      }
    }

    const finalContent = applyContentReplacements(accumulatedTranslatedContent.trim(), lang.code);
    fs.mkdirSync(path.dirname(targetPath), { recursive: true });
    fs.writeFileSync(targetPath, finalContent); // Write final .md

    if (fs.existsSync(logPath)) {
      fs.unlinkSync(logPath);
    }

    const duration = ((Date.now() - startTime) / 1000).toFixed(1);
    const relativePath = path.relative(config.rootDir, file);
    console.log(`✅ ${relativePath} → ${lang.name} (${duration}s)`);

  } catch (error: any) { 
    const relativePath = path.relative(config.rootDir, file);
    console.error(`❌ ${relativePath} → ${lang.name}: ${error.message}`);
  }
}

async function translateFiles(): Promise<void> {
  try {
    const firstModelKey = Object.keys(config.models)[0]
    if (!firstModelKey) {
      console.error("❌ Нет доступных моделей в конфигурации.")
      return
    }
    console.log(`💡 Начинаем перевод с модели: ${firstModelKey}`)

    await syncFileStructure()
    await cleanupTranslations()

    const sourceConfigPath = path.join(config.configDir, "en.ts")
    console.log(`📝 Переводим конфиги из ${sourceConfigPath}`)

    if (!fs.existsSync(sourceConfigPath)) {
      throw new Error(`Не найден исходный конфиг: ${sourceConfigPath}`)
    }

    // Translate config files first (sequentially for simplicity, can be parallelized too if needed)
    try {
      const sourceConfigContent = fs.readFileSync(sourceConfigPath, "utf8")
      for (const [, lang] of Object.entries(config.languages)) {
        const targetConfigPath = path.join(config.configTranslateDir, `${lang.code}.ts`)
        const startTime = Date.now()

        if (!(await needsTranslation(sourceConfigPath, targetConfigPath))) {
          console.log(`✨ Конфиг ${lang.name} актуален`)
          continue
        }

        try {
          const translatedConfig = await translateMarkdown(sourceConfigContent, firstModelKey, lang.name, lang.code)
          const finalConfig = applyContentReplacements(translatedConfig, lang.code)
          const configDir = path.dirname(targetConfigPath)
          if (!fs.existsSync(configDir)) {
            fs.mkdirSync(configDir, { recursive: true })
          }
          fs.writeFileSync(targetConfigPath, finalConfig)
          const duration = ((Date.now() - startTime) / 1000).toFixed(1)
          console.log(`✅ Конфиг → ${lang.name} (${duration}s)`)
        } catch (error: any) {
          console.error(`❌ Конфиг → ${lang.name}: ${error.message}`)
        }
      }
    } catch (error: any) {
      console.error(`❌ Ошибка чтения или перевода основного файла конфигурации:`, error.message)
    }

    const filesToTranslate = await getAllMarkdownFiles(config.rootDir)
    console.log(`📝 Найдено ${filesToTranslate.length} markdown файлов в ${config.rootDir}`)

    const tasks: TranslationTask[] = []
    for (const [, lang] of Object.entries(config.languages)) {
      for (const file of filesToTranslate) {
        const relativePath = path.relative(config.rootDir, file)
        const targetPath = path.join(config.rootTranslateDir, lang.code, relativePath)
        if (await needsTranslation(file, targetPath)) {
          tasks.push({ file, targetPath, lang, firstModelKey })
        }
      }
    }

    if (tasks.length === 0) {
      console.log("✨ Все переводы markdown файлов актуальны!")
      // We might still have translated config files, so "Готово!" is still relevant.
    } else {
      console.log(`⏳ Требуется перевести ${tasks.length} markdown файлов`)
    }

    // Execute all file translations concurrently
    const translationPromises = tasks.map((task) => translateFile(task))

    await Promise.all(translationPromises)

    console.log("\n✨ Готово!")
  } catch (error: any) {
    console.error(`❌ Глобальная ошибка в translateFiles:`, error.message)
  }
}

translateFiles()
