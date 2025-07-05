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
    { id: "49", text: "इस साइट के लोकप्रिय पेज, तालिका", category: "general" },
  { id: "49", text: "इस साइट के टॉप 10 FAQ", category: "general" },
  { id: "49", text: "फ्री जोन साइट लिंक, तालिका", category: "general" },
  { id: "49", text: "मूल्य के साथ फ्री जोन साइटों के लिंक की तालिका", category: "general" },
  
  { id: "1", text: "UAE में कंपनी पंजीकरण", category: "business" },
  { id: "7", text: "UAE ट्रेड लाइसेंस आवश्यकताएं", category: "business" },
  { id: "7", text: "UAE इकाई प्रकारों की तुलना, तालिका और विश्लेषण", category: "business" },
  { id: "7", text: "दो संस्थापकों के साथ वित्तीय व्यवसाय के लिए ब्रिटेन से विभिन्न फ्री जोन में कंपनी स्थानांतरण की लागत की विशेषज्ञ तुलना। 8 वीजा, 3 परिवारजन + एक कुत्ता। बिजनेस सेंटर में किराया। ब्रिटिश, UAE निवासी नहीं", category: "business" },
  { id: "48", text: "UAE के 10 सर्वश्रेष्ठ अस्पताल, फायदे और नुकसान", category: "healthcare" },

  { id: "15", text: "UAE में पावर ऑफ अटॉर्नी", category: "legal" },

  // व्यावसायिक सेवाएं (पहला ब्लॉक)
  { id: "2", text: "मेनलैंड कंपनी सेटअप", category: "business" },
  { id: "3", text: "फ्री जोन कंपनी पंजीकरण", category: "business" },
  { id: "4", text: "ऑफशोर कंपनी गठन", category: "business" },
  { id: "5", text: "UAE फ्रीलांस वीजा", category: "business" },
  { id: "6", text: "दुबई बिजनेस लाइसेंस", category: "business" },
  { id: "23", text: "UAE बिजनेस सेटअप", category: "business" },
  { id: "24", text: "दुबई फ्री जोन", category: "business" },
  { id: "25", text: "UAE कंपनी पंजीकरण", category: "business" },
  { id: "26", text: "UAE फ्रीलांस वीजा", category: "business" },
  
  // वीजा और इमिग्रेशन
  { id: "8", text: "UAE गोल्डन वीजा आवेदन", category: "visa" },
  { id: "9", text: "UAE रोजगार वीजा", category: "visa" },
  { id: "10", text: "UAE में पारिवारिक वीजा प्रायोजन", category: "visa" },
  { id: "11", text: "वीजा मेडिकल टेस्ट आवश्यकताएं", category: "visa" },
  { id: "12", text: "UAE निवास वीजा प्रक्रिया", category: "visa" },
  { id: "27", text: "UAE वीजा आवश्यकताएं", category: "visa" },
  
  // कानूनी और दस्तावेज
  { id: "13", text: "Emirates ID आवेदन", category: "legal" },
  { id: "14", text: "UAE दस्तावेज सत्यापन", category: "legal" },
  { id: "16", text: "UAE बिजनेस कॉन्ट्रैक्ट समीक्षा", category: "legal" },
  { id: "40", text: "Emirates ID नवीनीकरण", category: "legal" },
  
  // वित्तीय सेवाएं
  { id: "17", text: "UAE कॉर्पोरेट बैंक खाता", category: "finance" },
  { id: "18", text: "UAE कर पंजीकरण (VAT)", category: "finance" },
  { id: "19", text: "UAE में लेखांकन सेवाएं", category: "finance" },
  { id: "20", text: "UAE आर्थिक पदार्थ नियम", category: "finance" },
  { id: "41", text: "UAE बैंकिंग सेवाएं", category: "finance" },
  
  // रियल एस्टेट और सेवाएं
  { id: "21", text: "UAE संपत्ति निवेश", category: "property" },
  { id: "22", text: "दुबई ऑफिस स्पेस किराया", category: "property" },

  // स्वास्थ्य सेवा
  { id: "47", text: "UAE स्वास्थ्य बीमा", category: "healthcare" },
  { id: "49", text: "UAE में मेडिकल चेक-अप", category: "healthcare" },
  
  // पर्यटन और मनोरंजन (अंत में)
  { id: "28", text: "दुबई पर्यटन आकर्षण", category: "travel" },
  { id: "29", text: "Expo City Dubai", category: "attractions" },
  { id: "30", text: "Dubai Frame टिकट", category: "attractions" },
  { id: "31", text: "Burj Khalifa टिकट", category: "attractions" },
  { id: "32", text: "Museum of the Future", category: "attractions" },
  { id: "33", text: "Abu Dhabi Louvre", category: "attractions" },
  { id: "34", text: "Ferrari World Abu Dhabi", category: "attractions" },
  { id: "35", text: "Dubai Mall शॉपिंग", category: "shopping" },
]
</script>

<AIChat :prompts="chatPrompts" />