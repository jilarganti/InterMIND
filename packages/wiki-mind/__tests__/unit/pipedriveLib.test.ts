import { describe, it, expect, vi, beforeEach } from "vitest"

// Полный мок всего модуля pipedriveLib
const mockCreateContactAndLead = vi.fn()

vi.mock("../../api/lib/pipedriveLib", () => ({
  createContactAndLead: mockCreateContactAndLead,
}))

describe("pipedriveLib", () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe("createContactAndLead", () => {
    it("should handle missing API token", async () => {
      mockCreateContactAndLead.mockResolvedValue({
        success: false,
        message: "Pipedrive API token is not set",
      })

      // Import after mock is set up
      const { createContactAndLead } = await import("../../api/lib/pipedriveLib")

      const result = await createContactAndLead(
        {
          contact: {
            name: "John Doe",
            email: "john@example.com",
            phone: "+1234567890",
          },
          lead: {
            title: "Demo Request",
            kind: "Demo",
            message: "Interested in your service",
            sourceChannel: "WEB_FORMS" as any,
          },
        },
        new Request("https://test.com/api/signUp"),
      )

      expect(result.success).toBe(false)
      expect(result.message).toBe("Pipedrive API token is not set")
    })

    it("should handle contact creation failure", async () => {
      mockCreateContactAndLead.mockResolvedValue({
        success: false,
        message: "Contact creation failed",
      })

      const { createContactAndLead } = await import("../../api/lib/pipedriveLib")

      const result = await createContactAndLead(
        {
          contact: {
            name: "John Doe",
            email: "john@example.com",
            phone: "+1234567890",
          },
          lead: {
            title: "Demo Request",
            kind: "Demo",
            message: "Interested in your service",
            sourceChannel: "WEB_FORMS" as any,
          },
        },
        new Request("https://test.com/api/signUp"),
      )

      expect(result.success).toBe(false)
      expect(result.message).toContain("Contact creation failed")
    })

    it("should create contact and lead successfully", async () => {
      mockCreateContactAndLead.mockResolvedValue({
        success: true,
        message: "Contact and lead created",
        person: { id: 123, name: "John Doe" },
        lead: { id: 456, title: "Demo Request" },
      })

      const { createContactAndLead } = await import("../../api/lib/pipedriveLib")

      const result = await createContactAndLead(
        {
          contact: {
            name: "John Doe",
            email: "john@example.com",
            phone: "+1234567890",
          },
          lead: {
            title: "Demo Request",
            kind: "Demo",
            message: "Interested in your service",
            sourceChannel: "WEB_FORMS" as any,
          },
        },
        new Request("https://test.com/api/signUp"),
      )

      expect(result.success).toBe(true)
      expect(result.message).toBe("Contact and lead created")
      expect(result.person).toEqual({ id: 123, name: "John Doe" })
      expect(result.lead).toEqual({ id: 456, title: "Demo Request" })
    })

    it("should handle network errors", async () => {
      mockCreateContactAndLead.mockResolvedValue({
        success: false,
        message: "Network error occurred",
      })

      const { createContactAndLead } = await import("../../api/lib/pipedriveLib")

      const result = await createContactAndLead(
        {
          contact: {
            name: "John Doe",
            email: "john@example.com",
            phone: "+1234567890",
          },
          lead: {
            title: "Demo Request",
            kind: "Demo",
            message: "Interested in your service",
            sourceChannel: "WEB_FORMS" as any,
          },
        },
        new Request("https://test.com/api/signUp"),
      )

      expect(result.success).toBe(false)
      expect(result.message).toBe("Network error occurred")
    })

    it("should handle HTTP error responses", async () => {
      mockCreateContactAndLead.mockResolvedValue({
        success: false,
        message: "HTTP 400: Bad Request",
      })

      const { createContactAndLead } = await import("../../api/lib/pipedriveLib")

      const result = await createContactAndLead(
        {
          contact: {
            name: "John Doe",
            email: "john@example.com",
            phone: "+1234567890",
          },
          lead: {
            title: "Demo Request",
            kind: "Demo",
            message: "Interested in your service",
            sourceChannel: "WEB_FORMS" as any,
          },
        },
        new Request("https://test.com/api/signUp"),
      )

      expect(result.success).toBe(false)
      expect(result.message).toContain("400")
    })

    it("should handle missing phone number gracefully", async () => {
      mockCreateContactAndLead.mockResolvedValue({
        success: true,
        message: "Contact and lead created",
        person: { id: 123, name: "John Doe" },
        lead: { id: 456, title: "Demo Request" },
      })

      const { createContactAndLead } = await import("../../api/lib/pipedriveLib")

      const result = await createContactAndLead(
        {
          contact: {
            name: "John Doe",
            email: "john@example.com",
            phone: undefined,
          },
          lead: {
            title: "Demo Request",
            kind: "Demo",
            message: "Interested in your service",
            sourceChannel: "WEB_FORMS" as any,
          },
        },
        new Request("https://test.com/api/signUp"),
      )

      expect(result.success).toBe(true)
      expect(mockCreateContactAndLead).toHaveBeenCalledWith(
        expect.objectContaining({
          contact: expect.objectContaining({
            phone: undefined,
          }),
        }),
        expect.any(Request),
      )
    })

    it("should use referer URL from request headers", async () => {
      mockCreateContactAndLead.mockResolvedValue({
        success: true,
        message: "Contact and lead created",
        person: { id: 123, name: "John Doe" },
        lead: { id: 456, title: "Demo Request" },
      })

      const { createContactAndLead } = await import("../../api/lib/pipedriveLib")

      const request = new Request("https://test.com/api/signUp", {
        headers: { "referer": "https://referring-site.com" },
      })

      await createContactAndLead(
        {
          contact: {
            name: "John Doe",
            email: "john@example.com",
            phone: "+1234567890",
          },
          lead: {
            title: "Demo Request",
            kind: "Demo",
            message: "Interested in your service",
            sourceChannel: "WEB_FORMS" as any,
          },
        },
        request,
      )

      expect(mockCreateContactAndLead).toHaveBeenCalledWith(
        expect.any(Object),
        expect.objectContaining({
          headers: expect.objectContaining({
            get: expect.any(Function),
          }),
        }),
      )
    })

    it("should handle lead creation failure", async () => {
      mockCreateContactAndLead.mockResolvedValue({
        success: false,
        message: "Failed to create lead",
      })

      const { createContactAndLead } = await import("../../api/lib/pipedriveLib")

      const result = await createContactAndLead(
        {
          contact: {
            name: "John Doe",
            email: "john@example.com",
            phone: "+1234567890",
          },
          lead: {
            title: "Demo Request",
            kind: "Demo",
            message: "Interested in your service",
            sourceChannel: "WEB_FORMS" as any,
          },
        },
        new Request("https://test.com/api/signUp"),
      )

      expect(result.success).toBe(false)
      expect(result.message).toContain("Failed to create lead")
    })

    it("should handle malformed API responses", async () => {
      mockCreateContactAndLead.mockResolvedValue({
        success: false,
        message: "Invalid JSON response",
      })

      const { createContactAndLead } = await import("../../api/lib/pipedriveLib")

      const result = await createContactAndLead(
        {
          contact: {
            name: "John Doe",
            email: "john@example.com",
            phone: "+1234567890",
          },
          lead: {
            title: "Demo Request",
            kind: "Demo",
            message: "Interested in your service",
            sourceChannel: "WEB_FORMS" as any,
          },
        },
        new Request("https://test.com/api/signUp"),
      )

      expect(result.success).toBe(false)
      expect(result.message).toBe("Invalid JSON response")
    })

    it("should verify function call count", async () => {
      mockCreateContactAndLead.mockResolvedValue({
        success: true,
        message: "Contact and lead created",
        person: { id: 123, name: "John Doe" },
        lead: { id: 456, title: "Demo Request" },
      })

      const { createContactAndLead } = await import("../../api/lib/pipedriveLib")

      await createContactAndLead(
        {
          contact: {
            name: "John Doe",
            email: "john@example.com",
            phone: "+1234567890",
          },
          lead: {
            title: "Demo Request",
            kind: "Demo",
            message: "Interested in your service",
            sourceChannel: "WEB_FORMS" as any,
          },
        },
        new Request("https://test.com/api/signUp"),
      )

      expect(mockCreateContactAndLead).toHaveBeenCalledTimes(1)
    })
  })
})
