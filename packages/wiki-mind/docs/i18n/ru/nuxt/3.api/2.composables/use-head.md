---
title: "useHead"
description: "useHead настраивает свойства head отдельных страниц вашего Nuxt приложения."
links:
  - label: Source
    icon: i-simple-icons-github
    to: https://github.com/unjs/unhead/blob/main/packages/vue/src/composables.ts
    size: xs
---

Композабл-функция [`useHead`](/docs/api/composables/use-head) позволяет вам управлять тегами head программно и реактивно, работая на основе [Unhead](https://unhead.unjs.io). Если данные поступают от пользователя или другого ненадежного источника, мы рекомендуем ознакомиться с [`useHeadSafe`](/docs/api/composables/use-head-safe).

:read-more{to="/docs/getting-started/seo-meta"}

## Тип

```ts
useHead(meta: MaybeComputedRef<MetaObject>): void
```

Ниже представлены нереактивные типы для [`useHead`](/docs/api/composables/use-head) .

```ts
interface MetaObject {
  title?: string
  titleTemplate?: string | ((title?: string) => string)
  base?: Base
  link?: Link[]
  meta?: Meta[]
  style?: Style[]
  script?: Script[]
  noscript?: Noscript[]
  htmlAttrs?: HtmlAttributes
  bodyAttrs?: BodyAttributes
}
```

Смотрите [@unhead/vue](https://github.com/unjs/unhead/blob/main/packages/vue/src/types/schema.ts) для более подробных типов.

::note
Свойства `useHead` могут быть динамическими, принимая `ref`, `computed` и `reactive` свойства. Параметр `meta` также может принимать функцию, возвращающую объект, чтобы сделать весь объект реактивным.
::

## Параметры

### `meta`

**Тип**: `MetaObject`

Объект, принимающий следующие метаданные заголовка:

- `meta`: Каждый элемент в массиве сопоставляется с новым созданным тегом `<meta>`, где свойства объекта сопоставляются с соответствующими атрибутами.
  - **Тип**: `Array<Record<string, any>>`
- `link`: Каждый элемент в массиве сопоставляется с новым созданным тегом `<link>`, где свойства объекта сопоставляются с соответствующими атрибутами.
  - **Тип**: `Array<Record<string, any>>`
- `style`: Каждый элемент в массиве сопоставляется с новым созданным тегом `<style>`, где свойства объекта сопоставляются с соответствующими атрибутами.
  - **Тип**: `Array<Record<string, any>>`
- `script`: Каждый элемент в массиве сопоставляется с новым созданным тегом `<script>`, где свойства объекта сопоставляются с соответствующими атрибутами.
  - **Тип**: `Array<Record<string, any>>`
- `noscript`: Каждый элемент в массиве сопоставляется с новым созданным тегом `<noscript>`, где свойства объекта сопоставляются с соответствующими атрибутами.
  - **Тип**: `Array<Record<string, any>>`
- `titleTemplate`: Настраивает динамический шаблон для настройки заголовка страницы на отдельной странице.
  - **Тип**: `string` | `((title: string) => string)`
- `title`: Устанавливает статический заголовок страницы на отдельной странице.
  - **Тип**: `string`
- `bodyAttrs`: Устанавливает атрибуты тега `<body>`. Каждое свойство объекта сопоставляется с соответствующим атрибутом.
  - **Тип**: `Record<string, any>`
- `htmlAttrs`: Устанавливает атрибуты тега `<html>`. Каждое свойство объекта сопоставляется с соответствующим атрибутом.
  - **Тип**: `Record<string, any>`