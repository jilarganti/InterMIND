import { createContact, createLead } from "../lib/pipedriveClient.js"
import { resolveCustomFieldId } from "../lib/fieldResolver.js"

// export const runtime = "edge"

export async function POST(request: Request) {
  const body = await request.json()

  const { name, email, webSite, channel, channelId, originId, category, message, leadSource, countryCode, countryName } = body as {
    name: string
    email: string
    webSite: string
    channel: string
    channelId: string
    originId: string
    category: string
    message: string
    leadSource: string
    countryCode?: string
    countryName?: string
  }

  try {
    const channelIdResolved = await resolveCustomFieldId("channel", channel)

    const person = await createContact({
      name,
      email: [{ value: email, label: "other" }],
      "0bcd0dbd7c022bcc908eecd87e72bd49f830e5a6": webSite,
      "08d290c3d972d735278898a71ad674b0ff698c66": countryCode,
      f64198e6b8654dd28a344f5831dbe547b960a17b: countryName,
    })

    const lead = await createLead({
      title: name,
      person_id: person.id,
      channel: channelIdResolved,
      channel_id: channelId,
      origin_id: originId,
      was_seen: true,
      ec30e5d548a40d6588bf2e1f06ec07cca7b4cc77: category,
      "381414c380220bf1d26ce7b7bdc6e6ff08e20e04": message,
      da3aa18ff6128966544ff359f07aebedc047b2e2: leadSource,
    })

    return new Response(JSON.stringify({ success: true, message: "Contact and lead created", person, lead }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    console.error("CRM error:", error)
    const message = error && typeof error === "object" && "message" in error ? (error as any).message : String(error)
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
