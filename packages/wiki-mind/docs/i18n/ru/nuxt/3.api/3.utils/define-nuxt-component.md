---
title: "defineNuxtComponent"
description: "defineNuxtComponent() - это вспомогательная функция для определения типобезопасных компонентов с Options API."
links:
  - label: Source
    icon: i-simple-icons-github
    to: https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/app/composables/component.ts
    size: xs
---

::note
`defineNuxtComponent()` - это вспомогательная функция для определения типобезопасных Vue компонентов с использованием options API, аналогично [`defineComponent()`](https://vuejs.org/api/general.html#definecomponent). Обертка `defineNuxtComponent()` также добавляет поддержку опций компонента `asyncData` и `head`.
::

::note
Использование `<script setup lang="ts">` является рекомендуемым способом объявления Vue компонентов в Nuxt.
::

:read-more{to=/docs/getting-started/data-fetching}

## `asyncData()`

Если вы решили не использовать `setup()` в вашем приложении, вы можете использовать метод `asyncData()` внутри определения вашего компонента:

```vue [pages/index.vue]
<script lang="ts">
export default defineNuxtComponent({
  async asyncData() {
    return {
      data: {
        greetings: 'привет мир!'
      }
    }
  },
})
</script>
```

## `head()`

Если вы решили не использовать `setup()` в вашем приложении, вы можете использовать метод `head()` внутри определения вашего компонента:

```vue [pages/index.vue]
<script lang="ts">
export default defineNuxtComponent({
  head(nuxtApp) {
    return {
      title: 'Мой сайт'
    }
  },
})
</script>
```