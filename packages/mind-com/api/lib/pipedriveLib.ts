/**
 * Pipedrive API client for creating contacts and leads
 * This module provides functions to create contacts and leads in Pipedrive using the API.
 * It includes error handling and field resolution for custom fields.
 * It also fetches lead fields from Pipedrive for dynamic field resolution.
 */

import Pipedrive from "pipedrive"
import { CUSTOM_LEAD_FIELD } from "../config/pipedriveConfig.js"
import { LeadData } from "../types/pipedriveFields.js"

const getApiClient = () => {
  const client = new Pipedrive.ApiClient()
  const apiKey = process.env.PIPEDRIVE_API_TOKEN

  if (!apiKey) {
    throw new Error("Pipedrive API token is not set")
  }

  client.authentications.api_key.apiKey = apiKey
  return client
}

const createContact = async (personData: any) => {
  const client = getApiClient()
  const personsApi = new Pipedrive.PersonsApi(client)

  const response = await personsApi.addPerson(personData)

  if (!response.data.id) {
    throw new Error("Failed to create contact")
  }

  return response.data
}

const createLead = async (leadData: any) => {
  const client = getApiClient()
  const leadsApi = new Pipedrive.LeadsApi(client)

  const response = await leadsApi.addLead(leadData)

  if (!response.data.id) {
    throw new Error("Failed to create lead")
  }

  return response.data
}

/**
 * Resolve custom field ID by label
 */

let cachedFields: LeadFieldsMap | null = null

const resolveCustomFieldId = async (fieldKey: string, label: string): Promise<string | number> => {
  // Ленивая инициализация с простым кэшем
  if (!cachedFields) {
    try {
      cachedFields = await fetchLeadFields()
    } catch (err) {
      throw new Error(`Failed to fetch lead fields: ${extractErrorMessage(err)}`)
    }
  }

  const field = cachedFields[fieldKey]
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

// Вынесенный универсальный парсер ошибок
function extractErrorMessage(err: unknown): string {
  if (err && typeof err === "object" && "message" in err) {
    return String((err as any).message)
  }
  return String(err)
}

/**
 * Represents a selectable option for a custom field.
 */
interface FieldOption {
  id: string | number
  label: string
}

interface Field {
  key: string
  name: string
  options?: FieldOption[]
  [key: string]: any
}

type LeadFieldsMap = Record<string, Field>

async function fetchLeadFields(): Promise<LeadFieldsMap> {
  const apiToken = process.env.PIPEDRIVE_API_TOKEN

  if (!apiToken) {
    throw new Error("PIPEDRIVE_API_TOKEN is not set")
  }

  try {
    const response: Response = await fetch(`https://api.pipedrive.com/v1/leadFields?api_token=${apiToken}`)
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
    const message = error instanceof Error ? error.message : String(error)
    console.error("Error fetching lead fields:", message)
    throw new Error(message)
  }
}

/**
 * Создает контакт и лид в Pipedrive CRM
 * @param data - данные для создания контакта и лида
 * @param request - объект Request для получения referer URL
 * @returns объект с результатом операции
 */
export async function createContactAndLead(data: LeadData, request: Request) {
  try {
    const person = await createContact({
      name: data.contact.name,
      email: [{ value: data.contact.email, label: "other" }],
      phone: data.contact.phone ? [{ value: data.contact.phone, label: "other" }] : [],
    })

    // Определяем URL внутри функции
    const refererUrl = request.headers.get("referer") || new URL(request.url).origin

    const lead = await createLead({
      person_id: person.id, // Связываем лид с контактом
      channel: await resolveCustomFieldId("channel", data.lead.sourceChannel),
      was_seen: true, // Устанавливаем флаг, что лид был просмотрен

      title: data.lead.title,
      [CUSTOM_LEAD_FIELD.KIND]: data.lead.kind,
      [CUSTOM_LEAD_FIELD.MESSAGE]: data.lead.message,
      [CUSTOM_LEAD_FIELD.URL]: refererUrl,
      [CUSTOM_LEAD_FIELD.PARAMS]: data.lead.params,
    })

    return {
      success: true,
      message: "Contact and lead created",
      person,
      lead,
    }
  } catch (error) {
    console.error("CRM error:", error)
    const message = error instanceof Error ? error.message : String(error)

    return {
      success: false,
      message,
    }
  }
}

export { createContact, createLead, resolveCustomFieldId }
