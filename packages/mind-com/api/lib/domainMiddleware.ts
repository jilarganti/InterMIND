/**
 * Middleware для проверки доменов API
 */

import { isAllowedDomain } from "../config/corsConfig.js"

/**
 * Создает Response с ошибкой доступа
 */
export function createAccessDeniedResponse(): Response {
  return new Response(
    JSON.stringify({
      success: false,
      message: "Access denied: Domain not allowed",
      code: "DOMAIN_NOT_ALLOWED",
    }),
    {
      status: 403,
      headers: {
        "Content-Type": "application/json",
      },
    },
  )
}

/**
 * Middleware функция для проверки доменов
 */
export async function withDomainCheck<T>(request: Request, handler: (request: Request) => Promise<T>): Promise<T | Response> {
  if (!isAllowedDomain(request)) {
    return createAccessDeniedResponse()
  }

  return handler(request)
}
