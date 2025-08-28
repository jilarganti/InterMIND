---
title: "preloadRouteComponents"
description: "preloadRouteComponents позволяет вручную предзагружать отдельные страницы в вашем Nuxt приложении."
links:
  - label: Source
    icon: i-simple-icons-github
    to: https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/app/composables/preload.ts
    size: xs
---

Предзагрузка маршрутов загружает компоненты определенного маршрута, к которому пользователь может перейти в будущем. Это гарантирует, что компоненты будут доступны раньше и с меньшей вероятностью заблокируют навигацию, улучшая производительность.

::tip{icon="i-lucide-rocket"}
Nuxt уже автоматически предзагружает необходимые маршруты, если вы используете компонент `NuxtLink`.
::

:read-more{to="/docs/api/components/nuxt-link"}

## Пример

Предварительная загрузка маршрута при использовании `navigateTo`.

```ts
// мы не ждем эту асинхронную функцию, чтобы избежать блокировки рендеринга
// функции setup этого компонента
preloadRouteComponents('/dashboard')

const submit = async () => {
  const results = await $fetch('/api/authentication')

  if (results.token) {
    await navigateTo('/dashboard')
  }
}
```

:read-more{to="/docs/api/utils/navigate-to"}

::note
На сервере `preloadRouteComponents` не будет иметь эффекта.
::