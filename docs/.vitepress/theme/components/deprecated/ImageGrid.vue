<script setup lang="ts">
// import { defineProps } from "vue"

interface ImageItem {
  src: string
  href: string
  alt?: string
}

const props = defineProps<{
  images: ImageItem[]
}>()

const columns = props.images.length
</script>

<template>
  <div class="image-grid" :style="{ '--columns': columns }">
    <a v-for="(image, index) in images" :key="index" :href="image.href" class="image-grid-item">
      <img :src="image.src" :alt="image.alt || 'Image ' + (index + 1)" />
    </a>
  </div>
</template>

<style scoped>
.image-grid {
  display: grid;
  grid-template-columns: repeat(var(--columns), 1fr);
  gap: 20px;
}

.image-grid-item img {
  width: 100%;
  height: auto;
  display: block;
  margin-bottom: 20px;
}

/* Адаптивность: на экранах меньше 600px — 1 столбец */
@media (max-width: 600px) {
  .image-grid {
    grid-template-columns: 1fr;
  }
}
</style>
