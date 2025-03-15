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
  { id: "1", text: "Expo City Dubai", category: "आकर्षण" },
  { id: "2", text: "Dubai Frame tickets", category: "आकर्षण" },
  { id: "3", text: "Burj Khalifa tickets", category: "आकर्षण" },
  { id: "4", text: "Museum of the Future", category: "आकर्षण" },
  { id: "5", text: "Abu Dhabi Louvre", category: "आकर्षण" },
  { id: "6", text: "Ferrari World Abu Dhabi", category: "आकर्षण" },
  { id: "7", text: "Dubai Mall restaurants", category: "भोजन" },
  { id: "8", text: "Best Arabic food Dubai", category: "भोजन" },
  { id: "9", text: "Dubai Michelin star restaurants", category: "भोजन" },
  { id: "10", text: "Sharjah street food", category: "भोजन" },
  { id: "11", text: "Palm Jumeirah rental", category: "आवास" },
  { id: "12", text: "Dubai Marina apartments", category: "आवास" },
  { id: "13", text: "Abu Dhabi affordable housing", category: "आवास" },
  { id: "14", text: "UAE rental laws", category: "आवास" },
  { id: "15", text: "Dubai Metro map", category: "परिवहन" },
  { id: "16", text: "Abu Dhabi taxi rates", category: "परिवहन" },
  { id: "17", text: "UAE driving license", category: "परिवहन" },
  { id: "18", text: "Dubai RTA services", category: "परिवहन" },
  { id: "19", text: "Dubai Mall shopping", category: "खरीदारी" },
  { id: "20", text: "Global Village Dubai", category: "खरीदारी" },
  { id: "21", text: "Dubai Gold Souk", category: "खरीदारी" },
  { id: "22", text: "Mall of Emirates offers", category: "खरीदारी" },
  { id: "23", text: "UAE business setup", category: "व्यवसाय" },
  { id: "24", text: "Dubai free zones", category: "व्यवसाय" },
  { id: "25", text: "UAE company registration", category: "व्यवसाय" },
  { id: "26", text: "UAE freelance visa", category: "व्यवसाय" },
  { id: "27", text: "UAE visa requirements", category: "यात्रा" },
  { id: "28", text: "Dubai tourist attractions", category: "यात्रा" },
  { id: "29", text: "UAE visit visa application", category: "यात्रा" },
  { id: "30", text: "Abu Dhabi tourist places", category: "यात्रा" },
  { id: "31", text: "Desert safari Dubai", category: "यात्रा" },
  { id: "32", text: "Dubai jobs for expatriates", category: "नौकरियां" },
  { id: "33", text: "UAE work permit process", category: "नौकरियां" },
  { id: "34", text: "Remote jobs in UAE", category: "नौकरियां" },
  { id: "35", text: "UAE salary guide", category: "नौकरियां" },
  { id: "36", text: "UAE weather forecast", category: "कार्यक्रम" },
  { id: "37", text: "Dubai upcoming events", category: "कार्यक्रम" },
  { id: "38", text: "UAE national day celebrations", category: "कार्यक्रम" },
  { id: "39", text: "Dubai shopping festival", category: "कार्यक्रम" },
  { id: "40", text: "Emirates ID renewal", category: "सेवाएं" },
  { id: "41", text: "UAE banking services", category: "सेवाएं" },
  { id: "42", text: "DEWA bill payment", category: "सेवाएं" },
  { id: "43", text: "Etisalat package upgrade", category: "सेवाएं" },
  { id: "44", text: "Best schools in Dubai", category: "शिक्षा" },
  { id: "45", text: "UAE university admission", category: "शिक्षा" },
  { id: "46", text: "KHDA school ratings", category: "शिक्षा" },
  { id: "47", text: "UAE health insurance", category: "स्वास्थ्य सेवा" },
  { id: "48", text: "Best hospitals in Dubai", category: "स्वास्थ्य सेवा" },
  { id: "49", text: "Medical check-up UAE", category: "स्वास्थ्य सेवा" },
  { id: "50", text: "DHA services", category: "स्वास्थ्य सेवा" }
]
</script>

<AIChat :prompts="chatPrompts" />