import { queryCollection } from "@nuxt/content/server"
import { defineEventHandler } from "h3"

export default defineEventHandler(async (event) => {
  const posts = await queryCollection(event, "blog")
    .where("hidden", "<>", true)
    .order("date", "DESC")
    .all()

  return posts.map((p) => ({
    loc: p.path,
    lastmod: p.date,
  }))
})
