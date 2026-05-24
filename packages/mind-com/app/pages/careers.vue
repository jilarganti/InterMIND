<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl

useHead({
  title: () => t("careers.metaTitle"),
  meta: [{ name: "description", content: () => t("careers.metaDescription") }],
  link: [{ rel: "canonical", href: `${siteUrl}/careers` }],
})

const services = computed(() => [
  t("careers.services.leader"),
  t("careers.services.marketer"),
  t("careers.services.engineer"),
  t("careers.services.researcher"),
  t("careers.services.seller"),
  t("careers.services.designer"),
  t("careers.services.operator"),
  t("careers.services.specialist"),
])
</script>

<template>
  <div class="content">
    <h1>{{ t("careers.h1") }}</h1>

    <p>{{ t("careers.intro1") }}</p>
    <p>{{ t("careers.intro2") }}</p>

    <figure class="hero-image">
      <img src="/resources/iStock-1492917260.jpg" :alt="t('careers.heroAlt1')" />
    </figure>

    <h2>{{ t("careers.resultsTitle") }}</h2>
    <p>{{ t("careers.resultsBody1") }}</p>
    <p v-html="t('careers.resultsBody2')" />

    <h3>{{ t("careers.trackTitle") }}</h3>
    <p>{{ t("careers.trackLead") }}</p>
    <ul>
      <li v-html="t('careers.trackBuilt')" />
      <li v-html="t('careers.trackMeasure')" />
      <li v-html="t('careers.trackGlobal')" />
      <li v-html="t('careers.trackHard')" />
    </ul>

    <h2>{{ t("careers.buildingTitle") }}</h2>
    <p>{{ t("careers.buildingBody1") }}</p>
    <p>{{ t("careers.buildingBody2") }}</p>

    <h2>{{ t("careers.lookingTitle") }}</h2>

    <h3>{{ t("careers.engineersTitle") }}</h3>
    <ul>
      <li>{{ t("careers.engineers1") }}</li>
      <li>{{ t("careers.engineers2") }}</li>
      <li>{{ t("careers.engineers3") }}</li>
      <li>{{ t("careers.engineers4") }}</li>
    </ul>

    <h3>{{ t("careers.researchersTitle") }}</h3>
    <ul>
      <li>{{ t("careers.researchers1") }}</li>
      <li>{{ t("careers.researchers2") }}</li>
      <li>{{ t("careers.researchers3") }}</li>
      <li>{{ t("careers.researchers4") }}</li>
    </ul>

    <h3>{{ t("careers.designersTitle") }}</h3>
    <ul>
      <li>{{ t("careers.designers1") }}</li>
      <li>{{ t("careers.designers2") }}</li>
      <li>{{ t("careers.designers3") }}</li>
      <li>{{ t("careers.designers4") }}</li>
    </ul>

    <h3>{{ t("careers.leadersTitle") }}</h3>
    <ul>
      <li>{{ t("careers.leaders1") }}</li>
      <li>{{ t("careers.leaders2") }}</li>
      <li>{{ t("careers.leaders3") }}</li>
      <li>{{ t("careers.leaders4") }}</li>
    </ul>

    <h2>{{ t("careers.evaluateTitle") }}</h2>
    <p v-html="t('careers.evalPortfolio')" />
    <p v-html="t('careers.evalProjects')" />
    <p v-html="t('careers.evalImpact')" />
    <p v-html="t('careers.evalLearning')" />

    <h2>{{ t("careers.processTitle") }}</h2>
    <ol>
      <li v-html="t('careers.process1')" />
      <li v-html="t('careers.process2')" />
      <li v-html="t('careers.process3')" />
      <li v-html="t('careers.process4')" />
    </ol>

    <h2>{{ t("careers.offerTitle") }}</h2>

    <figure class="hero-image">
      <img src="/resources/iStock-2227445862.jpg" :alt="t('careers.heroAlt2')" />
    </figure>

    <p v-html="t('careers.offerChallenges')" />
    <p v-html="t('careers.offerTeam')" />
    <p v-html="t('careers.offerResources')" />
    <p v-html="t('careers.offerImpact')" />

    <i18n-t keypath="careers.meetParagraph" tag="p">
      <template #team><NuxtLink :to="localePath('/team')">{{ t("careers.meetTeamLink") }}</NuxtLink></template>
      <template #about><NuxtLink :to="localePath('/about')">{{ t("careers.meetAboutLink") }}</NuxtLink></template>
    </i18n-t>

    <h2>{{ t("careers.joinTitle") }}</h2>
    <p>{{ t("careers.joinBody") }}</p>

    <ContactForm
      :services="services"
      :category-label="t('careers.categoryLabel')"
      :category-placeholder="t('careers.categoryPlaceholder')"
      :message-label="t('careers.messageLabel')"
      :message-placeholder="t('careers.messagePlaceholder')"
      :button-text="t('careers.buttonText')"
      :web-site-label="t('careers.webSiteLabel')"
      :web-site-placeholder="t('careers.webSitePlaceholder')"
    />

    <hr />
    <p class="tagline"><em>{{ t("careers.tagline") }}</em></p>
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
}
h2 {
  font-size: 1.4rem;
  margin: 2.5rem 0 1rem;
  font-weight: 600;
}
h3 {
  font-size: 1.1rem;
  margin: 2rem 0 0.75rem;
  font-weight: 600;
}
p {
  margin: 0 0 1rem;
}
ul,
ol {
  padding-left: 1.25rem;
  margin: 0 0 1.5rem;
}
li {
  margin-bottom: 0.5rem;
}
.hero-image {
  margin: 1.5rem 0;
}
.hero-image img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}
a {
  color: #dd9144;
}
hr {
  border: 0;
  border-top: 1px solid #ececea;
  margin: 3rem 0 1.5rem;
}
.tagline {
  text-align: center;
  color: #666;
}
</style>
