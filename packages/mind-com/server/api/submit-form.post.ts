import { createContactAndLead, type SubmitForm, type DataLayerEvent } from "../utils/pipedrive"

export default defineEventHandler(async (event) => {
  const body = await readBody<SubmitForm>(event)

  if (!body?.email || !body?.kind) {
    setResponseStatus(event, 400)
    return { success: false, message: "email and kind are required" }
  }

  const referer = getRequestHeader(event, "referer") || getRequestURL(event).origin
  const result = await createContactAndLead(body, referer)

  if (!result.success) {
    setResponseStatus(event, 500)
    return result
  }

  const gtmData: DataLayerEvent = { event: "generate_lead", kind: body.kind }
  return { ...result, gtmData }
})
