// Returns HTTP 410 Gone for URLs we intentionally removed from the site,
// so Google drops them from the index quickly. Use sparingly — only for
// pages that drove unwanted/irrelevant traffic or whose external links we
// chose not to recover.
//
// Three layers:
//   - GONE_BLOG_SLUGS: matches /blog/<slug> in EN and all supported locales.
//   - GONE_PAGE_PATHS: matches a top-level page path in EN and all locales.
//   - GONE_EXACT_PATHS: matches a single absolute path exactly. Use for
//     one-off URLs (e.g. abandoned promo pages) where locale-fanout doesn't
//     apply.
const GONE_BLOG_SLUGS = new Set(["software-testing-basics-concepts-and-terminology"])

const GONE_PAGE_PATHS = new Set([
  // Stale media-kit page, removed 2026-06-11. The /media-kit images stay in
  // public/ — press may have hotlinked them.
  "/brand-assets",
])

const GONE_EXACT_PATHS = new Set([
  // /ru/promo/imind — 732 refdomains, 128 organic traffic. iMind→InterMIND
  // legacy promo page; not restored on the rebrand.
  "/ru/promo/imind",
])

const LOCALE_PREFIXES = ["/es", "/pt", "/fr", "/de", "/ru", "/zh"]

function stripLocale(path: string): string {
  for (const prefix of LOCALE_PREFIXES) {
    if (path === prefix || path.startsWith(`${prefix}/`)) {
      return path.slice(prefix.length) || "/"
    }
  }
  return path
}

function blogSlug(path: string): string | null {
  const match = path.match(/^\/blog\/([^/?#]+)\/?$/)
  return match ? match[1]! : null
}

function isGone(path: string): boolean {
  if (GONE_EXACT_PATHS.has(path)) return true
  const localeFree = stripLocale(path)
  if (GONE_PAGE_PATHS.has(localeFree)) return true
  const slug = blogSlug(localeFree)
  return slug !== null && GONE_BLOG_SLUGS.has(slug)
}

export default defineEventHandler((event) => {
  const path = (event.path.split("?")[0] ?? "").replace(/\/+$/, "") || "/"
  if (!isGone(path)) return

  setResponseStatus(event, 410, "Gone")
  setResponseHeader(event, "Content-Type", "text/html; charset=utf-8")
  setResponseHeader(event, "X-Robots-Tag", "noindex")
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>410 Gone</title><meta name="robots" content="noindex"></head><body><h1>410 Gone</h1><p>This page has been permanently removed.</p></body></html>`
})
