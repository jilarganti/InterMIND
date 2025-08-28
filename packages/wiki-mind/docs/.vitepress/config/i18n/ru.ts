/// <reference types="../theme/types/themeConfig" />

import { defineConfig, type DefaultTheme } from "vitepress"
import fs from "fs"
import path from "path"

const BASE_PATH = "/ru"

export const ru = defineConfig({
  description:
    "Профессиональные видеоконференции с синхронным переводом на 19+ языков. ИИ-перевод, который передает тон, намерения и контекст для глобальных команд.",
  head: [
    ["meta", { property: "og:title", content: "InterMIND | Перевод речи в реальном времени для глобальных команд" }],
    [
      "meta",
      {
        property: "og:description",
        content:
          "Профессиональные видеоконференции с синхронным голосовым переводом на 19+ языков. Встречайтесь глобально, общайтесь естественно с ИИ-переводом.",
      },
    ],
    ["meta", { property: "og:url", content: `https://mind.com${BASE_PATH}` }],
  ],
  themeConfig: {
    nav: [
      {
        text: "Документация",
        activeMatch: `${BASE_PATH}/nuxt/`,
        link: `${BASE_PATH}/nuxt/getting-started/introduction`,
      },
    ],

    sidebar: {
      // [`${BASE_PATH}/nuxt/`]: { base: `${BASE_PATH}/nuxt/`, items: sidebarDocs() },
      [`${BASE_PATH}/nuxt/`]: { base: `${BASE_PATH}/nuxt/`, items: generateSidebar() },
    },

    footer: {
      message: `© Mind, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">Настройки конфиденциальности</a> | <a href="${BASE_PATH}/resources/company/Privacy-Policy">Политика конфиденциальности</a> | <a href="${BASE_PATH}/resources/company/Legal-Regulations-for-AI-Services">Правовые нормы для ИИ-сервисов</a> | <a href="https://status.mind.com/">Статус сервиса</a>`,
    },

    localization: {
      placeholder4SearchInput: "Спросите что угодно...",
      placeholder4ChatFooter: "Спросите что угодно...",
      placeholder4ChatList: "Введите тему чата...",
      buttonLabel4NavButton: "Ассистент",
      buttonLabel4SignInButton: "Войти",
      buttonLabel4GetStartedButton: "Начать",
      buttonLabel4TryItButton: "Попробовать бесплатно",
      buttonLabel4BackToBlog: "← Вернуться к блогу",
    },
    contact_form: {
      name: "Имя *",
      namePlaceholder: "ваше имя",
      email: "Email *",
      emailPlaceholder: "ваш email адрес",
      webSite: "Сайт компании",
      webSitePlaceholder: "например, https://companyname.com",
      webSiteError: "Пожалуйста, введите сайт",
      category: "Какова ваша основная цель? *",
      categoryPlaceholder: "Выберите то, что важнее всего",
      message: "Давайте обсудим ваши цели (необязательно)",
      messagePlaceholder: "Пожалуйста, предоставьте любые дополнительные детали (необязательно)",
      submit: "Отправить запрос",
      sending: "Отправка...",
      successTitle: "Спасибо!",
      successMessage: "Мы получили ваше сообщение — наша команда свяжется с вами в ближайшее время.",
      defaultCategories: [],

      defaultButtonText: "Отправьте нам сообщение",
      // defaultButtonText: "Получить бесплатную консультацию",
    },
  },
})

// Функция для автоматической генерации боковой панели из структуры файлов
function generateSidebar(): DefaultTheme.SidebarItem[] {
  // Определяем правильный путь на основе BASE_PATH
  const basePath = BASE_PATH as string
  const isLocalized = basePath && basePath !== ""
  const langPath = isLocalized ? basePath.replace("/", "") : "en"
  const nuxtPath = isLocalized ? path.resolve(__dirname, `../../../i18n/${langPath}/nuxt`) : path.resolve(__dirname, "../../en/nuxt")

  if (!fs.existsSync(nuxtPath)) {
    return []
  }

  const sections: DefaultTheme.SidebarItem[] = []
  const folders = fs
    .readdirSync(nuxtPath)
    .filter((name) => {
      const fullPath = path.join(nuxtPath, name)
      return fs.statSync(fullPath).isDirectory()
    })
    .sort()

  for (const folder of folders) {
    const folderPath = path.join(nuxtPath, folder)
    const folderName = folder.replace(/^\d+\./, "") // Удаляем числовой префикс

    // Получаем заголовок раздела из имени папки
    let sectionTitle = folderName
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")

    // Вспомогательная функция для обработки файлов и подкаталогов
    function processDirectory(dirPath: string, basePath: string): DefaultTheme.SidebarItem[] {
      const dirItems: DefaultTheme.SidebarItem[] = []
      const entries = fs.readdirSync(dirPath).sort()

      for (const entry of entries) {
        const entryPath = path.join(dirPath, entry)
        const stat = fs.statSync(entryPath)

        if (stat.isDirectory() && !entry.startsWith(".")) {
          // Обрабатываем подкаталог
          const subDirName = entry.replace(/^\d+\./, "")
          const subDirTitle = subDirName
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")

          const subItems = processDirectory(entryPath, `${basePath}/${subDirName}`)

          if (subItems.length > 0) {
            dirItems.push({
              text: subDirTitle,
              collapsed: true,
              items: subItems,
            })
          }
        } else if (entry.endsWith(".md") && !entry.match(/(\d+\.)?index\.md$/)) {
          // Обрабатываем markdown файл
          const fileName = entry.replace(/\.md$/, "").replace(/^\d+\./, "")

          // Преобразуем имя файла в читаемый заголовок
          let title = fileName
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")

          dirItems.push({
            text: title,
            link: `${basePath}/${fileName}`,
          })
        }
      }

      return dirItems
    }

    const sectionItems = processDirectory(folderPath, folderName)

    if (sectionItems.length > 0) {
      sections.push({
        text: sectionTitle,
        collapsed: false,
        items: sectionItems,
      })
    }
  }

  return sections
}
