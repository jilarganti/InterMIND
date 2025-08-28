---
title: "useRequestHeader"
description: "Используйте useRequestHeader для доступа к определенному заголовку входящего запроса."
links:
  - label: Source
    icon: i-simple-icons-github
    to: https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/app/composables/ssr.ts
    size: xs
---

Вы можете использовать встроенный композабл [`useRequestHeader`](/docs/api/composables/use-request-header) для доступа к любому заголовку входящего запроса в ваших страницах, компонентах и плагинах.

```ts
// Получить заголовок запроса authorization
const authorization = useRequestHeader('authorization')
```

::tip
В браузере `useRequestHeader` вернет `undefined`.
::

## Пример

Мы можем использовать `useRequestHeader`, чтобы легко определить, авторизован пользователь или нет.

Пример ниже читает заголовок запроса `authorization`, чтобы выяснить, может ли человек получить доступ к ограниченному ресурсу.

```ts [middleware/authorized-only.ts]
export default defineNuxtRouteMiddleware((to, from) => {
  if (!useRequestHeader('authorization')) {
    return navigateTo('/not-authorized')
  }
})
```