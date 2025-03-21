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
  // व्यापार सेवाएं (पहला ब्लॉक)
  { id: "1", text: "UAE में कंपनी पंजीकरण", category: "business" },
  { id: "2", text: "Mainland कंपनी स्थापना", category: "business" },
  { id: "3", text: "Free Zone कंपनी पंजीकरण", category: "business" },
  { id: "4", text: "Offshore कंपनी गठन", category: "business" },
  { id: "5", text: "UAE फ्रीलांस वीजा", category: "business" },
  { id: "6", text: "दुबई बिजनेस लाइसेंस", category: "business" },
  { id: "7", text: "UAE व्यापार लाइसेंस आवश्यकताएं", category: "business" },
  { id: "23", text: "UAE व्यवसाय स्थापना", category: "business" },
  { id: "24", text: "दुबई Free Zones", category: "business" },
  { id: "25", text: "UAE कंपनी पंजीकरण", category: "business" },
  { id: "26", text: "UAE फ्रीलांस वीजा", category: "business" },
  
  // वीजा और आव्रजन
  { id: "8", text: "UAE Golden Visa आवेदन", category: "visa" },
  { id: "9", text: "UAE रोजगार वीजा", category: "visa" },
  { id: "10", text: "UAE में परिवार वीजा प्रायोजन", category: "visa" },
  { id: "11", text: "वीजा मेडिकल टेस्ट आवश्यकताएं", category: "visa" },
  { id: "12", text: "UAE निवास वीजा प्रक्रिया", category: "visa" },
  { id: "27", text: "UAE वीजा आवश्यकताएं", category: "visa" },
  
  // कानूनी और दस्तावेज
  { id: "13", text: "Emirates ID आवेदन", category: "legal" },
  { id: "14", text: "UAE दस्तावेज सत्यापन", category: "legal" },
  { id: "15", text: "UAE में मुख्तारनामा", category: "legal" },
  { id: "16", text: "UAE व्यापार अनुबंध समीक्षा", category: "legal" },
  { id: "40", text: "Emirates ID नवीनीकरण", category: "legal" },
  
  // वित्तीय सेवाएं
  { id: "17", text: "UAE कॉर्पोरेट बैंक खाता", category: "finance" },
  { id: "18", text: "UAE कर पंजीकरण (VAT)", category: "finance" },
  { id: "19", text: "UAE में लेखा सेवाएं", category: "finance" },
  { id: "20", text: "UAE Economic Substance Regulations", category: "finance" },
  { id: "41", text: "UAE बैंकिंग सेवाएं", category: "finance" },
  
  // रियल एस्टेट और सेवाएं
  { id: "21", text: "UAE संपत्ति निवेश", category: "property" },
  { id: "22", text: "दुबई कार्यालय स्थान किराया", category: "property" },

  // स्वास्थ्य सेवा
  { id: "47", text: "UAE स्वास्थ्य बीमा", category: "healthcare" },
  { id: "48", text: "दुबई के सर्वश्रेष्ठ अस्पताल", category: "healthcare" },
  { id: "49", text: "UAE मेडिकल चेक-अप", category: "healthcare" },
  
  // पर्यटन और मनोरंजन (अंत में)
  { id: "28", text: "दुबई पर्यटक आकर्षण", category: "travel" },
  { id: "29", text: "Expo City दुबई", category: "attractions" },
  { id: "30", text: "Dubai Frame टिकट", category: "attractions" },
  { id: "31", text: "Burj Khalifa टिकट", category: "attractions" },
  { id: "32", text: "Museum of the Future", category: "attractions" },
  { id: "33", text: "Abu Dhabi Louvre", category: "attractions" },
  { id: "34", text: "Ferrari World Abu Dhabi", category: "attractions" },
  { id: "35", text: "Dubai Mall शॉपिंग", category: "shopping" },
]
</script>

<AIChat :prompts="chatPrompts" />

<userStyle>Normal</userStyle>