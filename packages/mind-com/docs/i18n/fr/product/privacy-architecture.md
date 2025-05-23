# Confidentialité Régionale des Données pour les Réunions d'IA

## Introduction

InterMind est une plateforme de réunions vidéo multilingues avec interprétation en direct alimentée par l'IA. Nous sommes conçus pour les professionnels — où non seulement le message compte, mais aussi la confidentialité de ce message.

> [!tip] Interprétation en temps réel. Compréhension de niveau natif. Pas de sous-titres. Pas de latence.

Pour offrir une expérience fluide, InterMind intègre des services tiers pour la vidéo, l'audio, le stockage cloud, l'interprétation en temps réel et l'analyse. Ces fournisseurs tiers nous aident à garantir la performance et l'évolutivité — mais ils introduisent également une couche que nous ne pouvons pas contrôler directement.

Nous croyons en la **transparence plutôt qu'aux promesses**. Nous ne pouvons garantir la confidentialité et la sécurité que pour les composants sous notre contrôle direct — notre logiciel, la logique d'interface et la façon dont nous acheminons les données. Pour tout le reste, nous vous offrons **le pouvoir de choix**.

C'est pourquoi nous avons conçu InterMind avec une **confidentialité basée sur les régions** : vous choisissez où vos données sont traitées, quel cadre juridique les régit et quels modèles d'IA sont utilisés — en fonction de votre zone de confidentialité sélectionnée.

## Principes Fondamentaux de la Confidentialité

### 1. **Modèle de Responsabilité Partagée**

- InterMind **ne possède ni n'exploite** l'infrastructure cloud sous-jacente ou les LLMs (modèles de langage).
- Nous ne stockons pas vos fichiers multimédia et ne traitons pas directement votre parole pour l'entraînement des modèles.
- Nous **contrôlons** le logiciel côté client, les règles de routage et la logique de conformité — y compris la région par laquelle transitent vos données, le modèle utilisé et les conditions applicables.

### 2. **Transparence Architecturale**

- Vous pouvez voir explicitement quelle région est active pour votre session et quelles lois s'appliquent (par exemple, GDPR en Europe, CCPA aux États-Unis, PDPL aux EAU).
- Chaque session fonctionne dans un **mode de conformité** désigné, et cette configuration est visible et vérifiable.

### 3. **Confidentialité par Défaut**

- InterMind **ne stocke jamais** ni ne réutilise votre contenu pour l'entraînement, le profilage ou l'analyse commerciale.
- Nous ne conservons pas les transcriptions ou les médias, sauf si vous le demandez explicitement.
- Si vous désactivez l'interprétation, **aucune donnée utilisateur ne quitte votre appareil**.

## Confidentialité par région : Comment ça fonctionne

Au début de chaque session, ou dans le cadre des paramètres de compte de votre organisation, vous pouvez sélectionner une zone de confidentialité préférée :

