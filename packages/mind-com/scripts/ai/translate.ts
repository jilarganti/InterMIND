// scripts/ai/translate.ts
import { FileSystemManager } from "./filesystem.js"
import { TaskManager } from "./taskManager.js"
import { config } from "./config.js"

async function main(): Promise<void> {
  console.log("🌍 Запуск системы переводов InterMind")
  console.log(
    `📋 Языки: ${Object.values(config.languages)
      .filter((l) => l.enabled)
      .map((l) => l.name)
      .join(", ")}`,
  )
  console.log(`🤖 Модели: ${Object.keys(config.models).join(", ")}`)
  console.log(`⚡ Параллелизм: ${config.processing.maxConcurrency}`)
  console.log("")

  const fileSystem = new FileSystemManager()
  const taskManager = new TaskManager()

  try {
    // Этап 1: Очистка
    console.log("🧹 Этап 1: Очистка устаревших файлов")
    const cleanupResult = await fileSystem.cleanupTranslations()
    console.log("")

    // Этап 2: Оценка
    console.log("🔍 Этап 2: Оценка файлов для перевода")
    const assessments = await fileSystem.assessFiles()
    const tasks = await taskManager.createTasksFromAssessments(assessments)

    if (tasks.length === 0) {
      console.log("✨ Все файлы актуальны!")
      return
    }
    console.log("")

    // Этап 3: Перевод конфигов (приоритетно)
    console.log("📝 Этап 3: Перевод конфигов VitePress")
    await taskManager.processConfigTranslation()
    console.log("")

    // Этап 4: Параллельный перевод файлов
    console.log("🚀 Этап 4: Асинхронный перевод файлов")
    const results = await taskManager.processTasksConcurrently(tasks)
    console.log("")

    // Этап 5: Отчет
    console.log("📊 Этап 5: Финальный отчет")
    taskManager.printSummary(results)

    const successRate = (results.filter((r) => r.success).length / results.length) * 100

    if (successRate === 100) {
      console.log("\n🎉 Все переводы выполнены успешно!")
    } else if (successRate >= 80) {
      console.log(`\n✅ Переводы завершены с успешностью ${successRate.toFixed(1)}%`)
    } else {
      console.log(`\n⚠️ Переводы завершены с низкой успешностью ${successRate.toFixed(1)}%`)
      console.log("💡 Проверьте лог-файлы и повторите перевод проблемных файлов")
    }
  } catch (error) {
    console.error("❌ Критическая ошибка:", error)
    process.exit(1)
  }
}

// Запуск
main().catch((error) => {
  console.error("❌ Необработанная ошибка:", error)
  process.exit(1)
})
