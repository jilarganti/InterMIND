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
text="Sprechen Sie in Ihrer Muttersprache. Hören Sie alle anderen – als ob sie diese auch sprechen würden.">

<AuthButton text="Hören Sie den Unterschied" buttonClass="brand"/>
<!-- <ContactFormModalNav buttonText="Demo anfordern"/>
<NavButton to="#pricing" buttonClass="alt" buttonLabel="Preise" /> -->
</HeroSection>

> **Für wen ist das?**  
> Entwickelt für **globale Teams**, bei denen Sprachbarrieren zu Verzögerungen, verlorenen Geschäften oder kostspieligen Missverständnissen führen. Erfahren Sie mehr in unserem [Markets](./product/markets) Bereich.

<span id="1"></span>
<FeatureBlock :card="{
  title: 'Übersetzung ≠ Verständnis. Das ist der nächste Schritt.',
  details: 'Egal in welcher Sprache, **Ihre Stimme wird gehört — und verstanden** — als ob Sie die gleiche Sprache sprechen würden.',
    items: [
      '⚡︎ Natürlich, in [Echtzeit](/product/how-it-works), und ohne Untertitel oder Verzögerung.',
      '✧ KI-gestützte Dolmetschung erfasst Tonfall, Absicht und branchenspezifische Terminologie.',
    ],
  link: './product/what-is-intermind',
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
    link: '/product/how-it-works#🧩-deep-memory-deep-understanding',
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
    link: '/product/how-it-works',
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
      '⚡︎ [Regionsbasierter Datenschutz](/product/privacy-architecture) — EU, USA, SO-Asien',
      '✧ **Kein Datentraining**. Kein Zugriff durch Dritte.'
    ],
    link: '/product/privacy-architecture',
    src: {
      light: '/4.png',
      dark: '/4.png',
    },
    inversion: true
  }"
/>

<span id="Pricing"></span>

## Klare und einfache Preisgestaltung

Wählen Sie den Plan, der Ihre Sprache spricht. Von Untertiteln bis zur vollständigen Dolmetschung – wachsen Sie mit Ihrem Team.

<PricingPlans :plans="[
  {
    title: '**Basic** 1 Benutzer',
    price: '**Kostenlos**',
    details: '25 kostenlose Meetings',
    items: [
      '100 Teilnehmer Videomeetings [💬](#3)',
      '30GB gemeinsamer Speicher pro Benutzer',
      'KI-Meeting-Assistent für Notizen & Zusammenfassungen [💬](#2)',
      '**Simultandolmetschen** [💬](#1)',
    ],
  },
  {
    title: '**Pro** 1-99 Benutzer',
    price: '**20€** /Monat/Benutzer, jährlich abgerechnet',
    details: 'oder 25€ monatlich abgerechnet',
    items: [
      '150 Teilnehmer Videomeetings [💬](#3)',
      '2TB gemeinsamer Speicher pro Benutzer',
      'KI-Meeting-Assistent für Notizen & Zusammenfassungen [💬](#2)',
      '**Simultandolmetschen** [💬](#1)',
    ],
  },
  {
    title: '**Business** 1-250 Benutzer',
    price: '**Individueller Preis**',
    details: 'Entwickelt für Datenschutz',
    items: [
      '500 Teilnehmer Videomeetings [💬](#3)',
      '5TB gemeinsamer Speicher pro Benutzer',
      'KI-Meeting-Assistent für Notizen & Zusammenfassungen [💬](#2)',
      '**Simultandolmetschen** [💬](#1)',
      '**Regionsbasiertes Privacy-Routing** (EU / US / Asien) [💬](#4)',
      '**KI-Kollege**. Sieht menschlich aus. Klingt natürlich. (⍺-Version)',
    ],
  }
]">
<AuthButton text="Kostenlos testen" buttonClass="alt"/>
<AuthButton text="Jetzt kaufen" buttonClass="brand"/>
<ContactFormModalNav buttonText="Sprechen Sie mit unserem Team" buttonClass="alt"/>
</PricingPlans>

<span id="FAQ"></span>

## Häufig gestellte Fragen

