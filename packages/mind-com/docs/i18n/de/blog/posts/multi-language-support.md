---
layout: BlogPost
title: "Mehrsprachige Unterstützung in InterMIND"
date: 2025-03-05
author: Localization Team
---

# Mehrsprachige Unterstützung in InterMIND

InterMIND ist stolz darauf, umfassende mehrsprachige Unterstützung anzubieten und unsere Plattform für Benutzer weltweit zugänglich zu machen.

## Unterstützte Sprachen

Derzeit unterstützt InterMIND **über 19 Sprachen**, darunter:

- Englisch, Spanisch, Französisch, Deutsch
- Chinesisch (Vereinfacht & Traditionell)
- Japanisch, Koreanisch
- Arabisch, Hebräisch
- Russisch, Polnisch
- Und viele mehr!

## So funktioniert es

Unser Übersetzungssystem verwendet:

1. **KI-gestützte Übersetzungen**: Mit OpenAI und Anthropic Modellen
2. **Automatische Fallback-Funktion**: Wenn ein Service ausfällt, wechseln wir zu einem anderen
3. **RTL-Unterstützung**: Vollständige Unterstützung für Rechts-nach-Links-Sprachen

## Erste Schritte mit Übersetzungen

Um auf InterMIND in Ihrer Sprache zuzugreifen:

1. Besuchen Sie Ihre sprachspezifische URL (z.B. `/es/`, `/fr/`, `/ar/`)
2. Der KI-Chat erkennt automatisch Ihre Sprache und antwortet entsprechend
3. Die gesamte Dokumentation ist in Ihrer bevorzugten Sprache verfügbar

## Für Entwickler

Eine neue Sprache hinzuzufügen ist einfach:

```javascript
// In translateConfig.ts
languages: {
  "pt": "Portuguese",
  // Fügen Sie Ihre Sprache hier hinzu
}
```

Dann ausführen: `pnpm translate`

Helfen Sie uns dabei, InterMIND für alle zugänglich zu machen, unabhängig von der Sprache!