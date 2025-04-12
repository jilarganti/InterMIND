<script setup lang="ts">
import { computed } from "vue"
import { VPDocAsideSponsors } from "vitepress/theme"
// import { useSponsor } from "../composables/sponsor"
import { useSponsor } from "@theme/~composables/sponsor"
import { useData } from "vitepress"

const { data } = useSponsor()
const { frontmatter } = useData()

// Set to true if showSponsors is not specified in frontmatter
// const showSponsors = computed(() => frontmatter.value.showSponsors ?? true)
/**
 * todo fix this to production
 */
const showSponsors = computed(() => frontmatter.value.showSponsors ?? false)

const sponsors = computed(() => {
  return (
    data?.value.map((sponsor) => {
      return {
        size: sponsor.size === "big" ? "mini" : "xmini",
        items: sponsor.items,
      }
    }) ?? []
  )
})
</script>

<template>
  <a v-if="showSponsors" class="ad" href="https://www.getyourguide.com/dubai-l173/dubai-expo-2020-entry-tickets-with-hotel-transfers-t494819" target="_blank">
    <img width="22" height="22" src="/content/expo.avif" />
    <span>
      <p class="extra-info">Building Together</p>
      <p class="heading">Expo 2024 24 - Oct 3</p>
      <p class="extra-info">Get your free ticket!</p>
    </span>
  </a>

  <!-- Отображаем VPDocAsideSponsors в зависимости от значения showSponsors -->
  <VPDocAsideSponsors v-if="data && showSponsors" :data="sponsors" />
</template>

<style>
.ad {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-radius: 14px;
  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
  position: relative;
  font-size: 0.9rem;
  font-weight: 700;
  line-height: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 1rem;
  background-color: var(--vp-c-bg-alt);
  border: 2px solid var(--vp-c-bg-alt);
  transition: border-color 0.5s;
}

.ad:hover {
  border: 2px solid var(--vp-c-brand-light);
}

.ad img {
  transition: transform 0.5s;
  transform: scale(1.25);
}

.ad:hover img {
  transform: scale(1.75);
}

.ad .heading {
  background-image: linear-gradient(120deg, #b047ff 16%, var(--vp-c-brand), var(--vp-c-brand));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.ad .extra-info {
  color: var(--vp-c-text-1);
  opacity: 0;
  font-size: 0.7rem;
  padding-left: 0.1rem;
  transition: opacity 0.5s;
}

.ad:hover .extra-info {
  opacity: 0.9;
}
</style>
