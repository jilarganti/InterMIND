---
# layout: page
title: "Blog"
# sidebar: false
---

<script setup>
import { data as posts } from './posts.data'
</script>

# Blog

<div class="mt-8">
  <article v-for="post of posts" :key="post.url" class="mb-12 pb-12 text-[var(--vp-c-brand-1)]">
    <h2>
      <a :href="post.url" class="text-[var(--vp-c-text-1)]">{{ post.title }}</a>
    </h2>
    <p class="text-[var(--vp-c-text-2)] text-sm mt-2">{{ post.date.string }}</p>
    <p class="text-[var(--vp-c-text-1)] mt-4 leading-relaxed" v-if="post.excerpt">{{ post.excerpt }}</p>
    <p class="mt-4">
      <a :href="post.url" class="text-[var(--vp-c-brand-1)]">Leia mais →</a>
    </p>
  </article>
</div>