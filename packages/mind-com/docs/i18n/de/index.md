---
layout: home
title: "Live-Sprachübersetzung für Videoanrufe"
isHome: true
---

<!-- title: "Videoanrufe mit simultaner Übersetzung" -->
<!-- text="Live-Sprachübersetzung in Videoanrufen — **keine** Verzögerungen, **keine** verlorenen Geschäfte, **keine** Sprachbarrieren." -->

<HeroSection
  title="Treffen Sie sich in **jeder** Sprache"
  :typingSpeed="5"
  text="Live-Sprachübersetzung in **Videoanrufen** — schnelle, klare, grenzenlose Kommunikation.">

  <NavButton buttonLabel="Wie es funktioniert" buttonClass="brand" to="/#HowItWorks" />
  <AuthButton text="Loslegen" buttonClass="alt" eventName="im_get_started_attempt"/>
</HeroSection>

<span id="1"></span>
<FeatureBlock :card="{
  title: 'Übersetzung ≠ Verstehen. Hier ist, was als nächstes kommt.',
  details: 'Unabhängig von der Sprache wird Ihre Stimme gehört — und verstanden — als würden Sie dieselbe Sprache sprechen.',
    items: [
      '✧ Natürlich, in [Echtzeit](./product/overview/how-it-works), und ohne Untertitel oder Verzögerung.',
      '✧ KI-gestützte Interpretation erfasst Tonfall, Absicht und branchenspezifische Terminologie.',
    ],
  link: './product/overview/what-is-intermind',
  src: {
    light: '/media-kit/animals-cartoon-3-2.png',
    dark: '/1d.png',
  },
  inversion: false
}" />

<span id="2"></span>
<FeatureBlock :card="{
    title: 'Der Verstand in Ihren Meetings',
    details: 'InterMind verwandelt jeden mehrsprachigen Anruf in klares, durchsuchbares Wissen.',
    items: [
      '✧ **Fragen Sie alles** — KI findet Antworten **in all Ihren Meetings**.',
      '✧ Extrahiert automatisch Aufgaben, Verantwortliche und Fristen.',
      '✧ Fasst wichtige Punkte in jeder Sprache zusammen — sofort.',
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
    title: 'Entwickelt für ernsthafte Meetings — nicht nur zum Reden',
    details: 'InterMind ist eine [professionelle Video-Meeting-Plattform](./product/overview/video-meeting-platform), kein leichtgewichtiges Add-on oder Plugin.',
    items: [
      '✧ 1080p-Auflösung, intelligente Geräuschunterdrückung, Terminplanung, Moderation, Bildschirmfreigabe, Aufzeichnung, Untertitelung, Teilnehmer-Chat und Kalenderintegration — alles eingebaut, **sofort einsatzbereit**.',
    ],
    link: './product/overview/video-meeting-platform',
    src: {
      light: '/3l.mp4',
      dark: '/3d.mp4',
    },
    inversion: false
  }" />

<span id="4"></span>
<FeatureBlock
  :card="{
    title: 'Datenschutz, wo es darauf ankommt',
    details:
      'InterMind ist für vertrauenskritische Gespräche entwickelt — wo Datenschutz und Kontrolle am wichtigsten sind.',
    items: [
      '✧ [Datenschutzzonen](./product/overview/privacy-architecture) — EU, USA, Südostasien',
      '✧ **Kein Datentraining**. Kein Zugriff durch Dritte.'
    ],
    link: './product/overview/privacy-architecture',
    src: {
      light: '/4l.png',
      dark: '/4d.png',
    },
    inversion: true
  }"
/>

> [!tip] Für wen ist das gedacht?  
> Entwickelt für **internationale Teams**, bei denen Sprachbarrieren **Verzögerungen**, **verlorene Geschäfte** oder **kostspielige Missverständnisse** verursachen. [Mehr erfahren ...](./product/overview/markets)

<span id="HowItWorks"></span>

## Funktioniert wie Google Meet + Live-Übersetzung

Vertraute Benutzeroberfläche. Universelle Kommunikation. Genauso einfach wie Google Meet — mit Sofortübersetzung, die Sprachbarrieren verschwinden lässt.

