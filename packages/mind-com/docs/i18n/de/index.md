---
layout: home
title: "Videoanrufe mit simultaner Dolmetschung"

isHome: true
---

<!-- text="Videoanrufe mit simultaner Sprachübersetzung." -->
<!-- text="Klassenzimmer brauchen Jahre; InterMind liefert heute Echtzeitverständigung in jeder Sprache." -->
<!-- text="**Mehrsprachige** Videomeetings mit **Sprach**-Dolmetschung" -->
<!-- title="Live-**Dolmetschung** Videomeetings" -->

<HeroSection
title="Treffen Sie sich in **jeder** Sprache"
text="Sprechen Sie in Ihrer Muttersprache. Hören Sie alle anderen — als ob sie diese auch sprechen würden.">

<AuthButton text="Hören Sie den Unterschied" buttonClass="brand"/>
<!-- <ContactFormModalNav buttonText="Demo anfordern"/>
<NavButton to="#pricing" buttonClass="alt" buttonLabel="Preise" /> -->
</HeroSection>

> **Für wen ist das?**  
> Entwickelt für **globale Teams**, bei denen Sprachbarrieren zu Verzögerungen, verlorenen Geschäften oder kostspieligen Missverständnissen führen. Erfahren Sie mehr in unserem [Markets](./product/overview/markets) Bereich.

<span id="1"></span>
<FeatureBlock :card="{
  title: 'Übersetzung ≠ Verständnis. Das ist der nächste Schritt.',
  details: 'Egal in welcher Sprache, **Ihre Stimme wird gehört — und verstanden** — als ob Sie die gleiche Sprache sprechen würden.',
    items: [
      '⚡︎ Natürlich, in [Echtzeit](./product/overview/how-it-works), und ohne Untertitel oder Verzögerung.',
      '✧ KI-gestützte Dolmetschung erfasst Tonfall, Absicht und branchenspezifische Terminologie.',
    ],
  link: './product/overview/what-is-intermind',
  src: {
    light: '/1.png',
    dark: '/1.png',
  },
  inversion: false
}" />

<span id="2"></span>
<FeatureBlock :card="{
    title: 'Der Verstand in Ihren Meetings',
    details: 'InterMind verwandelt jeden mehrsprachigen Anruf in klares, durchsuchbares Wissen.',
    items: [
      '🔍 **Fragen Sie alles** — KI findet Antworten **in all Ihren Meetings**.',
      '✧ Extrahiert automatisch Aufgaben, Verantwortliche und Fristen.',
      '✧ Fasst Kernpunkte in jeder Sprache sofort zusammen.',
    ],
    link: './product/overview/how-it-works#🧩-deep-memory-deep-understanding',
    src: {
      light: '/2l.png',
      dark: '/2d.png',
    },
    inversion: true
  }" />

<span id="3"></span>
<FeatureBlock :card="{
    title: 'Entwickelt für professionelle Meetings — nicht nur zum Plaudern',
    details: 'InterMind ist eine **professionelle Videomeeting-Plattform**, kein einfaches Add-on oder Plugin.',
    items: [
      '✧ 1080p Auflösung, intelligente Geräuschunterdrückung, Terminplanung, Moderation, Bildschirmfreigabe, Aufnahme, Untertitelung, Teilnehmer-Chat und Kalenderintegration — alles eingebaut und sofort einsatzbereit.',
    ],
    link: './product/overview/how-it-works',
    src: {
      light: '/3.png',
      dark: '/3.png',
    },
    inversion: false
  }" />

<span id="4"></span>
<FeatureBlock
  :card="{
    title: 'Datenschutz wo er wichtig ist',
    details:
      'InterMind ist für vertrauenskritische Gespräche entwickelt — wo Privatsphäre und Kontrolle am wichtigsten sind.',
    items: [
      '⚡︎ [Regionsbasiertes Privacy-Routing](./product/overview/privacy-architecture) — EU, USA, SO-Asien',
      '✧ **Kein Datentraining**. Kein Zugriff durch Dritte.'
    ],
    link: './product/overview/privacy-architecture',
    src: {
      light: '/4.png',
      dark: '/4.png',
    },
    inversion: true
  }"
/>

<span id="Pricing"></span>

## Klare und einfache Preisgestaltung

Von ersten Gesprächen bis zu fließenden Unterhaltungen — in jedem Umfang.

