/// <reference types="vite/client" />

declare module "*.vue" {
  import type { DefineComponent } from "vue"
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

interface ImportMetaEnv {
  readonly VITE_IS_PROD: string
  readonly VITE_BASE_URL: string
  // здесь можно добавить другие переменные окружения
  // readonly VITE_API_URL: string
  // readonly VITE_APP_TITLE: string
}
