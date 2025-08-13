---
layout: home
title: "Traduction vocale en direct pour les appels vidéo"
isHome: true
---

<HeroSection title="Communiquez dans **Toutes** les Langues" :typingSpeed="10" text="Traduction vocale en direct pendant les **appels vidéo** — communication rapide, claire et sans frontières.">
<NavButton buttonLabel="Comment ça marche" buttonClass="brand" to="/#HowItWorks" />
<NavButton buttonLabel="Assistant" buttonClass="alt" to="/chat" />
</HeroSection>

<span id="1"></span>
<FeatureBlock
    :card="{
      title: 'Traduction ≠ Compréhension. Voici la suite.',
      details: 'Quelle que soit la langue, votre voix est entendue — et comprise — comme si vous parliez la même langue.',
      items: [
        '✧ Naturellement, en [temps réel](./product/overview/how-it-works), et sans sous-titres ni décalage.',
        '✧ L\'interprétation alimentée par l\'IA capture le ton, l\'intention et la terminologie spécifique à l\'industrie.',
      ],
      link: './product/overview/what-is-intermind',
      src: {
        light: '/media-kit/animals-cartoon-3-2.png',
        dark: '/1d.png',
      },
      inversion: false,
    }"
  />

<span id="2"></span>
<FeatureBlock
    :card="{
      title: 'L\'Intelligence au Cœur de Vos Réunions',
      details: 'InterMind transforme chaque appel multilingue en connaissances claires et consultables.',
      items: [
        '✧ **Posez n\'importe quelle question** — l\'IA trouve des réponses **dans toutes vos réunions**.',
        '✧ Extrait automatiquement les tâches, les responsables et les délais.',
        '✧ Résume les points clés dans n\'importe quelle langue — instantanément.',
      ],
      link: './product/overview/how-it-works#🧩-deep-memory-deep-understanding',
      src: {
        light: '/2l.png',
        dark: '/2d.png',
      },
      inversion: true,
    }"
  />

<span id="3"></span>
<FeatureBlock
    :card="{
      title: 'Conçu pour les Réunions Professionnelles — Pas Juste pour Parler',
      details: 'InterMind est une [plateforme de réunion vidéo professionnelle](./product/overview/video-meeting-platform), pas un simple module complémentaire ou plugin.',
      items: [
        '✧ Résolution 1080p, suppression intelligente du bruit, planification, modération, partage d\'écran, enregistrement, sous-titrage, chat entre participants et intégration du calendrier — tout est intégré, **prêt à l\'emploi**.',
      ],
      link: './product/overview/video-meeting-platform',
      src: {
        light: '/3l.mp4',
        dark: '/3d.mp4',
      },
      inversion: false,
    }"
  />

<span id="4"></span>
<FeatureBlock
    :card="{
      title: 'La Confidentialité Là Où Elle Compte',
      details: 'InterMind est conçu pour les conversations critiques en matière de confiance — où la confidentialité et le contrôle sont essentiels.',
      items: ['✧ [Zones de Confidentialité](./product/overview/privacy-architecture) — UE, États-Unis, Asie du Sud-Est', '✧ **Zéro entraînement de données**. Aucun accès tiers.'],
      link: './product/overview/privacy-architecture',
      src: {
        light: '/4l.png',
        dark: '/4d.png',
      },
      inversion: true,
    }"
  />

> [!tip] Pour qui est-ce ?  
> Conçu pour les **équipes internationales** où les barrières linguistiques causent des **retards**, des **opportunités manquées** ou des **malentendus coûteux**. [En savoir plus ...](./product/overview/markets)

## Fonctionne Comme Google Meet + Traduction En Direct

Interface familière. Communication universelle. Aussi simple que Google Meet — avec une traduction instantanée qui fait disparaître les barrières linguistiques.

<span id="HowItWorks"></span>

<FeatureCards
    :features="[
      {
        title: 'Inscrivez-vous gratuitement',
        details: 'Choisissez votre langue et [créez un compte](#Pricing).',
        icon: {
          light: '/signUp.png',
          dark: '/signUp.png',
        },
      },
      {
        title: 'Démarrez une réunion',
        details: 'Créez instantanément ou planifiez à l\'avance.',
        icon: {
          light: '/start.png',
          dark: '/start.png',
        },
      },
      {
        title: 'Rejoignez la réunion',
        details: 'Cliquez sur le lien, entrez votre nom, rejoignez instantanément.',
        icon: {
          light: '/join.png',
          dark: '/join.png',
        },
      },
      {
        title: 'Parlez votre langue',
        details: 'Chacun parle et entend dans sa propre langue.',
        icon: {
          light: '/meeting.png',
          dark: '/meeting.png',
        },
      },
    ]"
  />

<span id="Example"></span>

## Exemple : Comment fonctionne la traduction vocale en temps réel lors d'une réunion

Supposons que :

