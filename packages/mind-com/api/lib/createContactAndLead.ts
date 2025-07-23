import { createContact, createLead, resolveCustomFieldId } from "./pipedriveClient.js"
import { CUSTOM_LEAD_FIELD, LeadData } from "../types/pipedriveFields.js"

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

/**
 * API endpoint для создания контакта и лида
 */
export async function POST(request: Request) {
  const data = (await request.json()) as LeadData

  const result = await createContactAndLead(data, request)

  return new Response(JSON.stringify(result), {
    status: result.success ? 200 : 500,
    headers: { "Content-Type": "application/json" },
  })
}

export async function GET() {
  return new Response(JSON.stringify({ status: "OK" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  })
}
