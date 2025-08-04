# Mind.com

[![test](https://github.com/vuejs/vitepress/actions/workflows/test.yml/badge.svg?branch=main)](https://github.com/vuejs/vitepress/actions/workflows/test.yml)

Platform for real-time speech translation in video calls. Eliminates language barriers for international teams. Features AI-powered chat with semantic search capabilities.

## Project Description

Mind.com is a VitePress website with multilingual support, integrated with Pipedrive CRM, OAuth authorization, and AI Chat powered by vector database. The project includes:

- 📄 VitePress documentation with support for 12+ languages
- 🔗 API endpoints for CRM integration
- 🚀 OAuth authorization through external service
- 📝 Contact forms with lead submission to Pipedrive
- 📊 Google Analytics integration via GTM
- 🤖 AI Chat with semantic search using Pinecone vector database
- 🔍 Automatic language detection for multilingual responses

## Project Structure

```
packages/mind-com/
├── docs/                           # VitePress documentation
│   ├── .vitepress/
│   │   ├── config/                 # VitePress configuration
│   │   │   ├── i18n/              # Localization configurations
│   │   │   ├── en.ts              # English localization
│   │   │   └── shared.ts          # Shared settings
│   │   └── theme/                 # Custom theme
│   │       ├── components/        # Vue components
│   │       ├── composables/       # Vue composables
│   │       └── styles/           # CSS styles
│   ├── en/                        # English content
│   └── i18n/                      # Translations to other languages
├── api/                           # Vercel API endpoints
│   ├── config/                   # API configuration
│   │   ├── corsConfig.ts         # CORS domain verification
│   │   └── pipedriveConfig.ts    # Pipedrive CRM configuration
│   ├── demo/                     # Demo endpoints
│   ├── lib/                      # API utilities
│   │   └── aiChatLib.ts          # Semantic search tool for AI Chat
│   ├── types/                    # TypeScript type definitions
│   ├── chat.ts                   # AI Chat endpoint
│   ├── signUp.ts                 # User registration
│   ├── submitForm.ts             # Form submission
│   └── SECURITY.md               # API security documentation
├── scripts/                       # Automation scripts
└── __tests__/                     # Tests
```

## Configuration Constants

The project uses configuration constants defined in `docs/.vitepress/config/index.ts`. These constants need to be properly configured for different environments:

### Site Configuration

```typescript
// Site URL (production domain)
const SITE_URL = "https://mind.com"

// Pages to exclude from indexing and sitemap
const NOINDEX_PAGES = ["exp/", "chat"]

// Right-to-left languages
const RTL_LOCALES = ["ar", "fa", "ur"]
```

### Domain Configuration

```typescript
// Main application domains
const APP_DOMAIN = "inter.mind.com" // Production domain
const APP_DOMAIN_DEV = "dev.inter.mind.com" // Development domain
```

### OAuth Configuration

```typescript
// OAuth client ID (public, safe to expose)
const oauthClientId = "vca"

// OAuth endpoints (auto-generated based on environment)
const oauthProviderUrl = appBaseUrl + "/auth"
const checkoutUrl = appBaseUrl + "/checkout"
```

### Environment Variables

```typescript
// Google Tag Manager ID
const GTM_ID_TO_USE = process.env.GTM_ID

// Production detection
const isProduction = process.env.VERCEL_ENV === "production"
```

### Important Notes

⚠️ **Security:** These constants are exposed in client-side code, so they should NOT contain sensitive information like API keys or secrets.

✅ **Safe to expose:**

- Domain names
- OAuth client IDs
- Public configuration flags
- GTM IDs

❌ **Never expose:**

- API tokens
- Private keys
- Database credentials
- Internal secrets

### Customization

To adapt the project for your domain:

1. **Update domain constants:**

   ```typescript
   const APP_DOMAIN = "your-domain.com"
   const APP_DOMAIN_DEV = "dev.your-domain.com"
   ```

2. **Update site URL:**

   ```typescript
   const SITE_URL = "https://your-docs-site.com"
   ```

3. **Configure OAuth client:**

   ```typescript
   const oauthClientId = "your-oauth-client-id"
   ```

4. **Set environment variables in Vercel:**
   - `GTM_ID`: Your Google Tag Manager ID
   - `VERCEL_ENV`: Set automatically by Vercel
   - `PIPEDRIVE_API_TOKEN`: Your Pipedrive API token

## AI Chat with Vector Database

The project includes an AI-powered chat system with semantic search capabilities using Pinecone vector database and OpenAI embeddings.

### Features

- 🤖 **AI-powered responses** using Anthropic Claude models
- 🔍 **Semantic search** through InterMind documentation
- 🌐 **Automatic language detection** from user questions
- 📚 **Context-aware answers** using vector database
- 🛡️ **Domain-protected** API endpoints

### Architecture

1. **Document Indexing**: Documentation is processed into chunks and stored in Pinecone
2. **Semantic Search**: AI uses `semanticSearchTool` to find relevant information
3. **Context Generation**: Retrieved information is used to generate accurate responses
4. **Language Detection**: AI automatically responds in the user's question language

### Required Environment Variables

```env
# AI Chat Configuration
PINECONE_API_KEY=your_pinecone_api_key
PINECONE_INDEX_NAME=intermind-docs
OPENAI_API_KEY=your_openai_api_key
ANTHROPIC_API_KEY=your_anthropic_api_key
```

### Setup and Usage

1. **Create Pinecone Index:**
   - Name: `intermind-docs`
   - Dimensions: `1536` (for text-embedding-3-small)
   - Metric: `cosine`

2. **Index Documents:**

   ```bash
   # Build project to generate documentation
   pnpm build

   # Index documents to Pinecone
   pnpm index:docs
   ```

3. **API Endpoint:**
   - `POST /api/chat` - Main chat endpoint with semantic search integration

### How It Works

- User asks questions in any language
- AI automatically detects language and responds accordingly
- For InterMind-specific questions, semantic search finds relevant documentation
- Responses include context from vector database for accuracy
- All requests are domain-protected for security

For detailed setup instructions, see [AIChat-VectorDB-Setup.md](docs/AIChat-VectorDB-Setup.md).

## Vercel Integration

The project is designed to run on Vercel, utilizing its serverless functions for API endpoints and static site generation for the documentation. The Vercel configuration is located in `packages/mind-com/vercel.json`.

### Project Settings

![alt text](docs/public/vercel-project-settings.png)

### Environment Variables

![alt text](docs/public/vercel-env-variables.png)

Environment variables are automatically loaded by `vercel pull` command into `packages/mind-com/.vercel/.env.development.local`:

```bash
# Pipedrive CRM
PIPEDRIVE_API_TOKEN=your_pipedrive_token

# AI Chat & Vector Database
PINECONE_API_KEY=your_pinecone_api_key
PINECONE_INDEX_NAME=intermind-docs
OPENAI_API_KEY=your_openai_api_key
ANTHROPIC_API_KEY=your_anthropic_api_key

# Vercel environment
VERCEL_ENV=development|preview|production

# OAuth settings (configured automatically through code)
# Domains are determined from VERCEL_ENV:
# - production: inter.mind.com
# - development: dev.inter.mind.com
```

## Development

### Requirements

- Node.js 20+
- pnpm
- Vercel CLI

### Initial Setup

1. **Install dependencies:**

   ```bash
   pnpm install
   ```

2. **Setup Vercel CLI:**

   ```bash
   npm i -g vercel
   vercel login
   ```

3. **Link project to Vercel:**

   ```bash
   # Link to existing Vercel project
   vercel link --repo

   # Follow instructions to select team/scope and project
   ```

4. **Download environment variables:**

   ```bash
   # Downloads variables from Vercel project
   # Creates packages/mind-com/.vercel/.env.development.local
   vercel pull
   ```

### Local Development

#### Mode 1: VitePress dev server

```bash
# Run frontend only (without API)
pnpm dev

# Available at http://localhost:5173
```

```bash
# Run with API endpoints and full Vercel simulation
vercel dev

# Available at http://localhost:3000
# API endpoints work at /api/*
```

Vercel dev provides:

- Full production environment simulation
- Working API endpoints
- Environment variables from `.vercel/.env.development.local`
- Automatic restart on changes

### Useful Commands

```bash
# Production build
vercel [--prod]

# Translate content to all languages
pnpm translate
```

## Deployment

### Automatic Deployment

The project is configured for automatic deployment via Vercel on push to main branch.

### Manual Deployment

```bash
# Deploy to preview environment
vercel

# Deploy to production
vercel --prod
```

### Vercel Configuration

The project uses:

- **Build Command:** `pnpm build` (automatically detected)
- **Output Directory:** `docs/.vitepress/dist`
- **Root Directory:** `packages/mind-com`
- **Node.js Version:** 22.x (automatic)

#### vercel.json settings:

```json
{
  "cleanUrls": true,
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [{ "key": "Cache-Control", "value": "max-age=31536000, immutable" }]
    }
  ]
}
```

#### API functions:

```json
{
  "functions": {
    "../../api/**/*.ts": {
      "runtime": "@vercel/node@3.0.0"
    }
  }
}
```

## Integrations

### API Security

All API endpoints are protected by domain verification. See [SECURITY.md](api/SECURITY.md) for detailed security configuration and allowed domains.

### Pipedrive CRM

API endpoints for CRM integration. Configuration settings are defined in [pipedriveConfig.ts](api/config/pipedriveConfig.ts).

**Available endpoints:**

- `POST /api/signUp` - User registration with lead creation
- `POST /api/submitForm` - Contact form submission with lead creation
- `POST /api/chat` - AI Chat with semantic search capabilities

```typescript
// Sign up example
const response = await fetch("/api/signUp", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    name: "John Doe",
    email: "john@example.com",
    params: {
      plan: "Pro",
      method: "Google",
    },
    utm: {
      source: "website",
      medium: "organic",
    },
  }),
})

// Contact form example
const response = await fetch("/api/submitForm", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    name: "John Doe",
    email: "john@example.com",
    kind: "Demo Request",
    message: "Interested in your service",
    webSite: "https://example.com",
  }),
})

// AI Chat example
const response = await fetch("/api/chat", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    messages: [{ role: "user", content: "What are InterMind's pricing plans?" }],
    mode: "basic", // or "followup"
  }),
})
```

### Testing

Comprehensive test suite for API endpoints and utilities. See [**tests**/README.md](__tests__/README.md) for detailed testing documentation including:

- Unit tests for API endpoints with full mocking
- UTM utility testing with browser API simulation
- Integration tests for end-to-end traffic flow validation
- Coverage reporting and CI/CD integration

### OAuth Authorization

`AuthButton` component handles OAuth flow:

- **Development:** `https://dev.inter.mind.com/auth`
- **Production:** `https://inter.mind.com/auth`

### Google Analytics

Integration via Google Tag Manager:

- **Production GTM ID:** `GTM-YOUR_PRODUCTION_ID`
- **Test GTM ID:** `GTM-YOUR_TEST_ID`

## Localization

Supported languages:

- 🇺🇸 English (primary)
- 🇪🇸 Español
- 🇨🇳 中文
- 🇩🇪 Deutsch
- 🇫🇷 Français
- 🇧🇷 Português
- 🇯🇵 日本語
- 🇦🇪 العربية
- 🇮🇳 हिन्दी
- 🇹🇷 Türkçe
- 🇰🇷 한국어
- 🇷🇺 Русский

Localization configuration is located in `docs/.vitepress/config/locales.ts`.

### Automatic Content Translation

The project includes an automatic translation script using AI models.

#### Translation Configuration

File `scripts/translateConfig.js` contains settings for automatic translation:

```javascript
export const config = {
  // Translation directories
  rootDir: "../docs/en", // Source English content
  rootTranslateDir: "../docs/i18n", // Page translations
  configDir: "../docs/.vitepress/config", // VitePress configuration
  configTranslateDir: "../docs/.vitepress/config/i18n", // Config translations

  // Supported languages
  languages: {
    ar: { code: "ar", name: "Gulf Arab & MSA" },
    zh: { code: "zh", name: "Mandarin" },
    es: { code: "es", name: "Spanish (México)" },
    hi: { code: "hi", name: "Hindi" },
    ja: { code: "ja", name: "Japanese" },
    pt: { code: "pt", name: "Portuguese (Brazil)" },
    ru: { code: "ru", name: "Russian" },
    de: { code: "de", name: "German" },
    fr: { code: "fr", name: "French" },
    tr: { code: "tr", name: "Turkish" },
    ko: { code: "ko", name: "Korean" },
  },

  // AI models for translation
  models: {
    claude: { name: "claude-4-sonnet-20250514" },
    gpt4: { name: "gpt-4.1-mini" },
    grok: { name: "grok-2-latest" },
  },

  // Exclusions and filters
  exclude: ["test"], // Exclude from translation
  allowedExtensions: [".md", ".vue", ".svg"], // Allowed extensions
}
```

#### Using Translation Script

```bash
# Run automatic translation
pnpm translate

# Script translates:
# - Markdown files from docs/en/ to docs/i18n/{language}/
# - VitePress configurations from config/ to config/i18n/
# - Vue components and SVG files when needed
```

#### Translation Features

The script can:

- **Preserve structure:** Markdown markup, frontmatter, links remain unchanged
- **SEO optimization:** Translates title and description with search optimization in mind
- **Cultural adaptation:** Adapts content for target audience specifics
- **Technical accuracy:** Doesn't translate technical terms and product names

**Not translated:**

- Technical terms (API, OAuth, etc.)
- Product names (InterMIND, Pipedrive)
- Link anchors and URLs
- Code and technical configuration

**Translated:**

- All user-facing content
- Meta tags for SEO
- Image alt text
- Tables and diagrams

## Monitoring

- **Analytics:** Vercel Analytics + Speed Insights
- **Status page:** https://status.mind.com/
- **Error tracking:** Built into Vercel

## Troubleshooting

### API Issues

```bash
# Check environment variables
vercel env ls

# Update variables (creates .vercel/.env.development.local)
vercel pull

# Restart dev server
vercel dev
```

### Localization Issues

```bash
# Rebuild project
pnpm build

# Check configuration
cat docs/.vitepress/config/locales.ts
```

### OAuth Issues

1. Check domain settings in code
2. Ensure `VERCEL_ENV` is set correctly
3. Verify redirect URI in OAuth provider

## License

- **Code:** Apache License 2.0
- **Content:** Creative Commons Attribution-ShareAlike 4.0

Details in [LICENSE.md](LICENSE.md).
