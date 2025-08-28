---
title: "nuxt build"
description: "Сборка вашего Nuxt приложения."
links:
  - label: Source
    icon: i-simple-icons-github
    to: https://github.com/nuxt/cli/blob/main/packages/nuxi/src/commands/build.ts
    size: xs
---

<!--build-cmd-->
```bash [Terminal]
npx nuxt build [ROOTDIR] [--cwd=<directory>] [--logLevel=<silent|info|verbose>] [--prerender] [--preset] [--dotenv] [--envName]
```
<!--/build-cmd-->

Команда `build` создает директорию `.output` со всем вашим приложением, сервером и зависимостями, готовыми для продакшена.

## Аргументы

<!--build-args-->
Аргумент | Описание
--- | ---
`ROOTDIR="."` | Указывает рабочий каталог (по умолчанию: `.`)
<!--/build-args-->

## Опции

<!--build-opts-->
Опция | По умолчанию | Описание
--- | --- | ---
`--cwd=<directory>` |  | Указать рабочую директорию, имеет приоритет над ROOTDIR (по умолчанию: `.`)
`--logLevel=<silent\|info\|verbose>` |  | Указать уровень логирования во время сборки
`--prerender` |  | Собрать Nuxt и предварительно отрендерить статические маршруты
`--preset` |  | Пресет сервера Nitro
`--dotenv` |  | Путь к файлу `.env` для загрузки, относительно корневой директории
`--envName` |  | Окружение для использования при разрешении переопределений конфигурации (по умолчанию `production` при сборке и `development` при запуске dev-сервера)
<!--/build-opts-->

::note
Эта команда устанавливает `process.env.NODE_ENV` в `production`.
::

::note
`--prerender` всегда устанавливает `preset` в `static`
::