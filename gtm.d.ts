export interface FormSubmissionEvent {
  event: string
  form_type: string
  form_service: string
  form_URL: string
  form_category: string
  is_real_lead: boolean
  lead_source?: string
}

export type GTMEvent = FormSubmissionEvent | { event: string }

declare global {
  interface Window {
    dataLayer?: GTMEvent[]
  }
}
