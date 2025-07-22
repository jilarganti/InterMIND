/**
 *
 */

import { POST as createContactAndLead } from "./createContactAndLead.js"
import { LeadSignUpProps, SignUpDataLayerEvent } from "./types/signUp.js"
import { Channel, type LeadData } from "./types/pipedriveFields.js"

export async function POST(request: Request) {
  const data = (await request.json()) as LeadSignUpProps

  // Преобразуем в LeadData для существующего API
  const leadData: LeadData = {
    lead: {
      title: data.name,
      url: data.url,
      kind: "sign_up",
      params: "Plan: " + data.params.plan + ", Method: " + data.params.method,
      utm: data.utm,
      sourceChannel: Channel.WEB_VISITORS, // Используем канал "Web visitors" для sign-up
    },
    contact: {
      name: data.name,
      email: data.email,
    },
  }

  // Создаем новый Request с преобразованными данными
  const newRequest = new Request(request.url, {
    method: "POST",
    headers: request.headers,
    body: JSON.stringify(leadData),
  })

  // Вызываем готовый endpoint
  const response = await createContactAndLead(newRequest)
  const result = await response.json()

  // Добавляем GTM данные к ответу
  if (result.success) {
    const gtmData: SignUpDataLayerEvent = {
      event: "sign_up",
      method: data.params.method,
      plan: data.params.plan,
    }
    result.gtmData = gtmData
  }

  return new Response(JSON.stringify(result), {
    status: response.status,
    headers: { "Content-Type": "application/json" },
  })
}
