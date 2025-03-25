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
  // Services aux entreprises (premier bloc)
  { id: "1", text: "Enregistrement d'entreprise aux UAE", category: "business" },
  { id: "2", text: "Création d'entreprise Mainland", category: "business" },
  { id: "3", text: "Enregistrement d'entreprise en Free Zone", category: "business" },
  { id: "4", text: "Formation d'entreprise Offshore", category: "business" },
  { id: "5", text: "Visa freelance UAE", category: "business" },
  { id: "6", text: "Licence commerciale à Dubai", category: "business" },
  { id: "7", text: "Exigences de licence commerciale UAE", category: "business" },
  { id: "23", text: "Création d'entreprise aux UAE", category: "business" },
  { id: "24", text: "Free Zones de Dubai", category: "business" },
  { id: "25", text: "Enregistrement d'entreprise aux UAE", category: "business" },
  { id: "26", text: "Visa freelance UAE", category: "business" },
  
  // Visas et immigration
  { id: "8", text: "Demande de Golden Visa UAE", category: "visa" },
  { id: "9", text: "Visa de travail UAE", category: "visa" },
  { id: "10", text: "Parrainage visa familial aux UAE", category: "visa" },
  { id: "11", text: "Exigences test médical pour visa", category: "visa" },
  { id: "12", text: "Processus de visa de résidence UAE", category: "visa" },
  { id: "27", text: "Conditions de visa UAE", category: "visa" },
  
  // Juridique et documents
  { id: "13", text: "Demande Emirates ID", category: "legal" },
  { id: "14", text: "Attestation de documents UAE", category: "legal" },
  { id: "15", text: "Procuration aux UAE", category: "legal" },
  { id: "16", text: "Révision contrat commercial UAE", category: "legal" },
  { id: "40", text: "Renouvellement Emirates ID", category: "legal" },
  
  // Services financiers
  { id: "17", text: "Compte bancaire entreprise UAE", category: "finance" },
  { id: "18", text: "Enregistrement fiscal UAE (TVA)", category: "finance" },
  { id: "19", text: "Services comptables aux UAE", category: "finance" },
  { id: "20", text: "Réglementations UAE Economic Substance", category: "finance" },
  { id: "41", text: "Services bancaires UAE", category: "finance" },
  
  // Immobilier et services
  { id: "21", text: "Investissement immobilier UAE", category: "property" },
  { id: "22", text: "Location bureaux à Dubai", category: "property" },

  // Santé
  { id: "47", text: "Assurance santé UAE", category: "healthcare" },
  { id: "48", text: "Meilleurs hôpitaux à Dubai", category: "healthcare" },
  { id: "49", text: "Bilan médical UAE", category: "healthcare" },
  
  // Tourisme et loisirs (à la fin)
  { id: "28", text: "Attractions touristiques Dubai", category: "travel" },
  { id: "29", text: "Expo City Dubai", category: "attractions" },
  { id: "30", text: "Billets Dubai Frame", category: "attractions" },
  { id: "31", text: "Billets Burj Khalifa", category: "attractions" },
  { id: "32", text: "Museum of the Future", category: "attractions" },
  { id: "33", text: "Louvre Abu Dhabi", category: "attractions" },
  { id: "34", text: "Ferrari World Abu Dhabi", category: "attractions" },
  { id: "35", text: "Shopping au Dubai Mall", category: "shopping" },
]
</script>

<AIChat :prompts="chatPrompts" />

<userStyle>Normal</userStyle>