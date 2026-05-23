<script setup lang="ts">
const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl
const productUrl = config.public.productUrl
const signInUrl = config.public.signInUrl

const title = "InterMIND — Real-time multilingual video meetings"
const description =
  "InterMIND is a video meeting platform with real-time AI interpretation built in. Everyone speaks their own language, hears everyone else in theirs — no subtitles, no lag, no third-party plugin."
const ogImage = `${siteUrl}/og-cover.png`

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "InterMIND",
  url: siteUrl,
  logo: `${siteUrl}/logo.svg`,
  description: "Real-time AI interpretation built into video meetings.",
  sameAs: [productUrl],
}

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: "InterMIND",
  publisher: { "@id": `${siteUrl}/#organization` },
  inLanguage: "en",
}

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "InterMIND",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: productUrl,
  publisher: { "@id": `${siteUrl}/#organization` },
  description: "Multilingual video meeting platform with real-time AI interpretation.",
}

useHead({
  title,
  meta: [
    { name: "description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: `${siteUrl}/` },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: ogImage },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:site_name", content: "InterMIND" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: ogImage },
  ],
  link: [{ rel: "canonical", href: `${siteUrl}/` }],
  script: [
    { type: "application/ld+json", innerHTML: JSON.stringify(organizationJsonLd) },
    { type: "application/ld+json", innerHTML: JSON.stringify(websiteJsonLd) },
    { type: "application/ld+json", innerHTML: JSON.stringify(softwareJsonLd) },
  ],
})

const currentYear = new Date().getFullYear()
</script>

<template>
  <div class="page">
    <header class="header">
      <a href="/" class="brand" aria-label="InterMIND home">
        <span class="brand-mark">InterMIND</span>
      </a>
      <nav class="nav">
        <a href="/blog">Blog</a>
        <a :href="signInUrl" class="nav-cta">Sign in</a>
      </nav>
    </header>

    <main>
      <section class="hero">
        <h1>
          Speak your language.<br />
          Be understood in theirs.
        </h1>
        <p class="lede">
          InterMIND is a video meeting platform with real-time AI interpretation built in. No subtitles. No third-party plugin. No language barrier.
        </p>
        <p class="cta-row">
          <a :href="productUrl" class="btn btn-primary">Open InterMIND</a>
          <a href="/blog" class="btn btn-secondary">Read the blog</a>
        </p>
      </section>

      <section class="values">
        <article>
          <h2>Real time, not subtitles</h2>
          <p>Voice-to-voice interpretation that runs while you speak — not a transcript that appears after the sentence ends.</p>
        </article>
        <article>
          <h2>Built into the meeting</h2>
          <p>The interpreter is part of the platform, not a plugin or a translation widget bolted on top of someone else’s video stack.</p>
        </article>
        <article>
          <h2>For conversations that matter</h2>
          <p>Designed for distributed teams, partners and customers where misunderstanding has a price tag — not casual chit-chat.</p>
        </article>
      </section>

      <section class="closing">
        <h2>Try a multilingual meeting today.</h2>
        <p>
          <a :href="productUrl" class="btn btn-primary">Open InterMIND →</a>
        </p>
      </section>
    </main>

    <footer class="footer">
      <div class="footer-links">
        <a :href="productUrl">Product</a>
        <a href="/blog">Blog</a>
        <a href="/legal/privacy">Privacy</a>
        <a href="/legal/terms">Terms</a>
        <a href="mailto:support@mind.com">Contact</a>
      </div>
      <p class="footer-copy">© {{ currentYear }} InterMIND. All rights reserved.</p>
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
  text-decoration: none;
  color: inherit;
}
.brand-mark {
  font-weight: 700;
  letter-spacing: 0.02em;
  font-size: 1.05rem;
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
.nav a:hover {
  opacity: 0.7;
}
.nav-cta {
  padding: 0.5rem 1rem;
  background: #1c1c1c;
  color: #fff !important;
  border-radius: 999px;
  font-weight: 500;
}
.nav-cta:hover {
  background: #dd9144;
  opacity: 1;
}
main {
  flex: 1;
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
}
.hero {
  padding: 5rem 0 4rem;
  text-align: center;
  max-width: 720px;
  margin: 0 auto;
}
.hero h1 {
  font-size: clamp(2.2rem, 5vw, 3.4rem);
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin: 0 0 1.5rem;
  font-weight: 700;
}
.lede {
  font-size: 1.15rem;
  color: #555;
  margin: 0 auto 2rem;
  max-width: 560px;
}
.cta-row {
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0;
}
.btn {
  display: inline-block;
  padding: 0.85rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  transition:
    background 0.15s,
    transform 0.15s;
}
.btn-primary {
  background: #dd9144;
  color: #fff;
}
.btn-primary:hover {
  background: #c87a30;
}
.btn-secondary {
  background: transparent;
  color: #1c1c1c;
  border: 1px solid #d0d0c8;
}
.btn-secondary:hover {
  border-color: #1c1c1c;
}
.values {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
  padding: 3rem 0;
  border-top: 1px solid #ececea;
  border-bottom: 1px solid #ececea;
  margin-top: 2rem;
}
.values article h2 {
  font-size: 1.15rem;
  margin: 0 0 0.5rem;
  font-weight: 600;
}
.values article p {
  color: #555;
  font-size: 0.98rem;
  margin: 0;
}
.closing {
  padding: 4rem 0;
  text-align: center;
}
.closing h2 {
  font-size: clamp(1.6rem, 3vw, 2rem);
  margin: 0 0 1.5rem;
  font-weight: 600;
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
