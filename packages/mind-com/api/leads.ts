// packages/mind-com/api/leads/index.ts

import { LeadService } from "./services/leadService.js"
import { validateLeadData, createSuccessResponse, createErrorResponse, handleApiError } from "./utils/pipedrive.js"
import type { LeadData } from "./types/pipedrive.js"

const leadService = new LeadService()

export async function POST(request: Request): Promise<Response> {
  try {
    // Парсим тело запроса
    const body = await request.json()

    // Валидируем данные
    const validationErrors = validateLeadData(body)
    if (validationErrors.length > 0) {
      return new Response(JSON.stringify(createErrorResponse("Validation failed", JSON.stringify(validationErrors))), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      })
    }

    // Создаем лид
    const leadData: LeadData = {
      title: body.title.trim(),
      personId: body.personId,
      channel: body.channel,
      channelId: body.channelId?.trim(),
      originId: body.originId?.trim(),
      category: body.category?.trim(),
      message: body.message?.trim(),
      leadSource: body.leadSource?.trim(),
      status: body.status,
    }

    const lead = await leadService.createLead(leadData)

    return new Response(JSON.stringify(createSuccessResponse(lead, "Lead created successfully")), {
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
  return new Response(JSON.stringify(createSuccessResponse({ status: "Leads API is running" })), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  })
}
