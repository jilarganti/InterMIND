# Golden Fish

Start efficiently 🌱 doing business in UAE! Expert company formation and support services with comprehensive multilingual documentation.

## Project Description

Golden Fish is a VitePress website providing UAE business formation services, integrated with Pipedrive CRM and AI-powered chat support. The project includes:

- 📄 VitePress documentation with support for 19+ languages
- 🇦🇪 Complete UAE company formation guidance
- 🔗 API endpoints for CRM integration and AI chat
- � Contact forms with lead submission to Pipedrive
- 📊 Google Analytics integration via GTM
- 🤖 AI-powered business consultation chat

## Project Structure

```
packages/golden-fish/
├── docs/                           # VitePress documentation
│   ├── .vitepress/
│   │   ├── config/                 # VitePress configuration
│   │   │   ├── i18n/              # Localization configurations
│   │   │   ├── index.ts           # Main config
│   │   │   ├── shared.ts          # Shared settings
│   │   │   ├── locales.ts         # Locale configurations
│   │   │   └── gtm.config.ts      # Google Tag Manager
│   │   └── theme/                 # Custom theme
│   │       ├── components/        # Vue components
│   │       ├── composables/       # Vue composables
│   │       └── styles/           # CSS styles
│   ├── en/                        # English content
│   ├── i18n/                      # Translations to other languages
│   └── public/                    # Static assets
├── api/                           # Vercel API endpoints
│   ├── AIChat/                    # AI chat functionality
│   ├── CRM/                       # CRM utilities
│   ├── config/                    # API configuration
│   ├── lib/                       # API utilities
│   ├── types/                     # TypeScript definitions
│   ├── createContactAndLead.js    # CRM integration
│   ├── submitForm.ts              # Contact form handler
│   ├── signUp.ts                  # User registration
│   ├── chat.js                    # AI chat endpoint
│   └── search-images.js           # Image search API
├── scripts/                       # Automation scripts
│   └── translateConfig.js         # Translation configuration
└── __tests__/                     # Tests
    ├── unit/                      # Unit tests
    └── README.md                  # Testing documentation
```

## Configuration Constants

The project uses configuration constants defined in `docs/.vitepress/config/index.ts`. These constants need to be properly configured for different environments:

### Site Configuration

```typescript
// Site URL (production domain)
const SITE_URL = "https://goldenfish.ae"

// Pages to exclude from indexing and sitemap
const NOINDEX_PAGES = ["company-registration/fees-timelines", "include/recommended-banks", "test", "chat"]

// Right-to-left languages
const RTL_LOCALES = ["ar", "fa", "ur"]

// UTM parameters to preserve
const UTM_PARAMS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "campaign_id"]
```

### Domain Configuration

```typescript
// Base URL configuration (auto-detected from Vercel environment)
const hostUrl = "https://goldenfish.ae"
const baseUrl = vercelUrl ? `https://${vercelUrl}` : "http://localhost:3000"
```

### OAuth Configuration

_Note: This project does not use OAuth authentication. Instead, it provides direct contact forms and AI chat consultation._

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
   const hostUrl = "https://your-domain.com"
   ```

2. **Configure CRM integration:**

   ```typescript
   // Update in api/config/corsConfig.ts
   export const ALLOWED_DOMAINS = ["localhost", "your-domain.com", "status.your-domain.com"]
   ```

3. **Set environment variables in Vercel:**
   - `GTM_ID`: Your Google Tag Manager ID
   - `VERCEL_ENV`: Set automatically by Vercel
   - `PIPEDRIVE_API_TOKEN`: Your Pipedrive API token

## Vercel Integration

The project is designed to run on Vercel, utilizing its serverless functions for API endpoints and static site generation for the documentation. The Vercel configuration is located in `packages/golden-fish/vercel.json`.

### Project Settings

![alt text](docs/public/vercel-project-settings.png)

### Environment Variables

![alt text](docs/public/vercel-env-variables.png)

Environment variables are automatically loaded by `vercel pull` command into `packages/golden-fish/.vercel/.env.development.local`:

```bash
# Pipedrive CRM
PIPEDRIVE_API_TOKEN=your_pipedrive_token

# Vercel environment
VERCEL_ENV=development|preview|production

# Google Tag Manager
GTM_ID=your_gtm_id

# AI Chat configuration (if applicable)
# Additional environment variables for AI services
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
   # Creates packages/golden-fish/.vercel/.env.development.local
   vercel pull
   ```

### Local Development

