---
title: "createError"
description: "Создание объекта ошибки с дополнительными метаданными."
links:
  - label: Source
    icon: i-simple-icons-github
    to: https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/app/composables/error.ts
    size: xs
---

Вы можете использовать эту функцию для создания объекта ошибки с дополнительными метаданными. Она применима как в Vue, так и в Nitro частях вашего приложения и предназначена для генерации исключений.

## Параметры

- `err`: `string | { cause, data, message, name, stack, statusCode, statusMessage, fatal }`

Вы можете передать либо строку, либо объект в функцию `createError`. Если вы передаете строку, она будет использована как `message` ошибки, а `statusCode` по умолчанию будет равен `500`. Если вы передаете объект, вы можете установить несколько свойств ошибки, таких как `statusCode`, `message` и другие свойства ошибки.

## В Vue приложении

Если вы выбрасываете ошибку, созданную с помощью `createError`:

- на стороне сервера, это вызовет полноэкранную страницу ошибки, которую можно очистить с помощью `clearError`.
- на стороне клиента, это выбросит некритичную ошибку для вашей обработки. Если вам нужно вызвать полноэкранную страницу ошибки, то вы можете сделать это, установив `fatal: true`.

### Пример

```vue [pages/movies/[slug\\].vue]
<script setup lang="ts">
const route = useRoute()
const { data } = await useFetch(`/api/movies/${route.params.slug}`)
if (!data.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
}
</script>
```

## В API маршрутах

Используйте `createError` для запуска обработки ошибок в серверных API маршрутах.

### Пример

```ts [server/api/error.ts]
export default eventHandler(() => {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found'
  })
})
```

В API маршрутах рекомендуется использовать `createError`, передавая объект с коротким `statusMessage`, поскольку к нему можно получить доступ на стороне клиента. В противном случае `message`, переданное в `createError` в API маршруте, не будет передано клиенту. В качестве альтернативы вы можете использовать свойство `data` для передачи данных обратно клиенту. В любом случае всегда избегайте помещения динамического пользовательского ввода в сообщение, чтобы избежать потенциальных проблем с безопасностью.

:read-more{to="/docs/getting-started/error-handling"}