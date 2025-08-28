---
title: "clearNuxtState"
description: "Удаление кэшированного состояния useState."
links:
  - label: Source
    icon: i-simple-icons-github
    to: https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/app/composables/state.ts
    size: xs
---

::note
Этот метод полезен, если вы хотите инвалидировать состояние `useState`.
::

## Тип

```ts
clearNuxtState (keys?: string | string[] | ((key: string) => boolean)): void
```

## Параметры

- `keys`: Один или массив ключей, которые используются в [`useState`](/docs/api/composables/use-state) для удаления их кэшированного состояния. Если ключи не предоставлены, **все состояние** будет аннулировано.