// Универсальный тип для событий GTM
type GTMEvent = FormSubmissionEvent | { event: string }

declare global {
  interface Window {
    dataLayer?: GTMEvent[]
  }
}
