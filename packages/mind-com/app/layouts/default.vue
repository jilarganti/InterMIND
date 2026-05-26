<script setup lang="ts">
const { t } = useI18n()
const config = useRuntimeConfig()
const productUrl = config.public.productUrl
const signInUrl = config.public.signInUrl
const localePath = useLocalePath()
</script>

<template>
  <div class="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
    <header class="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        <NuxtLink :to="localePath('/')" class="inline-flex items-center gap-2 font-semibold text-gray-900 dark:text-white" :aria-label="t('nav.brandLabel')">
          <img src="/logo.svg" alt="" class="w-7 h-7" width="28" height="28" />
          <span>Mind</span>
        </NuxtLink>

        <nav class="flex items-center gap-2">
          <UButton :to="localePath('/blog')" variant="ghost" color="neutral" size="md">
            {{ t("nav.blog") }}
          </UButton>
          <LanguageSwitcher />
          <UButton :to="signInUrl" external variant="ghost" color="neutral" size="md">
            {{ t("nav.signIn") }}
          </UButton>
          <UButton :to="productUrl" external color="neutral" size="md">
            {{ t("nav.newVersion") }}
          </UButton>
        </nav>
      </div>
    </header>

    <main class="flex-1 w-full">
      <slot />
    </main>

    <AppFooter />
  </div>
</template>
