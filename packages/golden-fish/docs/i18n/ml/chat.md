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
    { id: "49", text: "ഈ സൈറ്റിലെ ജനപ്രിയ പേജുകൾ, പട്ടിക", category: "general" },
    { id: "49", text: "ഈ സൈറ്റ്, ടോപ്പ് 10 FAQ", category: "general" },
    { id: "49", text: "free zone സൈറ്റ് ലിങ്കുകൾ, പട്ടിക", category: "general" },
    { id: "49", text: "വിലയോടുകൂടിയ free zone സൈറ്റുകളിലേക്കുള്ള ലിങ്കുകളുടെ പട്ടിക", category: "general" },
    
    { id: "1", text: "UAE-യിൽ കമ്പനി രജിസ്ട്രേഷൻ", category: "business" },
    { id: "7", text: "UAE ട്രേഡ് ലൈസൻസ് ആവശ്യകതകൾ", category: "business" },
    { id: "7", text: "UAE എന്റിറ്റി തരങ്ങളുടെ താരതമ്യം, പട്ടിക & വിശകലനം", category: "business" },
    { id: "48", text: "UAE-യിലെ 10 മികച്ച ആശുപത്രികൾ, ഗുണങ്ങളും ദോഷങ്ങളും", category: "healthcare" },

    { id: "15", text: "UAE-യിലെ പവർ ഓഫ് അറ്റോർണി", category: "legal" },

    { id: "2", text: "Mainland കമ്പനി സ്ഥാപിക്കൽ", category: "business" },
    { id: "3", text: "Free zone കമ്പനി രജിസ്ട്രേഷൻ", category: "business" },
    { id: "4", text: "Offshore കമ്പനി രൂപീകരണം", category: "business" },
    { id: "5", text: "UAE ഫ്രീലാൻസ് വിസ", category: "business" },
    { id: "6", text: "ദുബായ് ബിസിനസ് ലൈസൻസ്", category: "business" },
    { id: "23", text: "UAE ബിസിനസ് സെറ്റപ്പ്", category: "business" },
    { id: "24", text: "ദുബായ് free zones", category: "business" },
    { id: "25", text: "UAE കമ്പനി രജിസ്ട്രേഷൻ", category: "business" },
    { id: "26", text: "UAE ഫ്രീലാൻസ് വിസ", category: "business" },
    
    { id: "8", text: "UAE Golden Visa അപേക്ഷ", category: "visa" },
    { id: "9", text: "UAE തൊഴിൽ വിസ", category: "visa" },
    { id: "10", text: "UAE-യിലെ കുടുംബ വിസ സ്പോൺസർഷിപ്പ്", category: "visa" },
    { id: "11", text: "വിസ മെഡിക്കൽ ടെസ്റ്റ് ആവശ്യകതകൾ", category: "visa" },
    { id: "12", text: "UAE റെസിഡൻസി വിസ പ്രക്രിയ", category: "visa" },
    { id: "27", text: "UAE വിസ ആവശ്യകതകൾ", category: "visa" },
    
    { id: "13", text: "Emirates ID അപേക്ഷ", category: "legal" },
    { id: "14", text: "UAE രേഖകളുടെ സാക്ഷ്യപ്പെടുത്തൽ", category: "legal" },
    { id: "16", text: "UAE ബിസിനസ് കരാർ അവലോകനം", category: "legal" },
    { id: "40", text: "Emirates ID പുതുക്കൽ", category: "legal" },
    
    { id: "17", text: "UAE കോർപ്പറേറ്റ് ബാങ്ക് അക്കൗണ്ട്", category: "finance" },
    { id: "18", text: "UAE നികുതി രജിസ്ട്രേഷൻ (VAT)", category: "finance" },
    { id: "19", text: "UAE-യിലെ അക്കൗണ്ടിംഗ് സേവനങ്ങൾ", category: "finance" },
    { id: "20", text: "UAE Economic Substance Regulations", category: "finance" },
    { id: "41", text: "UAE ബാങ്കിംഗ് സേവനങ്ങൾ", category: "finance" },
    
    { id: "21", text: "UAE പ്രോപ്പർട്ടി നിക്ഷേപം", category: "property" },
    { id: "22", text: "ദുബായ് ഓഫീസ് സ്പേസ് വാടക", category: "property" },

    { id: "47", text: "UAE ആരോഗ്യ ഇൻഷുറൻസ്", category: "healthcare" },
    { id: "49", text: "മെഡിക്കൽ ചെക്ക്-അപ്പ് UAE", category: "healthcare" },
    
    { id: "28", text: "ദുബായ് ടൂറിസ്റ്റ് ആകർഷണങ്ങൾ", category: "travel" },
    { id: "29", text: "Expo City ദുബായ്", category: "attractions" },
    { id: "30", text: "Dubai Frame ടിക്കറ്റുകൾ", category: "attractions" },
    { id: "31", text: "Burj Khalifa ടിക്കറ്റുകൾ", category: "attractions" },
    { id: "32", text: "Museum of the Future", category: "attractions" },
    { id: "33", text: "Abu Dhabi Louvre", category: "attractions" },
    { id: "34", text: "Ferrari World Abu Dhabi", category: "attractions" },
    { id: "35", text: "Dubai Mall ഷോപ്പിംഗ്", category: "shopping" },
]
</script>

<AIChat :prompts="chatPrompts" />