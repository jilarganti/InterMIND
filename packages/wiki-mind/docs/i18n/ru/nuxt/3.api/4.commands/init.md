---
title: "создание nuxt"
description: "Команда init инициализирует новый проект Nuxt."
links:
  - label: Source
    icon: i-simple-icons-github
    to: https://github.com/nuxt/cli/blob/main/packages/nuxi/src/commands/init.ts
    size: xs
---

<!--init-cmd-->
```bash [Terminal]
npm create nuxt@latest [DIR] [--cwd=<directory>] [-t, --template] [-f, --force] [--offline] [--preferOffline] [--no-install] [--gitInit] [--shell] [--packageManager] [--nightly]
```
<!--/init-cmd-->

Команда `create-nuxt` инициализирует новый проект Nuxt, используя [unjs/giget](https://github.com/unjs/giget).

## Аргументы

<!--init-args-->
Аргумент | Описание
--- | ---
`DIR=""` | Директория проекта
<!--/init-args-->

## Опции

<!--init-opts-->
Опция | По умолчанию | Описание
--- | --- | ---
`--cwd=<directory>` | `.` | Указать рабочую директорию
`-t, --template` |  | Название шаблона
`-f, --force` |  | Перезаписать существующую директорию
`--offline` |  | Принудительный офлайн режим
`--preferOffline` |  | Предпочитать офлайн режим
`--no-install` |  | Пропустить установку зависимостей
`--gitInit` |  | Инициализировать git репозиторий
`--shell` |  | Запустить shell после установки в директории проекта
`--packageManager` |  | Выбор менеджера пакетов (npm, pnpm, yarn, bun)
`--modules` |  | Nuxt модули для установки (через запятую без пробелов)
`--no-modules` |  | Пропустить запрос на установку модулей
`--nightly` |  | Использовать канал nightly релизов Nuxt (3x или latest)
<!--/init-opts-->

## Переменные окружения

- `NUXI_INIT_REGISTRY`: Установите пользовательский реестр шаблонов. ([подробнее](https://github.com/unjs/giget#custom-registry)).
  - Реестр по умолчанию загружается из [nuxt/starter/templates](https://github.com/nuxt/starter/tree/templates/templates)