<FeatureCards :features="[
  {
    title: 'Kostenlos anmelden',
    details: 'Wählen Sie Ihre Sprache und [erstellen Sie ein Konto](#Pricing)',
    icon: {
      light: '/signUp.png',
      dark: '/signUp.png',
    }
  },
  {
    title: 'Meeting starten',
    details: 'Sofort erstellen oder im Voraus planen',
    icon: {
      light: '/start.png',
      dark: '/start.png',
    }
  },
  // {
  //   title: 'Invite your guests',
  //   details: 'Share the link - your guest simply clicks on it and joins in their language.',
  //   icon: {
  //     light: '/invite.png',
  //     dark: '/invite.png',
  //   }
  // },
  {
    title: 'Am Meeting teilnehmen',
    details: 'Link klicken, Namen eingeben, sofort beitreten.',
    icon: {
      light: '/join.png',
      dark: '/join.png',
    }
  },
  {
    title: 'In Ihrer Sprache sprechen',
    details: 'Jeder spricht und hört in seiner eigenen Sprache.',
    icon: {
      light: '/meeting.png',
      dark: '/meeting.png',
    }
  },
]" />

<span id="Example"></span>

## 🗣️ Beispiel: Wie Echtzeit-Sprachübersetzung in einem Meeting funktioniert

Nehmen wir an:

> 🔹 Der Benutzer verwendet **Spanisch** als **Website-Lokalisierungssprache**  
> 🔹 Er veranstaltet ein Meeting und lädt zwei Teilnehmer ein:
>
> - 🧑‍💼 Teilnehmer 1 verwendet die Benutzeroberfläche auf **Englisch**
> - 👩‍💻 Teilnehmer 2 verwendet die Benutzeroberfläche auf **Chinesisch**

### 🔄 Was passiert während des Meetings?

Jeder Teilnehmer **spricht und hört** in der Sprache, die er beim Betreten des Produkts ausgewählt hat.  
Diese einzige Spracheinstellung gilt für:

- Die **Oberflächensprache**
- Die **gesprochene Eingabe** (was Sie sagen)
- Die **übersetzte Ausgabe** (was Sie hören)

| Teilnehmer   | Gewählte Sprache | Spricht in | Hört in    |
| ------------ | ---------------- | ---------- | ---------- |
| Gastgeber    | Spanisch         | Spanisch   | Spanisch   |
| Teilnehmer 1 | Englisch         | Englisch   | Englisch   |
| Teilnehmer 2 | Chinesisch       | Chinesisch | Chinesisch |

[Die Plattform interpretiert automatisch alle Sprache in Echtzeit](./product/overview/how-it-works) — so kommuniziert jeder, als würde er dieselbe Sprache sprechen.

### ⚙️ Können Sie Ihre Sprache während des Anrufs ändern?

Ja. Sie können die **Einstellungen** öffnen und das Feld `Ihre Sprache` ändern:

:::details Einstellungsbereich
<img src="/settings.png" alt="Einstellungsbereich" width="300px" />
:::

Dies zu ändern bedeutet:

- ✅ Sie sollten in der `gewählten Sprache` sprechen für eine genaue Übersetzung
- ✅ Sie werden andere in der `gewählten Sprache` hören
- ✅ Die Benutzeroberfläche wird automatisch zur `gewählten Sprache` wechseln

> 📌 Hinweis: "Ihre Sprache" ist eine **einzige einheitliche Einstellung**  
> Sie steuert **wie Sie sprechen**, **was Sie hören** und **was Sie sehen**.  
> In einer Sprache zu sprechen und in einer anderen zu hören wird **nicht unterstützt** — bewusst, um die Erfahrung einfach und vorhersagbar zu halten.

<span id="Pricing"></span>

## Klare und einfache Preisgestaltung

Vom ersten Anruf bis zu fließenden Gesprächen — in jeder Größenordnung.

