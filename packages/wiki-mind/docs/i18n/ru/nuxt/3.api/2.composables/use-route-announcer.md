---
title: "useRouteAnnouncer"
description: "Этот композабл отслеживает изменения заголовка страницы и соответственно обновляет сообщение диктора."
navigation:
  badge: New
links:
  - label: Source
    icon: i-simple-icons-github
    to: https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/app/composables/route-announcer.ts
    size: xs
---

::important
Этот композабл доступен в Nuxt v3.12+.
::

## Описание

Композабл, который отслеживает изменения заголовка страницы и соответственно обновляет сообщение диктора. Используется компонентом [`<NuxtRouteAnnouncer>`](/docs/api/components/nuxt-route-announcer) и поддается управлению.
Он подключается к хуку [`dom:rendered`](https://unhead.unjs.io/docs/typescript/head/api/hooks/dom-rendered) библиотеки Unhead для чтения заголовка страницы и установки его в качестве сообщения диктора.

## Параметры

- `politeness`: Устанавливает срочность для объявлений программы чтения с экрана: `off` (отключить объявление), `polite` (ожидает тишины), или `assertive` (прерывает немедленно). (по умолчанию `polite`).

## Свойства

### `message`

- **type**: `Ref<string>`
- **description**: Сообщение для объявления

### `politeness`

- **type**: `Ref<string>`
- **description**: Уровень срочности объявления программы чтения с экрана `off`, `polite` или `assertive`

## Методы

### `set(message, politeness = "polite")`

Устанавливает сообщение для объявления с его уровнем срочности.

### `polite(message)`

Устанавливает сообщение с `politeness = "polite"`

### `assertive(message)`

Устанавливает сообщение с `politeness = "assertive"`

## Пример

```vue [pages/index.vue]
<script setup lang="ts">
  const { message, politeness, set, polite, assertive } = useRouteAnnouncer({
    politeness: 'assertive'
  })
</script>
```