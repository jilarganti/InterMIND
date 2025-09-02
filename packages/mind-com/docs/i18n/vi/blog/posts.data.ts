import { createContentLoader } from "vitepress"

interface Post {
  title: string
  url: string
  date: {
    time: number
    string: string
  }
  excerpt: string | undefined
  description: string
  author: string | undefined
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
  includeSrc: true,
  transform(raw): Post[] {
    return raw
      .map(({ url, frontmatter, excerpt, src }) => {
        // Применяем правила rewrite для корректных URL
        let transformedUrl = url

        // Для файлов в en/ убираем префикс /en
        if (transformedUrl.startsWith("/en/")) {
          transformedUrl = transformedUrl.replace("/en/", "/")
        }

        // Для файлов в i18n/{locale}/ заменяем на /{locale}/
        const i18nMatch = transformedUrl.match(/^\/i18n\/([a-z]{2})\/(.*)$/)
        if (i18nMatch) {
          transformedUrl = `/${i18nMatch[1]}/${i18nMatch[2]}`
        }

        return {
          title: frontmatter.title,
          url: transformedUrl,
          excerpt,
          description: src.match(/#[^\n]*\n(.*?)(?=\n##|$)/s)?.[1],
          author: frontmatter.author,
          date: formatDate(frontmatter.date),
        }
      })
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
