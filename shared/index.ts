import { createTheme } from "./utils/createTheme"
import { components } from "./components"

// Импортируем только общий стиль для чата
import "./styles/AIChat.css"

// Экспортируем функцию создания темы и компоненты
export { createTheme, components }

// Для обратной совместимости экспортируем дефолтную тему
export default createTheme({
  components,
})
