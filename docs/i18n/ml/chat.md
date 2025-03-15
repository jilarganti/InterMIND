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
  { id: "1", text: "എക്സ്പോ സിറ്റി ദുബായ്", category: "attractions" },
  { id: "2", text: "ദുബായ് ഫ്രെയിം ടിക്കറ്റുകൾ", category: "attractions" },
  { id: "3", text: "ബുർജ് ഖലീഫ ടിക്കറ്റുകൾ", category: "attractions" },
  { id: "4", text: "മ്യൂസിയം ഓഫ് ദ ഫ്യൂച്ചർ", category: "attractions" },
  { id: "5", text: "അബുദാബി ലൂവർ", category: "attractions" },
  { id: "6", text: "ഫെരാരി വേൾഡ് അബുദാബി", category: "attractions" },
  { id: "7", text: "ദുബായ് മാൾ റെസ്റ്റോറന്റുകൾ", category: "food" },
  { id: "8", text: "ദുബായിലെ മികച്ച അറബി ഭക്ഷണം", category: "food" },
  { id: "9", text: "ദുബായ് മിഷ്ലിൻ സ്റ്റാർ റെസ്റ്റോറന്റുകൾ", category: "food" },
  { id: "10", text: "ഷാർജ സ്ട്രീറ്റ് ഫുഡ്", category: "food" },
  { id: "11", text: "പാം ജുമൈറ വാടക", category: "housing" },
  { id: "12", text: "ദുബായ് മറീന അപ്പാർട്ട്മെന്റുകൾ", category: "housing" },
  { id: "13", text: "അബുദാബി താങ്ങാവുന്ന വീടുകൾ", category: "housing" },
  { id: "14", text: "UAE വാടക നിയമങ്ങൾ", category: "housing" },
  { id: "15", text: "ദുബായ് മെട്രോ മാപ്പ്", category: "transportation" },
  { id: "16", text: "അബുദാബി ടാക്സി നിരക്കുകൾ", category: "transportation" },
  { id: "17", text: "UAE ഡ്രൈവിംഗ് ലൈസൻസ്", category: "transportation" },
  { id: "18", text: "ദുബായ് RTA സേവനങ്ങൾ", category: "transportation" },
  { id: "19", text: "ദുബായ് മാൾ ഷോപ്പിംഗ്", category: "shopping" },
  { id: "20", text: "ഗ്ലോബൽ വില്ലേജ് ദുബായ്", category: "shopping" },
  { id: "21", text: "ദുബായ് ഗോൾഡ് സൂക്ക്", category: "shopping" },
  { id: "22", text: "മാൾ ഓഫ് എമിറേറ്റ്സ് ഓഫറുകൾ", category: "shopping" },
  { id: "23", text: "UAE ബിസിനസ് സ്ഥാപനം", category: "business" },
  { id: "24", text: "ദുബായ് free zones", category: "business" },
  { id: "25", text: "UAE കമ്പനി രജിസ്ട്രേഷൻ", category: "business" },
  { id: "26", text: "UAE ഫ്രീലാൻസ് വിസ", category: "business" },
  { id: "27", text: "UAE വിസ ആവശ്യകതകൾ", category: "travel" },
  { id: "28", text: "ദുബായ് ടൂറിസ്റ്റ് ആകർഷണങ്ങൾ", category: "travel" },
  { id: "29", text: "UAE സന്ദർശക വിസ അപേക്ഷ", category: "travel" },
  { id: "30", text: "അബുദാബി ടൂറിസ്റ്റ് സ്ഥലങ്ങൾ", category: "travel" },
  { id: "31", text: "ദുബായ് മരുഭൂമി സഫാരി", category: "travel" },
  { id: "32", text: "പ്രവാസികൾക്കുള്ള ദുബായ് ജോലികൾ", category: "jobs" },
  { id: "33", text: "UAE വർക്ക് പെർമിറ്റ് പ്രക്രിയ", category: "jobs" },
  { id: "34", text: "UAE-യിലെ റിമോട്ട് ജോലികൾ", category: "jobs" },
  { id: "35", text: "UAE ശമ്പള ഗൈഡ്", category: "jobs" },
  { id: "36", text: "UAE കാലാവസ്ഥ പ്രവചനം", category: "events" },
  { id: "37", text: "ദുബായ് വരാനിരിക്കുന്ന ഇവന്റുകൾ", category: "events" },
  { id: "38", text: "UAE ദേശീയ ദിന ആഘോഷങ്ങൾ", category: "events" },
  { id: "39", text: "ദുബായ് ഷോപ്പിംഗ് ഫെസ്റ്റിവൽ", category: "events" },
  { id: "40", text: "എമിറേറ്റ്സ് ID പുതുക്കൽ", category: "services" },
  { id: "41", text: "UAE ബാങ്കിംഗ് സേവനങ്ങൾ", category: "services" },
  { id: "42", text: "DEWA ബിൽ പേയ്മെന്റ്", category: "services" },
  { id: "43", text: "Etisalat പാക്കേജ് അപ്ഗ്രേഡ്", category: "services" },
  { id: "44", text: "ദുബായിലെ മികച്ച സ്കൂളുകൾ", category: "education" },
  { id: "45", text: "UAE സർവകലാശാല പ്രവേശനം", category: "education" },
  { id: "46", text: "KHDA സ്കൂൾ റേറ്റിംഗുകൾ", category: "education" },
  { id: "47", text: "UAE ആരോഗ്യ ഇൻഷുറൻസ്", category: "healthcare" },
  { id: "48", text: "ദുബായിലെ മികച്ച ആശുപത്രികൾ", category: "healthcare" },
  { id: "49", text: "UAE മെഡിക്കൽ ചെക്കപ്പ്", category: "healthcare" },
  { id: "50", text: "DHA സേവനങ്ങൾ", category: "healthcare" }
]
</script>

<AIChat :prompts="chatPrompts" />