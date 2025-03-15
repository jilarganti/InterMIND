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
  { id: "1", text: "Expo City Dubai", category: "atrações" },
  { id: "2", text: "Ingressos Dubai Frame", category: "atrações" },
  { id: "3", text: "Ingressos Burj Khalifa", category: "atrações" },
  { id: "4", text: "Museum of the Future", category: "atrações" },
  { id: "5", text: "Abu Dhabi Louvre", category: "atrações" },
  { id: "6", text: "Ferrari World Abu Dhabi", category: "atrações" },
  { id: "7", text: "Restaurantes Dubai Mall", category: "alimentação" },
  { id: "8", text: "Melhor comida árabe em Dubai", category: "alimentação" },
  { id: "9", text: "Restaurantes estrela Michelin Dubai", category: "alimentação" },
  { id: "10", text: "Comida de rua em Sharjah", category: "alimentação" },
  { id: "11", text: "Aluguel em Palm Jumeirah", category: "moradia" },
  { id: "12", text: "Apartamentos em Dubai Marina", category: "moradia" },
  { id: "13", text: "Moradia econômica em Abu Dhabi", category: "moradia" },
  { id: "14", text: "Leis de aluguel UAE", category: "moradia" },
  { id: "15", text: "Mapa do Metrô Dubai", category: "transporte" },
  { id: "16", text: "Tarifas de táxi Abu Dhabi", category: "transporte" },
  { id: "17", text: "Carteira de motorista UAE", category: "transporte" },
  { id: "18", text: "Serviços RTA Dubai", category: "transporte" },
  { id: "19", text: "Compras Dubai Mall", category: "compras" },
  { id: "20", text: "Global Village Dubai", category: "compras" },
  { id: "21", text: "Dubai Gold Souk", category: "compras" },
  { id: "22", text: "Ofertas Mall of Emirates", category: "compras" },
  { id: "23", text: "Abertura de empresa UAE", category: "negócios" },
  { id: "24", text: "Dubai Free Zones", category: "negócios" },
  { id: "25", text: "Registro de empresa UAE", category: "negócios" },
  { id: "26", text: "Visto freelance UAE", category: "negócios" },
  { id: "27", text: "Requisitos visto UAE", category: "viagem" },
  { id: "28", text: "Atrações turísticas Dubai", category: "viagem" },
  { id: "29", text: "Solicitação visto de turista UAE", category: "viagem" },
  { id: "30", text: "Pontos turísticos Abu Dhabi", category: "viagem" },
  { id: "31", text: "Safari no deserto Dubai", category: "viagem" },
  { id: "32", text: "Empregos para expatriados Dubai", category: "empregos" },
  { id: "33", text: "Processo permissão trabalho UAE", category: "empregos" },
  { id: "34", text: "Trabalho remoto UAE", category: "empregos" },
  { id: "35", text: "Guia salarial UAE", category: "empregos" },
  { id: "36", text: "Previsão do tempo UAE", category: "eventos" },
  { id: "37", text: "Próximos eventos Dubai", category: "eventos" },
  { id: "38", text: "Celebrações dia nacional UAE", category: "eventos" },
  { id: "39", text: "Festival de compras Dubai", category: "eventos" },
  { id: "40", text: "Renovação Emirates ID", category: "serviços" },
  { id: "41", text: "Serviços bancários UAE", category: "serviços" },
  { id: "42", text: "Pagamento conta DEWA", category: "serviços" },
  { id: "43", text: "Upgrade pacote Etisalat", category: "serviços" },
  { id: "44", text: "Melhores escolas em Dubai", category: "educação" },
  { id: "45", text: "Admissão universidade UAE", category: "educação" },
  { id: "46", text: "Classificações escolas KHDA", category: "educação" },
  { id: "47", text: "Seguro saúde UAE", category: "saúde" },
  { id: "48", text: "Melhores hospitais em Dubai", category: "saúde" },
  { id: "49", text: "Check-up médico UAE", category: "saúde" },
  { id: "50", text: "Serviços DHA", category: "saúde" }
]
</script>

<AIChat :prompts="chatPrompts" />