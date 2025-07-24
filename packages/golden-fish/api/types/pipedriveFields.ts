/**
 * Типы данных для Pipedrive CRM
 * Интерфейсы и типы для работы с API
 */

import { Channel, RegistrationMethod, PricingPlan, AnalyticsEvent } from "../config/pipedriveConfig.js"

// UTM параметры для отслеживания источников трафика
interface UtmParams {
  source: string // Traffic source (e.g., google, linkedin)
  campaign: string // Marketing campaign name
}

// Параметры регистрации
interface Params {
  method: RegistrationMethod // Registration method
  plan: PricingPlan // Selected pricing plan
}

// Типы полей лида Pipedrive
interface LeadFields {
  title: string // Заголовок лида
  url?: string // Form submission page URL
  // utm?: UtmParams // UTM parameters object
  kind: string // Категория лида, определяется селектором формы
  // params?: string // Параметры лида
  message?: string // Сообщение или комментарий к лиду
}

// Типы полей контакта Pipedrive
interface ContactFields {
  name: string
  email: string
  phone?: string
}

// Базовые типы
export interface LeadData {
  lead: LeadFields & { sourceChannel: Channel } // Поля лида + канал для обработки
  contact: ContactFields // Поля контакта
}

export interface DataLayerEvent {
  event: AnalyticsEvent // Event name
  method?: RegistrationMethod // Registration method (Google, Microsoft, email)
  plan?: PricingPlan // Selected pricing plan
  // utm?: UtmParams // UTM parameters object (for CRM, not for dataLayer)
  kind: string // Category of the lead, determined by the form selector
}

/**
 * Represents the data structure for a lead sign-up.
 * This is used to create a new lead in the CRM.
 */
export interface SignUpLead {
  email: string // User email (required)
  name: string // Name or full name (optional)
  // url?: string // Form submission page URL
  utm: UtmParams // UTM parameters object (for CRM, not for dataLayer)
  params: {
    method: RegistrationMethod // Registration method (Google, Microsoft, email)
    plan: PricingPlan // Selected pricing plan
  }
}

/**
 * Represents the data structure for a form submission lead.
 * This is used to create a new lead in the CRM from contact forms.
 */
export interface SubmitForm {
  name?: string
  email: string
  webSite?: string
  kind: string
  message: string
}
