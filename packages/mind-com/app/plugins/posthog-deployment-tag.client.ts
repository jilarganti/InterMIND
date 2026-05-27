/**
 * Tags every PostHog event with the Vercel deployment that produced it, so
 * canary / rollback investigations can filter by per-deploy id rather than
 * commit SHA (a redeploy of the same SHA gets a distinct id).
 */
export default defineNuxtPlugin({
  name: "posthog-deployment-tag",
  // Run after nuxt-posthog has registered $clientPosthog.
  dependsOn: ["posthog"],
  setup(nuxtApp) {
    const ph = nuxtApp.$clientPosthog as { register: (props: Record<string, unknown>) => void } | undefined
    if (!ph?.register) return

    const deploymentId = import.meta.env.VITE_VERCEL_DEPLOYMENT_ID || ""
    const releaseSha = import.meta.env.VITE_SENTRY_RELEASE || ""
    const vercelEnv = import.meta.env.VITE_VERCEL_ENV || ""

    if (!deploymentId && !releaseSha) return

    ph.register({
      ...(deploymentId ? { deployment_id: deploymentId } : {}),
      ...(releaseSha ? { release_sha: releaseSha } : {}),
      ...(vercelEnv ? { vercel_env: vercelEnv } : {}),
    })
  },
})
