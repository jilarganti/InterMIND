// The two legal entities behind Mind.com / InterMIND, with the identifiers a
// vendor reviewer checks and the official government record each number links
// to (inter-mind#1260). Language-neutral: the role line is localized per page.
// The UAE link is the DET certified e-document of the CURRENT licence version
// (the QR on the licence resolves to it) — re-verify it after every renewal.

export interface LegalEntityId {
  label: string
  value: string
  url?: string
}

export interface LegalEntity {
  key: "eu" | "uae"
  name: string
  country: string
  ids: LegalEntityId[]
}

const DET_LICENCE_URL = "https://eservices.dubaided.gov.ae/rt/1097891230.3"

export const LEGAL_ENTITIES: readonly LegalEntity[] = [
  {
    key: "eu",
    name: "MindMeeting OÜ",
    country: "Estonia",
    ids: [
      { label: "Reg.", value: "16207677", url: "https://ariregister.rik.ee/eng/company/16207677" },
      { label: "VAT", value: "EE102465446" },
    ],
  },
  {
    key: "uae",
    name: "Golden Fish LLC",
    country: "UAE",
    ids: [
      { label: "Reg.", value: "2920093", url: DET_LICENCE_URL },
      { label: "License", value: "1414192", url: DET_LICENCE_URL },
    ],
  },
]

export const ENTITY_ROLE_KEYS = {
  about: { eu: "about.entityEuRole", uae: "about.entityUaeRole" },
  home: { eu: "home.vcard.entityEuRole", uae: "home.vcard.entityUaeRole" },
} as const

export function entitiesWithRoles(surface: keyof typeof ENTITY_ROLE_KEYS) {
  return LEGAL_ENTITIES.map((e) => ({ ...e, roleKey: ENTITY_ROLE_KEYS[surface][e.key] }))
}
