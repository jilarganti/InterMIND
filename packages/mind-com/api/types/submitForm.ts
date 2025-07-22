import { UtmParams, Params } from "./pipedriveFields.js"
/**
 * Data layer event for sign up
 */
export interface SubmitFormDataLayerEvent {
  event: "generate_lead" // Changed from "sign_up" to "generate_lead"
  kind?: string // Category of the lead, if applicable
}

/**
 * Represents the data structure for a lead sign-up.
 * This is used to create a new lead in the CRM.
 */
export interface SubmitFormLead {
  email: string // User email (required)
  name: string // Name or full name (optional)
  url?: string // Form submission page URL
  utm?: UtmParams // UTM parameters object (for CRM, not for dataLayer)
  params: {
    method: Params["method"] // Registration method (Google, Microsoft, email)
    plan: Params["plan"] // Selected pricing plan
  }
}
