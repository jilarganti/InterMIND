---
title: Subprocessors
description: The infrastructure and service providers InterMIND uses to process personal data — each provider's purpose, processing region, and safeguards.
updated: "2026-06-17"
---

To run InterMIND we use a small set of infrastructure and service providers ("subprocessors"). This page lists each one, what it processes, where, and under what safeguards. **Service Operator and Contracting Entity:** Golden Fish CSP LLC (UAE). **Publisher and Intellectual Property Owner:** MindMeeting OÜ (EE).

Processing happens in the EU by default. Where a provider's corporate entity is outside the EU/EEA, transfers are covered by Standard Contractual Clauses (SCCs) and/or the EU–US Data Privacy Framework (DPF). We update this list whenever a subprocessor is added or removed.

| Subprocessor | Entity domicile | Purpose | Personal data processed | Processing location | Safeguards |
| --- | --- | --- | --- | --- | --- |
| Vercel Inc. | US | Web app hosting, serverless functions, AI Gateway (proxy) | All app traffic incl. meeting metadata, chat | Functions pinned to Frankfurt (fra1); AI Gateway has a zero-data-retention policy (no prompt retention) | DPA + SCCs; ZDR |
| Fly.io Inc. | US | Realtime WebSocket server hosting | Chat fan-out, conference events, transcription words in transit | Paris (CDG) | DPA + SCCs |
| Neon Inc. | US | Postgres (primary database) | Accounts, meetings, messages, transcripts, billing usage | Frankfurt (AWS eu-central-1) | DPA + SCCs; encryption at rest |
| Tigris Data Inc. | US | Object storage | Meeting recordings, chat attachments, documents, export archives | EU multi-region (Frankfurt + Amsterdam) | DPA; TLS |
| MindMeeting OÜ (Mind API) | EE | Meeting media (SFU), speech recognition, realtime translation | Audio/video streams, speech, participant names/roles | OVH, France | Intra-group agreement |
| Mistral AI SAS | FR | Post-meeting AI summary | Meeting transcript (once, at meeting end) | EU | DPA; zero data retention; no training on paid API data |
| DeepL SE | DE | Document translation | Contents of documents users submit for translation | EU (Cologne) | DPA; no retention for training |
| Stripe Payments Europe Ltd / Stripe Inc. | IE / US | Billing | Name, email, billing address, payment method (card never touches InterMIND) | EU / US | DPA + SCCs; PCI-DSS |
| PostHog | US (EU Cloud) | Product analytics, session replay | Usage events, console/replay (consent-gated, opt-out by default; meeting speech scrubbed from logs) | EU (eu.posthog.com) | DPA; EU residency |
| Functional Software Inc. (Sentry) | US (EU region) | Error monitoring | Error traces, breadcrumbs (no meeting content) | EU (de.sentry.io) | DPA; EU residency |
| Resend | US | Transactional email (sign-in codes, notifications) | Recipient email, message content | Ireland (eu-west-1) | DPA + SCCs |
| Upstash Inc. | US | OIDC session cache (Redis) | Encrypted session/token cache | Frankfurt (fra1) | DPA + SCCs; encrypted payloads |
| Pipedrive OÜ | EE | Sales CRM (contact / partner forms) | Lead name, email, company, message | EU | DPA |
| Google LLC / Microsoft Corp. | US | OAuth sign-in only | Name, email, profile photo (standard OAuth scopes) | US | DPF / SCCs |

For questions about this list or to request a copy of the relevant transfer safeguards, contact privacy@mind.com.
