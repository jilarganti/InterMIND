import "vitepress"

declare module "vitepress" {
  namespace DefaultTheme {
    interface Config {
      llmTokenLimit?: number

      localization?: {
        placeholder4SearchInput: string
        placeholder4ChatFooter: string
        placeholder4ChatList: string
        buttonLabel4NavButton: string
        buttonLabel4SignInButton: string
        buttonLabel4GetStartedButton: string
        buttonLabel4TryItButton: string
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
