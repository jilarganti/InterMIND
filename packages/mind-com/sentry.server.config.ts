import * as Sentry from "@sentry/nuxt"

const isProduction = process.env.VERCEL_ENV === "production"

Sentry.init({
  // Только на production/preview, не в локальном dev.
  enabled: !import.meta.dev,

  // DSN маркетингового проекта (mind-com) — публичный, фолбэк как у клиента.
  dsn: process.env.SENTRY_DSN || "https://0beb350c4f5bcab452137618f4ec0d4f@o4511386578255872.ingest.de.sentry.io/4511462432899152",

  // Release для отслеживания регрессий.
  release: process.env.VERCEL_GIT_COMMIT_SHA || undefined,

  // Разделение prod/preview/dev в Sentry Dashboard.
  environment: process.env.VERCEL_ENV || "development",

  // Per-deploy тег.
  initialScope: {
    tags: {
      deployment_id: process.env.VERCEL_DEPLOYMENT_ID || process.env.VERCEL_URL || "unknown",
    },
  },

  // Должно совпадать с клиентом, иначе distributed traces теряют парные спаны.
  tracesSampleRate: isProduction ? 0.1 : 0.3,

  // Транзакции без диагностической ценности, гонящие объём на каждом pageview.
  ignoreTransactions: [
    /^GET \/api\/health/,
    /^GET \/sitemap.*\.xml$/,
    /^GET \/robots\.txt$/,
    /^GET \/__og-image__/,
    /^GET \/_nuxt\//,
    /^GET \/_ipx\//,
    /^GET \/favicon/,
  ],

  integrations: [Sentry.captureConsoleIntegration({ levels: ["error"] })],

  debug: false,

  // Сетевой шум: обрывы соединений, broken pipe — это не баги.
  ignoreErrors: [/ECONNRESET/, /ECONNABORTED/, /EPIPE/, /socket hang up/i, /client (?:closed|disconnected)/i, /aborted$/i],

  beforeSend(event, hint) {
    const error = hint.originalException

    if (error instanceof Error && error.message.startsWith("Page Not Found:")) {
      return null
    }

    if (error instanceof Error && error.name === "AbortError") {
      return null
    }

    return event
  },
})
