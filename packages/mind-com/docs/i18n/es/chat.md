<script setup>
  const chatPrompts = [
    // Búsquedas basadas en problemas - Barreras lingüísticas en negocios
    "Alternativa a intérpretes humanos costosos",
    "Cómo comunicarse con clientes extranjeros sin saber su idioma",
    "Traducción en tiempo real para reuniones de negocios",
    "Software de interpretación para videollamadas",
    "Negocios perdidos por barreras del idioma",
    
    // Escenarios específicos de negocios
    "Cómo presentar a clientes internacionales",
    "Realizar demos de productos en diferentes idiomas",
    "Mejores prácticas para reuniones internacionales de ventas",
    "Comunicación con proveedores de diferentes países",
    
    // Búsquedas de soluciones
    "Comparación entre traducción AI y traductor humano",
    "Traducción instantánea para negocios",
    "Herramientas de colaboración multilingüe",
    
    // Búsquedas de requisitos técnicos
    "Precisión de traducción para discusiones técnicas",
    "Software de traducción seguro para empresas",
    "Integración con videoconferencias existentes",
    "Servicio de traducción compatible con GDPR",
    
    // ROI y valor comercial
    "Costo de errores de comunicación en negocios internacionales",
    "Calcular costos de intérprete vs solución AI",
    "Aumentar tasas de conversión en ventas internacionales",
    "Expansión global sin capacitación en idiomas",
    
    // Búsquedas de comparación de competidores
    "Limitaciones de traducción de Google Meet",
    "Problemas de traducción de subtítulos en Zoom",
    "Problemas de calidad de traducción en Microsoft Teams",
    
    // Búsquedas específicas por industria
    "Comunicación con proveedores extranjeros en manufactura",
    "Solución de idiomas para negocios de exportación",
  ]
</script>

<AIChat :prompts="chatPrompts" />