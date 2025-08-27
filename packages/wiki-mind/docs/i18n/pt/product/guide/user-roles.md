# Funções de usuário

O InterMIND delineia quatro funções de usuário distintas, cada uma meticulosamente elaborada para aprimorar experiências de reunião seguras, colaborativas e adaptáveis. A função de Anfitrião é dotada do mais alto nível de autoridade, enquanto as outras funções oferecem níveis variados de interação.

## Anfitrião

O Anfitrião é responsável por iniciar a reunião e possui privilégios administrativos abrangentes.

**Principais Habilidades:**

- Iniciar e encerrar reuniões
- Silenciar qualquer participante
- Promover ou rebaixar moderadores
- Iniciar e parar gravações
  - Isso inclui quaisquer gravações iniciadas pelo Moderador
- Remover qualquer participante da chamada
- Admitir ou negar convidados
- Acessar histórico de reuniões
- Utilizar quaisquer recursos de IA
- Ajustar configurações pessoais, layout, desfoque e opções de visualização

## Moderador

Os moderadores são designados pelo Anfitrião para auxiliar no gerenciamento eficaz da sessão.

**Principais Habilidades:**

- Silenciar qualquer participante
- Iniciar e parar gravações
  - Isso inclui qualquer gravação iniciada pelo Anfitrião
- Admitir ou negar convidados
- Remover qualquer participante da chamada, exceto o Anfitrião
- Usar o Tradutor de Voz Online e alterar idioma (para seu próprio áudio)
- Usar o Assistente de IA (para sua própria visualização)
- Participar do chat, levantar ou abaixar as mãos
- Acessar transcrições e histórico de reuniões
- Promover ou rebaixar outros moderadores

## Participante (Usuário Autorizado)

Participantes autorizados são usuários logados que ingressam na reunião sem privilégios especiais.

**Principais Habilidades:**

- Silenciar ou ativar seu próprio microfone
- Habilitar ou desabilitar sua própria câmera
- Compartilhar sua tela (navegador desktop)
- Usar o Assistente de IA (para sua própria visualização)
- Usar o Tradutor de Voz Online e alterar idioma (para seu próprio áudio)
- Modificar layout pessoal e configurações
- Acessar chat, levantar a mão, transcrições e histórico de reuniões

## Convidado (Usuário Anônimo)

Convidados são usuários que participam da reunião sem fazer login.

**Principais Capacidades:**

- Usar seu próprio microfone e câmera
- Compartilhar sua tela (navegador desktop)
- Usar o Tradutor de Voz Online e alterar idioma (para seu próprio áudio)
- Utilizar opções de layout e visualização (apenas pessoal)
- Participar do chat e levantar a mão

> [!WARNING]
> Convidados não podem gerenciar outros participantes.

## Tabela resumo de permissões de função

| Recurso                        | Anfitrião | Moderador | Participante | Convidado |
| ------------------------------ | --------- | --------- | ------------ | --------- |
| Iniciar reunião                | ✅        | ❌        | ❌           | ❌        |
| Silenciar qualquer participante| ✅        | ✅        | ❌           | ❌        |
| Reativar áudio de qualquer participante | ❌ | ❌   | ❌           | ❌        |
| Silenciar/reativar próprio microfone | ✅   | ✅        | ✅           | ✅        |
| Ativar/desativar própria câmera | ✅       | ✅        | ✅           | ✅        |
| Iniciar/parar gravação         | ✅        | ✅        | ❌           | ❌        |
| Compartilhar tela (desktop)    | ✅        | ✅        | ✅           | ✅        |
| Usar assistente de IA          | ✅        | ✅        | ✅           | ❌        |
| Usar tradução online           | ✅        | ✅        | ✅           | ✅        |
| Alterar idioma de tradução     | ✅        | ✅        | ✅           | ✅        |
| Levantar / abaixar mão         | ✅/✅     | ✅/✅     | ✅/❌        | ✅/❌     |
| Alterar layout / configurações | ✅        | ✅        | ✅           | ✅        |
| Ativar/desativar desfoque de fundo | ✅    | ✅        | ✅           | ✅        |
| Admitir/negar convidado        | ✅        | ✅        | ❌           | ❌        |
| Acessar histórico de reuniões  | ✅        | ✅        | ✅           | ❌        |
| Remover participantes          | ✅        | ✅        | ❌           | ❌        |
| Promover/rebaixar moderador    | ✅        | ✅        | ❌           | ❌        |