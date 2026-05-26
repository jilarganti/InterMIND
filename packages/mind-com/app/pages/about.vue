<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl
const productUrl = config.public.productUrl
const productUrlBare = productUrl.replace(/^https?:\/\//, "")

useHead({
  title: () => t("about.metaTitle"),
  meta: [{ name: "description", content: () => t("about.metaDescription") }],
  link: [{ rel: "canonical", href: `${siteUrl}/about` }],
})
</script>

<template>
  <div class="content prose">
    <h1>{{ t("about.h1") }}</h1>

    <h2>{{ t("about.whoTitle") }}</h2>
    <p v-html="t('about.whoBody')" />

    <h2>{{ t("about.missionTitle") }}</h2>
    <p v-html="t('about.missionLead')" />
    <p>{{ t("about.missionBody1") }}</p>
    <p>{{ t("about.missionBody2") }}</p>

    <h2>{{ t("about.productTitle") }}</h2>
    <p v-html="t('about.productLead')" />
    <p v-html="t('about.productBody1')" />
    <p v-html="t('about.productBody2')" />
    <blockquote>{{ t("about.productQuote") }}</blockquote>
    <i18n-t keypath="about.tryPlatform" tag="p">
      <template #link>
        <a :href="productUrl">{{ productUrlBare }}</a>
      </template>
    </i18n-t>

    <h2>{{ t("about.techTitle") }}</h2>
    <p v-html="t('about.techBody1')" />
    <p v-html="t('about.techBody2')" />
    <p v-html="t('about.techBody3')" />
    <p v-html="t('about.techBody4')" />

    <h2>{{ t("about.philosophyTitle") }}</h2>
    <p>{{ t("about.philosophyBody1") }}</p>
    <p>{{ t("about.philosophyBody2") }}</p>
    <p>{{ t("about.philosophyBody3") }}</p>
    <blockquote v-html="t('about.philosophyQuote')" />
    <p>{{ t("about.philosophyClose") }}</p>
    <p>
      <em>{{ t("about.signoff") }}</em>
    </p>

    <p>
      <strong>{{ t("about.ctaIntro") }}</strong>
      <i18n-t keypath="about.ctaParagraph" tag="span">
        <template #team
          ><NuxtLink :to="localePath('/team')">{{ t("about.ctaTeamLink") }}</NuxtLink></template
        >
        <template #careers
          ><NuxtLink :to="localePath('/careers')">{{ t("about.ctaCareersLink") }}</NuxtLink></template
        >
        <template #contacts
          ><NuxtLink :to="localePath('/contacts')">{{ t("about.ctaContactsLink") }}</NuxtLink></template
        >
      </i18n-t>
    </p>
  </div>
</template>

<style scoped>
.content {
  max-width: 760px;
  margin: 0 auto;
  padding: 2rem;
  line-height: 1.65;
}
h1 {
  font-size: clamp(1.9rem, 4vw, 2.6rem);
  margin: 1rem 0 1.5rem;
  letter-spacing: -0.01em;
}
h2 {
  font-size: 1.4rem;
  margin: 2.5rem 0 1rem;
  font-weight: 600;
}
p {
  margin: 0 0 1rem;
}
blockquote {
  border-left: 3px solid #d4d4d4;
  padding-left: 1rem;
  margin: 1.5rem 0;
  color: #444;
  font-style: italic;
}
a {
  color: inherit;
  text-decoration: underline;
  text-decoration-color: #c7c7c2;
  text-underline-offset: 2px;
}
</style>
