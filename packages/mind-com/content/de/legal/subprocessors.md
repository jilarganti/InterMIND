---
title: Unterauftragsverarbeiter
description: Die Infrastruktur- und Dienstanbieter, die InterMIND zur Verarbeitung personenbezogener Daten nutzt – Zweck, Verarbeitungsregion und Sicherheitsvorkehrungen jedes Anbieters.
updated: "2026-06-17"
---

Um InterMIND zu betreiben, nutzen wir eine kleine Auswahl an Infrastruktur- und Dienstanbietern ("Unterauftragsverarbeiter"). Diese Seite listet jeden einzelnen auf, was er verarbeitet, wo und unter welchen Sicherheitsvorkehrungen. **Dienstanbieter und Vertragspartner:** Golden Fish CSP LLC (VAE). **Herausgeber und Inhaber des geistigen Eigentums:** MindMeeting OÜ (EE).

Die Verarbeitung findet standardmäßig in der EU statt. Befindet sich das Unternehmensregister eines Anbieters außerhalb der EU/EWR, sind die Übertragungen durch Standardvertragsklauseln (SCCs) und/oder das EU-US-Datenschutzrahmen (DPF) abgedeckt. Wir aktualisieren diese Liste, sobald ein Unterauftragsverarbeiter hinzugefügt oder entfernt wird.

| Unterauftragsverarbeiter | Firmensitz | Zweck | Verarbeitete personenbezogene Daten | Verarbeitungsort | Schutzmaßnahmen |
| --- | --- | --- | --- | --- | --- |
| Vercel Inc. | US | Hosting von Web-Anwendungen, Serverless Functions, AI Gateway (Proxy) | Gesamter App-Verkehr inkl. Meeting-Metadaten, Chat | Funktionen auf Frankfurt (fra1) beschränkt; AI Gateway hat eine Richtlinie zur Null-Datenaufbewahrung (keine Speicherung von Prompts) | DPA + SCCs; ZDR |
| Fly.io Inc. | US | Hosting von Echtzeit-WebSocket-Servern | Chat-Verteilung, Konferenzereignisse, Transkriptionswörter im Transit | Paris (CDG) | DPA + SCCs |
| Neon Inc. | US | Postgres (primäre Datenbank) | Konten, Meetings, Nachrichten, Transkripte, Abrechnungsnutzung | Frankfurt (AWS eu-central-1) | DPA + SCCs; Verschlüsselung im Ruhezustand |
| Tigris Data Inc. | US | Objektspeicher | Meeting-Aufzeichnungen, Chat-Anhänge, Dokumente, Exportarchive | EU multi-region (Frankfurt + Amsterdam) | DPA; TLS |
| MindMeeting OÜ (Mind API) | EE | Meeting-Medien (SFU), Spracherkennung, Echtzeitübersetzung | Audio-/Videostreams, Sprache, Namen/Rollen der Teilnehmer | OVH, France | Konzerninterne Vereinbarung |
| Mistral AI SAS | FR | KI-Zusammenfassung nach dem Meeting | Meeting-Transkript (einmalig, am Ende des Meetings) | EU | DPA; keine Datenaufbewahrung; kein Training mit bezahlten API-Daten |
| DeepL SE | DE | Dokumentenübersetzung | Inhalte von Dokumenten, die Benutzer zur Übersetzung einreichen | EU (Cologne) | DPA; keine Speicherung zu Trainingszwecken |
| Stripe Payments Europe Ltd / Stripe Inc. | IE / US | Abrechnung | Name, E-Mail, Rechnungsadresse, Zahlungsmethode (Karte berührt InterMIND nie) | EU / US | DPA + SCCs; PCI-DSS |
| PostHog | US (EU Cloud) | Produktanalysen, Session-Wiedergabe | Nutzungsereignisse, Konsole/Wiedergabe (zustimmungsgesteuert, standardmäßig Opt-out; Meeting-Sprache aus Protokollen entfernt) | EU (eu.posthog.com) | DPA; EU-Ansässigkeit |
| Functional Software Inc. (Sentry) | US (EU region) | Fehlerüberwachung | Fehlerspuren, Breadcrumbs (kein Meeting-Inhalt) | EU (de.sentry.io) | DPA; EU-Ansässigkeit |
| Resend | US | Transaktions-E-Mails (Anmeldecodes, Benachrichtigungen) | Empfänger-E-Mail, Nachrichteninhalte | Ireland (eu-west-1) | DPA + SCCs |
| Upstash Inc. | US | OIDC-Sitzungscache (Redis) | Verschlüsselter Sitzungs-/Token-Cache | Frankfurt (fra1) | DPA + SCCs; verschlüsselte Payloads |
| Pipedrive OÜ | EE | Sales CRM (Kontakt-/Partnerformulare) | Name des Leads, E-Mail, Unternehmen, Nachricht | EU | DPA |
| Google LLC / Microsoft Corp. | US | Nur OAuth-Anmeldung | Name, E-Mail, Profilfoto (Standard-OAuth-Bereiche) | US | DPF / SCCs |

Bei Fragen zu dieser Liste oder um eine Kopie der relevanten Übertragungsschutzmaßnahmen anzufordern, kontaktieren Sie privacy@mind.com.
