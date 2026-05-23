import { queryCollection } from "@nuxt/content/server"
import { defineEventHandler, setResponseHeader } from "h3"
import { useRuntimeConfig } from "#imports"

export default defineEventHandler(async (event) => {
  setResponseHeader(event, "Content-Type", "text/plain; charset=utf-8")
  setResponseHeader(event, "Cache-Control", "public, max-age=3600")

  const config = useRuntimeConfig()
  const siteUrl = config.public.siteUrl as string

  const [posts, legal] = await Promise.all([
    queryCollection(event, "blog").where("hidden", "<>", true).order("date", "DESC").all(),
    queryCollection(event, "legal").all(),
  ])

  const lines: string[] = []
  lines.push("# InterMIND")
  lines.push("")
  lines.push("> Real-time multilingual video meetings. Speak your language. Be understood in theirs.")
  lines.push("")
  lines.push("## Pages")
  lines.push(`- [Home](${siteUrl}/): InterMIND — Real-time multilingual video meetings`)
  lines.push(`- [About](${siteUrl}/about): Who we are and our mission`)
  lines.push(`- [Team](${siteUrl}/team): The humans and AI behind Mind.com`)
  lines.push(`- [Careers](${siteUrl}/careers): Join us. Show us what you've built.`)
  lines.push(`- [Contacts](${siteUrl}/contacts): Reach our company team`)
  lines.push(`- [Help](${siteUrl}/help): Get support — fast, human, no confusion`)
  lines.push(`- [Brand Assets](${siteUrl}/brand-assets): Logo, identity guidelines, promotional images`)
  lines.push("")
  lines.push("## Blog")
  for (const p of posts) {
    lines.push(`- [${p.title}](${siteUrl}${p.path}): ${p.description ?? ""}`)
  }
  lines.push("")
  lines.push("## Legal")
  for (const d of legal) {
    lines.push(`- [${d.title}](${siteUrl}${d.path}): ${d.description ?? ""}`)
  }
  lines.push("")
  lines.push("## Full text")
  lines.push(`- [llms-full.txt](${siteUrl}/llms-full.txt): All pages and posts concatenated as plain markdown`)
  lines.push("")

  return lines.join("\n")
})
