<script setup lang="ts">
const { t } = useI18n({ useScope: "global" })

usePageSeo({
  title: () => t("brand.metaTitle"),
  description: () => t("brand.metaDescription"),
  path: "/brand",
})

interface DownloadFormat {
  label: string
  href: string
}
interface BrandAsset {
  name: string
  descKey: string
  preview: string
  /** Preview needs a dark plate behind it (white/transparent marks). */
  previewDark?: boolean
  formats: DownloadFormat[]
}

// All files live in public/brand/. Keep names in sync with that directory.
const assets: BrandAsset[] = [
  {
    name: "brand.assets.markName",
    descKey: "brand.assets.markDesc",
    preview: "/brand/mind-mark-512.png",
    formats: [
      { label: "SVG", href: "/brand/mind-mark.svg" },
      { label: "PNG 512", href: "/brand/mind-mark-512.png" },
      { label: "PNG 1024", href: "/brand/mind-mark-1024.png" },
    ],
  },
  {
    name: "brand.assets.markWhiteName",
    descKey: "brand.assets.markWhiteDesc",
    preview: "/brand/mind-mark-white.svg",
    previewDark: true,
    formats: [{ label: "SVG", href: "/brand/mind-mark-white.svg" }],
  },
  {
    name: "brand.assets.avatarName",
    descKey: "brand.assets.avatarDesc",
    preview: "/brand/mind-avatar-512.png",
    formats: [{ label: "PNG 512", href: "/brand/mind-avatar-512.png" }],
  },
  {
    name: "brand.assets.appIconName",
    descKey: "brand.assets.appIconDesc",
    preview: "/brand/mind-app-icon-1024.png",
    formats: [
      { label: "SVG", href: "/brand/mind-app-icon.svg" },
      { label: "PNG 1024", href: "/brand/mind-app-icon-1024.png" },
    ],
  },
  {
    name: "brand.assets.faviconName",
    descKey: "brand.assets.faviconDesc",
    preview: "/brand/mind-mark-256.png",
    formats: [
      { label: "PNG 16", href: "/brand/mind-mark-16.png" },
      { label: "PNG 32", href: "/brand/mind-mark-32.png" },
      { label: "PNG 48", href: "/brand/mind-mark-48.png" },
      { label: "PNG 256", href: "/brand/favicon-256.png" },
    ],
  },
  {
    name: "brand.assets.socialName",
    descKey: "brand.assets.socialDesc",
    preview: "/brand/mind-social-header-1500x500.png",
    previewDark: true,
    formats: [
      { label: "SVG", href: "/brand/mind-social-header.svg" },
      { label: "PNG 1500×500", href: "/brand/mind-social-header-1500x500.png" },
    ],
  },
]

// Grey gradient stops, matching public/logo.svg and every generated mark.
const gradient = [
  { hex: "#A3A3A3", labelKey: "brand.color.top" },
  { hex: "#6B6B6B", labelKey: "brand.color.mid" },
  { hex: "#3A3A3A", labelKey: "brand.color.bottom" },
]
</script>

<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 w-full">
    <h1 class="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">{{ t("brand.h1") }}</h1>
    <p class="text-lg text-gray-600 dark:text-gray-400 mb-14 max-w-2xl">{{ t("brand.lede") }}</p>

    <!-- Asset grid -->
    <div class="grid gap-6 sm:grid-cols-2 mb-16">
      <div
        v-for="a in assets"
        :key="a.name"
        class="flex flex-col rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden bg-white dark:bg-[#0e0f12]"
      >
        <div
          class="flex items-center justify-center p-8 min-h-[180px]"
          :class="a.previewDark ? 'bg-[#0a0b0d]' : 'bg-gray-50 dark:bg-[#141518]'"
        >
          <img :src="a.preview" :alt="t(a.name)" class="max-h-32 max-w-full object-contain" loading="lazy" />
        </div>
        <div class="flex flex-1 flex-col p-5 border-t border-gray-200 dark:border-gray-800">
          <h2 class="font-semibold text-gray-900 dark:text-white">{{ t(a.name) }}</h2>
          <p class="text-sm text-gray-600 dark:text-gray-400 mt-1 mb-4 flex-1">{{ t(a.descKey) }}</p>
          <div class="flex flex-wrap gap-2">
            <a
              v-for="f in a.formats"
              :key="f.href"
              :href="f.href"
              :download="true"
              class="inline-flex items-center gap-1.5 rounded-full border border-gray-300 dark:border-gray-700 px-3 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:border-gray-500 dark:hover:border-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <svg class="w-3.5 h-3.5 shrink-0" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M8 2v8m0 0 3-3m-3 3L5 7M3 13h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              {{ f.label }}
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Color -->
    <h2 class="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">{{ t("brand.colorTitle") }}</h2>
    <div class="flex flex-wrap gap-3 mb-14">
      <div
        v-for="c in gradient"
        :key="c.hex"
        class="flex items-center gap-3 rounded-xl border border-gray-200 dark:border-gray-800 px-4 py-3"
      >
        <span class="w-8 h-8 rounded-md shrink-0 border border-black/10 dark:border-white/10" :style="{ backgroundColor: c.hex }" />
        <div class="leading-tight">
          <p class="text-sm font-medium text-gray-900 dark:text-white">{{ c.hex }}</p>
          <p class="text-xs text-gray-500 dark:text-gray-400">{{ t(c.labelKey) }}</p>
        </div>
      </div>
    </div>

    <!-- Usage guidance -->
    <h2 class="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">{{ t("brand.usageTitle") }}</h2>
    <ul class="space-y-2 text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800 pt-6">
      <li class="flex gap-2"><span aria-hidden="true">✓</span><span>{{ t("brand.usageDo1") }}</span></li>
      <li class="flex gap-2"><span aria-hidden="true">✓</span><span>{{ t("brand.usageDo2") }}</span></li>
      <li class="flex gap-2"><span aria-hidden="true" class="text-gray-400 dark:text-gray-600">✕</span><span>{{ t("brand.usageDont1") }}</span></li>
      <li class="flex gap-2"><span aria-hidden="true" class="text-gray-400 dark:text-gray-600">✕</span><span>{{ t("brand.usageDont2") }}</span></li>
    </ul>
  </div>
</template>
