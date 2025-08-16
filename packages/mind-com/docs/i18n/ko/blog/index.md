---
title: "InterMIND 블로그 - AI 번역 및 비디오 커뮤니케이션 인사이트"
description: "비디오 커뮤니케이션을 위한 AI 기반 실시간 번역 플랫폼 InterMIND의 최신 뉴스, 기술적 인사이트, 제품 업데이트를 확인하세요."
lastUpdated: false
---

<script setup>
import { data as posts } from './posts.data'
import { renderMarkdown } from 'shared/utils/markdown'
</script>

<!-- # 블로그 -->

<div class="mt-8">
  <article v-for="post of posts" :key="post.url" class="mb-6 pb-10 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
    <h1>
      <a :href="post.url" class="text-2xl font-semibold text-[var(--vp-c-text-1)] hover:text-[var(--vp-c-brand-1)] no-underline">{{ post.title }}</a>
    </h1>
    <div class="text-[var(--vp-c-text-2)] text-sm mt-2 flex items-center flex-nowrap">
      <span>{{ post.date.string }}</span>
      <span v-if="post.author" class="ml-2 flex items-center flex-nowrap">작성자:&nbsp;<span v-html="renderMarkdown(post.author)"></span></span>
    </div>
    <div class="text-[var(--vp-c-text-1)] mt-4 leading-relaxed" v-if="post.description" v-html="renderMarkdown(post.description)">
    </div>
    <a :href="post.url" class="text-[var(--vp-c-brand-1)] no-underline font-medium hover:underline mt-2 inline-block">더 읽기</a>
  </article>
</div>