/**
 * Contact Form Submission API Endpoint
 *
 * Handles contact form submissions, creates leads in Pipedrive CRM,
 * and returns GTM DataLayer events for analytics tracking. Processes
 * form data including contact details, message content, and website info.
 *
 * Features:
 * - Domain-protected endpoint
 * - Contact form processing
 * - CRM lead generation in Pipedrive
 * - GTM DataLayer event generation
 * - Analytics and conversion tracking
 * - Message content handling
 * - Website URL tracking
 * - Lead categorization
 */

import { createContactAndLead } from "./lib/pipedriveLib.js"
import { Channel } from "./config/pipedriveConfig.js"
import { LeadData, DataLayerEvent, SubmitForm } from "./types/pipedriveFields.js"
import { withDomainCheck } from "./lib/domainMiddleware.js"

export async function POST(request: Request) {
  return withDomainCheck(request, async (request) => {
    const data = (await request.json()) as SubmitForm

    // Transform to LeadData for existing API
    const leadData: LeadData = {
      lead: {
        title: data.name,
        kind: data.kind,
        message: data.message,
        params: "🌎 " + data.webSite,
        sourceChannel: Channel.WEB_FORMS,
      },
      contact: {
        name: data.name,
        email: data.email,
      },
    }

    // Call library function directly
    const result = await createContactAndLead(leadData, request)

    // Add GTM data to response
    if (result.success) {
      const gtmData: DataLayerEvent = {
        event: "generate_lead",
        kind: data.kind,
      }
      ;(result as any).gtmData = gtmData
    }

    return new Response(JSON.stringify(result), {
      status: result.success ? 200 : 500,
      headers: { "Content-Type": "application/json" },
    })
  })
}
