<script setup lang="ts">
import type { DropdownMenuItem } from "@nuxt/ui"

const { locale, locales, t } = useI18n({ useScope: "global" })
const switchLocalePath = useSwitchLocalePath()
const router = useRouter()

// Russian translations aren't ready for public launch yet — hide the option on
// the production Vercel deployment but keep it on preview/dev so we can review.
const isProd = import.meta.env.VITE_VERCEL_ENV === "production"

const items = computed<DropdownMenuItem[][]>(() => [
  locales.value
    .filter((l): l is Exclude<typeof l, string> => typeof l !== "string" && "name" in l)
    .filter((l) => !(isProd && l.code === "ru"))
    .map((l) => ({
      label: l.name,
      icon: locale.value === l.code ? "i-lucide-check" : undefined,
      onSelect: () => {
        const target = switchLocalePath(l.code as Parameters<typeof switchLocalePath>[0])
        if (target) router.push(target)
      },
    })),
])
</script>

<template>
  <UDropdownMenu :items="items" :content="{ align: 'end' }">
    <UButton
      icon="i-lucide-globe"
      variant="ghost"
      color="neutral"
      size="md"
      :aria-label="t('nav.switchLanguage')"
      class="nav-link-btn"
    />
  </UDropdownMenu>
</template>
