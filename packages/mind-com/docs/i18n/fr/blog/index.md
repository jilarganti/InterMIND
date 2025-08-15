---
title: "Blog"
lastUpdated: false
---

<script setup>
import { data as posts } from './posts.data'
</script>

# Blog

<div class="mt-8">
  <article v-for="post of posts" :key="post.url" class="mb-6 pb-6 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
    <h2>
      <a :href="post.url" style="color: var(--vp-c-text-1); text-decoration: none;" class="text-2xl font-semibold" @mouseover="$event.target.style.color='var(--vp-c-brand-1)'" @mouseout="$event.target.style.color='var(--vp-c-text-1)'">{{ post.title }}</a>
    </h2>
    <p class="text-[var(--vp-c-text-2)] text-sm mt-2">
      {{ post.date.string }}
      <span v-if="post.author" class="ml-4">par {{ post.author }}</span>
    </p>
    <p class="text-[var(--vp-c-text-1)] mt-4 leading-relaxed" v-if="post.description">
      {{ post.description }}
      <a :href="post.url" class="text-[var(--vp-c-brand-1)] no-underline font-medium hover:underline ml-2">Lire la suite</a>
    </p>
  </article>
</div>