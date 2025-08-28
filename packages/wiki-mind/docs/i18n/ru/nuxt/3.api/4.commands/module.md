---
title: "nuxt module"
description: "Поиск и добавление модулей в ваше Nuxt приложение с помощью командной строки."
links:
  - label: Source
    icon: i-simple-icons-github
    to: https://github.com/nuxt/cli/blob/main/packages/nuxi/src/commands/module/
    size: xs
---

Nuxt предоставляет несколько утилит для беспрепятственной работы с [модулями Nuxt](/modules).

## nuxt module add

<!--module-add-cmd-->
```bash [Terminal]
npx nuxt module add <MODULENAME> [--cwd=<directory>] [--logLevel=<silent|info|verbose>] [--skipInstall] [--skipConfig] [--dev]
```
<!--/module-add-cmd-->

<!--module-add-args-->
Аргумент | Описание
--- | ---
`MODULENAME` | Название модуля
<!--/module-add-args-->

<!--module-add-opts-->
Опция | По умолчанию | Описание
--- | --- | ---
`--cwd=<directory>` | `.` | Указать рабочую директорию
`--logLevel=<silent\|info\|verbose>` |  | Указать уровень логирования во время сборки
`--skipInstall` |  | Пропустить npm install
`--skipConfig` |  | Пропустить обновление nuxt.config.ts
`--dev` |  | Установить модуль как dev зависимость
<!--/module-add-opts-->

Команда позволяет устанавливать [модули Nuxt](/modules) в ваше приложение без ручной работы.

При выполнении команды она:

- устанавливает модуль как зависимость с помощью вашего менеджера пакетов
- добавляет его в ваш файл [package.json](/docs/guide/directory-structure/package)
- обновляет ваш файл [`nuxt.config`](/docs/guide/directory-structure/nuxt-config)

**Пример:**

Установка модуля [`Pinia`](/modules/pinia)

```bash [Terminal]
npx nuxt module add pinia
```

## поиск модулей nuxt

<!--module-search-cmd-->
```bash [Terminal]
npx nuxt module search <ЗАПРОС> [--cwd=<директория>] [--nuxtVersion=<2|3>]
```
<!--/module-search-cmd-->

### Аргументы

<!--module-search-args-->
Аргумент | Описание
--- | ---
`ЗАПРОС` | ключевые слова для поиска
<!--/module-search-args-->

### Опции

<!--module-search-opts-->
Опция | По умолчанию | Описание
--- | --- | ---
`--cwd=<директория>` | `.` | Указать рабочую директорию
`--nuxtVersion=<2\|3>` |  | Фильтровать по версии Nuxt и показывать только совместимые модули (автоматически определяется по умолчанию)
<!--/module-search-opts-->

Команда ищет модули Nuxt, соответствующие вашему запросу, которые совместимы с вашей версией Nuxt.

**Пример:**

```bash [Terminal]
npx nuxt module search pinia
```