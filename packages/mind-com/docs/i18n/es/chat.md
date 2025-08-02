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
    // Búsquedas basadas en problemas - Barreras lingüísticas en los negocios
    { id: "1", text: "Cómo comunicarse con clientes extranjeros sin conocer su idioma", category: "communication" },
    { id: "2", text: "Traducción en tiempo real para reuniones de negocios", category: "translation" },
    { id: "3", text: "Software de interpretación para videollamadas", category: "interpretation" },
    { id: "4", text: "Negocios perdidos por barreras del idioma", category: "business-problems" },
    
    // Escenarios específicos de negocios
    { id: "5", text: "Cómo presentar a clientes internacionales", category: "presentations" },
    { id: "6", text: "Realizar demostraciones de productos en diferentes idiomas", category: "demos" },
    { id: "7", text: "Mejores prácticas para reuniones internacionales de ventas", category: "sales" },
    { id: "8", text: "Comunicarse con proveedores de diferentes países", category: "supply-chain" },
    
    // Búsquedas de soluciones
    { id: "9", text: "Alternativa a intérpretes humanos costosos", category: "cost-saving" },
    { id: "10", text: "Comparación entre traducción AI y traductor humano", category: "comparison" },
    { id: "11", text: "Traducción instantánea de idiomas para negocios", category: "instant-translation" },
    { id: "12", text: "Herramientas de colaboración multilingüe", category: "collaboration" },
    
    // Búsquedas de requisitos técnicos
    { id: "13", text: "Precisión de traducción para discusiones técnicas", category: "accuracy" },
    { id: "14", text: "Software de traducción seguro para empresas", category: "security" },
    { id: "15", text: "Integración con videoconferencias existentes", category: "integration" },
    { id: "16", text: "Servicio de traducción compatible con GDPR", category: "compliance" },
    
    // ROI y valor comercial
    { id: "17", text: "Costo de la mala comunicación en negocios internacionales", category: "roi" },
    { id: "18", text: "Calcular costos de intérprete vs solución AI", category: "cost-calculator" },
    { id: "19", text: "Aumentar tasas de conversión en ventas internacionales", category: "conversion" },
    { id: "20", text: "Expansión global sin capacitación en idiomas", category: "expansion" },
    
    // Búsquedas de comparación de competidores
    { id: "21", text: "Limitaciones de traducción de Google Meet", category: "google-meet" },
    { id: "22", text: "Problemas de traducción de subtítulos en Zoom", category: "zoom" },
    { id: "23", text: "Problemas de calidad de traducción en Microsoft Teams", category: "teams" },
    
    // Búsquedas específicas por industria
    { id: "24", text: "Comunicación en manufactura con proveedores extranjeros", category: "manufacturing" },
    { id: "25", text: "Solución de idiomas para negocios de exportación", category: "export" },
]
</script>

<AIChat :prompts="chatPrompts" />