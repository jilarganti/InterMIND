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
  { id: "2", text: "Dubai Frame tickets", category: "attractions" },
  { id: "3", text: "Burj Khalifa tickets", category: "attractions" },
  { id: "4", text: "Museum of the Future", category: "attractions" },
  { id: "5", text: "Abu Dhabi Louvre", category: "attractions" },
  { id: "6", text: "Ferrari World Abu Dhabi", category: "attractions" },
  { id: "7", text: "Dubai Mall restaurants", category: "food" },
  { id: "8", text: "Best Arabic food Dubai", category: "food" },
  { id: "9", text: "Dubai Michelin star restaurants", category: "food" },
  { id: "10", text: "Sharjah street food", category: "food" },
  { id: "11", text: "Palm Jumeirah rental", category: "housing" },
  { id: "12", text: "Dubai Marina apartments", category: "housing" },
  { id: "13", text: "Abu Dhabi affordable housing", category: "housing" },
  { id: "14", text: "UAE rental laws", category: "housing" },
  { id: "15", text: "Dubai Metro map", category: "transportation" },
  { id: "16", text: "Abu Dhabi taxi rates", category: "transportation" },
  { id: "17", text: "UAE driving license", category: "transportation" },
  { id: "18", text: "Dubai RTA services", category: "transportation" },
  { id: "19", text: "Dubai Mall shopping", category: "shopping" },
  { id: "20", text: "Global Village Dubai", category: "shopping" },
  { id: "21", text: "Dubai Gold Souk", category: "shopping" },
  { id: "22", text: "Mall of Emirates offers", category: "shopping" },
  { id: "23", text: "UAE business setup", category: "business" },
  { id: "24", text: "Dubai free zones", category: "business" },
  { id: "25", text: "UAE company registration", category: "business" },
  { id: "26", text: "UAE freelance visa", category: "business" },
  { id: "27", text: "UAE visa requirements", category: "travel" },
  { id: "28", text: "Dubai tourist attractions", category: "travel" },
  { id: "29", text: "UAE visit visa application", category: "travel" },
  { id: "30", text: "Abu Dhabi tourist places", category: "travel" },
  { id: "31", text: "Desert safari Dubai", category: "travel" },
  { id: "32", text: "Dubai jobs for expatriates", category: "jobs" },
  { id: "33", text: "UAE work permit process", category: "jobs" },
  { id: "34", text: "Remote jobs in UAE", category: "jobs" },
  { id: "35", text: "UAE salary guide", category: "jobs" },
  { id: "36", text: "UAE weather forecast", category: "events" },
  { id: "37", text: "Dubai upcoming events", category: "events" },
  { id: "38", text: "UAE national day celebrations", category: "events" },
  { id: "39", text: "Dubai shopping festival", category: "events" },
  { id: "40", text: "Emirates ID renewal", category: "services" },
  { id: "41", text: "UAE banking services", category: "services" },
  { id: "42", text: "DEWA bill payment", category: "services" },
  { id: "43", text: "Etisalat package upgrade", category: "services" },
  { id: "44", text: "Best schools in Dubai", category: "education" },
  { id: "45", text: "UAE university admission", category: "education" },
  { id: "46", text: "KHDA school ratings", category: "education" },
  { id: "47", text: "UAE health insurance", category: "healthcare" },
  { id: "48", text: "Best hospitals in Dubai", category: "healthcare" },
  { id: "49", text: "Medical check-up UAE", category: "healthcare" },
  { id: "50", text: "DHA services", category: "healthcare" }
]
</script>

<AIChat :prompts="chatPrompts" />