<PricingPlans :plans="[
  {
    title: '**Basic** &nbsp 1 Benutzer',
    price: '**Kostenlos**',
    details: 'keine Kreditkarte erforderlich',
    items: [
      '**25** Meetings',
      '**100** Teilnehmer Video-Meetings [💬](#3)',
      '**30** GB gemeinsamer Speicher pro Benutzer',
      'Suche in allen Ihren Meetings [💬](#2)',
      'Simultandolmetschen [💬](#1)',
    ],
  },
  {
    title: '**Pro**  &nbsp 1-99 Benutzer',
    price: '**20 €** /Monat/Benutzer, jährlich abgerechnet',
    details: 'oder 25 € monatlich abgerechnet',
    items: [
      '**Unbegrenzte** Meetings',
      '**150** Teilnehmer Video-Meetings [💬](#3)',
      '**2** TB gemeinsamer Speicher pro Benutzer',
      'Suche in allen Ihren Meetings [💬](#2)',
      'Simultandolmetschen [💬](#1)',
    ],
  },
  {
    title: '**Business** &nbsp 100+ Benutzer',
    price: '**Individuelle Preisgestaltung**',
    details: 'Entwickelt für Datenschutz',
    items: [
      '**Unbegrenzte** Meetings',
      '**500** Teilnehmer Video-Meetings [💬](#3)',
      '**5** TB gemeinsamer Speicher pro Benutzer',
      'Suche in allen Ihren Meetings [💬](#2)',
      'Simultandolmetschen [💬](#1)',
      '**Privacy Zones** [💬](#4)',
    ],
  }
]">
<AuthButton text="Kostenlos testen" buttonClass="brand" eventName="im_try_it_attempt"/>
<AuthButton text="Jetzt kaufen" buttonClass="alt" mode="checkout" eventName="im_buy_now_attempt"/>
<ContactForm buttonText="Mit unserem Team sprechen" buttonClass="alt"/>
</PricingPlans>

> [!warning] 😱 Entweder Sie sprechen jede Sprache — oder jemand anderes schließt Ihre Geschäfte ab.

<span id="Testimonials"></span>

## Was Kunden sagen

<AutoScrollTestimonials testimonialsUrl="/testimonials.json"/>

> [!tip] 🥇 Ihre Zeit ist besser damit verbracht, Ihr Handwerk zu meistern — nicht Grammatik auswendig zu lernen.

<span id="FAQ"></span>

## Häufig gestellte Fragen

