---
title: "setPageLayout"
description: "setPageLayout позволяет динамически изменять макет страницы."
links:
  - label: Исходный код
    icon: i-simple-icons-github
    to: https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/app/composables/router.ts
    size: xs
---

::important
`setPageLayout` позволяет динамически изменять макет страницы. Он зависит от доступа к контексту Nuxt и поэтому может быть вызван только в пределах [контекста Nuxt](/docs/guide/going-further/nuxt-app#the-nuxt-context).
::

```ts [middleware/custom-layout.ts]
export default defineNuxtRouteMiddleware((to) => {
  // Установить макет для маршрута, к которому вы переходите
  setPageLayout('other')
})
```

::note
Если вы решите установить макет динамически на стороне сервера, вы _должны_ сделать это до того, как макет будет отрендерен Vue (то есть в плагине или промежуточном ПО маршрута), чтобы избежать несоответствия гидратации.
::