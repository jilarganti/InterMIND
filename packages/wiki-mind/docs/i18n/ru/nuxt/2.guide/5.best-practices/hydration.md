---
navigation.title: "Nuxt и гидратация"
title: "Nuxt и гидратация"
description: "Почему важно исправлять проблемы с гидратацией"
---

При разработке вы можете столкнуться с проблемами гидратации. Не игнорируйте эти предупреждения.

# Почему важно их исправлять?

Несоответствия гидратации — это не просто предупреждения, а индикаторы серьезных проблем, которые могут сломать ваше приложение:

## Влияние на производительность

- **Увеличенное время до интерактивности**: Ошибки гидратации заставляют Vue повторно рендерить всё дерево компонентов, что увеличивает время, необходимое для того, чтобы ваше Nuxt приложение стало интерактивным
- **Плохой пользовательский опыт**: Пользователи могут видеть мигание контента или неожиданные сдвиги макета

## Проблемы функциональности

- **Нарушенная интерактивность**: Обработчики событий могут неправильно привязываться, оставляя кнопки и формы нефункциональными
- **Несогласованность состояния**: Состояние приложения может рассинхронизироваться между тем, что видит пользователь, и тем, что приложение считает отрендеренным
- **SEO проблемы**: Поисковые системы могут индексировать контент, отличающийся от того, что фактически видят пользователи

# Как их обнаружить

## Предупреждения консоли разработки

Vue будет записывать предупреждения о несоответствии гидратации в консоль браузера во время разработки:

![Скриншот предупреждения Vue о несоответствии гидратации в консоли браузера](/assets/docs/best-practices/vue-console-hydration.png)

# Распространенные причины

## API только для браузера в серверном контексте

**Проблема**: Использование специфичных для браузера API во время рендеринга на стороне сервера.

```html
<template>
  <div>Предпочтения пользователя: {{ userTheme }}</div>
</template>

<script setup>
  // Это вызовет несоответствие гидратации!
  // localStorage не существует на сервере!
  const userTheme = localStorage.getItem("theme") || "light"
</script>
```

**Решение**: Вы можете использовать [`useCookie`](/docs/api/composables/use-cookie):

```html
<template>
  <div>Предпочтения пользователя: {{ userTheme }}</div>
</template>

<script setup>
  // Это работает как на сервере, так и на клиенте
  const userTheme = useCookie("theme", { default: () => "light" })
</script>
```

## Несогласованные данные

**Проблема**: Различные данные между сервером и клиентом.

```html
<template>
  <div>{{ Math.random() }}</div>
</template>
```

**Решение**: Используйте состояние, совместимое с SSR:

```html
<template>
  <div>{{ state }}</div>
</template>

<script setup>
  const state = useState("random", () => Math.random())
</script>
```

## Условный рендеринг на основе состояния клиента

**Проблема**: Использование условий только для клиента во время SSR.

```html
<template>
  <div v-if="window?.innerWidth > 768">Контент для десктопа</div>
</template>
```

**Решение**: Используйте медиа-запросы или обрабатывайте это на стороне клиента:

```html
<template>
  <div class="responsive-content">
    <div class="hidden md:block">Контент для десктопа</div>
    <div class="md:hidden">Мобильный контент</div>
  </div>
</template>
```

## Сторонние библиотеки с побочными эффектами

**Проблема**: Библиотеки, которые изменяют DOM или имеют зависимости от браузера (это ОЧЕНЬ часто происходит с менеджерами тегов).

```html
<script setup>
  if (import.meta.client) {
      const { default: SomeBrowserLibrary } = await import('browser-only-lib')
      SomeBrowserLibrary.init()
  }
</script>
```

**Решение**: Инициализируйте библиотеки после завершения гидратации:

```html
<script setup>
  onMounted(async () => {
    const { default: SomeBrowserLibrary } = await import("browser-only-lib")
    SomeBrowserLibrary.init()
  })
</script>
```

## Динамический контент на основе времени

**Проблема**: Контент, который изменяется в зависимости от текущего времени.

```html
<template>
  <div>{{ greeting }}</div>
</template>

<script setup>
  const hour = new Date().getHours()
  const greeting = hour < 12 ? "Доброе утро" : "Добрый день"
</script>
```

**Решение**: Используйте компонент [`NuxtTime`](/docs/api/components/nuxt-time) или обрабатывайте это на стороне клиента:

```html
<template>
  <div>
    <NuxtTime :date="new Date()" format="HH:mm" />
  </div>
</template>
```

```html
<template>
  <div>
    <ClientOnly>
      {{ greeting }}
      <template #fallback> Привет! </template>
    </ClientOnly>
  </div>
</template>

<script setup>
  const greeting = ref("Привет!")

  onMounted(() => {
    const hour = new Date().getHours()
    greeting.value = hour < 12 ? "Доброе утро" : "Добрый день"
  })
</script>
```

## В заключение

1. **Используйте SSR-совместимые композаблы**: [`useFetch`](/docs/api/composables/use-fetch), [`useAsyncData`](/docs/api/composables/use-async-data), [`useState`](/docs/api/composables/use-state)
2. **Оборачивайте код только для клиента**: Используйте компонент [`ClientOnly`](/docs/api/components/client-only) для контента, специфичного для браузера
3. **Согласованные источники данных**: Убедитесь, что сервер и клиент используют одни и те же данные
4. **Избегайте побочных эффектов в setup**: Перенесите код, зависящий от браузера, в `onMounted`

::tip
Вы можете прочитать [документацию Vue о несоответствии гидратации SSR](https://vuejs.org/guide/scaling-up/ssr.html#hydration-mismatch) для лучшего понимания гидратации.
::