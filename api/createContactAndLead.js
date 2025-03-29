/**
 * This API endpoint creates a new contact and lead in Pipedrive CRM.
 * @typedef {Object} RequestBody
 * @property {string} name - Имя контакта
 * @property {string} email - Email контакта
 * @property {string} phone - Телефон контакта
 * @property {string} channel - Канал
 * @property {string} channelId - ID канала
 * @property {string} originId - ID источника
 * @property {string} category - Категория услуги
 * @property {string} message - Сообщение
 * @property {string} leadSource - Источник лида (например, "Direct", "Organic", "ADS[campaign]" и т.д.)
 * @property {string} countryCode - Код страны
 * @property {string} countryName - Название страны
 * @property {Object} utmData - Дополнительные данные UTM-параметров (опционально)
 */

/**
 * @typedef {Object} FieldOption
 * @property {string|number} id - ID опции
 * @property {string} label - Название опции
 */

/**
 * @typedef {Object} Field
 * @property {FieldOption[]} options - Доступные опции для поля
 */

/**
 * @typedef {Object.<string, Field>} LeadFields
 */

import { ApiClient, PersonsApi, LeadsApi } from "pipedrive"
import { fetchLeadFields } from "./CRM/fetchFields.js"

export const runtime = "edge"

/** @type {LeadFields|null} */
let leadFields = null

/**
 * @param {Request} request
 */
export async function POST(request) {
  // Проверяем, что process.env.PIPEDRIVE_API_TOKEN существует
  if (!process.env.PIPEDRIVE_API_TOKEN) {
    return Response.json({ success: false, message: "Pipedrive API token is not configured" }, { status: 500 })
  }

  // Инициализация полей при первом запросе
  if (!leadFields) {
    try {
      /** @type {LeadFields} */
      leadFields = await fetchLeadFields()
    } catch (error) {
      return Response.json(
        {
          success: false,
          message: "Failed to initialize Pipedrive fields:" + (error instanceof Error ? error.message : String(error)),
        },
        { status: 500 },
      )
    }
  }

  /** @type {RequestBody} */
  const body = await request.json()
  const { name, email, phone, channel, channelId, originId, category, message, leadSource, countryCode, countryName } = body
  const apiClient = new ApiClient()

  apiClient.authentications.api_key.apiKey = process.env.PIPEDRIVE_API_TOKEN

  const personsApi = new PersonsApi(apiClient)
  const leadsApi = new LeadsApi(apiClient)

  // Search for channel ID
  if (!leadFields || !leadFields["channel"] || !leadFields["channel"].options) {
    return Response.json({ success: false, message: "Channel data is not available" }, { status: 400 })
  }

  const channelOption = leadFields["channel"].options.find((opt) => opt.label === channel)
  const channelValue = channelOption?.id

  if (!channelValue) {
    return Response.json({ success: false, message: `Channel "${channel}" not found.` }, { status: 400 })
  }

  try {
    // Create contact
    const personResponse = await personsApi.addPerson({
      name,
      email: [{ value: email, label: "other" }],
      phone: [{ value: phone, label: "other" }],
      b8ba0ea36db4270f7b560e09fb2cb3e0714b388b: countryCode, // ⚙️Country code
      cf5a54d84951c31197d58e97029976686967a64f: countryName, // ⚙️Country name
    })

    if (!personResponse?.data) {
      return Response.json({ success: false, message: "Failed to create contact." }, { status: 400 })
    }

    // Create lead with custom field
    const leadResponse = await leadsApi.addLead({
      title: name,
      person_id: personResponse.data.id,
      channel: channelValue,
      channel_id: channelId,
      origin_id: originId,
      was_seen: true,
      "8464d8373190f2251c5e1e8c035d75ddb8ef52e2": category, // ⚙️Service
      baa8db361de3fa51e24c8e18c7d2271643635ba9: message, // ⚙️Message
      bcf617c56c755e11604aea1ed230d695cd5c2735: leadSource, // ⚙️Lead source
    })

    if (!leadResponse?.data) {
      return Response.json({ success: false, message: "Failed to create lead." }, { status: 400 })
    }

    return Response.json({ success: true, message: "Contact and lead created successfully." }, { status: 200 })
  } catch (error) {
    console.error("Error:", error instanceof Error ? error.message : String(error))
    return Response.json(
      {
        success: false,
        message: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    )
  }
}

export async function GET() {
  return Response.json({ status: "OK" }, { status: 200 })
}
