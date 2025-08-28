---
title: "useRuntimeConfig"
description: "Получите доступ к переменным конфигурации времени выполнения с помощью композабла useRuntimeConfig."
links:
  - label: Source
    icon: i-simple-icons-github
    to: https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/app/nuxt.ts
    size: xs
---

## Использование

```vue [app.vue]
<script setup lang="ts">
const config = useRuntimeConfig()
</script>
```

```ts [server/api/foo.ts]
export default defineEventHandler((event) => {
  const config = useRuntimeConfig(event)
})
```

:read-more{to="/docs/guide/going-further/runtime-config"}

## Определение конфигурации времени выполнения

Пример ниже показывает, как установить публичный базовый URL API и секретный токен API, который доступен только на сервере.

Мы всегда должны определять переменные `runtimeConfig` внутри `nuxt.config`.

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  runtimeConfig: {
    // Приватные ключи доступны только на сервере
    apiSecret: '123',

    // Публичные ключи, которые доступны клиенту
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || '/api'
    }
  }
})
```

::note
Переменные, которые должны быть доступны на сервере, добавляются непосредственно внутри `runtimeConfig`. Переменные, которые должны быть доступны как на клиенте, так и на сервере, определяются в `runtimeConfig.public`.
::

:read-more{to="/docs/guide/going-further/runtime-config"}

## Доступ к конфигурации времени выполнения

Для доступа к конфигурации времени выполнения мы можем использовать композабл `useRuntimeConfig()`:

```ts [server/api/test.ts]
export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)

  // Доступ к публичным переменным
  const result = await $fetch(`/test`, {
    baseURL: config.public.apiBase,
    headers: {
      // Доступ к приватной переменной (доступна только на сервере)
      Authorization: `Bearer ${config.apiSecret}`
    }
  })
  return result
}
```

В этом примере, поскольку `apiBase` определен в пространстве имен `public`, он универсально доступен как на сервере, так и на клиентской стороне, в то время как `apiSecret` **доступен только на серверной стороне**.

## Переменные окружения

Можно обновлять значения конфигурации времени выполнения, используя соответствующее имя переменной окружения с префиксом `NUXT_`.

:read-more{to="/docs/guide/going-further/runtime-config"}

### Использование файла `.env`

Мы можем установить переменные окружения внутри файла `.env`, чтобы сделать их доступными во время **разработки** и **сборки/генерации**.

```ini [.env]
NUXT_PUBLIC_API_BASE = "https://api.localhost:5555"
NUXT_API_SECRET = "123"
```

::note
Любые переменные окружения, установленные в файле `.env`, доступны через `process.env` в приложении Nuxt во время **разработки** и **сборки/генерации**.
::

::warning
В **продакшн среде** следует использовать переменные окружения платформы, а `.env` не используется.
::

:read-more{to="/docs/guide/directory-structure/env"}

## Пространство имен `app`

Nuxt использует пространство имен `app` в runtime-config с ключами, включая `baseURL` и `cdnURL`. Вы можете настроить их значения во время выполнения, установив переменные окружения.

::note
Это зарезервированное пространство имен. Вы не должны добавлять дополнительные ключи внутри `app`.
::

### `app.baseURL`

По умолчанию `baseURL` установлен в `'/'`.

Однако `baseURL` может быть обновлен во время выполнения путем установки `NUXT_APP_BASE_URL` как переменной окружения.

Затем вы можете получить доступ к этому новому базовому URL, используя `config.app.baseURL`:

```ts [/plugins/my-plugin.ts]
export default defineNuxtPlugin((NuxtApp) => {
  const config = useRuntimeConfig()

  // Универсальный доступ к baseURL
  const baseURL = config.app.baseURL
})
```

### `app.cdnURL`

Этот пример показывает, как установить пользовательский CDN URL и получить к нему доступ, используя `useRuntimeConfig()`.

Вы можете использовать пользовательский CDN для обслуживания статических ресурсов внутри `.output/public`, используя переменную окружения `NUXT_APP_CDN_URL`.

А затем получить доступ к новому CDN URL, используя `config.app.cdnURL`.

```ts [server/api/foo.ts]
export default defineEventHandler((event) => {
  const config = useRuntimeConfig(event)

  // Универсальный доступ к cdnURL
  const cdnURL = config.app.cdnURL
})
```

:read-more{to="/docs/guide/going-further/runtime-config"}