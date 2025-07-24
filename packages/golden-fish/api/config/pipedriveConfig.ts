/**
 * Pipedrive CRM Configuration
 *
 * Configuration constants and data structures for Pipedrive CRM integration.
 * Contains custom field IDs, channel definitions, and type definitions
 * for lead management and analytics tracking.
 *
 * Features:
 * - Custom lead field mappings
 * - Source channel enumeration
 * - Registration method types
 * - Pricing plan definitions
 * - Analytics event types
 */

// Custom field IDs for leads
export const CUSTOM_LEAD_FIELD = {
  KIND: "8464d8373190f2251c5e1e8c035d75ddb8ef52e2",
  MESSAGE: "baa8db361de3fa51e24c8e18c7d2271643635ba9",
  URL: "bcf617c56c755e11604aea1ed230d695cd5c2735",
}

// Enumeration of possible channels
export enum Channel {
  WEB_VISITORS = "Web visitors",
  WEB_FORMS = "Web forms",
  MESSAGING_INBOX = "Messaging Inbox",
  CHATBOT = "Chatbot",
  MANUAL_ENTRY = "Manual entry",
}

// Available registration methods
export type RegistrationMethod = "Google" | "Microsoft" | "Email" | undefined

// Available pricing plans
export type PricingPlan = "Basic" | "Pro" | "Business"

// Analytics event types
export type AnalyticsEvent = "sign_up" | "generate_lead"
