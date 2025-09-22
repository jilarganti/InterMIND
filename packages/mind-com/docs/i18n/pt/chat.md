<script setup>
  const chatPrompts = [
    // Consultas de pesquisa baseadas em problemas - Barreiras linguísticas nos negócios
    "Alternativa a intérpretes humanos caros",
    "Como se comunicar com clientes estrangeiros sem conhecer o idioma deles",
    "Tradução em tempo real para reuniões de negócios",
    "Software de intérprete para videochamadas",
    "Negócios perdidos devido a barreiras linguísticas",
    
    // Cenários específicos de negócios
    "Como apresentar para clientes internacionais",
    "Conduzir demonstrações de produtos em diferentes idiomas",
    "Melhores práticas para reuniões de vendas internacionais",
    "Comunicar com fornecedores de diferentes países",
    
    // Consultas em busca de soluções
    "Comparação entre tradução IA vs tradutor humano",
    "Tradução instantânea de idiomas para negócios",
    "Ferramentas de colaboração para equipes multilíngues",
    
    // Pesquisas de requisitos técnicos
    "Precisão de tradução para discussões técnicas",
    "Software de tradução seguro para empresas",
    "Integração com videoconferência existente",
    "Serviço de tradução compatível com GDPR",
    
    // ROI e valor comercial
    "Custo da má comunicação em negócios internacionais",
    "Calcular custos de intérprete vs solução IA",
    "Aumentar taxas de conversão de vendas internacionais",
    "Expansão global sem treinamento de idiomas",
    
    // Pesquisas de comparação com concorrentes
    "Limitações de tradução do Google Meet",
    "Problemas de tradução de legendas do Zoom",
    "Problemas de qualidade de tradução do Microsoft Teams",
    
    // Pesquisas específicas por setor
    "Comunicação de manufatura com fornecedores no exterior",
    "Solução de idiomas para negócios de exportação",
  ]
</script>

<AIChat :prompts="chatPrompts" />