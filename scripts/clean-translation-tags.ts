/**
 * Clean translation tags from all translated markdown files
 *
 * This script removes stray <translated_markdown> and </translated_markdown> tags
 * that may have been left in translated files.
 */

import * as fs from "fs"
import * as path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/**
 * Recursively find all .md files in a directory
 */
function findMarkdownFiles(dir: string): string[] {
  const files: string[] = []

  if (!fs.existsSync(dir)) {
    return files
  }

  const items = fs.readdirSync(dir)

  for (const item of items) {
    const fullPath = path.join(dir, item)
    const stat = fs.statSync(fullPath)

    if (stat.isDirectory()) {
      files.push(...findMarkdownFiles(fullPath))
    } else if (item.endsWith(".md")) {
      files.push(fullPath)
    }
  }

  return files
}

/**
 * Remove translation tags from content
 */
function cleanTranslationTags(content: string): string {
  // Remove opening and closing tags
  return content.replace(/<translated_markdown>\s*/gi, "").replace(/<\/translated_markdown>\s*/gi, "")
}

/**
 * Process a single file
 */
function processFile(filePath: string): boolean {
  const content = fs.readFileSync(filePath, "utf8")

  if (content.includes("<translated_markdown>") || content.includes("</translated_markdown>")) {
    const cleaned = cleanTranslationTags(content)
    fs.writeFileSync(filePath, cleaned, "utf8")
    return true
  }

  return false
}

// Main execution
const packagesDir = path.resolve(__dirname, "../packages")
const packages = ["mind-com", "golden-fish", "wiki-mind"]

let totalCleaned = 0

console.log("🧹 Cleaning translation tags from markdown files...\n")

for (const pkg of packages) {
  const i18nDir = path.join(packagesDir, pkg, "docs/i18n")

  if (!fs.existsSync(i18nDir)) {
    console.log(`⚠️  Package ${pkg}: i18n directory not found, skipping`)
    continue
  }

  const files = findMarkdownFiles(i18nDir)
  let pkgCleaned = 0

  for (const file of files) {
    if (processFile(file)) {
      const relativePath = path.relative(packagesDir, file)
      console.log(`✅ Cleaned: ${relativePath}`)
      pkgCleaned++
    }
  }

  if (pkgCleaned > 0) {
    console.log(`📦 Package ${pkg}: cleaned ${pkgCleaned} files\n`)
  } else {
    console.log(`✨ Package ${pkg}: no tags found\n`)
  }

  totalCleaned += pkgCleaned
}

console.log(`\n🎉 Done! Cleaned ${totalCleaned} files in total.`)
