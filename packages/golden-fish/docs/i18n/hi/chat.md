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
    { id: "49", text: "इस साइट के लोकप्रिय पेज, टेबल", category: "general" },
    { id: "49", text: "इस साइट के टॉप 10 सवाल-जवाब", category: "general" },
    { id: "49", text: "free zone साइट लिंक्स, टेबल", category: "general" },
    { id: "49", text: "मूल्य के साथ free zone साइट्स के लिंक्स की टेबल", category: "general" },
    
    { id: "1", text: "UAE में कंपनी पंजीकरण", category: "business" },
    { id: "7", text: "UAE व्यापार लाइसेंस आवश्यकताएं", category: "business" },
    { id: "7", text: "UAE इकाई प्रकारों की तुलना, टेबल और विश्लेषण", category: "business" },
    { id: "7", text: "वित्तीय व्यवसाय के लिए ब्रिटेन से विभिन्न free zones में कंपनी स्थानांतरण की लागत की विशेषज्ञ तुलना। दो संस्थापक, 8 वीजा, 3 परिवार के सदस्य + एक कुत्ता। बिजनेस सेंटर में किराया। ब्रिटिश, UAE निवासी नहीं", category: "business" },
    { id: "48", text: "UAE में 10 सर्वश्रेष्ठ अस्पताल, फायदे और नुकसान", category: "healthcare" },

    { id: "15", text: "UAE में पावर ऑफ अटॉर्नी", category: "legal" },

    { id: "2", text: "Mainland कंपनी स्थापना", category: "business" },
    { id: "3", text: "Free zone कंपनी पंजीकरण", category: "business" },
    { id: "4", text: "Offshore कंपनी गठन", category: "business" },
    { id: "5", text: "UAE फ्रीलांस वीजा", category: "business" },
    { id: "6", text: "दुबई बिजनेस लाइसेंस", category: "business" },
    { id: "23", text: "UAE बिजनेस सेटअप", category: "business" },
    { id: "24", text: "दुबई free zones", category: "business" },
    { id: "25", text: "UAE कंपनी पंजीकरण", category: "business" },
    { id: "26", text: "UAE फ्रीलांस वीजा", category: "business" },
    
    { id: "8", text: "UAE Golden Visa आवेदन", category: "visa" },
    { id: "9", text: "UAE रोजगार वीजा", category: "visa" },
    { id: "10", text: "UAE में परिवार वीजा प्रायोजन", category: "visa" },
    { id: "11", text: "वीजा मेडिकल टेस्ट आवश्यकताएं", category: "visa" },
    { id: "12", text: "UAE निवास वीजा प्रक्रिया", category: "visa" },
    { id: "27", text: "UAE वीजा आवश्यकताएं", category: "visa" },
    
    { id: "13", text: "Emirates ID आवेदन", category: "legal" },
    { id: "14", text: "UAE दस्तावेज सत्यापन", category: "legal" },
    { id: "16", text: "UAE व्यवसाय अनुबंध समीक्षा", category: "legal" },
    { id: "40", text: "Emirates ID नवीनीकरण", category: "legal" },
    
    { id: "17", text: "UAE कॉर्पोरेट बैंक खाता", category: "finance" },
    { id: "18", text: "UAE कर पंजीकरण (VAT)", category: "finance" },
    { id: "19", text: "UAE में लेखा सेवाएं", category: "finance" },
    { id: "20", text: "UAE Economic Substance Regulations", category: "finance" },
    { id: "41", text: "UAE बैंकिंग सेवाएं", category: "finance" },
    
    { id: "21", text: "UAE संपत्ति निवेश", category: "property" },
    { id: "22", text: "दुबई कार्यालय स्थान किराया", category: "property" },

    { id: "47", text: "UAE स्वास्थ्य बीमा", category: "healthcare" },
    { id: "49", text: "UAE में मेडिकल चेकअप", category: "healthcare" },
    
    { id: "28", text: "दुबई पर्यटन आकर्षण", category: "travel" },
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