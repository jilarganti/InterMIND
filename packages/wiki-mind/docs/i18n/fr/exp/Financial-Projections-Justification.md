# Justification des projections financières (années 1–3) <Badge type="success" text="updated" />

Ce document explique les hypothèses sous-jacentes au modèle financier d'InterMind pour la croissance des utilisateurs, les revenus (ARR) et l'économie unitaire au cours des trois premières années.

## Croissance de la clientèle

| Année | Comptes payants | Justification                                                                                                                                                            |
| ----- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1     | 1 600           | Déploiement initial sur 5 marchés émergents (MX, BR, TR, TH, ID), adoption précoce par les utilisateurs B2B axés sur l'export. Forte demande d'alternatives en anglais. |
| 2     | 15 600          | SEO localisé et campagnes payantes dans plus de 10 pays, effets de réseau via les réunions clients, mise à l'échelle de l'entonnoir freemium. Les intégrations Zoom/CRM stimulent l'acquisition du marché intermédiaire. |
| 3     | 72 000          | Croissance virale grâce à l'UX "parlez dans votre langue", intégrations verticales approfondies (ERP, onboarding, juridique), programmes de revendeurs en UE/MENA.      |

## Chiffre d'affaires récurrent annuel (ARR)

| Année | ARR         | Hypothèses principales                                                                                                                    |
| ----- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| 1     | 705 600 $   | 1 600 comptes payants × 1,5 licences moy. × 24,50 $/mois → conversion freemium conservatrice + programmes pilotes B2B.                |
| 2     | 8 985 600 $ | 15 600 comptes payants × 2,0 licences moy. × 24,00 $/mois → conversion freemium améliorée + acquisition B2B active.                   |
| 3     | 50 760 000 $| 72 000 comptes payants × 2,5 licences moy. × 23,50 $/mois → maturité produit, montée en gamme marché intermédiaire, ventes (stockage, zones privées). |

## Licences par compte : segmentation réaliste

### **Insight clé :** Plus de 80 % resteront mono-utilisateur, mais la croissance du marché intermédiaire augmente la moyenne

| Segment              | Distribution A1   | Distribution A2     | Distribution A3   |
| -------------------- | ----------------- | ------------------- | ----------------- |
| **Solo/Freelance**   | 83% (1,0 lic/cpt) | 81,5% (1,0 lic/cpt) | 80% (1,0 lic/cpt) |
| **Petite entreprise**   | 15% (2,0 lic/cpt) | 15% (3,0 lic/cpt)   | 15% (4,0 lic/cpt) |
| **Marché intermédiaire**       | 2% (18,5 lic/cpt) | 3,5% (21,0 lic/cpt) | 5% (22,0 lic/cpt) |
| **Moyenne pondérée** | **1,5 lic/cpt**   | **2,0 lic/cpt**     | **2,5 lic/cpt**   |

### **Logique de croissance des licences :**

**A1 :** Adoption pilote — équipes minimales testant le produit, principalement des utilisateurs individuels  
**A2 :** Déploiement départemental — expansion vers les départements ventes/support au sein des comptes existants, la pénétration du marché intermédiaire commence  
**A3 :** Adoption à l\'échelle départementale — les entreprises du marché intermédiaire s\'étendent à plusieurs équipes et départements

## CAC (Coût d'acquisition client)

| Année | CAC Moyen | Justification                                                                                                                                                           |
| ----- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1     | 95 $      | Combinaison de recherche payante, ventes dirigées par le fondateur et pilotes à faible coût. Campagnes au niveau national avec mots-clés à forte intention (ex : "como hablar ingles reuniones"). |
| 2     | 90 $      | Le CAC diminue grâce à l'amélioration des métriques d'entonnoir, l'intégration localisée et le marketing de contenu. Les canaux organiques et de parrainage se renforcent.                        |
| 3     | 85 $      | Efficacité du CAC grâce aux programmes de revendeurs, intégrations partenaires et modélisation d'attribution mature.                                                   |

## LTV (Valeur vie client)

| Année | LTV    | Base de calcul                                                                                           |
| ----- | ------ | -------------------------------------------------------------------------------------------------------- |
| 1     | 178,9$ | ARPU 36,8$/mois × 4,9 mois de durée moyenne (premiers utilisateurs, fort taux d'abandon en freemium).   |
| 2     | 308,0$ | ARPU 48,0$/mois × 6,4 mois de durée moyenne (rétention améliorée, clients B2B plus fidèles).            |
| 3     | 470,0$ | ARPU 58,8$/mois × 8,0 mois de durée moyenne (marché intermédiaire dominant ; ACV plus élevé + renouvellements + montées en gamme, 10% d'attrition). |

## Marge brute

| Année | Marge | Facteurs                                                                                                                    |
| ----- | ----- | --------------------------------------------------------------------------------------------------------------------------- |
| 1     | 73%   | Coût de calcul de la pile de traduction vocale (~0,08$/min/utilisateur), bande passante, infrastructure minimale. Développement amorti. |
| 2     | 77%   | Optimisation du modèle, meilleure utilisation GPU, remises fournisseur LLM, migration vers infra hybride (inférence edge). |
| 3     | 80%   | Modèles vocaux/LLM internes, infra auto-scaling, infra fixe par utilisateur. Fonctionnalités B2B tarifées plus cher avec faibles coûts marginaux. |

## Métriques clés de l'économie unitaire

| Métrique                           | A1     | A2     | A3     | Valeur cible |
| ---------------------------------- | ------ | ------ | ------ | ------------ |
| **LTV/CAC**                        | 1,9    | 3,4    | 5,5    | >3,0         |
| **Période de récupération**        | 8,5 mo | 5,8 mo | 4,2 mo | <12 mo       |
| **Rétention brute des revenus**    | 85%    | 88%    | 90%    | >85%         |
| **Rétention nette des revenus**    | 95%    | 115%   | 130%   | >110%        |

## Hypothèses critiques du modèle

### **Stratégie de tarification :**

- Optimisation légère des prix au fil des années pour augmenter la LTV
- Niveau marché intermédiaire avec des fonctionnalités premium en A2-A3
- Remises sur volume pour les comptes multi-utilisateurs

### **Évolution de la segmentation client :**

- **A1 :** Focus sur les PME early adopters (churn élevé, adoption rapide)
- **A2 :** Expansion vers le marché intermédiaire via les intégrations et partenariats
- **A3 :** Montée en puissance du marché intermédiaire avec customer success dédié et déploiements multi-départements

### **Expansion géographique :**

- Marchés émergents en premier (CAC plus faible, taux de croissance plus élevé)
- Marchés développés plus tard (LTV plus élevée, acquisition plus complexe)

## Risques et atténuation

**Scénarios positifs non inclus :**

- Monétisation de l'API (prévue en Y2)
- Licences en marque blanche pour les clients du marché intermédiaire
- Intégrations marketplace (Zoom App Store, Microsoft Teams)

**Les hypothèses de coûts tiennent compte de :**

- Méthodes de paiement localisées et fluctuations monétaires
- Conformité légale (PDPL/RGPD) et coûts de support
- Pression concurrentielle sur les prix

**Validation tarifaire :**

- Comparaison avec des outils SaaS comparables (Zoom, DeepL Pro, Otter AI)
- Tests de sensibilité aux prix dans les segments cibles
- Analyse de la disposition à payer via des programmes pilotes

> **Conclusion :** Ces projections équilibrent l'ambition de croissance avec une économie SaaS disciplinée — visant des ratios LTV/CAC durables (>5x d'ici Y3) et des marges brutes de 80%+ avec une segmentation réaliste de la base client.