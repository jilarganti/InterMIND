// packages/mind-com/api/contacts/index.ts

import { ContactService } from "./services/contactService.js"
import { validateContactData, createSuccessResponse, createErrorResponse, handleApiError } from "./utils/index.js"
import type { ContactData } from "./types"

const contactService = new ContactService()

export async function POST(request: Request): Promise<Response> {
  try {
    // Парсим тело запроса
    const body = await request.json()

    // Валидируем данные
    const validationErrors = validateContactData(body)
    if (validationErrors.length > 0) {
      return new Response(JSON.stringify(createErrorResponse("Validation failed", JSON.stringify(validationErrors))), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      })
    }

    // Создаем контакт
    const contactData: ContactData = {
      name: body.name.trim(),
      email: body.email.trim(),
      phone: body.phone?.trim(),
      website: body.website?.trim(),
      countryCode: body.countryCode?.trim(),
      countryName: body.countryName?.trim(),
    }

    const contact = await contactService.createContact(contactData)

    return new Response(JSON.stringify(createSuccessResponse(contact, "Contact created successfully")), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    const errorResponse = handleApiError(error)
    return new Response(JSON.stringify(errorResponse), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}

export async function GET(): Promise<Response> {
  return new Response(JSON.stringify(createSuccessResponse({ status: "Contacts API is running" })), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  })
}
