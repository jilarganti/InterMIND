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
  { id: "1", text: "Expo City Dubai", category: "attractions" },
  { id: "2", text: "Билеты в Dubai Frame", category: "attractions" },
  { id: "3", text: "Билеты в Burj Khalifa", category: "attractions" },
  { id: "4", text: "Museum of the Future", category: "attractions" },
  { id: "5", text: "Abu Dhabi Louvre", category: "attractions" },
  { id: "6", text: "Ferrari World Abu Dhabi", category: "attractions" },
  { id: "7", text: "Рестораны Dubai Mall", category: "food" },
  { id: "8", text: "Лучшая арабская кухня в Дубае", category: "food" },
  { id: "9", text: "Рестораны со звездой Мишлен в Дубае", category: "food" },
  { id: "10", text: "Уличная еда в Шардже", category: "food" },
  { id: "11", text: "Аренда на Palm Jumeirah", category: "housing" },
  { id: "12", text: "Апартаменты в Dubai Marina", category: "housing" },
  { id: "13", text: "Доступное жилье в Абу-Даби", category: "housing" },
  { id: "14", text: "Законы об аренде в ОАЭ", category: "housing" },
  { id: "15", text: "Карта метро Дубая", category: "transportation" },
  { id: "16", text: "Тарифы такси в Абу-Даби", category: "transportation" },
  { id: "17", text: "Водительские права в ОАЭ", category: "transportation" },
  { id: "18", text: "Сервисы Dubai RTA", category: "transportation" },
  { id: "19", text: "Шоппинг в Dubai Mall", category: "shopping" },
  { id: "20", text: "Global Village Dubai", category: "shopping" },
  { id: "21", text: "Золотой рынок Дубая", category: "shopping" },
  { id: "22", text: "Акции в Mall of Emirates", category: "shopping" },
  { id: "23", text: "Открытие бизнеса в ОАЭ", category: "business" },
  { id: "24", text: "Свободные зоны Дубая", category: "business" },
  { id: "25", text: "Регистрация компании в ОАЭ", category: "business" },
  { id: "26", text: "Фриланс виза в ОАЭ", category: "business" },
  { id: "27", text: "Визовые требования ОАЭ", category: "travel" },
  { id: "28", text: "Туристические достопримечательности Дубая", category: "travel" },
  { id: "29", text: "Оформление туристической визы в ОАЭ", category: "travel" },
  { id: "30", text: "Достопримечательности Абу-Даби", category: "travel" },
  { id: "31", text: "Сафари в пустыне Дубая", category: "travel" },
  { id: "32", text: "Работа для экспатов в Дубае", category: "jobs" },
  { id: "33", text: "Процесс получения разрешения на работу в ОАЭ", category: "jobs" },
  { id: "34", text: "Удаленная работа в ОАЭ", category: "jobs" },
  { id: "35", text: "Обзор зарплат в ОАЭ", category: "jobs" },
  { id: "36", text: "Прогноз погоды в ОАЭ", category: "events" },
  { id: "37", text: "Предстоящие мероприятия в Дубае", category: "events" },
  { id: "38", text: "Празднование национального дня ОАЭ", category: "events" },
  { id: "39", text: "Торговый фестиваль в Дубае", category: "events" },
  { id: "40", text: "Продление Emirates ID", category: "services" },
  { id: "41", text: "Банковские услуги в ОАЭ", category: "services" },
  { id: "42", text: "Оплата счетов DEWA", category: "services" },
  { id: "43", text: "Обновление пакета Etisalat", category: "services" },
  { id: "44", text: "Лучшие школы в Дубае", category: "education" },
  { id: "45", text: "Поступление в университеты ОАЭ", category: "education" },
  { id: "46", text: "Рейтинги школ KHDA", category: "education" },
  { id: "47", text: "Медицинская страховка в ОАЭ", category: "healthcare" },
  { id: "48", text: "Лучшие больницы в Дубае", category: "healthcare" },
  { id: "49", text: "Медицинский осмотр в ОАЭ", category: "healthcare" },
  { id: "50", text: "Сервисы DHA", category: "healthcare" }
]
</script>

<AIChat :prompts="chatPrompts" />