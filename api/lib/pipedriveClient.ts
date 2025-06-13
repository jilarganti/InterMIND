// @ts-ignore
import Pipedrive from "pipedrive"

const getApiClient = () => {
  const client = new Pipedrive.ApiClient()
  const apiKey = process.env.PIPEDRIVE_API_TOKEN

  if (!apiKey) throw new Error("Pipedrive API token is not set")

  client.authentications.api_key.apiKey = apiKey
  return client
}

// type CreatePersonPayload = {
//   name?: string
//   email?: string | string[]
//   phone?: string | string[]
//   owner_id?: number
//   org_id?: number
//   [key: string]: any
// }

// type CreateLeadPayload = {
//   title: string
//   person_id?: number
//   org_id?: number
//   owner_id?: number
//   value?: number
//   currency?: string
//   [key: string]: any
// }

export const createContact = async (personData: any) => {
  const client = getApiClient()
  const personsApi = new Pipedrive.PersonsApi(client)
  const response = await personsApi.addPerson(personData)
  if (!response?.data?.id) throw new Error("Failed to create contact")
  return response.data
}

export const createLead = async (leadData: any) => {
  const client = getApiClient()
  const leadsApi = new Pipedrive.LeadsApi(client)
  const response = await leadsApi.addLead(leadData)
  if (!response?.data?.id) throw new Error("Failed to create lead")
  return response.data
}
