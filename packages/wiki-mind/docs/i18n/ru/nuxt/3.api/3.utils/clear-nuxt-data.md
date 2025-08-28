---
title: "clearNuxtData"
description: "Удаление кэшированных данных, статуса ошибок и ожидающих промисов useAsyncData и useFetch."
links:
  - label: Source
    icon: i-simple-icons-github
    to: https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/app/composables/asyncData.ts
    size: xs
---

::note
Этот метод полезен, если вы хотите инвалидировать получение данных для другой страницы.
::

## Тип

```ts
clearNuxtData (keys?: string | string[] | ((key: string) => boolean)): void
```

## Параметры

* `keys`: Один или массив ключей, которые используются в [`useAsyncData`](/docs/api/composables/use-async-data) для удаления их кэшированных данных. Если ключи не предоставлены, **все данные** будут аннулированы.