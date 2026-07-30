import { queryCollection } from "@nuxt/content/server"
import { defineEventHandler } from "h3"

const NON_EN_LOCALES = ["es", "pt", "fr", "de", "ru", "zh"] as const

const blogCollectionFor = (locale: string) => (locale === "en" ? "blog" : `blog_${locale}`)
const legalCollectionFor = (locale: string) => (locale === "en" ? "legal" : `legal_${locale}`)

export default defineEventHandler(async (event) => {
  const [posts, legal] = await Promise.all([
    queryCollection(event, "blog").where("hidden", "<>", true).order("date", "DESC").all(),
    queryCollection(event, "legal").all(),
  ])

  const localizedBlog = await Promise.all(
    NON_EN_LOCALES.map(async (locale) => {
      try {
        const items = await queryCollection(event, blogCollectionFor(locale) as "blog")
          .where("hidden", "<>", true)
          .order("date", "DESC")
          .all()
        return items.map((p) => ({ loc: `/${locale}${p.path}`, lastmod: p.date }))
      } catch {
        return []
      }
    }),
  )

  const localizedLegal = await Promise.all(
    NON_EN_LOCALES.map(async (locale) => {
      try {
        const items = await queryCollection(event, legalCollectionFor(locale) as "legal").all()
        return items.map((d) => ({ loc: `/${locale}${d.path}`, lastmod: d.updated }))
      } catch {
        return []
      }
    }),
  )

  const staticPaths = ["/about", "/team", "/help", "/contacts"]

  return [
    ...posts.map((p) => ({ loc: p.path, lastmod: p.date })),
    ...legal.map((d) => ({ loc: d.path, lastmod: d.updated })),
    ...localizedBlog.flat(),
    ...localizedLegal.flat(),
    ...staticPaths.map((loc) => ({ loc })),
  ]
})
