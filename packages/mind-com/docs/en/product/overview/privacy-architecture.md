# Data Privacy for AI Meetings

## Introduction

InterMind is a platform for multilingual video meetings with live AI-powered interpretation. We are built for professionals — where not only the message matters, but the privacy of that message too.

> [!tip] Real-time interpretation. Native-level understanding. No subtitles. No lag.

To deliver a seamless experience, InterMind integrates third-party services for video, audio, cloud storage, real-time interpretation, and analytics. These third-party providers help us ensure performance and scalability — but they also introduce a layer we cannot directly control.

We believe in **transparency over promises**. We can only guarantee privacy and security for components under our direct control — our software, interface logic, and how we route data. For everything else, we offer you **the power of choice**.

This is why we designed InterMind with **region-based confidentiality**: you choose where your data is processed, which legal framework governs it, and which AI models are used — based on your selected privacy zone.

## Core Privacy Principles

### 1. **Split Responsibility Model**

- InterMind does **not own or operate** the underlying cloud infrastructure or LLMs (large language models).
- We don’t store your media files, nor do we directly process your speech for model training.
- We **do control** the client-side software, routing rules, and compliance logic — including what region your data flows through, what model is used, and under what conditions.

### 2. **Architectural Transparency**

- You can explicitly see which region is active for your session, and which laws apply (e.g. GDPR in Europe, CCPA in the US, PDPL in the UAE).
- Each session runs in a designated **compliance mode**, and this configuration is visible and auditable.

### 3. **Privacy by Default**

- InterMind **never** stores or reuses your content for training, profiling, or commercial analysis.
- We do not retain transcripts or media unless you explicitly request it.
- If you disable interpretation, **no user data leaves your device at all**.

## Region-Based Confidentiality: How It Works

At the start of each session, or as part of your organization’s account settings, you can select a preferred privacy zone:

| Region        | Applicable Laws                                                                               | Infrastructure                 | LLM Providers              |
| ------------- | --------------------------------------------------------------------------------------------- | ------------------------------ | -------------------------- |
| Europe        | [GDPR](https://gdpr.eu)                                                                       | EU data centers only           | EU-hosted or EU-compliant  |
| United States | [CCPA](https://oag.ca.gov/privacy/ccpa)                                                       | AWS / GCP / Azure (US)         | OpenAI US / Anthropic US   |
| UAE / MENA    | [PDPL](https://www.signzy.com/data-privacy-laws-in-the-uae-2025-everything-you-need-to-know/) | UAE or Bahrain cloud           | Regional or compliant LLMs |
| Asia / China  | Local Chinese privacy laws                                                                    | Alibaba, Huawei, Tencent Cloud | China-based LLMs only      |

This choice governs how your video, audio, and interpreted content is processed and through which jurisdiction.

You may:

- **Set a default region** for your organization
- **Override the region per session**
- **Blacklist certain regions** entirely

## What InterMind Guarantees

We implement strict technical and legal safeguards within our domain of control:

### 1. **Local Execution First**

Client-side functions such as speech capture and UI rendering are handled locally whenever possible.

### 2. **Data Minimization**

Only the minimum data necessary for the current task is transmitted.

### 3. **End-to-End Encryption**

All audio/video data is transmitted through encrypted channels. Interpretation requests are tunneled via secure proxies, avoiding public exposure.

### 4. **No Default Storage**

We do not store your meetings, transcripts, or conversations unless you opt in. All storage is region-bound.

## Legal & Regulatory Compliance

InterMind supports full compatibility with:

- **GDPR** — Right to access, deletion, export, and restriction of processing. No AI profiling.
- **CCPA** — No sale of personal data, opt-out options, and transparent collection practices.
- **UAE PDPL** — Local storage if requested, strict access controls, no international transfers without consent.
- **China DSL/PIPL** — In-region processing only, no foreign routing if China is selected.

## What We Can and Cannot Guarantee

We are committed to full honesty, not just legalese.

> InterMind **cannot guarantee** how third-party LLMs or infrastructure providers process data once it leaves our control.

### We DO NOT guarantee:

- That OpenAI, Anthropic, or other LLM providers won’t log or retain input data.
- That cloud hosts have no access to media streamed through their systems (unless you're using a secure enclave or enterprise deployment).
- That content passed to a third-party model is outside their training scope (unless under private contract).

### We DO guarantee:

- You always know **where and how** your data is being processed.
- You have tools to **control risk** by selecting your region and compliance mode.
- InterMind **never** stores or exploits your content — even temporarily — without your consent.

## Trust Modes & Privacy Levels

You can customize your session to match your confidentiality needs:

| Trust Mode       | Interpretation | Cross-Region Transfer | Storage            | Best For                            |
| ---------------- | -------------- | --------------------- | ------------------ | ----------------------------------- |
| 🔒 Local-Only    | ❌             | ❌                    | ❌                 | Legal, government, internal reviews |
| 🔐 Region-Locked | ✅             | ✅ (within zone only) | ❌ or session-only | Healthcare, finance, HR             |
| 🌐 Global Flex   | ✅             | ✅ (multi-region)     | ✅                 | Support, sales, multinational teams |

## What You Get Out of the Box

- Region-specific LLM usage, with real-time transparency.
- No training or profiling of your content — ever.
- Zero data transmission if interpretation is off.
- Optional data storage, always region-bound.
- Full audit and export tools for enterprise clients.

## Conclusion

> [!note] Privacy is not a promise — it’s an architecture.

InterMind doesn’t hide behind vague assurances. Instead, we give you **choices**, **visibility**, and **control**.

- You choose your region.
- You choose your level of interpretation.
- You decide what risk you’re willing to accept — and we help you stay compliant at every level.

**InterMind — built for professionals, backed by compliance, governed by trust.**
