---
title: "useNuxtApp"
description: "Доступ к общему контексту выполнения приложения Nuxt."
links:
  - label: Source
    icon: i-simple-icons-github
    to: https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/app/nuxt.ts
    size: xs
---

`useNuxtApp` — это встроенный композабл, который предоставляет способ доступа к общему контексту выполнения Nuxt, также известному как [контекст Nuxt](/docs/guide/going-further/nuxt-app#the-nuxt-context), который доступен как на клиентской, так и на серверной стороне (но не в маршрутах Nitro). Он помогает получить доступ к экземпляру приложения Vue, хукам времени выполнения, переменным конфигурации времени выполнения и внутренним состояниям, таким как `ssrContext` и `payload`.

```vue [app.vue]
<script setup lang="ts">
const nuxtApp = useNuxtApp()
</script>
```

Если контекст выполнения недоступен в вашей области видимости, `useNuxtApp` выбросит исключение при вызове. Вместо этого вы можете использовать [`tryUseNuxtApp`](#tryusenuxtapp) для композаблов, которые не требуют `nuxtApp`, или просто для проверки доступности контекста без исключения.

<!--
note
По умолчанию общий контекст выполнения Nuxt находится в пространстве имен под опцией [`buildId`](/docs/api/nuxt-config#buildid). Это позволяет поддерживать несколько контекстов выполнения.

## Параметры

- `appName`: необязательное имя приложения. Если вы его не предоставите, используется опция Nuxt `buildId`. В противном случае оно должно совпадать с существующим `buildId`. -->

## Методы

### `provide (name, value)`

`nuxtApp` — это контекст времени выполнения, который можно расширить с помощью [плагинов Nuxt](/docs/guide/directory-structure/plugins). Используйте функцию `provide` для создания плагинов Nuxt, чтобы сделать значения и вспомогательные методы доступными в вашем приложении Nuxt во всех композаблах и компонентах.

Функция `provide` принимает параметры `name` и `value`.

```js
const nuxtApp = useNuxtApp()
nuxtApp.provide('hello', (name) => `Hello ${name}!`)

// Выводит "Hello name!"
console.log(nuxtApp.$hello('name'))
```

Как видно из примера выше, `$hello` стал новой и пользовательской частью контекста `nuxtApp` и доступен во всех местах, где доступен `nuxtApp`.

### `hook(name, cb)`

Хуки, доступные в `nuxtApp`, позволяют настраивать аспекты времени выполнения вашего приложения Nuxt. Вы можете использовать хуки времени выполнения в композаблах Vue.js и [плагинах Nuxt](/docs/guide/directory-structure/plugins) для подключения к жизненному циклу рендеринга.

Функция `hook` полезна для добавления пользовательской логики путем подключения к жизненному циклу рендеринга в определенной точке. Функция `hook` в основном используется при создании плагинов Nuxt.

См. [Хуки времени выполнения](/docs/api/advanced/hooks#app-hooks-runtime) для доступных хуков времени выполнения, вызываемых Nuxt.

```ts [plugins/test.ts]
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('page:start', () => {
    /* ваш код здесь */
  })
  nuxtApp.hook('vue:error', (..._args) => {
    console.log('vue:error')
    // if (import.meta.client) {
    //   console.log(..._args)
    // }
  })
})
```

### `callHook(name, ...args)`

`callHook` возвращает промис при вызове с любым из существующих хуков.

```ts
await nuxtApp.callHook('my-plugin:init')
```

## Свойства

`useNuxtApp()` предоставляет следующие свойства, которые вы можете использовать для расширения и настройки вашего приложения, а также для обмена состоянием, данными и переменными.

### `vueApp`

`vueApp` — это глобальный [экземпляр приложения](https://vuejs.org/api/application.html#application-api) Vue.js, к которому вы можете получить доступ через `nuxtApp`.

Некоторые полезные методы:
- [`component()`](https://vuejs.org/api/application.html#app-component) - Регистрирует глобальный компонент, если передаются и строка имени, и определение компонента, или получает уже зарегистрированный компонент, если передается только имя.
- [`directive()`](https://vuejs.org/api/application.html#app-directive) - Регистрирует глобальную пользовательскую директиву, если передаются и строка имени, и определение директивы, или получает уже зарегистрированную директиву, если передается только имя [(пример)](/docs/guide/directory-structure/plugins#vue-directives).
- [`use()`](https://vuejs.org/api/application.html#app-use) - Устанавливает **[плагин Vue.js](https://vuejs.org/guide/reusability/plugins.html)** [(пример)](/docs/guide/directory-structure/plugins#vue-plugins).

:read-more{icon="i-simple-icons-vuedotjs" to="https://vuejs.org/api/application.html#application-api"}

### `ssrContext`

`ssrContext` генерируется во время серверного рендеринга и доступен только на стороне сервера.

Nuxt предоставляет следующие свойства через `ssrContext`:
- `url` (string) - URL текущего запроса.
- `event` (событие запроса [h3js/h3](https://github.com/h3js/h3)) - Доступ к запросу и ответу текущего маршрута.
- `payload` (object) - Объект полезной нагрузки NuxtApp.

### `payload`

`payload` предоставляет данные и переменные состояния с серверной стороны на клиентскую сторону. Следующие ключи будут доступны на клиенте после их передачи с серверной стороны:

- `serverRendered` (boolean) - Указывает, отрендерен ли ответ на стороне сервера.
- `data` (object) - Когда вы получаете данные из API-эндпоинта, используя [`useFetch`](/docs/api/composables/use-fetch) или [`useAsyncData`](/docs/api/composables/use-async-data), результирующая полезная нагрузка может быть получена из `payload.data`. Эти данные кэшируются и помогают предотвратить повторное получение тех же данных в случае, если идентичный запрос выполняется более одного раза.

  ::code-group
  ```vue [app.vue]
  <script setup lang="ts">
  const { data } = await useAsyncData('count', () => $fetch('/api/count'))
  </script>
  ```
  ```ts [server/api/count.ts]
  export default defineEventHandler(event => {
    return { count: 1 }
  })
  ```
  ::

  После получения значения `count` с помощью [`useAsyncData`](/docs/api/composables/use-async-data) в приведенном выше примере, если вы обратитесь к `payload.data`, вы увидите там записанное значение `{ count: 1 }`.

  При обращении к тому же `payload.data` из [`ssrcontext`](#ssrcontext), вы можете получить доступ к тому же значению и на стороне сервера.

- `state` (object) - Когда вы используете композабл [`useState`](/docs/api/composables/use-state) в Nuxt для установки общего состояния, данные этого состояния доступны через `payload.state.[имя-вашего-состояния]`.

  ```ts [plugins/my-plugin.ts]
  export const useColor = () => useState<string>('color', () => 'pink')

  export default defineNuxtPlugin((nuxtApp) => {
    if (import.meta.server) {
      const color = useColor()
    }
  })
  ```

  Также возможно использовать более продвинутые типы, такие как `ref`, `reactive`, `shallowRef`, `shallowReactive` и `NuxtError`.

  Начиная с [Nuxt v3.4](https://nuxt.com/blog/v3-4#payload-enhancements), можно определить собственный редуктор/восстановитель для типов, которые не поддерживаются Nuxt.

  :video-accordion{title="Посмотрите видео от Alexander Lichter о сериализации полезных нагрузок, особенно в отношении классов" videoId="8w6ffRBs8a4"}

  В приведенном ниже примере мы определяем редуктор (или сериализатор) и восстановитель (или десериализатор) для класса DateTime из [Luxon](https://moment.github.io/luxon/#/), используя плагин полезной нагрузки.

  ```ts [plugins/date-time-payload.ts]
  /**
   * Этот тип плагина запускается очень рано в жизненном цикле Nuxt, до восстановления полезной нагрузки.
   * У вас не будет доступа к роутеру или другим свойствам, внедренным Nuxt.
   *
   * Обратите внимание, что строка "DateTime" является идентификатором типа и должна
   * быть одинаковой как в редукторе, так и в восстановителе.
   */
  export default definePayloadPlugin((nuxtApp) => {
    definePayloadReducer('DateTime', (value) => {
      return value instanceof DateTime && value.toJSON()
    })
    definePayloadReviver('DateTime', (value) => {
      return DateTime.fromISO(value)
    })
  })
  ```

### `isHydrating`

Используйте `nuxtApp.isHydrating` (boolean) для проверки, происходит ли гидратация приложения Nuxt на стороне клиента.

```ts [components/nuxt-error-boundary.ts]
export default defineComponent({
  setup (_props, { slots, emit }) {
    const nuxtApp = useNuxtApp()
    onErrorCaptured((err) => {
      if (import.meta.client && !nuxtApp.isHydrating) {
        // ...
      }
    })
  }
})
```

### `runWithContext`

::note
Вы, вероятно, здесь, потому что получили сообщение "Экземпляр Nuxt недоступен". Пожалуйста, используйте этот метод экономно и сообщайте о примерах, которые вызывают проблемы, чтобы в конечном итоге это можно было решить на уровне фреймворка.
::

Метод `runWithContext` предназначен для вызова функции и предоставления ей явного контекста Nuxt. Обычно контекст Nuxt передается неявно, и вам не нужно об этом беспокоиться. Однако при работе со сложными сценариями `async`/`await` в middleware/плагинах, вы можете столкнуться с ситуациями, когда текущий экземпляр был сброшен после асинхронного вызова.

```ts [middleware/auth.ts]
export default defineNuxtRouteMiddleware(async (to, from) => {
  const nuxtApp = useNuxtApp()
  let user
  try {
    user = await fetchUser()
    // компилятор Vue/Nuxt теряет контекст здесь из-за блока try/catch.
  } catch (e) {
    user = null
  }
  if (!user) {
    // применяем правильный контекст Nuxt к нашему вызову `navigateTo`.
    return nuxtApp.runWithContext(() => navigateTo('/auth'))
  }
})
```

#### Использование

```js
const result = nuxtApp.runWithContext(() => functionWithContext())
```

- `functionWithContext`: Любая функция, которая требует контекста текущего приложения Nuxt. Этот контекст будет автоматически применен корректно.

`runWithContext` вернет все, что возвращает `functionWithContext`.

#### Более глубокое объяснение контекста

Vue.js Composition API (и композаблы Nuxt аналогично) работают, полагаясь на неявный контекст. Во время жизненного цикла Vue устанавливает временный экземпляр текущего компонента (а Nuxt временный экземпляр nuxtApp) в глобальную переменную и сбрасывает ее в том же тике. При рендеринге на стороне сервера существует множество запросов от разных пользователей и nuxtApp, работающих в одном глобальном контексте. Из-за этого Nuxt и Vue немедленно сбрасывают этот глобальный экземпляр, чтобы избежать утечки общей ссылки между двумя пользователями или компонентами.

Что это означает? Composition API и композаблы Nuxt доступны только во время жизненного цикла и в том же тике до любой асинхронной операции:

```js
// --- Внутренности Vue ---
const _vueInstance = null
const getCurrentInstance = () => _vueInstance
// ---

// Vue / Nuxt устанавливает глобальную переменную, ссылающуюся на текущий компонент в _vueInstance при вызове setup()
async function setup() {
  getCurrentInstance() // Работает
  await someAsyncOperation() // Vue сбрасывает контекст в том же тике перед асинхронной операцией!
  getCurrentInstance() // null
}
```

Классическое решение этой проблемы — кэширование текущего экземпляра при первом вызове в локальную переменную, например `const instance = getCurrentInstance()`, и использование ее в следующем вызове композабла, но проблема в том, что любые вложенные вызовы композаблов теперь должны явно принимать экземпляр в качестве аргумента и не зависеть от неявного контекста composition-api. Это ограничение дизайна композаблов, а не проблема как таковая.

Чтобы преодолеть это ограничение, Vue выполняет некоторую работу за кулисами при компиляции кода нашего приложения и восстанавливает контекст после каждого вызова для `<script setup>`:

```js
const __instance = getCurrentInstance() // Генерируется компилятором Vue
getCurrentInstance() // Работает!
await someAsyncOperation() // Vue сбрасывает контекст
__restoreInstance(__instance) // Генерируется компилятором Vue
getCurrentInstance() // Все еще работает!
```

Для лучшего описания того, что на самом деле делает Vue, см. [unjs/unctx#2 (comment)](https://github.com/unjs/unctx/issues/2#issuecomment-942193723).

#### Решение

Здесь можно использовать `runWithContext` для восстановления контекста, аналогично тому, как работает `<script setup>`.

Nuxt внутренне использует [unjs/unctx](https://github.com/unjs/unctx) для поддержки композаблов, аналогично Vue для плагинов и middleware. Это позволяет композаблам, таким как `navigateTo()`, работать без прямой передачи им `nuxtApp` — принося преимущества DX и производительности Composition API всему фреймворку Nuxt.

Композаблы Nuxt имеют тот же дизайн, что и Vue Composition API, и поэтому нуждаются в аналогичном решении для магического выполнения этого преобразования. Ознакомьтесь с [unjs/unctx#2](https://github.com/unjs/unctx/issues/2) (предложение), [unjs/unctx#4](https://github.com/unjs/unctx/pull/4) (реализация преобразования) и [nuxt/framework#3884](https://github.com/nuxt/framework/pull/3884) (интеграция в Nuxt).

Vue в настоящее время поддерживает восстановление асинхронного контекста только для `<script setup>` при использовании async/await. В Nuxt была добавлена поддержка преобразования для `defineNuxtPlugin()` и `defineNuxtRouteMiddleware()`, что означает, что когда вы их используете, Nuxt автоматически преобразует их с восстановлением контекста.

#### Оставшиеся проблемы

Преобразование `unjs/unctx` для автоматического восстановления контекста кажется багованным с операторами `try/catch`, содержащими `await`, что в конечном итоге должно быть решено, чтобы убрать требование обходного пути, предложенного выше.

#### Нативный асинхронный контекст

Используя новую экспериментальную функцию, можно включить поддержку нативного асинхронного контекста, используя [Node.js `AsyncLocalStorage`](https://nodejs.org/api/async_context.html#class-asynclocalstorage) и новую поддержку unctx, чтобы сделать асинхронный контекст доступным **нативно** для **любого вложенного асинхронного композабла** без необходимости преобразования или ручной передачи/вызова с контекстом.

::tip
Поддержка нативного асинхронного контекста в настоящее время работает в Bun и Node.
::

:read-more{to="/docs/guide/going-further/experimental-features#asynccontext"}

## tryUseNuxtApp

Эта функция работает точно так же, как `useNuxtApp`, но возвращает `null`, если контекст недоступен, вместо выброса исключения.

Вы можете использовать её для композаблов, которые не требуют `nuxtApp`, или просто для проверки доступности контекста без исключения.

Пример использования:

```ts [composable.ts]
export function useStandType() {
  // Всегда работает на клиенте
  if (tryUseNuxtApp()) {
    return useRuntimeConfig().public.STAND_TYPE
  } else {
    return process.env.STAND_TYPE
  }
}
```

<!-- ### Параметры

- `appName`: необязательное имя приложения. Если вы его не предоставите, используется опция Nuxt `buildId`. В противном случае оно должно совпадать с существующим `buildId`. -->