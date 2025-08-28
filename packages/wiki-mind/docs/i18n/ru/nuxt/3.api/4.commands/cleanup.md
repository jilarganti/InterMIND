---
title: "nuxt cleanup"
description: "Удаление общих сгенерированных файлов и кэшей Nuxt."
links:
  - label: Source
    icon: i-simple-icons-github
    to: https://github.com/nuxt/cli/blob/main/packages/nuxi/src/commands/cleanup.ts
    size: xs
---

<!--cleanup-cmd-->
```bash [Terminal]
npx nuxt cleanup [ROOTDIR] [--cwd=<directory>]
```
<!--/cleanup-cmd-->

Команда `cleanup` удаляет общие сгенерированные файлы и кэши Nuxt, включая:

- `.nuxt`
- `.output`
- `node_modules/.vite`
- `node_modules/.cache`

## Аргументы

<!--cleanup-args-->
Аргумент | Описание
--- | ---
`ROOTDIR="."` | Указывает рабочий каталог (по умолчанию: `.`)
<!--/cleanup-args-->

## Опции

<!--cleanup-opts-->
Опция | По умолчанию | Описание
--- | --- | ---
`--cwd=<directory>` |  | Указать рабочий каталог, это имеет приоритет над ROOTDIR (по умолчанию: `.`)
<!--/cleanup-opts-->