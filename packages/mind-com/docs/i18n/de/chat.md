<script setup>
  const chatPrompts = [
    // Schmerzbasierte Suchanfragen - Sprachbarrieren im Geschäftsleben
    "Alternative zu teuren menschlichen Dolmetschern",
    "Wie kommuniziere ich mit ausländischen Kunden ohne ihre Sprache zu kennen",
    "Echtzeit-Übersetzung für Geschäftsmeetings",
    "Videoanruf-Dolmetscher-Software",
    "Verlorene Geschäfte durch Sprachbarrieren",
    
    // Spezifische Geschäftsszenarien
    "Wie präsentiere ich vor internationalen Kunden",
    "Produktdemos in verschiedenen Sprachen durchführen",
    "Best Practices für internationale Vertriebsmeetings",
    "Kommunikation mit Lieferanten aus verschiedenen Ländern",
    
    // Lösungssuchende Anfragen
    "KI-Übersetzung vs. menschlicher Übersetzer Vergleich",
    "Sofortige Sprachübersetzung für Unternehmen",
    "Tools für mehrsprachige Teamzusammenarbeit",
    
    // Technische Anforderungssuchen
    "Übersetzungsgenauigkeit für technische Diskussionen",
    "Sichere Übersetzungssoftware für Unternehmen",
    "Integration in bestehende Videokonferenzen",
    "DSGVO-konforme Übersetzungsdienste",
    
    // ROI und Geschäftswert
    "Kosten von Kommunikationsfehlern im internationalen Geschäft",
    "Dolmetscherkosten vs. KI-Lösung berechnen",
    "Internationale Verkaufskonversionsraten steigern",
    "Globale Expansion ohne Sprachtraining",
    
    // Wettbewerbervergleichssuchen
    "Google Meet Übersetzungsbeschränkungen",
    "Zoom Untertitel-Übersetzungsprobleme",
    "Microsoft Teams Übersetzungsqualitätsprobleme",
    
    // Branchenspezifische Suchen
    "Kommunikation mit ausländischen Lieferanten in der Fertigung",
    "Sprachlösung für Exportgeschäfte",
  ]
</script>

<AIChat :prompts="chatPrompts" />