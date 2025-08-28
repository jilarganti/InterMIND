---
title: "preloadComponents"
description: "Nuxt предоставляет утилиты для управления предварительной загрузкой компонентов."
links:
  - label: Source
    icon: i-simple-icons-github
    to: https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/app/composables/preload.ts
    size: xs
---

Предварительная загрузка компонентов загружает компоненты, которые понадобятся вашей странице очень скоро, и которые вы хотите начать загружать на раннем этапе жизненного цикла рендеринга. Это гарантирует, что они будут доступны раньше и с меньшей вероятностью заблокируют рендеринг страницы, улучшая производительность.

Используйте `preloadComponents` для ручной предварительной загрузки отдельных компонентов, которые были зарегистрированы глобально в вашем Nuxt приложении. По умолчанию Nuxt регистрирует их как асинхронные компоненты. Вы должны использовать версию имени компонента в PascalCase.

```js
await preloadComponents('MyGlobalComponent')

await preloadComponents(['MyGlobalComponent1', 'MyGlobalComponent2'])
```

::note
На сервере `preloadComponents` не будет иметь эффекта.
::