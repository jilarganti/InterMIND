<script setup>
  const chatPrompts = [
    // Produit principal et technologie
    "Interprétation IA en temps réel vs interprètes simultanés traditionnels",
    "Comment fonctionne la traduction vocale IA dans les réunions vidéo",
    "Benchmarks de latence pour la traduction parole-à-parole",
    "Précision de l'interprétation IA pour les conversations d'affaires",
    "Traduction IA contextuelle dans les réunions en direct",
    
    // Cas d'usage métier
    "Réunions commerciales internationales sans barrières linguistiques",
    "Collaboration d'équipes mondiales avec traduction instantanée",
    "Communication avec fournisseurs manufacturiers transfrontaliers",
    "Appels vidéo de support client multilingue",
    "Sessions internationales d'éducation et de formation",
    
    // Performance technique
    "Visioconférence dans de mauvaises conditions réseau",
    "Performance de traduction apiMind vs Google Meet",
    "Fonctionnalités d'interprétation apiMind vs Zoom",
    "Précision de reconnaissance vocale selon les accents",
    "Exigences de bande passante pour les appels interprétés par IA",
    
    // ROI et économie d'entreprise
    "Comparaison des coûts : interprétation IA vs interprètes humains",
    "ROI de l'implémentation de technologie d'accès linguistique",
    "Coûts cachés des barrières linguistiques en entreprise",
    "Gain de temps avec la traduction IA instantanée",
    "Réduction des coûts de mauvaise communication dans les accords internationaux",
    
    // Conformité et réglementations
    "Lois d'accès linguistique aux USA (Title VI, ADA, LEP)",
    "Conformité RGPD pour les plateformes vidéo multilingues",
    "Réglementations d'accès linguistique en santé (Section 1557)",
    "Souveraineté des données dans les services de traduction cloud",
    
    // Analyse concurrentielle
    "Limitations de la traduction temps réel Microsoft Teams",
    "Sous-titres automatiques Google Meet vs interprétation IA",
    "Comparaison des fonctionnalités de traduction Zoom",
    "LSP traditionnels vs plateformes d'interprétation IA",
    
    // Tendances technologiques
    "Avenir de l'interprétation simultanée avec l'IA",
    "Traduction IA multimodale (voix + contexte visuel)",
    "Intelligence émotionnelle dans l'interprétation IA",
    "Edge computing pour l'interprétation à faible latence",
    
    // Success stories et études de cas
    "Comment les entreprises ont augmenté leurs ventes internationales avec l'interprétation IA",
    "Réduction des coûts d'interprètes de 80% avec l'IA",
    "Adoption universitaire de l'interprétation IA pour l'accessibilité",
    "Amélioration de la satisfaction des patients LEP dans les systèmes hospitaliers",
  ]
</script>

<AIChat :prompts="chatPrompts" />