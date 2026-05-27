import { createContactAndLead, type SubmitForm } from "../utils/pipedrive"

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

  // The "generate_lead" conversion is captured client-side in PostHog
  // (ContactForm.vue) after a successful submit, gated by Usercentrics consent.
  return result
})
