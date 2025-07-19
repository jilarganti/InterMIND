// packages/mind-com/api/services/pipedriveService.ts

import Pipedrive from "pipedrive"

// Типы для полей Pipedrive
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

/**
 * Сервис для работы с Pipedrive API
 * Объединяет функционал из /lib в один универсальный сервис
 */
export class PipedriveService {
  private apiClient: Pipedrive.ApiClient
  private cachedFields: LeadFieldsMap | null = null

  constructor() {
    this.apiClient = this.createApiClient()
  }

  // === CLIENT SETUP ===

  private createApiClient(): Pipedrive.ApiClient {
    const client = new Pipedrive.ApiClient()
    const apiKey = process.env.PIPEDRIVE_API_TOKEN

    if (!apiKey) {
      throw new Error("Pipedrive API token is not set")
    }

    client.authentications.api_key.apiKey = apiKey
    return client
  }

  // === CONTACT OPERATIONS ===

  async createContact(personData: any): Promise<any> {
    try {
      const personsApi = new Pipedrive.PersonsApi(this.apiClient)
      const response = await personsApi.addPerson(personData)

      if (!response.data.id) {
        throw new Error("Failed to create contact")
      }

      return response.data
    } catch (error) {
      console.error("PipedriveService.createContact error:", error)
      throw new Error(`Failed to create contact: ${this.extractErrorMessage(error)}`)
    }
  }

  // === LEAD OPERATIONS ===

  async createLead(leadData: any): Promise<any> {
    try {
      const leadsApi = new Pipedrive.LeadsApi(this.apiClient)
      const response = await leadsApi.addLead(leadData)

      if (!response.data.id) {
        throw new Error("Failed to create lead")
      }

      return response.data
    } catch (error) {
      console.error("PipedriveService.createLead error:", error)
      throw new Error(`Failed to create lead: ${this.extractErrorMessage(error)}`)
    }
  }

  // === FIELD OPERATIONS ===

  /**
   * Получает кастомные поля для лидов из Pipedrive и возвращает мапу по ключу
   */
  async fetchLeadFields(): Promise<LeadFieldsMap> {
    const apiToken = process.env.PIPEDRIVE_API_TOKEN

    if (!apiToken) {
      throw new Error("PIPEDRIVE_API_TOKEN is not set")
    }

    try {
      const response = await fetch(`https://api.pipedrive.com/v1/leadFields?api_token=${apiToken}`)
      let data: any = {}

      try {
        const contentType = response.headers.get("content-type")
        if (contentType && contentType.includes("application/json")) {
          data = await response.json()
        } else {
          const text = await response.text()
          throw new Error(`Server returned non-JSON: ${text}`)
        }
      } catch (e) {
        throw new Error("Failed to parse CRM response: " + (e instanceof Error ? e.message : String(e)))
      }

      if (!data.success) {
        console.error("Failed to fetch fields:", data.error)
        throw new Error(data.error || "Unknown error from Pipedrive API")
      }

      const fields = data.data.reduce((acc: LeadFieldsMap, field: Field) => {
        acc[field.key] = field
        return acc
      }, {})

      return fields
    } catch (error: unknown) {
      const message = this.extractErrorMessage(error)
      console.error("Error fetching lead fields:", message)
      throw new Error(message)
    }
  }

  /**
   * Резолвит ID кастомного поля по ключу и значению
   */
  async resolveCustomFieldId(fieldKey: string, label: string): Promise<string | number> {
    // Ленивая инициализация с простым кэшем
    if (!this.cachedFields) {
      try {
        this.cachedFields = await this.fetchLeadFields()
      } catch (err) {
        throw new Error(`Failed to fetch lead fields: ${this.extractErrorMessage(err)}`)
      }
    }

    const field = this.cachedFields[fieldKey]
    if (!field) {
      throw new Error(`Custom field "${fieldKey}" not found in lead fields`)
    }

    if (!Array.isArray(field.options)) {
      throw new Error(`Custom field "${fieldKey}" has no selectable options`)
    }

    const option = field.options.find((opt) => opt.label === label)
    if (!option) {
      const available = field.options.map((opt) => opt.label).join(", ")
      throw new Error(`Label "${label}" not found in field "${fieldKey}". Available: ${available}`)
    }

    return option.id
  }

  // === UTILITY METHODS ===

  /**
   * Извлекает сообщение об ошибке из различных типов ошибок
   */
  private extractErrorMessage(err: unknown): string {
    if (err && typeof err === "object" && "message" in err) {
      return String((err as any).message)
    }
    return String(err)
  }

  /**
   * Очищает кэш полей (полезно для тестов или принудительного обновления)
   */
  clearFieldsCache(): void {
    this.cachedFields = null
  }
}

// Создаем синглтон для переиспользования
export const pipedriveService = new PipedriveService()
