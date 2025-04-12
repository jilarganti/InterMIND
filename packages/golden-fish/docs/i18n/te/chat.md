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
  // వ్యాపార సేవలు (మొదటి బ్లాక్)
  { id: "1", text: "UAE లో కంపెనీ రిజిస్ట్రేషన్", category: "business" },
  { id: "2", text: "Mainland కంపెనీ సెటప్", category: "business" },
  { id: "3", text: "Free zone కంపెనీ రిజిస్ట్రేషన్", category: "business" },
  { id: "4", text: "Offshore కంపెనీ ఏర్పాటు", category: "business" },
  { id: "5", text: "UAE ఫ్రీలాన్స్ వీసా", category: "business" },
  { id: "6", text: "Dubai బిజినెస్ లైసెన్స్", category: "business" },
  { id: "7", text: "UAE ట్రేడ్ లైసెన్స్ అవసరాలు", category: "business" },
  { id: "23", text: "UAE బిజినెస్ సెటప్", category: "business" },
  { id: "24", text: "Dubai free zones", category: "business" },
  { id: "25", text: "UAE కంపెనీ రిజిస్ట్రేషన్", category: "business" },
  { id: "26", text: "UAE ఫ్రీలాన్స్ వీసా", category: "business" },
  
  // వీసా మరియు వలస
  { id: "8", text: "UAE Golden Visa దరఖాస్తు", category: "visa" },
  { id: "9", text: "UAE ఉద్యోగ వీసా", category: "visa" },
  { id: "10", text: "UAE లో కుటుంబ వీసా స్పాన్సర్‌షిప్", category: "visa" },
  { id: "11", text: "వీసా మెడికల్ టెస్ట్ అవసరాలు", category: "visa" },
  { id: "12", text: "UAE రెసిడెన్సీ వీసా ప్రక్రియ", category: "visa" },
  { id: "27", text: "UAE వీసా అవసరాలు", category: "visa" },
  
  // చట్టపరమైన మరియు పత్రాలు
  { id: "13", text: "Emirates ID దరఖాస్తు", category: "legal" },
  { id: "14", text: "UAE డాక్యుమెంట్ అటెస్టేషన్", category: "legal" },
  { id: "15", text: "UAE లో పవర్ ఆఫ్ అటార్నీ", category: "legal" },
  { id: "16", text: "UAE వ్యాపార ఒప్పందం సమీక్ష", category: "legal" },
  { id: "40", text: "Emirates ID పునరుద్ధరణ", category: "legal" },
  
  // ఆర్థిక సేవలు
  { id: "17", text: "UAE కార్పొరేట్ బ్యాంక్ ఖాతా", category: "finance" },
  { id: "18", text: "UAE పన్ను రిజిస్ట్రేషన్ (VAT)", category: "finance" },
  { id: "19", text: "UAE లో అకౌంటింగ్ సేవలు", category: "finance" },
  { id: "20", text: "UAE Economic Substance Regulations", category: "finance" },
  { id: "41", text: "UAE బ్యాంకింగ్ సేవలు", category: "finance" },
  
  // రియల్ ఎస్టేట్ మరియు సేవలు
  { id: "21", text: "UAE ప్రాపర్టీ పెట్టుబడి", category: "property" },
  { id: "22", text: "Dubai కార్యాలయ స్థల అద్దె", category: "property" },

  // ఆరోగ్య సంరక్షణ
  { id: "47", text: "UAE ఆరోగ్య బీమా", category: "healthcare" },
  { id: "48", text: "Dubai లో ఉత్తమ ఆసుపత్రులు", category: "healthcare" },
  { id: "49", text: "UAE మెడికల్ చెకప్", category: "healthcare" },
  
  // పర్యాటక మరియు వినోద కార్యక్రమాలు (చివరలో)
  { id: "28", text: "Dubai పర్యాటక ఆకర్షణలు", category: "travel" },
  { id: "29", text: "Expo City Dubai", category: "attractions" },
  { id: "30", text: "Dubai Frame టికెట్లు", category: "attractions" },
  { id: "31", text: "Burj Khalifa టికెట్లు", category: "attractions" },
  { id: "32", text: "Museum of the Future", category: "attractions" },
  { id: "33", text: "Abu Dhabi Louvre", category: "attractions" },
  { id: "34", text: "Ferrari World Abu Dhabi", category: "attractions" },
  { id: "35", text: "Dubai Mall షాపింగ్", category: "shopping" },
]
</script>

<AIChat :prompts="chatPrompts" />
