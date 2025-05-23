---
layout: home
title: "KI-Sprachübersetzer für Live-Videoanrufe"
description: "Mehrsprachige Meetings brauchen kein Zoom, keine Plugins oder Dolmetscher. InterMind ist ein KI-Sprachübersetzer für Echtzeit-Videoanrufe — sprechen und sofort übersetzen."
isHome: true
---

<!-- text="Konzentrieren Sie sich auf Wachstum — lassen Sie InterMind die Sprachen handhaben." -->
<!-- text="Klassenzimmer brauchen Jahre; InterMind liefert heute Echtzeitverständigung in jeder Sprache." -->
<!-- text="Sofortiges Verstehen — ohne Fremdsprachen zu lernen" -->
<!-- title="Live **Dolmetsch** Videomeetings" -->

<HeroSection
title="**Mehrsprachige** Videomeetings mit **Sprach**-Dolmetschung"
text="Für Unternehmen, bei denen **Sprachbarrieren** verlorene Geschäfte, Verzögerungen und kostspielige Fehler bedeuten.">

<AuthButton text="Kostenlos testen" buttonClass="brand"/>
<!-- <ContactFormModalNav buttonText="Demo anfordern"/>
<NavButton to="#pricing" buttonClass="alt" buttonLabel="Preise" /> -->
</HeroSection>

<span id="1"></span>
<FeatureBlock :card="{
  title: 'Sprechen Sie sofort in über 100 Sprachen',
  details: 'InterMind ermöglicht es jedem Teilnehmer, in seiner Muttersprache zu sprechen — natürlich, in [Echtzeit](/product/how-it-works) und ohne Untertitel oder Verzögerungen.',
    items: [
      '✧ Sprechen Sie frei — werden Sie sofort verstanden.',
      '✧ KI-gestützte Dolmetschung erfasst Tonfall, Absicht und branchenspezifische Terminologie.',
      '⚡︎ Beidseitige, kontinuierliche **Sprache-zu-Sprache-Dolmetschung** ohne manuelle Einrichtung.',
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
    title: 'Entwickelt für professionelle Meetings — nicht nur zum Plaudern',
    details: 'InterMind ist eine professionelle Videomeeting-Plattform, kein einfaches Add-on oder Plugin.',
    items: [
      '✧ 1080p Auflösung, intelligente Geräuschunterdrückung und fokussierte Sprachaufnahme.',
      '✧ Terminplanung, Moderation, Demos, Aufzeichnung und vollständige Kalenderintegration — alles eingebaut und sofort einsatzbereit. Meetings können bis zu 24 Stunden dauern.',
      '⚡︎ Live-Transkripte, Teilnehmer-Chat und ein KI-Assistent, der Meetings produktiv hält.'
    ],
    link: '/product/how-it-works',
    src: {
      light: '/3l.png',
      dark: '/3d.png',
    },
    inversion: true
  }" />

<span id="3"></span>
<FeatureBlock :card="{
  title: 'Der **Verstand in** Ihren Meetings',
  details: 'InterMind verwandelt jeden mehrsprachigen Anruf in klares, durchsuchbares Wissen.',
  items: [
    '⚡︎ Durchsuchen Sie sofort alle Inhalte vergangener und aktueller Meetings. Stellen Sie Fragen natürlich und erhalten Sie präzise Antworten ohne Aufzeichnungen durchzusehen.',
    '✧ Verpassen Sie keine Aufgaben aus Meetings. Unsere KI extrahiert automatisch Aufgaben, Verantwortliche und Fristen aus Gesprächen.',
    '✧ KI-Meeting-Zusammenfassungen liefern sofort die wichtigsten Punkte in jeder Sprache und halten alle auf dem gleichen Stand ohne manuelle Notizen.',
  ],
  link: '/product/how-it-works#🧩-deep-memory-deep-understanding',
  src: {
    light: '/2l.png',
    dark: '/2d.png',
  },
  inversion: false
}" />

<span id="4"></span>
<FeatureBlock
  :card="{
    title: 'Sicher & vertraulich durch Design',
    details:
      'InterMind ist für Gespräche konzipiert, bei denen Vertrauen wichtig ist. Während wir uns auf erstklassige Drittanbieter-Infrastruktur verlassen, bleibt die [Vertraulichkeit stets in Ihren Händen](/product/privacy-architecture).',
    items: [
      '⚡︎ Regionsbasierter Datenschutz — wählen Sie, wo Ihre Daten verarbeitet werden. Wir leiten alle Dolmetschungen, Speicherungen und Analysen durch Infrastruktur, die Ihrer Compliance-Zone entspricht (z.B. EU, USA, Asien).',
      '✧ Standardmäßig privat — InterMind selbst speichert oder nutzt Ihre Inhalte **niemals** für Training, Profiling oder Zugriff durch Dritte.',
      '✧ Konform durch Architektur — GDPR-, CCPA- und UAE PDPL-konform, mit voller Unterstützung für Export- und Löschrechte.'
    ],
    link: '/product/privacy-architecture',
    src: {
      light: '/4.png',
      dark: '/4.png',
    },
    inversion: true
  }"
