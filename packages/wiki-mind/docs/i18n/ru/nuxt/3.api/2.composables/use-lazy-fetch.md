---
title: "useLazyFetch"
description: "Эта обертка вокруг useFetch запускает навигацию немедленно."
links:
  - label: Source
    icon: i-simple-icons-github
    to: https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/app/composables/fetch.ts
    size: xs
---

## Описание

По умолчанию [`useFetch`](/docs/api/composables/use-fetch) блокирует навигацию до тех пор, пока не будет разрешен его асинхронный обработчик. `useLazyFetch` предоставляет обертку вокруг [`useFetch`](/docs/api/composables/use-fetch), которая запускает навигацию до разрешения обработчика, устанавливая опцию `lazy` в `true`.

::note
`useLazyFetch` имеет ту же сигнатуру, что и [`useFetch`](/docs/api/composables/use-fetch).
::

::note
Ожидание `useLazyFetch` в этом режиме только гарантирует, что вызов инициализирован. При навигации на стороне клиента данные могут быть недоступны немедленно, и вы должны убедиться, что обрабатываете состояние ожидания в вашем приложении.
::

:read-more{to="/docs/api/composables/use-fetch"}

## Пример

```vue [pages/index.vue]
<script setup lang="ts">
/* Навигация произойдет до завершения загрузки данных.
 * Обрабатывайте состояния 'pending' и 'error' непосредственно в шаблоне вашего компонента
 */
const { status, data: posts } = await useLazyFetch('/api/posts')
watch(posts, (newPosts) => {
  // Поскольку posts может изначально быть null, у вас не будет доступа
  // к его содержимому сразу, но вы можете отслеживать его изменения.
})
</script>

<template>
  <div v-if="status === 'pending'">
    Загрузка ...
  </div>
  <div v-else>
    <div v-for="post in posts">
      <!-- сделать что-то -->
    </div>
  </div>
</template>
```

::note
`useLazyFetch` — это зарезервированное имя функции, преобразуемое компилятором, поэтому вы не должны называть свою собственную функцию `useLazyFetch`.
::

:read-more{to="/docs/getting-started/data-fetching"}