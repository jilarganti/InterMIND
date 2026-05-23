import { queryCollection } from "@nuxt/content/server"
import { defineEventHandler } from "h3"

export default defineEventHandler(async (event) => {
  const [posts, legal] = await Promise.all([
    queryCollection(event, "blog").where("hidden", "<>", true).order("date", "DESC").all(),
    queryCollection(event, "legal").all(),
  ])

  const staticPaths = ["/about", "/team", "/careers", "/help", "/contacts", "/brand-assets"]

  return [
    ...posts.map((p) => ({ loc: p.path, lastmod: p.date })),
    ...legal.map((d) => ({ loc: d.path, lastmod: d.updated })),
    ...staticPaths.map((loc) => ({ loc })),
  ]
})
