<script setup>
import TopNavigation from "../components/TopNavigation.vue"
</script>

<template>
  <TopNavigation />
  <main class="vp-doc">
    <Content />
  </main>
</template>

<style>
.VPContent {
  padding-top: var(--vp-nav-height);
}

.vp-doc {
  padding: 32px 24px 96px;
}
</style>
