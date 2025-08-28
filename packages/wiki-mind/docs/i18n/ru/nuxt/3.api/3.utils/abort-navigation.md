---
title: "abortNavigation"
description: "abortNavigation - это вспомогательная функция, которая предотвращает навигацию и выбрасывает ошибку, если она задана в качестве параметра."
links:
  - label: Source
    icon: i-simple-icons-github
    to: https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/app/composables/router.ts
    size: xs
---

::warning
`abortNavigation` можно использовать только внутри [обработчика middleware маршрута](/docs/guide/directory-structure/middleware).
::

## Тип

```ts
abortNavigation(err?: Error | string): false
```

## Параметры

### `err`

- **Тип**: [`Error`](https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Global_Objects/Error) | `string`

  Необязательная ошибка, которая будет выброшена функцией `abortNavigation`.

## Примеры

Пример ниже показывает, как вы можете использовать `abortNavigation` в middleware маршрута для предотвращения несанкционированного доступа к маршруту:

```ts [middleware/auth.ts]
export default defineNuxtRouteMiddleware((to, from) => {
  const user = useState('user')

  if (!user.value.isAuthorized) {
    return abortNavigation()
  }

  if (to.path !== '/edit-post') {
    return navigateTo('/edit-post')
  }
})
```

### `err` как строка

Вы можете передать ошибку как строку:

```ts [middleware/auth.ts]
export default defineNuxtRouteMiddleware((to, from) => {
  const user = useState('user')

  if (!user.value.isAuthorized) {
    return abortNavigation('Недостаточно прав.')
  }
})
```

### `err` как объект Error

Вы можете передать ошибку как объект [`Error`](https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Global_Objects/Error), например, перехваченный блоком `catch`:

```ts [middleware/auth.ts]
export default defineNuxtRouteMiddleware((to, from) => {
  try {
    /* код, который может вызвать ошибку */
  } catch (err) {
    return abortNavigation(err)
  }
})
```