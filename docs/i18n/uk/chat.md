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
  { id: "1", text: "Expo City Dubai", category: "пам'ятки" },
  { id: "2", text: "Dubai Frame квитки", category: "пам'ятки" },
  { id: "3", text: "Burj Khalifa квитки", category: "пам'ятки" },
  { id: "4", text: "Museum of the Future", category: "пам'ятки" },
  { id: "5", text: "Abu Dhabi Louvre", category: "пам'ятки" },
  { id: "6", text: "Ferrari World Abu Dhabi", category: "пам'ятки" },
  { id: "7", text: "Ресторани Dubai Mall", category: "їжа" },
  { id: "8", text: "Найкраща арабська кухня в Дубаї", category: "їжа" },
  { id: "9", text: "Ресторани Дубая зі зіркою Мішлен", category: "їжа" },
  { id: "10", text: "Вулична їжа в Шарджі", category: "їжа" },
  { id: "11", text: "Оренда на Palm Jumeirah", category: "житло" },
  { id: "12", text: "Апартаменти в Dubai Marina", category: "житло" },
  { id: "13", text: "Доступне житло в Абу-Дабі", category: "житло" },
  { id: "14", text: "Закони про оренду в ОАЕ", category: "житло" },
  { id: "15", text: "Карта метро Дубая", category: "транспорт" },
  { id: "16", text: "Тарифи таксі в Абу-Дабі", category: "транспорт" },
  { id: "17", text: "Водійські права в ОАЕ", category: "транспорт" },
  { id: "18", text: "Послуги RTA Dubai", category: "транспорт" },
  { id: "19", text: "Шопінг в Dubai Mall", category: "шопінг" },
  { id: "20", text: "Global Village Dubai", category: "шопінг" },
  { id: "21", text: "Dubai Gold Souk", category: "шопінг" },
  { id: "22", text: "Акції в Mall of Emirates", category: "шопінг" },
  { id: "23", text: "Відкриття бізнесу в ОАЕ", category: "бізнес" },
  { id: "24", text: "Вільні економічні зони Дубая", category: "бізнес" },
  { id: "25", text: "Реєстрація компанії в ОАЕ", category: "бізнес" },
  { id: "26", text: "Фріланс віза в ОАЕ", category: "бізнес" },
  { id: "27", text: "Візові вимоги ОАЕ", category: "подорожі" },
  { id: "28", text: "Туристичні пам'ятки Дубая", category: "подорожі" },
  { id: "29", text: "Подача на туристичну візу ОАЕ", category: "подорожі" },
  { id: "30", text: "Туристичні місця в Абу-Дабі", category: "подорожі" },
  { id: "31", text: "Сафарі в пустелі Дубая", category: "подорожі" },
  { id: "32", text: "Робота для експатів в Дубаї", category: "робота" },
  { id: "33", text: "Процес отримання дозволу на роботу в ОАЕ", category: "робота" },
  { id: "34", text: "Віддалена робота в ОАЕ", category: "робота" },
  { id: "35", text: "Довідник зарплат в ОАЕ", category: "робота" },
  { id: "36", text: "Прогноз погоди в ОАЕ", category: "події" },
  { id: "37", text: "Майбутні події в Дубаї", category: "події" },
  { id: "38", text: "Святкування національного дня ОАЕ", category: "події" },
  { id: "39", text: "Торговий фестиваль Дубая", category: "події" },
  { id: "40", text: "Продовження Emirates ID", category: "послуги" },
  { id: "41", text: "Банківські послуги в ОАЕ", category: "послуги" },
  { id: "42", text: "Оплата рахунків DEWA", category: "послуги" },
  { id: "43", text: "Оновлення пакету Etisalat", category: "послуги" },
  { id: "44", text: "Найкращі школи в Дубаї", category: "освіта" },
  { id: "45", text: "Вступ до університетів ОАЕ", category: "освіта" },
  { id: "46", text: "Рейтинги шкіл KHDA", category: "освіта" },
  { id: "47", text: "Медичне страхування в ОАЕ", category: "охорона здоров'я" },
  { id: "48", text: "Найкращі лікарні в Дубаї", category: "охорона здоров'я" },
  { id: "49", text: "Медичний огляд в ОАЕ", category: "охорона здоров'я" },
  { id: "50", text: "Послуги DHA", category: "охорона здоров'я" }
]
</script>

<AIChat :prompts="chatPrompts" />