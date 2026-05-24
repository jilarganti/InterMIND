#!/usr/bin/env tsx
/// <reference types="node" />
/**
 * i18n Content Auto-Translate Script (mind-com brand campaign site)
 *
 * Mirror of inter-mind/scripts/i18n-translate-docs.ts adapted for the flat
 * brand-site content tree:
 *
 *   content/blog/<slug>.md   → content/<locale>/blog/<slug>.md
 *   content/legal/<slug>.md  → content/<locale>/legal/<slug>.md
 *
 * Source of truth is content/{blog,legal}/<path>.md (the existing English files).
 *
 * Usage:
 *   tsx scripts/i18n-translate-content.ts                # noop unless --from-en or --all
 *   tsx scripts/i18n-translate-content.ts --from-en      # diff vs HEAD, translate added/changed/renamed, prune deleted ones
 *   tsx scripts/i18n-translate-content.ts --all          # walk every English md, translate any locale where the file is missing or stale
 *   tsx scripts/i18n-translate-content.ts --locale ru    # only one locale (or comma-separated: ru,es)
 *   tsx scripts/i18n-translate-content.ts --section blog # only blog (or legal)
 *   tsx scripts/i18n-translate-content.ts --dry-run      # list work, no API calls, no writes
 *   tsx scripts/i18n-translate-content.ts --concurrency 3 # parallel (file × locale) calls (default 4)
 *
 * Requires: AI_GATEWAY_API_KEY in env (load via `vercel pull --environment=development --yes`).
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync, statSync, rmSync } from "node:fs"
import { resolve, dirname, relative } from "node:path"
import { fileURLToPath } from "node:url"
import { execSync } from "node:child_process"
import { generateText } from "ai"
import { createGateway } from "@ai-sdk/gateway"

const __filename2 = fileURLToPath(import.meta.url)
const __dirname2 = dirname(__filename2)
const ROOT = resolve(__dirname2, "..")
const CONTENT_DIR = resolve(ROOT, "content")
const SECTIONS = ["blog", "legal"] as const
type Section = (typeof SECTIONS)[number]

const NON_EN_LOCALES = ["es", "pt", "fr", "de", "ru", "zh"] as const
type Locale = (typeof NON_EN_LOCALES)[number]

const LANGUAGE_NAMES: Record<Locale, string> = {
  es: "Spanish (es)",
  pt: "Portuguese (pt-BR)",
  fr: "French (fr)",
  de: "German (de)",
  ru: "Russian (ru)",
  zh: "Simplified Chinese (zh-CN)",
}

const GLOSSARY = [
  "InterMIND",
  "Mind.com",
  "intermind.com",
  "inter.mind.com",
  "AI Companion",
  "Zoom",
  "Webex",
  "Google Meet",
  "Google Calendar",
  "Microsoft Teams",
  "Outlook",
  "Slack",
  "Telegram",
  "Copilot",
  "Gemini",
  "Vercel",
  "DeepL",
  "Stripe",
  "OpenAI",
  "Anthropic",
  "Claude",
  "GPT",
  "FLORES-200",
  "LLM",
  "API",
  "SSO",
  "SAML",
  "OAuth",
  "X.509",
  "GDPR",
  "HIPAA",
  "SOC 2",
  "ISO 27001",
  "Basic",
  "Pro",
  "Business",
  "Enterprise",
]

// ── env loading (same lookup chain Nuxt uses locally) ────────────────
function loadEnv(): void {
  if (process.env.AI_GATEWAY_API_KEY) return
  const candidates = [resolve(ROOT, ".vercel/.env.development.local"), resolve(ROOT, ".env.local"), resolve(ROOT, ".env")]
  for (const file of candidates) {
    if (!existsSync(file)) continue
    const content = readFileSync(file, "utf-8")
    for (const line of content.split("\n")) {
      const m = /^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/.exec(line)
      if (!m) continue
      const [, k, raw] = m
      if (process.env[k]) continue
      let v = raw
      if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
        v = v.slice(1, -1)
      }
      process.env[k] = v
    }
    if (process.env.AI_GATEWAY_API_KEY) return
  }
}

// ── git helpers ──────────────────────────────────────────────────────
function gitShow(repoRelPath: string): string | null {
  try {
    return execSync(`git show HEAD:${repoRelPath}`, { encoding: "utf-8", stdio: ["ignore", "pipe", "ignore"] })
  } catch {
    return null
  }
}

const REPO_ROOT = (() => {
  try {
    return execSync("git rev-parse --show-toplevel", { encoding: "utf-8" }).trim()
  } catch {
    return ROOT
  }
})()

function packageRelToRepoRel(rel: string): string {
  return relative(REPO_ROOT, resolve(ROOT, rel)).replaceAll("\\", "/")
}

function gitDiffNames(filter: string, sections: readonly Section[]): string[] {
  // Returns paths relative to package root (ROOT).
  const patterns = sections.map((s) => `'${packageRelToRepoRel(`content/${s}`)}/**/*.md'`).join(" ")
  try {
    const out = execSync(`git diff --name-only --diff-filter=${filter} HEAD -- ${patterns}`, {
      encoding: "utf-8",
      stdio: ["ignore", "pipe", "ignore"],
    })
    return out
      .trim()
      .split("\n")
      .filter(Boolean)
      .map((repoRel) => relative(ROOT, resolve(REPO_ROOT, repoRel)).replaceAll("\\", "/"))
  } catch {
    return []
  }
}

