<script setup lang="ts">
const route = useRoute()
const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl
const productUrl = config.public.productUrl

const { data: post } = await useAsyncData(`blog-${route.path}`, () =>
  queryCollection("blog").path(route.path).first(),
)

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: "Post not found", fatal: true })
}

const pageUrl = `${siteUrl}${post.value.path}`
const canonical = post.value.canonical ?? pageUrl
// Per Phase 0/6: hidden posts (e.g. software-testing-basics-*) remain index,follow
// but canonical points to the product domain so equity flows to intermind.com.

useHead({
  title: `${post.value.title} — InterMIND`,
  meta: [
    { name: "description", content: post.value.description },
    { property: "og:type", content: "article" },
    { property: "og:url", content: pageUrl },
    { property: "og:title", content: post.value.title },
    { property: "og:description", content: post.value.description },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: post.value.title },
    { name: "twitter:description", content: post.value.description },
    { property: "article:published_time", content: post.value.date },
  ],
  link: [{ rel: "canonical", href: canonical }],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.value.title,
        description: post.value.description,
        datePublished: post.value.date,
        mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
        url: pageUrl,
        publisher: {
          "@type": "Organization",
          name: "InterMIND",
          logo: { "@type": "ImageObject", url: `${siteUrl}/logo.svg` },
        },
      }),
    },
  ],
})

function formatDate(d: string): string {
  return new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
}
</script>

<template>
  <div class="page">
    <header class="header">
      <a href="/" class="brand">InterMIND</a>
      <nav class="nav">
        <a href="/blog">Blog</a>
        <a :href="productUrl" class="nav-cta">Open the app</a>
      </nav>
    </header>

    <main v-if="post">
      <article class="post">
        <header class="post-header">
          <p class="meta">{{ formatDate(post.date) }}</p>
          <h1>{{ post.title }}</h1>
          <p class="lede">{{ post.description }}</p>
        </header>
        <ContentRenderer :value="post" class="prose" />
      </article>
      <p class="back">
        <NuxtLink to="/blog">← All posts</NuxtLink>
      </p>
    </main>

    <footer class="footer">
      <div class="footer-links">
        <a :href="productUrl">Product</a>
        <a href="/blog">Blog</a>
        <a href="/legal/privacy">Privacy</a>
        <a href="/legal/terms">Terms</a>
        <a href="mailto:support@mind.com">Contact</a>
      </div>
      <p class="footer-copy">© {{ new Date().getFullYear() }} InterMIND. All rights reserved.</p>
    </footer>
  </div>
</template>

<style scoped>
.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  color: #1c1c1c;
  background: #fafaf7;
  font-family:
    "Inter",
    system-ui,
    -apple-system,
    "Segoe UI",
    sans-serif;
  line-height: 1.65;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 2rem;
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
}
.brand {
  font-weight: 700;
  letter-spacing: 0.02em;
  color: inherit;
  text-decoration: none;
}
.nav {
  display: flex;
  gap: 1.5rem;
  align-items: center;
  font-size: 0.95rem;
}
.nav a {
  color: #1c1c1c;
  text-decoration: none;
}
.nav-cta {
  padding: 0.5rem 1rem;
  background: #1c1c1c;
  color: #fff !important;
  border-radius: 999px;
  font-weight: 500;
}
main {
  flex: 1;
  max-width: 760px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
}
.post-header {
  margin: 2rem 0 3rem;
}
.meta {
  font-size: 0.85rem;
  color: #888;
  margin: 0 0 0.5rem;
}
.post h1 {
  font-size: clamp(1.8rem, 4vw, 2.6rem);
  line-height: 1.2;
  margin: 0 0 1rem;
  letter-spacing: -0.01em;
}
.lede {
  font-size: 1.1rem;
  color: #555;
  margin: 0;
}
.back {
  margin: 3rem 0 0;
}
.back a {
  color: #555;
  text-decoration: none;
}
.back a:hover {
  color: #dd9144;
}
.footer {
  background: #f0efea;
  padding: 2rem;
  margin-top: auto;
}
.footer-links {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 1rem;
  font-size: 0.92rem;
}
.footer-links a {
  color: #1c1c1c;
  text-decoration: none;
}
.footer-links a:hover {
  text-decoration: underline;
}
.footer-copy {
  text-align: center;
  font-size: 0.85rem;
  color: #777;
  margin: 0;
}
</style>

<style>
/* Global styles for blog content rendered via ContentRenderer (MDC).
   Scoped wouldn't reach into the rendered tree. */
.prose h2 {
  font-size: 1.6rem;
  margin: 2.5rem 0 1rem;
  font-weight: 600;
  letter-spacing: -0.01em;
}
.prose h3 {
  font-size: 1.25rem;
  margin: 2rem 0 0.75rem;
  font-weight: 600;
}
.prose p,
.prose ul,
.prose ol {
  margin: 0 0 1.25rem;
}
.prose ul,
.prose ol {
  padding-left: 1.5rem;
}
.prose li {
  margin: 0.35rem 0;
}
.prose a {
  color: #dd9144;
  text-decoration: underline;
}
.prose img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin: 1.5rem 0;
}
.prose blockquote {
  border-left: 4px solid #dd9144;
  padding: 0.5rem 1.25rem;
  margin: 1.5rem 0;
  color: #555;
  background: #fff7ec;
  border-radius: 0 8px 8px 0;
}
.prose code {
  background: #f0efea;
  padding: 0.15rem 0.35rem;
  border-radius: 4px;
  font-size: 0.9em;
}
.prose pre {
  background: #1c1c1c;
  color: #f0efea;
  padding: 1rem;
  border-radius: 8px;
  overflow-x: auto;
  font-size: 0.9rem;
  margin: 1.5rem 0;
}
.prose pre code {
  background: transparent;
  padding: 0;
  color: inherit;
}
.prose table {
  width: 100%;
  border-collapse: collapse;
  margin: 1.5rem 0;
  font-size: 0.95rem;
}
.prose th,
.prose td {
  border: 1px solid #ececea;
  padding: 0.5rem 0.75rem;
  text-align: left;
}
.prose th {
  background: #f0efea;
  font-weight: 600;
}
.prose hr {
  border: none;
  border-top: 1px solid #ececea;
  margin: 2.5rem 0;
}
/* Legacy VitePress class hooks left in markdown — keep minimal styling */
.prose .subtitle {
  font-size: 1.05rem;
  color: #777;
  margin-top: -0.5rem;
  margin-bottom: 1.5rem;
}
.prose .stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
  margin: 1.5rem 0;
}
.prose .stat-card {
  padding: 1rem;
  background: #fff;
  border: 1px solid #ececea;
  border-radius: 8px;
  text-align: center;
}
.prose .stat-number {
  font-size: 1.8rem;
  font-weight: 700;
  color: #dd9144;
}
.prose .stat-label {
  font-size: 0.85rem;
  color: #555;
}
</style>
