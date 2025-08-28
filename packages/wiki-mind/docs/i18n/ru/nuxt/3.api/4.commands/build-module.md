---
title: "nuxt build-module"
description: "Команда Nuxt для сборки вашего модуля Nuxt перед публикацией."
links:
  - label: Source
    icon: i-simple-icons-github
    to: https://github.com/nuxt/module-builder/blob/main/src/cli.ts
    size: xs
---

<!--build-module-cmd-->
```bash [Terminal]
npx nuxt build-module [ROOTDIR] [--cwd=<directory>] [--logLevel=<silent|info|verbose>] [--build] [--stub] [--sourcemap] [--prepare]
```
<!--/build-module-cmd-->

Команда `build-module` запускает `@nuxt/module-builder` для генерации директории `dist` внутри вашего `rootDir`, которая содержит полную сборку для вашего **nuxt-module**.

## Аргументы

<!--build-module-args-->
Аргумент | Описание
--- | ---
`ROOTDIR="."` | Указывает рабочий каталог (по умолчанию: `.`)
<!--/build-module-args-->

## Опции

<!--build-module-opts-->
Опция | По умолчанию | Описание
--- | --- | ---
`--cwd=<directory>` |  | Указать рабочую директорию, имеет приоритет над ROOTDIR (по умолчанию: `.`)
`--logLevel=<silent\|info\|verbose>` |  | Указать уровень логирования во время сборки
`--build` | `false` | Собрать модуль для распространения
`--stub` | `false` | Создать заглушку dist вместо фактической сборки для разработки
`--sourcemap` | `false` | Генерировать sourcemaps
`--prepare` | `false` | Подготовить модуль для локальной разработки
<!--/build-module-opts-->

::read-more{to="https://github.com/nuxt/module-builder" icon="i-simple-icons-github" target="\_blank"}
Узнать больше о `@nuxt/module-builder`.
::