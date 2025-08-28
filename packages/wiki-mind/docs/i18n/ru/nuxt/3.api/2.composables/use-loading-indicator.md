---
title: "useLoadingIndicator"
description: "Этот композабл предоставляет доступ к состоянию загрузки страницы приложения."
links:
  - label: Source
    icon: i-simple-icons-github
    to: https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/app/composables/loading-indicator.ts
    size: xs
---

## Описание

Композабл, который возвращает состояние загрузки страницы. Используется компонентом [`<NuxtLoadingIndicator>`](/docs/api/components/nuxt-loading-indicator) и может управляться.
Он подключается к хукам [`page:loading:start`](/docs/api/advanced/hooks#app-hooks-runtime) и [`page:loading:end`](/docs/api/advanced/hooks#app-hooks-runtime) для изменения своего состояния.

## Параметры

- `duration`: Продолжительность полосы загрузки в миллисекундах (по умолчанию `2000`).
- `throttle`: Регулирование появления и скрытия в миллисекундах (по умолчанию `200`).
- `estimatedProgress`: По умолчанию Nuxt замедляется при приближении к 100%. Вы можете предоставить пользовательскую функцию для настройки оценки прогресса, которая является функцией, получающей продолжительность полосы загрузки (указанную выше) и прошедшее время. Она должна возвращать значение от 0 до 100.

## Свойства

### `isLoading`

- **тип**: `Ref<boolean>`
- **описание**: Состояние загрузки

### `error`

- **тип**: `Ref<boolean>`
- **описание**: Состояние ошибки

### `progress`

- **тип**: `Ref<number>`
- **описание**: Состояние прогресса. От `0` до `100`.

## Методы

### `start()`

Устанавливает `isLoading` в true и начинает увеличивать значение `progress`. `start` принимает опцию `{ force: true }` для пропуска интервала и немедленного отображения состояния загрузки.

### `set()`

Устанавливает значение `progress` в определенное значение. `set` принимает опцию `{ force: true }` для пропуска интервала и немедленного отображения состояния загрузки.

### `finish()`

Устанавливает значение `progress` в `100`, останавливает все таймеры и интервалы, затем сбрасывает состояние загрузки через `500` мс. `finish` принимает опцию `{ force: true }` для пропуска интервала перед сбросом состояния и `{ error: true }` для изменения цвета полосы загрузки и установки свойства error в true.

### `clear()`

Используется методом `finish()`. Очищает все таймеры и интервалы, используемые композаблом.

## Пример

```vue
<script setup lang="ts">
  const { progress, isLoading, start, finish, clear } = useLoadingIndicator({
    duration: 2000,
    throttle: 200,
    // Вот как прогресс вычисляется по умолчанию
    estimatedProgress: (duration, elapsed) => (2 / Math.PI * 100) * Math.atan(elapsed / duration * 100 / 50)
  })
</script>
```

```vue
<script setup lang="ts">
  const { start, set } = useLoadingIndicator()
  // то же самое что и set(0, { force: true })
  // установить прогресс на 0 и показать загрузку немедленно
  start({ force: true })
</script>
```