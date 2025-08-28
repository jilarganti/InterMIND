---
title: "useError"
description: "Композабл useError возвращает глобальную ошибку Nuxt, которая обрабатывается в данный момент."
links:
  - label: Source
    icon: i-simple-icons-github
    to: https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/app/composables/error.ts
    size: xs
---

## Использование

Композабл `useError` возвращает глобальную ошибку Nuxt, которая обрабатывается и доступна как на клиенте, так и на сервере. Он предоставляет реактивное, SSR-совместимое состояние ошибки во всем вашем приложении.

```ts
const error = useError()
```

Вы можете использовать этот композабл в ваших компонентах, страницах или плагинах для доступа к текущей ошибке Nuxt или реагирования на неё.

## Тип

```ts
interface NuxtError<DataT = unknown> {
  statusCode: number
  statusMessage: string
  message: string
  data?: DataT
  error?: true
}

export const useError: () => Ref<NuxtError | undefined>
```

## Параметры

Этот композабл не принимает никаких параметров.

## Возвращаемые значения

Возвращает `Ref`, содержащий текущую ошибку Nuxt (или `undefined`, если ошибки нет). Объект ошибки является реактивным и будет автоматически обновляться при изменении состояния ошибки.

## Пример

```ts
<script setup lang="ts">
const error = useError()

if (error.value) {
  console.error('Ошибка Nuxt:', error.value)
}
</script>
```

:read-more{to="/docs/getting-started/error-handling"}