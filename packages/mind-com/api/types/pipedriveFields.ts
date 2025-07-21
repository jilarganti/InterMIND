/**
 * Маппинг полей Pipedrive CRM
 * Простые константы для замены хардкодных ID
 */

// ID кастомных полей для контактов
export const PERSON_FIELDS = {
  WEBSITE: "0bcd0dbd7c022bcc908eecd87e72bd49f830e5a6",
  COUNTRY_CODE: "08d290c3d972d735278898a71ad674b0ff698c66",
  COUNTRY_NAME: "f64198e6b8654dd28a344f5831dbe547b960a17b",
}

// ID кастомных полей для лидов
export const LEAD_FIELDS = {
  CATEGORY: "ec30e5d548a40d6588bf2e1f06ec07cca7b4cc77",
  MESSAGE: "381414c380220bf1d26ce7b7bdc6e6ff08e20e04",
  LEAD_SOURCE: "da3aa18ff6128966544ff359f07aebedc047b2e2",
}

// Перечисление возможных каналов
export enum Channel {
  WEB_VISITORS = "Web visitors",
  WEB_FORMS = "Web forms",
  MESSAGING_INBOX = "Messaging Inbox",
  CHATBOT = "Chatbot",
}

// Базовые типы
export interface FormData {
  name?: string
  email: string
  phone?: string
  webSite?: string
  channel?: Channel
  channelId?: string
  originId?: string
  category?: string
  message?: string
  leadSource?: string
  countryCode?: string
  countryName?: string
}

export interface FieldOption {
  id: string | number
  label: string
}

export interface Field {
  key: string
  name: string
  options?: FieldOption[]
}
