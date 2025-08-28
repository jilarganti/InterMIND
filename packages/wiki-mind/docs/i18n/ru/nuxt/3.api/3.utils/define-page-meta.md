---
title: "definePageMeta"
description: "Определите метаданные для компонентов ваших страниц."
links:
  - label: Source
    icon: i-simple-icons-github
    to: https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/pages/runtime/composables.ts
    size: xs
---

`definePageMeta` — это макрос компилятора, который вы можете использовать для установки метаданных для компонентов ваших **страниц**, расположенных в директории [`pages/`](/docs/guide/directory-structure/pages) (если не [установлено иначе](/docs/api/nuxt-config#pages)). Таким образом вы можете установить пользовательские метаданные для каждого статического или динамического маршрута вашего Nuxt приложения.

```vue [pages/some-page.vue]
<script setup lang="ts">
definePageMeta({
  layout: 'default'
})
</script>
```

:read-more{to="/docs/guide/directory-structure/pages#page-metadata"}

## Тип

```ts
definePageMeta(meta: PageMeta) => void

interface PageMeta {
  validate?: (route: RouteLocationNormalized) => boolean | Promise<boolean> | Partial<NuxtError> | Promise<Partial<NuxtError>>
  redirect?: RouteRecordRedirectOption
  name?: string
  path?: string
  props?: RouteRecordRaw['props']
  alias?: string | string[]
  pageTransition?: boolean | TransitionProps
  layoutTransition?: boolean | TransitionProps
  viewTransition?: boolean | 'always'
  key?: false | string | ((route: RouteLocationNormalizedLoaded) => string)
  keepalive?: boolean | KeepAliveProps
  layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  scrollToTop?: boolean | ((to: RouteLocationNormalizedLoaded, from: RouteLocationNormalizedLoaded) => boolean)
  [key: string]: unknown
}
```

## Параметры

### `meta`

- **Тип**: `PageMeta`

  Объект, принимающий следующие метаданные страницы:

  **`name`**

  - **Тип**: `string`

    Вы можете определить имя для маршрута этой страницы. По умолчанию имя генерируется на основе пути внутри [директории `pages/`](/docs/guide/directory-structure/pages).

  **`path`**

  - **Тип**: `string`

    Вы можете определить [пользовательское регулярное выражение](#using-a-custom-regular-expression), если у вас есть более сложный шаблон, чем тот, который можно выразить именем файла.

  **`props`**
  
  - **Тип**: [`RouteRecordRaw['props']`](https://router.vuejs.org/guide/essentials/passing-props)

    Позволяет получить доступ к `params` маршрута как к пропсам, передаваемым в компонент страницы.

  **`alias`**

  - **Тип**: `string | string[]`

    Псевдонимы для записи. Позволяет определить дополнительные пути, которые будут вести себя как копия записи. Позволяет иметь сокращения путей, такие как `/users/:id` и `/u/:id`. Все значения `alias` и `path` должны использовать одинаковые параметры.

  **`keepalive`**

  - **Тип**: `boolean` | [`KeepAliveProps`](https://vuejs.org/api/built-in-components.html#keepalive)

    Установите в `true`, когда вы хотите сохранить состояние страницы при изменении маршрутов, или используйте [`KeepAliveProps`](https://vuejs.org/api/built-in-components.html#keepalive) для точного контроля.

  **`key`**

  - **Тип**: `false` | `string` | `((route: RouteLocationNormalizedLoaded) => string)`

    Установите значение `key`, когда вам нужен больший контроль над тем, когда компонент `<NuxtPage>` перерендеривается.

  **`layout`**

  - **Тип**: `false` | `LayoutKey` | `Ref<LayoutKey>` | `ComputedRef<LayoutKey>`

    Установите статическое или динамическое имя макета для каждого маршрута. Это может быть установлено в `false`, если макет по умолчанию нужно отключить.

  **`layoutTransition`**

  - **Тип**: `boolean` | [`TransitionProps`](https://vuejs.org/api/built-in-components.html#transition)

    Установите имя перехода для применения к текущему макету. Вы также можете установить это значение в `false`, чтобы отключить переход макета.

  **`middleware`**

  - **Тип**: `MiddlewareKey` | [`NavigationGuard`](https://router.vuejs.org/api/interfaces/NavigationGuard.html#navigationguard) | `Array<MiddlewareKey | NavigationGuard>`

    Определите анонимное или именованное промежуточное ПО непосредственно в `definePageMeta`. Узнайте больше о [промежуточном ПО маршрутов](/docs/guide/directory-structure/middleware).

  **`pageTransition`**

  - **Тип**: `boolean` | [`TransitionProps`](https://vuejs.org/api/built-in-components.html#transition)

    Установите имя перехода для применения к текущей странице. Вы также можете установить это значение в `false`, чтобы отключить переход страницы.

  **`viewTransition`**

  - **Тип**: `boolean | 'always'`

    **Экспериментальная функция, доступна только при [включении в файле nuxt.config](/docs/getting-started/transitions#view-transitions-api-experimental)**</br>
    Включить/отключить переходы представления для текущей страницы.
    Если установлено в true, Nuxt не будет применять переход, если браузер пользователя соответствует `prefers-reduced-motion: reduce` (рекомендуется). Если установлено в `always`, Nuxt всегда будет применять переход.

  **`redirect`**

  - **Тип**: [`RouteRecordRedirectOption`](https://router.vuejs.org/guide/essentials/redirect-and-alias.html#redirect-and-alias)

    Куда перенаправить, если маршрут напрямую совпадает. Перенаправление происходит до любой навигационной защиты и запускает новую навигацию с новым целевым местоположением.

  **`validate`**

  - **Тип**: `(route: RouteLocationNormalized) => boolean | Promise<boolean> | Partial<NuxtError> | Promise<Partial<NuxtError>>`

    Проверить, может ли данный маршрут быть корректно отрендерен с этой страницей. Вернуть true, если он действителен, или false, если нет. Если другое совпадение не может быть найдено, это будет означать 404. Вы также можете напрямую вернуть объект с `statusCode`/`statusMessage`, чтобы немедленно ответить с ошибкой (другие совпадения не будут проверены).

  **`scrollToTop`**

  - **Тип**: `boolean | (to: RouteLocationNormalized, from: RouteLocationNormalized) => boolean`

    Указать Nuxt прокручивать к верху перед рендерингом страницы или нет. Если вы хотите переопределить поведение прокрутки Nuxt по умолчанию, вы можете сделать это в `~/router.options.ts` (см. [пользовательская маршрутизация](/docs/guide/recipes/custom-routing#using-approuteroptions)) для получения дополнительной информации.

  **`[key: string]`**

  - **Тип**: `any`

    Помимо вышеперечисленных свойств, вы также можете установить **пользовательские** метаданные. Вы можете захотеть сделать это типобезопасным способом, [расширив тип объекта `meta`](/docs/guide/directory-structure/pages/#typing-custom-metadata).

## Примеры

### Базовое использование

Пример ниже демонстрирует:

- как `key` может быть функцией, которая возвращает значение;
- как свойство `keepalive` гарантирует, что компонент `<modal>` не кэшируется при переключении между несколькими компонентами;
- добавление `pageType` как пользовательского свойства:

```vue [pages/some-page.vue]
<script setup lang="ts">
definePageMeta({
  key: (route) => route.fullPath,

  keepalive: {
    exclude: ['modal']
  },

  pageType: 'Checkout'
})
</script>
```

### Определение middleware

Пример ниже показывает, как middleware может быть определен с использованием `function` непосредственно в `definePageMeta` или установлен как `string`, который соответствует имени файла middleware, расположенного в директории `middleware/`:

```vue [pages/some-page.vue]
<script setup lang="ts">
definePageMeta({
  // определить middleware как функцию
  middleware: [
    function (to, from) {
      const auth = useState('auth')

      if (!auth.value.authenticated) {
          return navigateTo('/login')
      }

      if (to.path !== '/checkout') {
        return navigateTo('/checkout')
      }
    }
  ],

  // ... или строку
  middleware: 'auth'

  // ... или несколько строк
  middleware: ['auth', 'another-named-middleware']
})
</script>
```

### Использование пользовательского регулярного выражения

Пользовательское регулярное выражение - это хороший способ разрешить конфликты между пересекающимися маршрутами, например:

Два маршрута "/test-category" и "/1234-post" соответствуют как `[postId]-[postSlug].vue`, так и `[categorySlug].vue` страничным маршрутам.

Чтобы убедиться, что мы сопоставляем только цифры (`\d+`) для `postId` в маршруте `[postId]-[postSlug]`, мы можем добавить следующее в шаблон страницы `[postId]-[postSlug].vue`:

```vue [pages/[postId\\]-[postSlug\\].vue]
<script setup lang="ts">
definePageMeta({
  path: '/:postId(\\d+)-:postSlug' 
})
</script>
```

Для получения дополнительных примеров смотрите [Синтаксис сопоставления Vue Router](https://router.vuejs.org/guide/essentials/route-matching-syntax.html).

### Определение макета

Вы можете определить макет, который соответствует имени файла макета, расположенного (по умолчанию) в директории [`layouts/`](/docs/guide/directory-structure/layouts). Вы также можете отключить макет, установив `layout` в `false`:

```vue [pages/some-page.vue]
<script setup lang="ts">
definePageMeta({
  // установить пользовательский макет
  layout: 'admin'

  // ... или отключить макет по умолчанию
  layout: false
})
</script>
```