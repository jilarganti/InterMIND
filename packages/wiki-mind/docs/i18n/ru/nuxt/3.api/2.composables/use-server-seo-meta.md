---
title: "useServerSeoMeta"
description: "Композабл useServerSeoMeta позволяет определить SEO мета-теги вашего сайта как плоский объект с полной поддержкой TypeScript."
links:
  - label: Source
    icon: i-simple-icons-github
    to: https://github.com/unjs/unhead/blob/main/packages/vue/src/composables.ts
    size: xs
---

Как и [`useSeoMeta`](/docs/api/composables/use-seo-meta), композабл `useServerSeoMeta` позволяет определить SEO мета-теги вашего сайта как плоский объект с полной поддержкой TypeScript.

:read-more{to="/docs/api/composables/use-seo-meta"}

В большинстве случаев мета-данные не должны быть реактивными, поскольку роботы сканируют только первоначальную загрузку. Поэтому мы рекомендуем использовать [`useServerSeoMeta`](/docs/api/composables/use-server-seo-meta) как утилиту, ориентированную на производительность, которая не будет выполнять никаких действий (или возвращать объект `head`) на клиенте.

```vue [app.vue]
<script setup lang="ts">
useServerSeoMeta({
  robots: 'index, follow'
})
</script>
```

Параметры точно такие же, как у [`useSeoMeta`](/docs/api/composables/use-seo-meta)

:read-more{to="/docs/getting-started/seo-meta"}