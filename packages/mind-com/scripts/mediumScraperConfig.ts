/**
 * Конфигурация для Medium to Markdown скрапера
 * Аналогично translateConfig.ts для централизации настроек
 */

export const mediumScraperConfig = {
  // Директории для вывода (относительно packages/mind-com/)
  output: {
    defaultDir: "./docs/en/blog/posts",
    imagesDir: "./docs/public/blog/images", // абсолютно относительно packages/mind-com/
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
    allowedExtensions: [".jpg", ".jpeg", ".png", ".webp", ".gif"],
    defaultExtension: ".jpg",
    maxFileNameLength: 50, // Максимальная длина имени файла
  },

  // Настройки Turndown для конвертации HTML в Markdown
  turndown: {
    headingStyle: "atx",
    bulletListMarker: "-",
  },

  // Настройки обработки ссылок
  linkProcessing: {
    // Преобразовать относительные Medium ссылки в абсолютные
    convertRelativeLinks: true,
    // Удалить внутренние Medium ссылки, которые не работают вне Medium
    removeInternalMediumLinks: true,
  },

  // Поддерживаемые домены (включая поддомены Medium)
  supportedDomains: ["medium.com", "towardsdatascience.com", "javascript.plainenglish.io", "levelup.gitconnected.com", "betterprogramming.pub"],

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
      noindex: true,
      // tags: ["medium", "article"], // Можно добавить теги
    },
  },

  // Настройки очистки контента
  contentCleaning: {
    // Элементы для удаления
    removeElements: [".speechify-ignore", "div.speechify-ignore"],
    // Фразы для обрезки контента (простой поиск по тексту)
    cutoffPhrases: [
      "If you found this article useful, here’s another one you might enjoy:",
      "I’ve been experimenting with AI tools these days. If you found this article useful, here’s another one you might enjoy",
    ],
  },
}
