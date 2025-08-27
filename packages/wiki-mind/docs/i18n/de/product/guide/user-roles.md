# Benutzerrollen

InterMIND unterscheidet vier verschiedene Benutzerrollen, die jeweils sorgfältig entwickelt wurden, um sichere, kollaborative und anpassungsfähige Meeting-Erfahrungen zu verbessern. Die Host-Rolle ist mit der höchsten Autoritätsebene ausgestattet, während die anderen Rollen unterschiedliche Interaktionsebenen bieten.

## Gastgeber

Der Gastgeber ist für die Initiierung des Meetings verantwortlich und verfügt über umfassende administrative Berechtigungen.

**Hauptfunktionen:**

- Meetings starten und beenden
- Jeden Teilnehmer stummschalten
- Moderatoren befördern oder degradieren
- Aufzeichnungen starten und stoppen
  - Dies umfasst alle vom Moderator initiierten Aufzeichnungen
- Beliebige Teilnehmer aus dem Anruf entfernen
- Gäste zulassen oder ablehnen
- Auf Meeting-Verlauf zugreifen
- Alle KI-Funktionen nutzen
- Persönliche Einstellungen, Layout, Unschärfe und Anzeigeoptionen anpassen

## Moderator

Moderatoren werden vom Gastgeber bestimmt, um bei der effektiven Verwaltung der Sitzung zu helfen.

**Hauptfunktionen:**

- Jeden Teilnehmer stummschalten
- Aufzeichnungen starten und stoppen
  - Dies umfasst alle vom Gastgeber initiierten Aufzeichnungen
- Gäste zulassen oder ablehnen
- Alle Teilnehmer aus dem Anruf entfernen, außer dem Gastgeber
- Den Online-Sprachübersetzer verwenden und die Sprache ändern (für ihr eigenes Audio)
- Den KI-Assistenten verwenden (für ihre eigene Ansicht)
- Am Chat teilnehmen, Hände heben oder senken
- Auf Transkripte und Besprechungsverlauf zugreifen
- Andere Moderatoren befördern oder degradieren

## Teilnehmer (Autorisierter Benutzer)

Autorisierte Teilnehmer sind angemeldete Benutzer, die dem Meeting ohne besondere Berechtigungen beitreten.

**Hauptfunktionen:**

- Ihr eigenes Mikrofon stumm schalten oder aktivieren
- Ihre eigene Kamera aktivieren oder deaktivieren
- Ihren Bildschirm teilen (Desktop-Browser)
- Den KI-Assistenten verwenden (für ihre eigene Ansicht)
- Den Online-Sprachübersetzer verwenden und die Sprache ändern (für ihr eigenes Audio)
- Persönliches Layout und Einstellungen anpassen
- Zugriff auf Chat, Hand heben, Transkripte und Meeting-Verlauf

## Gast (Anonymer Benutzer)

Gäste sind Benutzer, die an der Besprechung teilnehmen, ohne sich anzumelden.

**Hauptfunktionen:**

- Verwendung des eigenen Mikrofons und der Kamera
- Bildschirmfreigabe (Desktop-Browser)
- Verwendung des Online-Sprachübersetzers und Sprachwechsel (nur für eigenes Audio)
- Nutzung von Layout- und Anzeigeoptionen (nur persönlich)
- Teilnahme am Chat und Hand heben

> [!WARNING]
> Gäste können andere Teilnehmer nicht verwalten.

## Übersichtstabelle der Rollenberechtigung

| Funktion                       | Host  | Moderator | Teilnehmer  | Gast  |
| ------------------------------ | ----- | --------- | ----------- | ----- |
| Meeting starten                | ✅    | ❌        | ❌          | ❌    |
| Beliebigen Teilnehmer stummschalten | ✅    | ✅        | ❌          | ❌    |
| Beliebigen Teilnehmer entstummen | ❌    | ❌        | ❌          | ❌    |
| Eigenes Mikrofon stumm-/entstummen | ✅    | ✅        | ✅          | ✅    |
| Eigene Kamera ein-/ausschalten | ✅    | ✅        | ✅          | ✅    |
| Aufzeichnung starten/stoppen   | ✅    | ✅        | ❌          | ❌    |
| Bildschirm teilen (Desktop)    | ✅    | ✅        | ✅          | ✅    |
| KI-Assistent verwenden         | ✅    | ✅        | ✅          | ❌    |
| Online-Übersetzung verwenden   | ✅    | ✅        | ✅          | ✅    |
| Übersetzungssprache ändern     | ✅    | ✅        | ✅          | ✅    |
| Hand heben / senken            | ✅/✅ | ✅/✅     | ✅/❌       | ✅/❌ |
| Layout / Einstellungen ändern  | ✅    | ✅        | ✅          | ✅    |
| Hintergrundunschärfe ein-/ausschalten | ✅    | ✅        | ✅          | ✅    |
| Gast zulassen/ablehnen         | ✅    | ✅        | ❌          | ❌    |
| Zugriff auf Meeting-Verlauf    | ✅    | ✅        | ✅          | ❌    |
| Teilnehmer entfernen           | ✅    | ✅        | ❌          | ❌    |
| Moderator befördern/degradieren | ✅    | ✅        | ❌          | ❌    |