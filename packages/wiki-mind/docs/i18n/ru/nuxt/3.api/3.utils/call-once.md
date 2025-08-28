---
title: "callOnce"
description: "Выполнить заданную функцию или блок кода один раз во время SSR или CSR."
navigation:
  badge: New
links:
  - label: Source
    icon: i-simple-icons-github
    to: https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/app/composables/once.ts
    size: xs
---

::important
Эта утилита доступна начиная с [Nuxt v3.9](/blog/v3-9).
::

## Назначение

Функция `callOnce` предназначена для выполнения заданной функции или блока кода только один раз во время:
- рендеринга на стороне сервера, но не гидратации
- навигации на стороне клиента

Это полезно для кода, который должен выполняться только один раз, например, для логирования события или настройки глобального состояния.

## Использование

Режим по умолчанию для `callOnce` — выполнить код только один раз. Например, если код выполняется на сервере, он не будет выполняться снова на клиенте. Он также не будет выполняться повторно, если вы вызовете `callOnce` более одного раза на клиенте, например, при возврате на эту страницу.

```vue [app.vue]
<script setup lang="ts">
const websiteConfig = useState('config')

await callOnce(async () => {
  console.log('Это будет выведено в лог только один раз')
  websiteConfig.value = await $fetch('https://my-cms.com/api/website-config')
})
</script>
```

Также возможно выполнять код при каждой навигации, избегая при этом начальной двойной загрузки сервер/клиент. Для этого можно использовать режим `navigation`:

```vue [app.vue]
<script setup lang="ts">
const websiteConfig = useState('config')

await callOnce(async () => {
  console.log('Это будет выведено в лог только один раз, а затем при каждой клиентской навигации')
  websiteConfig.value = await $fetch('https://my-cms.com/api/website-config')
}, { mode: 'navigation' })
</script>
```

::important
Режим `navigation` доступен начиная с [Nuxt v3.15](/blog/v3-15).
::

::tip{to="/docs/getting-started/state-management#usage-with-pinia"}
`callOnce` полезен в сочетании с [модулем Pinia](/modules/pinia) для вызова действий хранилища.
::

:read-more{to="/docs/getting-started/state-management"}

::warning
Обратите внимание, что `callOnce` ничего не возвращает. Вам следует использовать [`useAsyncData`](/docs/api/composables/use-async-data) или [`useFetch`](/docs/api/composables/use-fetch), если вы хотите получать данные во время SSR.
::

::note
`callOnce` — это композабл, который должен вызываться непосредственно в функции setup, плагине или middleware маршрута, поскольку ему необходимо добавить данные в полезную нагрузку Nuxt, чтобы избежать повторного вызова функции на клиенте при гидратации страницы.
::

## Тип

```ts
callOnce (key?: string, fn?: (() => any | Promise<any>), options?: CallOnceOptions): Promise<void>
callOnce(fn?: (() => any | Promise<any>), options?: CallOnceOptions): Promise<void>

type CallOnceOptions = {
  /**
   * Режим выполнения для функции callOnce
   * @default 'render'
   */
  mode?: 'navigation' | 'render'
}
```

## Параметры

- `key`: Уникальный ключ, обеспечивающий однократное выполнение кода. Если вы не предоставите ключ, то будет сгенерирован ключ, уникальный для файла и номера строки экземпляра `callOnce`.
- `fn`: Функция для однократного выполнения. Может быть асинхронной.
- `options`: Настройка режима: либо повторное выполнение при навигации (`navigation`), либо только один раз за время жизни приложения (`render`). По умолчанию `render`.
  - `render`: Выполняется один раз во время первоначального рендеринга (либо SSR, либо CSR) - Режим по умолчанию
  - `navigation`: Выполняется один раз во время первоначального рендеринга и один раз при каждой последующей клиентской навигации