/**
 * Конфигурация Pipedrive CRM
 * Настраиваемые константы и конфигурационные данные
 */

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

// Доступные методы регистрации
export type RegistrationMethod = "Google" | "Microsoft" | "Email" | undefined

// Доступные тарифные планы
export type PricingPlan = "Basic" | "Pro" | "Business"

// Типы событий для аналитики
export type AnalyticsEvent = "sign_up" | "generate_lead"
