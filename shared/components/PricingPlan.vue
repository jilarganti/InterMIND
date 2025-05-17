<script setup lang="ts">
import { computed } from "vue"
import { renderMarkdown } from "../utils/markdown"
import NavButton from "./NavButton.vue"

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
  linkText: string
  linkHref: string
  buttonClass?: "brand" | "alt" | "sponsor"
  bullet?: string
}>()

// const renderedItems = computed(() => props.items?.map((item) => renderMarkdown(item)) || [])
const bulletStyle = computed(() => props.bullet || "•")

const regex = /\*\*(.*?)\*\*/g

// Computed property to style the word(s) enclosed in ** **
const styledTitle = computed(() => props.title.replace(regex, '<span class="hl">$1</span>'))
const styledPrice = computed(() => props.price?.replace(regex, '<span class="highlighted-word">$1</span>') ?? "")
const styledDetails = computed(() => props.details?.replace(regex, '<span class="highlighted-word">$1</span>') ?? "")
</script>

<template>
  <div class="pricing-plan">
    <div class="plan-header">
      <h3 class="plan-title" v-html="styledTitle"></h3>
      <div v-if="price" class="plan-price" v-html="styledPrice"></div>
      <div v-if="details" class="plan-price" v-html="styledDetails"></div>
    </div>
    <NavButton v-if="linkHref" :to="linkHref" :buttonLabel="linkText" :buttonClass="buttonClass" />
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
  padding: 32px 24px 24px 24px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  position: relative;
}
/* .pricing-plan.is-clickable {
  cursor: pointer;
} */

.plan-header {
  margin-bottom: 28px;
  /* text-align: center; */
}
.plan-title {
  font-size: 1.5rem;
  margin: 0 0 8px 0;
  margin-bottom: 28px;
}
.plan-price {
  font-size: 0.9rem;
  color: var(--vp-c-text-1);
}

:deep(.highlighted-word) {
  color: var(--vp-hl-color);
  font-weight: bold;
  font-size: 2rem;
}

/* Add this rule to remove underline from VPButtons within hero actions */
:deep(.VPButton) {
  text-decoration: none;
}

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
  font-weight: bold;
}
.feature-text :deep(strong) {
  color: var(--vp-hl-color);
}
</style>
