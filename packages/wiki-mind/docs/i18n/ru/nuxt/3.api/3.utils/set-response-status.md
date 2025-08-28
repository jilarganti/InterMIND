---
title: "setResponseStatus"
description: "setResponseStatus устанавливает statusCode (и опционально statusMessage) ответа."
links:
  - label: Source
    icon: i-simple-icons-github
    to: https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/app/composables/ssr.ts
    size: xs
---

Nuxt предоставляет композаблы и утилиты для первоклассной поддержки серверного рендеринга.

`setResponseStatus` устанавливает statusCode (и опционально statusMessage) ответа.

::important
`setResponseStatus` может быть вызван только в [контексте Nuxt](/docs/guide/going-further/nuxt-app#the-nuxt-context).
::

```js
const event = useRequestEvent()

// event будет undefined в браузере
if (event) {
  // Установить код состояния 404 для пользовательской страницы 404
  setResponseStatus(event, 404)

  // Также установить сообщение состояния
  setResponseStatus(event, 404, 'Page Not Found')
}
```

::note
В браузере `setResponseStatus` не будет иметь эффекта.
::

:read-more{to="/docs/getting-started/error-handling"}