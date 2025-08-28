---
title: "useRequestEvent"
description: "Получите доступ к входящему событию запроса с помощью композабла useRequestEvent."
links:
  - label: Source
    icon: i-simple-icons-github
    to: https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/app/composables/ssr.ts
    size: xs
---

В рамках [контекста Nuxt](/docs/guide/going-further/nuxt-app#the-nuxt-context) вы можете использовать `useRequestEvent` для доступа к входящему запросу.

```ts
// Получить базовое событие запроса
const event = useRequestEvent()

// Получить URL
const url = event?.path
```

::tip
В браузере `useRequestEvent` вернет `undefined`.
::