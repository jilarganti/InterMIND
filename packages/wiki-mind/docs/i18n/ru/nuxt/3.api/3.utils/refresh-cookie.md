---
title: "refreshCookie"
description: "Обновление значений useCookie вручную при изменении cookie"
navigation:
  badge: Новое
links:
  - label: Source
    icon: i-simple-icons-github
    to: https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/app/composables/cookie.ts
    size: xs
---

::important
Эта утилита доступна начиная с [Nuxt v3.10](/blog/v3-10).
::

## Назначение

Функция `refreshCookie` предназначена для обновления значения cookie, возвращаемого `useCookie`.

Это полезно для обновления ref `useCookie`, когда мы знаем, что новое значение cookie было установлено в браузере.

## Использование

```vue [app.vue]
<script setup lang="ts">
const tokenCookie = useCookie('token')

const login = async (username, password) => {
  const token = await $fetch('/api/token', { ... }) // Устанавливает cookie `token` в ответе
  refreshCookie('token')
}

const loggedIn = computed(() => !!tokenCookie.value)
</script>
```

::note{to="/docs/guide/going-further/experimental-features#cookiestore"}
Вы можете включить экспериментальную опцию `cookieStore` для автоматического обновления значения `useCookie` при изменении cookie в браузере.
::

## Тип

```ts
refreshCookie(name: string): void
```