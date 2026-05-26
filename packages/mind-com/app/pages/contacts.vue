<script setup lang="ts">
const { t } = useI18n({ useScope: "global" })
const localePath = useLocalePath()
const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl

useHead({
  title: () => t("contacts.metaTitle"),
  meta: [{ name: "description", content: () => t("contacts.metaDescription") }],
  link: [{ rel: "canonical", href: `${siteUrl}/contacts` }],
})

const services = computed(() => [
  t("contacts.services.partnership"),
  t("contacts.services.investment"),
  t("contacts.services.enterprise"),
  t("contacts.services.media"),
  t("contacts.services.legal"),
  t("contacts.services.security"),
  t("contacts.services.businessDev"),
  t("contacts.services.general"),
])
</script>

<template>
  <div class="content">
    <h1>{{ t("contacts.h1") }}</h1>
    <p class="lede">
      {{ t("contacts.lede") }}
    </p>

    <ContactForm
      :services="services"
      :category-label="t('contacts.categoryLabel')"
      :category-placeholder="t('contacts.categoryPlaceholder')"
      :message-label="t('contacts.messageLabel')"
      :message-placeholder="t('contacts.messagePlaceholder')"
      :button-text="t('contacts.buttonText')"
    />

    <blockquote>
      <p>
        <strong>{{ t("contacts.helpBlockStrong") }}</strong>
        <i18n-t keypath="contacts.helpBlock" tag="span">
          <template #link
            ><NuxtLink :to="localePath('/help')">{{ t("contacts.helpLink") }}</NuxtLink></template
          >
        </i18n-t>
      </p>
      <p>
        <strong>{{ t("contacts.learnBlockStrong") }}</strong>
        <i18n-t keypath="contacts.learnBlock" tag="span">
          <template #about
            ><NuxtLink :to="localePath('/about')">{{ t("contacts.learnAboutLink") }}</NuxtLink></template
          >
          <template #team
            ><NuxtLink :to="localePath('/team')">{{ t("contacts.learnTeamLink") }}</NuxtLink></template
          >
          <template #careers
            ><NuxtLink :to="localePath('/careers')">{{ t("contacts.learnCareersLink") }}</NuxtLink></template
          >
        </i18n-t>
      </p>
    </blockquote>
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
  color: #555;
  margin-bottom: 2rem;
}
blockquote {
  border-left: 3px solid #ececea;
  padding-left: 1rem;
  margin: 2rem 0;
  color: #555;
}
blockquote a {
  color: inherit;
  text-decoration: underline;
  text-decoration-color: #c7c7c2;
  text-underline-offset: 2px;
}
</style>
