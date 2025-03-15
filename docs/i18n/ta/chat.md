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
  { id: "1", text: "Expo City Dubai", category: "சுற்றுலா தலங்கள்" },
  { id: "2", text: "Dubai Frame tickets", category: "சுற்றுலா தலங்கள்" },
  { id: "3", text: "Burj Khalifa tickets", category: "சுற்றுலா தலங்கள்" },
  { id: "4", text: "Museum of the Future", category: "சுற்றுலா தலங்கள்" },
  { id: "5", text: "Abu Dhabi Louvre", category: "சுற்றுலா தலங்கள்" },
  { id: "6", text: "Ferrari World Abu Dhabi", category: "சுற்றுலா தலங்கள்" },
  { id: "7", text: "Dubai Mall restaurants", category: "உணவு" },
  { id: "8", text: "Best Arabic food Dubai", category: "உணவு" },
  { id: "9", text: "Dubai Michelin star restaurants", category: "உணவு" },
  { id: "10", text: "Sharjah street food", category: "உணவு" },
  { id: "11", text: "Palm Jumeirah rental", category: "வீட்டு வசதி" },
  { id: "12", text: "Dubai Marina apartments", category: "வீட்டு வசதி" },
  { id: "13", text: "Abu Dhabi affordable housing", category: "வீட்டு வசதி" },
  { id: "14", text: "UAE rental laws", category: "வீட்டு வசதி" },
  { id: "15", text: "Dubai Metro map", category: "போக்குவரத்து" },
  { id: "16", text: "Abu Dhabi taxi rates", category: "போக்குவரத்து" },
  { id: "17", text: "UAE driving license", category: "போக்குவரத்து" },
  { id: "18", text: "Dubai RTA services", category: "போக்குவரத்து" },
  { id: "19", text: "Dubai Mall shopping", category: "கடைகள்" },
  { id: "20", text: "Global Village Dubai", category: "கடைகள்" },
  { id: "21", text: "Dubai Gold Souk", category: "கடைகள்" },
  { id: "22", text: "Mall of Emirates offers", category: "கடைகள்" },
  { id: "23", text: "UAE business setup", category: "வணிகம்" },
  { id: "24", text: "Dubai free zones", category: "வணிகம்" },
  { id: "25", text: "UAE company registration", category: "வணிகம்" },
  { id: "26", text: "UAE freelance visa", category: "வணிகம்" },
  { id: "27", text: "UAE visa requirements", category: "பயணம்" },
  { id: "28", text: "Dubai tourist attractions", category: "பயணம்" },
  { id: "29", text: "UAE visit visa application", category: "பயணம்" },
  { id: "30", text: "Abu Dhabi tourist places", category: "பயணம்" },
  { id: "31", text: "Desert safari Dubai", category: "பயணம்" },
  { id: "32", text: "Dubai jobs for expatriates", category: "வேலைகள்" },
  { id: "33", text: "UAE work permit process", category: "வேலைகள்" },
  { id: "34", text: "Remote jobs in UAE", category: "வேலைகள்" },
  { id: "35", text: "UAE salary guide", category: "வேலைகள்" },
  { id: "36", text: "UAE weather forecast", category: "நிகழ்வுகள்" },
  { id: "37", text: "Dubai upcoming events", category: "நிகழ்வுகள்" },
  { id: "38", text: "UAE national day celebrations", category: "நிகழ்வுகள்" },
  { id: "39", text: "Dubai shopping festival", category: "நிகழ்வுகள்" },
  { id: "40", text: "Emirates ID renewal", category: "சேவைகள்" },
  { id: "41", text: "UAE banking services", category: "சேவைகள்" },
  { id: "42", text: "DEWA bill payment", category: "சேவைகள்" },
  { id: "43", text: "Etisalat package upgrade", category: "சேவைகள்" },
  { id: "44", text: "Best schools in Dubai", category: "கல்வி" },
  { id: "45", text: "UAE university admission", category: "கல்வி" },
  { id: "46", text: "KHDA school ratings", category: "கல்வி" },
  { id: "47", text: "UAE health insurance", category: "சுகாதாரம்" },
  { id: "48", text: "Best hospitals in Dubai", category: "சுகாதாரம்" },
  { id: "49", text: "Medical check-up UAE", category: "சுகாதாரம்" },
  { id: "50", text: "DHA services", category: "சுகாதாரம்" }
]
</script>

<AIChat :prompts="chatPrompts" />