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
    { id: "49", text: "ఈ సైట్ యొక్క ప్రజాదరణ పొందిన పేజీలు, పట్టిక", category: "general" },
    { id: "49", text: "ఈ సైట్, టాప్ 10 FAQ", category: "general" },
    { id: "49", text: "free zone సైట్ లింక్‌లు, పట్టిక", category: "general" },
    { id: "49", text: "ధరతో free zone సైట్‌ల లింక్‌ల పట్టిక", category: "general" },
    
    { id: "1", text: "UAE లో కంపెనీ రిజిస్ట్రేషన్", category: "business" },
    { id: "7", text: "UAE వ్యాపార లైసెన్స్ అవసరాలు", category: "business" },
    { id: "7", text: "UAE సంస్థ రకాల పోలిక, పట్టిక & విశ్లేషణ", category: "business" },
    { id: "7", text: "రెండు వ్యవస్థాపకులతో ఆర్థిక వ్యాపారం కోసం బ్రిటన్ నుండి వివిధ free zones కు కంపెనీని తరలించడానికి అయ్యే ఖర్చు యొక్క నిపుణుల పోలిక. 8 వీసాలు, 3 కుటుంబ సభ్యులు + కుక్క. బిజినెస్ సెంటర్‌లో అద్దె. బ్రిటిష్, UAE నివాసి కాదు", category: "business" },
    { id: "48", text: "UAE లో 10 ఉత్తమ ఆసుపత్రులు, ప్రయోజనాలు మరియు నష్టాలు", category: "healthcare" },

    { id: "15", text: "UAE లో పవర్ ఆఫ్ అటార్నీ", category: "legal" },

    { id: "2", text: "Mainland కంపెనీ స్థాపన", category: "business" },
    { id: "3", text: "Free zone కంపెనీ రిజిస్ట్రేషన్", category: "business" },
    { id: "4", text: "Offshore కంపెనీ ఏర్పాటు", category: "business" },
    { id: "5", text: "UAE ఫ్రీలాన్స్ వీసా", category: "business" },
    { id: "6", text: "దుబాయ్ బిజినెస్ లైసెన్స్", category: "business" },
    { id: "23", text: "UAE బిజినెస్ సెటప్", category: "business" },
    { id: "24", text: "దుబాయ్ free zones", category: "business" },
    { id: "25", text: "UAE కంపెనీ రిజిస్ట్రేషన్", category: "business" },
    { id: "26", text: "UAE ఫ్రీలాన్స్ వీసా", category: "business" },
    
    { id: "8", text: "UAE Golden Visa దరఖాస్తు", category: "visa" },
    { id: "9", text: "UAE ఉద్యోగ వీసా", category: "visa" },
    { id: "10", text: "UAE లో కుటుంబ వీసా స్పాన్సర్‌షిప్", category: "visa" },
    { id: "11", text: "వీసా వైద్య పరీక్ష అవసరాలు", category: "visa" },
    { id: "12", text: "UAE నివాస వీసా ప్రక్రియ", category: "visa" },
    { id: "27", text: "UAE వీసా అవసరాలు", category: "visa" },
    
    { id: "13", text: "Emirates ID దరఖాస్తు", category: "legal" },
    { id: "14", text: "UAE పత్రాల ధృవీకరణ", category: "legal" },
    { id: "16", text: "UAE వ్యాపార ఒప్పందం సమీక్ష", category: "legal" },
    { id: "40", text: "Emirates ID పునరుద్ధరణ", category: "legal" },
    
    { id: "17", text: "UAE కార్పొరేట్ బ్యాంక్ ఖాతా", category: "finance" },
    { id: "18", text: "UAE పన్ను రిజిస్ట్రేషన్ (VAT)", category: "finance" },
    { id: "19", text: "UAE లో అకౌంటింగ్ సేవలు", category: "finance" },
    { id: "20", text: "UAE ఆర్థిక సబ్‌స్టెన్స్ నిబంధనలు", category: "finance" },
    { id: "41", text: "UAE బ్యాంకింగ్ సేవలు", category: "finance" },
    
    { id: "21", text: "UAE ఆస్తి పెట్టుబడి", category: "property" },
    { id: "22", text: "దుబాయ్ కార్యాలయ స్థల అద్దె", category: "property" },

    { id: "47", text: "UAE ఆరోగ్య బీమా", category: "healthcare" },
    { id: "49", text: "వైద్య పరీక్ష UAE", category: "healthcare" },
    
    { id: "28", text: "దుబాయ్ పర్యాటక ఆకర్షణలు", category: "travel" },
    { id: "29", text: "Expo City దుబాయ్", category: "attractions" },
    { id: "30", text: "Dubai Frame టికెట్లు", category: "attractions" },
    { id: "31", text: "Burj Khalifa టికెట్లు", category: "attractions" },
    { id: "32", text: "Museum of the Future", category: "attractions" },
    { id: "33", text: "Abu Dhabi Louvre", category: "attractions" },
    { id: "34", text: "Ferrari World Abu Dhabi", category: "attractions" },
    { id: "35", text: "Dubai Mall షాపింగ్", category: "shopping" },
]
</script>

<AIChat :prompts="chatPrompts" />