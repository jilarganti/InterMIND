<script setup lang="ts">
const { t } = useI18n({ useScope: "global" })

usePageSeo({
  title: () => t("careers.metaTitle"),
  description: () => t("careers.metaDescription"),
  path: "/careers",
})

const services = computed(() => [t("careers.services.partnerships")])
</script>

<template>
  <div class="content">
    <h1>{{ t("careers.h1") }}</h1>

    <p class="lead text-gray-900 dark:text-gray-100">{{ t("careers.lead") }}</p>

    <p class="text-gray-700 dark:text-gray-300">{{ t("careers.invite") }}</p>

    <h2 class="text-gray-900 dark:text-white">{{ t("careers.formTitle") }}</h2>

    <ContactForm
      :services="services"
      :message-label="t('careers.messageLabel')"
      :message-placeholder="t('careers.messagePlaceholder')"
      :button-text="t('careers.buttonText')"
      :web-site-label="t('careers.webSiteLabel')"
      :web-site-placeholder="t('careers.webSitePlaceholder')"
    />
  </div>
</template>

<style scoped>
.content {
  max-width: 640px;
  margin: 0 auto;
  padding: 2rem 1.5rem 4rem;
  line-height: 1.65;
}
h1 {
  font-size: clamp(1.8rem, 4vw, 2.4rem);
  margin: 1rem 0 1.5rem;
  letter-spacing: -0.01em;
  font-weight: 600;
}
h2 {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 2.5rem 0 0.75rem;
}
p {
  margin: 0 0 1rem;
}
.lead {
  font-size: 1.1rem;
}
</style>
