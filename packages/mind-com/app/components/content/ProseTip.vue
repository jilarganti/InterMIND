<template>
  <ProseCallout color="success" :icon="appConfig.ui.icons.tip">
    <span v-if="title" class="mb-1 block font-semibold">{{ title }}</span>
    <slot mdc-unwrap="p" />
  </ProseCallout>
</template>

<script setup lang="ts">
import { useAppConfig } from '#imports'

// Overrides @nuxt/ui's built-in ProseTip (which drops the title) so `:::tip{title="..."}`
// blocks render their heading. Reuses the theme-aware UCallout for light/dark styling.
defineProps<{ title?: string }>()
const appConfig = useAppConfig()
</script>
