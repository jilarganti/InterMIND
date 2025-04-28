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
    { id: "7", text: "രണ്ട് സ്ഥാപകരുള്ള ഫിനാൻഷ്യൽ ബിസിനസിന് വേണ്ടി ബ്രിട്ടനിൽ നിന്ന് വിവിധ free zone-കളിലേക്ക് കമ്പനി മാറ്റുന്നതിന്റെ ചെലവിന്റെ വിദഗ്ധ താരതമ്യം. 8 വിസകൾ, 3 കുടുംബാംഗങ്ങൾ + ഒരു നായ. ബിസിനസ് സെന്ററിൽ വാടക. ബ്രിട്ടീഷ്, UAE റെസിഡന്റ് അല്ല", category: "business" },
    { id: "48", text: "UAE-യിലെ 10 മികച്ച ആശുപത്രികൾ, ഗുണങ്ങളും ദോഷങ്ങളും", category: "healthcare" },

    { id: "15", text: "UAE-യിലെ പവർ ഓഫ് അറ്റോർണി", category: "legal" },


    { id: "2", text: "Mainland കമ്പനി സ്ഥാപിക്കൽ", category: "business" },
    { id: "3", text: "Free zone കമ്പനി രജിസ്ട്രേഷൻ", category: "business" },
    { id: "4", text: "Offshore കമ്പനി രൂപീകരണം", category: "business" },
    { id: "5", text: "UAE ഫ്രീലാൻസ് വിസ", category: "business" },
    { id: "6", text: "ദുബായ് ബിസിനസ് ലൈസൻസ്", category: "business" },
    { id: "23", text: "UAE ബിസിനസ് സെറ്റപ്പ്", category: "business" },
    { id: "24", text: "ദുബായ് free zone-കൾ", category: "business" },
    { id: "25", text: "UAE കമ്പനി രജിസ്ട്രേഷൻ", category: "business" },
    { id: "26", text: "UAE ഫ്രീലാൻസ് വിസ", category: "business" },

  ]

</script>

<AIChat :prompts="chatPrompts" />
