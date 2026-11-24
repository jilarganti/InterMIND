import { describe, it, expect } from "vitest"
import { CONSENT_REQUIRED_COUNTRIES, consentRequiredFor } from "../../server/utils/consent-region"

describe("consentRequiredFor", () => {
  it("keeps analytics off for the EEA, the United Kingdom and Switzerland", () => {
    for (const country of ["DE", "FR", "EE", "NO", "IS", "LI", "GB", "CH", "RE", "AX"]) expect(consentRequiredFor(country)).toBe(true)
  })

  it("lets analytics run elsewhere", () => {
    for (const country of ["US", "AE", "BR", "IN", "JP", "TR", "RU", "CA"]) expect(consentRequiredFor(country)).toBe(false)
  })

  it("reads the header value whatever its case and padding", () => {
    expect(consentRequiredFor(" de ")).toBe(true)
    expect(consentRequiredFor("us")).toBe(false)
  })

  it("treats a missing or malformed country as consent needed", () => {
    for (const country of [undefined, null, "", "XX1", "U", "USA", "-"]) expect(consentRequiredFor(country)).toBe(true)
  })

  it("covers 27 EU states, 3 EEA states, 7 EU territories with their own code, the UK and Switzerland", () => {
    expect(CONSENT_REQUIRED_COUNTRIES).toHaveLength(39)
    expect(new Set(CONSENT_REQUIRED_COUNTRIES).size).toBe(39)
  })
})