<AccordionGroup :items="
[
  {
    q: 'Welche Sprachen unterstützt InterMind für die Dolmetschung?',
    a: 'InterMind unterstützt **Echtzeit-Dolmetschung** in den folgenden 19 Sprachen:<br><br>- العربية (ar) – Arabisch<br>- Čeština (cs) – Tschechisch<br>- Deutsch (de) – Deutsch<br>- English (en) – Englisch<br>- Español (es) – Spanisch<br>- Français (fr) – Französisch<br>- हिन्दी (hi) – Hindi<br>- Magyar (hu) – Ungarisch<br>- Italiano (it) – Italienisch<br>- 日本語 (ja) – Japanisch<br>- 한국어 (ko) – Koreanisch<br>- Nederlands (nl) – Niederländisch<br>- Polski (pl) – Polnisch<br>- Português (pt) – Portugiesisch<br>- Русский (ru) – Russisch<br>- Türkçe (tr) – Türkisch<br>- 中文 (zh) – Chinesisch<br><br>Wir erweitern diese Liste kontinuierlich — neue Sprachen werden mit jeder größeren Version hinzugefügt.'
  },
  {
    q: 'Was ist ein lizenzierter Benutzer und was ist ein Teilnehmer?',
    a: 'Ein *lizenzierter Benutzer* hat eine kostenlose oder kostenpflichtige Meeting-Lizenz und kann Meetings innerhalb der Grenzen seines Plans planen. *Teilnehmer* sind Eingeladene — sie **benötigen kein Konto oder Lizenz** zum Beitreten und können sich von jedem Gerät **kostenlos** verbinden.'
  },
  {
    q: 'Wie viele Personen können eine InterMind-Lizenz verwenden?',
    a: 'Jeder *lizenzierte Benutzer* kann **unbegrenzt Meetings** hosten. Wenn mehrere Teammitglieder gleichzeitig Meetings hosten müssen, benötigt jeder seine eigene Lizenz.'
  },
  {
    q: 'Wie lange kann ein Meeting maximal dauern?',
    a: 'Meetings können in allen Plänen bis zu **24 Stunden** laufen.'
  },
  {
    q: 'Gibt es eine Begrenzung für die Anzahl der Meetings, die ich hosten kann?',
    a: 'Der *Free Basic*-Plan beinhaltet **25 kostenlose Meetings**. *Pro*- und *Business*-Pläne bieten unbegrenzte Meetings mit mehr Teilnehmern und Kontrolle.'
  },
  {
    q: 'Wie gewährleistet InterMind Datenschutz und Sicherheit?',
    a: 'InterMind ist **standardmäßig privat**. Alle Daten werden in Ihrer ausgewählten **Privacy Zone** verarbeitet und gespeichert — _EU_, _US_ oder _Asien_. Wir entsprechen der [**DSGVO**](https://gdpr.eu), [**CCPA**](https://oag.ca.gov/privacy/ccpa) und UAE PDPL und **verwenden niemals Ihre Inhalte** für Training oder Zugriff durch Dritte. Erweiterte [Privacy Zone-Kontrolle](./product/overview/privacy-architecture) ist im **Business**-Plan verfügbar.'
  },
  {
    q: 'Kann ich InterMind vor dem Kauf eines Plans testen?',
    a: 'Absolut. Der *Free Basic*-Plan gibt Ihnen vollen Zugang zu den Kernfunktionen mit **25 kostenlosen Meetings** — einschließlich **Simultandolmetschung** und **Meeting-Suche**. Keine Kreditkarte erforderlich. Jederzeit upgraden.'
  },
  {
    q: 'Was ist, wenn ich Hilfe oder Support benötige?',
    a: 'Support ist über unser [Hilfezentrum](./resources/help) verfügbar. *Business*-Benutzer erhalten **Priority-Support** mit einem dedizierten Kontakt.'
  },
  {
    q: 'Wie verwalte ich mein Abonnement (Upgrade, Downgrade oder Kündigung)?',
    a: 'Sie können Ihren Plan jederzeit über Ihre **Kontoeinstellungen** ändern. Änderungen werden **sofort** wirksam. Für Kündigungen werden *monatliche Pläne* am Ende des Abrechnungszyklus gekündigt. *Jahrespläne* können für eine **anteilige Rückerstattung** gekündigt werden.'
  },
  {
    q: 'Kann ich InterMind für Webinare oder große Veranstaltungen verwenden?',
    a: 'Ja. *Pro*- und *Business*-Pläne sind ideal für **große Meetings und Webinare** — mit Unterstützung für bis zu **500 Teilnehmer** im *Business*-Plan.'
  },
]
"/>

<HomeFooter :columns="[
  {
    title: 'PRODUKT',
    links: [
      { text: 'Übersicht', link: './product/overview/what-is-intermind' },
      { text: 'Erste Schritte', link: './product/guide/getting-started' },
      { text: 'Testimonials', link: '#testimonials' },
      { text: 'Preise', link: '#Pricing' },
    ]
  },
  {
    title: 'SUPPORT',
    links: [
      { text: 'Support erhalten', link: './resources/help' },
      { text: 'FAQ', link: '#FAQ' },
      { text: 'Service-Status', link: 'https://status.mind.com/' },
      { text: 'Datenschutzrichtlinie', link: './resources/company/Privacy-Policy' },
      { text: 'KI-Rechtsleitfaden', link: './resources/company/Legal-Regulations-for-AI-Services' },
      // { text: 'Privacy Settings', link: '#' },
    ]
  },
  {
    title: 'RESSOURCEN',
    links: [
      // { text: 'Blog', link: './blog' },
      { text: 'Brand Assets', link: './resources/media-kit' },
      { text: 'AI API / LLM Docs', link: 'https://mind.com/llms-full.txt' },
    ]
  },
  {
    title: 'UNTERNEHMEN',
    links: [
      { text: 'Über uns', link: './resources/company/about' },
      { text: 'Team', link: './resources/company/team' },
      // { text: 'Careers', link: './resources/company/careers' },
      { text: 'Kontakte', link: './resources/company/contacts' }
    ]
  },
]" />
