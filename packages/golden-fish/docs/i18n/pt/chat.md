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
    { id: "49", text: "links de sites free zone, tabela", category: "general" },
    { id: "49", text: "tabela de links para sites free zone com preço", category: "general" },
    
    { id: "1", text: "Registro de empresa nos EAU", category: "business" },
    { id: "7", text: "Requisitos para licença comercial nos EAU", category: "business" },
    { id: "7", text: "comparação dos tipos de entidades nos EAU, tabela e análise", category: "business" },
    { id: "7", text: "comparação especializada do custo de relocação de uma empresa britânica para várias free zones para um negócio financeiro com dois fundadores. 8 vistos, 3 membros da família + um cachorro. Aluguel em centro empresarial. Britânico, não residente nos EAU", category: "business" },
    { id: "48", text: "10 Melhores Hospitais nos EAU, Prós e Contras", category: "healthcare" },

    { id: "15", text: "Procuração nos EAU", category: "legal" },

    // Serviços Empresariais (primeiro bloco)
    { id: "2", text: "Estabelecimento de empresa Mainland", category: "business" },
    { id: "3", text: "Registro de empresa em Free Zone", category: "business" },
    { id: "4", text: "Formação de empresa Offshore", category: "business" },
    { id: "5", text: "Visto freelance EAU", category: "business" },
    { id: "6", text: "Licença comercial Dubai", category: "business" },
    { id: "23", text: "Estabelecimento de negócios EAU", category: "business" },
    { id: "24", text: "Free Zones Dubai", category: "business" },
    { id: "25", text: "Registro de empresa EAU", category: "business" },
    { id: "26", text: "Visto freelance EAU", category: "business" },
    
    // Vistos e Imigração
    { id: "8", text: "Solicitação de Golden Visa EAU", category: "visa" },
    { id: "9", text: "Visto de trabalho EAU", category: "visa" },
    { id: "10", text: "Patrocínio de visto familiar nos EAU", category: "visa" },
    { id: "11", text: "Requisitos para exame médico do visto", category: "visa" },
    { id: "12", text: "Processo de visto de residência EAU", category: "visa" },
    { id: "27", text: "Requisitos para visto EAU", category: "visa" },
    
    // Jurídico e Documentos
    { id: "13", text: "Solicitação de Emirates ID", category: "legal" },
    { id: "14", text: "Autenticação de documentos EAU", category: "legal" },
    { id: "16", text: "Revisão de contrato comercial EAU", category: "legal" },
    { id: "40", text: "Renovação de Emirates ID", category: "legal" },
    
    // Serviços Financeiros
    { id: "17", text: "Conta bancária corporativa EAU", category: "finance" },
    { id: "18", text: "Registro fiscal EAU (VAT)", category: "finance" },
    { id: "19", text: "Serviços contábeis nos EAU", category: "finance" },
    { id: "20", text: "Regulamentos de Substância Econômica EAU", category: "finance" },
    { id: "41", text: "Serviços bancários EAU", category: "finance" },
    
    // Imóveis e Serviços
    { id: "21", text: "Investimento imobiliário EAU", category: "property" },
    { id: "22", text: "Aluguel de escritório Dubai", category: "property" },

    // Saúde
    { id: "47", text: "Seguro saúde EAU", category: "healthcare" },
    { id: "49", text: "Check-up médico EAU", category: "healthcare" },
    
    // Turismo e Entretenimento (no final)
    { id: "28", text: "Atrações turísticas Dubai", category: "travel" },
    { id: "29", text: "Expo City Dubai", category: "attractions" },
    { id: "30", text: "Ingressos Dubai Frame", category: "attractions" },
    { id: "31", text: "Ingressos Burj Khalifa", category: "attractions" },
    { id: "32", text: "Museum of the Future", category: "attractions" },
    { id: "33", text: "Louvre Abu Dhabi", category: "attractions" },
    { id: "34", text: "Ferrari World Abu Dhabi", category: "attractions" },
    { id: "35", text: "Compras Dubai Mall", category: "shopping" },
]
</script>

<AIChat :prompts="chatPrompts" />
