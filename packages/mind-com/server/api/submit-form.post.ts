import { createContactAndLead, type SubmitForm } from "../utils/pipedrive"
import { guardLeadSubmission } from "../utils/lead-guard"

export default defineEventHandler(async (event) => {
  const body = await readBody<SubmitForm & { captchaToken?: string; website?: string }>(event)

  if (!body?.email || !body?.kind) {
    setResponseStatus(event, 400)
    return { success: false, message: "email and kind are required" }
  }

  // Honeypot: hidden in every first-party form, so real users leave it empty.
  // Answered as success so a bot gets no signal to retry with it cleared.
  if (body.website) return { success: true, message: "Contact and lead created" }

  const rejection = await guardLeadSubmission(event, body.captchaToken)
  if (rejection) {
    console.warn(`[submit-form] rejected (${rejection.reason})`)
    setResponseStatus(event, rejection.status)
    return { success: false, message: "Request rejected" }
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
