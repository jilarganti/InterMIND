---
title: "useNuxtData"
description: "Доступ к текущему кэшированному значению композаблов для получения данных."
links:
  - label: Source
    icon: i-simple-icons-github
    to: https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/app/composables/asyncData.ts
    size: xs
---

::note
`useNuxtData` предоставляет доступ к текущему кэшированному значению [`useAsyncData`](/docs/api/composables/use-async-data), [`useLazyAsyncData`](/docs/api/composables/use-lazy-async-data), [`useFetch`](/docs/api/composables/use-fetch) и [`useLazyFetch`](/docs/api/composables/use-lazy-fetch) с явно указанным ключом.
::

## Использование

Композабл `useNuxtData` используется для доступа к текущему кэшированному значению композаблов для получения данных, таких как `useAsyncData`, `useLazyAsyncData`, `useFetch` и `useLazyFetch`. Предоставив ключ, использованный во время получения данных, вы можете извлечь кэшированные данные и использовать их по мере необходимости.

Это особенно полезно для оптимизации производительности путем повторного использования уже полученных данных или реализации функций, таких как оптимистичные обновления или каскадные обновления данных.

Чтобы использовать `useNuxtData`, убедитесь, что композабл для получения данных (`useFetch`, `useAsyncData` и т.д.) был вызван с явно предоставленным ключом.

:video-accordion{title="Посмотрите видео от LearnVue о useNuxtData" videoId="e-_u6swXRWk"}

## Параметры

- `key`: Уникальный ключ, который идентифицирует кэшированные данные. Этот ключ должен соответствовать тому, который использовался при первоначальном получении данных.

## Возвращаемые значения

- `data`: Реактивная ссылка на кэшированные данные, связанные с предоставленным ключом. Если кэшированных данных не существует, значение будет `null`. Этот `Ref` автоматически обновляется при изменении кэшированных данных, обеспечивая бесшовную реактивность в ваших компонентах.

## Пример

Пример ниже показывает, как вы можете использовать кэшированные данные в качестве заполнителя, пока самые свежие данные загружаются с сервера.

```vue [pages/posts.vue]
<script setup lang="ts">
// Мы можем получить доступ к тем же данным позже, используя ключ 'posts'
const { data } = await useFetch('/api/posts', { key: 'posts' })
</script>
```

```vue [pages/posts/[id\\].vue]
<script setup lang="ts">
// Доступ к кэшированному значению useFetch в posts.vue (родительский маршрут)
const { data: posts } = useNuxtData('posts')

const route = useRoute()

const { data } = useLazyFetch(`/api/posts/${route.params.id}`, {
  key: `post-${route.params.id}`,
  default() {
    // Найти отдельный пост из кэша и установить его как значение по умолчанию.
    return posts.value.find(post => post.id === route.params.id)
  }
})
</script>
```

## Оптимистичные обновления

Пример ниже показывает, как можно реализовать оптимистичные обновления с использованием useNuxtData.

Оптимистичные обновления — это техника, при которой пользовательский интерфейс обновляется немедленно, предполагая, что серверная операция завершится успешно. Если операция в итоге завершается неудачей, интерфейс откатывается к предыдущему состоянию.

```vue [pages/todos.vue]
<script setup lang="ts">
// Мы можем получить доступ к тем же данным позже, используя ключ 'todos'
const { data } = await useAsyncData('todos', () => $fetch('/api/todos'))
</script>
```

```vue [components/NewTodo.vue]
<script setup lang="ts">
const newTodo = ref('')
let previousTodos = []

// Доступ к кэшированному значению useAsyncData в todos.vue
const { data: todos } = useNuxtData('todos')

async function addTodo () {
  return $fetch('/api/addTodo', {
    method: 'post',
    body: {
      todo: newTodo.value
    },
    onRequest () {
      // Сохраняем ранее кэшированное значение для восстановления в случае неудачи запроса.
      previousTodos = todos.value

      // Оптимистично обновляем todos.
      todos.value = [...todos.value, newTodo.value]
    },
    onResponseError () {
      // Откатываем данные, если запрос завершился неудачей.
      todos.value = previousTodos
    },
    async onResponse () {
      // Инвалидируем todos в фоновом режиме, если запрос прошел успешно.
      await refreshNuxtData('todos')
    }
  })
}
</script>
```

## Тип

```ts
useNuxtData<DataT = any> (key: string): { data: Ref<DataT | undefined> }
```