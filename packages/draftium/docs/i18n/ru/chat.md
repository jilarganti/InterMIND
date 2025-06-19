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
    { id: "49", text: "популярные страницы этого сайта, таблица", category: "general" },
    { id: "49", text: "этот сайт, топ-10 часто задаваемых вопросов", category: "general" },
    { id: "49", text: "ссылки на сайты free zone, таблица", category: "general" },
    { id: "49", text: "таблица ссылок на сайты free zone с ценами", category: "general" },
    
    { id: "1", text: "Регистрация компании в ОАЭ", category: "business" },
    { id: "7", text: "Требования к торговой лицензии в ОАЭ", category: "business" },
    { id: "7", text: "сравнение типов компаний в ОАЭ, таблица и аналитика", category: "business" },
    { id: "7", text: "экспертное сравнение стоимости релокации компании из Британии в различные free zone для финансового бизнеса с двумя учредителями. 8 виз, 3 члена семьи + собака. Аренда в бизнес-центре. Британец, не резидент ОАЭ", category: "business" },
    { id: "48", text: "10 лучших больниц в ОАЭ, плюсы и минусы", category: "healthcare" },

    { id: "15", text: "Доверенность в ОАЭ", category: "legal" },

    // Бизнес-услуги (первый блок)
    { id: "2", text: "Создание компании в Mainland", category: "business" },
    { id: "3", text: "Регистрация компании в Free Zone", category: "business" },
    { id: "4", text: "Создание оффшорной компании", category: "business" },
    { id: "5", text: "Фриланс виза в ОАЭ", category: "business" },
    { id: "6", text: "Бизнес-лицензия в Дубае", category: "business" },
    { id: "23", text: "Создание бизнеса в ОАЭ", category: "business" },
    { id: "24", text: "Free Zone в Дубае", category: "business" },
    { id: "25", text: "Регистрация компании в ОАЭ", category: "business" },
    { id: "26", text: "Фриланс виза в ОАЭ", category: "business" },
    
    // Визы и иммиграция
    { id: "8", text: "Оформление Golden Visa в ОАЭ", category: "visa" },
    { id: "9", text: "Рабочая виза в ОАЭ", category: "visa" },
    { id: "10", text: "Спонсорство семейной визы в ОАЭ", category: "visa" },
    { id: "11", text: "Требования к медицинскому осмотру для визы", category: "visa" },
    { id: "12", text: "Процесс получения резидентской визы в ОАЭ", category: "visa" },
    { id: "27", text: "Визовые требования ОАЭ", category: "visa" },
    
    // Юридические и документы
    { id: "13", text: "Оформление Emirates ID", category: "legal" },
    { id: "14", text: "Легализация документов в ОАЭ", category: "legal" },
    { id: "16", text: "Проверка бизнес-контрактов в ОАЭ", category: "legal" },
    { id: "40", text: "Продление Emirates ID", category: "legal" },
    
    // Финансовые услуги
    { id: "17", text: "Корпоративный банковский счет в ОАЭ", category: "finance" },
    { id: "18", text: "Регистрация НДС в ОАЭ", category: "finance" },
    { id: "19", text: "Бухгалтерские услуги в ОАЭ", category: "finance" },
    { id: "20", text: "Economic Substance Regulations в ОАЭ", category: "finance" },
    { id: "41", text: "Банковские услуги в ОАЭ", category: "finance" },
    
    // Недвижимость и услуги
    { id: "21", text: "Инвестиции в недвижимость ОАЭ", category: "property" },
    { id: "22", text: "Аренда офиса в Дубае", category: "property" },

    // Здравоохранение
    { id: "47", text: "Медицинская страховка в ОАЭ", category: "healthcare" },
    { id: "49", text: "Медицинский осмотр в ОАЭ", category: "healthcare" },
    
    // Туризм и развлечения (в конце)
    { id: "28", text: "Туристические достопримечательности Дубая", category: "travel" },
    { id: "29", text: "Expo City Dubai", category: "attractions" },
    { id: "30", text: "Билеты в Dubai Frame", category: "attractions" },
    { id: "31", text: "Билеты в Burj Khalifa", category: "attractions" },
    { id: "32", text: "Museum of the Future", category: "attractions" },
    { id: "33", text: "Abu Dhabi Louvre", category: "attractions" },
    { id: "34", text: "Ferrari World Abu Dhabi", category: "attractions" },
    { id: "35", text: "Шопинг в Dubai Mall", category: "shopping" },
]
</script>

<AIChat :prompts="chatPrompts" />
