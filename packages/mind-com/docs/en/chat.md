<script setup>
  const chatPrompts = [
    // Pain-based search queries - Language barriers in business
    "Alternative to expensive human interpreters",
    "How to communicate with foreign clients without knowing their language",
    "Real time translation for business meetings",
    "Video call interpreter software",
    "Lost deals due to language barriers",
    
    // Specific business scenarios
    "How to present to international clients",
    "Conduct product demos in different languages",
    "International sales meeting best practices",
    "Communicate with suppliers from different countries",
    
    // Solution-seeking queries
    "AI translation vs human translator comparison",
    "Instant language translation for business",
    "Multilingual team collaboration tools",
    
    // Technical requirements searches
    "Translation accuracy for technical discussions",
    "Secure translation software for enterprise",
    "Integration with existing video conferencing",
    "GDPR compliant translation service",
    
    // ROI and business value
    "Cost of miscommunication in international business",
    "Calculate interpreter costs vs AI solution",
    "Increase international sales conversion rates",
    "Global expansion without language training",
    
    // Competitor comparison searches
    "Google Meet translation limitations",
    "Zoom subtitle translation problems",
    "Microsoft Teams translation quality issues",
    
    // Industry-specific searches
    "Manufacturing communication with overseas suppliers",
    "Export business language solution",
  ]
</script>

<AIChat :prompts="chatPrompts" />
