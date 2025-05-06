<script setup lang="ts">
interface Props {
  href: string
  text?: string

  target?: string
  rel?: string
}

const props = withDefaults(defineProps<Props>(), {
  text: "",
})
</script>

<template>
  <a :href="href" class="themed-button light-only" :target="target" :rel="rel">
    {{ text }}
  </a>
  <a :href="href" class="themed-button dark-only" :target="target" :rel="rel">
    {{ text }}
  </a>
</template>

<style>
.themed-button {
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  /* margin-top: 5px; */
  /* margin-bottom: 5px; */
  transition: all 0.3s;
  text-decoration: none !important;
  display: inline-block;
  border: 1px solid var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
  background: transparent;
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -2px rgba(0, 0, 0, 0.1);
}

.themed-button:hover {
  background-color: var(--vp-c-brand-soft);
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
  box-shadow:
    0 6px 8px -1px rgba(0, 0, 0, 0.12),
    0 3px 6px -2px rgba(0, 0, 0, 0.12);
}

.themed-button.light-only,
.themed-button.dark-only {
  background-color: transparent;
  border: 1px solid var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.themed-button.light-only:hover,
.themed-button.dark-only:hover {
  background-color: var(--vp-c-brand-soft);
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}
</style>
