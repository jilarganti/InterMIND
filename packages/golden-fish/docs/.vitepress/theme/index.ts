import { h } from "vue"
import DefaultTheme from "vitepress/theme"
import "./styles/style.css"

import { components } from "shared"
import sharedTheme from "shared"

// Просто расширяем тему из shared и регистрируем те же компоненты
export default {
  ...sharedTheme,
  // Если нужно переопределить какие-то методы темы, можно это сделать здесь
}
