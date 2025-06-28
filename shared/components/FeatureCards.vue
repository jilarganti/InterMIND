<script setup lang="ts">
import FeatureCard from "./FeatureCard.vue"

interface ImageTheme {
  light: string
  dark: string
  alt?: string
}

interface FeatureItem {
  title: string
  details?: string
  items?: string[]
  linkText?: string
  link?: string
  icon?: ImageTheme
  bullet?: string
}

const props = defineProps<{
  features: FeatureItem[]
}>()

const columns = props.features.length
</script>

<template>
  <div class="feature-cards" :style="{ '--columns': columns }">
    <FeatureCard
      v-for="(feature, index) in features"
      :key="index"
      :title="feature.title"
      :details="feature.details"
      :items="feature.items"
      :images="feature.icon"
      :linkText="feature.linkText"
      :linkHref="feature.link"
      :bullet="feature.bullet"
    />
  </div>
</template>

<style scoped>
.feature-cards {
  display: grid;
  grid-template-columns: repeat(var(--columns), 1fr);
  gap: 24px;
  margin-top: 32px;
}

@media (max-width: 640px) {
  .feature-cards {
    grid-template-columns: 1fr;
  }
}
</style>
