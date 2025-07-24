import { describe, it, expect, vi, beforeEach, afterEach } from "vitest"
import { isAllowedDomain, ALLOWED_DOMAINS } from "../../api/config/corsConfig"

describe("corsConfig", () => {
  let consoleSpy: any

  beforeEach(() => {
    consoleSpy = vi.spyOn(console, "warn").mockImplementation(() => {})
  })

  afterEach(() => {
    consoleSpy.mockRestore()
  })

  describe("ALLOWED_DOMAINS", () => {
    it("should contain expected domains", () => {
      expect(ALLOWED_DOMAINS).toContain("localhost")
      expect(ALLOWED_DOMAINS).toContain("mind.com")
      expect(ALLOWED_DOMAINS).toContain("inter.mind.com")
      expect(ALLOWED_DOMAINS).toContain("status.mind.com")
      expect(ALLOWED_DOMAINS).toContain("i14n.com")
    })

    it("should be an array of strings", () => {
      expect(Array.isArray(ALLOWED_DOMAINS)).toBe(true)
      ALLOWED_DOMAINS.forEach((domain) => {
        expect(typeof domain).toBe("string")
      })
    })
  })

  describe("isAllowedDomain", () => {
    it("should allow requests with no origin and referer", () => {
      const request = new Request("https://test.com", {
        headers: {},
      })

      const result = isAllowedDomain(request)

      expect(result).toBe(true)
      expect(consoleSpy).not.toHaveBeenCalled()
    })

    it("should allow requests from allowed origin domains", () => {
      const request = new Request("https://test.com", {
        headers: {
          "origin": "https://mind.com",
        },
      })

      const result = isAllowedDomain(request)

      expect(result).toBe(true)
      expect(consoleSpy).not.toHaveBeenCalled()
    })

    it("should allow requests from localhost origin", () => {
      const request = new Request("https://test.com", {
        headers: {
          "origin": "http://localhost:3000",
        },
      })

      const result = isAllowedDomain(request)

      expect(result).toBe(true)
      expect(consoleSpy).not.toHaveBeenCalled()
    })

    it("should allow requests from inter.mind.com", () => {
      const request = new Request("https://test.com", {
        headers: {
          "origin": "https://inter.mind.com",
        },
      })

      const result = isAllowedDomain(request)

      expect(result).toBe(true)
      expect(consoleSpy).not.toHaveBeenCalled()
    })

    it("should deny requests from unauthorized origin domains", () => {
      const request = new Request("https://test.com", {
        headers: {
          "origin": "https://malicious.com",
        },
      })

      const result = isAllowedDomain(request)

      expect(result).toBe(false)
      expect(consoleSpy).toHaveBeenCalledWith("🚫 Access denied from unauthorized domain: malicious.com (origin)")
    })

    it("should handle invalid origin URLs gracefully", () => {
      const request = new Request("https://test.com", {
        headers: {
          "origin": "invalid-url",
        },
      })

      const result = isAllowedDomain(request)

      expect(result).toBe(false)
      expect(consoleSpy).toHaveBeenCalledWith("Invalid origin URL:", "invalid-url")
    })

    it("should allow requests from allowed referer domains when no origin", () => {
      const request = new Request("https://test.com", {
        headers: {
          "referer": "https://mind.com/page",
        },
      })

      const result = isAllowedDomain(request)

      expect(result).toBe(true)
      expect(consoleSpy).not.toHaveBeenCalled()
    })

    it("should allow requests from localhost referer", () => {
      const request = new Request("https://test.com", {
        headers: {
          "referer": "http://localhost:8080/test",
        },
      })

      const result = isAllowedDomain(request)

      expect(result).toBe(true)
      expect(consoleSpy).not.toHaveBeenCalled()
    })

    it("should deny requests from unauthorized referer domains", () => {
      const request = new Request("https://test.com", {
        headers: {
          "referer": "https://evil.com/attack",
        },
      })

      const result = isAllowedDomain(request)

      expect(result).toBe(false)
      expect(consoleSpy).toHaveBeenCalledWith("🚫 Access denied from unauthorized domain: evil.com (referer)")
    })

    it("should handle invalid referer URLs gracefully", () => {
      const request = new Request("https://test.com", {
        headers: {
          "referer": "not-a-valid-url",
        },
      })

      const result = isAllowedDomain(request)

      expect(result).toBe(false)
      expect(consoleSpy).toHaveBeenCalledWith("Invalid referer URL:", "not-a-valid-url")
    })

    it("should prefer origin over referer when both are present", () => {
      const request = new Request("https://test.com", {
        headers: {
          "origin": "https://mind.com",
          "referer": "https://evil.com/page",
        },
      })

      const result = isAllowedDomain(request)

      expect(result).toBe(true)
      expect(consoleSpy).not.toHaveBeenCalled()
    })

    it("should fall back to referer when origin is unauthorized", () => {
      const request = new Request("https://test.com", {
        headers: {
          "origin": "https://bad.com",
          "referer": "https://mind.com/page",
        },
      })

      const result = isAllowedDomain(request)

      expect(result).toBe(true)
      expect(consoleSpy).toHaveBeenCalledWith("🚫 Access denied from unauthorized domain: bad.com (origin)")
    })

    it("should deny when both origin and referer are unauthorized", () => {
      const request = new Request("https://test.com", {
        headers: {
          "origin": "https://bad.com",
          "referer": "https://evil.com/page",
        },
      })

      const result = isAllowedDomain(request)

      expect(result).toBe(false)
      expect(consoleSpy).toHaveBeenCalledTimes(2)
      expect(consoleSpy).toHaveBeenNthCalledWith(1, "🚫 Access denied from unauthorized domain: bad.com (origin)")
      expect(consoleSpy).toHaveBeenNthCalledWith(2, "🚫 Access denied from unauthorized domain: evil.com (referer)")
    })

    it("should handle subdomain scenarios correctly", () => {
      const request = new Request("https://test.com", {
        headers: {
          "origin": "https://status.mind.com",
        },
      })

      const result = isAllowedDomain(request)

      expect(result).toBe(true)
      expect(consoleSpy).not.toHaveBeenCalled()
    })

    it("should handle ports in URLs correctly", () => {
      const request = new Request("https://test.com", {
        headers: {
          "origin": "http://localhost:3000",
        },
      })

      const result = isAllowedDomain(request)

      expect(result).toBe(true)
      expect(consoleSpy).not.toHaveBeenCalled()
    })

    it("should handle https vs http protocols correctly", () => {
      const httpsRequest = new Request("https://test.com", {
        headers: {
          "origin": "https://mind.com",
        },
      })

      const httpRequest = new Request("https://test.com", {
        headers: {
          "origin": "http://mind.com",
        },
      })

      expect(isAllowedDomain(httpsRequest)).toBe(true)
      expect(isAllowedDomain(httpRequest)).toBe(true)
      expect(consoleSpy).not.toHaveBeenCalled()
    })

    it("should deny unauthorized subdomains", () => {
      const request = new Request("https://test.com", {
        headers: {
          "origin": "https://fake.mind.com",
        },
      })

      const result = isAllowedDomain(request)

      expect(result).toBe(false)
      expect(consoleSpy).toHaveBeenCalledWith("🚫 Access denied from unauthorized domain: fake.mind.com (origin)")
    })
  })
})
