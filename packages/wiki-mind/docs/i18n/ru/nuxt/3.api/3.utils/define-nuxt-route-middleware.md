---
title: "defineNuxtRouteMiddleware"
description: "Создание именованного middleware для маршрутов с помощью функции-помощника defineNuxtRouteMiddleware."
links:
  - label: Source
    icon: i-simple-icons-github
    to: https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/app/composables/router.ts
    size: xs
---

Middleware для маршрутов хранятся в директории [`middleware/`](/docs/guide/directory-structure/middleware) вашего Nuxt приложения (если не [настроено иначе](/docs/api/nuxt-config#middleware)).

## Тип

```ts
defineNuxtRouteMiddleware(middleware: RouteMiddleware) => RouteMiddleware

interface RouteMiddleware {
  (to: RouteLocationNormalized, from: RouteLocationNormalized): ReturnType<NavigationGuard>
}
```

## Параметры

### `middleware`

- **Тип**: `RouteMiddleware`

Функция, которая принимает два объекта местоположения маршрута Vue Router в качестве параметров: следующий маршрут `to` как первый, и текущий маршрут `from` как второй.

Узнайте больше о доступных свойствах `RouteLocationNormalized` в **[документации Vue Router](https://router.vuejs.org/api/type-aliases/RouteLocationNormalized.html)**.

## Примеры

### Отображение страницы ошибки

Вы можете использовать middleware маршрута для генерации ошибок и отображения полезных сообщений об ошибках:

```ts [middleware/error.ts]
export default defineNuxtRouteMiddleware((to) => {
  if (to.params.id === '1') {
    throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
  }
})
```

Приведенный выше middleware маршрута перенаправит пользователя на пользовательскую страницу ошибки, определенную в файле `~/error.vue`, и предоставит сообщение об ошибке и код, переданные из middleware.

### Перенаправление

Используйте [`useState`](/docs/api/composables/use-state) в сочетании с вспомогательной функцией `navigateTo` внутри middleware маршрута для перенаправления пользователей на разные маршруты в зависимости от их статуса аутентификации:

```ts [middleware/auth.ts]
export default defineNuxtRouteMiddleware((to, from) => {
  const auth = useState('auth')

  if (!auth.value.isAuthenticated) {
    return navigateTo('/login')
  }

  if (to.path !== '/dashboard') {
    return navigateTo('/dashboard')
  }
})
```

Как [navigateTo](/docs/api/utils/navigate-to), так и [abortNavigation](/docs/api/utils/abort-navigation) являются глобально доступными вспомогательными функциями, которые вы можете использовать внутри `defineNuxtRouteMiddleware`.