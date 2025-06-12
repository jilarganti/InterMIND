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
    { id: "49", text: "páginas populares de este sitio, tabla", category: "general" },
    { id: "49", text: "este sitio, top 10 preguntas frecuentes", category: "general" },
    { id: "49", text: "enlaces de sitios de free zone, tabla", category: "general" },
    { id: "49", text: "tabla de enlaces a sitios de free zone con precio", category: "general" },
    
    { id: "1", text: "Registro de empresa en EAU", category: "business" },
    { id: "7", text: "Requisitos de licencia comercial en EAU", category: "business" },
    { id: "7", text: "comparación de tipos de entidades en EAU, tabla y análisis", category: "business" },
    { id: "7", text: "comparación experta del costo de reubicación de una empresa británica a varias free zones para un negocio financiero con dos fundadores. 8 visas, 3 miembros de familia + un perro. Alquiler en centro de negocios. Británico, no residente en EAU", category: "business" },
    { id: "48", text: "10 Mejores Hospitales en EAU, Ventajas y Desventajas", category: "healthcare" },

    { id: "15", text: "Poder Notarial en EAU", category: "legal" },

    // Servicios empresariales (primer bloque)
    { id: "2", text: "Establecimiento de empresa Mainland", category: "business" },
    { id: "3", text: "Registro de empresa en Free Zone", category: "business" },
    { id: "4", text: "Formación de empresa Offshore", category: "business" },
    { id: "5", text: "Visa de freelance en EAU", category: "business" },
    { id: "6", text: "Licencia comercial en Dubái", category: "business" },
    { id: "23", text: "Establecimiento de negocio en EAU", category: "business" },
    { id: "24", text: "Free Zones de Dubái", category: "business" },
    { id: "25", text: "Registro de empresa en EAU", category: "business" },
    { id: "26", text: "Visa de freelance en EAU", category: "business" },
    
    // Visas e inmigración
    { id: "8", text: "Solicitud de Golden Visa EAU", category: "visa" },
    { id: "9", text: "Visa de trabajo en EAU", category: "visa" },
    { id: "10", text: "Patrocinio de visa familiar en EAU", category: "visa" },
    { id: "11", text: "Requisitos de examen médico para visa", category: "visa" },
    { id: "12", text: "Proceso de visa de residencia en EAU", category: "visa" },
    { id: "27", text: "Requisitos de visa para EAU", category: "visa" },
    
    // Legal y documentos
    { id: "13", text: "Solicitud de Emirates ID", category: "legal" },
    { id: "14", text: "Legalización de documentos en EAU", category: "legal" },
    { id: "16", text: "Revisión de contratos comerciales en EAU", category: "legal" },
    { id: "40", text: "Renovación de Emirates ID", category: "legal" },
    
    // Servicios financieros
    { id: "17", text: "Cuenta bancaria corporativa en EAU", category: "finance" },
    { id: "18", text: "Registro fiscal en EAU (IVA)", category: "finance" },
    { id: "19", text: "Servicios de contabilidad en EAU", category: "finance" },
    { id: "20", text: "Regulaciones de Sustancia Económica en EAU", category: "finance" },
    { id: "41", text: "Servicios bancarios en EAU", category: "finance" },
    
    // Propiedad y servicios
    { id: "21", text: "Inversión inmobiliaria en EAU", category: "property" },
    { id: "22", text: "Alquiler de oficinas en Dubái", category: "property" },

    // Salud
    { id: "47", text: "Seguro médico en EAU", category: "healthcare" },
    { id: "49", text: "Chequeo médico en EAU", category: "healthcare" },
    
    // Turismo y entretenimiento (al final)
    { id: "28", text: "Atracciones turísticas de Dubái", category: "travel" },
    { id: "29", text: "Expo City Dubai", category: "attractions" },
    { id: "30", text: "Entradas Dubai Frame", category: "attractions" },
    { id: "31", text: "Entradas Burj Khalifa", category: "attractions" },
    { id: "32", text: "Museo del Futuro", category: "attractions" },
    { id: "33", text: "Louvre Abu Dhabi", category: "attractions" },
    { id: "34", text: "Ferrari World Abu Dhabi", category: "attractions" },
    { id: "35", text: "Compras en Dubai Mall", category: "shopping" },
]
</script>

<AIChat :prompts="chatPrompts" />
