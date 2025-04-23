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
    { id: "49", text: "popular pages of this site, table", category: "general" },
  { id: "49", text: "this site, top 20 FAQ", category: "general" },
  { id: "49", text: "free zone site links, table", category: "general" },
  { id: "49", text: "table of links to free zone sites with price", category: "general" },
  
  { id: "1", text: "Company registration in UAE", category: "business" },
  { id: "7", text: "UAE trade license requirements", category: "business" },
  { id: "48", text: "10 Best Hospitals in UAE, Pros and Cons", category: "healthcare" },

  // Бизнес-услуги (первый блок)
  { id: "2", text: "Mainland company setup", category: "business" },
  { id: "3", text: "Free zone company registration", category: "business" },
  { id: "4", text: "Offshore company formation", category: "business" },
  { id: "5", text: "UAE freelance visa", category: "business" },
  { id: "6", text: "Dubai business license", category: "business" },
  { id: "23", text: "UAE business setup", category: "business" },
  { id: "24", text: "Dubai free zones", category: "business" },
  { id: "25", text: "UAE company registration", category: "business" },
  { id: "26", text: "UAE freelance visa", category: "business" },
  
  // Визы и иммиграция
  { id: "8", text: "UAE Golden Visa application", category: "visa" },
  { id: "9", text: "UAE employment visa", category: "visa" },
  { id: "10", text: "Family visa sponsorship in UAE", category: "visa" },
  { id: "11", text: "Visa medical test requirements", category: "visa" },
  { id: "12", text: "UAE residency visa process", category: "visa" },
  { id: "27", text: "UAE visa requirements", category: "visa" },
  
  // Юридические и документы
  { id: "13", text: "Emirates ID application", category: "legal" },
  { id: "14", text: "UAE document attestation", category: "legal" },
  { id: "15", text: "Power of Attorney in UAE", category: "legal" },
  { id: "16", text: "UAE business contract review", category: "legal" },
  { id: "40", text: "Emirates ID renewal", category: "legal" },
  
  // Финансовые услуги
  { id: "17", text: "UAE corporate bank account", category: "finance" },
  { id: "18", text: "UAE tax registration (VAT)", category: "finance" },
  { id: "19", text: "Accounting services in UAE", category: "finance" },
  { id: "20", text: "UAE Economic Substance Regulations", category: "finance" },
  { id: "41", text: "UAE banking services", category: "finance" },
  
  // Недвижимость и услуги
  { id: "21", text: "UAE property investment", category: "property" },
  { id: "22", text: "Dubai office space rental", category: "property" },

  // Здравоохранение
  { id: "47", text: "UAE health insurance", category: "healthcare" },
  { id: "49", text: "Medical check-up UAE", category: "healthcare" },
  
  // Туризм и развлечения (в конце)
  { id: "28", text: "Dubai tourist attractions", category: "travel" },
  { id: "29", text: "Expo City Dubai", category: "attractions" },
  { id: "30", text: "Dubai Frame tickets", category: "attractions" },
  { id: "31", text: "Burj Khalifa tickets", category: "attractions" },
  { id: "32", text: "Museum of the Future", category: "attractions" },
  { id: "33", text: "Abu Dhabi Louvre", category: "attractions" },
  { id: "34", text: "Ferrari World Abu Dhabi", category: "attractions" },
  { id: "35", text: "Dubai Mall shopping", category: "shopping" },
]
</script>

<AIChat :prompts="chatPrompts" />
