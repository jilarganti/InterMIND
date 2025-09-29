# Medium Scraper

Скрипт для извлечения контента из статей Medium в формат Markdown с изображениями.

## Использование

```bash
# Из директории packages/mind-com/
pnpm medium-scraper <URL>

# Пример
pnpm medium-scraper "https://medium.com/@author/article-title"
```

## Функциональность

- ✅ Извлекает заголовок, автора, контент статьи
- ✅ Скачивает изображения (ограничение: 20 изображений)
- ✅ Генерирует frontmatter для VitePress
- ✅ Создает Markdown файл в `docs/en/blog/posts/`
- ✅ Сохраняет изображения в `docs/public/blog/images/`

## Конфигурация

Настройки находятся в файле `mediumScraperConfig.ts`:

- `output.defaultDir`: Директория для Markdown файлов
- `output.imagesDir`: Директория для изображений
- `browser.headless`: Режим браузера (true/false)
- `images.maxCount`: Максимальное количество изображений
- `markdown.rules`: Правила конвертации HTML в Markdown

## Зависимости

- **Puppeteer**: Автоматизация браузера
- **Turndown**: Конвертация HTML в Markdown
- **Axios**: Загрузка изображений
