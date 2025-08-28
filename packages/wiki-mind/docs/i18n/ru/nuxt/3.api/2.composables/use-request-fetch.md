---
title: "useRequestFetch"
description: "Передача контекста запроса и заголовков для серверных fetch-запросов с помощью композабла useRequestFetch."
links:
  - label: Source
    icon: i-simple-icons-github
    to: https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/app/composables/ssr.ts
    size: xs
---

Вы можете использовать `useRequestFetch` для передачи контекста запроса и заголовков при выполнении серверных fetch-запросов.

При выполнении клиентского fetch-запроса браузер автоматически отправляет необходимые заголовки.
Однако при выполнении запроса во время серверного рендеринга, из соображений безопасности, нам необходимо передавать заголовки вручную.

::note
Заголовки, которые **не предназначены для передачи**, **не будут включены** в запрос. К таким заголовкам относятся, например:
`transfer-encoding`, `connection`, `keep-alive`, `upgrade`, `expect`, `host`, `accept`
::

::tip
Композабл [`useFetch`](/docs/api/composables/use-fetch) использует `useRequestFetch` под капотом для автоматической передачи контекста запроса и заголовков.
::

::code-group

```vue [pages/index.vue]
<script setup lang="ts">
// Это передаст заголовки пользователя в обработчик события `/api/cookies`
// Результат: { cookies: { foo: 'bar' } }
const requestFetch = useRequestFetch()
const { data: forwarded } = await useAsyncData(() => requestFetch('/api/cookies'))

// Это НЕ передаст ничего
// Результат: { cookies: {} }
const { data: notForwarded } = await useAsyncData(() => $fetch('/api/cookies')) 
</script>
```

```ts [server/api/cookies.ts]
export default defineEventHandler((event) => {
  const cookies = parseCookies(event)

  return { cookies }
})
```

::

::tip
В браузере во время клиентской навигации `useRequestFetch` будет вести себя точно так же, как обычный [`$fetch`](/docs/api/utils/dollarfetch).
::