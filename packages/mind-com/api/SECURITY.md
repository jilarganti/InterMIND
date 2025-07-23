# API Security Configuration

## Domain Access Control

All API endpoints are protected by domain verification to prevent unauthorized access.

### Allowed Domains

The list of allowed domains is located in the `config/corsConfig.ts` file:

```typescript
export const ALLOWED_DOMAINS = ["localhost", "mind.com", "inter.mind.com", "status.mind.com", "mind-com-intermind.vercel.app"]
```

### How it works

1. **Origin/referer check**: The `isAllowedDomain()` function checks the `origin` and `referer` headers of incoming requests
2. **Automatic protection**: All API endpoints automatically verify the domain before processing the request
3. **Fallback logic**: If `origin` is not available, `referer` is checked
4. **Local development**: `localhost` is allowed for local development

### Protected endpoints

- `POST /api/signUp` - User registration
- `POST /api/submitForm` - Form submission
- `GET /api/demo/get` - Demo endpoint
- `POST /api/demo/handler` - Demo handler

### Access error

When attempting to access from a non-allowed domain, the following is returned:

```json
{
  "success": false,
  "message": "Access denied: Domain not allowed"
}
```

Status code: `403 Forbidden`

### Adding new domains

To add a new allowed domain:

1. Open `config/corsConfig.ts`
2. Add the domain to the `ALLOWED_DOMAINS` array
3. Save the file

**Important**: Specify only the hostname without protocol (e.g., `example.com`, not `https://example.com`)

### Features

- **Direct requests**: If there are no `origin` and `referer` headers, the request is allowed (for server-side request cases)
- **Logging**: Unauthorized access attempts are logged with warnings showing the domain and header type
- **Case sensitivity**: Domain verification is case-sensitive
