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
  { id: "1", text: "ఎక్స్పో సిటీ దుబాయ్", category: "attractions" },
  { id: "2", text: "దుబాయ్ ఫ్రేమ్ టికెట్లు", category: "attractions" },
  { id: "3", text: "బుర్జ్ ఖలీఫా టికెట్లు", category: "attractions" },
  { id: "4", text: "భవిష్యత్తు మ్యూజియం", category: "attractions" },
  { id: "5", text: "అబుదాబి లూవ్ర్", category: "attractions" },
  { id: "6", text: "ఫెరారీ వరల్డ్ అబుదాబి", category: "attractions" },
  { id: "7", text: "దుబాయ్ మాల్ రెస్టారెంట్లు", category: "food" },
  { id: "8", text: "దుబాయ్లో ఉత్తమ అరబిక్ ఆహారం", category: "food" },
  { id: "9", text: "దుబాయ్ మిచ్లిన్ స్టార్ రెస్టారెంట్లు", category: "food" },
  { id: "10", text: "షార్జా వీధి ఆహారం", category: "food" },
  { id: "11", text: "పామ్ జుమేరా అద్దె", category: "housing" },
  { id: "12", text: "దుబాయ్ మరీనా అపార్ట్మెంట్లు", category: "housing" },
  { id: "13", text: "అబుదాబి చౌకైన గృహాలు", category: "housing" },
  { id: "14", text: "UAE అద్దె చట్టాలు", category: "housing" },
  { id: "15", text: "దుబాయ్ మెట్రో మ్యాప్", category: "transportation" },
  { id: "16", text: "అబుదాబి టాక్సీ ధరలు", category: "transportation" },
  { id: "17", text: "UAE డ్రైవింగ్ లైసెన్స్", category: "transportation" },
  { id: "18", text: "దుబాయ్ RTA సేవలు", category: "transportation" },
  { id: "19", text: "దుబాయ్ మాల్ షాపింగ్", category: "shopping" },
  { id: "20", text: "గ్లోబల్ విలేజ్ దుబాయ్", category: "shopping" },
  { id: "21", text: "దుబాయ్ గోల్డ్ సౌక్", category: "shopping" },
  { id: "22", text: "మాల్ ఆఫ్ ఎమిరేట్స్ ఆఫర్లు", category: "shopping" },
  { id: "23", text: "UAE వ్యాపార ప్రారంభం", category: "business" },
  { id: "24", text: "దుబాయ్ free zones", category: "business" },
  { id: "25", text: "UAE కంపెనీ రిజిస్ట్రేషన్", category: "business" },
  { id: "26", text: "UAE ఫ్రీలాన్స్ వీసా", category: "business" },
  { id: "27", text: "UAE వీసా అవసరాలు", category: "travel" },
  { id: "28", text: "దుబాయ్ పర్యాటక ఆకర్షణలు", category: "travel" },
  { id: "29", text: "UAE విజిట్ వీసా దరఖాస్తు", category: "travel" },
  { id: "30", text: "అబుదాబి పర్యాటక ప్రదేశాలు", category: "travel" },
  { id: "31", text: "డెజర్ట్ సఫారీ దుబాయ్", category: "travel" },
  { id: "32", text: "విదేశీయులకు దుబాయ్ ఉద్యోగాలు", category: "jobs" },
  { id: "33", text: "UAE పని పర్మిట్ ప్రక్రియ", category: "jobs" },
  { id: "34", text: "UAEలో రిమోట్ ఉద్యోగాలు", category: "jobs" },
  { id: "35", text: "UAE జీతాల గైడ్", category: "jobs" },
  { id: "36", text: "UAE వాతావరణ సూచన", category: "events" },
  { id: "37", text: "దుబాయ్ రాబోయే కార్యక్రమాలు", category: "events" },
  { id: "38", text: "UAE జాతీయ దినోత్సవాలు", category: "events" },
  { id: "39", text: "దుబాయ్ షాపింగ్ ఫెస్టివల్", category: "events" },
  { id: "40", text: "Emirates ID పునరుద్ధరణ", category: "services" },
  { id: "41", text: "UAE బ్యాంకింగ్ సేవలు", category: "services" },
  { id: "42", text: "DEWA బిల్లు చెల్లింపు", category: "services" },
  { id: "43", text: "Etisalat ప్యాకేజీ అప్గ్రేడ్", category: "services" },
  { id: "44", text: "దుబాయ్లో ఉత్తమ పాఠశాలలు", category: "education" },
  { id: "45", text: "UAE విశ్వవిద్యాలయ ప్రవేశం", category: "education" },
  { id: "46", text: "KHDA పాఠశాల రేటింగ్లు", category: "education" },
  { id: "47", text: "UAE ఆరోగ్య బీమా", category: "healthcare" },
  { id: "48", text: "దుబాయ్లో ఉత్తమ ఆసుపత్రులు", category: "healthcare" },
  { id: "49", text: "మెడికల్ చెక్-అప్ UAE", category: "healthcare" },
  { id: "50", text: "DHA సేవలు", category: "healthcare" }
]
</script>

<AIChat :prompts="chatPrompts" />