/>

## Klare und einfache Preisgestaltung

Wählen Sie den Plan, der zu den mehrsprachigen Kommunikationsbedürfnissen Ihrer Organisation passt.

<PricingPlans :plans="[
  {
    title: '**Basic** &nbsp 1 Benutzer',
    price: '**Kostenlos**',
    details: '25 kostenlose Meetings',
    items: [
      '100 Teilnehmer Videomeetings + 30 GB gemeinsamer Speicher pro Benutzer [💬](#2)',
      'Sprache-zu-Sprache Dolmetschen [💬](#1)',
      'KI-Assistent [💬](#3)',
    ],
  },
  {
    title: '**Pro** &nbsp 1-99 Benutzer',
    price: '**20€** /Monat/Benutzer, jährlich abgerechnet',
    details: 'oder 25€ monatlich abgerechnet',
    items: [
      '150 Teilnehmer Videomeetings + 2 TB gemeinsamer Speicher pro Benutzer [💬](#2)',
      'Sprache-zu-Sprache Dolmetschen [💬](#1)',
      'KI-Assistent [💬](#3)',
    ],
  },
  {
    title: '**Business** &nbsp 1-500 Benutzer',
    price: '**Datenschutz**',
    details: 'Unternehmenstaugliche Sicherheit',
    items: [
      '500 Teilnehmer Videomeetings + 5 TB gemeinsamer Speicher pro Benutzer [💬](#2)',
      'Sprache-zu-Sprache Dolmetschen [💬](#1)',
      'KI-Assistent [💬](#3)',
      'Regionsbasierter Datenschutz [💬](#4)',
    ],
  }
]">
<AuthButton text="Kostenlos testen" buttonClass="alt"/>
<AuthButton text="Jetzt kaufen" buttonClass="brand"/>
<ContactFormModalNav buttonText="Zugang anfragen" buttonClass="alt"/>
</PricingPlans>

## Häufig gestellte Fragen

<AccordionGroup :items="[
  {
    q: 'Was ist ein lizenzierter Benutzer und was ist ein Teilnehmer?',
    a: 'Ein lizenzierter Benutzer verfügt entweder über eine kostenlose oder kostenpflichtige Meeting-Lizenz und kann Meetings mit Teilnehmern entsprechend der Kapazität seines Plans planen. Ein Teilnehmer ist ein Eingeladener in einem Meeting, das von jemandem mit einer Meeting-Lizenz geplant wurde. Ein Teilnehmer benötigt kein Konto oder keine Lizenz, um an einem Meeting teilzunehmen und kann **kostenlos teilnehmen**. Teilnehmer können über Desktop, Mobilgeräte und Tablets an einem Meeting teilnehmen.'
  },
  {
      q: 'Wie viele Teilnehmer können dem Meeting beitreten?',
      a: 'Die Anzahl der Teilnehmer hängt von Ihrem Plan ab: Basic erlaubt bis zu 100 Teilnehmer, Pro unterstützt bis zu 150 Teilnehmer und Business ermöglicht bis zu 500 Teilnehmer pro Meeting.'
  },
  {
    q: 'Wie viele Personen können eine InterMind-Lizenz nutzen?',
    a: 'Ein lizenzierter Benutzer kann eine unbegrenzte Anzahl von Meetings veranstalten. Wenn jedoch mehrere Benutzer gleichzeitig separate Meetings planen müssen, benötigen Sie zusätzliche Meeting-Lizenzen pro Benutzer.'
  },
  {
      q: 'Funktioniert die Sprachdolmetschung bei allen Plänen?',
      a: 'Ja, die Echtzeit-Sprachdolmetschung funktioniert bei allen Plänen, einschließlich des kostenlosen Basic-Plans. Der Basic-Plan ist jedoch auf insgesamt 25 Meetings beschränkt. Pro- und Business-Pläne ermöglichen unbegrenzte Meetings mit erhöhten Teilnehmerlimits und zusätzlichen Funktionen.'
  }
]" />

## Was unsere Kunden sagen

<AutoScrollTestimonials testimonialsUrl="/testimonials.json"/>