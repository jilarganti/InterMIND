<!-- components/LogoGrid.vue -->
<template>
  <div class="logo-grid">
    <a v-for="logo in logos" :key="logo.src" :href="logo.url" target="_blank" rel="noopener noreferrer" class="logo-link">
      <div class="logo-wrapper">
        <img :src="withBase(logo.src)" :alt="getAltText(logo.src)" class="logo" />
      </div>
    </a>
  </div>
</template>

<script setup lang="ts">
import { withBase } from "vitepress"

interface Logo {
  url: string
  src: string
}

defineProps<{
  logos: Logo[]
}>()

function getAltText(src: string) {
  return src.split("/").pop()?.split(".")[0] || "logo"
}
</script>

<style scoped>
.logo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
  align-items: center;
}

.logo-link {
  text-decoration: none;
  display: block;
}

.logo-wrapper {
  height: 60px;
  padding: 0.75rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.logo {
  height: 100%;
  /* width: 100%; */
  object-fit: contain;
}

.logo-link:hover .logo-wrapper {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
}

/* Темная тема */
:root.dark .logo-wrapper {
  background: #ffffff;
  box-shadow: none;
}

:root.dark .logo-link:hover .logo-wrapper {
  background: var(--vp-c-main-2);
}
</style>
