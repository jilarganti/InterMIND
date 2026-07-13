---
title: "How the Mind.com Website Is Built: A Nuxt 4 Architecture"
description: "A technical walkthrough of the Mind.com marketing site — Nuxt 4 SSR, @nuxt/content, i18n, Nitro server routes, and the trade-offs behind each choice."
date: "2025-08-15"
author: "[Jilarganti](https://github.com/jilarganti)"
image: "/blog/iStock-681469612.jpg"
---

# How the Mind.com Website Is Built: A Nuxt 4 Architecture

<img src="/blog/iStock-681469612.jpg" alt="Mind.com architecture" width="500" align="right" style="padding: 1.5rem"/>

This is a walkthrough of how [mind.com](https://mind.com) is actually built, and why we made the choices we did. It's a marketing site — a landing surface, a blog, legal pages, and a contact form — so the interesting part isn't any single piece of technology. It's where we drew the lines: what renders on the server, what ships to the browser, and what stays a build-time script. Where a decision was a trade-off rather than an obvious win, we say so.

The site is one package in a pnpm monorepo (the repo is named `InterMIND`). It runs on **Nuxt 4** and deploys to Vercel. Nothing here is exotic; the value is in the fit between the pieces.

## Why Nuxt 4 with SSR, not a static build

A marketing site could be pure static output. We render on the server instead, using Nuxt's Nitro engine with the `vercel` preset, and the reasons are concrete rather than aspirational.

We have a contact form that posts to a backend, per-locale routing across seven languages, and content that changes often enough that we don't want to think about which pages are stale. SSR lets one codebase handle the marketing pages, the localized routes, and the form endpoint without bolting a separate service onto a static bundle. Nitro compiles the server into Vercel functions at build time, so we get server rendering without running or maintaining our own server.

The trade-off is honest: SSR means there's request-time work that a fully static site wouldn't have. For a site this size that cost is small, and in exchange we avoid the coordination problems of stitching a static frontend to a separate API. If this were a 10,000-page docs site with no dynamic surface, static generation would be the better call. It isn't, so SSR wins.

## Content: @nuxt/content and MDC

Blog and legal content are Markdown files under `content/blog/` and `content/legal/`. We use **@nuxt/content v3**, which parses those files into a local better-sqlite3 database at build time and lets us query them like data. Frontmatter shape is enforced with Zod schemas in `content.config.ts`, so a post missing a `title` or with a malformed `date` fails the build instead of shipping broken.

The blog is written in **MDC** — Markdown with components. A callout is `:::tip{title="..."}` rather than raw HTML, which keeps the source readable and lets us control rendering in one place (the `ProseTip` component) instead of scattering markup through every post.

Keeping content as files in the repo means it's versioned, reviewed in pull requests, and diffable. There's no separate CMS to log into and no database to back up. The limit is the flip side of that: editing requires a commit, so this suits a team that already lives in Git, not a large non-technical editorial staff.

## Internationalization and how translation works

The site ships in seven locales — English, Spanish, Portuguese, French, German, Russian, and Chinese — via **@nuxtjs/i18n** with the `prefix_except_default` strategy. English serves from the root; every other locale sits under its own path prefix. UI strings live in `app/locales/<code>.json`.

Translation is a two-track job, and we keep the tracks separate. UI strings and content are translated by two Node scripts — `scripts/i18n-translate-ui.ts` and `scripts/i18n-translate-content.ts` — built on the AI SDK with Anthropic models. These run as a build-time authoring step, not at request time: a human triggers them, reviews the output, and commits it. The translations are ordinary files in the repo like everything else.

That's the deliberate boundary. There is no runtime translation, no on-the-fly language model call when a visitor loads a page. Translations are generated ahead of time and served as plain localized routes, which keeps rendering predictable and lets us proofread before anything goes live.

## Design system: Tailwind v4 and @nuxt/ui

Styling is **Tailwind CSS v4** with **@nuxt/ui v4** on top. New visitors land in dark mode by default; the page background is a deliberate near-black, `#0a0b0d`, rather than pure black. Every page and component is built to work in both light and dark — that's a constraint we hold to, not an afterthought, so nothing hardcodes a light-only color.

Leaning on @nuxt/ui means we inherit accessible, consistent components instead of rebuilding buttons, form controls, and overlays from scratch. The cost is a dependency whose conventions we follow rather than a fully bespoke system, which for a marketing site is the right side of that trade.

## The backend: Nitro server routes and Pipedrive

The backend is small and lives in the same project, as Nitro server routes under `server/`:

- `server/api/submit-form.post.ts` handles the contact form.
- `server/api/health.get.ts` is a health check.
- `server/api/__sitemap__/urls.ts` feeds the sitemap.
- `server/routes/llms.txt.ts` and `llms-full.txt.ts` serve machine-readable summaries for AI crawlers.
- `server/middleware/` holds cross-cutting logic, including a 410-gone handler for retired URLs and audience handling.

When someone submits the contact form, the lead goes to **Pipedrive** through `server/utils/pipedrive.ts`, which creates a person and a lead. That's the only CRM integration and the only place form data goes. There's no queue, no data pipeline, no object storage in between — the endpoint validates the input and calls one API. Keeping it that direct means there's very little to break and very little to reason about when something does.

There's also, deliberately, no user authentication on the marketing site. It's a brochure and a contact form, not an app; adding login and sessions would be surface area we'd have to secure for no benefit.

## Observability: Sentry and PostHog, with consent gating

We run two observability tools, and they do different jobs.

**Sentry** (`@sentry/nuxt`) catches errors. It's wired in as a build-time module and stays off in development, so local noise doesn't reach it. Its job is to tell us when something breaks in production.

**PostHog** (`nuxt-posthog`) handles product analytics, and its behavior around consent is the part worth spelling out. It starts **opted out**. Nothing is captured until the Usercentrics consent platform grants permission, at which point `app/plugins/posthog-consent.client.ts` enables it. The default is no tracking; consent flips it on, not the reverse. PostHog covers analytics and Sentry covers errors — that's the whole picture, with no separate tag-manager or third-party analytics layer bolted on.

## SEO and AI crawlers

SEO is handled by `@nuxtjs/sitemap` and `@nuxtjs/robots` for the sitemap and robots directives. Redirects and cache headers — including the long list of legacy-URL redirects the site has accumulated — live in `vercel.json`, close to where they take effect at the edge.

The `llms.txt` and `llms-full.txt` routes mentioned above are a nod to how the web is read now: they give AI crawlers a clean, structured summary of the site instead of leaving them to scrape rendered pages. It's cheap to serve and means the machines reading the site get an accurate version of it.

## Deployment

Everything deploys to **Vercel**. Nitro's `vercel` preset turns the server routes into Vercel functions and the pages into server-rendered output, so a `git push` becomes a deploy without a separate build-and-ship pipeline to maintain. Sitting inside the pnpm monorepo, mind.com shares tooling and lockfile discipline with the other packages while staying independently deployable.

## The shape of it

None of this is unusual, and that's the point. Nuxt 4 gives us SSR without running servers; @nuxt/content keeps posts and legal pages as reviewable files; i18n and the translation scripts localize the site as a build step we can proofread; a thin Nitro backend hands leads to Pipedrive; Sentry and PostHog watch for breakage and behavior, with analytics off until consent says otherwise.

The site is easy to reason about because we kept the moving parts few and put each one where it belongs. For a marketing site, boring and legible beats clever every time.
