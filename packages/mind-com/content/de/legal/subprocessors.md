---
title: Unterauftragsverarbeiter
description: Die Infrastruktur- und Dienstanbieter, die InterMIND zur Verarbeitung personenbezogener Daten einsetzt – Zweck, Verarbeitungsregion und Sicherheitsvorkehrungen jedes Anbieters.
updated: "2026-09-02"
---

Um InterMIND zu betreiben, nutzen wir eine kleine Auswahl an Infrastruktur- und Dienstanbietern („Unterauftragsverarbeiter“). Diese Seite listet jeden einzelnen auf, was er verarbeitet, wo und unter welchen Schutzvorkehrungen. **Dienstleistungsbetreiber und Vertragspartner:** Golden Fish LLC (VAE). **Herausgeber und Inhaber des geistigen Eigentums:** MindMeeting OÜ (EE).

Die Verarbeitung erfolgt standardmäßig in der EU. Wenn die juristische Person eines Anbieters außerhalb der EU/EWR ansässig ist, werden Übermittlungen durch Standardvertragsklauseln (SCCs) und/oder das EU-US-Datenschutzrahmenabkommen (DPF) abgedeckt. Wir aktualisieren diese Liste, sobald ein Unterauftragsverarbeiter hinzugefügt oder entfernt wird.

| Unterauftragsverarbeiter | Firmensitz | Zweck | Verarbeitete personenbezogene Daten | Verarbeitungsort | Schutzvorkehrungen |
| --- | --- | --- | --- | --- | --- |
| Vercel Inc. | US | Web-App-Hosting, Serverless-Funktionen, AI Gateway (Proxy) | Gesamter App-Traffic inkl. Meeting-Metadaten, Chat | Funktionen auf Frankfurt (fra1) beschränkt; AI Gateway hat eine Richtlinie zur Nulldatenaufbewahrung (keine Prompt-Aufbewahrung) | DPA + SCCs; ZDR |
| Fly.io Inc. | US | Echtzeit-WebSocket-Server-Hosting | Chat-Verteilung, Konferenz-Events, Transkriptionswörter während der Übertragung | Paris (CDG) | DPA + SCCs |
| Neon Inc. | US | Postgres (primäre Datenbank) | Konten, Meetings, Nachrichten, Transkripte, Abrechnungsnutzung | Frankfurt (AWS eu-central-1) | DPA + SCCs; Verschlüsselung im Ruhezustand |
| Tigris Data Inc. | US | Objektspeicher | Meeting-Aufzeichnungen, Chat-Anhänge, Dokumente, Export-Archive | EU-Multiregion (Frankfurt + Amsterdam) | DPA; TLS |
| MindMeeting OÜ (Mind API) | EE | Meeting-Medien (SFU), Spracherkennung, Echtzeitübersetzung | Audio-/Video-Streams, Sprache, Teilnehmernamen/-rollen | OVH, Frankreich | Konzerninterne Vereinbarung |
| Mistral AI SAS | FR | KI-Zusammenfassung nach dem Meeting | Meeting-Transkript (einmalig, am Ende des Meetings) | EU | DPA; Nulldatenaufbewahrung; keine Schulung mit bezahlten API-Daten |
| DeepL SE | DE | Dokumentenübersetzung | Inhalte von Dokumenten, die Benutzer zur Übersetzung einreichen | EU (Köln) | DPA; keine Aufbewahrung zu Trainingszwecken |
| Stripe Payments Europe Ltd / Stripe Inc. | IE / US | Abrechnung | Name, E-Mail, Rechnungsadresse, Zahlungsmethode (Karte berührt InterMIND nie) | EU / US | DPA + SCCs; PCI-DSS |
| PostHog | US (EU Cloud) | Produktanalysen, Session-Replay | Nutzungsereignisse, Konsole/Replay (einwilligungsgesteuert, standardmäßig Opt-out; Meeting-Sprache aus Protokollen entfernt) | EU (eu.posthog.com) | DPA; EU-Residenz |
| Functional Software Inc. (Sentry) | US (EU region) | Fehlerüberwachung | Fehler-Traces, Breadcrumbs (keine Meeting-Inhalte) | EU (de.sentry.io) | DPA; EU-Residenz |
| Resend | US | Transaktions-E-Mails (Anmeldecodes, Benachrichtigungen) | Empfänger-E-Mail, Nachrichteninhalte | Irland (eu-west-1) | DPA + SCCs |
| Upstash Inc. | US | OIDC-Sitzungscache (Redis) | Verschlüsselter Sitzungs-/Token-Cache | Frankfurt (fra1) | DPA + SCCs; verschlüsselte Payloads |
| Pipedrive OÜ | EE | Vertriebs-CRM (Kontakt-/Partnerformulare) | Lead-Name, E-Mail, Unternehmen, Nachricht | EU | DPA |
| Google LLC / Microsoft Corp. | US | Nur OAuth-Anmeldung | Name, E-Mail, Profilfoto (Standard-OAuth-Bereiche) | US | DPF / SCCs |

Bei Fragen zu dieser Liste oder um eine Kopie der relevanten Übermittlungs-Schutzvorkehrungen anzufordern, kontaktieren Sie bitte privacy@mind.com.
