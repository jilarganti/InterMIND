---
title: "addRouteMiddleware"
description: "addRouteMiddleware() - это вспомогательная функция для динамического добавления middleware в ваше приложение."
links:
  - label: Source
    icon: i-simple-icons-github
    to: https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/app/composables/router.ts
    size: xs
---

::note
Route middleware - это навигационные охранники, хранящиеся в директории [`middleware/`](/docs/guide/directory-structure/middleware) вашего Nuxt приложения (если не [установлено иначе](/docs/api/nuxt-config#middleware)).
::

## Тип

```ts
function addRouteMiddleware (name: string, middleware: RouteMiddleware, options?: AddRouteMiddlewareOptions): void
function addRouteMiddleware (middleware: RouteMiddleware): void

interface AddRouteMiddlewareOptions {
  global?: boolean
}
```

## Параметры

### `name`

- **Тип:** `string` | `RouteMiddleware`

Может быть либо строкой, либо функцией типа `RouteMiddleware`. Функция принимает следующий маршрут `to` в качестве первого аргумента и текущий маршрут `from` в качестве второго аргумента, оба из которых являются объектами маршрутов Vue.

Узнайте больше о доступных свойствах [объектов маршрутов](/docs/api/composables/use-route).

### `middleware`

- **Тип:** `RouteMiddleware`

Второй аргумент — это функция типа `RouteMiddleware`. Как и выше, она предоставляет объекты маршрутов `to` и `from`. Становится необязательным, если первый аргумент в `addRouteMiddleware()` уже передан как функция.

### `options`

- **Тип:** `AddRouteMiddlewareOptions`

Необязательный аргумент `options` позволяет установить значение `global` в `true`, чтобы указать, является ли middleware маршрутизатора глобальным или нет (по умолчанию установлено в `false`).

## Примеры

### Именованное middleware маршрута

Именованное middleware маршрута определяется путем передачи строки в качестве первого аргумента и функции в качестве второго:

```ts [plugins/my-plugin.ts]
export default defineNuxtPlugin(() => {
  addRouteMiddleware('named-middleware', () => {
    console.log('именованное middleware добавлено в плагине Nuxt')
  })
})
```

При определении в плагине оно переопределяет любое существующее middleware с тем же именем, расположенное в директории `middleware/`.

### Глобальное middleware маршрута

Глобальное middleware маршрута может быть определено двумя способами:

- Передайте функцию напрямую в качестве первого аргумента без имени. Она будет автоматически рассматриваться как глобальное middleware и применяться при каждом изменении маршрута.

  ```ts [plugins/my-plugin.ts]
  export default defineNuxtPlugin(() => {
    addRouteMiddleware((to, from) => {
      console.log('анонимное глобальное middleware, которое выполняется при каждом изменении маршрута')
    })
  })
  ```

- Установите необязательный третий аргумент `{ global: true }`, чтобы указать, является ли middleware маршрута глобальным.

  ```ts [plugins/my-plugin.ts]
  export default defineNuxtPlugin(() => {
    addRouteMiddleware('global-middleware', (to, from) => {
        console.log('глобальное middleware, которое выполняется при каждом изменении маршрута')
      },
      { global: true }
    )
  })
  ```