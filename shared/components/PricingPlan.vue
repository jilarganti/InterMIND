<script setup lang="ts">
import { computed } from "vue"
import { renderMarkdown } from "../utils/markdown"
import { useLocalizedPath } from "../utils/locale"
import NavButton from "./NavButton.vue"

const props = defineProps<{
  title: string
  details?: string
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

const { navigateTo } = useLocalizedPath()

const renderedTitle = computed(() => renderMarkdown(props.title))
const renderedDetails = computed(() => (props.details ? renderMarkdown(props.details) : ""))
const renderedItems = computed(() => props.items?.map((item) => renderMarkdown(item)) || [])
const bulletStyle = computed(() => props.bullet || "•")

const handleCardClick = () => {
  if (props.linkHref) navigateTo(props.linkHref)
}
</script>

<template>
  <div class="pricing-plan" :class="{ 'is-clickable': linkHref }" @click="linkHref && handleCardClick()">
    <div class="plan-header">
      <h3 class="plan-title" v-html="renderedTitle"></h3>
      <div v-if="details" class="plan-price" v-html="renderedDetails"></div>
    </div>
    <ul v-if="items && items.length > 0" class="plan-features" :style="{ '--bullet-content': `'${bulletStyle}'` }">
      <li v-for="(item, index) in renderedItems" :key="index" class="plan-feature">
        <span class="feature-text" v-html="item"></span>
      </li>
    </ul>
    <NavButton v-if="linkHref" :to="linkHref" :buttonLabel="linkText" buttonClass="brand" />
  </div>
</template>

<style scoped>
.pricing-plan {
  background: var(--vp-c-bg-soft);
  border: 2px solid var(--vp-c-brand);
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
  font-weight: 700;
  color: var(--vp-c-brand);
  margin: 0 0 8px 0;
}
.plan-price {
  font-size: 2rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin-bottom: 0;
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
.plan-link {
  display: inline-block;
  margin: 0 auto;
  padding: 10px 28px;
  background: var(--vp-c-brand);
  color: #fff;
  border-radius: 6px;
  font-weight: 600;
  font-size: 1rem;
  text-align: center;
  text-decoration: none;
  transition: background 0.2s;
}
.plan-link:hover,
.plan-link:focus {
  background: var(--vp-hl-color);
}
</style>
