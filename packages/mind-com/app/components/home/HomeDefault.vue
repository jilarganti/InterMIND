<script setup lang="ts">
// Default homepage — what new / unknown visitors and bots see (audience === "new").
// Deliberately free of any "old version" framing: the only product it surfaces is
// the current one (productUrl → intermind.com) with a neutral CTA, and the layout
// hides the legacy inter.mind.com "Sign in". Content here is a first cut meant to
// diverge further from HomeLegacy as the new-visitor story is designed.
const { t } = useI18n({ useScope: "global" })
const localePath = useLocalePath()
const config = useRuntimeConfig()
const productUrl = config.public.productUrl

const entities = [
  {
    name: "MindMeeting OÜ",
    roleKey: "home.vcard.entityEuRole",
    jurisdiction: "Estonia · Reg. 16207677 · VAT EE102465446",
  },
  {
    name: "Golden Fish LLC",
    roleKey: "home.vcard.entityUaeRole",
    jurisdiction: "UAE · Reg. 2920093 · License 1414192",
  },
]
</script>

<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 w-full">
    <p class="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-5">Mind<span class="text-red-500">.</span>com</p>

    <h1 class="text-4xl sm:text-6xl font-bold tracking-tight mb-10">
      <span class="text-gray-900 dark:text-white">{{ t("home.vcard.headlinePart1") }}</span>
      {{ " " }}
      <span class="text-gray-600 dark:text-gray-300">{{ t("home.vcard.headlinePart2") }}</span>
      {{ " " }}
      <span class="text-gray-400 dark:text-gray-500">{{ t("home.vcard.headlinePart3") }}</span
      ><span class="text-gray-400 dark:text-gray-500">.</span>
    </h1>

    <div class="flex flex-wrap gap-3 mb-14">
      <UButton :to="productUrl" external color="neutral" size="xl"> {{ t("home.vcard.getStarted") }} </UButton>
      <UButton :to="localePath('/contacts')" color="neutral" variant="outline" size="xl"> {{ t("home.vcard.letsTalk") }} </UButton>
    </div>

    <dl class="grid sm:grid-cols-2 gap-x-12 gap-y-6 text-sm text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-8">
      <div v-for="entity in entities" :key="entity.name">
        <dt class="font-semibold text-gray-900 dark:text-white">{{ entity.name }}</dt>
        <dd class="mt-1">{{ t(entity.roleKey) }}</dd>
        <dd class="text-xs text-gray-500 dark:text-gray-500 mt-0.5">{{ entity.jurisdiction }}</dd>
      </div>
    </dl>
  </div>
</template>