// ── fs helpers ───────────────────────────────────────────────────────
function walkMd(dir: string): string[] {
  const out: string[] = []
  if (!existsSync(dir)) return out
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = resolve(dir, entry.name)
    if (entry.isDirectory()) out.push(...walkMd(full))
    else if (entry.isFile() && entry.name.endsWith(".md")) out.push(full)
  }
  return out
}

function ensureDir(filePath: string): void {
  const d = dirname(filePath)
  if (!existsSync(d)) mkdirSync(d, { recursive: true })
}

function pruneEmptyDirs(startDir: string): void {
  if (!existsSync(startDir)) return
  for (const name of readdirSync(startDir)) {
    const full = resolve(startDir, name)
    if (statSync(full).isDirectory()) pruneEmptyDirs(full)
  }
  if (readdirSync(startDir).length === 0 && startDir !== CONTENT_DIR) {
    rmSync(startDir, { recursive: false })
  }
}

// ── frontmatter / structure ──────────────────────────────────────────
const FM_RE = /^---\n([\s\S]*?)\n---\n?/

interface ParsedMd {
  frontmatter: string
  body: string
  hasFm: boolean
}

function parseMd(src: string): ParsedMd {
  const m = src.match(FM_RE)
  if (!m) return { frontmatter: "", body: src, hasFm: false }
  return { frontmatter: m[1], body: src.slice(m[0].length), hasFm: true }
}

function topLevelKeys(fm: string): string[] {
  const keys: string[] = []
  for (const line of fm.split("\n")) {
    const m = /^([A-Za-z_][\w-]*)\s*:/.exec(line)
    if (m) keys.push(m[1])
  }
  return keys
}

function extractDestinations(md: string): string[] {
  const out: string[] = []
  const re = /!?\[[^\]]*\]\(([^)\s]+)/g
  let m: RegExpExecArray | null
  while ((m = re.exec(md)) !== null) out.push(m[1])
  return out.sort()
}

