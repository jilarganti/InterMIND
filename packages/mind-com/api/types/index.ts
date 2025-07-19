// packages/mind-com/api/types/index.ts

// Базовые типы для API
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  message?: string
  error?: string
}

export interface ApiRequest {
  method: string
  body?: any
  query?: Record<string, string>
  headers?: Record<string, string>
}

// Типы для контактов
export interface ContactData {
  name: string
  email: string
  phone?: string
  website?: string
  countryCode?: string
  countryName?: string
}

export interface Contact extends ContactData {
  id: string | number
  createdAt?: string
  updatedAt?: string
}

// Типы для лидов
export interface LeadData {
  title: string
  personId?: string | number
  channel: string
  channelId?: string
  originId?: string
  category?: string
  message?: string
  leadSource?: string
  status?: LeadStatus
}

export interface Lead extends LeadData {
  id: string | number
  createdAt?: string
  updatedAt?: string
}

// Enum для статусов лида
export enum LeadStatus {
  NEW = "new",
  CONTACTED = "contacted",
  QUALIFIED = "qualified",
  CONVERTED = "converted",
  LOST = "lost",
}

// Типы для форм
export interface FormSubmissionData {
  // Данные контакта
  name: string
  email: string
  website?: string
  phone?: string

  // Данные лида
  category?: string
  message?: string

  // Метаданные
  leadSource?: string
  channel: string
  channelId?: string
  originId?: string
  countryCode?: string
  countryName?: string
}

export interface FormSubmissionResponse {
  contact: Contact
  lead: Lead
}

// Типы ошибок
export interface ValidationError {
  field: string
  message: string
}

export interface ApiError {
  code: string
  message: string
  details?: ValidationError[]
}
