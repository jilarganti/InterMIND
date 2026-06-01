<script setup lang="ts">
const { t } = useI18n({ useScope: "global" })
const localePath = useLocalePath()
const config = useRuntimeConfig()
const productUrl = config.public.productUrl
const productUrlBare = productUrl.replace(/^https?:\/\//, "")

usePageSeo({
  title: () => t("about.metaTitle"),
  description: () => t("about.metaDescription"),
  path: "/about",
})

// Language-neutral facts; only the role line is localized.
const entities = [
  { name: "MindMeeting OÜ", roleKey: "about.entityEuRole", jurisdiction: "Estonia · Reg. 16207677 · VAT EE102465446" },
  { name: "Golden Fish Corporate Services Provider LLC", roleKey: "about.entityUaeRole", jurisdiction: "UAE · Reg. 2411728 · License 1414192" },
]
</script>

<template>
  <div class="content prose">
    <h1>{{ t("about.h1") }}</h1>
    <p class="lede text-gray-600 dark:text-gray-400">{{ t("about.lede") }}</p>

    <h2>{{ t("about.whoTitle") }}</h2>
    <p v-html="t('about.whoBody')" />

    <h2>{{ t("about.buildTitle") }}</h2>
    <p>{{ t("about.buildBody1") }}</p>
    <i18n-t scope="global" keypath="about.buildBody2" tag="p">
      <template #link>
        <a :href="productUrl">{{ productUrlBare }}</a>
      </template>
    </i18n-t>

    <h2>{{ t("about.structureTitle") }}</h2>
    <p>{{ t("about.structureLead") }}</p>
    <dl class="entities">
      <div v-for="e in entities" :key="e.name" class="entity">
        <dt class="font-semibold text-gray-900 dark:text-white">{{ e.name }}</dt>
        <dd>{{ t(e.roleKey) }}</dd>
        <dd class="text-sm text-gray-500 dark:text-gray-400">{{ e.jurisdiction }}</dd>
      </div>
    </dl>

    <h2>{{ t("about.approachTitle") }}</h2>
    <ul>
      <li v-html="t('about.approach1')" />
      <li v-html="t('about.approach2')" />
      <li v-html="t('about.approach3')" />
    </ul>

    <p>
      <strong>{{ t("about.ctaIntro") }}</strong>{{ " " }}
      <i18n-t scope="global" keypath="about.ctaParagraph" tag="span">
        <template #careers
          ><NuxtLink :to="localePath('/careers')">{{ t("about.ctaCareersLink") }}</NuxtLink></template
        >
        <template #contacts
          ><NuxtLink :to="localePath('/contacts')">{{ t("about.ctaContactsLink") }}</NuxtLink></template
        >
      </i18n-t>
    </p>
    <p>
      <em>{{ t("about.signoff") }}</em>
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
  margin: 1rem 0 1rem;
  letter-spacing: -0.01em;
}
.lede {
  font-size: 1.15rem;
  margin: 0 0 2rem;
}
h2 {
  font-size: 1.4rem;
  margin: 2.5rem 0 1rem;
  font-weight: 600;
}
.entities {
  display: grid;
  gap: 1.25rem;
  margin: 1.5rem 0;
}
.entity dd {
  margin: 0.15rem 0 0;
}
</style>
