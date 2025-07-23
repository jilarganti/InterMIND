import { createContactAndLead } from "./lib/pipedriveLib.js"
import { Channel } from "./config/pipedriveConfig.js"
import { LeadData, DataLayerEvent, SubmitForm } from "./types/pipedriveFields.js"
import { withDomainCheck } from "./lib/domainMiddleware.js"

export async function POST(request: Request) {
  return withDomainCheck(request, async (request) => {
    const data = (await request.json()) as SubmitForm

    // Преобразуем в LeadData для существующего API
    const leadData: LeadData = {
      lead: {
        title: data.name,
        kind: data.kind,
        message: data.message,
        params: "🌎 " + data.webSite,
        sourceChannel: Channel.WEB_FORMS,
      },
      contact: {
        name: data.name,
        email: data.email,
      },
    }

    // Вызываем библиотечную функцию напрямую
    const result = await createContactAndLead(leadData, request)

    // Добавляем GTM данные к ответу
    if (result.success) {
      const gtmData: DataLayerEvent = {
        event: "generate_lead",
        kind: data.kind,
      }
      ;(result as any).gtmData = gtmData
    }

    return new Response(JSON.stringify(result), {
      status: result.success ? 200 : 500,
      headers: { "Content-Type": "application/json" },
    })
  })
}