#### Mode 1: VitePress dev server

```bash
# Run frontend only (without API)
pnpm dev:FE

# Available at http://localhost:5173
```

#### Mode 2: Full Vercel development

```bash
# Run with API endpoints and full Vercel simulation
pnpm dev:BE

# Available at http://localhost:3000
# API endpoints work at /api/*
```

#### Mode 3: Combined development

```bash
# Run both frontend and backend simultaneously
pnpm dev

# Frontend: http://localhost:5173
# Backend: http://localhost:3000
```

Vercel dev provides:

- Full production environment simulation
- Working API endpoints
- Environment variables from `.vercel/.env.development.local`
- Automatic restart on changes

### Useful Commands

```bash
# Production build
pnpm build

# Translate content to all languages
pnpm translate

# Run tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run specific test suites
pnpm test:unit

# Format code
pnpm format

# Lint code
pnpm lint
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
- **Root Directory:** `packages/golden-fish`
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
- `POST /api/chat` - AI-powered business consultation
- `GET /api/search-images` - Image search functionality

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
    phone: "+1234567890",
  }),
})
```

### Testing

Comprehensive test suite for API endpoints and utilities. See [**tests**/README.md](__tests__/README.md) for detailed testing documentation including:

- Unit tests for API endpoints with full mocking
- UTM utility testing with browser API simulation
- Integration tests for end-to-end traffic flow validation
- Coverage reporting and CI/CD integration

### AI Chat Integration

`AI Chat` functionality provides business consultation:

- **UAE Business Expertise:** Specialized knowledge about UAE company formation
- **Real-time Assistance:** Instant responses to business queries
- **Multilingual Support:** Available in 19+ languages

### Google Analytics

Integration via Google Tag Manager:

- **Production GTM ID:** `GTM-YOUR_PRODUCTION_ID`
- **Test GTM ID:** `GTM-YOUR_TEST_ID`

## Localization

Supported languages:

- 🇺🇸 English (primary)
- 🇪🇸 Español
- 🇨🇳 中文
- �� বাংলা (Bengali)
- �� العربية (Arabic)
- 🇮🇳 हिन्दी (Hindi)
- 🇯🇵 日本語 (Japanese)
- 🇧🇷 Português (Portuguese)
- �� Русский (Russian)
- ��🇦 Українська (Ukrainian)
- �🇰 اردو (Urdu)
- 🇮🇳 മലയാളം (Malayalam)
- 🇮🇳 தமிழ் (Tamil)
- 🇮🇷 فارسی (Persian)
- 🇫🇷 Français (French)
- 🇹🇷 Türkçe (Turkish)
- 🇰🇷 한국어 (Korean)
- 🇮🇩 Indonesian
- 🇻🇳 Vietnamese
- �� తెలుగు (Telugu)

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
    bn: { code: "bn", name: "Bengali" },
    zh: { code: "zh", name: "Mandarin" },
    es: { code: "es", name: "Spanish" },
    hi: { code: "hi", name: "Hindi" },
    ja: { code: "ja", name: "Japanese" },
    pt: { code: "pt", name: "Brazilian Portuguese" },
    ru: { code: "ru", name: "Russian" },
    uk: { code: "uk", name: "Ukrainian" },
    ur: { code: "ur", name: "Urdu" },
    ml: { code: "ml", name: "Malayalam" },
    ta: { code: "ta", name: "Tamil" },
    fa: { code: "fa", name: "Persian" },
    fr: { code: "fr", name: "French" },
    tr: { code: "tr", name: "Turkish" },
    ko: { code: "ko", name: "Korean" },
    id: { code: "id", name: "Indonesian" },
    vi: { code: "vi", name: "Vietnamese" },
    te: { code: "te", name: "Telugu" },
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

- Technical terms (API, CRM, UAE, etc.)
- Company names (Golden Fish, Pipedrive)
- Link anchors and URLs
- Code and technical configuration

**Translated:**

- All user-facing content
- Meta tags for SEO
- Image alt text
- Tables and business guides
- UAE business terminology with cultural context

## Monitoring

- **Analytics:** Vercel Analytics + Speed Insights
- **Status page:** https://status.goldenfish.ae/ (if configured)
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

_Note: This project does not use OAuth authentication. If you experience authentication issues, check the contact forms and AI chat functionality instead._

## License

- **Code:** Apache License 2.0
- **Content:** Creative Commons Attribution-ShareAlike 4.0

Details in [LICENSE.md](LICENSE.md).
