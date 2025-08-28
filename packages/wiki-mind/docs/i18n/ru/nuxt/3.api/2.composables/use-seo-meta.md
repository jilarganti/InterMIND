---
title: "useSeoMeta"
description: "Композабл useSeoMeta позволяет определить SEO мета-теги вашего сайта как плоский объект с полной поддержкой TypeScript."
links:
  - label: Source
    icon: i-simple-icons-github
    to: https://github.com/unjs/unhead/blob/main/packages/vue/src/composables.ts
    size: xs
---

Это помогает избежать распространенных ошибок, таких как использование `name` вместо `property`, а также опечаток - с более чем 100+ полностью типизированными мета-тегами.

::important
Это рекомендуемый способ добавления мета-тегов на ваш сайт, поскольку он защищен от XSS и имеет полную поддержку TypeScript.
::

:read-more{to="/docs/getting-started/seo-meta"}

## Использование

```vue [app.vue]
<script setup lang="ts">
useSeoMeta({
  title: 'Мой удивительный сайт',
  ogTitle: 'Мой удивительный сайт',
  description: 'Это мой удивительный сайт, позвольте мне рассказать вам все о нем.',
  ogDescription: 'Это мой удивительный сайт, позвольте мне рассказать вам все о нем.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})
</script>
```

При вставке тегов, которые являются реактивными, следует использовать синтаксис computed getter (`() => value`):

```vue [app.vue]
<script setup lang="ts">
const title = ref('Мой заголовок')

useSeoMeta({
  title,
  description: () => `Это описание для страницы ${title.value}`
})
</script>
```

## Параметры

Доступно более 100 параметров. Смотрите [полный список параметров в исходном коде](https://github.com/harlan-zw/zhead/blob/main/packages/zhead/src/metaFlat.ts#L1035).

:read-more{to="/docs/getting-started/seo-meta"}

## Производительность

В большинстве случаев SEO мета-теги не нуждаются в реактивности, поскольку роботы поисковых систем в основном сканируют первоначальную загрузку страницы.

Для лучшей производительности вы можете обернуть ваши вызовы `useSeoMeta` в условие только для сервера, когда мета-теги не нуждаются в реактивности:

```vue [app.vue]
<script setup lang="ts">
if (import.meta.server) {
  // Эти мета-теги будут добавлены только во время серверного рендеринга
  useSeoMeta({
    robots: 'index, follow',
    description: 'Статическое описание, которое не нуждается в реактивности',
    ogImage: 'https://example.com/image.png',
    // другие статические мета-теги...
  })
}

const dynamicTitle = ref('Мой заголовок')
// Используйте реактивные мета-теги вне условия только при необходимости
useSeoMeta({
  title: () => dynamicTitle.value,
  ogTitle: () => dynamicTitle.value,
})
</script>
```

Ранее для этого использовался композабл [`useServerSeoMeta`](/docs/api/composables/use-server-seo-meta), но он был объявлен устаревшим в пользу данного подхода.