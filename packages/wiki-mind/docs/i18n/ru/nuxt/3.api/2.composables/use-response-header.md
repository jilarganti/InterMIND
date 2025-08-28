---
title: "useResponseHeader"
description: "Используйте useResponseHeader для установки заголовка ответа сервера."
links:
  - label: Source
    icon: i-simple-icons-github
    to: https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/app/composables/ssr.ts
    size: xs
---

::important
Этот композабл доступен в Nuxt v3.14+.
::

Вы можете использовать встроенный композабл [`useResponseHeader`](/docs/api/composables/use-response-header) для установки любого заголовка ответа сервера в ваших страницах, компонентах и плагинах.

```ts
// Установка пользовательского заголовка ответа
const header = useResponseHeader('X-My-Header');
header.value = 'my-value';
```

## Пример

Мы можем использовать `useResponseHeader` для легкой установки заголовка ответа на основе отдельной страницы.

```vue [pages/test.vue]
<script setup>
// pages/test.vue
const header = useResponseHeader('X-My-Header');
header.value = 'my-value';
</script>

<template>
  <h1>Тестовая страница с пользовательским заголовком</h1>
  <p>Ответ от сервера для этой страницы "/test" будет содержать пользовательский заголовок "X-My-Header".</p>
</template>
```

Мы можем использовать `useResponseHeader`, например, в Nuxt [middleware](/docs/guide/directory-structure/middleware) для установки заголовка ответа для всех страниц.

```ts [middleware/my-header-middleware.ts]
export default defineNuxtRouteMiddleware((to, from) => {
  const header = useResponseHeader('X-My-Always-Header');
  header.value = `Я всегда здесь!`;
});

```