<script setup lang="ts">
import { computed } from "vue"
import { renderMarkdown } from "../utils/markdown"

const props = defineProps<{
  title: string
  price?: string
  details?: string
  items?: string[]
  images?: {
    light: string
    dark: string
    alt?: string
  }
  buttonClass?: "brand" | "alt" | "sponsor"
  bullet?: string
}>()

const regex = /\*\*(.*?)\*\*/g
const bulletStyle = computed(() => props.bullet || "•")

function replace(text: string, className: string, pattern: RegExp = regex): string {
  return text.replace(pattern, `<span class="${className}">$1</span>`)
}
</script>

<template>
  <div class="pricing-plan">
    <div class="plan-header">
      <h3 class="plan-title" v-html="replace(props.title, 'highlighted-word')"></h3>
      <div v-if="price" class="plan-price" v-html="replace(props.price!, 'highlighted-word')"></div>
      <div v-if="details" class="plan-price" v-html="replace(props.details!, 'highlighted-word')"></div>
    </div>
    <div class="plan-action">
      <slot name="button"></slot>
    </div>
    <ul v-if="items && items.length > 0" class="plan-features" :style="{ '--bullet-content': `'${bulletStyle}'` }">
      <li v-for="(item, index) in items" :key="index" class="plan-feature">
        <span class="feature-text" v-html="renderMarkdown(item)"></span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.pricing-plan {
  background: var(--vp-c-bg-soft);
  border-radius: 16px;
  padding: 18px 24px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  position: relative;
}

.plan-header {
  margin-bottom: 28px;
  /* text-align: center; */
}
.plan-title {
  font-size: 1rem;
  font-weight: 300;
  margin-bottom: 28px;
}
.plan-price {
  font-size: 0.8rem;
  color: var(--vp-c-text-1);
  white-space: nowrap;
}

.plan-action :deep(.VPButton) {
  width: 100%;
  box-sizing: border-box; /* Ensure padding and border are included in the width */
}

:deep(.highlighted-word) {
  color: var(--vp-hl-color);
  /* font-weight: bold; */
  font-size: 2rem;
}

/* Add this rule to remove underline from VPButtons within hero actions */
/* :deep(.VPButton) {
  text-decoration: none;
} */

.plan-features {
  list-style: none;
  padding: 0;
}
.plan-feature {
  position: relative;
  padding-left: 1.5em;
  margin-bottom: 12px;
  color: var(--vp-c-text-2);
}
.plan-feature::before {
  content: var(--bullet-content);
  position: absolute;
  left: 0;
  color: var(--vp-c-brand);
}
.feature-text :deep(strong) {
  color: var(--vp-hl-color);
}
</style>
