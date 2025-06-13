import { fetchLeadFields } from "./fetchLeadFields"
import { type LeadFieldsMap } from "./fetchLeadFields"

let cachedFields: LeadFieldsMap | null = null

export const resolveCustomFieldId = async (fieldKey: string, label: string): Promise<string | number> => {
  if (!cachedFields) {
    cachedFields = await fetchLeadFields()
  }

  const field = cachedFields[fieldKey]
  if (!field || !field.options) {
    throw new Error(`Field "${fieldKey}" not found or has no options`)
  }

  const option = field.options.find((opt) => opt.label === label)
  if (!option) {
    throw new Error(`Option "${label}" not found in field "${fieldKey}"`)
  }

  return option.id
}
