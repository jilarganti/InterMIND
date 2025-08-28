---
title: "nuxt dev"
description: "Команда dev запускает сервер разработки с горячей заменой модулей по адресу http://localhost:3000"
links:
  - label: Source
    icon: i-simple-icons-github
    to: https://github.com/nuxt/cli/blob/main/packages/nuxi/src/commands/dev.ts
    size: xs

---

<!--dev-cmd-->
```bash [Terminal]
npx nuxt dev [ROOTDIR] [--cwd=<directory>] [--logLevel=<silent|info|verbose>] [--dotenv] [--envName] [--no-clear] [--no-fork] [-p, --port] [-h, --host] [--clipboard] [-o, --open] [--https] [--publicURL] [--qr] [--public] [--tunnel] [--sslCert] [--sslKey]
```
<!--/dev-cmd-->

Команда `dev` запускает сервер разработки с горячей заменой модулей по адресу [http://localhost:3000](https://localhost:3000)

## Аргументы

<!--dev-args-->
Аргумент | Описание
--- | ---
`ROOTDIR="."` | Указывает рабочий каталог (по умолчанию: `.`)
<!--/dev-args-->

## Опции

<!--dev-opts-->
Опция | По умолчанию | Описание
--- | --- | ---
`--cwd=<directory>` |  | Указать рабочую директорию, имеет приоритет над ROOTDIR (по умолчанию: `.`)
`--logLevel=<silent\|info\|verbose>` |  | Указать уровень логирования во время сборки
`--dotenv` |  | Путь к файлу `.env` для загрузки, относительно корневой директории
`--envName` |  | Окружение для использования при разрешении переопределений конфигурации (по умолчанию `production` при сборке и `development` при запуске dev-сервера)
`--no-clear` |  | Отключить очистку консоли при перезапуске
`--no-fork` |  | Отключить режим форка
`-p, --port` |  | Порт для прослушивания (по умолчанию: `NUXT_PORT \|\| NITRO_PORT \|\| PORT \|\| nuxtOptions.devServer.port`)
`-h, --host` |  | Хост для прослушивания (по умолчанию: `NUXT_HOST \|\| NITRO_HOST \|\| HOST \|\| nuxtOptions._layers?.[0]?.devServer?.host`)
`--clipboard` | `false` | Скопировать URL в буфер обмена
`-o, --open` | `false` | Открыть URL в браузере
`--https` |  | Включить HTTPS
`--publicURL` |  | Отображаемый публичный URL (используется для QR-кода)
`--qr` |  | Отображать QR-код публичного URL, когда доступно
`--public` |  | Прослушивать все сетевые интерфейсы
`--tunnel` |  | Открыть туннель используя https://github.com/unjs/untun
`--sslCert` |  | (УСТАРЕЛО) Используйте `--https.cert` вместо этого.
`--sslKey` |  | (УСТАРЕЛО) Используйте `--https.key` вместо этого.
<!--/dev-opts-->

Порт и хост также могут быть установлены через переменные окружения NUXT_PORT, PORT, NUXT_HOST или HOST.

Дополнительно к вышеперечисленным опциям, `@nuxt/cli` может передавать опции в `listhen`, например `--no-qr` для отключения QR-кода dev-сервера. Вы можете найти список опций `listhen` в документации [unjs/listhen](https://github.com/unjs/listhen).

Эта команда устанавливает `process.env.NODE_ENV` в `development`.

::note
Если вы используете самоподписанный сертификат в разработке, вам нужно будет установить `NODE_TLS_REJECT_UNAUTHORIZED=0` в вашем окружении.
::