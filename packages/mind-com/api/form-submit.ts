// packages/mind-com/api/form/submit/index.ts

import { ContactService } from "./services/contactService.js"
import { LeadService } from "./services/leadService.js"
import { validateFormData, extractContactData, extractLeadData, createSuccessResponse, createErrorResponse, handleApiError } from "./utils/index.js"
import type { FormSubmissionData, FormSubmissionResponse } from "./types/index.js"

const contactService = new ContactService()
const leadService = new LeadService()

export async function POST(request: Request): Promise<Response> {
  try {
    // Парсим тело запроса
    const body = await request.json()

    // Валидируем данные формы
    const validationErrors = validateFormData(body)
    if (validationErrors.length > 0) {
      return new Response(JSON.stringify(createErrorResponse("Validation failed", JSON.stringify(validationErrors))), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      })
    }

    const formData: FormSubmissionData = body

    // Извлекаем данные для контакта и лида
    const contactData = extractContactData(formData)

    // Создаем контакт
    const contact = await contactService.createContact(contactData)

    // Создаем лид, привязывая его к контакту
    const leadData = extractLeadData(formData, contact.id)
    const lead = await leadService.createLead(leadData)

    const response: FormSubmissionResponse = {
      contact,
      lead,
    }

    return new Response(JSON.stringify(createSuccessResponse(response, "Contact and lead created successfully")), {
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
  return new Response(
    JSON.stringify(
      createSuccessResponse({
        status: "Form submission API is running",
        endpoints: {
          "POST /api/form/submit": "Submit contact form data",
          "POST /api/contacts": "Create contact only",
          "POST /api/leads": "Create lead only",
        },
      }),
    ),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    },
  )
}
