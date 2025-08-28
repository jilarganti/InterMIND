---
title: "refreshNuxtData"
description: "Обновление всех или конкретных экземпляров asyncData в Nuxt"
links:
  - label: Source
    icon: i-simple-icons-github
    to: https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/app/composables/asyncData.ts
    size: xs
---

`refreshNuxtData` используется для повторного получения всех или конкретных экземпляров `asyncData`, включая те, что из [`useAsyncData`](/docs/api/composables/use-async-data), [`useLazyAsyncData`](/docs/api/composables/use-lazy-async-data), [`useFetch`](/docs/api/composables/use-fetch) и [`useLazyFetch`](/docs/api/composables/use-lazy-fetch).

::note
Если ваш компонент кэшируется с помощью `<KeepAlive>` и переходит в деактивированное состояние, `asyncData` внутри компонента все равно будет повторно получен до тех пор, пока компонент не будет размонтирован.
::

## Тип

```ts
refreshNuxtData(keys?: string | string[])
```

## Параметры

* `keys`: Одна строка или массив строк в качестве `keys`, которые используются для получения данных. Этот параметр является **необязательным**. Все ключи [`useAsyncData`](/docs/api/composables/use-async-data) и [`useFetch`](/docs/api/composables/use-fetch) повторно извлекаются, когда `keys` не указаны явно.

## Возвращаемые значения

`refreshNuxtData` возвращает промис, который разрешается, когда все или конкретные экземпляры `asyncData` были обновлены.

## Примеры

### Обновление всех данных

Пример ниже обновляет все данные, которые загружаются с помощью `useAsyncData` и `useFetch` в приложении Nuxt.

```vue [pages/some-page.vue]
<script setup lang="ts">
const refreshing = ref(false)

async function refreshAll () {
  refreshing.value = true
  try {
    await refreshNuxtData()
  } finally {
    refreshing.value = false
  }
}
</script>

<template>
  <div>
    <button :disabled="refreshing" @click="refreshAll">
      Обновить все данные
    </button>
  </div>
</template>
```

### Обновление конкретных данных

Пример ниже обновляет только данные, ключи которых соответствуют `count` и `user`.

```vue [pages/some-page.vue]
<script setup lang="ts">
const refreshing = ref(false)

async function refresh () {
  refreshing.value = true
  try {
    // вы также можете передать массив ключей для обновления нескольких данных
    await refreshNuxtData(['count', 'user'])
  } finally {
    refreshing.value = false
  }
}
</script>

<template>
  <div v-if="refreshing">
    Загрузка
  </div>
  <button @click="refresh">Обновить</button>
</template>
```

::note
Если у вас есть доступ к экземпляру `asyncData`, рекомендуется использовать его методы `refresh` или `execute` как предпочтительный способ повторной загрузки данных.
::

:read-more{to="/docs/getting-started/data-fetching"}