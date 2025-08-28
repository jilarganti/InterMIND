---
title: "usePreviewMode"
description: "Используйте usePreviewMode для проверки и управления режимом предварительного просмотра в Nuxt"
links:
  - label: Source
    icon: i-simple-icons-github
    to: https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/app/composables/preview.ts
    size: xs
---

# `usePreviewMode`

Режим предварительного просмотра позволяет вам увидеть, как ваши изменения будут отображаться на живом сайте, не показывая их пользователям.

Вы можете использовать встроенный композабл `usePreviewMode` для доступа и управления состоянием предварительного просмотра в Nuxt. Если композабл обнаружит режим предварительного просмотра, он автоматически принудительно выполнит все необходимые обновления для [`useAsyncData`](/docs/api/composables/use-async-data) и [`useFetch`](/docs/api/composables/use-fetch), чтобы перерендерить контент предварительного просмотра.

```js
const { enabled, state } = usePreviewMode()
```

## Опции

### Пользовательская проверка `enable`

Вы можете указать пользовательский способ включения режима предварительного просмотра. По умолчанию композабл `usePreviewMode` включит режим предварительного просмотра, если в URL есть параметр `preview`, равный `true` (например, `http://localhost:3000?preview=true`). Вы можете обернуть `usePreviewMode` в пользовательский композабл, чтобы сохранить согласованность опций во всех использованиях и предотвратить любые ошибки.

```js
export function useMyPreviewMode () {
  return usePreviewMode({
    shouldEnable: () => {
      return !!route.query.customPreview
    }
  });
}
```

### Изменение состояния по умолчанию

`usePreviewMode` попытается сохранить значение параметра `token` из URL в состоянии. Вы можете изменить это состояние, и оно будет доступно для всех вызовов [`usePreviewMode`](/docs/api/composables/use-preview-mode).

```js
const data1 = ref('data1')

const { enabled, state } = usePreviewMode({
  getState: (currentState) => {
    return { data1, data2: 'data2' }
  }
})
```

::note
Функция `getState` добавит возвращаемые значения к текущему состоянию, поэтому будьте осторожны, чтобы случайно не перезаписать важное состояние.
::

### Настройка колбэков `onEnable` и `onDisable`

По умолчанию, когда `usePreviewMode` включен, он вызовет `refreshNuxtData()` для повторного получения всех данных с сервера.

Когда режим предварительного просмотра отключен, композабл прикрепит колбэк для вызова `refreshNuxtData()`, который выполнится после последующей навигации роутера.

Вы можете указать пользовательские колбэки для запуска, предоставив свои собственные функции для опций `onEnable` и `onDisable`.

```js
const { enabled, state } = usePreviewMode({
  onEnable: () => {
    console.log('режим предварительного просмотра был включен')
  },
  onDisable: () => {
    console.log('режим предварительного просмотра был отключен')
  }
})
```

## Пример

Пример ниже создает страницу, где часть контента отображается только в режиме предварительного просмотра.

```vue [pages/some-page.vue]
<script setup>
const { enabled, state } = usePreviewMode()

const { data } = await useFetch('/api/preview', {
  query: {
    apiKey: state.token
  }
})
</script>

<template>
  <div>
    Базовый контент
    <p v-if="enabled">
      Только контент предварительного просмотра: {{ state.token }}
      <br>
      <button @click="enabled = false">
        отключить режим предварительного просмотра
      </button>
    </p>
  </div>
</template>
```

Теперь вы можете сгенерировать ваш сайт и запустить его:

```bash [Terminal]
npx nuxt generate
npx nuxt preview
```

Затем вы можете увидеть вашу страницу предварительного просмотра, добавив параметр запроса `preview` в конец страницы, которую хотите увидеть:

```js
?preview=true
```

::note
`usePreviewMode` следует тестировать локально с `nuxt generate`, а затем `nuxt preview`, а не с `nuxt dev`. ([Команда preview](/docs/api/commands/preview) не связана с режимом предварительного просмотра.)
::