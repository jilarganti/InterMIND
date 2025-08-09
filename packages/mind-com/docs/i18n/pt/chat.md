<script setup>
  const chatPrompts = [
    // Buscas baseadas em dificuldades - Barreiras linguísticas nos negócios
    "Alternativa a intérpretes humanos caros",
    "Como se comunicar com clientes estrangeiros sem saber o idioma deles",
    "Tradução em tempo real para reuniões de negócios",
    "Software de intérprete para videochamadas",
    "Negócios perdidos devido a barreiras linguísticas",
    
    // Cenários específicos de negócios
    "Como apresentar para clientes internacionais",
    "Realizar demonstrações de produtos em diferentes idiomas",
    "Melhores práticas para reuniões internacionais de vendas",
    "Comunicação com fornecedores de diferentes países",
    
    // Buscas por soluções
    "Comparação entre tradução por IA e tradutor humano",
    "Tradução instantânea para negócios",
    "Ferramentas de colaboração para equipes multilíngues",
    
    // Buscas de requisitos técnicos
    "Precisão de tradução para discussões técnicas",
    "Software de tradução seguro para empresas",
    "Integração com videoconferência existente",
    "Serviço de tradução em conformidade com GDPR",
    
    // ROI e valor comercial
    "Custo da má comunicação em negócios internacionais",
    "Calcular custos de intérprete vs solução de IA",
    "Aumentar taxas de conversão em vendas internacionais",
    "Expansão global sem treinamento de idiomas",
    
    // Buscas de comparação com concorrentes
    "Limitações de tradução do Google Meet",
    "Problemas de tradução de legendas do Zoom",
    "Problemas de qualidade de tradução do Microsoft Teams",
    
    // Buscas específicas do setor
    "Comunicação com fornecedores estrangeiros na manufatura",
    "Solução de idiomas para negócios de exportação",
  ]
</script>

<AIChat :prompts="chatPrompts" />