> L'utilisateur utilise **l'espagnol** comme **langue de localisation du site**. Il organise une réunion et invite deux participants :
>
> - 🧑‍💼 Le participant 1 utilise l'interface en **anglais**
> - 👩 Le participant 2 utilise l'interface en **chinois**

### Que se passe-t-il pendant la réunion ?

Chaque participant **parle et entend** dans la langue qu'il a sélectionnée en entrant dans le produit.  
Ce paramètre de langue unique s'applique à :

- La **langue de l'interface**
- **L'entrée vocale** (ce que vous dites)
- **La sortie traduite** (ce que vous entendez)

| Participant   | Langue Sélectionnée | Parle En | Entend En |
| ------------- | ------------------- | --------- | --------- |
| Hôte          | Espagnol           | Espagnol  | Espagnol  |
| Participant 1 | Anglais            | Anglais   | Anglais   |
| Participant 2 | Chinois            | Chinois   | Chinois   |

[La plateforme interprète automatiquement tous les discours en temps réel](./product/overview/how-it-works) — ainsi, tout le monde communique comme s'ils parlaient la même langue.

### Peut-on changer de langue pendant l'appel ?

Oui. Vous pouvez ouvrir les **Paramètres** et modifier le champ `Votre Langue` :

:::details Panneau des Paramètres
<img src="/settings.png" alt="panneau-parametres" width="300px" />
:::

Changer cela signifie :

- Vous devez parler dans la `langue choisie` pour une traduction précise
- Vous entendrez les autres dans la `langue choisie`
- L'interface basculera automatiquement vers la `langue choisie`

> 📌 Remarque : "Votre Langue" est un **paramètre unifié unique**  
> Il contrôle **comment vous parlez**, **ce que vous entendez** et **ce que vous voyez**.  
> Parler dans une langue et écouter dans une autre n'est **pas pris en charge** — par conception, pour garder l'expérience simple et prévisible.

## Prix Clairs et Simples

Du premier appel aux conversations fluides — à toute échelle.

<span id="Pricing"></span>

<PricingPlans
    :plans="[
      {
        title: '**Basic** &nbsp 1 utilisateur',
        price: '**Gratuit**',
        details: 'aucune carte bancaire requise',
        items: [
          '**25** réunions',
          '**100** participants en réunion vidéo [💬](#3)',
          '**30** Go de stockage mutualisé par utilisateur',
          'Recherche dans toutes vos réunions [💬](#2)',
          'Interprétation simultanée [💬](#1)',
        ],
      },
      {
        title: '**Pro** &nbsp 1-99 utilisateurs',
        price: '**20€** /mois/utilisateur, facturation annuelle',
        details: 'ou 25€ par mois',
        items: [
          'Réunions **illimitées**',
          '**150** participants en réunion vidéo [💬](#3)',
          '**2** To de stockage mutualisé par utilisateur',
          'Recherche dans toutes vos réunions [💬](#2)',
          'Interprétation simultanée [💬](#1)',
        ],
      },
      {
        title: '**Business** &nbsp 100+ utilisateurs',
        price: '**Prix personnalisé**',
        details: 'Conçu pour la confidentialité',
        items: [
          'Réunions **illimitées**',
          '**500** participants en réunion vidéo [💬](#3)',
          '**5** To de stockage mutualisé par utilisateur',
          'Recherche dans toutes vos réunions [💬](#2)',
          'Interprétation simultanée [💬](#1)',
          '**Zones de confidentialité** [💬](#4)',
        ],
      },
    ]">
<AuthButton text="Essayer gratuitement" buttonClass="brand" eventName="try_it_attempt" />
<AuthButton text="Acheter maintenant" buttonClass="alt" mode="checkout" eventName="buy_now_attempt" />
<ContactForm buttonText="Parler à notre équipe" buttonClass="alt" />
</PricingPlans>

> [!warning] 😱 Soit vous parlez toutes les langues — soit quelqu\'un d\'autre conclut vos affaires.

<span id="Testimonials"></span>

## Ce Que Disent Nos Clients

<AutoScrollTestimonials testimonialsUrl="/testimonials.json"/>

> [!tip] 🥇 Votre temps est mieux investi à maîtriser votre art — pas à mémoriser la grammaire.

## Questions Fréquemment Posées

<span id="FAQ"></span>

