<script setup lang="ts">
import type { LegalEntity } from "~/utils/legal-entities"

defineProps<{ entity: LegalEntity }>()
</script>

<template>
  <span>
    {{ entity.country }}
    <template v-for="id in entity.ids" :key="id.label">
      <span aria-hidden="true"> · </span>
      <a v-if="id.url" :href="id.url" target="_blank" rel="noopener" class="underline decoration-dotted underline-offset-2 hover:text-gray-900 dark:hover:text-white">{{ id.label }} {{ id.value }}</a>
      <span v-else>{{ id.label }} {{ id.value }}</span>
    </template>
  </span>
</template>