| Région        | Lois applicables                                                                               | Infrastructure                    | Fournisseurs LLM           |
| ------------- | --------------------------------------------------------------------------------------------- | --------------------------------- | -------------------------- |
| Europe        | [GDPR](https://gdpr.eu)                                                                        | Centres de données UE uniquement  | Hébergés UE ou conformes UE|
| United States | [CCPA](https://oag.ca.gov/privacy/ccpa)                                                        | AWS / GCP / Azure (US)            | OpenAI US / Anthropic US   |
| UAE / MENA    | [PDPL](https://www.signzy.com/data-privacy-laws-in-the-uae-2025-everything-you-need-to-know/) | Cloud UAE ou Bahreïn              | LLMs régionaux ou conformes|
| Asie / Chine  | Lois chinoises locales sur la confidentialité                                                 | Alibaba, Huawei, Tencent Cloud    | LLMs basés en Chine uniquement |

Ce choix détermine comment vos vidéos, audios et contenus interprétés sont traités et à travers quelle juridiction.

Vous pouvez :

- **Définir une région par défaut** pour votre organisation
- **Remplacer la région par session**
- **Mettre certaines régions sur liste noire** complètement

## Les Garanties d'InterMind

Nous mettons en œuvre des mesures de protection techniques et juridiques strictes dans notre domaine de contrôle :

### 1. **Exécution Locale en Priorité**

Les fonctions côté client telles que la capture vocale et le rendu de l'interface utilisateur sont gérées localement dans la mesure du possible.

### 2. **Minimisation des Données**

Seules les données minimales nécessaires à la tâche en cours sont transmises.

### 3. **Chiffrement de Bout en Bout**

Toutes les données audio/vidéo sont transmises via des canaux chiffrés. Les demandes d'interprétation sont acheminées via des proxys sécurisés, évitant toute exposition publique.

### 4. **Pas de Stockage par Défaut**

Nous ne stockons pas vos réunions, transcriptions ou conversations sauf si vous l'autorisez explicitement. Tout stockage est limité à la région.

## Conformité Légale et Réglementaire

InterMind garantit une compatibilité totale avec :

- **GDPR** — Droit d'accès, de suppression, d'exportation et de limitation du traitement. Pas de profilage par IA.
- **CCPA** — Pas de vente de données personnelles, options de désactivation et pratiques de collecte transparentes.
- **UAE PDPL** — Stockage local sur demande, contrôles d'accès stricts, pas de transferts internationaux sans consentement.
- **China DSL/PIPL** — Traitement uniquement dans la région, pas d'acheminement à l'étranger si la Chine est sélectionnée.

## Ce Que Nous Pouvons et Ne Pouvons Pas Garantir

Nous nous engageons à une honnêteté totale, pas seulement à un langage juridique.

> InterMind **ne peut pas garantir** comment les LLMs tiers ou les fournisseurs d'infrastructure traitent les données une fois qu'elles quittent notre contrôle.

### Nous NE garantissons PAS :

- Qu'OpenAI, Anthropic ou d'autres fournisseurs de LLM ne journaliseront pas ou ne conserveront pas les données d'entrée.
- Que les hébergeurs cloud n'ont pas accès aux médias diffusés via leurs systèmes (sauf si vous utilisez une enclave sécurisée ou un déploiement entreprise).
- Que le contenu transmis à un modèle tiers est en dehors de leur portée d'entraînement (sauf sous contrat privé).

### Nous garantissons :

- Vous savez toujours **où et comment** vos données sont traitées.
- Vous disposez d'outils pour **contrôler les risques** en sélectionnant votre région et votre mode de conformité.
- InterMind ne stocke et n'exploite **jamais** votre contenu — même temporairement — sans votre consentement.

## Modes de Confiance & Niveaux de Confidentialité

Vous pouvez personnaliser votre session selon vos besoins en confidentialité :

| Mode de Confiance | Interprétation | Transfert Inter-Régions | Stockage           | Idéal Pour                                    |
| ---------------- | -------------- | ----------------------- | ------------------ | --------------------------------------------- |
| 🔒 Local Uniquement | ❌             | ❌                      | ❌                 | Juridique, gouvernement, examens internes     |
| 🔐 Verrouillé par Région | ✅      | ✅ (dans la zone uniquement) | ❌ ou session uniquement | Santé, finance, RH                   |
| 🌐 Flexibilité Globale | ✅         | ✅ (multi-régions)      | ✅                 | Support, ventes, équipes multinationales      |

## Ce Que Vous Obtenez Directement

- Utilisation des LLM spécifique à chaque région, avec transparence en temps réel.
- Aucun entraînement ni profilage de votre contenu — jamais.
- Zéro transmission de données si l'interprétation est désactivée.
- Stockage de données optionnel, toujours limité à la région.
- Outils complets d'audit et d'exportation pour les clients entreprise.

## Conclusion

> [!note] La confidentialité n'est pas une promesse — c'est une architecture.

InterMind ne se cache pas derrière des assurances vagues. Au lieu de cela, nous vous donnons des **choix**, de la **visibilité** et du **contrôle**.

- Vous choisissez votre région.
- Vous choisissez votre niveau d'interprétation.
- Vous décidez du risque que vous êtes prêt à accepter — et nous vous aidons à rester conforme à chaque niveau.

**InterMind — conçu pour les professionnels, soutenu par la conformité, gouverné par la confiance.**