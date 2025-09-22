<script setup>
  const chatPrompts = [
    // Requêtes de recherche basées sur la douleur - Barrières linguistiques dans les affaires
    "Alternative aux interprètes humains coûteux",
    "Comment communiquer avec des clients étrangers sans connaître leur langue",
    "Traduction en temps réel pour les réunions d\\'affaires",
    "Logiciel d\\'interprète pour appels vidéo",
    "Contrats perdus à cause des barrières linguistiques",
    
    // Scénarios d'affaires spécifiques
    "Comment présenter à des clients internationaux",
    "Effectuer des démonstrations de produits dans différentes langues",
    "Meilleures pratiques pour les réunions de vente internationales",
    "Communiquer avec des fournisseurs de différents pays",
    
    // Requêtes de recherche de solutions
    "Comparaison traduction IA vs traducteur humain",
    "Traduction linguistique instantanée pour les affaires",
    "Outils de collaboration pour équipes multilingues",
    
    // Recherches d'exigences techniques
    "Précision de traduction pour les discussions techniques",
    "Logiciel de traduction sécurisé pour l\\'entreprise",
    "Intégration avec la visioconférence existante",
    "Service de traduction conforme RGPD",
    
    // ROI et valeur commerciale
    "Coût de la mauvaise communication dans les affaires internationales",
    "Calculer les coûts d\\'interprète vs solution IA",
    "Augmenter les taux de conversion des ventes internationales",
    "Expansion mondiale sans formation linguistique",
    
    // Recherches de comparaison avec la concurrence
    "Limitations de traduction Google Meet",
    "Problèmes de traduction de sous-titres Zoom",
    "Problèmes de qualité de traduction Microsoft Teams",
    
    // Recherches spécifiques à l'industrie
    "Communication manufacturière avec fournisseurs étrangers",
    "Solution linguistique pour entreprise d\\'exportation",
  ]
</script>

<AIChat :prompts="chatPrompts" />