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
  KIND: "ec30e5d548a40d6588bf2e1f06ec07cca7b4cc77",
  MESSAGE: "381414c380220bf1d26ce7b7bdc6e6ff08e20e04",
  URL: "da3aa18ff6128966544ff359f07aebedc047b2e2",
  PARAMS: "5f55bbf5ed50e7a0952f7c7211de22e7ffcb70f5",
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
export type AnalyticsEvent = "sign_up" | "generate_lead" | "sign_in_attempt" | "try_it_attempt" | "get_started_attempt"
