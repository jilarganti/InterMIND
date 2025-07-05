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
    { id: "49", text: "páginas populares deste site, tabela", category: "general" },
  { id: "49", text: "este site, top 10 perguntas frequentes", category: "general" },
  { id: "49", text: "links de sites de zona franca, tabela", category: "general" },
  { id: "49", text: "tabela de links para sites de zona franca com preço", category: "general" },
  
  { id: "1", text: "Registro de empresa nos Emirados Árabes Unidos", category: "business" },
  { id: "7", text: "Requisitos para licença comercial dos Emirados Árabes Unidos", category: "business" },
  { id: "7", text: "comparação de tipos de entidades dos Emirados Árabes Unidos, tabela e análise", category: "business" },
  { id: "7", text: "comparação especializada do custo de relocação de uma empresa da Grã-Bretanha para várias zonas francas para um negócio financeiro com dois fundadores. 8 vistos, 3 membros da família + um cachorro. Aluguel em centro empresarial. Britânico, não residente dos Emirados Árabes Unidos", category: "business" },
  { id: "48", text: "10 Melhores Hospitais dos Emirados Árabes Unidos, Prós e Contras", category: "healthcare" },

  { id: "15", text: "Procuração nos Emirados Árabes Unidos", category: "legal" },

  // Бизнес-услуги (первый блок)
  { id: "2", text: "Constituição de empresa mainland", category: "business" },
  { id: "3", text: "Registro de empresa em zona franca", category: "business" },
  { id: "4", text: "Formação de empresa offshore", category: "business" },
  { id: "5", text: "Visto freelance dos Emirados Árabes Unidos", category: "business" },
  { id: "6", text: "Licença comercial de Dubai", category: "business" },
  { id: "23", text: "Constituição de negócios nos Emirados Árabes Unidos", category: "business" },
  { id: "24", text: "Zonas francas de Dubai", category: "business" },
  { id: "25", text: "Registro de empresa nos Emirados Árabes Unidos", category: "business" },
  { id: "26", text: "Visto freelance dos Emirados Árabes Unidos", category: "business" },
  
  // Визы и иммиграция
  { id: "8", text: "Solicitação de Golden Visa dos Emirados Árabes Unidos", category: "visa" },
  { id: "9", text: "Visto de trabalho dos Emirados Árabes Unidos", category: "visa" },
  { id: "10", text: "Patrocínio de visto familiar nos Emirados Árabes Unidos", category: "visa" },
  { id: "11", text: "Requisitos de exame médico para visto", category: "visa" },
  { id: "12", text: "Processo de visto de residência dos Emirados Árabes Unidos", category: "visa" },
  { id: "27", text: "Requisitos de visto dos Emirados Árabes Unidos", category: "visa" },
  
  // Юридические и документы
  { id: "13", text: "Solicitação de Emirates ID", category: "legal" },
  { id: "14", text: "Autenticação de documentos dos Emirados Árabes Unidos", category: "legal" },
  { id: "16", text: "Revisão de contrato comercial dos Emirados Árabes Unidos", category: "legal" },
  { id: "40", text: "Renovação de Emirates ID", category: "legal" },
  
  // Финансовые услуги
  { id: "17", text: "Conta bancária corporativa dos Emirados Árabes Unidos", category: "finance" },
  { id: "18", text: "Registro fiscal dos Emirados Árabes Unidos (IVA)", category: "finance" },
  { id: "19", text: "Serviços de contabilidade nos Emirados Árabes Unidos", category: "finance" },
  { id: "20", text: "Regulamentações de Substância Econômica dos Emirados Árabes Unidos", category: "finance" },
  { id: "41", text: "Serviços bancários dos Emirados Árabes Unidos", category: "finance" },
  
  // Недвижимость и услуги
  { id: "21", text: "Investimento imobiliário nos Emirados Árabes Unidos", category: "property" },
  { id: "22", text: "Aluguel de espaço comercial em Dubai", category: "property" },

  // Здравоохранение
  { id: "47", text: "Seguro saúde dos Emirados Árabes Unidos", category: "healthcare" },
  { id: "49", text: "Check-up médico nos Emirados Árabes Unidos", category: "healthcare" },
  
  // Туризм и развлечения (в конце)
  { id: "28", text: "Atrações turísticas de Dubai", category: "travel" },
  { id: "29", text: "Expo City Dubai", category: "attractions" },
  { id: "30", text: "Ingressos Dubai Frame", category: "attractions" },
  { id: "31", text: "Ingressos Burj Khalifa", category: "attractions" },
  { id: "32", text: "Museu do Futuro", category: "attractions" },
  { id: "33", text: "Louvre Abu Dhabi", category: "attractions" },
  { id: "34", text: "Ferrari World Abu Dhabi", category: "attractions" },
  { id: "35", text: "Compras no Dubai Mall", category: "shopping" },
]
</script>

<AIChat :prompts="chatPrompts" />