import { createContact, createLead } from "./lib/pipedriveClient.js"
import { resolveCustomFieldId } from "./lib/fieldResolver.js"
import { LeadFields, ContactFields, CUSTOM_LEAD_FIELD, LeadData } from "./types/pipedriveFields.js"

export async function POST(request: Request) {
  const data = (await request.json()) as LeadData

  try {
    // const channelId = await resolveCustomFieldId("channel", data.lead.sourceChannel)

    const person = await createContact({
      name: data.contact.name,
      email: [{ value: data.contact.email, label: "other" }],
      phone: data.contact.phone ? [{ value: data.contact.phone, label: "other" }] : [],
    })

    const lead = await createLead({
      person_id: person.id, // Связываем лид с контактом
      channel: await resolveCustomFieldId("channel", data.lead.sourceChannel),
      was_seen: true, // Устанавливаем флаг, что лид был просмотрен

      title: data.lead.title,
      [CUSTOM_LEAD_FIELD.KIND]: data.lead.kind,
      [CUSTOM_LEAD_FIELD.MESSAGE]: data.lead.message,
      [CUSTOM_LEAD_FIELD.URL]: data.lead.url,
      [CUSTOM_LEAD_FIELD.PARAMS]: data.lead.params,
    })

    return new Response(JSON.stringify({ success: true, message: "Contact and lead created", person, lead }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    console.error("CRM error:", error)
    const message = error instanceof Error ? error.message : String(error)

    return new Response(JSON.stringify({ success: false, message }), { status: 500, headers: { "Content-Type": "application/json" } })
  }
}

export async function GET() {
  return new Response(JSON.stringify({ status: "OK" }), { status: 200, headers: { "Content-Type": "application/json" } })
}