<AccordionGroup :items="
[
  {
    q: 'Was ist ein lizenzierter Benutzer und was ist ein Teilnehmer?',
    a: 'Ein *lizenzierter Benutzer* hat eine kostenlose oder kostenpflichtige Meeting-Lizenz und kann Meetings innerhalb der Grenzen seines Plans planen. *Teilnehmer* sind Eingeladene — sie **benötigen kein Konto oder Lizenz** zum Beitreten und können sich von jedem Gerät aus **kostenlos** verbinden.'
  },
  {
    q: 'Wie viele Teilnehmer können einem Meeting beitreten?',
    a: 'Das hängt von Ihrem Plan ab: *Basic* unterstützt bis zu **100 Teilnehmer**, *Pro* bis zu **150** und *Business* bis zu **500**.'
  },
  {
    q: 'Wie viele Personen können eine InterMind-Lizenz nutzen?',
    a: 'Jeder *lizenzierte Benutzer* kann **unbegrenzt viele Meetings** hosten. Wenn mehrere Teammitglieder gleichzeitig Meetings hosten müssen, benötigt jeder seine eigene Lizenz.'
  },
  {
    q: 'Funktioniert die Sprachdolmetschung in allen Plänen?',
    a: 'Ja, *Sprachdolmetschung* ist in allen Plänen verfügbar. Bei *Basic* funktioniert sie **nur mit Untertiteln**. *Pro* und *Business* schalten die vollständige **bidirektionale Sprache-zu-Sprache-Dolmetschung**, mehr Kapazität und erweiterte Funktionen frei.'
  },
  {
    q: 'Wie lange kann ein Meeting maximal dauern?',
    a: 'Meetings können in allen Plänen bis zu **24 Stunden** dauern.'
  },
  {
    q: 'Kann ich Meetings aufzeichnen?',
    a: 'Ja, alle Pläne unterstützen **Meeting-Aufzeichnungen**. Aufzeichnungen werden sicher in Ihrem Konto gespeichert und sind jederzeit zugänglich.'
  },
  {
    q: 'Gibt es eine Begrenzung für die Anzahl der Meetings, die ich hosten kann?',
    a: 'Nein. Sie können **unbegrenzt viele Meetings** hosten — selbst im *kostenlosen Basic-Plan*. *Pro* und *Business* Pläne bieten mehr Leistung, Teilnehmer und Kontrolle.'
  },
  {
    q: 'Was ist, wenn ich mehr Speicherplatz für Aufzeichnungen benötige?',
    a: '*Pro* enthält **2 TB** gemeinsamen Speicherplatz pro Benutzer. *Business* bietet **5 TB**. Benötigen Sie mehr? **Kontaktieren Sie uns** für individuelle Optionen.'
  },
  {
    q: 'Wie gewährleistet InterMind Datenschutz und Sicherheit?',
    a: 'InterMind ist **von Grund auf privat**. Alle Daten werden in Ihrer ausgewählten Region verarbeitet und gespeichert — *EU, USA oder Asien*. Wir erfüllen **DSGVO, CCPA und UAE PDPL** und **verwenden Ihre Inhalte niemals** für Training oder Zugriff durch Dritte.'
  },
  {
    q: 'Kann ich InterMind vor dem Kauf eines Plans testen?',
    a: 'Absolut. Der *kostenlose Basic-Plan* gibt Ihnen vollen Zugriff auf Kernfunktionen — einschließlich **mehrsprachiger Meetings**, **Untertitel** und einem **KI-Assistenten**. Keine Kreditkarte, **keine zeitliche Begrenzung**. Upgrade jederzeit möglich.'
  },
  {
    q: 'Was ist, wenn ich Hilfe oder Support benötige?',
    a: 'Support ist über unser **Hilfecenter**, **E-Mail** und **Live-Chat** verfügbar. *Business*-Nutzer erhalten **Priority-Support** mit einem persönlichen Ansprechpartner.'
  },
  {
    q: 'Kann ich mein Abonnement jederzeit kündigen?',
    a: 'Ja. *Monatspläne* enden zum Ende des Abrechnungszeitraums. *Jahrespläne* können gegen eine **anteilige Rückerstattung** gekündigt werden.'
  },
  {
    q: 'Wie kann ich meinen Plan upgraden oder downgraden?',
    a: 'Sie können Ihren Plan jederzeit über Ihre **Kontoeinstellungen** ändern. Änderungen werden **sofort** wirksam.'
  },
  {
    q: 'Welche Sprachen unterstützt InterMind für die Sprachdolmetschung?',
    a: 'Wir unterstützen **über 100 Sprachen** mit Echtzeit-Sprachdolmetschung. Die Liste wächst stetig — aktuelle Updates finden Sie auf unserer Website.'
  },
  {
    q: 'Kann ich InterMind für Webinare oder große Veranstaltungen nutzen?',
    a: 'Ja. *Pro* und *Business* Pläne sind ideal für **große Meetings und Webinare** — mit Unterstützung für bis zu **500 Teilnehmer** im *Business*-Plan.'
  }
]
"/>

<span id="Testimonials"></span>

## Was unsere Kunden sagen

<AutoScrollTestimonials testimonialsUrl="/testimonials.json"/>