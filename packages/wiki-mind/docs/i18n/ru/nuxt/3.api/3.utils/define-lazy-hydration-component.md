---
title: "defineLazyHydrationComponent"
description: "Определите компонент с ленивой гидратацией с использованием конкретной стратегии."
links:
  - label: Source
    icon: i-simple-icons-github
    to: https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/components/plugins/lazy-hydration-macro-transform.ts
    size: xs
---

`defineLazyHydrationComponent` — это макрос компилятора, который помогает создать компонент с определенной стратегией ленивой гидратации. Ленивая гидратация откладывает гидратацию до тех пор, пока компоненты не станут видимыми или пока браузер не завершит более критичные задачи. Это может значительно снизить первоначальные затраты на производительность, особенно для второстепенных компонентов.

## Использование

### Стратегия видимости

Гидратирует компонент, когда он становится видимым во viewport.

```vue
<script setup lang="ts">
const LazyHydrationMyComponent = defineLazyHydrationComponent(
  'visible',
  () => import('./components/MyComponent.vue')
)
</script>

<template>
  <div>
    <!-- 
      Гидратация будет запущена, когда
      элемент(ы) находится в 100px от входа во viewport.
    -->
    <LazyHydrationMyComponent :hydrate-on-visible="{ rootMargin: '100px' }" />
  </div>
</template>
```

Свойство `hydrateOnVisible` является необязательным. Вы можете передать объект для настройки поведения `IntersectionObserver` под капотом.

::read-more{to="https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver" title="IntersectionObserver options"}
Узнайте больше о параметрах для `hydrate-on-visible`.
::

