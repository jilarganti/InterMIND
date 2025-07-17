# Justification des projections financières (années 1–3) <Badge type="warning" text="draft" />

Ce document explique les hypothèses sous-jacentes à la croissance projetée d'InterMind en termes d'utilisateurs, de revenus (ARR) et d'économie unitaire au cours des trois premières années.

## Croissance des utilisateurs

| Année | Utilisateurs | Justification                                                                                                                                                                                    |
| ----- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1     | 20 000       | Pilotes initiaux de mise sur le marché dans 5 marchés émergents (MX, BR, TR, TH, ID), avec une adoption précoce d'utilisateurs B2B axés sur l'exportation. Forte demande d'alternatives en anglais. |
| 2     | 120 000      | SEO localisé et campagnes payantes dans plus de 10 pays, effets de réseau via les réunions clients, et mise à l'échelle de l'entonnoir freemium. Les intégrations Zoom/CRM prévues stimulent l'acquisition du marché intermédiaire. |
| 3     | 400 000      | Croissance virale via l'UX "parlez dans votre langue", intégrations verticales plus profondes (ERP, intégration, juridique), et programmes de revendeurs en UE/MENA.                              |

## Revenus récurrents annuels (ARR)

| Année | ARR     | Hypothèses                                                                                                                                    |
| ----- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| 1     | 2,1M\$  | Conversion conservatrice de 20K utilisateurs : 20% Pro (4K utilisateurs), 20\$/mois/utilisateur → 960K\$ ARR ; 50 contrats entreprise à 25K\$/an = 1,25M\$ ARR. |
| 2     | 11,6M\$ | Amélioration de la conversion freemium + acquisition B2B : 30K utilisateurs Pro (7,2M\$), 170 comptes entreprise (25K\$/an = 4,25M\$).                          |
| 3     | 38M\$   | 60K utilisateurs Pro (14,4M\$), 500 comptes entreprise (48K\$ ARR moyen = 24M\$), plus montées en gamme (stockage, zones de confidentialité, support).          |

## CAC (Coût d'acquisition client)

| Année | CAC Moyen | Justification                                                                                                                                                    |
| ----- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1     | 52 $      | Mélange de recherche payante, ventes dirigées par le fondateur et essais à faible coût. Campagnes ciblées par pays avec des mots-clés à forte intention (ex. "como hablar ingles reuniones"). |
| 2     | 45 $      | Le CAC diminue grâce à l'amélioration des métriques d'entonnoir, l'intégration localisée et le marketing de contenu. Les canaux organiques et de parrainage se renforcent. |
| 3     | 39 $      | Efficacité du CAC grâce aux programmes de revendeurs, aux intégrations partenaires et à la modélisation d'attribution mature.                                   |

## LTV (valeur vie client)

| Année | LTV   | Base                                                                                           |
| ----- | ----- | ---------------------------------------------------------------------------------------------- |
| 1     | 420 $ | ARPU de 20 $/mois × 21 mois de durée moyenne (premiers adoptants fidèles, faible attrition sur les cas d'usage B2B). |
| 2     | 480 $ | 80 % des utilisateurs Pro augmentent le nombre de sièges dans les organisations → 24 $/mois ARPU × 20 mois en moyenne. |
| 3     | 620 $ | Les comptes entreprise dominent ; ACV plus élevé + renouvellements + montées en gamme. Attrition conservatrice (10–12 %). |

## Marge brute

| Année | Marge | Facteurs                                                                                                                |
| ----- | ----- | ----------------------------------------------------------------------------------------------------------------------- |
| 1     | 78%   | Coût de calcul de la pile de traduction vocale (\~\$0,08/min/utilisateur), bande passante, et infra minimale. Dév amortie. |
| 2     | 82%   | Optimisation du modèle, meilleure utilisation GPU, remises fournisseur LLM, migration vers infra hybride (inférence edge). |
| 3     | 85%   | Modèles vocaux/LLM internes, infra auto-scaling, infra fixe par utilisateur. Fonctionnalités B2B tarifées plus cher avec faible coût marginal. |

## Notes

- Tous les chiffres sont conservateurs et excluent les revenus potentiels de la monétisation de l'API (prévue pour l'année 2) et des licences white-label entreprise.
- Les projections de coûts tiennent compte des options de paiement localisées, de la conformité légale (PDPL/RGPD) et des coûts de support.
- Les hypothèses de tarification sont validées par rapport aux outils SaaS comparables (Zoom, DeepL Pro, Otter AI).

> Ces projections équilibrent l'ambition de croissance avec une économie SaaS disciplinée — visant des ratios CAC/LTV durables (>5x d'ici l'année 3) et des marges brutes de 80%+.