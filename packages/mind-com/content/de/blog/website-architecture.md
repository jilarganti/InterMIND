---
title: "Wie die Mind.com-Website aufgebaut ist: Eine Nuxt 4 Architektur"
description: "Ein technischer Überblick über die Mind.com-Marketingseite – Nuxt 4 SSR, @nuxt/content, i18n, Nitro-Server-Routen und die Kompromisse hinter jeder Entscheidung."
date: "2025-08-15"
author: "[Jilarganti](https://github.com/jilarganti)"
image: "/blog/iStock-681469612.jpg"
---

# Wie die Mind.com-Website aufgebaut ist: Eine Nuxt 4 Architektur

<img src="/blog/iStock-681469612.jpg" alt="Mind.com-Architektur" width="500" align="right" style="padding: 1.5rem"/>

Dies ist ein Überblick darüber, wie [mind.com](https://mind.com) tatsächlich aufgebaut ist und warum wir die Entscheidungen getroffen haben, die wir getroffen haben. Es ist eine Marketingseite – eine Landingpage, ein Blog, rechtliche Seiten und ein Kontaktformular –, daher ist der interessante Teil nicht eine einzelne Technologie. Es geht darum, wo wir die Grenzen gezogen haben: was auf dem Server gerendert wird, was an den Browser gesendet wird und was ein Build-Time-Skript bleibt. Wo eine Entscheidung ein Kompromiss statt eines offensichtlichen Vorteils war, erwähnen wir das.

Die Website ist ein Paket in einem pnpm Monorepo (das Repo heißt `InterMIND`). Sie läuft auf **Nuxt 4** und wird bei Vercel bereitgestellt. Nichts davon ist exotisch; der Wert liegt in der Passung zwischen den Komponenten.

## Warum Nuxt 4 mit SSR, nicht ein statischer Build

Eine Marketingseite könnte eine rein statische Ausgabe sein. Wir rendern stattdessen auf dem Server, unter Verwendung der Nitro-Engine von Nuxt mit dem `vercel`-Preset, und die Gründe sind konkret statt nur wünschenswert.

Wir haben ein Kontaktformular, das an ein Backend postet, sprachspezifisches Routing für sieben Sprachen und Inhalte, die sich häufig genug ändern, sodass wir nicht darüber nachdenken müssen, welche Seiten veraltet sind. SSR ermöglicht es einer einzigen Codebasis, die Marketingseiten, die lokalisierten Routen und den Formular-Endpunkt zu verwalten, ohne einen separaten Dienst an ein statisches Bundle anzuschließen. Nitro kompiliert den Server zur Build-Zeit in Vercel Functions, sodass wir Server-Rendering erhalten, ohne einen eigenen Server zu betreiben oder zu warten.

Der Kompromiss ist ehrlich: SSR bedeutet, dass es zur Anfragezeit Arbeit gibt, die eine vollständig statische Seite nicht hätte. Für eine Website dieser Größe sind diese Kosten gering, und im Gegenzug vermeiden wir die Koordinationsprobleme, ein statisches Frontend mit einer separaten API zu verbinden. Wäre dies eine Dokumentationsseite mit 10.000 Seiten ohne dynamische Oberfläche, wäre die statische Generierung die bessere Wahl. Das ist sie nicht, daher gewinnt SSR.

## Inhalt: @nuxt/content und MDC

Blog- und rechtliche Inhalte sind Markdown-Dateien unter `content/blog/` und `content/legal/`. Wir verwenden **@nuxt/content v3**, das diese Dateien zur Build-Zeit in eine lokale better-sqlite3-Datenbank parst und uns ermöglicht, sie wie Daten abzufragen. Die Frontmatter-Struktur wird mit Zod-Schemas in `content.config.ts` erzwungen, sodass ein Beitrag, dem ein `title` fehlt oder der ein falsch formatiertes `date` hat, den Build fehlschlagen lässt, anstatt fehlerhaft ausgeliefert zu werden.

Der Blog ist in **MDC** geschrieben – Markdown mit Komponenten. Ein Callout ist `:::tip{title="..."}` statt reinem HTML, was die Quelle lesbar hält und uns ermöglicht, das Rendering an einer Stelle (der `ProseTip`-Komponente) zu steuern, anstatt Markup über jeden Beitrag zu verstreuen.

Inhalte als Dateien im Repo zu halten bedeutet, dass sie versioniert, in Pull Requests überprüft und vergleichbar sind. Es gibt kein separates CMS zum Anmelden und keine Datenbank zum Sichern. Die Kehrseite davon ist die Einschränkung: Bearbeitungen erfordern einen Commit, daher passt dies zu einem Team, das bereits in Git arbeitet, nicht zu einem großen, nicht-technischen Redaktionsteam.

## Internationalisierung und wie Übersetzungen funktionieren

Die Website wird in sieben Sprachen ausgeliefert – Englisch, Spanisch, Portugiesisch, Französisch, Deutsch, Russisch und Chinesisch – über **@nuxtjs/i18n** mit der `prefix_except_default`-Strategie. Englisch wird vom Root-Verzeichnis aus bedient; jede andere Sprache sitzt unter ihrem eigenen Pfadpräfix. UI-Strings befinden sich in `app/locales/<code>.json`.

Die Übersetzung ist eine zweigleisige Aufgabe, und wir halten die Spuren getrennt. UI-Strings und Inhalte werden von zwei Node-Skripten übersetzt – `scripts/i18n-translate-ui.ts` und `scripts/i18n-translate-content.ts` –, die auf dem AI SDK mit Anthropic-Modellen basieren. Diese laufen als Build-Time-Erstellungsschritt, nicht zur Anfragezeit: Ein Mensch löst sie aus, überprüft die Ausgabe und committet sie. Die Übersetzungen sind gewöhnliche Dateien im Repo, wie alles andere auch.

Das ist die bewusste Abgrenzung. Es gibt keine Laufzeitübersetzung, keinen On-the-fly-Sprachmodellaufruf, wenn ein Besucher eine Seite lädt. Übersetzungen werden im Voraus generiert und als einfache lokalisierte Routen bereitgestellt, was das Rendering vorhersehbar macht und uns ermöglicht, Korrektur zu lesen, bevor etwas live geht.

## Designsystem: Tailwind v4 und @nuxt/ui

Das Styling basiert auf **Tailwind CSS v4** mit **@nuxt/ui v4** obendrauf. Neue Besucher landen standardmäßig im Dunkelmodus; der Seitenhintergrund ist ein bewusst gewähltes Fast-Schwarz, `#0a0b0d`, anstatt reinem Schwarz. Jede Seite und Komponente ist so gebaut, dass sie sowohl im hellen als auch im dunklen Modus funktioniert – das ist eine Einschränkung, an die wir uns halten, keine nachträgliche Überlegung, sodass nichts eine nur für den hellen Modus geeignete Farbe fest codiert.

Die Nutzung von @nuxt/ui bedeutet, dass wir barrierefreie, konsistente Komponenten erben, anstatt Schaltflächen, Formularsteuerelemente und Overlays von Grund auf neu zu erstellen. Die Kosten sind eine Abhängigkeit, deren Konventionen wir folgen, anstatt eines vollständig maßgeschneiderten Systems, was für eine Marketingseite die richtige Seite dieses Kompromisses ist.

## Das Backend: Nitro-Server-Routen und Pipedrive

Das Backend ist klein und befindet sich im selben Projekt, als Nitro-Server-Routen unter `server/`:

- `server/api/submit-form.post.ts` verarbeitet das Kontaktformular.
- `server/api/health.get.ts` ist ein Health Check.
- `server/api/__sitemap__/urls.ts` speist die Sitemap.
- `server/routes/llms.txt.ts` und `llms-full.txt.ts` stellen maschinenlesbare Zusammenfassungen für AI-Crawler bereit.
- `server/middleware/` enthält übergreifende Logik, einschließlich eines 410-Gone-Handlers für eingestellte URLs und der Zielgruppenverwaltung.

Wenn jemand das Kontaktformular absendet, geht der Lead über `server/utils/pipedrive.ts` an **Pipedrive**, welches eine Person und einen Lead erstellt. Das ist die einzige CRM-Integration und der einzige Ort, an den Formulardaten gelangen. Es gibt keine Warteschlange, keine Datenpipeline, keinen Objektspeicher dazwischen – der Endpunkt validiert die Eingabe und ruft eine API auf. Diese Direktheit bedeutet, dass sehr wenig kaputt gehen kann und man sich bei Problemen kaum Gedanken machen muss.

Absichtlich gibt es auch keine Benutzerauthentifizierung auf der Marketingseite. Es ist eine Broschüre und ein Kontaktformular, keine App; das Hinzufügen von Login und Sessions würde eine Angriffsfläche schaffen, die wir ohne Nutzen sichern müssten.

## Observability: Sentry und PostHog, mit Zustimmungssteuerung

Wir verwenden zwei Observability-Tools, die unterschiedliche Aufgaben erfüllen.

**Sentry** (`@sentry/nuxt`) fängt Fehler ab. Es ist als Build-Time-Modul integriert und im Entwicklungsmodus deaktiviert, damit lokaler "Lärm" es nicht erreicht. Seine Aufgabe ist es, uns mitzuteilen, wenn in der Produktion etwas kaputtgeht.

**PostHog** (`nuxt-posthog`) übernimmt die Produktanalyse, und sein Verhalten bezüglich der Zustimmung ist der Teil, der ausführlich erläutert werden sollte. Es beginnt **abgemeldet**. Die Website zeigt kein Cookie-Banner: Für Besucher aus dem Europäischen Wirtschaftsraum, dem Vereinigten Königreich oder der Schweiz bleiben Analysen einfach deaktiviert, und für alle anderen aktiviert `app/plugins/posthog-consent.client.ts` sie. Die Standardeinstellung ist kein Tracking; es wird nur dort aktiviert, wo keine Zustimmung erforderlich ist. PostHog deckt Analysen ab und Sentry deckt Fehler ab – das ist das Gesamtbild, ohne separaten Tag-Manager oder zusätzliche Drittanbieter-Analyseschicht.

## SEO und AI-Crawler

SEO wird von `@nuxtjs/sitemap` und `@nuxtjs/robots` für die Sitemap und Robots-Direktiven gehandhabt. Weiterleitungen und Cache-Header – einschließlich der langen Liste von Weiterleitungen für Legacy-URLs, die die Website angesammelt hat – befinden sich in `vercel.json`, nahe dem Punkt, an dem sie am Edge wirksam werden.

Die oben erwähnten Routen `llms.txt` und `llms-full.txt` sind eine Anspielung darauf, wie das Web heutzutage gelesen wird: Sie bieten AI-Crawlern eine saubere, strukturierte Zusammenfassung der Website, anstatt sie gerenderte Seiten scrapen zu lassen. Es ist kostengünstig bereitzustellen und bedeutet, dass die Maschinen, die die Website lesen, eine genaue Version davon erhalten.

## Bereitstellung

Alles wird auf **Vercel** bereitgestellt. Das `vercel`-Preset von Nitro wandelt die Server-Routen in Vercel Functions und die Seiten in serverseitig gerenderte Ausgabe um, sodass ein `git push` zu einem Deployment wird, ohne eine separate Build-and-Ship-Pipeline warten zu müssen. Als Teil des pnpm Monorepos teilt mind.com Werkzeuge und Lockfile-Disziplin mit den anderen Paketen, bleibt aber unabhängig deploybar.

## Zusammenfassend

Nichts davon ist ungewöhnlich, und das ist der Punkt. Nuxt 4 bietet uns SSR, ohne Server betreiben zu müssen; @nuxt/content hält Beiträge und rechtliche Seiten als überprüfbare Dateien; i18n und die Übersetzungsskripte lokalisieren die Website als Build-Schritt, den wir Korrektur lesen können; ein schlankes Nitro-Backend übergibt Leads an Pipedrive; Sentry und PostHog überwachen Ausfälle und Verhalten, wobei die Analysen überall dort deaktiviert sind, wo eine Zustimmung erforderlich wäre.

Die Website ist leicht verständlich, weil wir die beweglichen Teile gering gehalten und jedes an seinen Platz gesetzt haben. Für eine Marketingseite ist langweilig und lesbar immer besser als clever.
