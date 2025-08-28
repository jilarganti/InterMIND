---
title: "clearError"
description: "Композабл clearError очищает все обработанные ошибки."
links:
  - label: Source
    icon: i-simple-icons-github
    to: https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/app/composables/error.ts
    size: xs
---

В ваших страницах, компонентах и плагинах вы можете использовать `clearError` для очистки всех ошибок и перенаправления пользователя.

**Параметры:**

- `options?: { redirect?: string }`

Вы можете указать необязательный путь для перенаправления (например, если хотите перейти на "безопасную" страницу).

```js
// Без перенаправления
clearError()

// С перенаправлением
clearError({ redirect: '/homepage' })
```

Ошибки устанавливаются в состоянии с помощью [`useError()`](/docs/api/composables/use-error). Композабл `clearError` сбросит это состояние и вызовет хук `app:error:cleared` с предоставленными опциями.

:read-more{to="/docs/getting-started/error-handling"}