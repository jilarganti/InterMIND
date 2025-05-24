---
layout: home
title: "KI-Sprachübersetzer für Live-Videoanrufe"
description: "Mehrsprachige Meetings brauchen kein Zoom, keine Plugins oder Dolmetscher. InterMind ist ein KI-Sprachübersetzer für Echtzeit-Videoanrufe — sprechen und sofort übersetzen."
isHome: true
---

<!-- text="Konzentrieren Sie sich auf Wachstum — lassen Sie InterMind die Sprachen handhaben." -->
<!-- text="Klassenzimmer brauchen Jahre; InterMind liefert heute Echtzeitverständigung in jeder Sprache." -->
<!-- text="**Mehrsprachige** Videomeetings mit **Sprach**-Dolmetschung" -->
<!-- title="Live-**Dolmetsch**-Videomeetings" -->

<HeroSection
title="Treffen Sie sich in **jeder** Sprache"
text="Neue Generation von Videoanrufen. KI-Sprachübersetzung — weiterentwickelt zur Echtzeit-Dolmetschung.">

<AuthButton text="Hören Sie den Unterschied" buttonClass="brand"/>
<!-- <ContactFormModalNav buttonText="Demo anfordern"/>
<NavButton to="#pricing" buttonClass="alt" buttonLabel="Preise" /> -->
</HeroSection>

> **Für wen ist das?**  
> Für internationale Teams, bei denen Sprachbarrieren zu verlorenen Geschäften, Verzögerungen oder Missverständnissen führen.

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

<span id="3"></span>
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

