---
title: "onNuxtReady"
description: "Композабл onNuxtReady позволяет выполнить колбэк после завершения инициализации вашего приложения."
links:
  - label: Source
    icon: i-simple-icons-github
    to: https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/app/composables/ready.ts
    size: xs
---

::important
`onNuxtReady` выполняется только на стороне клиента. :br
Он идеально подходит для выполнения кода, который не должен блокировать первоначальную отрисовку вашего приложения.
::

```ts [plugins/ready.client.ts]
export default defineNuxtPlugin(() => {
  onNuxtReady(async () => {
    const myAnalyticsLibrary = await import('my-big-analytics-library')
    // делаем что-то с myAnalyticsLibrary
  })
})
```

Его «безопасно» запускать даже после инициализации вашего приложения. В этом случае код будет зарегистрирован для выполнения в следующем колбэке простоя.