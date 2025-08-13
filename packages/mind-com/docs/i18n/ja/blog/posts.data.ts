import { createContentLoader } from "vitepress"
// import path from "path"

interface Post {
  title: string
  url: string
  date: {
    time: number
    string: string
  }
  excerpt: string | undefined
}

declare const data: Post[]
export { data }

// Автоматически определяем локаль из пути к текущему файлу
function getCurrentLocale(): string {
  const currentFile = __filename || import.meta.url

  // Ищем паттерн /docs/{locale}/ в пути
  const localeMatch = currentFile.match(/\/docs\/([a-z]{2})\//)

  return localeMatch ? localeMatch[1] : "en" // fallback на 'en'
}

const currentLocale = getCurrentLocale()

export default createContentLoader(`${currentLocale}/blog/posts/*.md`, {
  excerpt: true,
  transform(raw): Post[] {
    return raw
      .map(({ url, frontmatter, excerpt }) => ({
        title: frontmatter.title,
        url,
        excerpt,
        date: formatDate(frontmatter.date),
      }))
      .sort((a, b) => b.date.time - a.date.time)
  },
})

function formatDate(raw: string): Post["date"] {
  const date = new Date(raw)
  date.setUTCHours(12)
  return {
    time: +date,
    string: date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  }
}
