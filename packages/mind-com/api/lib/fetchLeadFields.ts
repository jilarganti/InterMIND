import { fetch, Headers, Response } from "undici"

export interface FieldOption {
  id: string | number
  label: string
}

export interface Field {
  key: string
  name: string
  options?: FieldOption[]
  [key: string]: any // для гибкости
}

export type LeadFieldsMap = Record<string, Field>

/**
 * Получает кастомные поля для лидов из Pipedrive и возвращает мапу по ключу
 * @returns {Promise<LeadFieldsMap>}
 */
export async function fetchLeadFields(): Promise<LeadFieldsMap> {
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
