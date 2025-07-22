/**
 * ContactForm.ts
 * Type definitions for the contact form used in the Mind.com documentation site.
 */

export interface ContactForm {
  name?: string
  email: string
  webSite?: string
  kind: string
  message: string
  buttonText?: string
}

export interface ContactFormConfig {
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
}

export interface ContactFormProps {
  config: ContactFormConfig
}
