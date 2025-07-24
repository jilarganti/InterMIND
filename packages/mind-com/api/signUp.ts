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
import { Channel } from "./config/pipedriveConfig.js"
import { LeadData, DataLayerEvent, SignUpLead } from "./types/pipedriveFields.js"
import { withDomainCheck } from "./lib/domainMiddleware.js"

export async function POST(request: Request) {
  return withDomainCheck(request, async (request) => {
    const data = (await request.json()) as SignUpLead

    // Transform to LeadData for existing API
    const leadData: LeadData = {
      lead: {
        title: "sign_up",
        kind: data.name,
        message: "Plan: " + data.params.plan + "; Method: " + data.params.method + "; Source: " + data.utm.source + "; Campaign: " + data.utm.campaign,
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
        event: "sign_up",
        method: data.params.method,
        plan: data.params.plan,
        kind: data.name, // Use name as lead type
      }
      ;(result as any).gtmData = gtmData
    }

    return new Response(JSON.stringify(result), {
      status: result.success ? 200 : 500,
      headers: { "Content-Type": "application/json" },
    })
  })
}
