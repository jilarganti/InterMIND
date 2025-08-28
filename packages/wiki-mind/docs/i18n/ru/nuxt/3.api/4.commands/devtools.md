---
title: "nuxt devtools"
description: "Команда devtools позволяет включать или отключать Nuxt DevTools для каждого проекта отдельно."
links:
  - label: Source
    icon: i-simple-icons-github
    to: https://github.com/nuxt/cli/blob/main/packages/nuxi/src/commands/devtools.ts
    size: xs
---

<!--devtools-cmd-->
```bash [Terminal]
npx nuxt devtools <COMMAND> [ROOTDIR] [--cwd=<directory>]
```
<!--/devtools-cmd-->

Выполнение команды `nuxt devtools enable` установит Nuxt DevTools глобально, а также включит их в конкретном проекте, который вы используете. Настройка сохраняется как предпочтение в вашем пользовательском файле `.nuxtrc`. Если вы хотите удалить поддержку devtools для конкретного проекта, вы можете выполнить команду `nuxt devtools disable`.

## Аргументы

<!--devtools-args-->
Аргумент | Описание
--- | ---
`COMMAND` | Команда для выполнения (варианты: <enable\|disable>)
`ROOTDIR="."` | Указывает рабочую директорию (по умолчанию: `.`)
<!--/devtools-args-->

## Опции

<!--devtools-opts-->
Опция | По умолчанию | Описание
--- | --- | ---
`--cwd=<directory>` |  | Указать рабочую директорию, это имеет приоритет над ROOTDIR (по умолчанию: `.`)
<!--/devtools-opts-->

::read-more{icon="i-simple-icons-nuxtdotjs" to="https://devtools.nuxt.com" target="\_blank"}
Узнать больше о **Nuxt DevTools**.
::