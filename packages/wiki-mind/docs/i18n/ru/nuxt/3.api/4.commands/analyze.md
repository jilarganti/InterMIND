---
title: "nuxt analyze"
description: "Анализ производственной сборки вашего Nuxt приложения."
links:
  - label: Source
    icon: i-simple-icons-github
    to: https://github.com/nuxt/cli/blob/main/packages/nuxi/src/commands/analyze.ts
    size: xs
---

<!--analyze-cmd-->
```bash [Terminal]
npx nuxt analyze [ROOTDIR] [--cwd=<directory>] [--logLevel=<silent|info|verbose>] [--dotenv] [--name=<name>] [--no-serve]
```
<!--/analyze-cmd-->

Команда `analyze` собирает Nuxt и анализирует производственную сборку (экспериментальная функция).

## Аргументы

<!--analyze-args-->
Аргумент | Описание
--- | ---
`ROOTDIR="."` | Указывает рабочий каталог (по умолчанию: `.`)
<!--/analyze-args-->

## Опции

<!--analyze-opts-->
Опция | По умолчанию | Описание
--- | --- | ---
`--cwd=<directory>` |  | Указать рабочую директорию, имеет приоритет над ROOTDIR (по умолчанию: `.`)
`--logLevel=<silent\|info\|verbose>` |  | Указать уровень логирования во время сборки
`--dotenv` |  | Путь к файлу `.env` для загрузки, относительно корневой директории
`--name=<name>` | `default` | Название анализа
`--no-serve` |  | Пропустить подачу результатов анализа
<!--/analyze-opts-->

::note
Эта команда устанавливает `process.env.NODE_ENV` в `production`.
::