::note
Под капотом это использует встроенную стратегию Vue [`hydrateOnVisible`](https://vuejs.org/guide/components/async.html#hydrate-on-visible).
::

### Стратегия простоя

Гидратирует компонент, когда браузер находится в состоянии простоя. Это подходит, если вам нужно загрузить компонент как можно скорее, но не блокировать критический путь рендеринга.

```vue
<script setup lang="ts">
const LazyHydrationMyComponent = defineLazyHydrationComponent(
  'idle',
  () => import('./components/MyComponent.vue')
)
</script>

<template>
  <div>
    <!-- Гидратация будет запущена, когда браузер находится в простое или через 2000мс. -->
    <LazyHydrationMyComponent :hydrate-on-idle="2000" />
  </div>
</template>
```

Свойство `hydrateOnIdle` является необязательным. Вы можете передать положительное число для указания максимального таймаута.

Стратегия простоя предназначена для компонентов, которые могут быть гидратированы, когда браузер находится в состоянии простоя.

::note
Под капотом это использует встроенную стратегию Vue [`hydrateOnIdle`](https://vuejs.org/guide/components/async.html#hydrate-on-idle).
::

### Стратегия взаимодействия

Гидратирует компонент после указанного взаимодействия (например, клик, наведение мыши).

```vue
<script setup lang="ts">
const LazyHydrationMyComponent = defineLazyHydrationComponent(
  'interaction',
  () => import('./components/MyComponent.vue')
)
</script>

<template>
  <div>
    <!--
      Гидратация будет запущена, когда
      на элемент(ы) наводится указатель.
    -->
    <LazyHydrationMyComponent hydrate-on-interaction="mouseover" />
  </div>
</template>
```

Свойство `hydrateOnInteraction` является необязательным. Если вы не передаете событие или список событий, по умолчанию гидратация происходит при `pointerenter`, `click` и `focus`.

::note
Под капотом это использует встроенную стратегию Vue [`hydrateOnInteraction`](https://vuejs.org/guide/components/async.html#hydrate-on-interaction).
::

### Стратегия медиа-запроса

Гидратирует компонент, когда окно соответствует медиа-запросу.

```vue
<script setup lang="ts">
const LazyHydrationMyComponent = defineLazyHydrationComponent(
  'mediaQuery',
  () => import('./components/MyComponent.vue')
)
</script>

<template>
  <div>
    <!--
      Гидратация будет запущена, когда
      ширина окна больше или равна 768px.
    -->
    <LazyHydrationMyComponent hydrate-on-media-query="(min-width: 768px)" />
  </div>
</template>
```

::note
Под капотом это использует встроенную стратегию Vue [`hydrateOnMediaQuery`](https://vuejs.org/guide/components/async.html#hydrate-on-media-query).
::

### Стратегия времени

Гидратирует компонент после указанной задержки (в миллисекундах).

```vue
<script setup lang="ts">
const LazyHydrationMyComponent = defineLazyHydrationComponent(
  'time', 
  () => import('./components/MyComponent.vue')
)
</script>

<template>
  <div>
    <!-- Гидратация запускается через 1000мс. -->
    <LazyHydrationMyComponent :hydrate-after="1000" />
  </div>
</template>
```

Стратегия времени предназначена для компонентов, которые могут ждать определенное количество времени.

### Стратегия условия

Гидратирует компонент на основе булевого условия.

```vue
<script setup lang="ts">
const LazyHydrationMyComponent = defineLazyHydrationComponent(
  'if',
  () => import('./components/MyComponent.vue')
)

const isReady = ref(false)

function myFunction() {
  // Запуск пользовательской стратегии гидратации...
  isReady.value = true
}
</script>

<template>
  <div>
    <!-- Гидратация запускается, когда isReady становится true. -->
    <LazyHydrationMyComponent :hydrate-when="isReady" />
  </div>
</template>
```

Стратегия условия лучше всего подходит для компонентов, которые не всегда нуждаются в гидратации.

### Никогда не гидратировать

Никогда не гидратирует компонент.

```vue
<script setup lang="ts">
const LazyHydrationMyComponent = defineLazyHydrationComponent(
  'never',
  () => import('./components/MyComponent.vue')
)
</script>

<template>
  <div>
    <!-- Этот компонент никогда не будет гидратирован Vue. -->
    <LazyHydrationMyComponent />
  </div>
</template>
```

### Прослушивание событий гидратации

Все компоненты с отложенной гидратацией испускают событие `@hydrated`, когда они гидратированы.

```vue
<script setup lang="ts">
const LazyHydrationMyComponent = defineLazyHydrationComponent(
  'visible',
  () => import('./components/MyComponent.vue')
)

function onHydrate() {
  console.log("Компонент был гидратирован!")
}
</script>

<template>
  <div>
    <LazyHydrationMyComponent
      :hydrate-on-visible="{ rootMargin: '100px' }"
      @hydrated="onHydrated"
    />
  </div>
</template>
```

## Параметры

::warning
Чтобы компилятор корректно распознал этот макрос, избегайте использования внешних переменных. Следующий подход помешает правильному распознаванию макроса:

```vue
<script setup lang="ts">
const strategy = 'visible'
const source = () => import('./components/MyComponent.vue')
const LazyHydrationMyComponent = defineLazyHydrationComponent(strategy, source)
</script>
```
::

### `strategy`

- **Тип**: `'visible' | 'idle' | 'interaction' | 'mediaQuery' | 'if' | 'time' | 'never'`
- **Обязательный**: `true`

| Стратегия     | Описание                                                       |
|---------------|----------------------------------------------------------------|
| `visible`     | Гидратирует, когда компонент становится видимым во viewport.   |
| `idle`        | Гидратирует, когда браузер простаивает или после задержки.     |
| `interaction` | Гидратирует при взаимодействии пользователя (например, клик, наведение). |
| `mediaQuery`  | Гидратирует, когда выполняется указанное условие медиа-запроса. |
| `if`          | Гидратирует, когда выполняется указанное булево условие.       |
| `time`        | Гидратирует после указанной временной задержки.                |
| `never`       | Предотвращает гидратацию компонента Vue.                       |

### `source`

- **Тип**: `() => Promise<Component>`
- **Обязательный**: `true`