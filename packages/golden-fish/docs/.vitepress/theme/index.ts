// Импортируем только стили приложения
import "./styles/style.css"

import { createTheme, components } from "shared"

// Создаем тему с настройками для данного проекта
export default createTheme({
  components,
  // Можно добавить специфичные слоты, если нужно
  renderSlots: (h) => ({
    // "aside-ads-before": () => h(components.AsideSponsors),
    // "home-features-after": () => h(components.HomeSponsors)
  }),
  // Дополнительный хук для расширения приложения
  enhanceAppHook: ({ app }) => {
    // Здесь можно добавить код, специфичный для этого проекта
  },
})
