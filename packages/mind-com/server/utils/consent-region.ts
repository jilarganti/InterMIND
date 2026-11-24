// Where analytics would need a visitor's consent. mind.com shows no cookie banner (owner
// 2026-11-24, the Usercentrics CMP is gone): PostHog simply stays off for a visitor from the
// European Economic Area, the United Kingdom or Switzerland and runs for everyone else.
// The same list intermind.com asks its own banner by.

/** EU member states. */
const EU = [
  "AT",
  "BE",
  "BG",
  "HR",
  "CY",
  "CZ",
  "DK",
  "EE",
  "FI",
  "FR",
  "DE",
  "GR",
  "HU",
  "IE",
  "IT",
  "LV",
  "LT",
  "LU",
  "MT",
  "NL",
  "PL",
  "PT",
  "RO",
  "SK",
  "SI",
  "ES",
  "SE",
] as const
/** The rest of the EEA. */
const EEA_EFTA = ["IS", "LI", "NO"] as const
/** EU territory that geo databases report under a code of its own (French outermost regions, Åland). */
const EU_OWN_CODE = ["GF", "GP", "MQ", "RE", "YT", "MF", "AX"] as const
/** Outside the EEA, with the same consent rule in their own law. */
const UK_CH = ["GB", "CH"] as const

export const CONSENT_REQUIRED_COUNTRIES: readonly string[] = [...EU, ...EEA_EFTA, ...EU_OWN_CODE, ...UK_CH]

/** Whether analytics would need this visitor's consent. Unknown country → yes: analytics stays off. */
export function consentRequiredFor(country: string | undefined | null): boolean {
  const code = (country ?? "").trim().toUpperCase()
  if (!/^[A-Z]{2}$/.test(code)) return true
  return CONSENT_REQUIRED_COUNTRIES.includes(code)
}
