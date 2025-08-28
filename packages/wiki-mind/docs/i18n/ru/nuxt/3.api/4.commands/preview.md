---
title: "nuxt preview"
description: "Команда preview запускает сервер для предварительного просмотра вашего приложения после команды build."
links:
  - label: Source
    icon: i-simple-icons-github
    to: https://github.com/nuxt/cli/blob/main/packages/nuxi/src/commands/preview.ts
    size: xs
---

<!--preview-cmd-->
```bash [Terminal]
npx nuxt preview [ROOTDIR] [--cwd=<directory>] [--logLevel=<silent|info|verbose>] [--envName] [--dotenv] [-p, --port]
```
<!--/preview-cmd-->

Команда `preview` запускает сервер для предварительного просмотра вашего Nuxt приложения после выполнения команды `build`. Команда `start` является псевдонимом для `preview`. При запуске вашего приложения в продакшене обратитесь к [разделу о развертывании](/docs/getting-started/deployment).

## Аргументы

<!--preview-args-->
Аргумент | Описание
--- | ---
`ROOTDIR="."` | Указывает рабочий каталог (по умолчанию: `.`)
<!--/preview-args-->

## Опции

<!--preview-opts-->
Опция | По умолчанию | Описание
--- | --- | ---
`--cwd=<directory>` |  | Указать рабочую директорию, имеет приоритет над ROOTDIR (по умолчанию: `.`)
`--logLevel=<silent\|info\|verbose>` |  | Указать уровень логирования во время сборки
`--envName` |  | Окружение для использования при разрешении переопределений конфигурации (по умолчанию `production` при сборке и `development` при запуске dev-сервера)
`--dotenv` |  | Путь к файлу `.env` для загрузки, относительно корневой директории
`-p, --port` |  | Порт для прослушивания (по умолчанию: `NUXT_PORT \|\| NITRO_PORT \|\| PORT`)
<!--/preview-opts-->

Эта команда устанавливает `process.env.NODE_ENV` в `production`. Для переопределения определите `NODE_ENV` в файле `.env` или как аргумент командной строки.

::note
Для удобства в режиме предварительного просмотра ваш файл [`.env`](/docs/guide/directory-structure/env) будет загружен в `process.env`. (Однако в продакшене вам нужно будет самостоятельно обеспечить установку переменных окружения. Например, с Node.js 20+ вы можете сделать это, запустив `node --env-file .env .output/server/index.mjs` для запуска вашего сервера.)
::