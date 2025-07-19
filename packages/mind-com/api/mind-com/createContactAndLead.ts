import { createContact, createLead } from "../lib/pipedriveClient.js"
import { resolveCustomFieldId } from "../lib/fieldResolver.js"
import { type FormSubmissionData, createPersonPayload, createLeadPayload } from "../types/pipedriveFields.js"

export async function POST(request: Request) {
  const body = await request.json()
  const data = body as FormSubmissionData

  try {
    // Резолвим ID канала через кастомные поля
    const channelId = await resolveCustomFieldId("channel", data.channel)

    // Создаем контакт с типизированными данными
    const person = await createContact(createPersonPayload(data))

    // Создаем лид с типизированными данными
    const lead = await createLead(createLeadPayload(data, person.id, channelId))

    return new Response(
      JSON.stringify({
        success: true,
        message: "Contact and lead created",
        person,
        lead,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    )
  } catch (error) {
    console.error("CRM error:", error)
    const message = error instanceof Error ? error.message : String(error)

    return new Response(JSON.stringify({ success: false, message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}

export async function GET() {
  return new Response(JSON.stringify({ status: "OK" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  })
}
