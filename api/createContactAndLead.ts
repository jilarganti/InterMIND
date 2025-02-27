"use strict"

/**
 * This API endpoint creates a new contact and lead in Pipedrive CRM.
 */

import { ApiClient, PersonsApi, LeadsApi } from "pipedrive"
import { fetchLeadFields } from "./CRM/fetchFields.js"
import dotenv from "dotenv"
import { VercelRequest, VercelResponse } from '@vercel/node'

dotenv.config()

interface ContactRequest {
  name: string;
  email: string;
  phone: string;
  channel: string;
  channelId: string;
  originId: string;
  category: string;
  message: string;
  leadSource: string;
  countryCode: string;
  countryName: string;
}

let leadFields: any = null

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method === "GET") return res.status(200).json({ status: "OK" })
  if (req.method !== "POST") return res.status(405).json({ message: "Method not allowed" })

  // Инициализация полей при первом запросе
  if (!leadFields) {
    try {
      leadFields = await fetchLeadFields()
    } catch (error: any) {
      return res.status(500).json({ success: false, message: "Failed to initialize Pipedrive fields:" + error.message })
    }
  }

  const {
    name,
    email,
    phone,
    channel,
    channelId,
    originId,
    category,
    message,
    leadSource,
    countryCode,
    countryName
  } = req.body as ContactRequest

  const apiClient = new ApiClient()
  apiClient.authentications.api_key.apiKey = process.env.PIPEDRIVE_API_TOKEN as string

  const personsApi = new PersonsApi(apiClient)
  const leadsApi = new LeadsApi(apiClient)

  // Search for channel ID
  const channelValue = leadFields["channel"]?.options.find((opt: any) => opt.label === channel)?.id
  if (!channelValue) return res.status(400).json({ success: false, message: `Channel "${channel}" not found.` })

  try {
    // Create contact
    const personResponse = await personsApi.addPerson({
      name,
      email: [{ value: email, label: "other" }],
      phone: [{ value: phone, label: "other" }],
      b8ba0ea36db4270f7b560e09fb2cb3e0714b388b: countryCode, // ⚙️Country code
      cf5a54d84951c31197d58e97029976686967a64f: countryName, // ⚙️Country name
    })
    if (!personResponse.data) return res.status(400).json({ success: false, message: "Failed to create contact." })

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
    if (!leadResponse.data) return res.status(400).json({ success: false, message: "Failed to create lead." })

    res.status(200).json({ success: true, message: "Contact and lead created successfully." })
  } catch (error: any) {
    console.error("Error:", error.message)
    res.status(500).json({ success: false, message: error.message })
  }
}