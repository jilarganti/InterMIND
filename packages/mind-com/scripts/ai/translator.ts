// scripts/ai/translator.ts
import * as path from "path"
import { config } from "./config.js"
import { AIClients } from "./clients.js"
import { PromptManager } from "./prompt.js"
import { FileSystemManager } from "./filesystem.js"
import type { TranslationTask, TranslationResult, TranslationError, ModelConfig, LanguageConfig } from "./types.js"

export class Translator {
  private clients: AIClients
  private fileSystem: FileSystemManager
  private models: ModelConfig[]

  constructor() {
    this.clients = new AIClients()
    this.fileSystem = new FileSystemManager()

    // Сортируем модели по приоритету
    this.models = Object.values(config.models)
      .filter((model) => this.clients.getAvailableProviders().includes(model.provider))
      .sort((a, b) => a.priority - b.priority)

    if (this.models.length === 0) {
      throw new Error("❌ Нет доступных моделей. Проверьте API ключи в .env файле")
    }
  }

  async translateTask(task: TranslationTask): Promise<TranslationResult> {
    const startTime = Date.now()
    let lastError: TranslationError | undefined

    console.log(`🔄 Переводим ${path.relative(config.paths.rootDir, task.sourceFile)} → ${task.language.name}`)

    for (const model of this.models) {
      try {
        const result = await this.attemptTranslation(task, model, false)
        if (result.success) {
          const duration = Date.now() - startTime
          console.log(`✅ ${task.language.name} (${model.name}) ${duration}ms`)
          return { ...result, duration }
        }
        lastError = result.error
      } catch (error) {
        lastError = this.createUnknownError(error, model.name)
      }

      // Если ошибка не связана с токенами, пробуем retry prompt
      if (lastError?.type !== "token_limit") {
        try {
          const retryResult = await this.attemptTranslation(task, model, true)
          if (retryResult.success) {
            const duration = Date.now() - startTime
            console.log(`✅ ${task.language.name} (${model.name}, retry) ${duration}ms`)
            return { ...retryResult, duration }
          }
        } catch (error) {
          // Игнорируем ошибки retry, используем оригинальную ошибку
        }
      }

      // Логируем ошибку только если она определена
      if (lastError) {
        this.logError(task, model, lastError)
      }
    }

    const duration = Date.now() - startTime
    console.error(`❌ ${task.language.name} - все модели исчерпаны`)

    return {
      taskId: task.id,
      success: false,
      error: lastError || this.createUnknownError(new Error("Все модели исчерпаны"), "unknown"),
      duration,
    }
  }

  private async attemptTranslation(task: TranslationTask, model: ModelConfig, isRetry: boolean): Promise<TranslationResult> {
    const prompt = isRetry ? PromptManager.getRetryPrompt(task.content, task.language.name) : PromptManager.getMainPrompt(task.content, task.language.name)

    const { content, tokensUsed } = await this.clients.translateWithModel(model, prompt)

    // Отладочный вывод для диагностики
    if (typeof content !== "string") {
      console.error(`❌ Некорректный тип ответа от ${model.name}:`, typeof content, content)
      throw this.createInvalidResponseError(model.name, `Получен ${typeof content} вместо строки`)
    }

    const translatedContent = PromptManager.extractTranslation(content)
    if (!translatedContent) {
      console.error(`❌ Не удалось извлечь перевод из ответа ${model.name}. Ответ:`, content.substring(0, 200) + "...")
      throw this.createInvalidResponseError(model.name, "Не найдены теги <translated_markdown>")
    }

    if (PromptManager.isIncompleteTranslation(translatedContent)) {
      throw this.createInvalidResponseError(model.name, "Неполный перевод")
    }

    const finalContent = PromptManager.applyContentReplacements(translatedContent, task.language.code)

    return {
      taskId: task.id,
      success: true,
      translatedContent: finalContent,
      model: model.name,
      duration: 0, // Будет установлено в translateTask
      tokensUsed,
    }
  }

  private logError(task: TranslationTask, model: ModelConfig, error: TranslationError): void {
    const file = path.relative(config.paths.rootDir, task.sourceFile)

    switch (error.type) {
      case "token_limit":
        console.warn(`⚠️ ${file} → ${task.language.name} (${model.name}): ${error.message}`)
        break
      case "rate_limit":
        console.warn(`⏱️ ${file} → ${task.language.name} (${model.name}): ${error.message}`)
        break
      case "invalid_response":
        console.error(`🚫 ${file} → ${task.language.name} (${model.name}): ${error.message}`)
        break
      default:
        console.error(`❌ ${file} → ${task.language.name} (${model.name}): ${error.message}`)
    }
  }

  private createUnknownError(error: unknown, modelName: string): TranslationError {
    const message = error instanceof Error ? error.message : String(error)
    return {
      type: "unknown",
      message,
      model: modelName,
      retryable: true,
    }
  }

  private createInvalidResponseError(modelName: string, detail?: string): TranslationError {
    const message = detail ? `Некорректный ответ: ${detail}` : "Некорректный ответ модели"
    return {
      type: "invalid_response",
      message,
      model: modelName,
      retryable: true,
    }
  }

  getAvailableModels(): ModelConfig[] {
    return [...this.models]
  }
}
