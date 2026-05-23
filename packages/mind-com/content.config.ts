import { defineCollection, defineContentConfig, z } from "@nuxt/content"

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: "page",
      source: "blog/**/*.md",
      schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string(),
        author: z.string().optional(),
        hidden: z.boolean().optional().default(false),
        canonical: z.string().url().optional(),
      }),
    }),
    legal: defineCollection({
      type: "page",
      source: "legal/**/*.md",
      schema: z.object({
        title: z.string(),
        description: z.string(),
        updated: z.string(),
      }),
    }),
  },
})
