# Confidentialité des données pour les réunions IA

## Introduction

InterMind est une plateforme de réunions vidéo multilingues avec interprétation en direct alimentée par l'IA. Nous sommes conçus pour les professionnels — où non seulement le message compte, mais aussi la confidentialité de ce message.

Pour offrir une expérience fluide, InterMind intègre des services tiers pour la vidéo, l'audio, le stockage cloud, l'interprétation en temps réel et l'analytique. Ces fournisseurs tiers nous aident à assurer les performances et la scalabilité — mais ils introduisent également une couche que nous ne pouvons pas contrôler directement.

Nous croyons en la **transparence plutôt qu'aux promesses**. Nous ne pouvons garantir la confidentialité et la sécurité que pour les composants sous notre contrôle direct — notre logiciel, la logique d'interface et la façon dont nous acheminons les données. Pour tout le reste, nous vous offrons **le pouvoir du choix**.

C'est pourquoi nous avons conçu InterMind avec une **confidentialité basée sur les régions** : vous choisissez où vos données sont traitées, quel cadre juridique les régit et quels modèles d'IA sont utilisés — en fonction de votre zone de confidentialité sélectionnée.

> **Qu'est-ce qu'une zone de confidentialité ?**  
> _Une région configurable (UE, États-Unis, Asie) qui détermine où vos données sont traitées et sous quel cadre juridique._

## Principes fondamentaux de confidentialité

### 1. **Modèle de responsabilité partagée**

- InterMind ne **possède ni n'exploite** l'infrastructure cloud sous-jacente ou les LLM (grands modèles de langage).
- Nous ne stockons pas vos fichiers multimédias, et nous ne traitons pas directement votre parole pour l'entraînement de modèles.
- Nous **contrôlons** le logiciel côté client, les règles de routage et la logique de conformité — y compris la région par laquelle transitent vos données, le modèle utilisé et dans quelles conditions.

### 2. **Transparence architecturale**

- Vous pouvez voir explicitement quelle région est active pour votre session, et quelles lois s'appliquent (par exemple RGPD en Europe, CCPA aux États-Unis, PDPL aux Émirats arabes unis).
- Chaque session fonctionne dans un **mode de conformité** désigné, et cette configuration est visible et vérifiable.

### 3. **Confidentialité par défaut**

- InterMind ne stocke **jamais** ni ne réutilise votre contenu pour l'entraînement, le profilage ou l'analyse commerciale.
- Nous ne conservons pas les transcriptions ou les médias sauf si vous le demandez explicitement.
- Si vous désactivez l'interprétation, **aucune donnée utilisateur ne quitte votre appareil**.

## Confidentialité basée sur les régions : comment cela fonctionne

Au début de chaque session, ou dans le cadre des paramètres de compte de votre organisation, vous pouvez sélectionner une zone de confidentialité préférée :

