/**
 * Типы и маппинг кастомных полей Pipedrive CRM
 * Централизованное управление ID полей для избежания хардкода
 */

// Базовые интерфейсы для работы с полями
export interface FieldOption {
  id: string | number
  label: string
}

export interface Field {
  key: string
  name: string
  options?: FieldOption[]
  [key: string]: any
}

export type LeadFieldsMap = Record<string, Field>

// Маппинг кастомных полей для контактов (persons)
export const PERSON_FIELDS = {
  WEBSITE: "0bcd0dbd7c022bcc908eecd87e72bd49f830e5a6",
  COUNTRY_CODE: "08d290c3d972d735278898a71ad674b0ff698c66",
  COUNTRY_NAME: "f64198e6b8654dd28a344f5831dbe547b960a17b",
} as const

// Маппинг кастомных полей для лидов
export const LEAD_FIELDS = {
  CATEGORY: "ec30e5d548a40d6588bf2e1f06ec07cca7b4cc77",
  MESSAGE: "381414c380220bf1d26ce7b7bdc6e6ff08e20e04",
  LEAD_SOURCE: "da3aa18ff6128966544ff359f07aebedc047b2e2",
} as const

// Стандартные поля лидов (без префикса)
export const LEAD_STANDARD_FIELDS = {
  TITLE: "title",
  PERSON_ID: "person_id",
  CHANNEL: "channel",
  CHANNEL_ID: "channel_id",
  ORIGIN_ID: "origin_id",
  WAS_SEEN: "was_seen",
} as const

// Типы для создания контакта
export interface CreatePersonData {
  name: string
  email: Array<{ value: string; label: string }>
  [PERSON_FIELDS.WEBSITE]: string
  [PERSON_FIELDS.COUNTRY_CODE]?: string
  [PERSON_FIELDS.COUNTRY_NAME]?: string
}

// Типы для создания лида
export interface CreateLeadData {
  [LEAD_STANDARD_FIELDS.TITLE]: string
  [LEAD_STANDARD_FIELDS.PERSON_ID]: string | number
  [LEAD_STANDARD_FIELDS.CHANNEL]: string | number
  [LEAD_STANDARD_FIELDS.CHANNEL_ID]: string
  [LEAD_STANDARD_FIELDS.ORIGIN_ID]: string
  [LEAD_STANDARD_FIELDS.WAS_SEEN]: boolean
  [LEAD_FIELDS.CATEGORY]: string
  [LEAD_FIELDS.MESSAGE]: string
  [LEAD_FIELDS.LEAD_SOURCE]: string
}

// Входящие данные от формы
export interface FormSubmissionData {
  name: string
  email: string
  webSite: string
  channel: string
  channelId: string
  originId: string
  category: string
  message: string
  leadSource: string
  countryCode?: string
  countryName?: string
}

// Хелперы для создания объектов с правильными типами
export const createPersonPayload = (data: FormSubmissionData): CreatePersonData => ({
  name: data.name,
  email: [{ value: data.email, label: "other" }],
  [PERSON_FIELDS.WEBSITE]: data.webSite,
  [PERSON_FIELDS.COUNTRY_CODE]: data.countryCode,
  [PERSON_FIELDS.COUNTRY_NAME]: data.countryName,
})

export const createLeadPayload = (data: FormSubmissionData, personId: string | number, channelId: string | number): CreateLeadData => ({
  [LEAD_STANDARD_FIELDS.TITLE]: data.name,
  [LEAD_STANDARD_FIELDS.PERSON_ID]: personId,
  [LEAD_STANDARD_FIELDS.CHANNEL]: channelId,
  [LEAD_STANDARD_FIELDS.CHANNEL_ID]: data.channelId,
  [LEAD_STANDARD_FIELDS.ORIGIN_ID]: data.originId,
  [LEAD_STANDARD_FIELDS.WAS_SEEN]: true,
  [LEAD_FIELDS.CATEGORY]: data.category,
  [LEAD_FIELDS.MESSAGE]: data.message,
  [LEAD_FIELDS.LEAD_SOURCE]: data.leadSource,
})

// Список всех доступных каналов (для валидации)
export const AVAILABLE_CHANNELS = ["Web forms", "Web visitors", "Social media", "Email marketing", "Phone calls"] as const

export type ChannelType = (typeof AVAILABLE_CHANNELS)[number]
