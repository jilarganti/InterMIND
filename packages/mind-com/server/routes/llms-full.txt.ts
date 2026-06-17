import { defineEventHandler, setResponseHeader } from "h3"
import { useStorage } from "nitropack/runtime"
import { useRuntimeConfig } from "#imports"

interface Section {
  title: string
  path: string
  markdown: string
}

async function readMarkdownDir(prefix: string, urlPrefix: string): Promise<Section[]> {
  const storage = useStorage("assets:content")
  const keys = (await storage.getKeys(prefix)).sort()
  const out: Section[] = []
  for (const key of keys) {
    if (!key.endsWith(".md")) continue
    const raw = (await storage.getItem(key)) as string | null
    if (!raw) continue
    const slugMatch = key.match(/([^/:]+)\.md$/)
    const slug = slugMatch?.[1] ?? key
    const markdown = raw.replace(/^---\n[\s\S]*?\n---\n*/, "")
    const titleMatch = markdown.match(/^#\s+(.+)$/m)
    const title = titleMatch?.[1]?.trim() ?? slug
    out.push({ title, path: `${urlPrefix}/${slug}`, markdown })
  }
  return out
}

export default defineEventHandler(async (event) => {
  setResponseHeader(event, "Content-Type", "text/plain; charset=utf-8")
  setResponseHeader(event, "Cache-Control", "public, max-age=3600")

  const config = useRuntimeConfig()
  const siteUrl = config.public.siteUrl as string

  const [blog, legal] = await Promise.all([readMarkdownDir("blog", "/blog"), readMarkdownDir("legal", "/legal")])

  const parts: string[] = []
  parts.push("# InterMIND — Full content")
  parts.push("")
  parts.push(`> Source: ${siteUrl}`)
  parts.push("")
  parts.push("---")
  parts.push("")

  parts.push("# Blog")
  parts.push("")
  for (const s of blog) {
    parts.push(`## ${s.title}`)
    parts.push("")
    parts.push(`URL: ${siteUrl}${s.path}`)
    parts.push("")
    parts.push(s.markdown.trim())
    parts.push("")
    parts.push("---")
    parts.push("")
  }

  parts.push("# Legal")
  parts.push("")
  for (const s of legal) {
    parts.push(`## ${s.title}`)
    parts.push("")
    parts.push(`URL: ${siteUrl}${s.path}`)
    parts.push("")
    parts.push(s.markdown.trim())
    parts.push("")
    parts.push("---")
    parts.push("")
  }

  return parts.join("\n")
})
