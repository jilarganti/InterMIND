/// <reference types="vite/client" />

// Расширяем существующий интерфейс ImportMetaEnv
interface ImportMetaEnv {
  readonly VITE_IS_PROD?: boolean
  readonly VITE_BASE_URL?: string
  readonly [key: string]: any
}
