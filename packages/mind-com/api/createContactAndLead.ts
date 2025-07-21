import { createContact, createLead } from "./lib/pipedriveClient.js"
import { resolveCustomFieldId } from "./lib/fieldResolver.js"
import { PERSON_FIELDS, LEAD_FIELDS, type FormData } from "./types/pipedriveFields.js"

export async function POST(request: Request) {
  const data = (await request.json()) as FormData

  try {
    const channelId = await resolveCustomFieldId("channel", data.channel)

    const person = await createContact({
      name: data.name,
      email: [{ value: data.email, label: "other" }],
      [PERSON_FIELDS.WEBSITE]: data.webSite,
      [PERSON_FIELDS.COUNTRY_CODE]: data.countryCode,
      [PERSON_FIELDS.COUNTRY_NAME]: data.countryName,
    })

    const lead = await createLead({
      title: data.name,
      person_id: person.id,
      channel: channelId,
      channel_id: data.channelId,
      origin_id: data.originId,
      was_seen: true,
      [LEAD_FIELDS.CATEGORY]: data.category,
      [LEAD_FIELDS.MESSAGE]: data.message,
      [LEAD_FIELDS.LEAD_SOURCE]: data.leadSource,
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
