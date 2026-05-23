<script setup lang="ts">
const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl
const productUrl = config.public.productUrl
const signInUrl = config.public.signInUrl

const { data: posts } = await useAsyncData("blog-index", () =>
  queryCollection("blog")
    .where("hidden", "<>", true)
    .order("date", "DESC")
    .select("path", "title", "description", "date", "author")
    .all(),
)

const title = "Blog — InterMIND"
const description =
  "Long-form research and analysis on real-time AI interpretation, multilingual meetings, and global team communication from the InterMIND team."

useHead({
  title,
  meta: [
    { name: "description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: `${siteUrl}/blog` },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ],
  link: [{ rel: "canonical", href: `${siteUrl}/blog` }],
})

function formatDate(d: string): string {
  const date = new Date(d)
  return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
}
</script>

<template>
  <div class="page">
    <header class="header">
      <a href="/" class="brand">InterMIND</a>
      <nav class="nav">
        <a href="/blog" aria-current="page">Blog</a>
        <a :href="signInUrl" class="nav-cta">Sign in</a>
      </nav>
    </header>

    <main>
      <section class="intro">
        <h1>Blog</h1>
        <p>Research and analysis on real-time AI interpretation and multilingual collaboration.</p>
      </section>

      <ul v-if="posts && posts.length" class="post-list">
        <li v-for="post in posts" :key="post.path">
          <NuxtLink :to="post.path">
            <h2>{{ post.title }}</h2>
            <p class="meta">{{ formatDate(post.date) }}</p>
            <p class="excerpt">{{ post.description }}</p>
          </NuxtLink>
        </li>
      </ul>
      <p v-else class="empty">No posts yet.</p>
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
  line-height: 1.55;
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
.nav a[aria-current="page"] {
  text-decoration: underline;
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
.intro h1 {
  font-size: 2.5rem;
  margin: 0 0 0.5rem;
}
.intro p {
  color: #555;
  margin: 0 0 2rem;
}
.post-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0;
}
.post-list li {
  border-top: 1px solid #ececea;
}
.post-list li:last-child {
  border-bottom: 1px solid #ececea;
}
.post-list a {
  display: block;
  padding: 1.5rem 0;
  text-decoration: none;
  color: inherit;
}
.post-list a:hover h2 {
  color: #dd9144;
}
.post-list h2 {
  font-size: 1.3rem;
  margin: 0 0 0.25rem;
  font-weight: 600;
}
.meta {
  font-size: 0.85rem;
  color: #888;
  margin: 0 0 0.5rem;
}
.excerpt {
  margin: 0;
  color: #555;
}
.empty {
  color: #888;
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
