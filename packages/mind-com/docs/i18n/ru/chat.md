---
footer: false
# sidebar: false
# aside: false
next: false
lastUpdated: false
navbar: false
# layout: doc
---

<script setup>
  const chatPrompts = [
    // Поисковые запросы, основанные на проблемах - Языковые барьеры в бизнесе
    { id: "1", text: "Как общаться с иностранными клиентами без знания их языка", category: "communication" },
    { id: "2", text: "Синхронный перевод для бизнес-встреч", category: "translation" },
    { id: "3", text: "Программное обеспечение для перевода видеозвонков", category: "interpretation" },
    { id: "4", text: "Потерянные сделки из-за языкового барьера", category: "business-problems" },
    
    // Конкретные бизнес-сценарии
    { id: "5", text: "Как проводить презентации для международных клиентов", category: "presentations" },
    { id: "6", text: "Проведение демонстрации продукта на разных языках", category: "demos" },
    { id: "7", text: "Лучшие практики международных продаж", category: "sales" },
    { id: "8", text: "Общение с поставщиками из разных стран", category: "supply-chain" },
    
    // Поиск решений
    { id: "9", text: "Альтернатива дорогим переводчикам", category: "cost-saving" },
    { id: "10", text: "Сравнение ИИ-перевода и перевода человеком", category: "comparison" },
    { id: "11", text: "Мгновенный перевод для бизнеса", category: "instant-translation" },
    { id: "12", text: "Инструменты для многоязычного командного взаимодействия", category: "collaboration" },
    
    // Поиск технических требований
    { id: "13", text: "Точность перевода для технических обсуждений", category: "accuracy" },
    { id: "14", text: "Защищенное программное обеспечение для корпоративного перевода", category: "security" },
    { id: "15", text: "Интеграция с существующими системами видеоконференций", category: "integration" },
    { id: "16", text: "Сервис перевода, соответствующий GDPR", category: "compliance" },
    
    // ROI и бизнес-ценность
    { id: "17", text: "Стоимость ошибок коммуникации в международном бизнесе", category: "roi" },
    { id: "18", text: "Расчет стоимости услуг переводчика против ИИ-решения", category: "cost-calculator" },
    { id: "19", text: "Повышение конверсии международных продаж", category: "conversion" },
    { id: "20", text: "Глобальное расширение без языкового обучения", category: "expansion" },
    
    // Поиск по сравнению с конкурентами
    { id: "21", text: "Ограничения перевода в Google Meet", category: "google-meet" },
    { id: "22", text: "Проблемы с переводом субтитров в Zoom", category: "zoom" },
    { id: "23", text: "Проблемы качества перевода в Microsoft Teams", category: "teams" },
    
    // Отраслевые поиски
    { id: "24", text: "Коммуникация с зарубежными поставщиками в производстве", category: "manufacturing" },
    { id: "25", text: "Языковое решение для экспортного бизнеса", category: "export" },
]
</script>

<AIChat :prompts="chatPrompts" />