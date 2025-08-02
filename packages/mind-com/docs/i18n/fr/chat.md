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
    // Recherches basées sur les difficultés - Barrières linguistiques en entreprise
    { id: "1", text: "Comment communiquer avec des clients étrangers sans connaître leur langue", category: "communication" },
    { id: "2", text: "Traduction en temps réel pour les réunions d\'affaires", category: "translation" },
    { id: "3", text: "Logiciel d\'interprète pour appels vidéo", category: "interpretation" },
    { id: "4", text: "Affaires perdues à cause des barrières linguistiques", category: "business-problems" },
    
    // Scénarios d\'entreprise spécifiques
    { id: "5", text: "Comment présenter à des clients internationaux", category: "presentations" },
    { id: "6", text: "Réaliser des démonstrations de produits en différentes langues", category: "demos" },
    { id: "7", text: "Meilleures pratiques pour les réunions commerciales internationales", category: "sales" },
    { id: "8", text: "Communiquer avec des fournisseurs de différents pays", category: "supply-chain" },
    
    // Recherches de solutions
    { id: "9", text: "Alternative aux interprètes humains coûteux", category: "cost-saving" },
    { id: "10", text: "Comparaison traduction IA vs traducteur humain", category: "comparison" },
    { id: "11", text: "Traduction instantanée pour les entreprises", category: "instant-translation" },
    { id: "12", text: "Outils de collaboration multilingue", category: "collaboration" },
    
    // Recherches sur les exigences techniques
    { id: "13", text: "Précision de traduction pour discussions techniques", category: "accuracy" },
    { id: "14", text: "Logiciel de traduction sécurisé pour entreprise", category: "security" },
    { id: "15", text: "Intégration avec la visioconférence existante", category: "integration" },
    { id: "16", text: "Service de traduction conforme au RGPD", category: "compliance" },
    
    // ROI et valeur commerciale
    { id: "17", text: "Coût des erreurs de communication dans les affaires internationales", category: "roi" },
    { id: "18", text: "Calculer les coûts d\'interprète vs solution IA", category: "cost-calculator" },
    { id: "19", text: "Augmenter les taux de conversion des ventes internationales", category: "conversion" },
    { id: "20", text: "Expansion mondiale sans formation linguistique", category: "expansion" },
    
    // Recherches comparatives des concurrents
    { id: "21", text: "Limitations de traduction Google Meet", category: "google-meet" },
    { id: "22", text: "Problèmes de traduction des sous-titres Zoom", category: "zoom" },
    { id: "23", text: "Problèmes de qualité de traduction Microsoft Teams", category: "teams" },
    
    // Recherches spécifiques à l\'industrie
    { id: "24", text: "Communication industrielle avec les fournisseurs étrangers", category: "manufacturing" },
    { id: "25", text: "Solution linguistique pour l\'export", category: "export" },
]
</script>

<AIChat :prompts="chatPrompts" />