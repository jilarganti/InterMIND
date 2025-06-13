// packages/site/lib/pipedriveClient.ts
import { ApiClient, PersonsApi, LeadsApi } from "pipedrive"
import "../../../shared/types/pipedrive"

const getApiClient = () => {
  const client = new ApiClient()
  if (!process.env.PIPEDRIVE_API_TOKEN) {
    throw new Error("Pipedrive API token is not set")
  }
  client.authentications.api_key.apiKey = process.env.PIPEDRIVE_API_TOKEN
  return client
}

export const createContact = async (personData: any) => {
  const client = getApiClient()
  const personsApi = new PersonsApi(client)
  const res = await personsApi.addPerson(personData)
  if (!res?.data) throw new Error("Failed to create contact")
  return res.data
}

export const createLead = async (leadData: any) => {
  const client = getApiClient()
  const leadsApi = new LeadsApi(client)
  const res = await leadsApi.addLead(leadData)
  if (!res?.data) throw new Error("Failed to create lead")
  return res.data
}
