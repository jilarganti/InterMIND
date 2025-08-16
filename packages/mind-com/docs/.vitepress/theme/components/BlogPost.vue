<script setup>
import VPButton from "vitepress/dist/client/theme-default/components/VPButton.vue"
</script>

<template>
  <article class="max-w-5xl mx-auto py-16 px-4 sm:px-8 lg:px-0">
    <div class="vp-doc">
      <Content />
    </div>
    <VPButton text="← Back to the blog" theme="brand" href="../" class="fixed left-4 bottom-4 z-50 shadow-md hover:shadow-lg transition-shadow" />
  </article>
</template>
