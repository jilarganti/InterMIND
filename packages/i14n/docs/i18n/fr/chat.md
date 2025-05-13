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
    { id: "49", text: "pages populaires de ce site, tableau", category: "general" },
    { id: "49", text: "ce site, top 10 FAQ", category: "general" },
    { id: "49", text: "liens des sites free zone, tableau", category: "general" },
    { id: "49", text: "tableau des liens vers les sites free zone avec prix", category: "general" },
    
    { id: "1", text: "Enregistrement d'entreprise aux UAE", category: "business" },
    { id: "7", text: "Exigences de licence commerciale aux UAE", category: "business" },
    { id: "7", text: "comparaison des types d'entités aux UAE, tableau & analyses", category: "business" },
    { id: "7", text: "comparaison expert du coût de délocalisation d'une entreprise britannique vers différentes free zones pour une entreprise financière avec deux fondateurs. 8 visas, 3 membres de famille + un chien. Location dans un centre d'affaires. Britannique, non-résident UAE", category: "business" },
    { id: "48", text: "10 Meilleurs Hôpitaux aux UAE, Avantages et Inconvénients", category: "healthcare" },

    { id: "15", text: "Procuration aux UAE", category: "legal" },

    { id: "2", text: "Création d'entreprise Mainland", category: "business" },
    { id: "3", text: "Enregistrement d'entreprise en Free zone", category: "business" },
    { id: "4", text: "Formation d'entreprise Offshore", category: "business" },
    { id: "5", text: "Visa freelance UAE", category: "business" },
    { id: "6", text: "Licence commerciale Dubai", category: "business" },
    { id: "23", text: "Création d'entreprise UAE", category: "business" },
    { id: "24", text: "Free zones Dubai", category: "business" },
    { id: "25", text: "Enregistrement d'entreprise UAE", category: "business" },
    { id: "26", text: "Visa freelance UAE", category: "business" },
    
    { id: "8", text: "Demande de Golden Visa UAE", category: "visa" },
    { id: "9", text: "Visa de travail UAE", category: "visa" },
    { id: "10", text: "Parrainage visa familial aux UAE", category: "visa" },
    { id: "11", text: "Exigences test médical visa", category: "visa" },
    { id: "12", text: "Processus visa de résidence UAE", category: "visa" },
    { id: "27", text: "Conditions visa UAE", category: "visa" },
    
    { id: "13", text: "Demande Emirates ID", category: "legal" },
    { id: "14", text: "Attestation documents UAE", category: "legal" },
    { id: "16", text: "Révision contrat commercial UAE", category: "legal" },
    { id: "40", text: "Renouvellement Emirates ID", category: "legal" },
    
    { id: "17", text: "Compte bancaire entreprise UAE", category: "finance" },
    { id: "18", text: "Enregistrement fiscal UAE (TVA)", category: "finance" },
    { id: "19", text: "Services comptables aux UAE", category: "finance" },
    { id: "20", text: "Réglementations UAE Economic Substance", category: "finance" },
    { id: "41", text: "Services bancaires UAE", category: "finance" },
    
    { id: "21", text: "Investissement immobilier UAE", category: "property" },
    { id: "22", text: "Location bureaux Dubai", category: "property" },

    { id: "47", text: "Assurance santé UAE", category: "healthcare" },
    { id: "49", text: "Bilan médical UAE", category: "healthcare" },
    
    { id: "28", text: "Attractions touristiques Dubai", category: "travel" },
    { id: "29", text: "Expo City Dubai", category: "attractions" },
    { id: "30", text: "Billets Dubai Frame", category: "attractions" },
    { id: "31", text: "Billets Burj Khalifa", category: "attractions" },
    { id: "32", text: "Museum of the Future", category: "attractions" },
    { id: "33", text: "Louvre Abu Dhabi", category: "attractions" },
    { id: "34", text: "Ferrari World Abu Dhabi", category: "attractions" },
    { id: "35", text: "Shopping Dubai Mall", category: "shopping" },
]
</script>

<AIChat :prompts="chatPrompts" />