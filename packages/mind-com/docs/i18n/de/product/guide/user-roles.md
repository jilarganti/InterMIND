---
title: Benutzerrollen
description: Verstehen Sie InterMIND Benutzerrollen - Host, Moderator, Teilnehmer und Gast. Erfahren Sie mehr über Berechtigungen und Funktionen für jede Rolle.
---

# Benutzerrollen

InterMIND unterscheidet vier verschiedene Benutzerrollen, die jeweils sorgfältig entwickelt wurden, um sichere, kollaborative und anpassungsfähige Meeting-Erfahrungen zu verbessern. Die Host-Rolle ist mit der höchsten Autoritätsebene ausgestattet, während die anderen Rollen unterschiedliche Interaktionsebenen bieten.

## Host

Der Host ist für die Initiierung des Meetings verantwortlich und besitzt umfassende administrative Berechtigungen. Erfahren Sie, wie Sie [create meetings](./creating-meetings).

**Hauptfunktionen:**

- Meetings starten und beenden
- Jeden Teilnehmer stummschalten
- Moderatoren befördern oder degradieren
- Aufzeichnungen starten und stoppen
  - Dies umfasst alle vom Moderator initiierten Aufzeichnungen
- Beliebige Teilnehmer aus dem Anruf entfernen
- Gäste zulassen oder ablehnen
- Zugriff auf [meeting history](./meeting-history)
- Nutzung aller [AI features](./ai-features)
- Persönliche Einstellungen, Layout, Unschärfe und Anzeigeoptionen anpassen (siehe [Meeting Interface](./meeting-interface))

## Moderator

Moderatoren werden vom Host bestimmt, um bei der effektiven Verwaltung der Sitzung zu helfen.

**Hauptfunktionen:**

- Jeden Teilnehmer stummschalten
- Aufzeichnungen starten und stoppen
  - Dies umfasst alle vom Host initiierten Aufzeichnungen
- Gäste zulassen oder ablehnen
- Alle Teilnehmer aus dem Anruf entfernen, außer dem Host
- Den [Online Voice Translator](./ai-features#online-voice-translation) verwenden und die Sprache ändern (für ihr eigenes Audio)
- Den [AI Assistant](./ai-features#ai-assistant) verwenden (für ihre eigene Ansicht)
- Am Chat teilnehmen, Hand heben oder senken
- Auf Transkripte und [Besprechungsverlauf](./meeting-history) zugreifen
- Andere Moderatoren befördern oder degradieren

## Teilnehmer (Autorisierter Benutzer)

Autorisierte Teilnehmer sind angemeldete Benutzer, die dem Meeting ohne besondere Privilegien beitreten.

**Hauptfunktionen:**

- Ihr eigenes Mikrofon stumm schalten oder aktivieren
- Ihre eigene Kamera ein- oder ausschalten
- Ihren Bildschirm teilen (Desktop-Browser)
- Den [KI-Assistenten](./ai-features#ai-assistant) verwenden (für ihre eigene Ansicht)
- Den [Online-Sprachübersetzer](./ai-features#online-voice-translation) verwenden und die Sprache ändern (für ihr eigenes Audio)
- Persönliches Layout und Einstellungen anpassen
- Zugriff auf Chat, Hand heben, Transkripte und [Meeting-Verlauf](./meeting-history)

## Gast (Anonymer Benutzer)

Gäste sind Benutzer, die an der Besprechung teilnehmen, ohne sich anzumelden.

**Hauptfunktionen:**

- Verwendung des eigenen Mikrofons und der Kamera
- Bildschirmfreigabe (Desktop-Browser)
- Nutzung des [Online-Sprachübersetzers](./ai-features#online-voice-translation) und Sprachwechsel (für die eigene Audioausgabe)
- Verwendung von Layout- und Anzeigeoptionen (nur persönlich)
- Teilnahme am Chat und Handheben

> [!WARNING]
> Gäste können andere Teilnehmer nicht verwalten.

## Übersichtstabelle der Rollenberechtigung

| Funktion                       | Host  | Moderator | Teilnehmer | Gast  |
| ------------------------------ | ----- | --------- | ---------- | ----- |
| Meeting starten                | ✅    | ❌        | ❌         | ❌    |
| Beliebigen Teilnehmer stummschalten | ✅    | ✅        | ❌         | ❌    |
| Beliebigen Teilnehmer entstummen | ❌    | ❌        | ❌         | ❌    |
| Eigenes Mikrofon stumm-/entstummen | ✅    | ✅        | ✅         | ✅    |
| Eigene Kamera ein-/ausschalten | ✅    | ✅        | ✅         | ✅    |
| Aufzeichnung starten/stoppen   | ✅    | ✅        | ❌         | ❌    |
| Bildschirm teilen (Desktop)    | ✅    | ✅        | ✅         | ✅    |
| KI-Assistent verwenden         | ✅    | ✅        | ✅         | ❌    |
| Online-Übersetzung verwenden   | ✅    | ✅        | ✅         | ✅    |
| Übersetzungssprache ändern     | ✅    | ✅        | ✅         | ✅    |
| Hand heben / senken            | ✅/✅ | ✅/✅     | ✅/❌      | ✅/❌ |
| Layout / Einstellungen ändern  | ✅    | ✅        | ✅         | ✅    |
| Hintergrundunschärfe ein-/ausschalten | ✅    | ✅        | ✅         | ✅    |
| Gast zulassen/ablehnen         | ✅    | ✅        | ❌         | ❌    |
| Zugriff auf Meeting-Verlauf    | ✅    | ✅        | ✅         | ❌    |
| Teilnehmer entfernen           | ✅    | ✅        | ❌         | ❌    |
| Moderator befördern/degradieren | ✅    | ✅        | ❌         | ❌    |