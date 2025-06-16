/// <reference types="vite/client" />

declare module "*.vue" {
  const component: any
  export default component
}

declare module "vite/client" {
  interface ImportMetaEnv {
    readonly VITE_OAUTH_PROVIDER_URL: string
    readonly VITE_OAUTH_CLIENT_ID: string
    readonly VITE_APP_BASE_URL: string
  }
}

export {}
