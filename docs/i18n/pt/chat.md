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
  // Serviços empresariais (primeiro bloco)
  { id: "1", text: "Registro de empresa nos UAE", category: "business" },
  { id: "2", text: "Estabelecimento de empresa Mainland", category: "business" },
  { id: "3", text: "Registro de empresa em Free Zone", category: "business" },
  { id: "4", text: "Formação de empresa Offshore", category: "business" },
  { id: "5", text: "Visto freelance UAE", category: "business" },
  { id: "6", text: "Licença comercial Dubai", category: "business" },
  { id: "7", text: "Requisitos para licença comercial UAE", category: "business" },
  { id: "23", text: "Estabelecimento de negócios UAE", category: "business" },
  { id: "24", text: "Free Zones Dubai", category: "business" },
  { id: "25", text: "Registro de empresa UAE", category: "business" },
  { id: "26", text: "Visto freelance UAE", category: "business" },
  
  // Vistos e imigração
  { id: "8", text: "Solicitação de Golden Visa UAE", category: "visa" },
  { id: "9", text: "Visto de trabalho UAE", category: "visa" },
  { id: "10", text: "Patrocínio de visto familiar UAE", category: "visa" },
  { id: "11", text: "Requisitos para exame médico do visto", category: "visa" },
  { id: "12", text: "Processo de visto de residência UAE", category: "visa" },
  { id: "27", text: "Requisitos para visto UAE", category: "visa" },
  
  // Jurídico e documentos
  { id: "13", text: "Solicitação de Emirates ID", category: "legal" },
  { id: "14", text: "Autenticação de documentos UAE", category: "legal" },
  { id: "15", text: "Procuração nos UAE", category: "legal" },
  { id: "16", text: "Revisão de contrato comercial UAE", category: "legal" },
  { id: "40", text: "Renovação do Emirates ID", category: "legal" },
  
  // Serviços financeiros
  { id: "17", text: "Conta bancária corporativa UAE", category: "finance" },
  { id: "18", text: "Registro fiscal UAE (VAT)", category: "finance" },
  { id: "19", text: "Serviços contábeis UAE", category: "finance" },
  { id: "20", text: "Regulamentos de Substância Econômica UAE", category: "finance" },
  { id: "41", text: "Serviços bancários UAE", category: "finance" },
  
  // Imóveis e serviços
  { id: "21", text: "Investimento imobiliário UAE", category: "property" },
  { id: "22", text: "Aluguel de escritório Dubai", category: "property" },

  // Saúde
  { id: "47", text: "Seguro saúde UAE", category: "healthcare" },
  { id: "48", text: "Melhores hospitais em Dubai", category: "healthcare" },
  { id: "49", text: "Check-up médico UAE", category: "healthcare" },
  
  // Turismo e entretenimento (no final)
  { id: "28", text: "Atrações turísticas Dubai", category: "travel" },
  { id: "29", text: "Expo City Dubai", category: "attractions" },
  { id: "30", text: "Ingressos Dubai Frame", category: "attractions" },
  { id: "31", text: "Ingressos Burj Khalifa", category: "attractions" },
  { id: "32", text: "Museum of the Future", category: "attractions" },
  { id: "33", text: "Abu Dhabi Louvre", category: "attractions" },
  { id: "34", text: "Ferrari World Abu Dhabi", category: "attractions" },
  { id: "35", text: "Compras Dubai Mall", category: "shopping" },
]
</script>

<AIChat :prompts="chatPrompts" />

<userStyle>Normal</userStyle>