---
footer: false
# sidebar: false
# aside: false
next: false
lastUpdated: false
navbar: false
# layout: doc
---

<script setup>
  const chatPrompts = [
    // Schmerzbasierte Suchanfragen - Sprachbarrieren im Geschäftsleben
    { id: "1", text: "Wie kommuniziere ich mit ausländischen Kunden ohne deren Sprache zu kennen", category: "communication" },
    { id: "2", text: "Echtzeit-Übersetzung für Geschäftsbesprechungen", category: "translation" },
    { id: "3", text: "Dolmetscher-Software für Videoanrufe", category: "interpretation" },
    { id: "4", text: "Verlorene Geschäfte durch Sprachbarrieren", category: "business-problems" },
    
    // Spezifische Geschäftsszenarien
    { id: "5", text: "Wie präsentiere ich vor internationalen Kunden", category: "presentations" },
    { id: "6", text: "Produktdemos in verschiedenen Sprachen durchführen", category: "demos" },
    { id: "7", text: "Best Practices für internationale Vertriebsgespräche", category: "sales" },
    { id: "8", text: "Kommunikation mit Lieferanten aus verschiedenen Ländern", category: "supply-chain" },
    
    // Lösungssuchende Anfragen
    { id: "9", text: "Alternative zu teuren menschlichen Dolmetschern", category: "cost-saving" },
    { id: "10", text: "KI-Übersetzung vs. menschlicher Übersetzer Vergleich", category: "comparison" },
    { id: "11", text: "Sofortige Sprachübersetzung für Unternehmen", category: "instant-translation" },
    { id: "12", text: "Mehrsprachige Team-Kollaborationstools", category: "collaboration" },
    
    // Technische Anforderungen Suchen
    { id: "13", text: "Übersetzungsgenauigkeit für technische Diskussionen", category: "accuracy" },
    { id: "14", text: "Sichere Übersetzungssoftware für Unternehmen", category: "security" },
    { id: "15", text: "Integration mit bestehender Videokonferenz", category: "integration" },
    { id: "16", text: "DSGVO-konforme Übersetzungsdienste", category: "compliance" },
    
    // ROI und Geschäftswert
    { id: "17", text: "Kosten von Kommunikationsfehlern im internationalen Geschäft", category: "roi" },
    { id: "18", text: "Dolmetscherkosten vs. KI-Lösung berechnen", category: "cost-calculator" },
    { id: "19", text: "Internationale Verkaufskonversionsraten steigern", category: "conversion" },
    { id: "20", text: "Globale Expansion ohne Sprachtraining", category: "expansion" },
    
    // Wettbewerbsvergleich Suchen
    { id: "21", text: "Google Meet Übersetzungsbeschränkungen", category: "google-meet" },
    { id: "22", text: "Zoom Untertitel-Übersetzungsprobleme", category: "zoom" },
    { id: "23", text: "Microsoft Teams Übersetzungsqualitätsprobleme", category: "teams" },
    
    // Branchenspezifische Suchen
    { id: "24", text: "Fertigungskommunikation mit ausländischen Lieferanten", category: "manufacturing" },
    { id: "25", text: "Sprachlösung für Exportgeschäfte", category: "export" },
]
</script>

<AIChat :prompts="chatPrompts" />