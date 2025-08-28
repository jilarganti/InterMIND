---
title: "nuxt generate"
description: "Предварительно рендерит каждый маршрут приложения и сохраняет результат в виде обычных HTML-файлов."
links:
  - label: Source
    icon: i-simple-icons-github
    to: https://github.com/nuxt/cli/blob/main/packages/nuxi/src/commands/generate.ts
    size: xs
---

<!--generate-cmd-->
```bash [Terminal]
npx nuxt generate [ROOTDIR] [--cwd=<directory>] [--logLevel=<silent|info|verbose>] [--preset] [--dotenv] [--envName]
```
<!--/generate-cmd-->

Команда `generate` предварительно рендерит каждый маршрут вашего приложения и сохраняет результат в виде обычных HTML-файлов, которые вы можете развернуть на любых сервисах статического хостинга. Команда запускает команду `nuxt build` с аргументом `prerender`, установленным в `true`

## Аргументы

<!--generate-args-->
Аргумент | Описание
--- | ---
`ROOTDIR="."` | Указывает рабочий каталог (по умолчанию: `.`)
<!--/generate-args-->

## Опции

<!--generate-opts-->
Опция | По умолчанию | Описание
--- | --- | ---
`--cwd=<directory>` |  | Указать рабочую директорию, имеет приоритет над ROOTDIR (по умолчанию: `.`)
`--logLevel=<silent\|info\|verbose>` |  | Указать уровень логирования во время сборки
`--preset` |  | Пресет сервера Nitro
`--dotenv` |  | Путь к файлу `.env` для загрузки, относительно корневой директории
`--envName` |  | Окружение для использования при разрешении переопределений конфигурации (по умолчанию `production` при сборке и `development` при запуске dev-сервера)
<!--/generate-opts-->

::read-more{to="/docs/getting-started/deployment#static-hosting"}
Узнайте больше о пре-рендеринге и статическом хостинге.
::