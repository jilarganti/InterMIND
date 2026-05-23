<script setup lang="ts">
const route = useRoute()
const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl
const productUrl = config.public.productUrl
const signInUrl = config.public.signInUrl

const { data: doc } = await useAsyncData(`legal-${route.path}`, () => queryCollection("legal").path(route.path).first())

if (!doc.value) {
  throw createError({ statusCode: 404, statusMessage: "Page not found", fatal: true })
}

const pageUrl = `${siteUrl}${doc.value.path}`

useHead({
  title: `${doc.value.title} — InterMIND`,
  meta: [
    { name: "description", content: doc.value.description },
    { property: "og:type", content: "article" },
    { property: "og:url", content: pageUrl },
    { property: "og:title", content: doc.value.title },
    { property: "og:description", content: doc.value.description },
  ],
  link: [{ rel: "canonical", href: pageUrl }],
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
        <a :href="signInUrl" class="nav-cta">Sign in</a>
        <a :href="productUrl" class="nav-cta nav-cta-primary">New version</a>
      </nav>
    </header>

    <main v-if="doc">
      <article class="doc">
        <header class="doc-header">
          <p class="meta">Last updated {{ formatDate(doc.updated) }}</p>
          <h1>{{ doc.title }}</h1>
          <p class="lede">{{ doc.description }}</p>
        </header>
        <ContentRenderer :value="doc" class="prose" />
      </article>
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
.nav-cta-primary {
  background: #dd9144;
}
.nav-cta-primary:hover {
  background: #c87a30;
}
main {
  flex: 1;
  max-width: 760px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
}
.doc-header {
  margin: 2rem 0 3rem;
}
.meta {
  font-size: 0.85rem;
  color: #888;
  margin: 0 0 0.5rem;
}
.doc h1 {
  font-size: clamp(1.8rem, 4vw, 2.6rem);
  line-height: 1.2;
  margin: 0 0 1rem;
  letter-spacing: -0.01em;
}
.lede {
  font-size: 1.05rem;
  color: #555;
  margin: 0;
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
