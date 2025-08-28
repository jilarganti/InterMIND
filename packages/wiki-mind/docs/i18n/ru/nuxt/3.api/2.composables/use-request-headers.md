---
title: "useRequestHeaders"
description: "Используйте useRequestHeaders для доступа к заголовкам входящих запросов."
links:
  - label: Source
    icon: i-simple-icons-github
    to: https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/app/composables/ssr.ts
    size: xs
---

Вы можете использовать встроенный композабл [`useRequestHeaders`](/docs/api/composables/use-request-headers) для доступа к заголовкам входящих запросов в ваших страницах, компонентах и плагинах.

```js
// Получить все заголовки запроса
const headers = useRequestHeaders()

// Получить только заголовок запроса cookie
const headers = useRequestHeaders(['cookie'])
```

::tip
В браузере `useRequestHeaders` вернет пустой объект.
::

## Пример

Мы можем использовать `useRequestHeaders` для доступа и проксирования заголовка `authorization` из первоначального запроса к любым будущим внутренним запросам во время SSR.

Пример ниже добавляет заголовок запроса `authorization` к изоморфному вызову `$fetch`.

```vue [pages/some-page.vue]
<script setup lang="ts">
const { data } = await useFetch('/api/confidential', {
  headers: useRequestHeaders(['authorization'])
})
</script>
```