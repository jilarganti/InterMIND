<script setup>
import { useData } from "vitepress"
const { frontmatter } = useData()

function formatDate(dateString) {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}
</script>

<template>
  <article class="max-w-3xl mx-auto py-8">
    <header class="mb-8 text-center">
      <div class="text-[var(--vp-c-text-2)] text-sm">
        <time :datetime="frontmatter.date" class="mr-4">{{ formatDate(frontmatter.date) }}</time>
        <span v-if="frontmatter.author">by {{ frontmatter.author }}</span>
      </div>
    </header>
    <div class="vp-doc">
      <Content />
    </div>
    <a href="../" class="fixed top-32 right-20 text-[var(--vp-c-brand-1)] hover:text-[var(--vp-c-brand-2)] z-50">← Back to the blog</a>
    <!-- <footer class="mt-16 pt-8 border-t border-[var(--vp-c-divider)]"></footer> -->
  </article>
</template>
