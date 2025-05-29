// scripts/ai/filesystem.ts
import * as fs from "fs/promises"
import * as fsSync from "fs"
import * as path from "path"
import { config } from "./config.js"
import type { CleanupResult, FileAssessment, TargetFileInfo } from "./types.js"

export class FileSystemManager {
  async getAllMarkdownFiles(dir: string): Promise<string[]> {
    const files: string[] = []

    try {
      const items = await fs.readdir(dir)

      for (const item of items) {
        const fullPath = path.join(dir, item)

        if (this.isExcluded(fullPath)) {
          continue
        }

        const stat = await fs.stat(fullPath)

        if (stat.isDirectory()) {
          files.push(...(await this.getAllMarkdownFiles(fullPath)))
        } else if (item.endsWith(".md")) {
          files.push(fullPath)
        }
      }
    } catch (error) {
      console.error(`❌ Ошибка чтения директории ${dir}:`, error)
    }

    return files
  }

  private isExcluded(filePath: string): boolean {
    return config.exclude.some((excluded) => filePath.includes(excluded))
  }

  async needsTranslation(sourceFile: string, targetFile: string): Promise<{ needs: boolean; reason?: string }> {
    try {
      if (!fsSync.existsSync(targetFile)) {
        return { needs: true, reason: "target_missing" }
      }

      const sourceStats = await fs.stat(sourceFile)
      const targetStats = await fs.stat(targetFile)

      const sourceTime = Math.floor(sourceStats.mtimeMs / 1000)
      const targetTime = Math.floor(targetStats.mtimeMs / 1000)

      if (sourceTime > targetTime) {
        return { needs: true, reason: "source_newer" }
      }

      return { needs: false, reason: "up_to_date" }
    } catch (error) {
      return { needs: true, reason: "check_failed" }
    }
  }

  async assessFiles(): Promise<FileAssessment[]> {
    console.log("🔍 Оценка файлов для перевода...")

    const sourceFiles = await this.getAllMarkdownFiles(config.paths.rootDir)
    const assessments: FileAssessment[] = []

    for (const sourceFile of sourceFiles) {
      const relativePath = path.relative(config.paths.rootDir, sourceFile)
      const targetFiles: TargetFileInfo[] = []
      let needsTranslation = false

      for (const [, lang] of Object.entries(config.languages)) {
        if (!lang.enabled) continue

        const targetPath = path.join(config.paths.rootTranslateDir, lang.code, relativePath)
        const { needs, reason } = await this.needsTranslation(sourceFile, targetPath)

        targetFiles.push({
          path: targetPath,
          language: lang,
          exists: fsSync.existsSync(targetPath),
          needsUpdate: needs,
          reason,
        })

        if (needs) needsTranslation = true
      }

      assessments.push({
        sourceFile,
        targetFiles,
        needsTranslation,
        reason: needsTranslation ? "updates_required" : "all_current",
      })
    }

    const totalFiles = assessments.length
    const needsUpdate = assessments.filter((a) => a.needsTranslation).length
    const totalTasks = assessments.reduce((sum, a) => sum + a.targetFiles.filter((t) => t.needsUpdate).length, 0)

    console.log(`📊 Найдено ${totalFiles} файлов, ${needsUpdate} требуют обновления (${totalTasks} задач перевода)`)

    return assessments
  }

  async cleanupTranslations(): Promise<CleanupResult> {
    console.log("🧹 Очистка переводов...")

    let removedFiles = 0
    let removedDirs = 0
    let removedLogs = 0
    const details: string[] = []

    // Получаем все исходные файлы
    const originalFiles = new Set(await this.getAllMarkdownFiles(config.paths.rootDir))

    // Очищаем конфиги
    await this.cleanupConfigs()

    // Очищаем переводы для каждого языка
    for (const [, lang] of Object.entries(config.languages)) {
      if (!lang.enabled) continue

      const langDir = path.join(config.paths.rootTranslateDir, lang.code)
      if (!fsSync.existsSync(langDir)) continue

      const result = await this.cleanupLanguageDir(langDir, originalFiles, lang.code)
      removedFiles += result.files
      removedDirs += result.dirs
      removedLogs += result.logs
      details.push(...result.details)
    }

    const total = removedFiles + removedDirs + removedLogs
    if (total > 0) {
      console.log(`✨ Очищено: ${removedFiles} файлов, ${removedDirs} папок, ${removedLogs} логов`)
    } else {
      console.log("✨ Очистка не требуется")
    }

    return { removedFiles, removedDirs, removedLogs, details }
  }

  private async cleanupConfigs(): Promise<void> {
    const configDir = config.paths.configTranslateDir
    if (!fsSync.existsSync(configDir)) return

    const configFiles = await fs.readdir(configDir)
    const validCodes = new Set(Object.values(config.languages).map((l) => l.code))

    for (const file of configFiles) {
      if (!file.endsWith(".ts")) continue

      const langCode = file.replace(".ts", "")
      if (langCode === "en" || validCodes.has(langCode)) continue

      await fs.unlink(path.join(configDir, file))
      console.log(`🗑️ Удален устаревший конфиг: ${file}`)
    }
  }

  private async cleanupLanguageDir(
    langDir: string,
    originalFiles: Set<string>,
    langCode: string,
  ): Promise<{ files: number; dirs: number; logs: number; details: string[] }> {
    let files = 0,
      dirs = 0,
      logs = 0
    const details: string[] = []

    const cleanup = async (dir: string): Promise<void> => {
      const items = await fs.readdir(dir)

      for (const item of items) {
        const fullPath = path.join(dir, item)
        const stat = await fs.stat(fullPath)

        if (this.isExcluded(fullPath)) continue

        if (stat.isDirectory()) {
          await cleanup(fullPath)
          // Проверяем, стала ли директория пустой
          const remaining = await fs.readdir(fullPath)
          if (remaining.length === 0) {
            await fs.rmdir(fullPath)
            dirs++
            details.push(`Удалена пустая папка: ${path.relative(langDir, fullPath)}`)
          }
        } else {
          if (item.endsWith(".log")) {
            await fs.unlink(fullPath)
            logs++
            details.push(`Удален лог: ${path.relative(langDir, fullPath)}`)
          } else if (item.endsWith(".md")) {
            const relativePath = path.relative(langDir, fullPath)
            const originalPath = path.join(config.paths.rootDir, relativePath)

            if (!originalFiles.has(originalPath)) {
              await fs.unlink(fullPath)
              files++
              details.push(`Удален устаревший файл: ${relativePath}`)
            }
          }
        }
      }
    }

    await cleanup(langDir)
    return { files, dirs, logs, details }
  }

  async ensureDirectoryExists(filePath: string): Promise<void> {
    const dir = path.dirname(filePath)
    await fs.mkdir(dir, { recursive: true })
  }

  async writeFile(filePath: string, content: string): Promise<void> {
    await this.ensureDirectoryExists(filePath)
    await fs.writeFile(filePath, content, "utf8")
  }

  async readFile(filePath: string): Promise<string> {
    return await fs.readFile(filePath, "utf8")
  }

  async saveErrorLog(targetPath: string, content: string, error: string): Promise<void> {
    const logPath = targetPath.replace(".md", ".log")
    const logContent = `# Translation Error Log\n\n**Error:** ${error}\n\n**Partial Content:**\n\n${content}`
    await this.writeFile(logPath, logContent)
  }
}
