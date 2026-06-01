<script setup lang="ts">
const { t } = useI18n({ useScope: "global" })
const localePath = useLocalePath()
const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl

useHead({
  title: () => t("brandAssets.metaTitle"),
  meta: [{ name: "description", content: () => t("brandAssets.metaDescription") }],
  link: [{ rel: "canonical", href: `${siteUrl}${localePath("/brand-assets")}` }],
})

const interpretationImages = computed(() => [
  { src: "/media-kit/animals-cartoon-3-2.webp", alt: t("brandAssets.interpretationAlt") },
  { src: "/media-kit/animals-cartoon-1-1.webp", alt: t("brandAssets.interpretationAlt") },
  { src: "/media-kit/5.webp", alt: t("brandAssets.interpretationAlt") },
  { src: "/media-kit/6.webp", alt: t("brandAssets.interpretationAlt") },
  { src: "/media-kit/animals-5-4.webp", alt: t("brandAssets.interpretationAlt") },
])
const searchImages = computed(() => [
  { src: "/2d.webp", alt: t("brandAssets.searchAlt") },
  { src: "/2l.webp", alt: t("brandAssets.searchAlt") },
])
</script>

<template>
  <div class="content">
    <h1>{{ t("brandAssets.h1") }}</h1>
    <p>{{ t("brandAssets.intro") }}</p>

    <h2>{{ t("brandAssets.metadataTitle") }}</h2>

    <h3>{{ t("brandAssets.titleHeading") }}</h3>
    <ul>
      <li>{{ t("brandAssets.title1") }}</li>
      <li v-html="t('brandAssets.title2')" />
    </ul>

    <h3>{{ t("brandAssets.descriptionHeading") }}</h3>
    <ul>
      <li v-html="t('brandAssets.description1')" />
      <li>{{ t("brandAssets.description2") }}</li>
    </ul>

    <h2>{{ t("brandAssets.logoHeading") }}</h2>
    <div class="logo-row">
      <img src="/logo.webp" :alt="t('brandAssets.logoAlt')" width="300" class="transparency-grid" />
      <img src="/logo.svg" :alt="t('brandAssets.logoAlt')" width="100" class="transparency-grid" />
    </div>

    <h2>{{ t("brandAssets.colorsHeading") }}</h2>
    <pre><code>-webkit-linear-gradient(90deg, #994a11 0%, #cc833c 50%, #ffbb66 100%)</code></pre>

    <h2>{{ t("brandAssets.promotionalHeading") }}</h2>

    <h3>{{ t("brandAssets.interpretationHeading") }}</h3>
    <ImageGrid :images="interpretationImages" />

    <h3>{{ t("brandAssets.searchHeading") }}</h3>
    <ImageGrid :images="searchImages" />
  </div>
</template>

<style scoped>
.content {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
  line-height: 1.6;
}
h1 {
  font-size: clamp(1.8rem, 4vw, 2.4rem);
  margin: 1rem 0 1.5rem;
}
h2 {
  font-size: 1.3rem;
  margin: 2rem 0 1rem;
  font-weight: 600;
}
h3 {
  font-size: 1.05rem;
  margin: 1.5rem 0 0.75rem;
  font-weight: 600;
}
ul {
  padding-left: 1.25rem;
}
.logo-row {
  display: flex;
  gap: 1.5rem;
  align-items: center;
  flex-wrap: wrap;
  padding: 1rem 0;
}
.transparency-grid {
  background-color: #ffffff;
  background-image:
    linear-gradient(45deg, #eeeeee 25%, transparent 25%, transparent 75%, #eeeeee 75%),
    linear-gradient(45deg, #eeeeee 25%, transparent 25%, transparent 75%, #eeeeee 75%);
  background-size: 12px 12px;
  background-position:
    0 0,
    6px 6px;
  border-radius: 6px;
}
pre {
  background: #1c1c1c;
  color: #f5f5f5;
  padding: 1rem;
  border-radius: 8px;
  overflow-x: auto;
  font-size: 0.85rem;
}
</style>
