---
title: Funções de usuário
description: Entenda as funções de usuário do InterMIND - Anfitrião, Moderador, Participante e Convidado. Saiba mais sobre permissões e capacidades de cada função.
---

# Funções de usuário

O InterMIND delineia quatro funções de usuário distintas, cada uma meticulosamente elaborada para aprimorar experiências de reunião seguras, colaborativas e adaptáveis. A função de Anfitrião é dotada do mais alto nível de autoridade, enquanto as outras funções oferecem níveis variados de interação.

## Anfitrião

O Anfitrião é responsável por iniciar a reunião e possui privilégios administrativos abrangentes. Aprenda como [criar reuniões](./creating-meetings).

**Principais Habilidades:**

- Iniciar e finalizar reuniões
- Silenciar qualquer participante
- Promover ou rebaixar moderadores
- Iniciar e parar gravações
  - Isso inclui quaisquer gravações iniciadas pelo Moderador
- Remover qualquer participante da chamada
- Admitir ou negar convidados
- Acessar [histórico de reuniões](./meeting-history)
- Utilizar qualquer [recurso de IA](./ai-features)
- Ajustar configurações pessoais, layout, desfoque e opções de visualização (veja [Interface da reunião](./meeting-interface))

## Moderador

Os moderadores são designados pelo Anfitrião para auxiliar no gerenciamento eficaz da sessão.

**Principais Habilidades:**

- Silenciar qualquer participante
- Iniciar e parar gravações
  - Isso inclui qualquer gravação iniciada pelo Anfitrião
- Admitir ou negar convidados
- Remover qualquer participante da chamada, exceto o Anfitrião
- Usar o [Tradutor de Voz Online](./ai-features#online-voice-translation) e alterar idioma (para seu próprio áudio)
- Usar o [Assistente de IA](./ai-features#ai-assistant) (para sua própria visualização)
- Participar do chat, levantar ou abaixar as mãos
- Acessar transcrições e [histórico de reuniões](./meeting-history)
- Promover ou rebaixar outros moderadores

## Participante (Usuário Autorizado)

Participantes autorizados são usuários logados que ingressam na reunião sem privilégios especiais.

**Principais Funcionalidades:**

- Silenciar ou ativar seu próprio microfone
- Habilitar ou desabilitar sua própria câmera
- Compartilhar sua tela (navegador desktop)
- Usar o [Assistente de IA](./ai-features#ai-assistant) (para sua própria visualização)
- Usar o [Tradutor de Voz Online](./ai-features#online-voice-translation) e alterar idioma (para seu próprio áudio)
- Modificar layout pessoal e configurações
- Acessar chat, levantar a mão, transcrições e [histórico de reuniões](./meeting-history)

## Convidado (Usuário Anônimo)

Convidados são usuários que participam da reunião sem fazer login.

**Principais Funcionalidades:**

- Usar seu próprio microfone e câmera
- Compartilhar sua tela (navegador desktop)
- Usar o [Tradutor de Voz Online](./ai-features#online-voice-translation) e alterar idioma (para seu próprio áudio)
- Utilizar opções de layout e visualização (apenas pessoal)
- Participar do chat e levantar a mão

> [!WARNING]
> Convidados não podem gerenciar outros participantes.

## Tabela Resumo de Permissões de Função

| Funcionalidade                 | Anfitrião | Moderador | Participante | Convidado |
| ------------------------------ | --------- | --------- | ------------ | --------- |
| Iniciar Reunião                | ✅        | ❌        | ❌           | ❌        |
| Silenciar Qualquer Participante| ✅        | ✅        | ❌           | ❌        |
| Reativar Áudio de Qualquer Participante | ❌ | ❌   | ❌           | ❌        |
| Silenciar/Reativar Próprio Microfone | ✅   | ✅        | ✅           | ✅        |
| Ativar/Desativar Própria Câmera | ✅       | ✅        | ✅           | ✅        |
| Iniciar/Parar Gravação         | ✅        | ✅        | ❌           | ❌        |
| Compartilhar Tela (Desktop)    | ✅        | ✅        | ✅           | ✅        |
| Usar Assistente IA             | ✅        | ✅        | ✅           | ❌        |
| Usar Tradução Online           | ✅        | ✅        | ✅           | ✅        |
| Alterar Idioma da Tradução     | ✅        | ✅        | ✅           | ✅        |
| Levantar / Baixar Mão          | ✅/✅     | ✅/✅     | ✅/❌        | ✅/❌     |
| Alterar Layout / Configurações | ✅        | ✅        | ✅           | ✅        |
| Ativar/Desativar Desfoque de Fundo | ✅    | ✅        | ✅           | ✅        |
| Admitir/Negar Convidado        | ✅        | ✅        | ❌           | ❌        |
| Acessar Histórico da Reunião   | ✅        | ✅        | ✅           | ❌        |
| Remover Participantes          | ✅        | ✅        | ❌           | ❌        |
| Promover/Rebaixar Moderador    | ✅        | ✅        | ❌           | ❌        |