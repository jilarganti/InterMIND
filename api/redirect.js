// @ts-check
/**
 * Простой тест логирования
 */
export async function GET() {
  console.log("🟢 LOG-TEST: Это тестовый лог")
  console.warn("🟠 LOG-TEST: Это предупреждение")
  console.error("🔴 LOG-TEST: Это ошибка")

  return Response.json({
    message: "Тест логирования",
    timestamp: new Date().toISOString(),
  })
}
