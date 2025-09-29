/**
 * Конфигурация для Medium to Markdown скрапера
 * Аналогично translateConfig.ts для централизации настроек
 */

export const mediumScraperConfig = {
  // Директории для вывода (относительно packages/mind-com/)
  output: {
    defaultDir: "./docs/en/blog/posts",
    imagesDir: "../../../public/blog/images", // относительно posts/
    scriptsOutputDir: "./docs/en/blog/posts",
  },

  // Настройки браузера Puppeteer
  browser: {
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
    userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  },

  // Таймауты для различных операций
  timeouts: {
    pageLoad: 60000, // 60 секунд для загрузки страницы
    elementWait: 30000, // 30 секунд для ожидания элементов
    imageDownload: 30000, // 30 секунд для скачивания изображения
  },

  // Настройки обработки изображений
  images: {
    maxImages: 20, // Максимальное количество изображений для скачивания
    allowedExtensions: [".jpg", ".jpeg", ".png", ".webp", ".gif"],
    defaultExtension: ".jpg",
    maxFileNameLength: 50, // Максимальная длина имени файла
  },

  // Настройки Turndown для конвертации HTML в Markdown
  markdown: {
    headingStyle: "atx" as "atx" | "setext", // # ## ### стиль заголовков
    bulletListMarker: "-" as "-" | "*" | "+", // Маркер для списков
    codeBlockStyle: "fenced" as "fenced" | "indented", // ``` стиль блоков кода
    emDelimiter: "*" as "*" | "_", // *курсив*
    strongDelimiter: "**" as "**" | "__", // **жирный**
  },

  // Поддерживаемые домены
  supportedDomains: ["medium.com"],

  // Селекторы для извлечения контента
  selectors: {
    article: "article",
    title: "h1",
    author: '[data-testid="authorName"] a',
    publishDate: "time",
    images: "article img",
  },

  // Настройки HTTP запросов
  http: {
    maxRetries: 3,
    retryDelay: 1000, // мс между попытками
    headers: {
      "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
      "Accept-Language": "en-US,en;q=0.5",
      "Accept-Encoding": "gzip, deflate, br",
      "DNT": "1",
      "Connection": "keep-alive",
      "Upgrade-Insecure-Requests": "1",
    },
  },

  // Настройки логирования
  logging: {
    verbose: true,
    showProgress: true,
    logErrors: true,
  },

  // Настройки очистки текста
  textCleaning: {
    removeExtraWhitespace: true,
    normalizeLineBreaks: true,
    removeEmptyParagraphs: true,
  },

  // Настройки frontmatter
  frontmatter: {
    layout: "BlogPost",
    author: "[Jilarganti](https://github.com/jilarganti)",
    // Дополнительные поля (будут добавлены если указаны)
    additionalFields: {
      description: "A comprehensive analysis from Medium content", // Описание по умолчанию
      // tags: ["medium", "article"], // Можно добавить теги
    },
  },
}
