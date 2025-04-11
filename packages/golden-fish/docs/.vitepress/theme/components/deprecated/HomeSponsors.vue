<script setup lang="ts">
import { VPHomeSponsors } from "vitepress/theme"
import { useSponsor } from "../composables/sponsor"
import { useData } from "vitepress"
import { computed } from "vue"

const { data } = useSponsor()
const { frontmatter } = useData()

const showSponsors = computed(() => frontmatter.value.showSponsors)
</script>

<template>
  <VPHomeSponsors
    v-if="data && showSponsors"
    message="We're here to make it easier for you. Talk to one of our specialists today!"
    :data="data"
    actionLink="/en/resources/contacts"
    actionText="Get in touch"
  />
</template>

<style>
.vp-sponsor-grid-image {
  max-width: none !important;
  max-height: none !important;
  /* width: 100%; */
  height: 100%;
  /* object-fit: cover; */
}

.love .vpi-heart.icon {
  display: none;
}

/* .VPHomeSponsors .action .vp-button {
  background-color: var(--custom-action-bg-color);
  color: var(--custom-action-text-color);
} */
</style>
