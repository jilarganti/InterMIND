<script setup>
  const chatPrompts = [
    // Búsquedas basadas en problemas - Barreras idiomáticas en los negocios
    "Alternativa a intérpretes humanos costosos",
    "Cómo comunicarse con clientes extranjeros sin conocer su idioma",
    "Traducción en tiempo real para reuniones de negocios",
    "Software de intérprete para videollamadas",
    "Negocios perdidos por barreras idiomáticas",
    
    // Escenarios específicos de negocios
    "Cómo presentar a clientes internacionales",
    "Realizar demostraciones de productos en diferentes idiomas",
    "Mejores prácticas para reuniones de ventas internacionales",
    "Comunicarse con proveedores de diferentes países",
    
    // Búsquedas de soluciones
    "Comparación entre traducción IA vs traductor humano",
    "Traducción instantánea de idiomas para negocios",
    "Herramientas de colaboración para equipos multilingües",
    
    // Búsquedas de requisitos técnicos
    "Precisión de traducción para discusiones técnicas",
    "Software de traducción seguro para empresas",
    "Integración con videoconferencias existentes",
    "Servicio de traducción compatible con GDPR",
    
    // ROI y valor empresarial
    "Costo de la falta de comunicación en negocios internacionales",
    "Calcular costos de intérprete vs solución IA",
    "Aumentar tasas de conversión de ventas internacionales",
    "Expansión global sin capacitación en idiomas",
    
    // Búsquedas de comparación con competidores
    "Limitaciones de traducción de Google Meet",
    "Problemas de traducción de subtítulos de Zoom",
    "Problemas de calidad de traducción de Microsoft Teams",
    
    // Búsquedas específicas por industria
    "Comunicación manufacturera con proveedores extranjeros",
    "Solución de idiomas para negocios de exportación",
  ]
</script>

<AIChat :prompts="chatPrompts" />