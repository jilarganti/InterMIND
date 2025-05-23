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
    { id: "49", text: "beliebte Seiten dieser Website, Tabelle", category: "general" },
    { id: "49", text: "diese Website, Top 10 FAQ", category: "general" },
    { id: "49", text: "Free Zone Website-Links, Tabelle", category: "general" },
    { id: "49", text: "Tabelle mit Links zu Free Zone Websites mit Preisen", category: "general" },
    
    { id: "1", text: "Firmengründung in den VAE", category: "business" },
    { id: "7", text: "VAE Gewerbelizenz Anforderungen", category: "business" },
    { id: "7", text: "Vergleich der VAE Unternehmensformen, Tabelle & Analyse", category: "business" },
    { id: "7", text: "Expertenvergleich der Kosten für die Verlagerung eines Unternehmens von Großbritannien in verschiedene Free Zones für ein Finanzunternehmen mit zwei Gründern. 8 Visa, 3 Familienmitglieder + ein Hund. Miete in einem Business Center. Brite, kein VAE-Resident", category: "business" },
    { id: "48", text: "Die 10 besten Krankenhäuser in den VAE, Vor- und Nachteile", category: "healthcare" },

    { id: "15", text: "Vollmacht in den VAE", category: "legal" },

    // Geschäftsdienstleistungen (erster Block)
    { id: "2", text: "Mainland Firmengründung", category: "business" },
    { id: "3", text: "Free Zone Firmenregistrierung", category: "business" },
    { id: "4", text: "Offshore Firmengründung", category: "business" },
    { id: "5", text: "VAE Freelance Visum", category: "business" },
    { id: "6", text: "Dubai Gewerbelizenz", category: "business" },
    { id: "23", text: "VAE Unternehmensaufbau", category: "business" },
    { id: "24", text: "Dubai Free Zones", category: "business" },
    { id: "25", text: "VAE Firmenregistrierung", category: "business" },
    { id: "26", text: "VAE Freelance Visum", category: "business" },
    
    // Visa und Immigration
    { id: "8", text: "VAE Golden Visa Antrag", category: "visa" },
    { id: "9", text: "VAE Arbeitsvisum", category: "visa" },
    { id: "10", text: "Familienvisum Sponsoring in den VAE", category: "visa" },
    { id: "11", text: "Visum medizinische Testanforderungen", category: "visa" },
    { id: "12", text: "VAE Aufenthaltsvisum Prozess", category: "visa" },
    { id: "27", text: "VAE Visa Anforderungen", category: "visa" },
    
    // Rechtliches und Dokumente
    { id: "13", text: "Emirates ID Antrag", category: "legal" },
    { id: "14", text: "VAE Dokumentenbeglaubigung", category: "legal" },
    { id: "16", text: "VAE Geschäftsvertragsüberprüfung", category: "legal" },
    { id: "40", text: "Emirates ID Erneuerung", category: "legal" },
    
    // Finanzdienstleistungen
    { id: "17", text: "VAE Firmenbankkonten", category: "finance" },
    { id: "18", text: "VAE Steuerregistrierung (VAT)", category: "finance" },
    { id: "19", text: "Buchhaltungsservices in den VAE", category: "finance" },
    { id: "20", text: "VAE Economic Substance Regulations", category: "finance" },
    { id: "41", text: "VAE Bankdienstleistungen", category: "finance" },
    
    // Immobilien und Dienstleistungen
    { id: "21", text: "VAE Immobilieninvestition", category: "property" },
    { id: "22", text: "Dubai Büroflächen Vermietung", category: "property" },

    // Gesundheitswesen
    { id: "47", text: "VAE Krankenversicherung", category: "healthcare" },
    { id: "49", text: "Medizinische Untersuchung VAE", category: "healthcare" },
    
    // Tourismus und Unterhaltung (am Ende)
    { id: "28", text: "Dubai Touristenattraktionen", category: "travel" },
    { id: "29", text: "Expo City Dubai", category: "attractions" },
    { id: "30", text: "Dubai Frame Tickets", category: "attractions" },
    { id: "31", text: "Burj Khalifa Tickets", category: "attractions" },
    { id: "32", text: "Museum of the Future", category: "attractions" },
    { id: "33", text: "Abu Dhabi Louvre", category: "attractions" },
    { id: "34", text: "Ferrari World Abu Dhabi", category: "attractions" },
    { id: "35", text: "Dubai Mall Shopping", category: "shopping" },
]
</script>

<AIChat :prompts="chatPrompts" />