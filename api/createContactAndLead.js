/**
 * This API endpoint creates a new contact and lead in Pipedrive CRM.
 * @typedef {Object} RequestBody
 * @property {string} name - Имя контакта
 * @property {string} email - Email контакта
 * @property {string} webSite - Телефон контакта
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
  const { name, email, webSite, channel, channelId, originId, category, message, leadSource, countryCode, countryName } = body
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
      "0bcd0dbd7c022bcc908eecd87e72bd49f830e5a6": webSite, // ⚙️Site
      "08d290c3d972d735278898a71ad674b0ff698c66": countryCode, // ⚙️Country code
      f64198e6b8654dd28a344f5831dbe547b960a17b: countryName, // ⚙️Country
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
      ec30e5d548a40d6588bf2e1f06ec07cca7b4cc77: category, // ⚙️Service
      "381414c380220bf1d26ce7b7bdc6e6ff08e20e04": message, // ⚙️Message
      da3aa18ff6128966544ff359f07aebedc047b2e2: leadSource, // ⚙️Lead source
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
