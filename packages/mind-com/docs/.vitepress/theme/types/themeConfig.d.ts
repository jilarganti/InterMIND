import "vitepress"

declare module "vitepress" {
  namespace DefaultTheme {
    interface PromptConfig {
      name: string
      model: string
      maxTokens: number
      temperature: number
      presencePenalty: number
      frequencyPenalty: number
    }

    interface Config {
      localization?: {
        placeholder4SearchInput: string
        placeholder4ChatFooter: string
        placeholder4ChatList: string
        buttonLabel4NavButton: string
        buttonLabel4SignInButton: string
        buttonLabel4GetStartedButton: string
      }

      prompts?: {
        basic: PromptConfig
        pro: PromptConfig
        business: PromptConfig
        followup: PromptConfig
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
