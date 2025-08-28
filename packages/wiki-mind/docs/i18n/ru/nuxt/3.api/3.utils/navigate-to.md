---
title: "navigateTo"
description: "navigateTo - это вспомогательная функция, которая программно перенаправляет пользователей."
links:
  - label: Source
    icon: i-simple-icons-github
    to: https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/app/composables/router.ts
    size: xs
---

## Использование

`navigateTo` доступен как на стороне сервера, так и на стороне клиента. Он может использоваться в [контексте Nuxt](/docs/guide/going-further/nuxt-app#the-nuxt-context) или напрямую для выполнения навигации по страницам.

::warning
Убедитесь, что всегда используете `await` или `return` с результатом `navigateTo` при его вызове.
::

::note
`navigateTo` нельзя использовать в маршрутах Nitro. Для выполнения серверного перенаправления в маршрутах Nitro используйте [`sendRedirect`](https://h3.dev/utils/response#sendredirectevent-location-code).
::

### В Vue-компоненте

```vue
<script setup lang="ts">
// передача 'to' как строки
await navigateTo('/search')

// ... или как объект маршрута
await navigateTo({ path: '/search' })

// ... или как объект маршрута с параметрами запроса
await navigateTo({
  path: '/search',
  query: {
    page: 1,
    sort: 'asc'
  }
})
</script>
```

### В middleware маршрута

```ts
export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path !== '/search') {
    // установка кода перенаправления '301 Moved Permanently'
    return navigateTo('/search', { redirectCode: 301 })
  }
})
```

При использовании `navigateTo` в middleware маршрута вы должны **вернуть его результат**, чтобы обеспечить корректную работу потока выполнения middleware.

Например, следующая реализация **не будет работать как ожидается**:

```ts
export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path !== '/search') {
    // ❌ Это не будет работать как ожидается
    navigateTo('/search', { redirectCode: 301 })
    return
  }
})
```

В этом случае `navigateTo` будет выполнен, но не возвращен, что может привести к неожиданному поведению.

:read-more{to="/docs/guide/directory-structure/middleware"}

### Навигация к внешнему URL

Параметр `external` в `navigateTo` влияет на то, как обрабатывается навигация к URL:

- **Без `external: true`**:
  - Внутренние URL работают как ожидается.
  - Внешние URL вызывают ошибку.

- **С `external: true`**:
  - Внутренние URL навигируют с полной перезагрузкой страницы.
  - Внешние URL работают как ожидается.

#### Пример

```vue
<script setup lang="ts">
// вызовет ошибку;
// навигация к внешнему URL по умолчанию не разрешена
await navigateTo('https://nuxt.com')

// успешно перенаправит с параметром 'external', установленным в 'true'
await navigateTo('https://nuxt.com', {
  external: true
})
</script>
```

### Открытие страницы в новой вкладке

```vue
<script setup lang="ts">
// откроет 'https://nuxt.com' в новой вкладке
await navigateTo('https://nuxt.com', {
  open: {
    target: '_blank',
    windowFeatures: {
      width: 500,
      height: 500
    }
  }
})
</script>
```

## Тип

```ts
function navigateTo(
  to: RouteLocationRaw | undefined | null,
  options?: NavigateToOptions
) => Promise<void | NavigationFailure | false> | false | void | RouteLocationRaw 

interface NavigateToOptions {
  replace?: boolean
  redirectCode?: number
  external?: boolean
  open?: OpenOptions
}

type OpenOptions = {
  target: string
  windowFeatures?: OpenWindowFeatures
}

type OpenWindowFeatures = {
  popup?: boolean
  noopener?: boolean
  noreferrer?: boolean
} & XOR<{ width?: number }, { innerWidth?: number }>
  & XOR<{ height?: number }, { innerHeight?: number }>
  & XOR<{ left?: number }, { screenX?: number }>
  & XOR<{ top?: number }, { screenY?: number }>
```

## Параметры

### `to`

**Тип**: [`RouteLocationRaw`](https://router.vuejs.org/api/interfaces/RouteLocationOptions.html#Interface-RouteLocationOptions) | `undefined` | `null`

**По умолчанию**: `'/'`

`to` может быть простой строкой или объектом маршрута для перенаправления. Когда передается как `undefined` или `null`, по умолчанию будет использоваться `'/'`.

#### Пример

```ts
// Передача URL напрямую перенаправит на страницу '/blog'
await navigateTo('/blog')

// Использование объекта маршрута перенаправит на маршрут с именем 'blog'
await navigateTo({ name: 'blog' })

// Перенаправляет на маршрут 'product', передавая параметр (id = 1) с использованием объекта маршрута.
await navigateTo({ name: 'product', params: { id: 1 } })
```

### `options` (необязательный)

**Тип**: `NavigateToOptions`

Объект, принимающий следующие свойства:

- `replace`

  - **Тип**: `boolean`
  - **По умолчанию**: `false`
  - По умолчанию `navigateTo` добавляет указанный маршрут в экземпляр Vue Router на стороне клиента.

    Это поведение можно изменить, установив `replace` в `true`, чтобы указать, что данный маршрут должен быть заменен.

- `redirectCode`

  - **Тип**: `number`
  - **По умолчанию**: `302`

  - `navigateTo` перенаправляет по указанному пути и устанавливает код перенаправления [`302 Found`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/302) по умолчанию, когда перенаправление происходит на стороне сервера.

    Это поведение по умолчанию можно изменить, предоставив другой `redirectCode`. Обычно [`301 Moved Permanently`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/301) может использоваться для постоянных перенаправлений.

- `external`

  - **Тип**: `boolean`
  - **По умолчанию**: `false`

  - Позволяет переходить на внешний URL при установке в `true`. В противном случае `navigateTo` выдаст ошибку, поскольку внешняя навигация по умолчанию не разрешена.

- `open`

  - **Тип**: `OpenOptions`
  - Позволяет переходить по URL, используя метод [open()](https://developer.mozilla.org/en-US/docs/Web/API/Window/open) окна. Эта опция применима только на стороне клиента и будет игнорироваться на стороне сервера.

    Объект, принимающий следующие свойства:

  - `target`

    - **Тип**: `string`
    - **По умолчанию**: `'_blank'`

    - Строка без пробелов, указывающая имя контекста просмотра, в который загружается ресурс.

  - `windowFeatures`

    - **Тип**: `OpenWindowFeatures`

    - Объект, принимающий следующие свойства:

      | Свойство | Тип    | Описание |
      |----------|---------|--------------|
      | `popup`  | `boolean` | Запрашивает минимальное всплывающее окно вместо новой вкладки, с функциями UI, определяемыми браузером. |
      | `width` или `innerWidth`  | `number`  | Указывает ширину области содержимого (минимум 100 пикселей), включая полосы прокрутки. |
      | `height` или `innerHeight` | `number`  | Указывает высоту области содержимого (минимум 100 пикселей), включая полосы прокрутки. |
      | `left` или `screenX`   | `number`  | Устанавливает горизонтальное положение нового окна относительно левого края экрана. |
      | `top` или `screenY`   | `number`  | Устанавливает вертикальное положение нового окна относительно верхнего края экрана. |
      | `noopener` | `boolean` | Предотвращает доступ нового окна к исходному окну через `window.opener`. |
      | `noreferrer` | `boolean` | Предотвращает отправку заголовка Referer и неявно включает `noopener`. |

      Обратитесь к [документации](https://developer.mozilla.org/en-US/docs/Web/API/Window/open#windowfeatures) для получения более подробной информации о свойствах **windowFeatures**.