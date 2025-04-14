import { h } from "vue"
import DefaultTheme from "vitepress/theme"
import "./style.css"
import { useData, inBrowser, useRouter } from "vitepress"

import { components } from "shared"
import sharedTheme from "shared"

// Просто расширяем тему из shared и регистрируем те же компоненты
export default {
  ...sharedTheme,
  // Если нужно переопределить какие-то методы темы, можно это сделать здесь
  // enhanceApp({ app, router }) {},
}
