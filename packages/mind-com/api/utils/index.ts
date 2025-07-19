// packages/mind-com/api/utils/index.ts

import type { ApiResponse, ValidationError, ContactData, LeadData, FormSubmissionData } from "../types"

// Утилита для создания успешного ответа
export function createSuccessResponse<T>(data: T, message?: string): ApiResponse<T> {
  return {
    success: true,
    data,
    message,
  }
}

// Утилита для создания ошибки
export function createErrorResponse(message: string, error?: string): ApiResponse {
  return {
    success: false,
    message,
    error,
  }
}

// Утилита для обработки ошибок
export function handleApiError(error: unknown): ApiResponse {
  console.error("API Error:", error)

  if (error instanceof Error) {
    return createErrorResponse("Server error", error.message)
  }

  return createErrorResponse("Unknown server error", String(error))
}

// Валидация email
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Валидация URL
export function isValidUrl(url: string): boolean {
  try {
    new URL(url)
    return url.startsWith("http://") || url.startsWith("https://")
  } catch {
    return false
  }
}

// Валидация данных контакта
export function validateContactData(data: any): ValidationError[] {
  const errors: ValidationError[] = []

  if (!data.name || typeof data.name !== "string" || data.name.trim().length < 2) {
    errors.push({ field: "name", message: "Name is required and must be at least 2 characters" })
  }

  if (!data.email || !isValidEmail(data.email)) {
    errors.push({ field: "email", message: "Valid email is required" })
  }

  if (data.website && !isValidUrl(data.website)) {
    errors.push({ field: "website", message: "Website must be a valid URL" })
  }

  return errors
}

// Валидация данных лида
export function validateLeadData(data: any): ValidationError[] {
  const errors: ValidationError[] = []

  if (!data.title || typeof data.title !== "string" || data.title.trim().length < 2) {
    errors.push({ field: "title", message: "Title is required and must be at least 2 characters" })
  }

  if (!data.channel || typeof data.channel !== "string") {
    errors.push({ field: "channel", message: "Channel is required" })
  }

  return errors
}

// Валидация данных формы
export function validateFormData(data: any): ValidationError[] {
  const contactErrors = validateContactData(data)
  const leadErrors = validateLeadData({
    title: data.name,
    channel: data.channel,
  })

  return [...contactErrors, ...leadErrors]
}

// Извлечение данных контакта из формы
export function extractContactData(formData: FormSubmissionData): ContactData {
  return {
    name: formData.name.trim(),
    email: formData.email.trim(),
    phone: formData.phone?.trim(),
    website: formData.website?.trim(),
    countryCode: formData.countryCode?.trim(),
    countryName: formData.countryName?.trim(),
  }
}

// Извлечение данных лида из формы
export function extractLeadData(formData: FormSubmissionData, personId?: string | number): LeadData {
  return {
    title: formData.name.trim(),
    personId,
    channel: formData.channel,
    channelId: formData.channelId?.trim(),
    originId: formData.originId?.trim(),
    category: formData.category?.trim(),
    message: formData.message?.trim(),
    leadSource: formData.leadSource?.trim(),
  }
}
