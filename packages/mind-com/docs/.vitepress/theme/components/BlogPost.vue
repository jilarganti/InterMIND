<script setup>
import { useData } from "vitepress"
const { frontmatter } = useData()
</script>

<template>
  <article class="max-w-5xl mx-auto py-16">
    <div class="vp-doc">
      <Content />
    </div>
    <a href="../" class="fixed top-32 right-20 text-[var(--vp-c-brand-1)] hover:text-[var(--vp-c-brand-2)] z-50">← Back to the blog</a>
  </article>
</template>
