---
title: "Wie die Mind.com Website aufgebaut ist: Eine Nuxt 4 Architektur"
description: "Ein technischer Überblick über die Marketing-Website von Mind.com — Nuxt 4 SSR, @nuxt/content, i18n, Nitro-Server-Routen und die Kompromisse hinter jeder Entscheidung."
date: "2025-08-15"
author: "[Jilarganti](https://github.com/jilarganti)"
image: "/blog/iStock-681469612.jpg"
---

# Wie die Mind.com Website aufgebaut ist: Eine Nuxt 4 Architektur

<img src="/blog/iStock-681469612.jpg" alt="Mind.com Architektur" width="500" align="right" style="padding: 1.5rem"/>

Dies ist eine Anleitung, wie [mind.com](https://mind.com) tatsächlich aufgebaut ist und warum wir uns für diese Entscheidungen entschieden haben. Es ist eine Marketing-Website – eine Landingpage, ein Blog, rechtliche Seiten und ein Kontaktformular –, daher ist das Interessante nicht eine einzelne Technologie. Es geht darum, wo wir die Grenzen gezogen haben: was auf dem Server gerendert wird, was an den Browser gesendet wird und was ein Build-Zeit-Skript bleibt. Wo eine Entscheidung eher ein Kompromiss als ein offensichtlicher Gewinn war, sagen wir das auch.

Die Website ist ein Paket in einem pnpm Monorepo (das Repo heißt `InterMIND`). Sie läuft auf **Nuxt 4** und wird auf Vercel bereitgestellt. Nichts hier ist exotisch; der Wert liegt in der Passung zwischen den einzelnen Teilen.

## Warum Nuxt 4 mit SSR, und nicht ein statischer Build

Eine Marketing-Website könnte ein rein statisches Output sein. Stattdessen rendern wir auf dem Server, unter Verwendung der Nitro-Engine von Nuxt mit dem `vercel`-Preset, und die Gründe dafür sind konkret und nicht nur wünschenswert.

Wir haben ein Kontaktformular, das Daten an ein Backend sendet, sprachspezifisches Routing über sieben Sprachen hinweg und Inhalte, die sich häufig genug ändern, sodass wir nicht darüber nachdenken möchten, welche Seiten veraltet sind. SSR ermöglicht es einer Codebasis, die Marketingseiten, die lokalisierten Routen und den Formular-Endpunkt zu verwalten, ohne einen separaten Dienst an ein statisches Bundle anzuschließen. Nitro kompiliert den Server zur Build-Zeit in Vercel-Funktionen, sodass wir Server-Rendering erhalten, ohne einen eigenen Server zu betreiben oder zu warten.

Der Kompromiss ist ehrlich: SSR bedeutet, dass es zur Anfragezeit Arbeit gibt, die eine vollständig statische Website nicht hätte. Für eine Website dieser Größe sind diese Kosten gering, und im Gegenzug vermeiden wir die Koordinationsprobleme, ein statisches Frontend an eine separate API anzuschließen. Wäre dies eine 10.000 Seiten umfassende Dokumentationsseite ohne dynamische Oberfläche, wäre die statische Generierung die bessere Wahl. Das ist sie nicht, daher gewinnt SSR.

## Inhalt: @nuxt/content und MDC

Blog- und Rechtsinhalte sind Markdown-Dateien unter `content/blog/` und `content/legal/`. Wir verwenden **@nuxt/content v3**, das diese Dateien zur Build-Zeit in eine lokale better-sqlite3-Datenbank parst und uns ermöglicht, sie wie Daten abzufragen. Die Form des Frontmatter wird mit Zod-Schemas in `content.config.ts` erzwungen, sodass ein Beitrag, dem ein `title` fehlt oder der ein fehlerhaftes `date` enthält, den Build fehlschlagen lässt, anstatt fehlerhaft ausgeliefert zu werden.

Der Blog ist in **MDC** – Markdown mit Komponenten – geschrieben. Ein Callout ist `:::tip{title="..."}` statt reinem HTML, was den Quelltext lesbar hält und es uns ermöglicht, das Rendering an einer Stelle (der `ProseTip`-Komponente) zu steuern, anstatt Markup über jeden Beitrag zu streuen.

Inhalte als Dateien im Repo zu halten bedeutet, dass sie versioniert, in Pull Requests überprüft und diffbar sind. Es gibt kein separates CMS, in das man sich einloggen müsste, und keine Datenbank, die gesichert werden müsste. Die Kehrseite dessen ist die Einschränkung: Bearbeitungen erfordern einen Commit, daher eignet sich dies für ein Team, das bereits in Git arbeitet, und nicht für ein großes, nicht-technisches Redaktionsteam.

## Internationalisierung und Funktionsweise der Übersetzung

Die Website wird in sieben Sprachen – Englisch, Spanisch, Portugiesisch, Französisch, Deutsch, Russisch und Chinesisch – über **@nuxtjs/i18n** mit der `prefix_except_default`-Strategie ausgeliefert. Englisch wird vom Stammverzeichnis aus bereitgestellt; jede andere Sprache befindet sich unter ihrem eigenen Pfadpräfix. UI-Strings befinden sich in `app/locales/<code>.json`.

Die Übersetzung ist eine zweigleisige Aufgabe, und wir halten die Gleise getrennt. UI-Strings und Inhalte werden von zwei Node-Skripten – `scripts/i18n-translate-ui.ts` und `scripts/i18n-translate-content.ts` – übersetzt, die auf dem AI SDK mit Anthropic-Modellen basieren. Diese laufen als Authoring-Schritt zur Build-Zeit, nicht zur Anfragezeit: Ein Mensch löst sie aus, überprüft das Ergebnis und committet es. Die Übersetzungen sind ganz normale Dateien im Repo, wie alles andere auch.

Das ist die bewusste Abgrenzung. Es gibt keine Laufzeit-Übersetzung, keinen On-the-fly-Sprachmodell-Aufruf, wenn ein Besucher eine Seite lädt. Übersetzungen werden im Voraus generiert und als einfache lokalisierte Routen bereitgestellt, was das Rendering vorhersehbar hält und es uns ermöglicht, Korrektur zu lesen, bevor etwas live geht.

## Designsystem: Tailwind v4 und @nuxt/ui

Das Styling ist **Tailwind CSS v4** mit **@nuxt/ui v4** obendrauf. Neue Besucher landen standardmäßig im Dark Mode; der Seitenhintergrund ist ein bewusst gewähltes Fast-Schwarz, `#0a0b0d`, und kein reines Schwarz. Jede Seite und Komponente ist so konzipiert, dass sie sowohl im hellen als auch im dunklen Modus funktioniert – das ist eine von uns eingehaltene Einschränkung, kein nachträglicher Einfall, sodass nichts eine nur helle Farbe fest codiert.

Die Nutzung von @nuxt/ui bedeutet, dass wir zugängliche, konsistente Komponenten erben, anstatt Schaltflächen, Formularsteuerelemente und Overlays von Grund auf neu zu entwickeln. Die Kosten sind eine Abhängigkeit, deren Konventionen wir folgen, anstatt eines vollständig maßgeschneiderten Systems, was für eine Marketing-Website die richtige Seite dieses Kompromisses darstellt.

## Das Backend: Nitro-Server-Routen und Pipedrive

Das Backend ist klein und befindet sich im selben Projekt, als Nitro-Server-Routen unter `server/`:

- `server/api/submit-form.post.ts` verarbeitet das Kontaktformular.
- `server/api/health.get.ts` ist ein Health-Check.
- `server/api/__sitemap__/urls.ts` speist die Sitemap.
- `server/routes/llms.txt.ts` und `llms-full.txt.ts` stellen maschinenlesbare Zusammenfassungen für AI-Crawler bereit.
- `server/middleware/` enthält übergreifende Logik, einschließlich eines 410-Gone-Handlers für ausgemusterte URLs und die Zielgruppenverwaltung.

Wenn jemand das Kontaktformular absendet, gelangt der Lead über `server/utils/pipedrive.ts` zu **Pipedrive**, wo eine Person und ein Lead erstellt werden. Das ist die einzige CRM-Integration und der einzige Ort, an den Formulardaten gelangen. Es gibt keine Warteschlange, keine Datenpipeline, keinen Objektspeicher dazwischen – der Endpunkt validiert die Eingabe und ruft eine API auf. Diese Direktheit bedeutet, dass nur sehr wenig kaputt gehen kann und man sich bei Problemen nur wenig Gedanken machen muss.

Auf der Marketing-Website gibt es bewusst auch keine Benutzerauthentifizierung. Es ist eine Broschüre und ein Kontaktformular, keine App; das Hinzufügen von Login und Sessions würde eine Angriffsfläche schaffen, die wir ohne Nutzen sichern müssten.

## Beobachtbarkeit: Sentry und PostHog, mit Zustimmungsschranke

Wir verwenden zwei Beobachtungstools, und sie erfüllen unterschiedliche Aufgaben.

**Sentry** (`@sentry/nuxt`) fängt Fehler ab. Es ist als Build-Zeit-Modul integriert und bleibt in der Entwicklung deaktiviert, damit lokales Rauschen es nicht erreicht. Seine Aufgabe ist es, uns zu informieren, wenn in der Produktion etwas schiefgeht.

**PostHog** (`nuxt-posthog`) verwaltet Produktanalysen, und sein Verhalten bezüglich der Zustimmung ist der Teil, der näher erläutert werden sollte. Es beginnt **abgemeldet**. Es wird nichts erfasst, bis die Usercentrics-Zustimmungsplattform die Erlaubnis erteilt, woraufhin `app/plugins/posthog-consent.client.ts` es aktiviert. Die Standardeinstellung ist kein Tracking; die Zustimmung schaltet es ein, nicht umgekehrt. PostHog deckt Analysen ab und Sentry Fehler – das ist das Gesamtbild, ohne separaten Tag-Manager oder zusätzliche Analytics-Ebene von Drittanbietern.

## SEO und AI-Crawler

SEO wird von `@nuxtjs/sitemap` und `@nuxtjs/robots` für die Sitemap und Robots-Direktiven verwaltet. Weiterleitungen und Cache-Header – einschließlich der langen Liste von Legacy-URL-Weiterleitungen, die sich die Website angesammelt hat – befinden sich in `vercel.json`, nahe dem Ort, wo sie am Edge wirksam werden.

Die oben genannten Routen `llms.txt` und `llms-full.txt` sind ein Hinweis darauf, wie das Web heutzutage gelesen wird: Sie bieten AI-Crawlern eine saubere, strukturierte Zusammenfassung der Website, anstatt sie gerenderte Seiten abkratzen zu lassen. Das Bereitstellen ist kostengünstig und bedeutet, dass die Maschinen, die die Website lesen, eine genaue Version davon erhalten.

## Bereitstellung

Alles wird auf **Vercel** bereitgestellt. Das `vercel`-Preset von Nitro wandelt die Server-Routen in Vercel-Funktionen und die Seiten in serverseitig gerenderten Output um, sodass ein `git push` zu einem Deployment wird, ohne eine separate Build- und Ship-Pipeline pflegen zu müssen. Innerhalb des pnpm Monorepos teilt mind.com Werkzeuge und Lockfile-Disziplin mit den anderen Paketen, bleibt aber unabhängig deploybar.

## Die Struktur

Nichts davon ist ungewöhnlich, und das ist der Punkt. Nuxt 4 bietet uns SSR, ohne Server betreiben zu müssen; @nuxt/content bewahrt Beiträge und rechtliche Seiten als überprüfbare Dateien auf; i18n und die Übersetzungs-Skripte lokalisieren die Website als Build-Schritt, den wir Korrektur lesen können; ein schlankes Nitro-Backend übergibt Leads an Pipedrive; Sentry und PostHog überwachen Fehler und Verhalten, wobei Analysen deaktiviert bleiben, bis die Zustimmung etwas anderes besagt.

Die Website ist leicht verständlich, weil wir die beweglichen Teile gering gehalten und jeden dort platziert haben, wo er hingehört. Für eine Marketing-Website schlägt langweilig und lesbar immer clever.
