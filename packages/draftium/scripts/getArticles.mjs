/**
 * Скрипт для сбора данных из статей блога и создания JSON-файла с метаданными
 * На основе https://blog.logrocket.com/build-blog-vitepress-vue-js/
 */

import fs from "node:fs/promises"
import path from "node:path"
import matter from "gray-matter"
import removeMd from "remove-markdown"

// Рекурсивная функция для чтения файлов из всех поддиректорий
async function getFiles(dir) {
  const dirents = await fs.readdir(dir, { withFileTypes: true })
  const files = await Promise.all(
    dirents.map((dirent) => {
      const res = path.join(dir, dirent.name) // Изменено на path.join для относительных путей
      return dirent.isDirectory() ? getFiles(res) : res
    }),
  )
  return Array.prototype.concat(...files)
}

const articlesDir = "./docs/en/company/blog/articles"
const articles = await getFiles(articlesDir)

const data = await Promise.all(
  articles.map(async (article) => {
    const file = matter.read(article, {
      excerpt: true,
      excerpt_separator: "<!-- more -->",
    })

    const { data, excerpt } = file
    const contents = removeMd(excerpt)
      .trim()
      .split(/\r\n|\n|\r/)

    // Получаем относительный путь от директории статей
    const relativePath = path.relative("./docs", article).replace(/\.md$/, ".html")

    return {
      ...data,
      title: contents[0].replace(/\s{2,}/g, "").trim(),
      path: `/${relativePath}`, // Добавляем слэш для корректного абсолютного пути
      excerpt: contents
        .slice(1)
        .join("")
        .replace(/\s{2,}/g, "")
        .trim(),
    }
  }),
)

await fs.writeFile("./docs/en/company/blog/data.json", JSON.stringify(data), "utf-8")
