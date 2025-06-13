declare module "pipedrive" {
  export class ApiClient {
    authentications: {
      api_key: { apiKey: string }
    }
  }

  export class PersonsApi {
    constructor(apiClient: ApiClient)
    addPerson(data: any): Promise<any>
  }

  export class LeadsApi {
    constructor(apiClient: ApiClient)
    addLead(data: any): Promise<any>
  }
}
