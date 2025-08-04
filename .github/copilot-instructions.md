# GoldenFishProject - AI Agent Instructions

## Project Overview

This is a **pnpm monorepo** for InterMIND platform with 3 main packages:

- `mind-com`: Main website with OAuth, AI Chat, and Pinecone vector search
- `golden-fish`: UAE business formation services with multilingual support
- `draftium`: Content management system

**Important**: These are **independent packages** - changes to one package should NOT be automatically applied to others unless explicitly requested. Each package has its own domain, configuration, and business logic.

**Key Architecture**: VitePress websites + Vercel API functions + shared Vue components + Pinia state management + Pipedrive CRM integration + AI services (OpenAI GPT-4 + Anthropic Claude) + Pinecone vector database + multilingual translation system + GTM analytics

## Essential Development Patterns

### Core Development Principles

Follow these fundamental principles:

- **KISS (Keep It Simple, Stupid)**: Prefer simple, readable solutions over complex ones
- **DRY (Don't Repeat Yourself)**: Extract common logic into shared utilities, components, or functions
- **YAGNI (You Aren't Gonna Need It)**: Implement only what's currently needed, avoid over-engineering

### Monorepo Structure

- Use `pnpm` exclusively (never npm/yarn)
- Shared components: `shared/components/` (imported as `shared` workspace package)
- Run commands from package dirs: `cd packages/golden-fish && pnpm dev`
- Root-level build: `pnpm build` (builds all packages)

### VitePress + API Architecture

Each package follows the pattern:

```
packages/{name}/
├── docs/.vitepress/        # VitePress site config
│   ├── config/index.ts     # Main config with SITE_URL, NOINDEX_PAGES
│   └── theme/              # Custom Vue components
├── api/                    # Vercel serverless functions
│   ├── config/corsConfig.ts # Domain protection
│   ├── lib/                # Shared API utilities
│   └── types/              # TypeScript definitions
```

### API Security Pattern

**Critical**: All API endpoints use `withDomainCheck()` middleware:

```typescript
import { withDomainCheck } from "./lib/domainMiddleware.js"
export async function POST(request: Request) {
  return withDomainCheck(request, async (request) => {
    // Your API logic here
  })
}
```

### Multi-language System

- Source content: `docs/en/`
- Translations: `docs/i18n/{lang}/`
- Config: `scripts/translateConfig.ts` with 19+ languages
- Translation command: `pnpm translate` (uses OpenAI + Anthropic fallback)
- RTL support: `RTL_LOCALES = ["ar", "fa", "ur"]` in config

### AI Chat Integration

- **mind-com**: Pinecone vector database + semantic search + auto language detection
- **golden-fish**: Direct OpenAI integration for UAE business consulting
- Shared UI: `shared/components/AIChat/` + `shared/composables/AIChat/`
- State management: `shared/stores/chatsStore.ts` (Pinia)
- Vector DB setup: Index docs with `text-embedding-3-small` (1536 dimensions)
- AI models: Anthropic Claude + OpenAI GPT-4 with automatic fallback

### CRM Integration (Pipedrive)

- Lead creation: `api/lib/pipedriveLib.js`
- Form handling: `api/submitForm.ts`
- Channel tracking: `Channel.WEB_FORMS` enum
- GTM events: `DataLayerEvent` interface for analytics

## Development Workflow

### Starting Development

```bash
# Frontend only (VitePress dev server)
pnpm dev:FE  # Available at http://localhost:5173

# With API functions (full Vercel simulation)
pnpm dev     # Runs both FE & BE at http://localhost:3000
```

**Use `vercel dev` for full environment simulation with working API endpoints**

### Environment Setup

```bash
# Link to Vercel project and download env vars
vercel link --repo
vercel pull  # Creates .vercel/.env.development.local
```

### Required Environment Variables

```env
# Core APIs
OPENAI_API_KEY=your_openai_key
ANTHROPIC_API_KEY=your_anthropic_key
PIPEDRIVE_API_TOKEN=your_pipedrive_token

# Vector Database (mind-com only)
PINECONE_API_KEY=your_pinecone_key
PINECONE_INDEX_NAME=intermind-docs

# Analytics
GTM_ID=your_gtm_id
```

### Testing

- Test framework: Vitest with jsdom
- Coverage: `pnpm test` (generates HTML reports)
- Unit tests: `__tests__/unit/` with full API endpoint mocking
- Integration tests: End-to-end traffic flow validation
- Git hooks: pre-commit format, pre-push test+build

### OAuth Integration

- **mind-com only**: External OAuth service integration
- Environment-based URLs: `dev.inter.mind.com/auth` vs `inter.mind.com/auth`
- Client ID: `oauthClientId = "vca"` (safe to expose)
- `AuthButton` component handles complete OAuth flow

### Environment Configuration

Key constants in each package's `docs/.vitepress/config/index.ts`:

- `SITE_URL`: Production domain
- `NOINDEX_PAGES`: Pages excluded from sitemap
- `ALLOWED_DOMAINS`: API access control
- Environment detection: `process.env.VERCEL_ENV === "production"`

## Critical File Patterns

### Configuration Files

- `docs/.vitepress/config/index.ts`: Main VitePress config
- `api/config/corsConfig.ts`: Domain security
- `scripts/translateConfig.ts`: Translation settings
- `vercel.json`: API function routing

### Shared Resources

- `shared/index.ts`: Theme setup with Pinia + UTM tracking
- `shared/components/index.ts`: Component registry
- `shared/utils/utm.ts`: Analytics tracking utilities

### API Structure

- Domain protection is **mandatory** for all endpoints
- Use TypeScript interfaces from `api/types/`
- CRM integration follows `LeadData` + `DataLayerEvent` pattern
- Error handling includes GTM tracking for failed submissions

## Common Tasks

### Setting Up Vector Database (mind-com)

1. Create Pinecone index: `intermind-docs`, 1536 dimensions, cosine metric
2. Run `pnpm build` to generate documentation
3. Index documents: `pnpm index:docs`
4. Test AI chat with semantic search at `/api/chat`

### Adding New Language

1. Add to `scripts/translateConfig.ts` languages object
2. Run `pnpm translate` from package directory
3. Update `RTL_LOCALES` if right-to-left language

### Creating API Endpoint

1. Create in `api/{endpoint}.ts`
2. Import and use `withDomainCheck` wrapper
3. Add types to `api/types/`
4. Test with domain validation

### Adding Shared Component

1. Create in `shared/components/{Name}.vue`
2. Export from `shared/components/index.ts`
3. Component auto-registers in all packages via `shared/index.ts`

## Integration Points

- **Analytics**: GTM + Google Analytics via environment variables
- **CRM**: Pipedrive API with lead categorization and channel tracking
- **AI**: OpenAI GPT-4 + Anthropic Claude with automatic fallback
- **Search**: Pinecone vector database for semantic search (mind-com only)
- **Deployment**: Vercel with environment-specific configurations
