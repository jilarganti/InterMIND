---
title: "useRequestURL"
description: "Получите доступ к URL входящего запроса с помощью композабла useRequestURL."
links:
  - label: Source
    icon: i-simple-icons-github
    to: https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/app/composables/url.ts
    size: xs
---

`useRequestURL` — это вспомогательная функция, которая возвращает [объект URL](https://developer.mozilla.org/en-US/docs/Web/API/URL/URL), работающий как на стороне сервера, так и на стороне клиента.

::important
При использовании [гибридного рендеринга](/docs/guide/concepts/rendering#hybrid-rendering) со стратегиями кеширования все заголовки входящих запросов отбрасываются при обработке кешированных ответов через [слой кеширования Nitro](https://nitro.build/guide/cache) (это означает, что `useRequestURL` будет возвращать `localhost` для `host`).

Вы можете определить опцию [`cache.varies`](https://nitro.build/guide/cache#options), чтобы указать заголовки, которые будут учитываться при кешировании и обслуживании ответов, такие как `host` и `x-forwarded-host` для мультитенантных сред.
::

::code-group

```vue [pages/about.vue]
<script setup lang="ts">
const url = useRequestURL()
</script>

<template>
  <p>URL: {{ url }}</p>
  <p>Путь: {{ url.pathname }}</p>
</template>
```

```html [Результат в разработке]
<p>URL: http://localhost:3000/about</p>
<p>Путь: /about</p>
```

::

::tip{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/API/URL#instance_properties" target="_blank"}
Прочитайте о свойствах экземпляра URL в документации MDN.
::