| Région        | Lois applicables                                                                               | Infrastructure                 | Fournisseurs LLM              |
| ------------- | --------------------------------------------------------------------------------------------- | ------------------------------ | -------------------------- |
| Europe        | [RGPD](https://gdpr.eu)                                                                       | Centres de données UE uniquement           | Hébergés en UE ou conformes UE  |
| États-Unis | [CCPA](https://oag.ca.gov/privacy/ccpa)                                                       | AWS / GCP / Azure (US)         | OpenAI US / Anthropic US   |
| EAU / MENA    | [PDPL](https://www.signzy.com/data-privacy-laws-in-the-uae-2025-everything-you-need-to-know/) | Cloud EAU ou Bahreïn           | LLM régionaux ou conformes |
| Asie / Chine  | Lois locales chinoises sur la confidentialité                                                                    | Alibaba, Huawei, Tencent Cloud | LLM basés en Chine uniquement      |

Ce choix détermine comment votre contenu vidéo, audio et interprété est traité et sous quelle juridiction.

Vous pouvez :

- **Définir une région par défaut** pour votre organisation
- **Remplacer la région par session**
- **Mettre certaines régions sur liste noire** entièrement

## Ce que InterMind garantit

Nous mettons en place des mesures de protection techniques et juridiques strictes dans notre domaine de contrôle :

### 1. **Exécution locale en priorité**

Les fonctions côté client telles que la capture vocale et le rendu de l'interface utilisateur sont traitées localement chaque fois que possible.

### 2. **Minimisation des données**

Seules les données minimales nécessaires à la tâche en cours sont transmises.

### 3. **Chiffrement de bout en bout**

Toutes les données audio/vidéo sont transmises via des canaux chiffrés. Les demandes d'interprétation sont acheminées via des proxies sécurisés, évitant l'exposition publique.

### 4. **Aucun stockage par défaut**

Nous ne stockons pas vos réunions, transcriptions ou conversations sauf si vous y consentez. Tout stockage est limité à la région.

## Conformité légale et réglementaire

InterMind prend en charge une compatibilité complète avec :

- **RGPD** — Droit d'accès, de suppression, d'exportation et de restriction du traitement. Aucun profilage par IA.
- **CCPA** — Aucune vente de données personnelles, options de désinscription et pratiques de collecte transparentes.
- **UAE PDPL** — Stockage local si demandé, contrôles d'accès stricts, aucun transfert international sans consentement.
- **China DSL/PIPL** — Traitement uniquement dans la région, aucun routage étranger si la Chine est sélectionnée.

## Ce que nous pouvons et ne pouvons pas garantir

Nous nous engageons à une transparence totale, pas seulement du jargon juridique.

> InterMind ne peut pas garantir la façon dont les LLM tiers ou les fournisseurs d'infrastructure traitent les données une fois qu'elles échappent à notre contrôle.

### Nous ne garantissons PAS :

- Qu'OpenAI, Anthropic, ou d'autres fournisseurs de LLM n'enregistrent ou ne conservent pas les données d'entrée.
- Que les hébergeurs cloud n'aient pas accès aux médias diffusés via leurs systèmes (sauf si vous utilisez une enclave sécurisée ou un déploiement d'entreprise).
- Que le contenu transmis à un modèle tiers soit en dehors de leur périmètre d'entraînement (sauf sous contrat privé).

### Nous garantissons :

- Vous savez toujours **où et comment** vos données sont traitées.
- Vous disposez d'outils pour **contrôler les risques** en sélectionnant votre région et votre mode de conformité.
- InterMind ne stocke **jamais** ni n'exploite votre contenu — même temporairement — sans votre consentement.

## Modes de confiance et niveaux de confidentialité

Vous pouvez personnaliser votre session pour répondre à vos besoins de confidentialité :

| Mode de confiance | Interprétation | Transfert inter-régional | Stockage           | Idéal pour                                    |
| ----------------- | -------------- | ------------------------ | ------------------ | --------------------------------------------- |
| 🔒 Local uniquement | ❌             | ❌                       | ❌                 | Juridique, gouvernement, examens internes    |
| 🔐 Verrouillé par région | ✅             | ✅ (dans la zone uniquement) | ❌ ou session uniquement | Santé, finance, RH                            |
| 🌐 Flexibilité globale | ✅             | ✅ (multi-régional)      | ✅                 | Support, ventes, équipes multinationales     |

## Ce que vous obtenez prêt à l'emploi

- Utilisation de LLM spécifique à la région, avec transparence en temps réel.
- Aucun entraînement ou profilage de votre contenu — jamais.
- Zéro transmission de données si l'interprétation est désactivée.
- Stockage de données optionnel, toujours limité à la région.
- Outils d'audit et d'export complets pour les clients entreprise.

## Conclusion

> La confidentialité n'est pas une promesse — c'est une architecture.

InterMind ne se cache pas derrière des assurances vagues. Au lieu de cela, nous vous donnons des **choix**, de la **visibilité** et du **contrôle**.

- Vous choisissez votre région.
- Vous choisissez votre niveau d'interprétation.
- Vous décidez du risque que vous êtes prêt à accepter — et nous vous aidons à rester conforme à chaque niveau.

**InterMind — conçu pour les professionnels, soutenu par la conformité, gouverné par la confiance.**