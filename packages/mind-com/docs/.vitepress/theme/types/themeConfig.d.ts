import "vitepress"

declare module "vitepress" {
  namespace DefaultTheme {
    interface Config {
      localization?: {
        placeholder4SearchInput: string
        placeholder4ChatFooter: string
        placeholder4ChatList: string
        buttonLabel4NavButton: string
        buttonLabel4AuthButton: string
      }

      contact_form?: {
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
    }
  }
}
