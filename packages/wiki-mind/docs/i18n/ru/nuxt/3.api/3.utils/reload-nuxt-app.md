---
title: "reloadNuxtApp"
description: "reloadNuxtApp выполнит жесткую перезагрузку страницы."
links:
  - label: Source
    icon: i-simple-icons-github
    to: https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/app/composables/chunk.ts
    size: xs
---

::note
`reloadNuxtApp` выполнит жесткую перезагрузку вашего приложения, повторно запросив страницу и её зависимости с сервера.
::

По умолчанию он также сохранит текущее `состояние` вашего приложения (то есть любое состояние, к которому вы можете получить доступ с помощью `useState`).

::read-more{to="/docs/guide/going-further/experimental-features#restorestate" icon="i-lucide-star"}
Вы можете включить экспериментальное восстановление этого состояния, активировав опцию `experimental.restoreState` в вашем файле `nuxt.config`.
::

## Тип

```ts
reloadNuxtApp(options?: ReloadNuxtAppOptions)

interface ReloadNuxtAppOptions {
  ttl?: number
  force?: boolean
  path?: string
  persistState?: boolean
}
```

### `options` (необязательный)

**Тип**: `ReloadNuxtAppOptions`

Объект, принимающий следующие свойства:

- `path` (необязательный)

  **Тип**: `string`

  **По умолчанию**: `window.location.pathname`

  Путь для перезагрузки (по умолчанию текущий путь). Если он отличается от текущего местоположения окна, это
  вызовет навигацию и добавит запись в историю браузера.

- `ttl` (необязательный)

  **Тип**: `number`

  **По умолчанию**: `10000`

  Количество миллисекунд, в течение которых будущие запросы на перезагрузку игнорируются. Если вызвать снова в течение этого периода времени,
  `reloadNuxtApp` не будет перезагружать ваше приложение, чтобы избежать циклов перезагрузки.

- `force` (необязательный)

  **Тип**: `boolean`

  **По умолчанию**: `false`

  Эта опция позволяет полностью обойти защиту от циклов перезагрузки, принуждая к перезагрузке, даже если она произошла в течение
  ранее указанного TTL.

- `persistState` (необязательный)

  **Тип**: `boolean`

  **По умолчанию**: `false`

  Следует ли сохранить текущее состояние Nuxt в sessionStorage (как `nuxt:reload:state`). По умолчанию это не будет иметь
  эффекта при перезагрузке, если только `experimental.restoreState` также не установлен, или если вы не обрабатываете восстановление состояния самостоятельно.