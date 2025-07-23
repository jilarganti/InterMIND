/**
 * Маппинг полей Pipedrive CRM
 * Простые константы для замены хардкодных ID
 */

// export interface SignUpDataLayerEvent {
//   event: "sign_up"
//   method: Params["method"] // Registration method (Google, Microsoft, email)
//   plan: Params["plan"] // Selected pricing plan
// }

// export interface SubmitFormDataLayerEvent {
//   event: "generate_lead" // Changed from "sign_up" to "generate_lead"
// }

// ID кастомных полей для лидов
export const CUSTOM_LEAD_FIELD = {
  KIND: "ec30e5d548a40d6588bf2e1f06ec07cca7b4cc77",
  MESSAGE: "381414c380220bf1d26ce7b7bdc6e6ff08e20e04",
  URL: "da3aa18ff6128966544ff359f07aebedc047b2e2",
  PARAMS: "5f55bbf5ed50e7a0952f7c7211de22e7ffcb70f5",
}

// Перечисление возможных каналов
export enum Channel {
  WEB_VISITORS = "Web visitors",
  WEB_FORMS = "Web forms",
  MESSAGING_INBOX = "Messaging Inbox",
  CHATBOT = "Chatbot",
  MANUAL_ENTRY = "Manual entry",
}

// Типы полей лида Pipedrive
export interface LeadFields {
  title: string // Заголовок лида
  url: string // Form submission page URL
  utm?: UtmParams // UTM parameters object
  kind: string // Категория лида, определяется селектором формы
  params?: string // Параметры лида
  message?: string // Сообщение или комментарий к лиду
  // sourceOrigin?: string // Источник лида, создается автоматически СРМ (API, manual entry и т.д.)
  // sourceOriginId?: string // ID источника
  // sourceChannel: Channel // Канал привлечения - NOT a valid Pipedrive field, use 'channel' instead
  // sourceChannelId?: string // ID канала
}
// Типы полей контакта Pipedrive
export interface ContactFields {
  name: string
  email: string
  phone?: string
}
// Базовые типы
export interface LeadData {
  lead: LeadFields & { sourceChannel: Channel } // Поля лида + канал для обработки
  contact: ContactFields // Поля контакта
}

export interface Params {
  method: "Google" | "Microsoft" | "Email" | undefined // Registration method
  plan: "Basic" | "Pro" | "Business" // Selected pricing plan
}

export interface UtmParams {
  source?: string // Traffic source (e.g., google, linkedin)
  medium?: string // Traffic channel (e.g., cpc, email)
  campaign?: string // Marketing campaign name
  term?: string // Keyword (if any)
  content?: string // Banner or ad identifier
}

export interface DataLayerEvent {
  event: "sign_up" | "generate_lead" // Event name
  method?: Params["method"] // Registration method (Google, Microsoft, email)
  plan?: Params["plan"] // Selected pricing plan
  utm?: UtmParams // UTM parameters object (for CRM, not for dataLayer)
  kind: string // Category of the lead, determined by the form selector
}

/**
 * Represents the data structure for a lead sign-up.
 * This is used to create a new lead in the CRM.
 */
export interface SignUpLead {
  email: string // User email (required)
  name: string // Name or full name (optional)
  url?: string // Form submission page URL
  utm?: UtmParams // UTM parameters object (for CRM, not for dataLayer)
  params: {
    method: Params["method"] // Registration method (Google, Microsoft, email)
    plan: Params["plan"] // Selected pricing plan
  }
}

/**
 * Represents the data structure for a lead sign-up.
 * This is used to create a new lead in the CRM.
 */
export interface SubmitForm {
  name?: string
  email: string
  webSite?: string
  kind: string
  message: string
}
