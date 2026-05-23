<script setup lang="ts">
const route = useRoute()
const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl

const { data: post } = await useAsyncData(`blog-${route.path}`, () => queryCollection("blog").path(route.path).first())

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: "Post not found", fatal: true })
}

const pageUrl = `${siteUrl}${post.value.path}`
const canonical = post.value.canonical ?? pageUrl

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
  <div v-if="post" class="content">
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
  </div>
</template>

<style scoped>
.content {
  max-width: 760px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
  line-height: 1.65;
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
</style>
