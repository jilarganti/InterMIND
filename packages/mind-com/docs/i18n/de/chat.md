<script setup>
  const chatPrompts = [
    // Schmerzbasierte Suchanfragen - Sprachbarrieren im Geschäftsleben
    "Alternative zu teuren menschlichen Dolmetschern",
    "Wie man mit ausländischen Kunden kommuniziert ohne ihre Sprache zu sprechen",
    "Echtzeit-Übersetzung für Geschäftsmeetings",
    "Videoanruf-Dolmetscher-Software",
    "Verlorene Geschäfte aufgrund von Sprachbarrieren",
    
    // Spezifische Geschäftsszenarien
    "Wie man internationalen Kunden präsentiert",
    "Produktdemos in verschiedenen Sprachen durchführen",
    "Best Practices für internationale Verkaufsmeetings",
    "Kommunikation mit Lieferanten aus verschiedenen Ländern",
    
    // Lösungssuchende Anfragen
    "KI-Übersetzung vs. menschlicher Übersetzer Vergleich",
    "Sofortige Sprachübersetzung für Unternehmen",
    "Mehrsprachige Tools für Teamzusammenarbeit",
    
    // Technische Anforderungen Suchen
    "Übersetzungsgenauigkeit für technische Diskussionen",
    "Sichere Übersetzungssoftware für Unternehmen",
    "Integration in bestehende Videokonferenz-Systeme",
    "DSGVO-konforme Übersetzungsdienstleistung",
    
    // ROI und Geschäftswert
    "Kosten von Missverständnissen im internationalen Geschäft",
    "Dolmetscherkosten vs. KI-Lösung berechnen",
    "Internationale Verkaufskonversionsraten steigern",
    "Globale Expansion ohne Sprachtraining",
    
    // Wettbewerbervergleich Suchen
    "Google Meet Übersetzungsbeschränkungen",
    "Zoom Untertitel-Übersetzungsprobleme",
    "Microsoft Teams Übersetzungsqualitätsprobleme",
    
    // Branchenspezifische Suchen
    "Fertigungskommunikation mit Übersee-Lieferanten",
    "Exportgeschäft Sprachlösung",
  ]
</script>

<AIChat :prompts="chatPrompts" />