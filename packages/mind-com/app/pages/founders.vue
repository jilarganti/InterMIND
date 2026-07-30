<script setup lang="ts">
interface FounderLink {
  label: string
  link: string
}
interface Founder {
  name: string
  desc: string
  country: string
  avatarLink?: string
  links: FounderLink[]
}

const { t } = useI18n({ useScope: "global" })
const localePath = useLocalePath()

usePageSeo({
  title: () => t("founders.metaTitle"),
  description: () => t("founders.metaDescription"),
  path: "/founders",
})

const founders = computed<Founder[]>(() => [
  {
    name: "Aleksey Korolev",
    desc: t("founders.descAleksey"),
    country: t("founders.country"),
    avatarLink: "https://github.com/jilarganti.png",
    links: [{ label: "LinkedIn", link: "https://www.linkedin.com/in/aleksey-korolev" }],
  },
  {
    name: "Nataliya Agafonova",
    desc: t("founders.descNataliya"),
    country: t("founders.country"),
    avatarLink: "/founders/nataliya.jpg",
    links: [{ label: "LinkedIn", link: "https://www.linkedin.com/in/nataliya-agafonova" }],
  },
])
</script>

<template>
  <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 w-full">
    <h1 class="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">{{ t("founders.h1") }}</h1>
    <p class="text-lg text-gray-600 dark:text-gray-400 mb-14">{{ t("founders.lede") }}</p>

    <ul class="divide-y divide-gray-200 dark:divide-gray-800 border-b border-gray-200 dark:border-gray-800 mb-14">
      <li v-for="f in founders" :key="f.name" class="flex flex-wrap items-center gap-x-4 gap-y-2 py-5">
        <span class="w-12 h-12 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center shrink-0">
          <img v-if="f.avatarLink" :src="f.avatarLink" :alt="f.name" class="w-full h-full object-cover" />
          <span v-else class="text-xl font-semibold text-gray-400 dark:text-gray-500">{{ f.name.charAt(0) }}</span>
        </span>
        <div class="flex-1 min-w-0">
          <p class="font-semibold text-gray-900 dark:text-white">
            {{ f.name }}
            <span class="font-normal text-sm text-gray-500 dark:text-gray-400"> · {{ f.country }}</span>
          </p>
          <p class="text-sm text-gray-600 dark:text-gray-400 mt-0.5">{{ f.desc }}</p>
        </div>
        <div class="flex gap-4 shrink-0">
          <a
            v-for="l in f.links"
            :key="l.link"
            :href="l.link"
            target="_blank"
            rel="noopener"
            class="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            {{ l.label }}
          </a>
        </div>
      </li>
    </ul>

    <i18n-t scope="global" keypath="founders.structureNote" tag="p" class="text-gray-600 dark:text-gray-400">
      <template #link>
        <NuxtLink :to="localePath('/about')" class="underline underline-offset-2 decoration-gray-400 hover:decoration-current">{{
          t("founders.aboutLink")
        }}</NuxtLink>
      </template>
    </i18n-t>
  </div>
</template>
