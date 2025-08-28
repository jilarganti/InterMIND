---
title: "nuxt typecheck"
description: "Команда typecheck запускает vue-tsc для проверки типов во всем приложении."
links:
  - label: Source
    icon: i-simple-icons-github
    to: https://github.com/nuxt/cli/blob/main/packages/nuxi/src/commands/typecheck.ts
    size: xs
---

<!--typecheck-cmd-->
```bash [Terminal]
npx nuxt typecheck [ROOTDIR] [--cwd=<directory>] [--logLevel=<silent|info|verbose>]
```
<!--/typecheck-cmd-->

Команда `typecheck` запускает [`vue-tsc`](https://github.com/vuejs/language-tools/tree/master/packages/tsc) для проверки типов во всем приложении.

## Аргументы

<!--typecheck-args-->
Аргумент | Описание
--- | ---
`ROOTDIR="."` | Указывает рабочий каталог (по умолчанию: `.`)
<!--/typecheck-args-->

## Опции

<!--typecheck-opts-->
Опция | По умолчанию | Описание
--- | --- | ---
`--cwd=<directory>` |  | Указать рабочую директорию, имеет приоритет над ROOTDIR (по умолчанию: `.`)
`--logLevel=<silent\|info\|verbose>` |  | Указать уровень логирования во время сборки
<!--/typecheck-opts-->

::note
Эта команда устанавливает `process.env.NODE_ENV` в `production`. Для переопределения определите `NODE_ENV` в файле [`.env`](/docs/guide/directory-structure/env) или как аргумент командной строки.
::

::read-more{to="/docs/guide/concepts/typescript#type-checking"}
Подробнее о том, как включить проверку типов во время сборки или разработки.
::