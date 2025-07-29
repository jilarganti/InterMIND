/**
 * User Sign-Up API Endpoint
 *
 * Handles user registration requests, creates leads in Pipedrive CRM,
 * and returns GTM DataLayer events for analytics tracking. Processes
 * sign-up data with pricing plans and registration methods.
 *
 * Features:
 * - Domain-protected endpoint
 * - CRM lead creation in Pipedrive
 * - GTM DataLayer event generation
 * - Analytics and conversion tracking
 * - Contact management
 * - Registration method tracking
 * - Pricing plan assignment
 * - UTM parameter handling
 */

import { createContactAndLead } from "./lib/pipedriveLib.js"
import { Channel, AnalyticsEvent } from "./config/pipedriveConfig.js"
import { LeadData, DataLayerEvent, SignUpLead } from "./types/pipedriveFields.js"
import { withDomainCheck } from "./lib/domainMiddleware.js"

export async function POST(request: Request) {
  return withDomainCheck(request, async (request) => {
    const data = (await request.json()) as SignUpLead

    // Transform to LeadData for existing API
    const leadData: LeadData = {
      lead: {
        title: data.name,
        kind: data.params.plan, // Use plan as kind for lead categorization
        message: "Source: " + data.utm.source + "; Campaign: " + data.utm.campaign + ";",
        sourceChannel: Channel.WEB_VISITORS, // Use "Web visitors" channel for sign-up
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
        event: data.name as AnalyticsEvent, // Use name as event type
        method: data.params.method,
        plan: data.params.plan,
      }
      ;(result as any).gtmData = gtmData
    }

    return new Response(JSON.stringify(result), {
      status: result.success ? 200 : 500,
      headers: { "Content-Type": "application/json" },
    })
  })
}
