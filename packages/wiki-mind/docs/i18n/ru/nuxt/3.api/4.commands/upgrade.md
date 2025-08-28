---
title: "nuxt upgrade"
description: "Команда upgrade обновляет Nuxt до последней версии."
links:
  - label: Source
    icon: i-simple-icons-github
    to: https://github.com/nuxt/cli/blob/main/packages/nuxi/src/commands/upgrade.ts
    size: xs
---

<!--upgrade-cmd-->
```bash [Terminal]
npx nuxt upgrade [ROOTDIR] [--cwd=<directory>] [--logLevel=<silent|info|verbose>] [--dedupe] [-f, --force] [-ch, --channel=<stable|nightly>]
```
<!--/upgrade-cmd-->

Команда `upgrade` обновляет Nuxt до последней версии.

## Аргументы

<!--upgrade-args-->
Аргумент | Описание
--- | ---
`ROOTDIR="."` | Указывает рабочий каталог (по умолчанию: `.`)
<!--/upgrade-args-->

## Опции

<!--upgrade-opts-->
Опция | По умолчанию | Описание
--- | --- | ---
`--cwd=<directory>` |  | Указать рабочую директорию, имеет приоритет над ROOTDIR (по умолчанию: `.`)
`--logLevel=<silent\|info\|verbose>` |  | Указать уровень логирования во время сборки
`--dedupe` |  | Дедуплицирует зависимости, но не пересоздает lockfile
`-f, --force` |  | Принудительное обновление для пересоздания lockfile и node_modules
`-ch, --channel=<stable\|nightly>` | `stable` | Указать канал для установки (по умолчанию: stable)
<!--/upgrade-opts-->