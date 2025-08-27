import { describe, it, expect, vi, beforeEach } from "vitest"
import { createAccessDeniedResponse, withDomainCheck } from "../../api/lib/domainMiddleware"

// Mock corsConfig
vi.mock("../../api/config/corsConfig.js", () => ({
  isAllowedDomain: vi.fn(),
}))

import { isAllowedDomain } from "../../api/config/corsConfig.js"

describe("domainMiddleware", () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe("createAccessDeniedResponse", () => {
    it("should create proper access denied response", () => {
      const response = createAccessDeniedResponse()

      expect(response).toBeInstanceOf(Response)
      expect(response.status).toBe(403)
      expect(response.headers.get("Content-Type")).toBe("application/json")
    })

    it("should return correct error message format", async () => {
      const response = createAccessDeniedResponse()
      const body = await response.json()

      expect(body).toEqual({
        success: false,
        message: "Access denied: Domain not allowed",
        code: "DOMAIN_NOT_ALLOWED",
      })
    })
  })

  describe("withDomainCheck", () => {
    const mockHandler = vi.fn()
    const mockRequest = new Request("https://test.com/api/test", {
      headers: { "Origin": "https://allowed.com" },
    })

    beforeEach(() => {
      mockHandler.mockClear()
    })

    it("should call handler when domain is allowed", async () => {
      vi.mocked(isAllowedDomain).mockReturnValue(true)
      mockHandler.mockResolvedValue(new Response("success"))

      const response = await withDomainCheck(mockRequest, mockHandler)

      expect(isAllowedDomain).toHaveBeenCalledWith(mockRequest)
      expect(mockHandler).toHaveBeenCalledWith(mockRequest)
      expect(await (response as Response).text()).toBe("success")
    })

    it("should return access denied when domain is not allowed", async () => {
      vi.mocked(isAllowedDomain).mockReturnValue(false)

      const response = await withDomainCheck(mockRequest, mockHandler)

      expect(isAllowedDomain).toHaveBeenCalledWith(mockRequest)
      expect(mockHandler).not.toHaveBeenCalled()
      expect((response as Response).status).toBe(403)

      const body = await (response as Response).json()
      expect(body.code).toBe("DOMAIN_NOT_ALLOWED")
    })

    it("should handle handler errors gracefully", async () => {
      vi.mocked(isAllowedDomain).mockReturnValue(true)
      mockHandler.mockRejectedValue(new Error("Handler error"))

      // Should propagate the error
      await expect(withDomainCheck(mockRequest, mockHandler)).rejects.toThrow("Handler error")
    })

    it("should work with different request origins", async () => {
      const requests = [
        new Request("https://test.com/api/test", { headers: { "Origin": "https://evil.com" } }),
        new Request("https://test.com/api/test", { headers: { "Referer": "https://trusted.com" } }),
        new Request("https://test.com/api/test"), // No origin/referer
      ]

      vi.mocked(isAllowedDomain)
        .mockReturnValueOnce(false) // evil.com
        .mockReturnValueOnce(true) // trusted.com
        .mockReturnValueOnce(false) // no origin

      // Test evil.com - should be blocked
      const response1 = await withDomainCheck(requests[0], mockHandler)
      expect((response1 as Response).status).toBe(403)

      // Test trusted.com - should be allowed
      mockHandler.mockResolvedValue(new Response("allowed"))
      const response2 = await withDomainCheck(requests[1], mockHandler)
      expect(await (response2 as Response).text()).toBe("allowed")

      // Test no origin - should be blocked
      const response3 = await withDomainCheck(requests[2], mockHandler)
      expect((response3 as Response).status).toBe(403)
    })
  })
})
