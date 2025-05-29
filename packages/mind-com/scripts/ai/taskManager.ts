// scripts/ai/taskManager.ts
import * as path from "path"
import { config } from "./config.js"
import { FileSystemManager } from "./filesystem.js"
import { Translator } from "./translator.js"
import type { TranslationTask, TranslationResult, FileAssessment, LanguageConfig } from "./types.js"

export class TaskManager {
  private fileSystem: FileSystemManager
  private translator: Translator
  private runningTasks = new Set<string>()

  constructor() {
    this.fileSystem = new FileSystemManager()
    this.translator = new Translator()
  }

  async createTasksFromAssessments(assessments: FileAssessment[]): Promise<TranslationTask[]> {
    const tasks: TranslationTask[] = []
    let taskId = 0

    for (const assessment of assessments) {
      if (!assessment.needsTranslation) continue

      const content = await this.fileSystem.readFile(assessment.sourceFile)

      for (const targetFile of assessment.targetFiles) {
        if (!targetFile.needsUpdate) continue

        tasks.push({
          id: `task_${++taskId}`,
          sourceFile: assessment.sourceFile,
          targetFile: targetFile.path,
          language: targetFile.language,
          content,
          priority: this.calculatePriority(assessment.sourceFile, targetFile.language),
        })
      }
    }

    // Сортируем по приоритету
    tasks.sort((a, b) => a.priority - b.priority)

    return tasks
  }

  private calculatePriority(sourceFile: string, language: LanguageConfig): number {
    let priority = 100

    // Конфиги имеют высший приоритет
    if (sourceFile.includes("config")) {
      priority -= 50
    }

    // Главные страницы имеют высокий приоритет
    if (sourceFile.endsWith("index.md")) {
      priority -= 30
    }

    // Файлы в корне важнее файлов в подпапках
    const depth = sourceFile.split(path.sep).length
    priority += depth * 5

    return priority
  }

  async processTasksConcurrently(tasks: TranslationTask[]): Promise<TranslationResult[]> {
    console.log(`🚀 Запуск ${tasks.length} задач перевода (макс. ${config.processing.maxConcurrency} одновременно)`)

    const results: TranslationResult[] = []
    const semaphore = new Semaphore(config.processing.maxConcurrency)

    const taskPromises = tasks.map(async (task) => {
      await semaphore.acquire()

      try {
        this.runningTasks.add(task.id)
        const result = await this.translator.translateTask(task)

        if (result.success && result.translatedContent) {
          await this.fileSystem.writeFile(task.targetFile, result.translatedContent)
        } else if (result.error) {
          // Сохраняем лог ошибки, если есть частичный контент
          await this.fileSystem.saveErrorLog(task.targetFile, result.translatedContent || "Нет контента", result.error.message)
        }

        return result
      } finally {
        this.runningTasks.delete(task.id)
        semaphore.release()
      }
    })

    const settledResults = await Promise.allSettled(taskPromises)

    for (const settledResult of settledResults) {
      if (settledResult.status === "fulfilled") {
        results.push(settledResult.value)
      } else {
        console.error("❌ Необработанная ошибка задачи:", settledResult.reason)
      }
    }

    return results
  }

  async processConfigTranslation(): Promise<void> {
    console.log("📝 Обработка конфигов VitePress...")

    const sourceConfigPath = path.join(config.paths.configDir, "en.ts")

    try {
      const sourceConfig = await this.fileSystem.readFile(sourceConfigPath)
      const configTasks: TranslationTask[] = []

      for (const [, lang] of Object.entries(config.languages)) {
        if (!lang.enabled) continue

        const targetConfigPath = path.join(config.paths.configTranslateDir, `${lang.code}.ts`)
        const { needs } = await this.fileSystem.needsTranslation(sourceConfigPath, targetConfigPath)

        if (!needs) {
          console.log(`✨ Конфиг ${lang.name} актуален`)
          continue
        }

        configTasks.push({
          id: `config_${lang.code}`,
          sourceFile: sourceConfigPath,
          targetFile: targetConfigPath,
          language: lang,
          content: sourceConfig,
          priority: 1,
        })
      }

      if (configTasks.length === 0) {
        console.log("✨ Все конфиги актуальны")
        return
      }

      const results = await this.processTasksConcurrently(configTasks)
      const successful = results.filter((r) => r.success).length

      console.log(`📝 Конфиги: ${successful}/${results.length} успешно переведены`)
    } catch (error) {
      console.error("❌ Ошибка обработки конфигов:", error)
    }
  }

  getRunningTasksCount(): number {
    return this.runningTasks.size
  }

  printSummary(results: TranslationResult[]): void {
    const successful = results.filter((r) => r.success)
    const failed = results.filter((r) => !r.success)

    const totalTime = results.reduce((sum, r) => sum + r.duration, 0)
    const avgTime = totalTime / results.length
    const totalTokens = results.reduce((sum, r) => sum + (r.tokensUsed || 0), 0)

    console.log("\n📊 Сводка перевода:")
    console.log("------------------------")
    console.log(`✅ Успешно: ${successful.length}`)
    console.log(`❌ Ошибки: ${failed.length}`)
    console.log(`⏱️ Среднее время: ${avgTime.toFixed(0)}ms`)
    console.log(`🎯 Токенов использовано: ${totalTokens}`)

    if (failed.length > 0) {
      console.log("\nОшибки по типам:")
      const errorStats = new Map<string, number>()

      failed.forEach((result) => {
        if (result.error) {
          const count = errorStats.get(result.error.type) || 0
          errorStats.set(result.error.type, count + 1)
        }
      })

      errorStats.forEach((count, type) => {
        console.log(`  ${type}: ${count}`)
      })
    }

    // Статистика по моделям
    const modelStats = new Map<string, number>()
    successful.forEach((result) => {
      if (result.model) {
        const count = modelStats.get(result.model) || 0
        modelStats.set(result.model, count + 1)
      }
    })

    if (modelStats.size > 0) {
      console.log("\nИспользование моделей:")
      modelStats.forEach((count, model) => {
        console.log(`  ${model}: ${count}`)
      })
    }
  }
}

class Semaphore {
  private permits: number
  private queue: Array<() => void> = []

  constructor(permits: number) {
    this.permits = permits
  }

  async acquire(): Promise<void> {
    return new Promise<void>((resolve) => {
      if (this.permits > 0) {
        this.permits--
        resolve()
      } else {
        this.queue.push(resolve)
      }
    })
  }

  release(): void {
    this.permits++
    if (this.queue.length > 0) {
      const resolve = this.queue.shift()!
      this.permits--
      resolve()
    }
  }
}
