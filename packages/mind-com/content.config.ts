import { defineCollection, defineContentConfig, z } from "@nuxt/content"

const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.string(),
  author: z.string().optional(),
  image: z.string().optional(),
  badge: z.string().optional(),
  hidden: z.boolean().optional().default(false),
  canonical: z.string().url().optional(),
})

const legalSchema = z.object({
  title: z.string(),
  description: z.string(),
  updated: z.string(),
})

const NON_EN_LOCALES = ["es", "pt", "fr", "de", "ru", "zh"] as const

const localeBlogCollections = Object.fromEntries(
  NON_EN_LOCALES.map((locale) => [
    `blog_${locale}`,
    defineCollection({
      type: "page",
      source: { include: `${locale}/blog/**`, prefix: "/blog" },
      schema: blogSchema,
    }),
  ]),
)

const localeLegalCollections = Object.fromEntries(
  NON_EN_LOCALES.map((locale) => [
    `legal_${locale}`,
    defineCollection({
      type: "page",
      source: { include: `${locale}/legal/**`, prefix: "/legal" },
      schema: legalSchema,
    }),
  ]),
)

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: "page",
      source: "blog/**/*.md",
      schema: blogSchema,
    }),
    legal: defineCollection({
      type: "page",
      source: "legal/**/*.md",
      schema: legalSchema,
    }),
    ...localeBlogCollections,
    ...localeLegalCollections,
  },
})
