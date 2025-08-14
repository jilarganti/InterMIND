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

// Определяем путь для загрузки постов на основе расположения файла
function getPostsPath(): string {
  const currentFile = __filename || import.meta.url

  // Если файл находится в папке i18n, то используем путь i18n/{locale}/
  const i18nMatch = currentFile.match(/\/docs\/i18n\/([a-z]{2})\//)
  if (i18nMatch) {
    return `i18n/${i18nMatch[1]}/blog/posts/*.md`
  }

  // Иначе используем основной путь {locale}/
  const mainMatch = currentFile.match(/\/docs\/([a-z]{2})\//)
  const locale = mainMatch ? mainMatch[1] : "en"
  return `${locale}/blog/posts/*.md`
}

export default createContentLoader(getPostsPath(), {
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
