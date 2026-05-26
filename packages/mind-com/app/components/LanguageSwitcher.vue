<script setup lang="ts">
import type { DropdownMenuItem } from "@nuxt/ui"

const { locale, locales, t } = useI18n({ useScope: "global" })
const switchLocalePath = useSwitchLocalePath()
const router = useRouter()

const items = computed<DropdownMenuItem[][]>(() => [
  locales.value
    .filter((l): l is { code: string; name: string; file?: string } => typeof l !== "string" && "name" in l)
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
