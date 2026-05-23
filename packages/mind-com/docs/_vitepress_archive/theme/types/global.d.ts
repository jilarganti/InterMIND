/// <reference types="vite/client" />

// Global types for the project
declare global {
  interface Window {
    /**
     * Google Tag Manager dataLayer
     * @see https://developers.google.com/tag-platform/tag-manager/web/devguide#datalayer
     */
    dataLayer?: Array<{ event: string; [key: string]: any }>
  }
}

export {}
