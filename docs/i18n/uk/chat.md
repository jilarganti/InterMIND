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
  // Бізнес-послуги (перший блок)
  { id: "1", text: "Реєстрація компанії в UAE", category: "business" },
  { id: "2", text: "Створення Mainland компанії", category: "business" },
  { id: "3", text: "Реєстрація компанії у Free Zone", category: "business" },
  { id: "4", text: "Створення Offshore компанії", category: "business" },
  { id: "5", text: "Фріланс віза в UAE", category: "business" },
  { id: "6", text: "Бізнес-ліцензія в Дубаї", category: "business" },
  { id: "7", text: "Вимоги до торгової ліцензії в UAE", category: "business" },
  { id: "23", text: "Створення бізнесу в UAE", category: "business" },
  { id: "24", text: "Free Zone в Дубаї", category: "business" },
  { id: "25", text: "Реєстрація компанії в UAE", category: "business" },
  { id: "26", text: "Фріланс віза в UAE", category: "business" },
  
  // Візи та імміграція
  { id: "8", text: "Подання на Golden Visa в UAE", category: "visa" },
  { id: "9", text: "Робоча віза в UAE", category: "visa" },
  { id: "10", text: "Спонсорство сімейної візи в UAE", category: "visa" },
  { id: "11", text: "Вимоги до медичного тесту для візи", category: "visa" },
  { id: "12", text: "Процес отримання резидентської візи в UAE", category: "visa" },
  { id: "27", text: "Візові вимоги UAE", category: "visa" },
  
  // Юридичні та документи
  { id: "13", text: "Подання на Emirates ID", category: "legal" },
  { id: "14", text: "Засвідчення документів в UAE", category: "legal" },
  { id: "15", text: "Довіреність в UAE", category: "legal" },
  { id: "16", text: "Перевірка бізнес-контрактів в UAE", category: "legal" },
  { id: "40", text: "Продовження Emirates ID", category: "legal" },
  
  // Фінансові послуги
  { id: "17", text: "Корпоративний банківський рахунок в UAE", category: "finance" },
  { id: "18", text: "Податкова реєстрація в UAE (VAT)", category: "finance" },
  { id: "19", text: "Бухгалтерські послуги в UAE", category: "finance" },
  { id: "20", text: "Правила економічної присутності в UAE", category: "finance" },
  { id: "41", text: "Банківські послуги в UAE", category: "finance" },
  
  // Нерухомість та послуги
  { id: "21", text: "Інвестиції в нерухомість UAE", category: "property" },
  { id: "22", text: "Оренда офісів в Дубаї", category: "property" },

  // Охорона здоров'я
  { id: "47", text: "Медичне страхування в UAE", category: "healthcare" },
  { id: "48", text: "Найкращі лікарні в Дубаї", category: "healthcare" },
  { id: "49", text: "Медичний огляд в UAE", category: "healthcare" },
  
  // Туризм та розваги (в кінці)
  { id: "28", text: "Туристичні пам'ятки Дубая", category: "travel" },
  { id: "29", text: "Expo City Dubai", category: "attractions" },
  { id: "30", text: "Квитки в Dubai Frame", category: "attractions" },
  { id: "31", text: "Квитки в Burj Khalifa", category: "attractions" },
  { id: "32", text: "Museum of the Future", category: "attractions" },
  { id: "33", text: "Abu Dhabi Louvre", category: "attractions" },
  { id: "34", text: "Ferrari World Abu Dhabi", category: "attractions" },
  { id: "35", text: "Шопінг в Dubai Mall", category: "shopping" },
]
</script>

<AIChat :prompts="chatPrompts" />

<userStyle>Normal</userStyle>