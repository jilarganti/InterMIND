import type { MaybeRefOrGetter } from "vue"

/**
 * Per-page SEO head for the static marketing pages (about, contacts,
 * founders, help). Sets <title>, the meta description, a
 * locale-aware self-canonical, and the matching OpenGraph + Twitter card tags.
 *
 * og:url is derived from the SAME `localePath()` as the canonical, so the two
 * never diverge — Ahrefs flags "Open Graph URL not matching canonical" when a
 * hardcoded EN og:url is served on a locale-prefixed page. og:image defaults to
 * the site cover so every page ships a complete OG card (Ahrefs "Open Graph
 * tags incomplete"). og:type / og:site_name come from the global app.head.
 */
export function usePageSeo(opts: {
  title: MaybeRefOrGetter<string>
  description: MaybeRefOrGetter<string>
  path: string
  image?: string
}) {
  const { siteUrl } = useRuntimeConfig().public
  const localePath = useLocalePath()
  const url = () => `${siteUrl}${localePath(opts.path)}`
  const image = opts.image ?? `${siteUrl}/og-cover.png`
  const title = () => toValue(opts.title)
  const description = () => toValue(opts.description)

  useHead({
    title,
    meta: [
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:image", content: image },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
    ],
    link: [{ rel: "canonical", href: url }],
  })
}
