---
title: "nuxt add"
description: "Создание сущности в вашем Nuxt приложении."
links:
  - label: Source
    icon: i-simple-icons-github
    to: https://github.com/nuxt/cli/blob/main/packages/nuxi/src/commands/add.ts
    size: xs
---

<!--add-cmd-->
```bash [Terminal]
npx nuxt add <TEMPLATE> <NAME> [--cwd=<directory>] [--logLevel=<silent|info|verbose>] [--force]
```
<!--/add-cmd-->

### Аргументы

<!--add-args-->
Аргумент | Описание
--- | ---
`TEMPLATE` | Укажите какой шаблон генерировать (варианты: <api\|plugin\|component\|composable\|middleware\|layout\|page\|layer>)
`NAME` | Укажите имя генерируемого файла
<!--/add-args-->

### Опции

<!--add-opts-->
Опция | По умолчанию | Описание
--- | --- | ---
`--cwd=<directory>` | `.` | Укажите рабочую директорию
`--logLevel=<silent\|info\|verbose>` |  | Укажите уровень логирования во время сборки
`--force` | `false` | Принудительно перезаписать файл, если он уже существует
<!--/add-opts-->

**Модификаторы:**

Некоторые шаблоны поддерживают дополнительные флаги-модификаторы для добавления суффикса (например `.client` или `.get`) к их имени.

```bash [Terminal]
# Генерирует `/plugins/sockets.client.ts`
npx nuxt add plugin sockets --client
```

## `nuxt add component`

* Флаги модификаторов: `--mode client|server` или `--client` или `--server`

```bash [Terminal]
# Генерирует `components/TheHeader.vue`
npx nuxt add component TheHeader
```

## `nuxt add composable`

```bash [Terminal]
# Генерирует `composables/foo.ts`
npx nuxt add composable foo
```

## `nuxt add layout`

```bash [Terminal]
# Генерирует `layouts/custom.vue`
npx nuxt add layout custom
```

## `nuxt add plugin`

* Флаги модификаторов: `--mode client|server` или `--client` или `--server`

```bash [Terminal]
# Генерирует `plugins/analytics.ts`
npx nuxt add plugin analytics
```

## `nuxt add page`

```bash [Terminal]
# Генерирует `pages/about.vue`
npx nuxt add page about
```

```bash [Terminal]
# Генерирует `pages/category/[id].vue`
npx nuxt add page "category/[id]"
```

## `nuxt add middleware`

* Флаги модификаторы: `--global`

```bash [Terminal]
# Генерирует `middleware/auth.ts`
npx nuxt add middleware auth
```

## `nuxt add api`

* Флаги-модификаторы: `--method` (может принимать `connect`, `delete`, `get`, `head`, `options`, `patch`, `post`, `put` или `trace`) или альтернативно вы можете напрямую использовать `--get`, `--post` и т.д.

```bash [Terminal]
# Генерирует `server/api/hello.ts`
npx nuxt add api hello
```

## `nuxt add layer`

```bash [Терминал]
# Генерирует `layers/subscribe/nuxt.config.ts`
npx nuxt add layer subscribe
```