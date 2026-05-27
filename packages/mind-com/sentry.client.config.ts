import * as Sentry from "@sentry/nuxt"
import { httpClientIntegration } from "@sentry/vue"

const isProduction = import.meta.env.VITE_VERCEL_ENV === "production"

Sentry.init({
  // Только на production/preview, не в локальном dev.
  enabled: !import.meta.dev,

  // DSN маркетингового проекта (mind-com), инжектится через vite.define в nuxt.config.ts.
  dsn: import.meta.env.VITE_SENTRY_DSN,

  // Release для «Resolved in Next Release» / отслеживания регрессий.
  release: import.meta.env.VITE_SENTRY_RELEASE || undefined,

  // Разделение prod/preview/dev в Sentry Dashboard.
  environment: import.meta.env.VITE_VERCEL_ENV || "development",

  // Per-deploy тег (redeploy того же SHA получает новый id).
  initialScope: {
    tags: {
      deployment_id: import.meta.env.VITE_VERCEL_DEPLOYMENT_ID || "unknown",
    },
  },

  // Лендинг — низкий объём трафика ошибок; держим квоту скромной.
  tracesSampleRate: isProduction ? 0.1 : 0.3,

  // Session Replay намеренно ВЫКЛЮЧЕН на маркетинговом сайте (приватность + квота).
  replaysSessionSampleRate: 0,
  replaysOnErrorSampleRate: 0,

  integrations: [
    // Web Vitals: LCP, CLS, INP, FCP, TTFB.
    Sentry.browserTracingIntegration({ enableInp: true }),
    // console.error → Sentry.
    Sentry.captureConsoleIntegration({ levels: ["error"] }),
    // Главная причина существования Sentry здесь: ловить упавшую отправку
    // формы /contacts (5xx от /api/submit-form = потерянный лид).
    httpClientIntegration({
      failedRequestStatusCodes: [[500, 599]],
    }),
  ],

  debug: false,

  // Браузерный шум, который никогда не нужно триажить.
  ignoreErrors: [
    "Hydration completed but contains mismatches",
    "ResizeObserver loop limit exceeded",
    "ResizeObserver loop completed with undelivered notifications",
    "Non-Error promise rejection captured",
  ],

  beforeSend(event, hint) {
    const error = hint.originalException

    // Отмена запроса пользователем при навигации.
    if (error instanceof Error && error.name === "AbortError") {
      return null
    }

    if (error instanceof Error && error.message.startsWith("Page Not Found:")) {
      return null
    }

    // Stale-chunk TypeError после Vercel-редеплоя (юзера спасает reload-хендлер).
    if (error instanceof TypeError) {
      const msg = error.message || ""
      const staleChunk = msg.includes("reading 'default'") || /evaluating ['"]\w+\.default['"]/.test(msg)
      if (staleChunk) return null
    }

    return event
  },
})
