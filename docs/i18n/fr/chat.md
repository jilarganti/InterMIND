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
  { id: "1", text: "Expo City Dubai", category: "attractions" },
  { id: "2", text: "Billets Dubai Frame", category: "attractions" },
  { id: "3", text: "Billets Burj Khalifa", category: "attractions" },
  { id: "4", text: "Musée du Futur", category: "attractions" },
  { id: "5", text: "Louvre Abu Dhabi", category: "attractions" },
  { id: "6", text: "Ferrari World Abu Dhabi", category: "attractions" },
  { id: "7", text: "Restaurants du Dubai Mall", category: "food" },
  { id: "8", text: "Meilleure cuisine arabe à Dubai", category: "food" },
  { id: "9", text: "Restaurants étoilés Michelin à Dubai", category: "food" },
  { id: "10", text: "Street food à Sharjah", category: "food" },
  { id: "11", text: "Location Palm Jumeirah", category: "housing" },
  { id: "12", text: "Appartements Dubai Marina", category: "housing" },
  { id: "13", text: "Logements abordables Abu Dhabi", category: "housing" },
  { id: "14", text: "Lois de location UAE", category: "housing" },
  { id: "15", text: "Plan du métro de Dubai", category: "transportation" },
  { id: "16", text: "Tarifs taxis Abu Dhabi", category: "transportation" },
  { id: "17", text: "Permis de conduire UAE", category: "transportation" },
  { id: "18", text: "Services RTA Dubai", category: "transportation" },
  { id: "19", text: "Shopping Dubai Mall", category: "shopping" },
  { id: "20", text: "Global Village Dubai", category: "shopping" },
  { id: "21", text: "Souk de l'Or Dubai", category: "shopping" },
  { id: "22", text: "Offres Mall of Emirates", category: "shopping" },
  { id: "23", text: "Création d'entreprise UAE", category: "business" },
  { id: "24", text: "Dubai Free Zones", category: "business" },
  { id: "25", text: "Enregistrement société UAE", category: "business" },
  { id: "26", text: "Visa freelance UAE", category: "business" },
  { id: "27", text: "Conditions visa UAE", category: "travel" },
  { id: "28", text: "Attractions touristiques Dubai", category: "travel" },
  { id: "29", text: "Demande visa visiteur UAE", category: "travel" },
  { id: "30", text: "Lieux touristiques Abu Dhabi", category: "travel" },
  { id: "31", text: "Safari désert Dubai", category: "travel" },
  { id: "32", text: "Emplois expatriés Dubai", category: "jobs" },
  { id: "33", text: "Processus permis travail UAE", category: "jobs" },
  { id: "34", text: "Emplois à distance UAE", category: "jobs" },
  { id: "35", text: "Guide salaires UAE", category: "jobs" },
  { id: "36", text: "Prévisions météo UAE", category: "events" },
  { id: "37", text: "Événements à venir Dubai", category: "events" },
  { id: "38", text: "Célébrations fête nationale UAE", category: "events" },
  { id: "39", text: "Festival du shopping Dubai", category: "events" },
  { id: "40", text: "Renouvellement Emirates ID", category: "services" },
  { id: "41", text: "Services bancaires UAE", category: "services" },
  { id: "42", text: "Paiement facture DEWA", category: "services" },
  { id: "43", text: "Mise à niveau forfait Etisalat", category: "services" },
  { id: "44", text: "Meilleures écoles Dubai", category: "education" },
  { id: "45", text: "Admission université UAE", category: "education" },
  { id: "46", text: "Classements écoles KHDA", category: "education" },
  { id: "47", text: "Assurance santé UAE", category: "healthcare" },
  { id: "48", text: "Meilleurs hôpitaux Dubai", category: "healthcare" },
  { id: "49", text: "Bilan médical UAE", category: "healthcare" },
  { id: "50", text: "Services DHA", category: "healthcare" }
]
</script>

<AIChat :prompts="chatPrompts" />