<AccordionGroup
    :items="[
      {
        q: 'Quelles langues InterMind prend-il en charge pour l\'interprétation ?',
        a: 'InterMind prend en charge **l\'interprétation en temps réel** dans les 19 langues suivantes :<br><br>- العربية (ar) – Arabe<br>- Čeština (cs) – Tchèque<br>- Deutsch (de) – Allemand<br>- English (en) – Anglais<br>- Español (es) – Espagnol<br>- Français (fr) – Français<br>- हिन्दी (hi) – Hindi<br>- Magyar (hu) – Hongrois<br>- Italiano (it) – Italien<br>- 日本語 (ja) – Japonais<br>- 한국어 (ko) – Coréen<br>- Nederlands (nl) – Néerlandais<br>- Polski (pl) – Polonais<br>- Português (pt) – Portugais<br>- Русский (ru) – Russe<br>- Türkçe (tr) – Turc<br>- 中文 (zh) – Chinois<br><br>Nous élargissons continuellement cette liste — de nouvelles langues sont ajoutées à chaque version majeure.',
      },
      {
        q: 'Quelle est la différence entre un utilisateur licencié et un participant ?',
        a: 'Un *utilisateur licencié* dispose d\'une licence de réunion gratuite ou payante et peut planifier des réunions dans les limites de son forfait. Les *participants* sont les invités — ils **n\'ont pas besoin de compte ni de licence** pour rejoindre et peuvent se connecter depuis n\'importe quel appareil **gratuitement**.',
      },
      {
        q: 'Combien de personnes peuvent utiliser une licence InterMind ?',
        a: 'Chaque *utilisateur licencié* peut organiser des **réunions illimitées**. Si plusieurs membres de l\'équipe doivent organiser des réunions simultanément, chacun aura besoin de sa propre licence.',
      },
      {
        q: 'Quelle est la durée maximale d\'une réunion ?',
        a: 'Les réunions peuvent durer jusqu\'à **24 heures** sur tous les forfaits.',
      },
      {
        q: 'Y a-t-il une limite au nombre de réunions que je peux organiser ?',
        a: 'Le forfait *Free Basic* inclut **25 réunions gratuites**. Les forfaits *Pro* et *Business* offrent des réunions illimitées avec plus de participants et de contrôle.',
      },
      {
        q: 'Comment InterMind assure-t-il la confidentialité et la sécurité des données ?',
        a: 'InterMind est **privé par conception**. Toutes les données sont traitées et stockées dans votre **Zone de Confidentialité** sélectionnée — _UE_, _États-Unis_ ou _Asie_. Nous respectons le [**RGPD**](https://gdpr.eu), le [**CCPA**](https://oag.ca.gov/privacy/ccpa) et l\'UAE PDPL, et **n\'utilisons jamais votre contenu** pour la formation ou l\'accès tiers. Le contrôle avancé de la [Zone de Confidentialité](./product/overview/privacy-architecture) est disponible sur le forfait **Business**.',
      },
      {
        q: 'Puis-je essayer InterMind avant d\'acheter un forfait ?',
        a: 'Absolument. Le forfait *Free Basic* vous donne un accès complet aux fonctionnalités de base avec **25 réunions gratuites** — y compris **l\'interprétation simultanée** et la **recherche de réunions**. Pas de carte de crédit requise. Possibilité de mise à niveau à tout moment.',
      },
      {
        q: 'Que faire si j\'ai besoin d\'aide ou de support ?',
        a: 'Le support est disponible via notre [centre d\'aide](./resources/help). Les utilisateurs *Business* bénéficient d\'un **support prioritaire** avec un contact dédié.',
      },
      {
        q: 'Comment gérer mon abonnement (mise à niveau, rétrogradation ou annulation) ?',
        a: 'Vous pouvez modifier votre forfait à tout moment via vos **paramètres de compte**. Les modifications prennent effet **immédiatement**. Pour les annulations, les *forfaits mensuels* sont annulés à la fin du cycle de facturation. Les *forfaits annuels* peuvent être annulés avec un **remboursement au prorata**.',
      },
      {
        q: 'Puis-je utiliser InterMind pour des webinaires ou de grands événements ?',
        a: 'Oui. Les forfaits *Pro* et *Business* sont idéaux pour les **grandes réunions et webinaires** — avec prise en charge jusqu\'à **500 participants** sur *Business*.',
      },
    ]"/>

<HomeFooter
    :columns="[
      {
        title: 'PRODUIT',
        links: [
          { text: 'Overview', link: './product/overview/what-is-intermind' },
          { text: 'Getting Started', link: './product/guide/getting-started' },
          { text: 'Testimonials', link: '#testimonials' },
          { text: 'Pricing', link: '#Pricing' },
        ],
      },
      {
        title: 'SUPPORT',
        links: [
          { text: 'Get Support', link: './resources/help' },
          { text: 'FAQ', link: '#FAQ' },
          { text: 'Privacy Policy', link: './resources/company/Privacy-Policy' },
          { text: 'AI Legal Guide', link: './resources/company/Legal-Regulations-for-AI-Services' },
          { text: 'Service Status', link: 'https://status.mind.com/' },
        ],
      },
      {
        title: 'RESSOURCES',
        links: [
          { text: 'Blog', link: './blog' },
          { text: 'Brand Assets', link: './resources/media-kit' },
          { text: 'AI API / LLM Docs', link: 'https://mind.com/llms-full.txt' },
        ],
      },
      {
        title: 'ENTREPRISE',
        links: [
          { text: 'About', link: './resources/company/about' },
          { text: 'Team', link: './resources/company/team' },
          { text: 'Contacts', link: './resources/company/contacts' },
        ],
      },
    ]"/>