<template>
  <div v-show="showForm" class="typeform-container" :data-tf-live="props.typeformId"></div>
</template>

<script setup lang="ts">
import { useData, useRouter, inBrowser } from "vitepress"
import { computed, watch } from "vue"

const RELOAD_PATHS: string[] = ["/uae-business/company-registration/fees-timelines"]

const props = defineProps({
  typeformId: {
    type: String,
    required: true,
  },
})

const { frontmatter } = useData()
const router = useRouter()
const showForm = computed(() => frontmatter.value.showForm ?? false)

function loadTypeformScript() {
  if (!document.querySelector('script[src="https://embed.typeform.com/next/embed.js"]')) {
    const script = document.createElement("script")
    script.src = "https://embed.typeform.com/next/embed.js"
    document.body.appendChild(script)
  }
}

watch(
  () => router.route.path,
  (newPath) => {
    if (RELOAD_PATHS.includes(newPath)) {
      window.location.reload()
    }
  },
)

if (inBrowser && showForm.value) loadTypeformScript()
</script>

<style scoped>
.typeform-container {
  margin-left: 1%;
}
</style>
