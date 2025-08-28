---
title: "useCookie"
description: "useCookie - это SSR-совместимый композабл для чтения и записи cookies."
links:
  - label: Source
    icon: i-simple-icons-github
    to: https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/app/composables/cookie.ts
    size: xs
---

## Использование

В ваших страницах, компонентах и плагинах вы можете использовать `useCookie` для чтения и записи cookies SSR-совместимым способом.

```ts
const cookie = useCookie(name, options)
```

::note
`useCookie` работает только в [контексте Nuxt](/docs/guide/going-further/nuxt-app#the-nuxt-context).
::

::tip
Возвращаемый ref будет автоматически сериализовать и десериализовать значения cookie в JSON.
::

## Тип

```ts [Сигнатура]
import type { Ref } from 'vue'
import type { CookieParseOptions, CookieSerializeOptions } from 'cookie-es'

export interface CookieOptions<T = any> extends Omit<CookieSerializeOptions & CookieParseOptions, 'decode' | 'encode'> {
  decode?(value: string): T
  encode?(value: T): string
  default?: () => T | Ref<T>
  watch?: boolean | 'shallow'
  readonly?: boolean
}

export interface CookieRef<T> extends Ref<T> {}

export function useCookie<T = string | null | undefined>(
  name: string,
  options?: CookieOptions<T>
): CookieRef<T>
```

## Параметры

`name`: Имя cookie.

`options`: Опции для управления поведением cookie. Объект может иметь следующие свойства:

Большинство опций будут переданы напрямую в пакет [cookie](https://github.com/jshttp/cookie).

| Свойство | Тип | По умолчанию | Описание |
| --- | --- | --- | --- |
| `decode` | `(value: string) => T` | `decodeURIComponent` + [destr](https://github.com/unjs/destr). | Пользовательская функция для декодирования значения cookie. Поскольку значение cookie имеет ограниченный набор символов (и должно быть простой строкой), эта функция может использоваться для декодирования ранее закодированного значения cookie в строку JavaScript или другой объект. <br/> **Примечание:** Если эта функция выбросит ошибку, исходное, недекодированное значение cookie будет возвращено как значение cookie. |
| `encode` | `(value: T) => string` | `JSON.stringify` + `encodeURIComponent` | Пользовательская функция для кодирования значения cookie. Поскольку значение cookie имеет ограниченный набор символов (и должно быть простой строкой), эта функция может использоваться для кодирования значения в строку, подходящую для значения cookie. |
| `default` | `() => T \| Ref<T>` | `undefined` | Функция, возвращающая значение по умолчанию, если cookie не существует. Функция также может возвращать `Ref`. |
| `watch` | `boolean \| 'shallow'` | `true`  | Следить ли за изменениями и обновлять cookie. `true` для глубокого наблюдения, `'shallow'` для поверхностного наблюдения, т.е. изменения данных только для свойств верхнего уровня, `false` для отключения. <br/> **Примечание:** Обновляйте значения `useCookie` вручную, когда cookie изменился с помощью [`refreshCookie`](/docs/api/utils/refresh-cookie). |
| `readonly` | `boolean` | `false` | Если `true`, отключает запись в cookie. |
| `maxAge` | `number` | `undefined` | Максимальный возраст в секундах для cookie, т.е. значение для атрибута [`Max-Age` `Set-Cookie`](https://tools.ietf.org/html/rfc6265#section-5.2.2). Заданное число будет преобразовано в целое число путем округления вниз. По умолчанию максимальный возраст не установлен. |
| `expires` | `Date` | `undefined` | Дата истечения срока действия cookie. По умолчанию срок действия не установлен. Большинство клиентов будут считать это "непостоянным cookie" и удалят его при условии, например, выхода из приложения веб-браузера. <br/> **Примечание:** [Спецификация модели хранения cookie](https://tools.ietf.org/html/rfc6265#section-5.3) гласит, что если установлены и `expires`, и `maxAge`, то `maxAge` имеет приоритет, но не все клиенты могут это соблюдать, поэтому если установлены оба, они должны указывать на одну и ту же дату и время! <br/>Если ни `expires`, ни `maxAge` не установлены, cookie будет только сессионным и удалится, когда пользователь закроет браузер. |
| `httpOnly` | `boolean` | `false` | Устанавливает атрибут HttpOnly. <br/> **Примечание:** Будьте осторожны при установке этого в `true`, поскольку совместимые клиенты не позволят клиентскому JavaScript видеть cookie в `document.cookie`. |
| `secure` | `boolean` | `false` | Устанавливает атрибут [`Secure` `Set-Cookie`](https://tools.ietf.org/html/rfc6265#section-5.2.5). <br/>**Примечание:** Будьте осторожны при установке этого в `true`, поскольку совместимые клиенты не будут отправлять cookie обратно на сервер в будущем, если браузер не имеет HTTPS-соединения. Это может привести к ошибкам гидратации. |
| `partitioned` | `boolean` | `false` | Устанавливает атрибут [`Partitioned` `Set-Cookie`](https://datatracker.ietf.org/doc/html/draft-cutler-httpbis-partitioned-cookies#section-2.1). <br/>**Примечание:** Это атрибут, который еще не полностью стандартизирован и может измениться в будущем. <br/>Это также означает, что многие клиенты могут игнорировать этот атрибут, пока не поймут его.<br/>Больше информации можно найти в [предложении](https://github.com/privacycg/CHIPS). |
| `domain` | `string` | `undefined` | Устанавливает атрибут [`Domain` `Set-Cookie`](https://tools.ietf.org/html/rfc6265#section-5.2.3). По умолчанию домен не установлен, и большинство клиентов будут считать применение cookie только к текущему домену. |
| `path` | `string` | `'/'` | Устанавливает атрибут [`Path` `Set-Cookie`](https://tools.ietf.org/html/rfc6265#section-5.2.4). По умолчанию путь считается ["путем по умолчанию"](https://tools.ietf.org/html/rfc6265#section-5.1.4). |
| `sameSite` | `boolean \| string` | `undefined` | Устанавливает атрибут [`SameSite` `Set-Cookie`](https://tools.ietf.org/html/draft-ietf-httpbis-rfc6265bis-03#section-4.1.2.7). <br/>- `true` установит атрибут `SameSite` в `Strict` для строгого принуждения same-site.<br/>- `false` не установит атрибут `SameSite`.<br/>- `'lax'` установит атрибут `SameSite` в `Lax` для мягкого принуждения same-site.<br/>- `'none'` установит атрибут `SameSite` в `None` для явного cross-site cookie.<br/>- `'strict'` установит атрибут `SameSite` в `Strict` для строгого принуждения same-site. |

## Возвращаемые значения

Возвращает Vue `Ref<T>`, представляющий значение cookie. Обновление ref обновит cookie (если не установлен `readonly`). Ref совместим с SSR и будет работать как на клиенте, так и на сервере.

## Примеры

### Базовое использование

Пример ниже создает cookie с именем `counter`. Если cookie не существует, изначально ему присваивается случайное значение. Всякий раз, когда мы обновляем переменную `counter`, cookie будет обновляться соответственно.

```vue [app.vue]
<script setup lang="ts">
const counter = useCookie('counter')

counter.value = counter.value || Math.round(Math.random() * 1000)
</script>

<template>
  <div>
    <h1>Счетчик: {{ counter || '-' }}</h1>
    <button @click="counter = null">сбросить</button>
    <button @click="counter--">-</button>
    <button @click="counter++">+</button>
  </div>
</template>
```

### Cookies только для чтения

```vue
<script setup lang="ts">
const user = useCookie(
  'userInfo',
  {
    default: () => ({ score: -1 }),
    watch: false
  }
)

if (user.value) {
  // фактический cookie `userInfo` не будет обновлен
  user.value.score++
}
</script>

<template>
  <div>Счет пользователя: {{ user?.score }}</div>
</template>
```

### Записываемые cookies

```vue
<script setup lang="ts">
const list = useCookie(
  'list',
  {
    default: () => [],
    watch: 'shallow'
  }
)

function add() {
  list.value?.push(Math.round(Math.random() * 1000))
  // cookie list не будет обновлен этим изменением
}

function save() {
  if (list.value) {
    // фактический cookie `list` будет обновлен
    list.value = [...list.value]
  }
}
</script>

<template>
  <div>
    <h1>Список</h1>
    <pre>{{ list }}</pre>
    <button @click="add">Добавить</button>
    <button @click="save">Сохранить</button>
  </div>
</template>
```

### Cookies в API маршрутах

Вы можете использовать `getCookie` и `setCookie` из пакета [`h3`](https://github.com/h3js/h3) для установки cookies в серверных API маршрутах.

```ts [server/api/counter.ts]
export default defineEventHandler(event => {
  // Читаем cookie счетчика
  let counter = getCookie(event, 'counter') || 0

  // Увеличиваем cookie счетчика на 1
  setCookie(event, 'counter', ++counter)

  // Отправляем JSON ответ
  return { counter }
})
```

:link-example{to="/docs/examples/advanced/use-cookie"}