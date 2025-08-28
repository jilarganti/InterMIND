---
title: "defineNuxtPlugin"
description: "defineNuxtPlugin() - это вспомогательная функция для создания плагинов Nuxt."
links:
  - label: Source
    icon: i-simple-icons-github
    to: https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/app/nuxt.ts
    size: xs
---

`defineNuxtPlugin` - это вспомогательная функция для создания плагинов Nuxt с расширенной функциональностью и типобезопасностью. Эта утилита нормализует различные форматы плагинов в согласованную структуру, которая беспрепятственно работает в системе плагинов Nuxt.

```ts twoslash [plugins/hello.ts]
export default defineNuxtPlugin((nuxtApp) => {
  // Выполняем что-то с nuxtApp
})
```

:read-more{to="/docs/guide/directory-structure/plugins#creating-plugins"}

## Тип

```ts
defineNuxtPlugin<T extends Record<string, unknown>>(plugin: Plugin<T> | ObjectPlugin<T>): Plugin<T> & ObjectPlugin<T>

type Plugin<T> = (nuxt: [NuxtApp](/docs/guide/going-further/internals#the-nuxtapp-interface)) => Promise<void> | Promise<{ provide?: T }> | void | { provide?: T }

interface ObjectPlugin<T> {
  name?: string
  enforce?: 'pre' | 'default' | 'post'
  dependsOn?: string[]
  order?: number
  parallel?: boolean
  setup?: Plugin<T>
  hooks?: Partial<[RuntimeNuxtHooks](/docs/api/advanced/hooks#app-hooks-runtime)>
  env?: {
    islands?: boolean
  }
}
```

## Параметры

**plugin**: Плагин может быть определен двумя способами:
1. **Функциональный плагин**: Функция, которая получает экземпляр [`NuxtApp`](/docs/guide/going-further/internals#the-nuxtapp-interface) и может возвращать промис с потенциальным объектом со свойством [`provide`](/docs/guide/directory-structure/plugins#providing-helpers), если вы хотите предоставить помощник в экземпляре [`NuxtApp`](/docs/guide/going-further/internals#the-nuxtapp-interface).
2. **Объектный плагин**: Объект, который может включать различные свойства для настройки поведения плагина, такие как `name`, `enforce`, `dependsOn`, `order`, `parallel`, `setup`, `hooks` и `env`.

| Свойство           | Тип                                                                 | Обязательно | Описание                                                                                                     |
| ------------------ | -------------------------------------------------------------------- | -------- | --------------------------------------------------------------------------------------------------------------- |
| `name` | `string` | `false` | Необязательное имя для плагина, полезно для отладки и управления зависимостями. |
| `enforce` | `'pre'` \| `'default'` \| `'post'` | `false` | Контролирует, когда плагин выполняется относительно других плагинов. |
| `dependsOn` | `string[]` | `false` | Массив имен плагинов, от которых зависит данный плагин. Обеспечивает правильный порядок выполнения. |
| `order` | `number` | `false` | Это позволяет более детально контролировать порядок плагинов и должно использоваться только опытными пользователями. **Переопределяет значение `enforce` и используется для сортировки плагинов.** |
| `parallel` | `boolean` | `false` | Выполнять ли плагин параллельно с другими параллельными плагинами. |
| `setup` | `Plugin<T>`{lang="ts"}  | `false` | Основная функция плагина, эквивалентная функциональному плагину. |
| `hooks` | `Partial<RuntimeNuxtHooks>`{lang="ts"}  | `false` | Хуки времени выполнения приложения Nuxt для прямой регистрации. |
| `env` | `{ islands?: boolean }`{lang="ts"}  | `false` | Установите это значение в `false`, если вы не хотите, чтобы плагин выполнялся при рендеринге серверных или островных компонентов. |

:video-accordion{title="Посмотрите видео от Alexander Lichter об объектном синтаксисе для плагинов Nuxt" videoId="2aXZyXB1QGQ"}

## Примеры

### Базовое использование

Пример ниже демонстрирует простой плагин, который добавляет глобальную функциональность:

```ts twoslash [plugins/hello.ts]
export default defineNuxtPlugin((nuxtApp) => {
  // Добавляем глобальный метод
  return {
    provide: {
      hello: (name: string) => `Привет ${name}!`
    }
  }
})
```

### Плагин с объектным синтаксисом

Пример ниже показывает объектный синтаксис с расширенной конфигурацией:

```ts twoslash [plugins/advanced.ts]
export default defineNuxtPlugin({
  name: 'my-plugin',
  enforce: 'pre',
  async setup (nuxtApp) {
    // Логика настройки плагина
    const data = await $fetch('/api/config')
    
    return {
      provide: {
        config: data
      }
    }
  },
  hooks: {
    'app:created'() {
      console.log('Приложение создано!')
    }
  },
})
```