<script setup lang="ts">
import { computed } from "vue"
import { renderMarkdown } from "../utils/markdown"
import { useLocalizedPath } from "../utils/locale"
import NavButton from "./NavButton.vue"

const props = defineProps<{
  title: string
  details: string
  items?: string[]
  images?: {
    light: string
    dark: string
    alt?: string
  }
  linkText?: string
  linkHref?: string
  bullet?: string
}>()

// const { navigateTo } = useLocalizedPath()

// const renderedTitle = computed(() => renderMarkdown(props.title))
// const renderedDetails = computed(() => (props.details ? renderMarkdown(props.details) : ""))
const renderedItems = computed(() => props.items?.map((item) => renderMarkdown(item)) || [])
const bulletStyle = computed(() => props.bullet || "•")

// const handleCardClick = () => {
//   if (props.linkHref) navigateTo(props.linkHref)
// }

// Regex to find text enclosed in double asterisks
const regex = /\*\*(.*?)\*\*/g

// Computed property to style the word(s) enclosed in ** **
const styledTitle = computed(() => props.title.replace(regex, '<span class="hl">$1</span>'))
const styledDetails = computed(() => props.details.replace(regex, '<span class="highlighted-word">$1</span>'))
// const styledDetails = computed(() => props.details.replace(regex, '<span class="hl">$1</span>'))
</script>

<template>
  <div class="pricing-plan">
    <div class="plan-header">
      <h3 class="plan-title" v-html="styledTitle"></h3>
      <div class="plan-price" v-html="styledDetails"></div>
    </div>
    <NavButton v-if="linkHref" :to="linkHref" :buttonLabel="linkText" buttonClass="alt" />
    <ul v-if="items && items.length > 0" class="plan-features" :style="{ '--bullet-content': `'${bulletStyle}'` }">
      <li v-for="(item, index) in renderedItems" :key="index" class="plan-feature">
        <span class="feature-text" v-html="item"></span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.pricing-plan {
  background: var(--vp-c-bg-soft);
  /* border: 1px solid var(--vp-c-brand); */
  border-radius: 16px;
  padding: 32px 24px 24px 24px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  transition:
    box-shadow 0.2s,
    border-color 0.2s;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.04);
  position: relative;
}
.pricing-plan.is-clickable {
  cursor: pointer;
}
.pricing-plan:hover,
.pricing-plan:focus-within {
  border-color: var(--vp-hl-color);
  box-shadow: 0 4px 24px 0 rgba(0, 0, 0, 0.08);
}
.plan-header {
  margin-bottom: 20px;
  text-align: center;
}
.plan-title {
  font-size: 1.5rem;
  /* font-weight: 700; */
  /* color: var(--vp-c-brand); */
  margin: 0 0 8px 0;
}
.plan-price {
  font-size: 1rem;
  /* font-weight: 600; */
  color: var(--vp-c-text-1);
  /* margin-bottom: 0; */
}

.plan-price .highlighted-word {
  background: var(--vp-home-hero-name-background);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
}

.plan-features {
  list-style: none;
  padding: 0;
  margin: 0 0 24px 0;
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