<PricingPlans :plans="[
  {
    title: '**Basic** 1 Benutzer',
    price: '**Kostenlos**',
    details: '25 kostenlose Meetings',
    items: [
      '**100** Teilnehmer Videomeetings [💬](#3)',
      '**30** GB gemeinsamer Speicher pro Benutzer',
      'Suche in allen Ihren Meetings [💬](#2)',
      'Simultanübersetzung [💬](#1)',
    ],
  },
  {
    title: '**Pro** 1-99 Benutzer',
    price: '**20€** /Monat/Benutzer, jährlich abgerechnet',
    details: 'oder 25€ monatlich abgerechnet',
    items: [
      '**150** Teilnehmer Videomeetings [💬](#3)',
      '**2** TB gemeinsamer Speicher pro Benutzer',
      'Suche in allen Ihren Meetings [💬](#2)',
      'Simultanübersetzung [💬](#1)',
    ],
  },
  {
    title: '**Business** 1-250 Benutzer',
    price: '**Individuelle Preisgestaltung**',
    details: 'Entwickelt für Datenschutz',
    items: [
      '**500** Teilnehmer Videomeetings [💬](#3)',
      '**5** TB gemeinsamer Speicher pro Benutzer',
      'Suche in allen Ihren Meetings [💬](#2)',
      'Simultanübersetzung [💬](#1)',
      '**Regionsbasiertes Privacy-Routing** [💬](#4)',
      '**KI-Kollege**. Sieht menschlich aus. Klingt natürlich. (⍺-Version)',
    ],
  }
]">
<AuthButton text="Kostenlos testen" buttonClass="alt"/>
<AuthButton text="Jetzt kaufen" buttonClass="brand"/>
<ContactFormModalNav buttonText="Sprechen Sie mit unserem Team" buttonClass="alt"/>
</PricingPlans>

<span id="Testimonials"></span>

## Was unsere Kunden sagen

<AutoScrollTestimonials testimonialsUrl="/testimonials.json"/>

<span id="FAQ"></span>

## Häufig gestellte Fragen

<AccordionGroup :items="
[
  {
    q: 'Was ist ein Lizenzierter Benutzer und was ist ein Teilnehmer?',
    a: 'Ein *lizenzierter Benutzer* hat eine kostenlose oder bezahlte Meeting-Lizenz und kann Meetings innerhalb der Grenzen seines Plans planen. *Teilnehmer* sind Eingeladene — sie **benötigen kein Konto oder Lizenz** zur Teilnahme und können sich von jedem Gerät aus **kostenlos** verbinden.'
  },
  {
    q: 'Wie viele Personen können eine InterMind-Lizenz nutzen?',
    a: 'Jeder *lizenzierte Benutzer* kann **unbegrenzt Meetings** hosten. Wenn mehrere Teammitglieder gleichzeitig Meetings hosten müssen, benötigt jeder seine eigene Lizenz.'
  },
  {
    q: 'Wie lange kann ein Meeting maximal dauern?',
    a: 'Meetings können in allen Plänen bis zu **24 Stunden** dauern.'
  },
  {
    q: 'Gibt es eine Begrenzung für die Anzahl der Meetings, die ich hosten kann?',
    a: 'Der *Free Basic* Plan enthält **25 kostenlose Meetings**. *Pro* und *Business* Pläne bieten unbegrenzte Meetings mit mehr Teilnehmern und Kontrolle.'
  },
  {
    q: 'Wie gewährleistet InterMind Datenschutz und Sicherheit?',
    a: 'InterMind ist **von Grund auf privat**. Alle Daten werden in Ihrer ausgewählten Region verarbeitet und gespeichert — *EU, USA oder Asien*. Wir erfüllen **GDPR, CCPA und UAE PDPL** und **verwenden Ihre Inhalte nie** für Training oder Zugriff durch Dritte. **Regionsbasiertes Privacy-Routing** ist im *Business* Plan verfügbar.'
  },
  {
    q: 'Kann ich InterMind vor dem Kauf eines Plans testen?',
    a: 'Absolut. Der *Free Basic* Plan gibt Ihnen vollen Zugriff auf Kernfunktionen mit **25 kostenlosen Meetings** — einschließlich **Simultandolmetschen** und **Meeting-Suche**. Keine Kreditkarte erforderlich. Upgrade jederzeit möglich.'
  },
  {
    q: 'Was passiert, wenn ich Hilfe oder Support benötige?',
    a: 'Support ist über unser **Hilfecenter**, **E-Mail** und **Live-Chat** verfügbar. *Business*-Nutzer erhalten **Priority-Support** mit einem persönlichen Ansprechpartner.'
  },
  {
    q: 'Wie verwalte ich mein Abonnement (Upgrade, Downgrade oder Kündigung)?',
    a: 'Sie können Ihren Plan jederzeit über Ihre **Kontoeinstellungen** ändern. Änderungen treten **sofort** in Kraft. Bei Kündigungen enden *Monatspläne* am Ende des Abrechnungszeitraums. *Jahrespläne* können gegen **anteilige Rückerstattung** gekündigt werden.'
  },
  {
    q: 'Welche Sprachen unterstützt InterMind für Dolmetschen?',
    a: 'Wir unterstützen **über 100 Sprachen** mit Echtzeit-Dolmetschen. Die Liste wächst stetig — aktuelle Updates finden Sie auf unserer Website.'
  },
  {
    q: 'Kann ich InterMind für Webinare oder große Veranstaltungen nutzen?',
    a: 'Ja. *Pro* und *Business* Pläne sind ideal für **große Meetings und Webinare** — mit Unterstützung für bis zu **500 Teilnehmer** im *Business* Plan.'
  }
]
"/>