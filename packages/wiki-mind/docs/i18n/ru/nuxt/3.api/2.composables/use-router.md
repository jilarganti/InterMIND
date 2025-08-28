---
title: "useRouter"
description: "Композабл useRouter возвращает экземпляр роутера."
links:
  - label: Source
    icon: i-simple-icons-github
    to: https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/app/composables/router.ts
    size: xs
---

```vue [pages/index.vue]
<script setup lang="ts">
const router = useRouter()
</script>
```

Если вам нужен экземпляр роутера только в шаблоне, используйте `$router`:

```vue [pages/index.vue]
<template>
  <button @click="$router.back()">Назад</button>
</template>
```

Если у вас есть директория `pages/`, `useRouter` ведет себя идентично тому, что предоставляется `vue-router`.

::read-more{icon="i-simple-icons-vuedotjs" to="https://router.vuejs.org/api/interfaces/Router.html#Properties-currentRoute" target="_blank"}
Читайте документацию `vue-router` об интерфейсе `Router`.
::

## Базовые манипуляции

- [`addRoute()`](https://router.vuejs.org/api/interfaces/Router.html#addRoute): Добавить новый маршрут к экземпляру роутера. `parentName` может быть предоставлен для добавления нового маршрута как дочернего к существующему маршруту.
- [`removeRoute()`](https://router.vuejs.org/api/interfaces/Router.html#removeRoute): Удалить существующий маршрут по его имени.
- [`getRoutes()`](https://router.vuejs.org/api/interfaces/Router.html#getRoutes): Получить полный список всех записей маршрутов.
- [`hasRoute()`](https://router.vuejs.org/api/interfaces/Router.html#hasRoute): Проверяет, существует ли маршрут с заданным именем.
- [`resolve()`](https://router.vuejs.org/api/interfaces/Router.html#resolve): Возвращает нормализованную версию местоположения маршрута. Также включает свойство `href`, которое включает любую существующую базу.

```ts [Пример]
const router = useRouter()

router.addRoute({ name: 'home', path: '/home', component: Home })
router.removeRoute('home')
router.getRoutes()
router.hasRoute('home')
router.resolve({ name: 'home' })
```

::note
`router.addRoute()` добавляет детали маршрута в массив маршрутов и полезен при создании [плагинов Nuxt](/docs/guide/directory-structure/plugins), в то время как `router.push()`, с другой стороны, немедленно запускает новую навигацию и полезен на страницах, в Vue компонентах и композаблах.
::

## На основе History API

- [`back()`](https://router.vuejs.org/api/interfaces/Router.html#back): Перейти назад в истории, если возможно, то же самое что и `router.go(-1)`.
- [`forward()`](https://router.vuejs.org/api/interfaces/Router.html#forward): Перейти вперед в истории, если возможно, то же самое что и `router.go(1)`.
- [`go()`](https://router.vuejs.org/api/interfaces/Router.html#go): Перемещаться вперед или назад по истории без иерархических ограничений, применяемых в `router.back()` и `router.forward()`.
- [`push()`](https://router.vuejs.org/api/interfaces/Router.html#push): Программно навигировать к новому URL, добавляя запись в стек истории. **Рекомендуется использовать [`navigateTo`](/docs/api/utils/navigate-to) вместо этого.**
- [`replace()`](https://router.vuejs.org/api/interfaces/Router.html#replace): Программно навигировать к новому URL, заменяя текущую запись в стеке истории маршрутов. **Рекомендуется использовать [`navigateTo`](/docs/api/utils/navigate-to) вместо этого.**

```ts [Пример]
const router = useRouter()

router.back()
router.forward()
router.go(3)
router.push({ path: "/home" })
router.replace({ hash: "#bio" })
```

::read-more{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/API/History" target="_blank"}
Узнать больше о браузерном History API.
::

## Навигационные охранники

Композабл `useRouter` предоставляет вспомогательные методы `afterEach`, `beforeEach` и `beforeResolve`, которые действуют как навигационные охранники.

Однако в Nuxt есть концепция **промежуточного ПО маршрутов**, которая упрощает реализацию навигационных охранников и обеспечивает лучший опыт разработчика.

:read-more{to="/docs/guide/directory-structure/middleware"}

## Промисы и обработка ошибок

- [`isReady()`](https://router.vuejs.org/api/interfaces/Router.html#isReady): Возвращает Promise, который разрешается, когда роутер завершил начальную навигацию.
- [`onError`](https://router.vuejs.org/api/interfaces/Router.html#onError): Добавляет обработчик ошибок, который вызывается каждый раз, когда во время навигации происходит неперехваченная ошибка.

:read-more{icon="i-simple-icons-vuedotjs" to="https://router.vuejs.org/api/interfaces/Router.html#Methods" title="Vue Router Docs" target="_blank"}

## Экземпляр универсального роутера

Если у вас нет папки `pages/`, то [`useRouter`](/docs/api/composables/use-router) вернет экземпляр универсального роутера с похожими вспомогательными методами, но имейте в виду, что не все функции могут поддерживаться или работать точно так же, как с `vue-router`.