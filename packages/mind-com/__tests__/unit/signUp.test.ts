/**
 * Unit tests for signUp API endpoint
 */

import { describe, it, expect, vi, beforeEach, afterEach } from "vitest"
import { POST } from "../../api/signUp"
import type { SignUpLead } from "../../api/types/pipedriveFields"

// Mock dependencies
vi.mock("../../api/lib/pipedriveLib.js", () => ({
  createContactAndLead: vi.fn(),
}))

vi.mock("../../api/lib/domainMiddleware.js", () => ({
  withDomainCheck: vi.fn((request, handler) => handler(request)),
}))

// Import mocked functions
import { createContactAndLead } from "../../api/lib/pipedriveLib.js"
const mockCreateContactAndLead = vi.mocked(createContactAndLead)

describe("signUp API endpoint", () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it("should successfully create a lead with valid sign-up data", async () => {
    // Arrange
    const signUpData: SignUpLead = {
      email: "test@example.com",
      name: "Test User",
      utm: {
        source: "google_ads",
        campaign: "winter_2025",
      },
      params: {
        method: "Google",
        plan: "Pro",
      },
    }

    const mockResponse = {
      success: true,
      message: "Contact and lead created",
      person: { id: "123" },
      lead: { id: "456" },
    }

    mockCreateContactAndLead.mockResolvedValue(mockResponse)

    const request = new Request("http://localhost/api/signUp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(signUpData),
    })

    // Act
    const response = await POST(request)
    const result = await response.json()

    // Assert
    expect(response.status).toBe(200)
    expect(result.success).toBe(true)
    expect(result.gtmData).toEqual({
      event: "Test User",
      method: "Google",
      plan: "Pro",
    })

    expect(mockCreateContactAndLead).toHaveBeenCalledWith(
      {
        lead: {
          title: "Test User",
          kind: "Pro",
          message: "Source: google_ads; Campaign: winter_2025;",
          sourceChannel: "Web visitors",
        },
        contact: {
          name: "Test User",
          email: "test@example.com",
        },
      },
      request,
    )
  })

  it("should handle undefined method in params", async () => {
    // Arrange
    const signUpData: SignUpLead = {
      email: "test@example.com",
      name: "Test User",
      utm: {
        source: "website",
        campaign: "direct",
      },
      params: {
        method: undefined,
        plan: "Basic",
      },
    }

    const mockResponse = {
      success: true,
      message: "Contact and lead created",
      person: { id: "123" },
      lead: { id: "456" },
    }

    mockCreateContactAndLead.mockResolvedValue(mockResponse)

    const request = new Request("http://localhost/api/signUp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(signUpData),
    })

    // Act
    const response = await POST(request)
    const result = await response.json()

    // Assert
    expect(response.status).toBe(200)
    expect(result.success).toBe(true)
    expect(result.gtmData.method).toBeUndefined()
  })

  it("should return 500 on CRM error", async () => {
    // Arrange
    const signUpData: SignUpLead = {
      email: "test@example.com",
      name: "Test User",
      utm: {
        source: "google_ads",
        campaign: "winter_2025",
      },
      params: {
        method: "Google",
        plan: "Pro",
      },
    }

    const mockErrorResponse = {
      success: false,
      message: "CRM connection failed",
    }

    mockCreateContactAndLead.mockResolvedValue(mockErrorResponse)

    const request = new Request("http://localhost/api/signUp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(signUpData),
    })

    // Act
    const response = await POST(request)
    const result = await response.json()

    // Assert
    expect(response.status).toBe(500)
    expect(result.success).toBe(false)
    expect(result.message).toBe("CRM connection failed")
    expect(result.gtmData).toBeUndefined()
  })

  it("should handle minimal sign-up data", async () => {
    // Arrange
    const signUpData: SignUpLead = {
      email: "minimal@example.com",
      name: "Minimal User",
      utm: {
        source: "direct",
        campaign: "none",
      },
      params: {
        method: undefined,
        plan: "Basic",
      },
    }

    const mockResponse = {
      success: true,
      message: "Contact and lead created",
      person: { id: "789" },
      lead: { id: "101" },
    }

    mockCreateContactAndLead.mockResolvedValue(mockResponse)

    const request = new Request("http://localhost/api/signUp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(signUpData),
    })

    // Act
    const response = await POST(request)
    const result = await response.json()

    // Assert
    expect(response.status).toBe(200)
    expect(result.success).toBe(true)
    expect(mockCreateContactAndLead).toHaveBeenCalledWith(
      expect.objectContaining({
        lead: expect.objectContaining({
          title: "Minimal User",
          kind: "Basic", 
          message: "Source: direct; Campaign: none;",
        }),
      }),
      request,
    )
  })

  it("should include proper Content-Type header in response", async () => {
    // Arrange
    const signUpData: SignUpLead = {
      email: "test@example.com",
      name: "Test User",
      utm: { source: "test", campaign: "test" },
      params: { method: undefined, plan: "Basic" },
    }

    mockCreateContactAndLead.mockResolvedValue({
      success: true,
      message: "Success",
    })

    const request = new Request("http://localhost/api/signUp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(signUpData),
    })

    // Act
    const response = await POST(request)

    // Assert
    expect(response.headers.get("Content-Type")).toBe("application/json")
  })
})
