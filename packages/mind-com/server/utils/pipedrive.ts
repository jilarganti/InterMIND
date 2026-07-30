/**
 * Pipedrive CRM integration for the mind.com campaign site.
 * Creates a Person + Lead from contact form submissions.
 * Restored from VitePress api/lib/pipedriveLib.ts (commit 0a737894^).
 */

import Pipedrive from "pipedrive"

export const CUSTOM_LEAD_FIELD = {
  KIND: "ec30e5d548a40d6588bf2e1f06ec07cca7b4cc77",
  MESSAGE: "381414c380220bf1d26ce7b7bdc6e6ff08e20e04",
  URL: "da3aa18ff6128966544ff359f07aebedc047b2e2",
  PARAMS: "5f55bbf5ed50e7a0952f7c7211de22e7ffcb70f5",
} as const

export enum Channel {
  WEB_VISITORS = "Web visitors",
  WEB_FORMS = "Web forms",
  MESSAGING_INBOX = "Messaging Inbox",
  CHATBOT = "Chatbot",
  MANUAL_ENTRY = "Manual entry",
}

// Canonical conversion event names — "generate_lead" is captured in PostHog
// from ContactForm.vue on a successful contact-form submit.
export type AnalyticsEvent = "sign_up" | "generate_lead" | "sign_in_attempt" | "try_it_attempt" | "get_started_attempt"

export interface SubmitForm {
  name?: string
  email: string
  webSite?: string
  kind: string
  message: string
}

interface FieldOption {
  id: string | number
  label: string
}

interface Field {
  key: string
  name: string
  options?: FieldOption[]
  [key: string]: unknown
}

type LeadFieldsMap = Record<string, Field>

const getApiClient = () => {
  const client = new Pipedrive.ApiClient()
  const apiKey = process.env.PIPEDRIVE_API_TOKEN
  if (!apiKey) throw new Error("PIPEDRIVE_API_TOKEN is not set")
  client.authentications.api_key.apiKey = apiKey
  return client
}

const createContact = async (personData: Record<string, unknown>) => {
  const client = getApiClient()
  const personsApi = new Pipedrive.PersonsApi(client)
  const response = await personsApi.addPerson(personData)
  if (!response.data.id) throw new Error("Failed to create contact")
  return response.data
}

const createLead = async (leadData: Record<string, unknown>) => {
  const client = getApiClient()
  const leadsApi = new Pipedrive.LeadsApi(client)
  const response = await leadsApi.addLead(leadData)
  if (!response.data.id) throw new Error("Failed to create lead")
  return response.data
}

let cachedFields: LeadFieldsMap | null = null

async function fetchLeadFields(): Promise<LeadFieldsMap> {
  const apiToken = process.env.PIPEDRIVE_API_TOKEN
  if (!apiToken) throw new Error("PIPEDRIVE_API_TOKEN is not set")
  const response = await fetch(`https://api.pipedrive.com/v1/leadFields?api_token=${apiToken}`)
  const contentType = response.headers.get("content-type")
  if (!contentType?.includes("application/json")) {
    throw new Error(`Pipedrive returned non-JSON: ${await response.text()}`)
  }
  const data = (await response.json()) as { success?: boolean; data?: Field[]; error?: string }
  if (!data.success || !data.data) throw new Error(data.error || "Unknown error from Pipedrive API")
  return data.data.reduce<LeadFieldsMap>((acc, field) => {
    acc[field.key] = field
    return acc
  }, {})
}

const resolveCustomFieldId = async (fieldKey: string, label: string): Promise<string | number> => {
  if (!cachedFields) cachedFields = await fetchLeadFields()
  const field = cachedFields[fieldKey]
  if (!field) throw new Error(`Custom field "${fieldKey}" not found in lead fields`)
  if (!Array.isArray(field.options)) throw new Error(`Custom field "${fieldKey}" has no selectable options`)
  const option = field.options.find((opt) => opt.label === label)
  if (!option) {
    const available = field.options.map((opt) => opt.label).join(", ")
    throw new Error(`Label "${label}" not found in field "${fieldKey}". Available: ${available}`)
  }
  return option.id
}

export async function createContactAndLead(data: SubmitForm, sourceUrl: string) {
  try {
    const person = await createContact({
      name: data.name || data.email,
      email: [{ value: data.email, label: "other" }],
    })

    const message = (data.message || "") + (data.webSite ? " 🌎 " + data.webSite : "")

    const lead = await createLead({
      person_id: person.id,
      channel: await resolveCustomFieldId("channel", Channel.WEB_FORMS),
      was_seen: true,
      title: data.name || data.email,
      [CUSTOM_LEAD_FIELD.KIND]: data.kind,
      [CUSTOM_LEAD_FIELD.MESSAGE]: message,
      [CUSTOM_LEAD_FIELD.URL]: sourceUrl,
    })

    return { success: true as const, message: "Contact and lead created", person, lead }
  } catch (error) {
    const statusCode = (error as { errorCode?: number; status?: number })?.errorCode || (error as { status?: number })?.status || 500
    const details = (error as { context?: { body?: unknown }; body?: unknown })?.context?.body || (error as { body?: unknown })?.body || null
    const rawMessage = (error as { message?: unknown })?.message
    const message =
      typeof rawMessage === "string" ? rawMessage : (details as { error?: string })?.error || (rawMessage ? JSON.stringify(rawMessage) : String(error))
    console.error("CRM error:", { message, statusCode, details, contactEmail: data.email, leadTitle: data.name })
    return { success: false as const, message, statusCode }
  }
}
