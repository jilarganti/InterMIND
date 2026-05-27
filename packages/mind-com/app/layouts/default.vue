<script setup lang="ts">
const { t } = useI18n({ useScope: "global" })
const config = useRuntimeConfig()
const productUrl = config.public.productUrl
const signInUrl = config.public.signInUrl
const localePath = useLocalePath()

// Cycles: light → system → dark → light. Matches the product (intermind.com).
const colorMode = useColorMode()
const colorModeIcon = computed(() => {
  const pref = colorMode.preference
  if (pref === "dark") return "i-lucide-moon"
  if (pref === "light") return "i-lucide-sun"
  return "i-lucide-monitor"
})
function cycleColorMode() {
  const pref = colorMode.preference
  if (pref === "light") colorMode.preference = "system"
  else if (pref === "system") colorMode.preference = "dark"
  else colorMode.preference = "light"
}
</script>

<template>
  <div class="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
    <header class="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        <NuxtLink :to="localePath('/')" class="inline-flex items-center gap-2 font-semibold text-gray-900 dark:text-white" :aria-label="t('nav.brandLabel')">
          <img src="/logo.svg" alt="" class="w-7 h-7" width="28" height="28" />
          <span>Mind.com</span>
        </NuxtLink>

        <nav class="flex items-center gap-2">
          <UButton :to="localePath('/blog')" variant="ghost" color="neutral" size="md">
            {{ t("nav.blog") }}
          </UButton>
          <LanguageSwitcher />
          <ClientOnly>
            <UButton :icon="colorModeIcon" variant="ghost" color="neutral" size="md" :aria-label="t('nav.toggleTheme')" @click="cycleColorMode" />
            <template #fallback>
              <UButton icon="i-lucide-monitor" variant="ghost" color="neutral" size="md" disabled />
            </template>
          </ClientOnly>
          <UButton :to="signInUrl" external variant="ghost" color="neutral" size="md">
            {{ t("nav.signIn") }}
          </UButton>
        </nav>
      </div>
    </header>

    <main class="flex-1 w-full flex items-center">
      <slot />
    </main>

    <AppFooter />
  </div>
</template>
