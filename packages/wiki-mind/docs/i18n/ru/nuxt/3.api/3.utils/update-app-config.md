---
title: "updateAppConfig"
description: "Обновление конфигурации приложения во время выполнения."
links:
  - label: Source
    icon: i-simple-icons-github
    to: https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/app/config.ts
    size: xs
---

::note
Обновляет [`app.config`](/docs/guide/directory-structure/app-config) используя глубокое присваивание. Существующие (вложенные) свойства будут сохранены.
::

## Использование

```js
const appConfig = useAppConfig() // { foo: 'bar' }

const newAppConfig = { foo: 'baz' }

updateAppConfig(newAppConfig)

console.log(appConfig) // { foo: 'baz' }
```

:read-more{to="/docs/guide/directory-structure/app-config"}