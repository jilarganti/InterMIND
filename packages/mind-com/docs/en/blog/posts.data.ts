import { createContentLoader } from "vitepress"

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

// Определяем локаль из пути текущего файла
const getCurrentLocale = (): string => {
  // В Node.js окружении используем __filename
  if (typeof __filename !== "undefined") {
    const localeMatch = __filename.match(/\/docs\/([a-z]{2})\//)
    return localeMatch ? localeMatch[1] : "en"
  }

  // В ESM окружении используем import.meta.url
  if (typeof import.meta !== "undefined" && import.meta.url) {
    const localeMatch = import.meta.url.match(/\/docs\/([a-z]{2})\//)
    return localeMatch ? localeMatch[1] : "en"
  }

  return "en"
}

const currentLocale = getCurrentLocale()

export default createContentLoader(`${currentLocale}/blog/posts/*.md`, {
  excerpt: true,
  transform(raw): Post[] {
    return raw
      .map(({ url, frontmatter, excerpt }) => ({
        title: frontmatter.title,
        url, // Убираем withBase - VitePress автоматически обработает базовый путь
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
