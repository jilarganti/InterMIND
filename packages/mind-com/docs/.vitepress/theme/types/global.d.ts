/// <reference types="vite/client" />

// Vue типы
declare module "*.vue" {
  const component: any
  export default component
}

// Расширение Vite env
declare module "vite/client" {
  interface ImportMetaEnv {
    readonly VITE_OAUTH_PROVIDER_URL: string
    readonly VITE_OAUTH_CLIENT_ID: string
    readonly VITE_APP_BASE_URL: string
  }
}

// GTM типы
declare global {
  interface Window {
    dataLayer?: Array<{ event: string; [key: string]: any }>
  }
}

export {}
