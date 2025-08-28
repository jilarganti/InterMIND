---
title: "useHydration"
description: "Позволяет полностью контролировать цикл гидратации для установки и получения данных с сервера."
links:
  - label: Source
    icon: i-simple-icons-github
    to: https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/app/composables/hydrate.ts
    size: xs
---

::note
Это продвинутый композабл, в первую очередь предназначенный для использования в плагинах, в основном используется модулями Nuxt.
::

::note
`useHydration` предназначен для **обеспечения синхронизации и восстановления состояния во время SSR**. Если вам нужно создать глобально реактивное состояние, совместимое с SSR в Nuxt, рекомендуется использовать [`useState`](/docs/api/composables/use-state).
::

`useHydration` — это встроенный композабл, который предоставляет способ устанавливать данные на стороне сервера при каждом новом HTTP-запросе и получать эти данные на стороне клиента. Таким образом `useHydration` позволяет вам полностью контролировать цикл гидратации.

Данные, возвращаемые функцией `get` на сервере, сохраняются в `nuxtApp.payload` под уникальным ключом, предоставленным в качестве первого параметра для `useHydration`. Во время гидратации эти данные затем извлекаются на клиенте, предотвращая избыточные вычисления или API-вызовы.

## Использование

::code-group

```ts [Без useHydration]
export default defineNuxtPlugin((nuxtApp) => {
  const myStore = new MyStore()

  if (import.meta.server) {
    nuxt.hooks.hook('app:rendered', () => {
      nuxtApp.payload.myStoreState = myStore.getState()
    })
  }

  if (import.meta.client) {
    nuxt.hooks.hook('app:created', () => {
      myStore.setState(nuxtApp.payload.myStoreState)
    })
  }
})
```

```ts [С useHydration]
export default defineNuxtPlugin((nuxtApp) => {
  const myStore = new MyStore()

  useHydration(
    'myStoreState', 
    () => myStore.getState(), 
    (data) => myStore.setState(data)
  )
})
```
::

## Тип

```ts [signature]
useHydration <T> (key: string, get: () => T, set: (value: T) => void) => void
```

## Параметры

- `key`: Уникальный ключ, который идентифицирует данные в вашем Nuxt приложении.
- `get`: Функция, выполняемая **только на сервере** (вызывается при SSR рендеринге) для установки начального значения.
- `set`: Функция, выполняемая **только на клиенте** (вызывается при создании начального экземпляра vue) для получения данных.