function countHeadings(md: string): number {
  return (md.match(/^#{1,6}\s/gm) ?? []).length
}

function countDirectives(md: string): number {
  return (md.match(/^::/gm) ?? []).length
}

interface ValidationIssue {
  kind: "no_fm" | "fm_keys" | "destinations" | "headings" | "directives" | "empty"
  detail: string
}

function validateTranslation(src: string, out: string): ValidationIssue | null {
  if (!out.trim()) return { kind: "empty", detail: "empty output" }
  const sp = parseMd(src)
  const op = parseMd(out)
  if (sp.hasFm !== op.hasFm) {
    return { kind: "no_fm", detail: `frontmatter presence mismatch (src=${sp.hasFm}, out=${op.hasFm})` }
  }
  if (sp.hasFm) {
    const srcKeys = topLevelKeys(sp.frontmatter).sort()
    const outKeys = topLevelKeys(op.frontmatter).sort()
    if (srcKeys.join(",") !== outKeys.join(",")) {
      return { kind: "fm_keys", detail: `frontmatter keys differ: src=[${srcKeys}] out=[${outKeys}]` }
    }
  }
  const sd = extractDestinations(src).join("|")
  const od = extractDestinations(out).join("|")
  if (sd !== od) {
    return { kind: "destinations", detail: `link/image destinations differ:\n  src: ${sd}\n  out: ${od}` }
  }
  const sh = countHeadings(src)
  const oh = countHeadings(out)
  if (Math.abs(sh - oh) > 1) {
    return { kind: "headings", detail: `heading count differs by >1 (src=${sh}, out=${oh})` }
  }
  const sdir = countDirectives(src)
  const odir = countDirectives(out)
  if (sdir !== odir) {
    return { kind: "directives", detail: `::directive lines differ (src=${sdir}, out=${odir})` }
  }
  return null
}

// ── translation ──────────────────────────────────────────────────────
async function translateFile(
  gw: ReturnType<typeof createGateway>,
  primary: string,
  fallback: string | undefined,
  locale: Locale,
  src: string,
): Promise<string> {
  const prompt = `You are a professional content translator for the InterMIND brand campaign site (real-time multilingual meetings, chat, and document translation).

Translate the following English markdown document into ${LANGUAGE_NAMES[locale]}.

STRICT RULES — violating any of these breaks the build:
- Preserve the YAML frontmatter (between the leading and trailing \`---\`) byte-for-byte EXCEPT translate the values of ONLY \`title\` and \`description\`. All other frontmatter keys and values (date, author, image, badge, hidden, canonical, updated, etc.) MUST stay identical.
- Preserve all markdown syntax: code fences \`\`\`...\`\`\`, Nuxt MDC directive fences (lines starting with \`::\`, e.g. \`::callout\`, closing \`::\`), headings (#, ##, ###), lists (-, *, 1.), tables (| --- |), inline code \`...\`, bold **...**, italic *...*, blockquotes >, horizontal rules ---.
- Preserve ALL link destinations and image paths verbatim. For every \`[text](url)\` and \`![alt](url)\`, keep the URL inside \`(...)\` exactly as-is. Translate only the visible text inside \`[...]\` and the image ALT text inside \`![...]\`.
- Preserve every placeholder verbatim: \`{name}\`, \`{count}\`, \`%s\`.
- DO NOT translate brand or proper-noun terms: ${GLOSSARY.join(", ")}. Keep plan names (Basic / Pro / Business / Enterprise) in English.
- Preserve every blank line and paragraph break. The output must have the same number of frontmatter keys, the same set of link/image destinations, and (within ±1) the same heading count as the input.
- Match the tone of a polished marketing / editorial site: clear, concise, neutral, professional.
- Output the FULL translated markdown document, nothing else. Start with the \`---\` frontmatter fence (if present) and end with the last line of the body. No explanations, no wrapping in code fences, no leading/trailing commentary.

INPUT DOCUMENT:
${src}`

  const fallbackModels = fallback ? [fallback] : []

  let lastErr: unknown
  for (const attempt of [primary, ...fallbackModels]) {
    try {
      const { text } = await generateText({
        model: gw.languageModel(attempt as Parameters<typeof gw.languageModel>[0]),
        prompt,
        providerOptions: {
          gateway: {
            ...(attempt === primary && fallbackModels.length > 0 && { models: fallbackModels }),
          },
        },
      })
      const stripped = text.replace(/^\s*```(?:markdown|md)?\n/, "").replace(/\n```\s*$/, "")
      const issue = validateTranslation(src, stripped)
      if (issue) throw new Error(`validation failed (${issue.kind}): ${issue.detail}`)
      return stripped
    } catch (err) {
      lastErr = err
      const msg = err instanceof Error ? err.message : String(err)
      console.error(`    ⚠️  ${attempt} failed: ${msg}`)
    }
  }
  throw lastErr instanceof Error ? lastErr : new Error("All models failed")
}

// ── work selection ───────────────────────────────────────────────────
interface Task {
  enRel: string // e.g. "content/blog/foo.md"
  enAbs: string
  locale: Locale
  targetAbs: string
  targetRel: string
}

function enRelToLocaleRel(enRel: string, locale: Locale): string {
  // content/blog/foo.md → content/<locale>/blog/foo.md
  // content/legal/foo.md → content/<locale>/legal/foo.md
  return enRel.replace(/^content\/(blog|legal)\//, `content/${locale}/$1/`)
}

function buildTasksFromDiff(locales: readonly Locale[], sections: readonly Section[]): Task[] {
  const changed = gitDiffNames("ACMR", sections)
  const tasks: Task[] = []
  for (const rel of changed) {
    const enAbs = resolve(ROOT, rel)
    if (!existsSync(enAbs)) continue
    for (const locale of locales) {
      const targetRel = enRelToLocaleRel(rel, locale)
      tasks.push({ enRel: rel, enAbs, locale, targetAbs: resolve(ROOT, targetRel), targetRel })
    }
  }
  return tasks
}

function buildTasksFromAll(locales: readonly Locale[], sections: readonly Section[]): Task[] {
  const tasks: Task[] = []
  for (const section of sections) {
    const sectionDir = resolve(CONTENT_DIR, section)
    for (const enAbs of walkMd(sectionDir)) {
      const enRel = `content/${section}/${relative(sectionDir, enAbs).replaceAll("\\", "/")}`
      const enSrc = readFileSync(enAbs, "utf-8")
      for (const locale of locales) {
        const targetRel = enRelToLocaleRel(enRel, locale)
        const targetAbs = resolve(ROOT, targetRel)
        if (existsSync(targetAbs)) {
          // Skip if en source matches HEAD (target is presumed up-to-date).
          const headEn = gitShow(packageRelToRepoRel(enRel))
          if (headEn !== null && headEn === enSrc) continue
        }
        tasks.push({ enRel, enAbs, locale, targetAbs, targetRel })
      }
    }
  }
  return tasks
}

function buildPrunes(sections: readonly Section[]): string[] {
  const out: string[] = []
  for (const locale of NON_EN_LOCALES) {
    for (const section of sections) {
      const localeSectionDir = resolve(CONTENT_DIR, locale, section)
      if (!existsSync(localeSectionDir)) continue
      for (const abs of walkMd(localeSectionDir)) {
        const localeRel = `content/${locale}/${section}/${relative(localeSectionDir, abs).replaceAll("\\", "/")}`
        const enRel = localeRel.replace(new RegExp(`^content/${locale}/${section}/`), `content/${section}/`)
        const enAbs = resolve(ROOT, enRel)
        if (!existsSync(enAbs)) out.push(localeRel)
      }
    }
  }
  return out
}

// ── concurrency helper ───────────────────────────────────────────────
async function pool<T, R>(items: T[], limit: number, fn: (item: T) => Promise<R>): Promise<R[]> {
  const out: R[] = new Array(items.length)
  let next = 0
  const workers = Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (true) {
      const i = next++
      if (i >= items.length) return
      out[i] = await fn(items[i])
    }
  })
  await Promise.all(workers)
  return out
}

// ── main ─────────────────────────────────────────────────────────────
interface Options {
  dryRun: boolean
  locales: Locale[]
  sections: Section[]
  concurrency: number
  mode: "from-en" | "all" | "noop"
}

function parseArgs(): Options {
  const args = process.argv.slice(2)
  const dryRun = args.includes("--dry-run")
  const fromEn = args.includes("--from-en")
  const all = args.includes("--all")
  const localeIdx = args.indexOf("--locale")
  const sectionIdx = args.indexOf("--section")
  const concIdx = args.indexOf("--concurrency")
  const locales: Locale[] =
    localeIdx >= 0 && args[localeIdx + 1]
      ? (args[localeIdx + 1].split(",").filter((l) => (NON_EN_LOCALES as readonly string[]).includes(l)) as Locale[])
      : [...NON_EN_LOCALES]
  const sections: Section[] =
    sectionIdx >= 0 && args[sectionIdx + 1]
      ? (args[sectionIdx + 1].split(",").filter((s) => (SECTIONS as readonly string[]).includes(s)) as Section[])
      : [...SECTIONS]
  const concurrency = concIdx >= 0 && args[concIdx + 1] ? Math.max(1, Number(args[concIdx + 1]) || 4) : 4
  const mode: Options["mode"] = all ? "all" : fromEn ? "from-en" : "noop"
  return { dryRun, locales, sections, concurrency, mode }
}

async function main(): Promise<void> {
  loadEnv()
  const opts = parseArgs()

  if (opts.mode === "noop") {
    console.log("Nothing to do — pass --from-en (commit-hook mode) or --all (bootstrap).")
    return
  }

  // Stage 1: prune orphans (locale files whose en counterpart was deleted).
  const prunes = buildPrunes(opts.sections)
  if (prunes.length > 0) {
    const verb = opts.dryRun ? "would prune" : "pruned"
    console.log(`${verb} ${prunes.length} orphan locale files:`)
    for (const rel of prunes) console.log(`  - ${rel}`)
    if (!opts.dryRun) {
      for (const rel of prunes) rmSync(resolve(ROOT, rel), { force: true })
      for (const locale of NON_EN_LOCALES) pruneEmptyDirs(resolve(CONTENT_DIR, locale))
    }
  }

  // Stage 2: build translation tasks.
  const tasks = (opts.mode === "from-en" ? buildTasksFromDiff(opts.locales, opts.sections) : buildTasksFromAll(opts.locales, opts.sections)).filter((t) =>
    opts.locales.includes(t.locale),
  )

  if (tasks.length === 0) {
    console.log("✅ No content to translate.")
    return
  }

  const byFile = new Map<string, Task[]>()
  for (const t of tasks) {
    const list = byFile.get(t.enRel) ?? []
    list.push(t)
    byFile.set(t.enRel, list)
  }

  console.log(`\nWork: ${tasks.length} (file × locale) translations across ${byFile.size} en files.`)
  for (const [enRel, ts] of byFile) {
    console.log(`  ${enRel} → ${ts.map((t) => t.locale).join(", ")}`)
  }

  if (opts.dryRun) {
    console.log("\n(dry-run — re-run without --dry-run to call the model and write changes)")
    return
  }

  const apiKey = process.env.AI_GATEWAY_API_KEY
  if (!apiKey) {
    console.error("❌ AI_GATEWAY_API_KEY not set. Run `vercel pull --environment=development --yes` first.")
    process.exit(1)
  }

  const primary = process.env.TRANSLATION_EVAL_MODEL || "google/gemini-2.5-flash"
  const fallback = process.env.TRANSLATION_EVAL_FALLBACK_MODEL || "anthropic/claude-sonnet-4-20250514"
  const gw = createGateway({ apiKey })

  console.log(`\nUsing primary=${primary}, fallback=${fallback}, concurrency=${opts.concurrency}\n`)

  const srcCache = new Map<string, string>()
  for (const t of tasks) {
    if (!srcCache.has(t.enAbs)) srcCache.set(t.enAbs, readFileSync(t.enAbs, "utf-8"))
  }

  let done = 0
  let failed = 0
  await pool(tasks, opts.concurrency, async (t) => {
    const src = srcCache.get(t.enAbs)!
    const label = `${t.locale}  ${t.enRel}`
    try {
      const out = await translateFile(gw, primary, fallback, t.locale, src)
      ensureDir(t.targetAbs)
      writeFileSync(t.targetAbs, out.endsWith("\n") ? out : out + "\n")
      done++
      console.log(`  ✓ ${label}`)
    } catch (err) {
      failed++
      const msg = err instanceof Error ? err.message : String(err)
      console.error(`  ✗ ${label}: ${msg}`)
    }
  })

  console.log(`\n${done} translated, ${failed} failed.`)
  if (failed > 0) process.exit(1)
}

main().catch((err) => {
  console.error("❌ Failed:", err)
  process.exit(1)
})
