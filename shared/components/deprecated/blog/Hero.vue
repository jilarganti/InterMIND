<template>
  <div class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">{{ title }}</h1>
        <h3 class="subtitle">{{ subtitle }}</h3>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
  },
}
</script>

<style>
.hero {
  padding: 1.5rem;
}

h1.title {
  font-size: 4rem;
  margin-top: 3rem;
  text-align: center;
  color: var(--vp-c-text-1);
}

h3.subtitle {
  margin-top: 3rem;
  font-size: 1.5rem;
  text-align: center;

  color: var(--vp-c-text-2);
  margin-bottom: 2rem;
}
</style>
