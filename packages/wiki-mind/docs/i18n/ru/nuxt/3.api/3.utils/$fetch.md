---
title: "$fetch"
description: "Nuxt использует ofetch для глобального предоставления помощника $fetch для выполнения HTTP-запросов."
links:
  - label: Source
    icon: i-simple-icons-github
    to: https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/app/entry.ts
    size: xs
---

Nuxt использует [ofetch](https://github.com/unjs/ofetch) для глобального предоставления помощника `$fetch` для выполнения HTTP-запросов в вашем Vue-приложении или API-маршрутах.

::tip{icon="i-lucide-rocket"}
Во время серверного рендеринга вызов `$fetch` для получения данных из ваших внутренних [API-маршрутов](/docs/guide/directory-structure/server) будет напрямую вызывать соответствующую функцию (эмулируя запрос), **экономя дополнительный API-вызов**.
::

::note{color="blue" icon="i-lucide-info"}
Использование `$fetch` в компонентах без обертывания его в [`useAsyncData`](/docs/api/composables/use-async-data) приводит к двойному получению данных: сначала на сервере, затем снова на клиентской стороне во время гидратации, поскольку `$fetch` не передает состояние с сервера на клиент. Таким образом, запрос будет выполнен на обеих сторонах, потому что клиент должен получить данные заново.
::

## Использование

Мы рекомендуем использовать [`useFetch`](/docs/api/composables/use-fetch) или [`useAsyncData`](/docs/api/composables/use-async-data) + `$fetch` для предотвращения двойного получения данных при загрузке данных компонента.

```vue [app.vue]
<script setup lang="ts">
// Во время SSR данные получаются дважды, один раз на сервере и один раз на клиенте.
const dataTwice = await $fetch('/api/item')

// Во время SSR данные получаются только на стороне сервера и передаются клиенту.
const { data } = await useAsyncData('item', () => $fetch('/api/item'))

// Вы также можете использовать useFetch как сокращение для useAsyncData + $fetch
const { data } = await useFetch('/api/item')
</script>
```

:read-more{to="/docs/getting-started/data-fetching"}

Вы можете использовать `$fetch` в любых методах, которые выполняются только на стороне клиента.

```vue [pages/contact.vue]
<script setup lang="ts">
async function contactForm() {
  await $fetch('/api/contact', {
    method: 'POST',
    body: { hello: 'world '}
  })
}
</script>

<template>
  <button @click="contactForm">Связаться</button>
</template>
```

::tip
`$fetch` является предпочтительным способом выполнения HTTP-запросов в Nuxt вместо [@nuxt/http](https://github.com/nuxt/http) и [@nuxtjs/axios](https://github.com/nuxt-community/axios-module), которые созданы для Nuxt 2.
::

::note
Если вы используете `$fetch` для вызова внешнего HTTPS URL с самоподписанным сертификатом в режиме разработки, вам нужно будет установить `NODE_TLS_REJECT_UNAUTHORIZED=0` в вашем окружении.
::

### Передача заголовков и cookies

Когда мы вызываем `$fetch` в браузере, пользовательские заголовки, такие как `cookie`, будут напрямую отправлены в API.

Однако во время рендеринга на стороне сервера, из-за рисков безопасности, таких как **подделка запросов на стороне сервера (SSRF)** или **неправильное использование аутентификации**, `$fetch` не будет включать cookies браузера пользователя и не будет передавать cookies из ответа fetch.

::code-group

```vue [pages/index.vue]
<script setup lang="ts">
// Это НЕ будет пересылать заголовки или cookies во время SSR
const { data } = await useAsyncData(() => $fetch('/api/cookies'))
</script>
```

```ts [server/api/cookies.ts]
export default defineEventHandler((event) => {
  const foo = getCookie(event, 'foo')
  // ... Делаем что-то с cookie
})
```
::

Если вам нужно пересылать заголовки и cookies на сервере, вы должны передать их вручную:

```vue [pages/index.vue]
<script setup lang="ts">
// Это будет пересылать заголовки и cookies пользователя в `/api/cookies`
const requestFetch = useRequestFetch()
const { data } = await useAsyncData(() => requestFetch('/api/cookies'))
</script>
```

Однако при вызове `useFetch` с относительным URL на сервере, Nuxt будет использовать [`useRequestFetch`](/docs/api/composables/use-request-fetch) для проксирования заголовков и cookies (за исключением заголовков, которые не предназначены для пересылки, таких как `host`).