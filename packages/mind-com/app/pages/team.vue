<script setup lang="ts">
const { t } = useI18n({ useScope: "global" })
const localePath = useLocalePath()
const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl

useHead({
  title: () => t("team.metaTitle"),
  meta: [{ name: "description", content: () => t("team.metaDescription") }],
  link: [{ rel: "canonical", href: `${siteUrl}/team` }],
})

const humans = computed(() => [
  {
    name: t("team.humanName"),
    desc: t("team.humans.mindDesc"),
    avatarLink: "/logo.svg",
    links: [
      { icon: "mdi:twitter", link: "https://x.com/imindcom" },
      { icon: "mdi:linkedin", link: "https://www.linkedin.com/company/mind" },
    ],
  },
  {
    name: "Windicted",
    country: t("team.countries.portugal"),
    avatarLink: "https://secure.gravatar.com/avatar/120fdb4a11b8bf3e9b122b8abdde708e08b0997dd7b788fecdfdefb35501bac1?s=1600&d=identicon",
    links: [{ icon: "mdi:gitlab", link: "https://gitlab.com/alexander.strikhalev" }],
  },
  {
    name: "Jilarganti",
    desc: t("team.humans.jilargantiDesc"),
    country: t("team.countries.uae"),
    avatarLink: "https://github.com/jilarganti.png",
    links: [
      { icon: "mdi:github", link: "https://github.com/jilarganti" },
      { icon: "mdi:linkedin", link: "https://www.linkedin.com/in/aleksey-korolev" },
    ],
  },
])

const ai = computed(() => [
  { name: "Claude", desc: t("team.ai.claudeDesc"), country: t("team.countries.usa"), links: [{ link: "https://claude.ai/", label: "claude.ai" }] },
  {
    name: "Gemini",
    desc: t("team.ai.geminiDesc"),
    country: t("team.countries.usa"),
    links: [{ link: "https://gemini.google.com/", label: "gemini.google.com" }],
  },
  { name: "ChatGPT", desc: t("team.ai.chatgptDesc"), country: t("team.countries.usa"), links: [{ link: "https://chatgpt.com/", label: "chatgpt.com" }] },
  {
    name: "DeepSeek",
    desc: t("team.ai.deepseekDesc"),
    country: t("team.countries.china"),
    links: [{ link: "https://chat.deepseek.com/", label: "chat.deepseek.com" }],
  },
])
</script>

<template>
  <div class="content">
    <h1>{{ t("team.h1") }}</h1>
    <i18n-t keypath="team.ledeParagraph" tag="p" class="lede">
      <template #link
        ><NuxtLink :to="localePath('/about')">{{ t("team.ledeAboutLink") }}</NuxtLink></template
      >
    </i18n-t>

    <h2>{{ t("team.humanTeamTitle") }}</h2>
    <TeamMembersGrid :members="humans" />

    <h2>{{ t("team.aiTeamTitle") }}</h2>
    <p class="note">{{ t("team.aiTeamNote") }}</p>
    <TeamMembersGrid :members="ai" />

    <i18n-t keypath="team.ctaParagraph" tag="p">
      <template #strong
        ><strong>{{ t("team.ctaStrong") }}</strong></template
      >
      <template #link
        ><NuxtLink :to="localePath('/careers')">{{ t("team.ctaCareersLink") }}</NuxtLink></template
      >
    </i18n-t>
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
  margin: 1rem 0 1rem;
}
h2 {
  font-size: 1.4rem;
  margin: 2.5rem 0 1rem;
  font-weight: 600;
}
.lede {
  color: #555;
  margin: 0 0 1rem;
}
.note {
  font-size: 0.9rem;
  color: #777;
  margin: 0 0 1rem;
}
a {
  color: inherit;
  text-decoration: underline;
  text-decoration-color: #c7c7c2;
  text-underline-offset: 2px;
}
</style>
