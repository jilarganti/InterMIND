<script setup>
  const chatPrompts = [
    // Recherches basées sur les difficultés - Barrières linguistiques en entreprise
    "Alternative aux interprètes humains coûteux",
    "Comment communiquer avec des clients étrangers sans connaître leur langue",
    "Traduction en temps réel pour réunions d'affaires",
    "Logiciel d'interprète pour appels vidéo",
    "Affaires perdues à cause des barrières linguistiques",
    
    // Scénarios d'entreprise spécifiques
    "Comment présenter à des clients internationaux",
    "Réaliser des démonstrations de produits en différentes langues",
    "Meilleures pratiques pour les réunions commerciales internationales",
    "Communiquer avec des fournisseurs de différents pays",
    
    // Recherches de solutions
    "Comparaison traduction IA vs traducteur humain",
    "Traduction instantanée pour les entreprises",
    "Outils de collaboration multilingue",
    
    // Recherches d'exigences techniques
    "Précision de traduction pour discussions techniques",
    "Logiciel de traduction sécurisé pour entreprise",
    "Intégration avec la visioconférence existante",
    "Service de traduction conforme au RGPD",
    
    // ROI et valeur commerciale
    "Coût des erreurs de communication dans les affaires internationales",
    "Calculer coûts interprètes vs solution IA",
    "Augmenter les taux de conversion des ventes internationales",
    "Expansion mondiale sans formation linguistique",
    
    // Recherches comparatives des concurrents
    "Limitations de traduction Google Meet",
    "Problèmes de traduction des sous-titres Zoom",
    "Problèmes de qualité de traduction Microsoft Teams",
    
    // Recherches spécifiques à l'industrie
    "Communication industrielle avec fournisseurs étrangers",
    "Solution linguistique pour entreprise d'exportation",
  ]
</script>

<AIChat :prompts="chatPrompts" />