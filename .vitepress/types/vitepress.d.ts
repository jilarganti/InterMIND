/**
 * Support for extending the VitePress theme configuration.
 */
import "vitepress"

// declare module "vitepress" {
//   export interface UserConfig {
//     themeConfig: ThemeConfig & {
//       contact_form: {
//         name: string
//         namePlaceholder: string
//         phone: string
//         phonePlaceholder: string
//         phoneError: string
//         email: string
//         emailPlaceholder: string
//         message: string
//         messagePlaceholder: string
//         submit: string
//         sending: string
//         successTitle: string
//         successMessage: string
//         selectPlaceholder: string
//         defaultCategories: string[]
//         defaultButtonText: string
//       }
//     }
//   }
// }

interface FormSubmissionEvent {
  event: string
  form_type: string
  form_service: string
  form_URL: string
  form_category: string
  is_real_lead: boolean
}

declare global {
  interface Window {
    dataLayer?: FormSubmissionEvent[]
  }
}