<span id="2"></span>
<FeatureBlock :card="{
    title: 'Entwickelt für professionelle Meetings — nicht nur zum Plaudern',
    details: 'InterMind ist eine **professionelle Videomeeting-Plattform**, kein einfaches Add-on oder Plugin.',
    items: [
      '✧ 1080p Auflösung, intelligente Geräuschunterdrückung, Terminplanung, Moderation, Bildschirmfreigabe, Aufnahme, Teilnehmer-Chat und vollständige Kalenderintegration — alles integriert, **sofort einsatzbereit**.',
    ],
    link: '/product/how-it-works',
    src: {
      light: '/3l.png',
      dark: '/3d.png',
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
      '✧ Konform mit: GDPR, CCPA, UAE PDPL',
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
<ContactFormModalNav buttonText="Zugang anfordern" buttonClass="alt"/>
</PricingPlans>

<span id="FAQ"></span>

## Häufig gestellte Fragen

<AccordionGroup :items="[
  {
    q: 'Was ist ein lizenzierter Benutzer und was ist ein Teilnehmer?',
    a: 'Ein lizenzierter Benutzer verfügt entweder über eine kostenlose oder kostenpflichtige Meeting-Lizenz und kann Meetings mit Teilnehmern entsprechend der Kapazität ihres Plans planen. Ein Teilnehmer ist ein Eingeladener in einem Meeting, das von jemandem mit einer Meeting-Lizenz geplant wurde. Ein Teilnehmer benötigt kein Konto oder Lizenz, um an einem Meeting teilzunehmen und kann **kostenlos beitreten**. Teilnehmer können von Desktop, Mobilgeräten und Tablets aus an Meetings teilnehmen.'
  },
  {
      q: 'Wie viele Teilnehmer können am Meeting teilnehmen?',
      a: 'Die Anzahl der Teilnehmer hängt von Ihrem Plan ab: Basic erlaubt bis zu 100 Teilnehmer, Pro unterstützt bis zu 150 Teilnehmer und Business ermöglicht bis zu 500 Teilnehmer pro Meeting.'
  },
  {
    q: 'Wie viele Personen können eine InterMind-Lizenz nutzen?',
    a: 'Ein lizenzierter Benutzer kann eine unbegrenzte Anzahl von Meetings veranstalten. Wenn jedoch mehrere Benutzer gleichzeitig separate Meetings planen müssen, benötigen Sie zusätzliche Meeting-Lizenzen pro Benutzer.'
  },
  {
      q: 'Funktioniert die Sprachinterpretation bei allen Plänen?',
      a: 'Ja, Echtzeit-Sprach-zu-Sprach-Interpretation funktioniert bei allen Plänen, einschließlich des kostenlosen Basic-Plans. Der Basic-Plan ist jedoch auf insgesamt 25 Meetings beschränkt. Pro- und Business-Pläne erlauben unbegrenzte Meetings mit erhöhten Teilnehmergrenzen und zusätzlichen Funktionen.'
  },
  {
      q: 'Was ist die maximale Dauer eines Meetings?',
      a: 'Meetings können bei allen Plänen bis zu 24 Stunden dauern.'
  },
  {
      q: 'Kann ich Meetings aufzeichnen?',
      a: 'Ja, alle Pläne unterstützen die Aufzeichnung von Meetings. Aufzeichnungen werden in Ihrem Konto gespeichert und können später abgerufen werden.'
  },
  {
      q: 'Gibt es eine Begrenzung für die Anzahl der Meetings, die ich veranstalten kann?',
      a: 'Der Basic-Plan erlaubt bis zu 25 Meetings, während Pro- und Business-Pläne unbegrenzte Meetings ermöglichen.'
  },
  {
      q: 'Kann ich InterMind auf mobilen Geräten verwenden?',
      a: 'Ja, InterMind ist vollständig kompatibel mit Desktop, Mobilgeräten und Tablets.'
  },
  {
      q: 'Was ist, wenn ich mehr Speicherplatz für Aufzeichnungen benötige?',
      a: 'Der Pro-Plan bietet 2 TB gemeinsam genutzten Speicher pro Benutzer, während der Business-Plan 5 TB bietet. Wenn Sie mehr benötigen, kontaktieren Sie uns bitte für individuelle Lösungen.'
  },
  {
      q: 'Wie stellt InterMind Datenschutz und Sicherheit sicher?',
      a: 'InterMind ist mit Blick auf den Datenschutz konzipiert. Wir bieten regionale Verarbeitung, standardmäßige private Einstellungen und Einhaltung der GDPR-, CCPA- und UAE PDPL-Standards.'
  },
  {
      q: 'Kann ich InterMind ausprobieren, bevor ich einen Plan kaufe?',
      a: 'Ja, Sie können mit dem kostenlosen Basic-Plan beginnen, um die Funktionen zu erleben, bevor Sie auf Pro- oder Business-Pläne upgraden.'
  },
  {
      q: 'Was ist, wenn ich Hilfe oder Unterstützung benötige?',
      a: 'Wir bieten Unterstützung über unser Hilfezentrum, E-Mail und Live-Chat. Für Business-Plan-Nutzer ist dedizierte Unterstützung verfügbar.'
  },
  {
      q: 'Kann ich mein Abonnement jederzeit kündigen?',
      a: 'Ja, Sie können Ihr Abonnement jederzeit kündigen. Bei monatlichen Plänen tritt die Kündigung am Ende des aktuellen Abrechnungszyklus in Kraft. Jahrespläne können für eine anteilige Rückerstattung gekündigt werden.'
  },
  {
      q: 'Wie kann ich meinen Plan upgraden oder downgraden?',
      a: 'Sie können Ihren Plan jederzeit über Ihre Kontoeinstellungen upgraden oder downgraden. Änderungen treten sofort in Kraft.'
  },
  {
      q: 'Welche Sprachen unterstützt InterMind für die Sprachinterpretation?',
      a: 'InterMind unterstützt eine breite Palette von Sprachen für Echtzeit-Sprachinterpretation. Die Liste wird kontinuierlich erweitert, also überprüfen Sie bitte unsere Website für die neuesten Updates.'
  },
  {
      q: 'Kann ich InterMind für Webinare oder große Veranstaltungen nutzen?',
      a: 'Ja, InterMind kann für Webinare und große Veranstaltungen verwendet werden, insbesondere mit dem Business-Plan, der bis zu 500 Teilnehmer unterstützt.'
  },
  {
      q: 'Gibt es eine Begrenzung für die Anzahl der Meetings, die ich veranstalten kann?',
      a: 'Der Basic-Plan erlaubt bis zu 25 Meetings, während Pro- und Business-Pläne unbegrenzte Meetings ermöglichen.'
  },
  {
      q: 'Kann ich InterMind für Webinare oder große Veranstaltungen nutzen?',
      a: 'Ja, InterMind kann für Webinare und große Veranstaltungen verwendet werden, insbesondere mit dem Business-Plan, der bis zu 500 Teilnehmer unterstützt.'
  },
  {
      q: 'Was ist, wenn ich mehr Speicherplatz für Aufzeichnungen benötige?',
      a: 'Der Pro-Plan bietet 2 TB gemeinsam genutzten Speicher pro Benutzer, während der Business-Plan 5 TB bietet. Wenn Sie mehr benötigen, kontaktieren Sie uns bitte für individuelle Lösungen.'
  },
  {
      q: 'Wie stellt InterMind Datenschutz und Sicherheit sicher?',
      a: 'InterMind ist mit Blick auf den Datenschutz konzipiert. Wir bieten regionale Verarbeitung, standardmäßige private Einstellungen und Einhaltung der GDPR-, CCPA- und UAE PDPL-Standards.'
  },
  {
      q: 'Kann ich InterMind ausprobieren, bevor ich einen Plan kaufe?',
      a: 'Ja, Sie können mit dem kostenlosen Basic-Plan beginnen, um die Funktionen zu erleben, bevor Sie auf Pro- oder Business-Pläne upgraden.'
  },
  {
      q: 'Was ist, wenn ich Hilfe oder Unterstützung benötige?',
      a: 'Wir bieten Unterstützung über unser Hilfezentrum, E-Mail und Live-Chat. Für Business-Plan-Nutzer ist dedizierte Unterstützung verfügbar.'
  },
  {
      q: 'Kann ich mein Abonnement jederzeit kündigen?',
      a: 'Ja, Sie können Ihr Abonnement jederzeit kündigen. Bei monatlichen Plänen tritt die Kündigung am Ende des aktuellen Abrechnungszyklus in Kraft. Jahrespläne können für eine anteilige Rückerstattung gekündigt werden.'
  },
  {
      q: 'Wie kann ich meinen Plan upgraden oder downgraden?',
      a: 'Sie können Ihren Plan jederzeit über Ihre Kontoeinstellungen upgraden oder downgraden. Änderungen treten sofort in Kraft.'
  },
  {
      q: 'Welche Sprachen unterstützt InterMind für die Sprachinterpretation?',
      a: 'InterMind unterstützt eine breite Palette von Sprachen für Echtzeit-Sprachinterpretation. Die Liste wird kontinuierlich erweitert, also überprüfen Sie bitte unsere Website für die neuesten Updates.'
  },
  {
      q: 'Kann ich InterMind für Webinare oder große Veranstaltungen nutzen?',
      a: 'Ja, InterMind kann für Webinare und große Veranstaltungen verwendet werden, insbesondere mit dem Business-Plan, der bis zu 500 Teilnehmer unterstützt.'
  },
  {
      q: 'Gibt es eine Begrenzung für die Anzahl der Meetings, die ich veranstalten kann?',
      a: 'Der Basic-Plan erlaubt bis zu 25 Meetings, während Pro- und Business-Pläne unbegrenzte Meetings ermöglichen.'
  },
  {
      q: 'Kann ich InterMind für Webinare oder große Veranstaltungen nutzen?',
      a: 'Ja, InterMind kann für Webinare und große Veranstaltungen verwendet werden, insbesondere mit dem Business-Plan, der bis zu 500 Teilnehmer unterstützt.'
  },
  {
      q: 'Was ist, wenn ich mehr Speicherplatz für Aufzeichnungen benötige?',
      a: 'Der Pro-Plan bietet 2 TB gemeinsam genutzten Speicher pro Benutzer, während der Business-Plan 5 TB bietet. Wenn Sie mehr benötigen, kontaktieren Sie uns bitte für individuelle Lösungen.'
  },
  {
      q: 'Wie stellt InterMind Datenschutz und Sicherheit sicher?',
      a: 'InterMind ist mit Blick auf den Datenschutz konzipiert. Wir bieten regionale Verarbeitung, standardmäßige private Einstellungen und Einhaltung der GDPR-, CCPA- und UAE PDPL-Standards.'
  },
  {
      q: 'Kann ich InterMind ausprobieren, bevor ich einen Plan kaufe?',
      a: 'Ja, Sie können mit dem kostenlosen Basic-Plan beginnen, um die Funktionen zu erleben, bevor Sie auf Pro- oder Business-Pläne upgraden.'
  },
  {
      q: 'Was ist, wenn ich Hilfe oder Unterstützung benötige?',
      a: 'Wir bieten Unterstützung über unser Hilfezentrum, E-Mail und Live-Chat. Für Business-Plan-Nutzer ist dedizierte Unterstützung verfügbar.'
  },
  {
      q: 'Kann ich mein Abonnement jederzeit kündigen?',
      a: 'Ja, Sie können Ihr Abonnement jederzeit kündigen. Bei monatlichen Plänen tritt die Kündigung am Ende des aktuellen Abrechnungszyklus in Kraft. Jahrespläne können für eine anteilige Rückerstattung gekündigt werden.'
  },
  {
      q: 'Wie kann ich meinen Plan upgraden oder downgraden?',
      a: 'Sie können Ihren Plan jederzeit über Ihre Kontoeinstellungen upgraden oder downgraden. Änderungen treten sofort in Kraft.'
  },
  {
      q: 'Welche Sprachen unterstützt InterMind für die Sprachinterpretation?',
      a: 'InterMind unterstützt eine breite Palette von Sprachen für Echtzeit-Sprachinterpretation. Die Liste wird kontinuierlich erweitert, also überprüfen Sie bitte unsere Website für die neuesten Updates.'
  },
]" />

<span id="Testimonials"></span>

## Was unsere Kunden sagen

<AutoScrollTestimonials testimonialsUrl="/testimonials.json"/>