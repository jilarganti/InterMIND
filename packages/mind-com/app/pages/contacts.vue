<script setup lang="ts">
const { t } = useI18n({ useScope: "global" })
const localePath = useLocalePath()

usePageSeo({
  title: () => t("contacts.metaTitle"),
  description: () => t("contacts.metaDescription"),
  path: "/contacts",
})

const services = computed(() => [
  t("contacts.services.partnership"),
  t("contacts.services.investment"),
  t("contacts.services.enterprise"),
  t("contacts.services.media"),
  t("contacts.services.legal"),
  t("contacts.services.security"),
  t("contacts.services.general"),
])

// Verifiable company facts in place of a scrapeable email/phone — language-neutral
// except the role line, which reuses the About page's translated strings.
const entities = [
  { name: "MindMeeting OÜ", roleKey: "about.entityEuRole", jurisdiction: "Estonia · Reg. 16207677 · VAT EE102465446" },
  { name: "Golden Fish Corporate Services Provider LLC", roleKey: "about.entityUaeRole", jurisdiction: "UAE · Reg. 2411728 · License 1414192" },
]
const address = "City Avenue Building, Office 405-070, Port Saeed, Dubai, UAE"
</script>

<template>
  <div class="content">
    <h1>{{ t("contacts.h1") }}</h1>
    <p class="lede text-gray-600 dark:text-gray-400">
      {{ t("contacts.lede") }}
    </p>

    <div class="cta">
      <UModal :title="t('contacts.h1')" :ui="{ content: 'sm:max-w-xl' }">
        <UButton color="neutral" size="xl">{{ t("home.vcard.letsTalk") }}</UButton>
        <template #body>
          <ContactForm
            variant="plain"
            :services="services"
            :category-label="t('contacts.categoryLabel')"
            :category-placeholder="t('contacts.categoryPlaceholder')"
            :message-label="t('contacts.messageLabel')"
            :message-placeholder="t('contacts.messagePlaceholder')"
            :button-text="t('contacts.buttonText')"
          />
        </template>
      </UModal>
    </div>

    <blockquote class="text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-700">
      <p>
        <strong>{{ t("contacts.helpBlockStrong") }}</strong>
        <i18n-t scope="global" keypath="contacts.helpBlock" tag="span">
          <template #link
            ><NuxtLink :to="localePath('/help')">{{ t("contacts.helpLink") }}</NuxtLink></template
          >
        </i18n-t>
      </p>
      <p>
        <strong>{{ t("contacts.learnBlockStrong") }}</strong>
        <i18n-t scope="global" keypath="contacts.learnBlock" tag="span">
          <template #about
            ><NuxtLink :to="localePath('/about')">{{ t("contacts.learnAboutLink") }}</NuxtLink></template
          >
          <template #careers
            ><NuxtLink :to="localePath('/careers')">{{ t("contacts.learnCareersLink") }}</NuxtLink></template
          >
        </i18n-t>
      </p>
    </blockquote>

    <section class="details border-t border-gray-200 dark:border-gray-700">
      <h2 class="text-gray-900 dark:text-white">{{ t("contacts.detailsTitle") }}</h2>
      <dl>
        <div v-for="e in entities" :key="e.name" class="entity">
          <dt class="font-semibold text-gray-900 dark:text-white">{{ e.name }}</dt>
          <dd class="text-gray-600 dark:text-gray-400">{{ t(e.roleKey) }}</dd>
          <dd class="text-sm text-gray-500 dark:text-gray-500">{{ e.jurisdiction }}</dd>
        </div>
      </dl>
      <p class="text-sm text-gray-500 dark:text-gray-500">{{ address }}</p>
    </section>
  </div>
</template>

<style scoped>
.content {
  max-width: 760px;
  margin: 0 auto;
  padding: 2rem;
}
h1 {
  font-size: clamp(1.6rem, 3.5vw, 2.2rem);
  margin: 1rem 0 1rem;
}
.lede {
  margin-bottom: 2rem;
}
.cta {
  margin: 0 0 2.75rem;
}
blockquote {
  border-left-width: 3px;
  border-left-style: solid;
  padding-left: 1rem;
  margin: 2rem 0;
}
blockquote a {
  color: inherit;
  text-decoration: underline;
  text-decoration-color: #c7c7c2;
  text-underline-offset: 2px;
}
.details {
  margin-top: 2.5rem;
  padding-top: 1.5rem;
}
.details h2 {
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  margin: 0 0 1.25rem;
}
.details dl {
  display: grid;
  gap: 1.25rem;
  margin: 0 0 1.25rem;
}
.entity dd {
  margin: 0.15rem 0 0;
}
</style>
