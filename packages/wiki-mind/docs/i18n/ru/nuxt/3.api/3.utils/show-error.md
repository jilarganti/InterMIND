---
title: "showError"
description: "Nuxt предоставляет быстрый и простой способ показать полноэкранную страницу ошибки при необходимости."
links:
  - label: Source
    icon: i-simple-icons-github
    to: https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/app/composables/error.ts
    size: xs
---

В рамках [контекста Nuxt](/docs/guide/going-further/nuxt-app#the-nuxt-context) вы можете использовать `showError` для отображения ошибки.

**Параметры:**

- `error`: `string | Error | Partial<{ cause, data, message, name, stack, statusCode, statusMessage }>`

```ts
showError("😱 О нет, произошла ошибка.")
showError({
  statusCode: 404,
  statusMessage: "Страница не найдена"
})
```

Ошибка устанавливается в состоянии с помощью [`useError()`](/docs/api/composables/use-error) для создания реактивного и SSR-дружественного общего состояния ошибки между компонентами.

::tip
`showError` вызывает хук `app:error`.
::

:read-more{to="/docs/getting-started/error-handling"}