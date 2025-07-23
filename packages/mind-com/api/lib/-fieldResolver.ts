import { fetchLeadFields } from "./-fetchLeadFields.js"
import { type LeadFieldsMap } from "./-fetchLeadFields.js"

let cachedFields: LeadFieldsMap | null = null

export const resolveCustomFieldId = async (fieldKey: string, label: string): Promise<string | number> => {
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
