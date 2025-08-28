---
title: "useLazyAsyncData"
description: "Эта обертка вокруг useAsyncData запускает навигацию немедленно."
links:
  - label: Source
    icon: i-simple-icons-github
    to: https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/app/composables/asyncData.ts
    size: xs
---

## Описание

По умолчанию [`useAsyncData`](/docs/api/composables/use-async-data) блокирует навигацию до тех пор, пока не будет разрешен его асинхронный обработчик. `useLazyAsyncData` предоставляет обертку вокруг [`useAsyncData`](/docs/api/composables/use-async-data), которая запускает навигацию до разрешения обработчика, устанавливая опцию `lazy` в `true`.

::note
`useLazyAsyncData` имеет ту же сигнатуру, что и [`useAsyncData`](/docs/api/composables/use-async-data).
::

:read-more{to="/docs/api/composables/use-async-data"}

## Пример

```vue [pages/index.vue]
<script setup lang="ts">
/* Навигация произойдет до завершения загрузки данных.
  Обрабатывайте состояния 'pending' и 'error' непосредственно в шаблоне вашего компонента
*/
const { status, data: count } = await useLazyAsyncData('count', () => $fetch('/api/count'))

watch(count, (newCount) => {
  // Поскольку count может изначально быть null, у вас не будет
  // немедленного доступа к его содержимому, но вы можете отслеживать его.
})
</script>

<template>
  <div>
    {{ status === 'pending' ? 'Загрузка' : count }}
  </div>
</template>
```

::warning
`useLazyAsyncData` — это зарезервированное имя функции, преобразуемое компилятором, поэтому вы не должны называть свою собственную функцию `useLazyAsyncData`.
::

:read-more{to="/docs/getting-started/data-fetching"}