import { UtmParams, Params } from "./pipedriveFields.js"
/**
 * Data layer events
 */
export interface SignUpDataLayerEvent {
  event: "sign_up"
  method: Params["method"] // Registration method (Google, Microsoft, email)
  plan: Params["plan"] // Selected pricing plan
}

export interface SubmitFormDataLayerEvent {
  event: "generate_lead" // Changed from "sign_up" to "generate_lead"
}

/**
 * Represents the data structure for a lead sign-up.
 * This is used to create a new lead in the CRM.
 */
export interface LeadSignUpProps {
  email: string // User email (required)
  name: string // Name or full name (optional)
  url?: string // Form submission page URL
  utm?: UtmParams // UTM parameters object (for CRM, not for dataLayer)
  params: {
    method: Params["method"] // Registration method (Google, Microsoft, email)
    plan: Params["plan"] // Selected pricing plan
  }
}

// interface Params {
//   method: "Google" | "Microsoft" | "email" // Registration method
//   plan: "basic" | "pro" | "business" // Selected pricing plan
// }

// interface UtmParams {
//   source?: string // Traffic source (e.g., google, linkedin)
//   medium?: string // Traffic channel (e.g., cpc, email)
//   campaign?: string // Marketing campaign name
//   term?: string // Keyword (if any)
//   content?: string // Banner or ad identifier
// }
