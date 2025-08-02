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
    // Buscas baseadas em dificuldades - Barreiras linguísticas nos negócios
    { id: "1", text: "Como se comunicar com clientes estrangeiros sem conhecer o idioma deles", category: "communication" },
    { id: "2", text: "Tradução em tempo real para reuniões de negócios", category: "translation" },
    { id: "3", text: "Software de intérprete para videochamadas", category: "interpretation" },
    { id: "4", text: "Negócios perdidos devido a barreiras linguísticas", category: "business-problems" },
    
    // Cenários específicos de negócios
    { id: "5", text: "Como fazer apresentações para clientes internacionais", category: "presentations" },
    { id: "6", text: "Realizar demonstrações de produtos em diferentes idiomas", category: "demos" },
    { id: "7", text: "Melhores práticas para reuniões internacionais de vendas", category: "sales" },
    { id: "8", text: "Comunicação com fornecedores de diferentes países", category: "supply-chain" },
    
    // Buscas por soluções
    { id: "9", text: "Alternativa a intérpretes humanos caros", category: "cost-saving" },
    { id: "10", text: "Comparação entre tradução por IA e tradutor humano", category: "comparison" },
    { id: "11", text: "Tradução instantânea para negócios", category: "instant-translation" },
    { id: "12", text: "Ferramentas de colaboração multilíngue para equipes", category: "collaboration" },
    
    // Buscas de requisitos técnicos
    { id: "13", text: "Precisão de tradução para discussões técnicas", category: "accuracy" },
    { id: "14", text: "Software de tradução seguro para empresas", category: "security" },
    { id: "15", text: "Integração com videoconferência existente", category: "integration" },
    { id: "16", text: "Serviço de tradução em conformidade com GDPR", category: "compliance" },
    
    // ROI e valor para o negócio
    { id: "17", text: "Custo da má comunicação em negócios internacionais", category: "roi" },
    { id: "18", text: "Calcular custos de intérprete vs solução de IA", category: "cost-calculator" },
    { id: "19", text: "Aumentar taxas de conversão em vendas internacionais", category: "conversion" },
    { id: "20", text: "Expansão global sem treinamento de idiomas", category: "expansion" },
    
    // Buscas de comparação com concorrentes
    { id: "21", text: "Limitações de tradução do Google Meet", category: "google-meet" },
    { id: "22", text: "Problemas de tradução de legendas no Zoom", category: "zoom" },
    { id: "23", text: "Problemas de qualidade na tradução do Microsoft Teams", category: "teams" },
    
    // Buscas específicas por indústria
    { id: "24", text: "Comunicação com fornecedores internacionais na manufatura", category: "manufacturing" },
    { id: "25", text: "Solução de idiomas para negócios de exportação", category: "export" },
]
</script>

<AIChat :prompts="chatPrompts" />