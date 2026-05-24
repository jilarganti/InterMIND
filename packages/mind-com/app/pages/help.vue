<script setup lang="ts">
const { t } = useI18n()
const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl

useHead({
  title: () => t("help.metaTitle"),
  meta: [{ name: "description", content: () => t("help.metaDescription") }],
  link: [{ rel: "canonical", href: `${siteUrl}/help` }],
})

const services = computed(() => [
  t("help.services.gettingStarted"),
  t("help.services.scheduleDemo"),
  t("help.services.technicalIssue"),
  t("help.services.integration"),
  t("help.services.translationQuality"),
  t("help.services.teamOnboarding"),
  t("help.services.billing"),
  t("help.services.enterpriseFeatures"),
  t("help.services.apiAccess"),
  t("help.services.general"),
])
</script>

<template>
  <div class="content">
    <h1>{{ t("help.h1") }}</h1>
    <p class="lede">
      {{ t("help.ledeLine1") }}<br />
      {{ t("help.ledeLine2") }}
    </p>

    <ContactForm
      :services="services"
      :category-label="t('help.categoryLabel')"
      :category-placeholder="t('help.categoryPlaceholder')"
      :message-label="t('help.messageLabel')"
      :message-placeholder="t('help.messagePlaceholder')"
      :button-text="t('help.buttonText')"
    />

    <blockquote>
      <p><em>{{ t("help.responseTime") }}</em></p>
      <p><em>{{ t("help.humanReview") }}</em></p>
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
  color: #666;
}
blockquote p {
  margin: 0.25rem 0;
}
</style>
