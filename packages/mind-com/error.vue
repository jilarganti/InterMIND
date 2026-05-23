<script setup lang="ts">
const props = defineProps<{ error: { statusCode: number; statusMessage?: string; message?: string } }>()

useHead({
  title: () => `${props.error.statusCode} — InterMIND`,
})

function handleError() {
  return clearError({ redirect: "/" })
}
</script>

<template>
  <main style="max-width: 600px; margin: 6rem auto; padding: 2rem; font-family: system-ui, sans-serif; text-align: center">
    <h1 style="font-size: 4rem; margin: 0">{{ error.statusCode }}</h1>
    <p>{{ error.statusMessage || error.message || "Something went wrong." }}</p>
    <button
      style="margin-top: 1rem; padding: 0.5rem 1rem; background: #dd9144; color: #fff; border: 0; border-radius: 4px; cursor: pointer"
      @click="handleError"
    >
      Back to home
    </button>
  </main>
</template>
