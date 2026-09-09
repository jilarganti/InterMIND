import { describe, expect, it } from "vitest"
import { ENTITY_ROLE_KEYS, LEGAL_ENTITIES, entitiesWithRoles } from "../../app/utils/legal-entities"

// inter-mind#1260: vendor reviewers (Paddle, Google Ads API, Samsung) ask for
// «the official government registry link» — every registration number on the
// site must link to the record that proves it, on the registry's own host.

describe("legal entities — registry numbers link to the official record", () => {
  it("names the two entities with their registration numbers", () => {
    const byKey = Object.fromEntries(LEGAL_ENTITIES.map((e) => [e.key, e]))
    expect(byKey.eu.name).toBe("MindMeeting OÜ")
    expect(byKey.eu.ids.find((i) => i.label === "Reg.")?.value).toBe("16207677")
    expect(byKey.eu.ids.find((i) => i.label === "VAT")?.value).toBe("EE102465446")
    expect(byKey.uae.name).toBe("Golden Fish LLC")
    expect(byKey.uae.ids.find((i) => i.label === "Reg.")?.value).toBe("2920093")
    expect(byKey.uae.ids.find((i) => i.label === "License")?.value).toBe("1414192")
  })

  it("links the Estonian registry code to ariregister and the UAE numbers to the DET licence record", () => {
    const eu = LEGAL_ENTITIES.find((e) => e.key === "eu")!
    const uae = LEGAL_ENTITIES.find((e) => e.key === "uae")!
    expect(eu.ids.find((i) => i.label === "Reg.")?.url).toBe("https://ariregister.rik.ee/eng/company/16207677")
    for (const id of uae.ids) expect(new URL(id.url!).host).toBe("eservices.dubaided.gov.ae")
  })

  it("maps each entity to a role key per surface", () => {
    expect(entitiesWithRoles("about").map((e) => e.roleKey)).toEqual([ENTITY_ROLE_KEYS.about.eu, ENTITY_ROLE_KEYS.about.uae])
    expect(entitiesWithRoles("home").map((e) => e.roleKey)).toEqual(["home.vcard.entityEuRole", "home.vcard.entityUaeRole"])
  })
})
