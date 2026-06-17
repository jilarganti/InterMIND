/**
 * Twin of the package-root pipedrive.d.ts — see that file for the full
 * rationale. Required because `vue-tsc -b` type-checks the server project in
 * isolation from the app project, and each only sees its own scope. Keep the
 * two files identical.
 */
declare module "pipedrive" {
  interface ApiKeyAuth {
    apiKey: string
  }

  export class ApiClient {
    authentications: {
      api_key: ApiKeyAuth
      [key: string]: ApiKeyAuth
    }
  }

  interface ApiResponse<T = { id?: number | string; [key: string]: unknown }> {
    data: T
  }

  export class PersonsApi {
    constructor(client: ApiClient)
    addPerson(personData: Record<string, unknown>): Promise<ApiResponse>
  }

  export class LeadsApi {
    constructor(client: ApiClient)
    addLead(leadData: Record<string, unknown>): Promise<ApiResponse>
  }
}
