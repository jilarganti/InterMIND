<script setup lang="ts">
interface TeamMemberLink {
  icon?: string
  link: string
  label?: string
}
interface TeamMember {
  name: string
  desc?: string
  country?: string
  avatarLink?: string
  /** Logo mark rather than a photo — render contained with padding so it doesn't cling to the circle edge. */
  avatarIsMark?: boolean
  links?: TeamMemberLink[]
}

const { t } = useI18n({ useScope: "global" })
const localePath = useLocalePath()

usePageSeo({
  title: () => t("team.metaTitle"),
  description: () => t("team.metaDescription"),
  path: "/team",
})

const humans = computed<TeamMember[]>(() => [
  {
    name: t("team.humanName"),
    desc: t("team.humans.mindDesc"),
    avatarLink: "/brand/mind-mark-padded.svg",
    avatarIsMark: true,
    links: [
      { icon: "mdi:twitter", link: "https://x.com/intermindcom" },
      { icon: "mdi:linkedin", link: "https://www.linkedin.com/company/mind" },
    ],
  },
  {
    name: "Windicted",
    desc: t("team.humans.windictedDesc"),
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

const careersServices = computed(() => [t("careers.services.partnerships")])

const ai = computed<TeamMember[]>(() => [
  { name: "Claude", desc: t("team.ai.claudeDesc"), links: [{ link: "https://claude.ai/", label: "claude.ai" }] },
  { name: "Gemini", desc: t("team.ai.geminiDesc"), links: [{ link: "https://gemini.google.com/", label: "gemini.google.com" }] },
  { name: "Mistral", desc: t("team.ai.mistralDesc"), links: [{ link: "https://chat.mistral.ai/", label: "chat.mistral.ai" }] },
])

function iconLabel(icon?: string): string {
  const fallback = t("teamMembers.defaultLinkLabel")
  if (!icon) return fallback
  const map: Record<string, string> = {
    "mdi:twitter": "𝕏",
    "mdi:linkedin": "LinkedIn",
    "mdi:github": "GitHub",
    "mdi:gitlab": "GitLab",
  }
  return map[icon] ?? fallback
}

function renderMarkdownBold(s: string): string {
  return s.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
}
</script>

<template>
  <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 w-full">
    <h1 class="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">{{ t("team.h1") }}</h1>
    <i18n-t scope="global" keypath="team.ledeParagraph" tag="p" class="text-lg text-gray-600 dark:text-gray-400 mb-14">
      <template #link>
        <NuxtLink :to="localePath('/about')" class="underline underline-offset-2 decoration-gray-400 hover:decoration-current">{{
          t("team.ledeAboutLink")
        }}</NuxtLink>
      </template>
    </i18n-t>

    <h2 class="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1">{{ t("team.humanTeamTitle") }}</h2>
    <ul class="divide-y divide-gray-200 dark:divide-gray-800 border-b border-gray-200 dark:border-gray-800 mb-14">
      <li v-for="m in humans" :key="m.name" class="flex flex-wrap items-center gap-x-4 gap-y-2 py-5">
        <span class="w-12 h-12 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center shrink-0">
          <img v-if="m.avatarLink" :src="m.avatarLink" :alt="m.name" :class="m.avatarIsMark ? 'w-3/4 h-3/4 object-contain' : 'w-full h-full object-cover'" />
          <span v-else class="text-xl font-semibold text-gray-400 dark:text-gray-500">{{ m.name.charAt(0) }}</span>
        </span>
        <div class="flex-1 min-w-0">
          <p class="font-semibold text-gray-900 dark:text-white">
            <span v-html="renderMarkdownBold(m.name)" />
            <span v-if="m.country" class="font-normal text-sm text-gray-500 dark:text-gray-400"> · {{ m.country }}</span>
          </p>
          <p v-if="m.desc" class="text-sm text-gray-600 dark:text-gray-400 mt-0.5" v-html="renderMarkdownBold(m.desc)" />
        </div>
        <div v-if="m.links?.length" class="flex gap-4 shrink-0">
          <a
            v-for="l in m.links"
            :key="l.link"
            :href="l.link"
            target="_blank"
            rel="noopener"
            class="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            {{ l.label ?? iconLabel(l.icon) }}
          </a>
        </div>
      </li>
    </ul>

    <h2 class="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">{{ t("team.aiTeamTitle") }}</h2>
    <p class="text-sm text-gray-500 dark:text-gray-400 mb-6">{{ t("team.aiTeamNote") }}</p>
    <div class="flex flex-wrap gap-3 mb-14">
      <a
        v-for="m in ai"
        :key="m.name"
        :href="m.links?.[0]?.link"
        target="_blank"
        rel="noopener"
        class="inline-flex items-baseline gap-2 rounded-full border border-gray-200 dark:border-gray-700 px-4 py-2 hover:border-gray-400 dark:hover:border-gray-500 transition-colors"
      >
        <span class="font-semibold text-gray-900 dark:text-white">{{ m.name }}</span>
        <span class="text-sm text-gray-500 dark:text-gray-400">{{ m.desc }}</span>
      </a>
    </div>

    <div class="border-t border-gray-200 dark:border-gray-800 pt-8">
      <i18n-t scope="global" keypath="team.ctaParagraph" tag="p" class="text-gray-600 dark:text-gray-400">
        <template #strong>
          <strong class="text-gray-900 dark:text-white">{{ t("team.ctaStrong") }}</strong>
        </template>
        <template #link>
          <NuxtLink :to="localePath('/careers')" class="underline underline-offset-2 decoration-gray-400 hover:decoration-current">{{
            t("team.ctaCareersLink")
          }}</NuxtLink>
        </template>
      </i18n-t>
      <ContactForm
        :services="careersServices"
        :message-label="t('careers.messageLabel')"
        :message-placeholder="t('careers.messagePlaceholder')"
        :button-text="t('careers.buttonText')"
        :web-site-label="t('careers.webSiteLabel')"
        :web-site-placeholder="t('careers.webSitePlaceholder')"
      />
    </div>
  </div>
</template>
