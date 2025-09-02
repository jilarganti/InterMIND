---
title: "InterMIND வலைப்பதிவு - AI மொழிபெயர்ப்பு மற்றும் வீடியோ தொடர்பு நுண்ணறிவுகள்"
description: "வீடியோ தொடர்புகளுக்கான AI-இயங்கும் நேரடி மொழிபெயர்ப்பு தளமான InterMIND-இன் சமீபத்திய செய்திகள், தொழில்நுட்ப நுண்ணறிவுகள் மற்றும் தயாரிப்பு புதுப்பிப்புகளுடன் புதுப்பித்த நிலையில் இருங்கள்."
lastUpdated: false

---

<script setup>
import { data as posts } from './posts.data'
import { renderMarkdown } from 'shared/utils/markdown'
</script>

<!-- # வலைப்பதிவு -->

<div class="mt-8">
  <article v-for="post of posts" :key="post.url" class="mb-6 pb-10 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
    <h1>
      <a :href="post.url" class="text-[var(--vp-c-text-1)]" style="text-decoration: none">{{ post.title }}</a>
    </h1>
    <div class="text-[var(--vp-c-text-2)] text-sm mt-2 flex items-center flex-nowrap">
      <span>{{ post.date.string }}</span>
      <span v-if="post.author" class="ml-2 flex items-center flex-nowrap">எழுதியவர்&nbsp;<span v-html="renderMarkdown(post.author)"></span></span>
    </div>
    <div class="text-[var(--vp-c-text-1)] mt-4 leading-relaxed" v-if="post.description" v-html="renderMarkdown(post.description)">
    </div>
    <a :href="post.url" class="text-[var(--vp-c-brand-1)] no-underline font-medium hover:underline mt-2 inline-block">மேலும் படிக்க</a>
  </article>
</div>