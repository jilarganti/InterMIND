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
  { id: "1", text: "Expo City Dubai", category: "atracciones" },
  { id: "2", text: "Entradas Dubai Frame", category: "atracciones" },
  { id: "3", text: "Entradas Burj Khalifa", category: "atracciones" },
  { id: "4", text: "Museum of the Future", category: "atracciones" },
  { id: "5", text: "Abu Dhabi Louvre", category: "atracciones" },
  { id: "6", text: "Ferrari World Abu Dhabi", category: "atracciones" },
  { id: "7", text: "Restaurantes Dubai Mall", category: "comida" },
  { id: "8", text: "Mejor comida árabe en Dubai", category: "comida" },
  { id: "9", text: "Restaurantes estrella Michelin Dubai", category: "comida" },
  { id: "10", text: "Comida callejera en Sharjah", category: "comida" },
  { id: "11", text: "Alquiler en Palm Jumeirah", category: "vivienda" },
  { id: "12", text: "Apartamentos Dubai Marina", category: "vivienda" },
  { id: "13", text: "Vivienda asequible en Abu Dhabi", category: "vivienda" },
  { id: "14", text: "Leyes de alquiler UAE", category: "vivienda" },
  { id: "15", text: "Mapa del Metro de Dubai", category: "transporte" },
  { id: "16", text: "Tarifas de taxi Abu Dhabi", category: "transporte" },
  { id: "17", text: "Licencia de conducir UAE", category: "transporte" },
  { id: "18", text: "Servicios RTA Dubai", category: "transporte" },
  { id: "19", text: "Compras Dubai Mall", category: "compras" },
  { id: "20", text: "Global Village Dubai", category: "compras" },
  { id: "21", text: "Dubai Gold Souk", category: "compras" },
  { id: "22", text: "Ofertas Mall of Emirates", category: "compras" },
  { id: "23", text: "Establecer negocio en UAE", category: "negocios" },
  { id: "24", text: "Dubai Free Zones", category: "negocios" },
  { id: "25", text: "Registro de empresa UAE", category: "negocios" },
  { id: "26", text: "Visa freelance UAE", category: "negocios" },
  { id: "27", text: "Requisitos visa UAE", category: "viajes" },
  { id: "28", text: "Atracciones turísticas Dubai", category: "viajes" },
  { id: "29", text: "Solicitud visa de visita UAE", category: "viajes" },
  { id: "30", text: "Lugares turísticos Abu Dhabi", category: "viajes" },
  { id: "31", text: "Safari por el desierto Dubai", category: "viajes" },
  { id: "32", text: "Trabajos para expatriados Dubai", category: "empleos" },
  { id: "33", text: "Proceso permiso trabajo UAE", category: "empleos" },
  { id: "34", text: "Trabajos remotos en UAE", category: "empleos" },
  { id: "35", text: "Guía salarial UAE", category: "empleos" },
  { id: "36", text: "Pronóstico del tiempo UAE", category: "eventos" },
  { id: "37", text: "Próximos eventos Dubai", category: "eventos" },
  { id: "38", text: "Celebraciones día nacional UAE", category: "eventos" },
  { id: "39", text: "Festival de compras Dubai", category: "eventos" },
  { id: "40", text: "Renovación Emirates ID", category: "servicios" },
  { id: "41", text: "Servicios bancarios UAE", category: "servicios" },
  { id: "42", text: "Pago factura DEWA", category: "servicios" },
  { id: "43", text: "Actualización paquete Etisalat", category: "servicios" },
  { id: "44", text: "Mejores escuelas en Dubai", category: "educación" },
  { id: "45", text: "Admisión universidad UAE", category: "educación" },
  { id: "46", text: "Calificaciones escuelas KHDA", category: "educación" },
  { id: "47", text: "Seguro médico UAE", category: "salud" },
  { id: "48", text: "Mejores hospitales en Dubai", category: "salud" },
  { id: "49", text: "Chequeo médico UAE", category: "salud" },
  { id: "50", text: "Servicios DHA", category: "salud" }
]
</script>

<AIChat :prompts="chatPrompts" />