import { createContactAndLead } from "./lib/pipedriveLib.js"
import { Channel } from "./config/pipedriveConfig.js"
import { LeadData, DataLayerEvent, SignUpLead } from "./types/pipedriveFields.js"
import { withDomainCheck } from "./lib/domainMiddleware.js"

export async function POST(request: Request) {
  return withDomainCheck(request, async (request) => {
    const data = (await request.json()) as SignUpLead

    // Преобразуем в LeadData для существующего API
    const leadData: LeadData = {
      lead: {
        title: "sign_up",
        kind: data.name,
        params: "💳" + data.params.plan + " 📩" + data.params.method,
        utm: data.utm,
        sourceChannel: Channel.WEB_VISITORS, // Используем канал "Web visitors" для sign-up
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
        event: "sign_up",
        method: data.params.method,
        plan: data.params.plan,
        kind: data.name, // Используем имя как вид лида
      }
      ;(result as any).gtmData = gtmData
    }

    return new Response(JSON.stringify(result), {
      status: result.success ? 200 : 500,
      headers: { "Content-Type": "application/json" },
    })
  })
}
