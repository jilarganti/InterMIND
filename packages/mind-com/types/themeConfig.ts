import "vitepress"

declare module "vitepress" {
  // Объявляем ThemeConfig, если он не импортируется из других мест
  interface ThemeConfig {
    contact_form: {
      name: string
      namePlaceholder: string
      webSite: string
      webSitePlaceholder: string
      webSiteError: string
      email: string
      emailPlaceholder: string
      message: string
      messagePlaceholder: string
      category: string
      categoryPlaceholder: string
      submit: string
      sending: string
      successTitle: string
      successMessage: string
      defaultCategories: string[]
      defaultButtonText: string
    }
    // ...другие поля ThemeConfig...
  }

  interface UserConfig<ThemeConfig = any, ThemeConfigType = ThemeConfig> {
    themeConfig?: ThemeConfigType
    // ...другие поля UserConfig...
  }
}
