/**
 * Unit tests for UTM utilities
 */

import { describe, it, expect, vi, beforeEach, afterEach } from "vitest"
import { extractUtmFromUrl, saveUtmParams, getSavedUtmParams, determineTrafficSource, getUtmForApi, initUtmTracking } from "../../../../shared/utils/utm.js"

// Mock window and localStorage
const mockLocalStorage = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  key: vi.fn(),
  length: 0,
}

const mockLocation = {
  search: "",
  pathname: "",
  href: "",
}

const mockDocument = {
  referrer: "",
}

// Setup global mocks
Object.defineProperty(global, "window", {
  value: { location: mockLocation },
  writable: true,
})

Object.defineProperty(global, "localStorage", {
  value: mockLocalStorage,
  writable: true,
})

Object.defineProperty(global, "document", {
  value: mockDocument,
  writable: true,
})

describe("UTM Utilities", () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mockLocalStorage.length = 0
    mockLocation.search = ""
    mockDocument.referrer = ""
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe("extractUtmFromUrl", () => {
    it("should extract UTM parameters from URL", () => {
      mockLocation.search = "?utm_source=google&utm_campaign=summer2025&other_param=value"

      const result = extractUtmFromUrl()

      expect(result).toEqual({
        utm_source: "google",
        utm_campaign: "summer2025",
      })
    })

    it("should return empty object when no UTM parameters", () => {
      mockLocation.search = "?other_param=value&another=test"

      const result = extractUtmFromUrl()

      expect(result).toEqual({})
    })

    it("should return empty object when window is undefined", () => {
      const originalWindow = global.window
      // @ts-ignore
      delete global.window

      const result = extractUtmFromUrl()

      expect(result).toEqual({})

      global.window = originalWindow
    })

    it("should handle empty search string", () => {
      mockLocation.search = ""

      const result = extractUtmFromUrl()

      expect(result).toEqual({})
    })
  })

  describe("saveUtmParams", () => {
    it("should save UTM parameters to localStorage with expiry", () => {
      const params = {
        utm_source: "facebook",
        utm_campaign: "winter_promo",
      }

      saveUtmParams(params)

      expect(mockLocalStorage.setItem).toHaveBeenCalledTimes(3) // 2 params + first_visit
      expect(mockLocalStorage.setItem).toHaveBeenCalledWith("gf_utm_utm_source", expect.stringContaining('"value":"facebook"'))
      expect(mockLocalStorage.setItem).toHaveBeenCalledWith("gf_utm_utm_campaign", expect.stringContaining('"value":"winter_promo"'))
    })

    it("should not save when window is undefined", () => {
      const originalWindow = global.window
      // @ts-ignore
      delete global.window

      saveUtmParams({ utm_source: "test" })

      expect(mockLocalStorage.setItem).not.toHaveBeenCalled()

      global.window = originalWindow
    })

    it("should not save empty parameters", () => {
      saveUtmParams({})

      expect(mockLocalStorage.setItem).not.toHaveBeenCalled()
    })

    it("should save first_visit date if not exists", () => {
      mockLocalStorage.getItem.mockReturnValue(null)

      saveUtmParams({ utm_source: "test" })

      expect(mockLocalStorage.setItem).toHaveBeenCalledWith("gf_utm_first_visit", expect.stringContaining('"value":"'))
    })
  })

  describe("getSavedUtmParams", () => {
    it("should retrieve valid UTM parameters from localStorage", () => {
      const now = Date.now()
      const futureExpiry = now + 1000000

      mockLocalStorage.length = 2
      mockLocalStorage.key.mockReturnValueOnce("gf_utm_utm_source").mockReturnValueOnce("gf_utm_utm_campaign")

      mockLocalStorage.getItem
        .mockReturnValueOnce(JSON.stringify({ value: "google", expiry: futureExpiry }))
        .mockReturnValueOnce(JSON.stringify({ value: "test_campaign", expiry: futureExpiry }))

      const result = getSavedUtmParams()

      expect(result).toEqual({
        utm_source: "google",
        utm_campaign: "test_campaign",
      })
    })

    it("should remove expired parameters", () => {
      const now = Date.now()
      const pastExpiry = now - 1000

      mockLocalStorage.length = 1
      mockLocalStorage.key.mockReturnValueOnce("gf_utm_utm_source")
      mockLocalStorage.getItem.mockReturnValueOnce(JSON.stringify({ value: "expired", expiry: pastExpiry }))

      const result = getSavedUtmParams()

      expect(result).toEqual({})
      expect(mockLocalStorage.removeItem).toHaveBeenCalledWith("gf_utm_utm_source")
    })

    it("should return empty object when window is undefined", () => {
      const originalWindow = global.window
      // @ts-ignore
      delete global.window

      const result = getSavedUtmParams()

      expect(result).toEqual({})

      global.window = originalWindow
    })
  })

  describe("determineTrafficSource", () => {
    it("should return source with campaign when both are present", () => {
      mockLocalStorage.length = 2
      mockLocalStorage.key.mockReturnValueOnce("gf_utm_utm_source").mockReturnValueOnce("gf_utm_utm_campaign")

      const futureExpiry = Date.now() + 1000000
      mockLocalStorage.getItem
        .mockReturnValueOnce(JSON.stringify({ value: "linkedin", expiry: futureExpiry }))
        .mockReturnValueOnce(JSON.stringify({ value: "job_ads", expiry: futureExpiry }))

      const result = determineTrafficSource()

      expect(result).toBe("linkedin[job_ads]")
    })

    it("should return source only when campaign is not present", () => {
      mockLocalStorage.length = 1
      mockLocalStorage.key.mockReturnValueOnce("gf_utm_utm_source")

      const futureExpiry = Date.now() + 1000000
      mockLocalStorage.getItem.mockReturnValueOnce(JSON.stringify({ value: "newsletter", expiry: futureExpiry }))

      const result = determineTrafficSource()

      expect(result).toBe("newsletter")
    })

    it("should return campaign when only campaign is present", () => {
      mockLocalStorage.length = 1
      mockLocalStorage.key.mockReturnValueOnce("gf_utm_utm_campaign")

      const futureExpiry = Date.now() + 1000000
      mockLocalStorage.getItem.mockReturnValueOnce(JSON.stringify({ value: "special_promo", expiry: futureExpiry }))

      const result = determineTrafficSource()

      expect(result).toBe("special_promo")
    })

    it('should return "Organic" for search engine referrers', () => {
      mockLocalStorage.length = 0
      mockDocument.referrer = "https://www.google.com/search?q=test"

      const result = determineTrafficSource()

      expect(result).toBe("Organic")
    })

    it('should return "Referral" for non-search referrers', () => {
      mockLocalStorage.length = 0
      mockDocument.referrer = "https://example.com/page"

      const result = determineTrafficSource()

      expect(result).toBe("Referral")
    })

    it('should return "Direct" for no referrer and no UTM', () => {
      mockLocalStorage.length = 0
      mockDocument.referrer = ""

      const result = determineTrafficSource()

      expect(result).toBe("Direct")
    })
  })

  describe("getUtmForApi", () => {
    it("should return UTM parameters for API", () => {
      mockLocalStorage.length = 2
      mockLocalStorage.key.mockReturnValueOnce("gf_utm_utm_source").mockReturnValueOnce("gf_utm_utm_campaign")

      const futureExpiry = Date.now() + 1000000
      mockLocalStorage.getItem
        .mockReturnValueOnce(JSON.stringify({ value: "twitter", expiry: futureExpiry }))
        .mockReturnValueOnce(JSON.stringify({ value: "spring_2025", expiry: futureExpiry }))

      const result = getUtmForApi()

      expect(result).toEqual({
        source: "twitter",
        campaign: "spring_2025",
      })
    })

    it("should use determineTrafficSource for missing source", () => {
      mockLocalStorage.length = 0
      mockDocument.referrer = ""

      const result = getUtmForApi()

      expect(result).toEqual({
        source: "Direct",
        campaign: "direct",
      })
    })

    it('should use "direct" for missing campaign', () => {
      mockLocalStorage.length = 1
      mockLocalStorage.key.mockReturnValueOnce("gf_utm_utm_source")

      const futureExpiry = Date.now() + 1000000
      mockLocalStorage.getItem.mockReturnValueOnce(JSON.stringify({ value: "email", expiry: futureExpiry }))

      const result = getUtmForApi()

      expect(result).toEqual({
        source: "email",
        campaign: "direct",
      })
    })
  })

  describe("initUtmTracking", () => {
    it("should save UTM parameters from URL", () => {
      mockLocation.search = "?utm_source=instagram&utm_campaign=story_ads"

      initUtmTracking()

      expect(mockLocalStorage.setItem).toHaveBeenCalled()
    })

    it("should not save when no UTM parameters in URL", () => {
      mockLocation.search = "?other_param=value"

      initUtmTracking()

      expect(mockLocalStorage.setItem).not.toHaveBeenCalled()
    })
  })
})
