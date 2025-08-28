---
title: "useFetch"
description: "Получение данных из API endpoint с помощью SSR-совместимого композабла."
links:
  - label: Source
    icon: i-simple-icons-github
    to: https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/app/composables/fetch.ts
    size: xs
---

Этот композабл предоставляет удобную обертку вокруг [`useAsyncData`](/docs/api/composables/use-async-data) и [`$fetch`](/docs/api/utils/dollarfetch).
Он автоматически генерирует ключ на основе URL и опций fetch, предоставляет подсказки типов для URL запроса на основе серверных маршрутов и выводит тип ответа API.

::note
`useFetch` — это композабл, предназначенный для прямого вызова в setup функции, плагине или middleware маршрута. Он возвращает реактивные композаблы и обрабатывает добавление ответов в Nuxt payload, чтобы они могли передаваться с сервера на клиент без повторного получения данных на клиентской стороне при гидратации страницы.
::

## Использование

```vue [pages/modules.vue]
<script setup lang="ts">
const { data, status, error, refresh, clear } = await useFetch('/api/modules', {
  pick: ['title']
})
</script>
```

::warning
Если вы используете пользовательскую обертку useFetch, не используйте await в композабле, так как это может привести к неожиданному поведению. Пожалуйста, следуйте [этому рецепту](/docs/guide/recipes/custom-usefetch#custom-usefetch) для получения дополнительной информации о том, как создать пользовательский загрузчик асинхронных данных.
::

::note
`data`, `status` и `error` являются Vue refs, и к ним следует обращаться с `.value` при использовании внутри `<script setup>`, в то время как `refresh`/`execute` и `clear` являются обычными функциями.
::

Используя опцию `query`, вы можете добавить параметры поиска к вашему запросу. Эта опция расширена из [unjs/ofetch](https://github.com/unjs/ofetch) и использует [unjs/ufo](https://github.com/unjs/ufo) для создания URL. Объекты автоматически преобразуются в строки.

```ts
const param1 = ref('value1')
const { data, status, error, refresh } = await useFetch('/api/modules', {
  query: { param1, param2: 'value2' }
})
```

Приведенный выше пример приводит к `https://api.nuxt.com/modules?param1=value1&param2=value2`.

Вы также можете использовать [перехватчики](https://github.com/unjs/ofetch#%EF%B8%8F-interceptors):

```ts
const { data, status, error, refresh, clear } = await useFetch('/api/auth/login', {
  onRequest({ request, options }) {
    // Установить заголовки запроса
    // обратите внимание, что это зависит от ofetch >= 1.4.0 - возможно, вам потребуется обновить ваш lockfile
    options.headers.set('Authorization', '...')
  },
  onRequestError({ request, options, error }) {
    // Обработать ошибки запроса
  },
  onResponse({ request, response, options }) {
    // Обработать данные ответа
    localStorage.setItem('token', response._data.token)
  },
  onResponseError({ request, response, options }) {
    // Обработать ошибки ответа
  }
})
```

### Реактивные ключи и общее состояние

Вы можете использовать computed ref или обычный ref в качестве URL, что позволяет динамически загружать данные, которые автоматически обновляются при изменении URL:

```vue [pages/[id\\].vue]
<script setup lang="ts">
const route = useRoute()
const id = computed(() => route.params.id)

// Когда маршрут изменяется и id обновляется, данные будут автоматически перезагружены
const { data: post } = await useFetch(() => `/api/posts/${id.value}`)
</script>
```

При использовании `useFetch` с одинаковым URL и опциями в нескольких компонентах, они будут использовать одни и те же refs `data`, `error` и `status`. Это обеспечивает согласованность между компонентами.

::tip
Состояние с ключом, созданное с помощью `useFetch`, может быть получено в вашем Nuxt приложении с использованием [`useNuxtData`](/docs/api/composables/use-nuxt-data).
::

::warning
`useFetch` является зарезервированным именем функции, преобразуемым компилятором, поэтому вы не должны называть свою собственную функцию `useFetch`.
::

::warning
Если вы столкнулись с тем, что переменная `data`, деструктурированная из `useFetch`, возвращает строку, а не JSON-объект, убедитесь, что ваш компонент не включает оператор импорта типа `import { useFetch } from '@vueuse/core'`.
::

:video-accordion{title="Посмотрите видео от Alexander Lichter, чтобы избежать неправильного использования useFetch" videoId="njsGVmcWviY"}

:read-more{to="/docs/getting-started/data-fetching"}

## Тип

```ts [Сигнатура]
function useFetch<DataT, ErrorT>(
  url: string | Request | Ref<string | Request> | (() => string | Request),
  options?: UseFetchOptions<DataT>
): Promise<AsyncData<DataT, ErrorT>>

type UseFetchOptions<DataT> = {
  key?: MaybeRefOrGetter<string>
  method?: string
  query?: SearchParams
  params?: SearchParams
  body?: RequestInit['body'] | Record<string, any>
  headers?: Record<string, string> | [key: string, value: string][] | Headers
  baseURL?: string
  server?: boolean
  lazy?: boolean
  immediate?: boolean
  getCachedData?: (key: string, nuxtApp: NuxtApp, ctx: AsyncDataRequestContext) => DataT | undefined
  deep?: boolean
  dedupe?: 'cancel' | 'defer'
  default?: () => DataT
  transform?: (input: DataT) => DataT | Promise<DataT>
  pick?: string[]
  $fetch?: typeof globalThis.$fetch
  watch?: MultiWatchSources | false
}

type AsyncDataRequestContext = {
  /** Причина данного запроса данных */
  cause: 'initial' | 'refresh:manual' | 'refresh:hook' | 'watch'
}

type AsyncData<DataT, ErrorT> = {
  data: Ref<DataT | undefined>
  refresh: (opts?: AsyncDataExecuteOptions) => Promise<void>
  execute: (opts?: AsyncDataExecuteOptions) => Promise<void>
  clear: () => void
  error: Ref<ErrorT | undefined>
  status: Ref<AsyncDataRequestStatus>
}

interface AsyncDataExecuteOptions {
  dedupe?: 'cancel' | 'defer'
}

type AsyncDataRequestStatus = 'idle' | 'pending' | 'success' | 'error'
```

## Параметры

- `URL` (`string | Request | Ref<string | Request> | () => string | Request`): URL или запрос для получения данных. Может быть строкой, объектом Request, Vue ref или функцией, возвращающей строку/Request. Поддерживает реактивность для динамических эндпоинтов.

- `options` (object): Конфигурация для fetch-запроса. Расширяет опции [unjs/ofetch](https://github.com/unjs/ofetch) и [`AsyncDataOptions`](/docs/api/composables/use-async-data#params). Все опции могут быть статическим значением, `ref` или вычисляемым значением.

| Опция | Тип | По умолчанию | Описание |
| ---| --- | --- | --- |
| `key` | `MaybeRefOrGetter<string>` | авто-генерация | Уникальный ключ для дедупликации. Если не указан, генерируется из URL и опций. |
| `method` | `string` | `'GET'` | HTTP-метод запроса. |
| `query` | `object` | - | Параметры запроса/поиска для добавления к URL. Псевдоним: `params`. Поддерживает refs/computed. |
| `params` | `object` | - | Псевдоним для `query`. |
| `body` | `RequestInit['body'] \| Record<string, any>` | - | Тело запроса. Объекты автоматически преобразуются в строку. Поддерживает refs/computed. |
| `headers` | `Record<string, string> \| [key, value][] \| Headers` | - | Заголовки запроса. |
| `baseURL` | `string` | - | Базовый URL для запроса. |
| `timeout` | `number` | - | Таймаут в миллисекундах для прерывания запроса. |
| `cache` | `boolean \| string` | - | Управление кешем. Boolean отключает кеш, или используйте значения Fetch API: `default`, `no-store` и т.д. |
| `server` | `boolean` | `true` | Выполнять ли запрос на сервере. |
| `lazy` | `boolean` | `false` | Если true, разрешается после загрузки маршрута (не блокирует навигацию). |
| `immediate` | `boolean` | `true` | Если false, предотвращает немедленное выполнение запроса. |
| `default` | `() => DataT` | - | Фабрика для значения по умолчанию `data` до разрешения async. |
| `transform` | `(input: DataT) => DataT \| Promise<DataT>` | - | Функция для преобразования результата после разрешения. |
| `getCachedData`| `(key, nuxtApp, ctx) => DataT \| undefined` | - | Функция для возврата кешированных данных. См. ниже значение по умолчанию. |
| `pick` | `string[]` | - | Выбрать только указанные ключи из результата. |
| `watch` | `MultiWatchSources \| false` | - | Массив реактивных источников для отслеживания и автообновления. `false` отключает отслеживание. |
| `deep` | `boolean` | `false` | Возвращать данные в глубоком ref-объекте. |
| `dedupe` | `'cancel' \| 'defer'` | `'cancel'` | Избегать получения одного и того же ключа более одного раза одновременно. |
| `$fetch` | `typeof globalThis.$fetch` | - | Пользовательская реализация $fetch. |

::note
Всем опциям fetch можно присвоить значение `computed` или `ref`. Они будут отслеживаться, и новые запросы будут выполняться автоматически при обновлении значений.
::

**getCachedData по умолчанию:**

```ts
const getDefaultCachedData = (key, nuxtApp, ctx) => nuxtApp.isHydrating 
 ? nuxtApp.payload.data[key] 
 : nuxtApp.static.data[key]
```
Это кеширует данные только когда `experimental.payloadExtraction` в `nuxt.config` включен.

## Возвращаемые значения

| Название | Тип | Описание |
| --- | --- |--- |
| `data` | `Ref<DataT \| undefined>` | Результат асинхронного запроса данных. |
| `refresh` | `(opts?: AsyncDataExecuteOptions) => Promise<void>` | Функция для ручного обновления данных. По умолчанию Nuxt ждет завершения `refresh` перед тем, как его можно будет выполнить снова. |
| `execute` | `(opts?: AsyncDataExecuteOptions) => Promise<void>` | Псевдоним для `refresh`. |
| `error` | `Ref<ErrorT \| undefined>` | Объект ошибки, если получение данных не удалось. |
| `status` | `Ref<'idle' \| 'pending' \| 'success' \| 'error'>` | Статус запроса данных. Возможные значения см. ниже. |
| `clear` | `() => void` | Сбрасывает `data` в `undefined` (или значение `options.default()`, если предоставлено), `error` в `undefined`, устанавливает `status` в `idle` и отменяет все ожидающие запросы. |

### Значения статуса

- `idle`: Запрос не начат (например, `{ immediate: false }` или `{ server: false }` при серверном рендеринге)
- `pending`: Запрос выполняется
- `success`: Запрос успешно завершен
- `error`: Запрос завершился с ошибкой

::note
Если вы не получили данные на сервере (например, с `server: false`), то данные _не будут_ получены до завершения гидратации. Это означает, что даже если вы используете await `useFetch` на клиентской стороне, `data` останется null внутри `<script setup>`.
::

### Примеры

:link-example{to="/docs/examples/advanced/use-custom-fetch-composable"}

:link-example{to="/docs/examples/features/data-fetching"}