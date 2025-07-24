/**
 * Unit tests for submitForm API endpoint
 */

import { describe, it, expect, vi, beforeEach, afterEach } from "vitest"
import { POST } from "../../api/submitForm"
import type { SubmitForm } from "../../api/types/pipedriveFields"

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

describe("submitForm API endpoint", () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it("should successfully create a lead with complete form data", async () => {
    // Arrange
    const formData: SubmitForm = {
      name: "John Doe",
      email: "john@example.com",
      phone: "+1234567890",
      kind: "Contact Us",
      message: "I am interested in your services",
    }

    const mockResponse = {
      success: true,
      message: "Contact and lead created",
      person: { id: "123" },
      lead: { id: "456" },
    }

    mockCreateContactAndLead.mockResolvedValue(mockResponse)

    const request = new Request("http://localhost/api/submitForm", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })

    // Act
    const response = await POST(request)
    const result = await response.json()

    // Assert
    expect(response.status).toBe(200)
    expect(result.success).toBe(true)
    expect(result.gtmData).toEqual({
      event: "generate_lead",
      kind: "Contact Us",
    })

    expect(mockCreateContactAndLead).toHaveBeenCalledWith(
      {
        lead: {
          title: "John Doe",
          kind: "Contact Us",
          message: "I am interested in your services ☎️ +1234567890",
          sourceChannel: "Web forms",
        },
        contact: {
          name: "John Doe",
          email: "john@example.com",
        },
      },
      request,
    )
  })

  it("should handle form data without phone", async () => {
    // Arrange
    const formData: SubmitForm = {
      name: "Jane Smith",
      email: "jane@example.com",
      kind: "Newsletter",
      message: "Please subscribe me to your newsletter",
    }

    const mockResponse = {
      success: true,
      message: "Contact and lead created",
      person: { id: "789" },
      lead: { id: "101" },
    }

    mockCreateContactAndLead.mockResolvedValue(mockResponse)

    const request = new Request("http://localhost/api/submitForm", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
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
          message: "Please subscribe me to your newsletter",
        }),
      }),
      request,
    )
  })

  it("should handle form data without name", async () => {
    // Arrange
    const formData: SubmitForm = {
      email: "anonymous@example.com",
      kind: "Support",
      message: "I need help with my account",
    }

    const mockResponse = {
      success: true,
      message: "Contact and lead created",
      person: { id: "111" },
      lead: { id: "222" },
    }

    mockCreateContactAndLead.mockResolvedValue(mockResponse)

    const request = new Request("http://localhost/api/submitForm", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })

    // Act
    const response = await POST(request)
    const result = await response.json()

    // Assert
    expect(response.status).toBe(200)
    expect(result.success).toBe(true)
    expect(mockCreateContactAndLead).toHaveBeenCalledWith(
      {
        lead: {
          title: undefined,
          kind: "Support",
          message: "I need help with my account",
          sourceChannel: "Web forms",
        },
        contact: {
          name: undefined,
          email: "anonymous@example.com",
        },
      },
      request,
    )
  })

  it("should return 500 on CRM error", async () => {
    // Arrange
    const formData: SubmitForm = {
      name: "Error Test",
      email: "error@example.com",
      kind: "Test",
      message: "This should fail",
    }

    const mockErrorResponse = {
      success: false,
      message: "Database connection failed",
    }

    mockCreateContactAndLead.mockResolvedValue(mockErrorResponse)

    const request = new Request("http://localhost/api/submitForm", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })

    // Act
    const response = await POST(request)
    const result = await response.json()

    // Assert
    expect(response.status).toBe(500)
    expect(result.success).toBe(false)
    expect(result.message).toBe("Database connection failed")
    expect(result.gtmData).toBeUndefined()
  })

  it("should use Web forms as source channel", async () => {
    // Arrange
    const formData: SubmitForm = {
      name: "Channel Test",
      email: "channel@example.com",
      kind: "Inquiry",
      message: "Testing channel assignment",
    }

    const mockResponse = {
      success: true,
      message: "Success",
    }

    mockCreateContactAndLead.mockResolvedValue(mockResponse)

    const request = new Request("http://localhost/api/submitForm", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })

    // Act
    await POST(request)

    // Assert
    expect(mockCreateContactAndLead).toHaveBeenCalledWith(
      expect.objectContaining({
        lead: expect.objectContaining({
          sourceChannel: "Web forms",
        }),
      }),
      request,
    )
  })

  it("should include proper Content-Type header in response", async () => {
    // Arrange
    const formData: SubmitForm = {
      email: "test@example.com",
      kind: "Test",
      message: "Test message",
    }

    mockCreateContactAndLead.mockResolvedValue({
      success: true,
      message: "Success",
    })

    const request = new Request("http://localhost/api/submitForm", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })

    // Act
    const response = await POST(request)

    // Assert
    expect(response.headers.get("Content-Type")).toBe("application/json")
  })

  it("should append phone number to message with emoji", async () => {
    // Arrange
    const formData: SubmitForm = {
      name: "Phone Test",
      email: "phone@example.com",
      phone: "+1-555-123-4567",
      kind: "Business Inquiry",
      message: "Looking for partnership opportunities",
    }

    mockCreateContactAndLead.mockResolvedValue({
      success: true,
      message: "Success",
    })

    const request = new Request("http://localhost/api/submitForm", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })

    // Act
    await POST(request)

    // Assert
    expect(mockCreateContactAndLead).toHaveBeenCalledWith(
      expect.objectContaining({
        lead: expect.objectContaining({
          message: "Looking for partnership opportunities ☎️ +1-555-123-4567",
        }),
      }),
      request,
    )
  })
})
