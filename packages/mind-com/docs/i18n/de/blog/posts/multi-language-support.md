---
layout: BlogPost
title: "Mehrsprachige Unterstützung in InterMIND"
date: 2025-03-05
author: Lokalisierungsteam
---

# Mehrsprachige Unterstützung in InterMIND

InterMIND ist stolz darauf, umfassende mehrsprachige Unterstützung anzubieten, die unsere Plattform Nutzern weltweit zugänglich macht.

<!--more-->

## Unterstützte Sprachen

Derzeit unterstützt InterMIND **19+ Sprachen** einschließlich:

- Englisch, Spanisch, Französisch, Deutsch
- Chinesisch (Vereinfacht & Traditionell)
- Japanisch, Koreanisch
- Arabisch, Hebräisch
- Russisch, Polnisch
- Und viele mehr!

## Wie es funktioniert

Unser Übersetzungssystem verwendet:

1. **KI-gestützte Übersetzungen**: Nutzung von OpenAI und Anthropic Modellen
2. **Automatische Ausfallsicherung**: Bei Ausfall eines Dienstes wird automatisch auf einen anderen umgeschaltet
3. **RTL-Unterstützung**: Vollständige Unterstützung für Rechts-nach-Links-Sprachen

## Erste Schritte mit Übersetzungen

So greifen Sie auf InterMIND in Ihrer Sprache zu:

1. Besuchen Sie Ihre sprachspezifische URL (z.B. `/es/`, `/fr/`, `/ar/`)
2. Der KI-Chat erkennt automatisch Ihre Sprache und antwortet entsprechend
3. Die gesamte Dokumentation ist in Ihrer bevorzugten Sprache verfügbar

## Für Entwickler

Das Hinzufügen einer neuen Sprache ist einfach:

```javascript
// In translateConfig.ts
languages: {
  "pt": "Portuguese",
  // Fügen Sie hier Ihre Sprache hinzu
}
```

Dann führen Sie aus: `pnpm translate`

Helfen Sie uns dabei, InterMIND für jeden zugänglich zu machen, unabhängig von der Sprache!