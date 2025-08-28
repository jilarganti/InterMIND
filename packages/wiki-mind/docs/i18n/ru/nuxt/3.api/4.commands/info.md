---
title: "nuxt info"
description: "Команда info выводит информацию о текущем или указанном проекте Nuxt."
links:
  - label: Source
    icon: i-simple-icons-github
    to: https://github.com/nuxt/cli/blob/main/packages/nuxi/src/commands/info.ts
    size: xs
---

<!--info-cmd-->
```bash [Terminal]
npx nuxt info [ROOTDIR] [--cwd=<directory>]
```
<!--/info-cmd-->

Команда `info` выводит информацию о текущем или указанном проекте Nuxt.

## Аргументы

<!--info-args-->
Аргумент | Описание
--- | ---
`ROOTDIR="."` | Указывает рабочий каталог (по умолчанию: `.`)
<!--/info-args-->

## Опции

<!--info-opts-->
Опция | По умолчанию | Описание
--- | --- | ---
`--cwd=<directory>` |  | Указать рабочий каталог, это имеет приоритет над ROOTDIR (по умолчанию: `.`)
<!--/info-opts-->