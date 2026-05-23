<script setup lang="ts">
interface GridImage {
  src: string
  alt?: string
}
defineProps<{ images: GridImage[] }>()
</script>

<template>
  <div class="image-grid">
    <a v-for="img in images" :key="img.src" :href="img.src" target="_blank" rel="noopener" class="cell">
      <img :src="img.src" :alt="img.alt ?? ''" loading="lazy" />
    </a>
  </div>
</template>

<style scoped>
.image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1.5rem 0;
}
.cell {
  display: block;
  border-radius: 8px;
  overflow: hidden;
  background: #f0efea;
  border: 1px solid #ececea;
}
.cell img {
  width: 100%;
  height: auto;
  display: block;
}
</style>
