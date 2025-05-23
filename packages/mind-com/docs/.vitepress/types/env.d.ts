/// <reference types="vite/client" />

declare module "*.vue" {
  import type { DefineComponent } from "vue"
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface ImportMetaEnv {
  readonly VITE_IS_PROD: string
  // здесь можно добавить другие переменные окружения
  // readonly VITE_API_URL: string
  // readonly VITE_APP_TITLE: string
}
