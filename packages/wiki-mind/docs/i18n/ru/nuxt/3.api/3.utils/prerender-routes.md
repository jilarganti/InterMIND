---
title: "prerenderRoutes"
description: "prerenderRoutes подсказывает Nitro предварительно отрендерить дополнительный маршрут."
links:
  - label: Source
    icon: i-simple-icons-github
    to: https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/app/composables/ssr.ts
    size: xs
---

При предварительном рендеринге вы можете подсказать Nitro предварительно отрендерить дополнительные пути, даже если их URL не отображаются в HTML сгенерированной страницы.

::important
`prerenderRoutes` может быть вызван только в пределах [контекста Nuxt](/docs/guide/going-further/nuxt-app#the-nuxt-context).
::

::note
`prerenderRoutes` должен выполняться во время предварительного рендеринга. Если `prerenderRoutes` используется в динамических страницах/маршрутах, которые не предварительно отрендерены, то он не будет выполнен.
::

```js
const route = useRoute()

prerenderRoutes('/')
prerenderRoutes(['/', '/about'])
```

::note
В браузере или при вызове вне предварительного рендеринга `prerenderRoutes` не будет иметь эффекта.
::

Вы даже можете предварительно отрендерить API маршруты, что особенно полезно для полностью статически сгенерированных сайтов (SSG), поскольку вы можете затем использовать `$fetch` для получения данных, как если бы у вас был доступный сервер!

```js
prerenderRoutes('/api/content/article/name-of-article')

// Где-то позже в приложении
const articleContent = await $fetch('/api/content/article/name-of-article', {
  responseType: 'json',
})
```

::warning
Предварительно отрендеренные API маршруты в продакшене могут не возвращать ожидаемые заголовки ответа, в зависимости от провайдера, на который вы развертываете. Например, JSON ответ может быть подан с типом содержимого `application/octet-stream`.
Всегда вручную устанавливайте `responseType` при получении предварительно отрендеренных API маршрутов.
::