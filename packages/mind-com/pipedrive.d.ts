/**
 * Ambient types for the `pipedrive` package (v23) — it ships no .d.ts and there
 * is no @types/pipedrive on npm. Covers only the surface used by
 * server/utils/pipedrive.ts; extend as needed.
 *
 * Why this exists at the package root AND a twin at server/types/pipedrive.d.ts:
 * `nuxt typecheck` runs `vue-tsc -b` over separate composite projects. The app
 * project pulls server utils in through Nitro's auto-import graph and only sees
 * root-level `../*.d.ts`; the server project sees `../server/**`. Neither
 * project sees the other's scope, so the declaration must live in both. Keep
 * the two files identical.
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
