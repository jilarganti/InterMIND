# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Communication

Общайся с пользователем на русском языке.

## Overview

pnpm monorepo (the GitHub repo is named `InterMIND`) for Mind.com's marketing/brand sites. Two deployable packages plus one shared library:

| Path                  | Stack                          | Domain / purpose |
| --------------------- | ------------------------------ | ---------------- |
| `packages/mind-com`   | **Nuxt 4** (SSR, Nitro→Vercel) | https://mind.com — brand campaign site, blog, legal, contact form. The actively-developed package. |
| `packages/golden-fish`| **VitePress** + Vercel serverless | https://goldenfish.ae — UAE business-formation services with AI chat. |
| `shared/`             | Vue 3 + Pinia, VitePress theme | Components/stores/utils imported by `golden-fish` (workspace dep `shared`). |

**The two packages are independent.** They have different stacks, domains, and business logic — a change in one is NOT meant to propagate to the other unless explicitly requested.

> Note: `.github/copilot-instructions.md` and the root `README.md` are partly **stale** — they describe `mind-com` as a VitePress site with OAuth/Upstash AI chat and mention a `wiki-mind` package. In reality `mind-com` is now Nuxt 4 with `@nuxt/content`, and there is no `wiki-mind`. Trust the actual `packages/mind-com` source over those docs. The `shared/` library and its AI-chat/Pipedrive descriptions still apply to `golden-fish`.

## Commands

Always use **pnpm** (never npm/yarn). Run package commands from the package directory.

### mind-com (Nuxt — primary)
```bash
cd packages/mind-com
pnpm dev          # nuxt dev on http://localhost:4000 (loads .vercel/.env.development.local)
pnpm build        # nuxt build (Nitro vercel preset)
pnpm lint         # eslint --cache .
pnpm format       # prettier -w .
pnpm typecheck    # nuxt typecheck
pnpm i18n:translate:ui          # translate app/locales/*.json UI strings
pnpm i18n:translate:content     # translate content/<locale>/{blog,legal} markdown
# add --from-en to retranslate from English source; --all to do every locale
```
mind-com has **no unit tests / `test` script**.

### golden-fish (VitePress)
```bash
cd packages/golden-fish
pnpm dev          # FE (vitepress :5173) + BE (vercel dev) together
pnpm dev:FE       # vitepress only
pnpm build        # vitepress build docs
pnpm test         # vitest --run --coverage
pnpm test:unit    # vitest --run __tests__/unit
vitest path/to/file.test.ts            # run a single test file
vitest -t "name of test"               # run tests matching a name
pnpm translate          # tsx ../../scripts/translate.ts ./scripts/translateConfig.ts
pnpm translate:check    # verify HTML-tag balance across translations
```

### Root
```bash
pnpm install
PACKAGE_PATH=packages/mind-com pnpm dev   # root proxy scripts cd into $PACKAGE_PATH
```
Vercel env: `vercel link --repo` then `vercel pull` writes `.vercel/.env.development.local` (used by mind-com dev).

## Architecture

### mind-com (Nuxt 4)
- `nuxt.config.ts` is the single source of truth — read it first. It wires modules, i18n, color mode, PostHog/Sentry, sitemap/robots, and Vercel build env.
- **Directory layout** (Nuxt 4 `app/` srcDir): `app/pages/`, `app/components/`, `app/layouts/`, `app/composables/`, `app/plugins/`, `app/locales/<code>.json` (UI strings), `app/assets/css/`. Markdown content lives in `content/{blog,legal}/` (English) and `content/<locale>/{blog,legal}/` (translations), validated by `content.config.ts` Zod schemas.
- **Backend = Nitro server routes** under `server/`: `server/api/*` (e.g. `submit-form.post.ts`, `health.get.ts`, `__sitemap__/urls.ts`), `server/routes/llms.txt.ts`, `server/middleware/410-gone.ts`, `server/utils/pipedrive.ts`. There is **no** `api/` Vercel-functions dir here (that pattern is golden-fish's).
- **i18n** (`@nuxtjs/i18n`): locales en/es/pt/fr/de/ru/zh, `strategy: prefix_except_default`. `compilation.strictMessage:false` allows inline HTML in messages. Always call `useI18n({ useScope: "global" })` to avoid intlify warnings.
- **Content collections** (`@nuxt/content` v3): per-locale `blog_<locale>` / `legal_<locale>` collections are generated programmatically in `content.config.ts`; the blog uses MDC syntax (`:::tip{title="..."}`, overridden via `app/components/content/ProseTip.vue`).
- **Theme/color**: default `dark` for new visitors (`#0a0b0d` page bg is intentional). All pages/components must work in light AND dark — no hardcoded light colors in scoped CSS.
- **Observability**: Sentry (`@sentry/nuxt`, build-time module skipped in dev) + PostHog (`nuxt-posthog`). PostHog is its own EU project, starts **opted-out**, and is enabled only after Usercentrics CMP grants consent in `app/plugins/posthog-consent.client.ts`. Errors go to Sentry only (`capture_exceptions:false`).
- **Deploy**: Vercel with manual rolling releases (1→10→100%). `vercel.json` holds extensive SEO redirects and asset cache headers.

### golden-fish (VitePress) + shared
- VitePress site under `docs/` (`docs/.vitepress/config/`, `docs/.vitepress/theme/`); source content `docs/en/`, translations `docs/i18n/{lang}/`.
- Vercel serverless functions under `api/`. **All endpoints must be wrapped in `withDomainCheck()`** (`api/lib/domainMiddleware.js`) for CORS/domain protection. Types in `api/types/`, CRM lead logic in `api/lib/pipedriveLib`.
- `shared/` is consumed here: `shared/index.ts` extends the VitePress `DefaultTheme`, registers Pinia + all `shared/components`, and runs UTM/gclid tracking. AI chat UI in `shared/components/AIChat/`, Pinia chat state in `shared/stores/chatsStore.ts`, CRM/chat composables in `shared/composables/`.

### Translation system (both packages, two mechanisms)
- **golden-fish**: `scripts/translate.ts` (root) driven by each package's `scripts/translateConfig.ts`; OpenAI + Anthropic fallback; `RTL_LOCALES = ["ar","fa","ur"]`. After translating, run `pnpm translate:check` to verify HTML tags stay balanced. See `scripts/TRANSLATION_FIX_2025.md`.
- **mind-com**: its own `scripts/i18n-translate-{ui,content}.ts` (separate from the root translate pipeline).

## Conventions
- Prettier: no semicolons, double quotes, `printWidth: 160` (config in root `package.json`).
- ESLint flat config (`eslint.config.js`) only lints `.js/.mjs/.cjs`; Vue/TS linting runs via each package's `nuxt`/vitepress tooling.
- Node 20+ required. pnpm overrides pin security-sensitive transitive deps (undici/esbuild).
