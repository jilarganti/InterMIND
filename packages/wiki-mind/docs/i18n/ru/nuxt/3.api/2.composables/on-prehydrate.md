---
title: "onPrehydrate"
description: "Используйте onPrehydrate для выполнения колбэка на клиенте непосредственно перед тем, как Nuxt выполнит гидратацию страницы."
links:
  - label: Source
    icon: i-simple-icons-github
    to: https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/app/composables/ssr.ts
    size: xs
---

::important
Этот композабл доступен в Nuxt v3.12+.
::

`onPrehydrate` — это композабл-хук жизненного цикла, который позволяет выполнить колбэк на клиенте непосредственно перед тем, как Nuxt выполнит гидратацию страницы.
::note
Это продвинутая утилита, которую следует использовать с осторожностью. Например, [`nuxt-time`](https://github.com/danielroe/nuxt-time/pull/251) и [`@nuxtjs/color-mode`](https://github.com/nuxt-modules/color-mode/blob/main/src/script.js) манипулируют DOM, чтобы избежать несоответствий при гидратации.
::

## Использование

Вызывайте `onPrehydrate` в функции setup Vue-компонента (например, в `<script setup>`) или в плагине. Это работает только при вызове на сервере и не будет включено в клиентскую сборку.

## Тип

```ts [Signature]
export function onPrehydrate(callback: (el: HTMLElement) => void): void
export function onPrehydrate(callback: string | ((el: HTMLElement) => void), key?: string): undefined | string
```

## Параметры

| Параметр | Тип | Обязательный | Описание |
| ---- | --- | --- | --- |
| `callback` | `((el: HTMLElement) => void) \| string` | Да | Функция (или строковое представление функции) для выполнения перед гидратацией Nuxt. Будет преобразована в строку и встроена в HTML. Не должна иметь внешних зависимостей или ссылаться на переменные вне callback. Выполняется до инициализации среды выполнения Nuxt, поэтому не должна полагаться на контекст Nuxt или Vue. |
| `key` | `string` | Нет | (Расширенный) Уникальный ключ для идентификации скрипта предгидратации, полезен для продвинутых сценариев, таких как множественные корневые узлы. |

## Возвращаемые значения

- Возвращает `undefined` при вызове только с функцией обратного вызова.
- Возвращает строку (prehydrate id) при вызове с функцией обратного вызова и ключом, которая может использоваться для установки или доступа к атрибуту `data-prehydrate-id` в продвинутых случаях использования.

## Пример

```vue twoslash [app.vue]
<script setup lang="ts">
declare const window: Window
// ---cut---
// Выполнить код перед гидратацией Nuxt
onPrehydrate(() => {
  console.log(window)
})

// Получить доступ к корневому элементу
onPrehydrate((el) => {
  console.log(el.outerHTML)
  // <div data-v-inspector="app.vue:15:3" data-prehydrate-id=":b3qlvSiBeH:"> Привет </div>
})

// Продвинутый: получить/установить `data-prehydrate-id` самостоятельно
const prehydrateId = onPrehydrate((el) => {})
</script>

<template>
  <div>
    Привет
  </div>
</template>
```