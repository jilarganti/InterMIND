/**
 * Support for extending the VitePress theme configuration.
 */
import "vitepress"

declare module "vitepress" {
  export interface UserConfig {
    themeConfig: ThemeConfig & {
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
    }
  }
}

interface FormSubmissionEvent {
  event: string
  form_type: string
  form_service: string
  form_URL: string
  form_category: string
  is_real_lead: boolean
  lead_source?: string
}

type GTMEvent = FormSubmissionEvent | { event: string }

declare global {
  interface Window {
    dataLayer?: GTMEvent[]
  }
}
