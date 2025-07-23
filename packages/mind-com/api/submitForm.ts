/**
 *
 */

import { POST as createContactAndLead } from "./createContactAndLead.js"
import { Channel, LeadData, DataLayerEvent } from "./types/pipedriveFields.js"
import { ContactForm } from "../docs/.vitepress/theme/types/ContactForm.js"

export async function POST(request: Request) {
  const data = (await request.json()) as ContactForm

  // Преобразуем в LeadData для существующего API
  const leadData: LeadData = {
    lead: {
      title: data.name,
      url: request.headers.get("referer") || new URL(request.url).origin,
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
    const gtmData: DataLayerEvent = {
      event: "generate_lead",
      kind: data.kind,
    }
    result.gtmData = gtmData
  }

  return new Response(JSON.stringify(result), {
    status: response.status,
    headers: { "Content-Type": "application/json" },
  })
}
