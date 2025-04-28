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
    { id: "49", text: "популярні сторінки цього сайту, таблиця", category: "general" },
    { id: "49", text: "цей сайт, топ-10 поширених запитань", category: "general" },
    { id: "49", text: "посилання на сайти free zone, таблиця", category: "general" },
    { id: "49", text: "таблиця посилань на сайти free zone з цінами", category: "general" },
    
    { id: "1", text: "Реєстрація компанії в ОАЕ", category: "business" },
    { id: "7", text: "Вимоги до торгової ліцензії в ОАЕ", category: "business" },
    { id: "7", text: "порівняння типів компаній в ОАЕ, таблиця та аналітика", category: "business" },
    { id: "7", text: "експертне порівняння вартості переміщення компанії з Британії до різних free zone для фінансового бізнесу з двома засновниками. 8 віз, 3 члени сім'ї + собака. Оренда в бізнес-центрі. Британець, не резидент ОАЕ", category: "business" },
    { id: "48", text: "10 найкращих лікарень в ОАЕ, переваги та недоліки", category: "healthcare" },

    { id: "15", text: "Довіреність в ОАЕ", category: "legal" },

    // Бізнес-послуги (перший блок)
    { id: "2", text: "Створення Mainland компанії", category: "business" },
    { id: "3", text: "Реєстрація компанії у Free zone", category: "business" },
    { id: "4", text: "Створення офшорної компанії", category: "business" },
    { id: "5", text: "Віза фрілансера в ОАЕ", category: "business" },
    { id: "6", text: "Бізнес-ліцензія в Дубаї", category: "business" },
    { id: "23", text: "Створення бізнесу в ОАЕ", category: "business" },
    { id: "24", text: "Free zone в Дубаї", category: "business" },
    { id: "25", text: "Реєстрація компанії в ОАЕ", category: "business" },
    { id: "26", text: "Віза фрілансера в ОАЕ", category: "business" },
    
    // Візи та імміграція
    { id: "8", text: "Подання на Golden Visa в ОАЕ", category: "visa" },
    { id: "9", text: "Робоча віза в ОАЕ", category: "visa" },
    { id: "10", text: "Спонсорство сімейної візи в ОАЕ", category: "visa" },
    { id: "11", text: "Вимоги до медичного тесту для візи", category: "visa" },
    { id: "12", text: "Процес отримання резидентської візи в ОАЕ", category: "visa" },
    { id: "27", text: "Візові вимоги ОАЕ", category: "visa" },
    
    // Юридичні та документи
    { id: "13", text: "Подання на Emirates ID", category: "legal" },
    { id: "14", text: "Легалізація документів в ОАЕ", category: "legal" },
    { id: "16", text: "Перевірка бізнес-контрактів в ОАЕ", category: "legal" },
    { id: "40", text: "Продовження Emirates ID", category: "legal" },
    
    // Фінансові послуги
    { id: "17", text: "Корпоративний банківський рахунок в ОАЕ", category: "finance" },
    { id: "18", text: "Реєстрація податків в ОАЕ (ПДВ)", category: "finance" },
    { id: "19", text: "Бухгалтерські послуги в ОАЕ", category: "finance" },
    { id: "20", text: "Правила економічної присутності в ОАЕ", category: "finance" },
    { id: "41", text: "Банківські послуги в ОАЕ", category: "finance" },
    
    // Нерухомість та послуги
    { id: "21", text: "Інвестиції в нерухомість ОАЕ", category: "property" },
    { id: "22", text: "Оренда офісів в Дубаї", category: "property" },

    // Охорона здоров'я
    { id: "47", text: "Медичне страхування в ОАЕ", category: "healthcare" },
    { id: "49", text: "Медичний огляд в ОАЕ", category: "healthcare" },
    
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