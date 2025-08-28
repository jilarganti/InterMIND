---
title: "nuxt prepare"
description: "Команда prepare создает директорию .nuxt в вашем приложении и генерирует типы."
links:
  - label: Source
    icon: i-simple-icons-github
    to: https://github.com/nuxt/cli/blob/main/packages/nuxi/src/commands/prepare.ts
    size: xs
---

<!--prepare-cmd-->
```bash [Terminal]
npx nuxt prepare [ROOTDIR] [--dotenv] [--cwd=<directory>] [--logLevel=<silent|info|verbose>] [--envName]
```
<!--/prepare-cmd-->

Команда `prepare` создает директорию [`.nuxt`](/docs/guide/directory-structure/nuxt) в вашем приложении и генерирует типы. Это может быть полезно в CI-окружении или как команда `postinstall` в вашем [`package.json`](/docs/guide/directory-structure/package).

## Аргументы

<!--prepare-args-->
Аргумент | Описание
--- | ---
`ROOTDIR="."` | Указывает рабочий каталог (по умолчанию: `.`)
<!--/prepare-args-->

## Опции

<!--prepare-opts-->
Опция | По умолчанию | Описание
--- | --- | ---
`--dotenv` |  | Путь к файлу `.env` для загрузки, относительно корневой директории
`--cwd=<directory>` |  | Указать рабочую директорию, имеет приоритет над ROOTDIR (по умолчанию: `.`)
`--logLevel=<silent\|info\|verbose>` |  | Указать уровень логирования во время сборки
`--envName` |  | Окружение для использования при разрешении переопределений конфигурации (по умолчанию `production` при сборке и `development` при запуске dev-сервера)
<!--/prepare-opts-->