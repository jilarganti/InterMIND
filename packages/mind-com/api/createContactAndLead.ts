import { createContact, createLead } from "./lib/pipedriveClient.js"
import { resolveCustomFieldId } from "./lib/fieldResolver.js"
import { LeadFields, ContactFields, CUSTOM_LEAD_FIELD, LeadData } from "./types/pipedriveFields.js"

export async function POST(request: Request) {
  const data = (await request.json()) as LeadData

  try {
    const channelId = await resolveCustomFieldId("channel", data.lead.sourceChannel)

    const person: ContactFields = await createContact({
      name: data.contact.name,
      email: [{ value: data.contact.email, label: "other" }],
      phone: data.contact.phone ? [{ value: data.contact.phone, label: "other" }] : [],
      // [PERSON_FIELDS.WEBSITE]: data.webSite,
      // [PERSON_FIELDS.COUNTRY_CODE]: data.countryCode,
      // [PERSON_FIELDS.COUNTRY_NAME]: data.countryName,
    })

    const lead: LeadFields = await createLead({
      title: data.contact.name + " lead",
      [CUSTOM_LEAD_FIELD.KIND]: data.lead.kind,
      [CUSTOM_LEAD_FIELD.MESSAGE]: data.lead.message,
      [CUSTOM_LEAD_FIELD.URL]: data.lead.url,
      [CUSTOM_LEAD_FIELD.PARAMS]: data.lead.params,
      sourceChannel: data.lead.sourceChannel,
      // utm: data.lead.utm,
      // person_id: person.id,
      // channel: channelId,
      // channel_id: data.channelId,
      // origin_id: data.originId,
      // was_seen: true,
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
