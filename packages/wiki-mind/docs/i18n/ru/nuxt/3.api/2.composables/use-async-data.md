---
title: "useAsyncData"
description: "useAsyncData предоставляет доступ к данным, которые разрешаются асинхронно в SSR-совместимом композабле."
links:
  - label: Source
    icon: i-simple-icons-github
    to: https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/app/composables/asyncData.ts
    size: xs
---

В ваших страницах, компонентах и плагинах вы можете использовать useAsyncData для получения доступа к данным, которые разрешаются асинхронно.

::note
[`useAsyncData`](/docs/api/composables/use-async-data) — это композабл, предназначенный для прямого вызова в [контексте Nuxt](/docs/guide/going-further/nuxt-app#the-nuxt-context). Он возвращает реактивные композаблы и обрабатывает добавление ответов в полезную нагрузку Nuxt, чтобы они могли передаваться с сервера на клиент **без повторного получения данных на стороне клиента** при гидратации страницы.
::

## Использование

```vue [pages/index.vue]
<script setup lang="ts">
const { data, status, error, refresh, clear } = await useAsyncData(
  'mountains',
  () => $fetch('https://api.nuxtjs.dev/mountains')
)
</script>
```

::warning
Если вы используете пользовательскую обертку useAsyncData, не используйте await в композабле, так как это может привести к неожиданному поведению. Пожалуйста, следуйте [этому рецепту](/docs/guide/recipes/custom-usefetch#custom-usefetch) для получения дополнительной информации о том, как создать пользовательский загрузчик асинхронных данных.
::

::note
`data`, `status` и `error` являются Vue refs и к ним следует обращаться с `.value` при использовании внутри `<script setup>`, в то время как `refresh`/`execute` и `clear` являются обычными функциями.
::

### Отслеживание параметров

Встроенная опция `watch` позволяет автоматически перезапускать функцию загрузки при обнаружении любых изменений.

```vue [pages/index.vue]
<script setup lang="ts">
const page = ref(1)
const { data: posts } = await useAsyncData(
  'posts',
  () => $fetch('https://fakeApi.com/posts', {
    params: {
      page: page.value
    }
  }), {
    watch: [page]
  }
)
</script>
```

### Реактивные ключи

Вы можете использовать вычисляемый ref, обычный ref или функцию-геттер в качестве ключа, что позволяет динамически загружать данные, которые автоматически обновляются при изменении ключа:

```vue [pages/[id\\].vue]
<script setup lang="ts">
const route = useRoute()
const userId = computed(() => `user-${route.params.id}`)

// Когда маршрут изменяется и userId обновляется, данные будут автоматически перезагружены
const { data: user } = useAsyncData(
  userId,
  () => fetchUserById(route.params.id)
)
</script>
```

::warning
[`useAsyncData`](/docs/api/composables/use-async-data) является зарезервированным именем функции, преобразуемым компилятором, поэтому вы не должны называть свою собственную функцию [`useAsyncData`](/docs/api/composables/use-async-data).
::

:read-more{to="/docs/getting-started/data-fetching#useasyncdata"}

## Параметры

- `key`: уникальный ключ для обеспечения правильной дедупликации получения данных между запросами. Если вы не предоставите ключ, то будет сгенерирован ключ, уникальный для имени файла и номера строки экземпляра `useAsyncData`.
- `handler`: асинхронная функция, которая должна возвращать истинное значение (например, она не должна быть `undefined` или `null`), иначе запрос может быть продублирован на стороне клиента.
::warning
Функция `handler` должна быть **без побочных эффектов** для обеспечения предсказуемого поведения во время SSR и CSR гидратации. Если вам нужно вызвать побочные эффекты, используйте утилиту [`callOnce`](/docs/api/utils/call-once) для этого.
::
- `options`:
  - `server`: получать ли данные на сервере (по умолчанию `true`)
  - `lazy`: разрешать ли асинхронную функцию после загрузки маршрута, вместо блокировки клиентской навигации (по умолчанию `false`)
  - `immediate`: когда установлено в `false`, предотвратит немедленное выполнение запроса (по умолчанию `true`)
  - `default`: фабричная функция для установки значения по умолчанию для `data`, до разрешения асинхронной функции - полезно с опцией `lazy: true` или `immediate: false`
  - `transform`: функция, которая может использоваться для изменения результата функции `handler` после разрешения
  - `getCachedData`: Предоставьте функцию, которая возвращает кэшированные данные. Возвращаемое значение `null` или `undefined` вызовет получение данных. По умолчанию это:
    ```ts
    const getDefaultCachedData = (key, nuxtApp, ctx) => nuxtApp.isHydrating 
      ? nuxtApp.payload.data[key] 
      : nuxtApp.static.data[key]
    ```
    Которая кэширует данные только когда `experimental.payloadExtraction` в `nuxt.config` включен.
  - `pick`: выбрать только указанные ключи в этом массиве из результата функции `handler`
  - `watch`: отслеживать реактивные источники для автообновления
  - `deep`: возвращать данные в глубоком ref объекте. По умолчанию `false` для возврата данных в поверхностном ref объекте, что может улучшить производительность, если ваши данные не нуждаются в глубокой реактивности.
  - `dedupe`: избегать получения одного и того же ключа более одного раза за раз (по умолчанию `cancel`). Возможные варианты:
    - `cancel` - отменяет существующие запросы при создании нового
    - `defer` - не делает новых запросов вообще, если есть ожидающий запрос

::note
Под капотом `lazy: false` использует `<Suspense>` для блокировки загрузки маршрута до получения данных. Рассмотрите использование `lazy: true` и реализацию состояния загрузки вместо этого для более быстрого пользовательского опыта.
::

::read-more{to="/docs/api/composables/use-lazy-async-data"}
Вы можете использовать `useLazyAsyncData` для получения того же поведения, что и `lazy: true` с `useAsyncData`.
::

:video-accordion{title="Посмотрите видео от Alexander Lichter о клиентском кэшировании с getCachedData" videoId="aQPR0xn-MMk"}

### Общее состояние и согласованность опций

При использовании одного и того же ключа для нескольких вызовов `useAsyncData`, они будут разделять одни и те же `data`, `error` и `status` refs. Это обеспечивает согласованность между компонентами, но требует согласованности опций.

Следующие опции **должны быть согласованными** во всех вызовах с одним и тем же ключом:
- функция `handler`
- опция `deep`
- функция `transform`
- массив `pick`
- функция `getCachedData`
- значение `default`

Следующие опции **могут отличаться** без вызова предупреждений:
- `server`
- `lazy`
- `immediate`
- `dedupe`
- `watch`

```ts
// ❌ Это вызовет предупреждение в разработке
const { data: users1 } = useAsyncData('users', () => $fetch('/api/users'), { deep: false })
const { data: users2 } = useAsyncData('users', () => $fetch('/api/users'), { deep: true })

// ✅ Это разрешено
const { data: users1 } = useAsyncData('users', () => $fetch('/api/users'), { immediate: true })
const { data: users2 } = useAsyncData('users', () => $fetch('/api/users'), { immediate: false })
```

::tip
Состояние с ключом, созданное с помощью `useAsyncData`, может быть получено в вашем Nuxt приложении с использованием [`useNuxtData`](/docs/api/composables/use-nuxt-data).
::

## Возвращаемые значения

- `data`: результат асинхронной функции, которая передается.
- `refresh`/`execute`: функция, которая может использоваться для обновления данных, возвращаемых функцией `handler`.
- `error`: объект ошибки, если получение данных не удалось.
- `status`: строка, указывающая статус запроса данных:
  - `idle`: когда запрос не был запущен, например:
    - когда `execute` еще не был вызван и установлено `{ immediate: false }`
    - при рендеринге HTML на сервере и установлено `{ server: false }`
  - `pending`: запрос выполняется
  - `success`: запрос завершился успешно
  - `error`: запрос завершился с ошибкой
- `clear`: функция, которая может использоваться для установки `data` в `undefined` (или значение `options.default()`, если предоставлено), установки `error` в `undefined`, установки `status` в `idle` и пометки всех текущих ожидающих запросов как отмененных.

По умолчанию Nuxt ждет завершения `refresh` перед тем, как его можно будет выполнить снова.

::note
Если вы не получили данные на сервере (например, с `server: false`), то данные _не будут_ получены до завершения гидратации. Это означает, что даже если вы используете await [`useAsyncData`](/docs/api/composables/use-async-data) на стороне клиента, `data` останется `undefined` внутри `<script setup>`.
::

## Тип

```ts [Signature]
function useAsyncData<DataT, DataE>(
  handler: (nuxtApp?: NuxtApp) => Promise<DataT>,
  options?: AsyncDataOptions<DataT>
): AsyncData<DataT, DataE>
function useAsyncData<DataT, DataE>(
  key: MaybeRefOrGetter<string>,
  handler: (nuxtApp?: NuxtApp) => Promise<DataT>,
  options?: AsyncDataOptions<DataT>
): Promise<AsyncData<DataT, DataE>>

type AsyncDataOptions<DataT> = {
  server?: boolean
  lazy?: boolean
  immediate?: boolean
  deep?: boolean
  dedupe?: 'cancel' | 'defer'
  default?: () => DataT | Ref<DataT> | null
  transform?: (input: DataT) => DataT | Promise<DataT>
  pick?: string[]
  watch?: MultiWatchSources | false
  getCachedData?: (key: string, nuxtApp: NuxtApp, ctx: AsyncDataRequestContext) => DataT | undefined
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
};

interface AsyncDataExecuteOptions {
  dedupe?: 'cancel' | 'defer'
}

type AsyncDataRequestStatus = 'idle' | 'pending' | 'success' | 'error'
```

:read-more{to="/docs/getting-started/data-fetching"}