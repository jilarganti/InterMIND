---
title: Privacidade de Dados para Reuniões com IA
description: Arquitetura de privacidade transparente da InterMIND com confidencialidade baseada em região, conformidade com GDPR e escolha do usuário para locais de processamento de dados.
---

# Privacidade de Dados para Reuniões com IA

## Introdução

InterMind é uma plataforma para reuniões de vídeo multilíngues com interpretação ao vivo alimentada por IA. Somos construídos para profissionais — onde não apenas a mensagem importa, mas também a privacidade dessa mensagem.

Para oferecer uma experiência perfeita, o InterMind integra serviços de terceiros para vídeo, áudio, armazenamento em nuvem, interpretação em tempo real e análises. Esses provedores terceirizados nos ajudam a garantir desempenho e escalabilidade — mas também introduzem uma camada que não podemos controlar diretamente.

Saiba mais sobre [como nossa plataforma funciona](./how-it-works) e nossos [recursos de reunião por vídeo](./video-meeting-platform).

Acreditamos na **transparência sobre promessas**. Só podemos garantir privacidade e segurança para componentes sob nosso controle direto — nosso software, lógica de interface e como roteamos dados. Para todo o resto, oferecemos a você **o poder da escolha**.

É por isso que projetamos o InterMind com **confidencialidade baseada em região**: você escolhe onde seus dados são processados, qual estrutura legal os governa e quais modelos de IA são usados — com base na sua zona de privacidade selecionada.

> **O que é uma Zona de Privacidade?**  
> _Uma região configurável (UE, EUA, Ásia) que governa onde seus dados são processados e sob qual estrutura legal._

## Princípios Fundamentais de Privacidade

### 1. **Modelo de Responsabilidade Compartilhada**

- A InterMind **não possui nem opera** a infraestrutura de nuvem subjacente ou os LLMs (modelos de linguagem grandes).
- Não armazenamos seus arquivos de mídia, nem processamos diretamente sua fala para treinamento de modelos.
- Nós **controlamos** o software do lado do cliente, regras de roteamento e lógica de conformidade — incluindo por qual região seus dados fluem, qual modelo é usado e sob quais condições.

### 2. **Transparência Arquitetural**

- Você pode ver explicitamente qual região está ativa para sua sessão e quais leis se aplicam (ex: GDPR na Europa, CCPA nos EUA, PDPL nos Emirados Árabes Unidos).
- Cada sessão executa em um **modo de conformidade** designado, e essa configuração é visível e auditável.

### 3. **Privacidade por Padrão**

- A InterMind **nunca** armazena ou reutiliza seu conteúdo para treinamento, criação de perfis ou análise comercial.
- Não retemos transcrições ou mídia a menos que você solicite explicitamente.
- Se você desabilitar a interpretação, **nenhum dado do usuário sai do seu dispositivo**.

## Confidencialidade Baseada em Região: Como Funciona

No início de cada sessão, ou como parte das configurações da conta da sua organização, você pode selecionar uma zona de privacidade preferida:

| Região        | Leis Aplicáveis                                                                               | Infraestrutura                 | Provedores de LLM          |
| ------------- | --------------------------------------------------------------------------------------------- | ------------------------------ | -------------------------- |
| Europa        | [GDPR](https://gdpr.eu)                                                                       | Apenas data centers da UE      | Hospedados na UE ou compatíveis com UE  |
| Estados Unidos | [CCPA](https://oag.ca.gov/privacy/ccpa)                                                       | AWS / GCP / Azure (EUA)        | OpenAI EUA / Anthropic EUA   |
| EAU / MENA    | [PDPL](https://www.signzy.com/data-privacy-laws-in-the-uae-2025-everything-you-need-to-know/) | Nuvem dos EAU ou Bahrein       | LLMs regionais ou compatíveis |
| Ásia / China  | Leis locais chinesas de privacidade                                                          | Alibaba, Huawei, Tencent Cloud | Apenas LLMs baseados na China      |

Esta escolha determina como seu vídeo, áudio e conteúdo interpretado são processados e através de qual jurisdição.

Você pode:

- **Definir uma região padrão** para sua organização
- **Substituir a região por sessão**
- **Colocar certas regiões na lista negra** completamente

## O que a InterMind Garante

Implementamos salvaguardas técnicas e legais rigorosas dentro do nosso domínio de controle:

### 1. **Execução Local Primeiro**

Funções do lado do cliente, como captura de fala e renderização de interface, são processadas localmente sempre que possível.

### 2. **Minimização de Dados**

Apenas os dados mínimos necessários para a tarefa atual são transmitidos.

### 3. **Criptografia Ponta a Ponta**

Todos os dados de áudio/vídeo são transmitidos através de canais criptografados. Solicitações de interpretação são tunelizadas via proxies seguros, evitando exposição pública.

### 4. **Sem Armazenamento Padrão**

Não armazenamos suas reuniões, transcrições ou conversas, a menos que você opte por isso. Todo armazenamento é limitado por região.

## Conformidade Legal e Regulatória

InterMind oferece compatibilidade total com:

- **GDPR** — Direito de acesso, exclusão, exportação e restrição de processamento. Sem perfilagem por IA.
- **CCPA** — Sem venda de dados pessoais, opções de opt-out e práticas transparentes de coleta.
- **UAE PDPL** — Armazenamento local se solicitado, controles de acesso rigorosos, sem transferências internacionais sem consentimento.
- **China DSL/PIPL** — Processamento apenas na região, sem roteamento estrangeiro se a China for selecionada.

## O Que Podemos e Não Podemos Garantir

Estamos comprometidos com total honestidade, não apenas jargão jurídico.

> A InterMind não pode garantir como LLMs de terceiros ou provedores de infraestrutura processam dados uma vez que saem do nosso controle.

### NÃO garantimos:

- Que OpenAI, Anthropic ou outros provedores de LLM não registrem ou retenham dados de entrada.
- Que hosts em nuvem não tenham acesso a mídia transmitida através de seus sistemas (a menos que você esteja usando um enclave seguro ou implantação empresarial).
- Que conteúdo passado para um modelo de terceiros esteja fora do escopo de treinamento deles (a menos que sob contrato privado).

### NÓS garantimos:

- Você sempre sabe **onde e como** seus dados estão sendo processados.
- Você tem ferramentas para **controlar riscos** selecionando sua região e modo de conformidade.
- A InterMind **nunca** armazena ou explora seu conteúdo — mesmo temporariamente — sem seu consentimento.

## Modos de Confiança e Níveis de Privacidade

Você pode personalizar sua sessão para atender às suas necessidades de confidencialidade:

| Modo de Confiança | Interpretação | Transferência Entre Regiões | Armazenamento      | Melhor Para                                    |
| ----------------- | ------------- | --------------------------- | ------------------ | ---------------------------------------------- |
| 🔒 Apenas Local   | ❌            | ❌                          | ❌                 | Jurídico, governo, revisões internas          |
| 🔐 Bloqueado por Região | ✅      | ✅ (apenas dentro da zona)  | ❌ ou apenas sessão | Saúde, finanças, RH                           |
| 🌐 Flexibilidade Global | ✅      | ✅ (multi-região)           | ✅                 | Suporte, vendas, equipes multinacionais       |

## O Que Você Obtém Imediatamente

- Uso de LLM específico por região, com transparência em tempo real.
- Nenhum treinamento ou criação de perfil do seu conteúdo — nunca.
- Zero transmissão de dados se a interpretação estiver desativada.
- Armazenamento de dados opcional, sempre limitado à região.
- Ferramentas completas de auditoria e exportação para clientes empresariais.

## Conclusão

> Privacidade não é uma promessa — é uma arquitetura.

O InterMind não se esconde atrás de garantias vagas. Em vez disso, oferecemos **escolhas**, **visibilidade** e **controle**.

- Você escolhe sua região.
- Você escolhe seu nível de interpretação.
- Você decide que risco está disposto a aceitar — e nós ajudamos você a manter a conformidade em todos os níveis.

**InterMind — construído para profissionais, respaldado pela conformidade, governado pela confiança.**

> **Dúvidas sobre privacidade?** [Contact us](../../resources/company/contacts) ou leia sobre [our company values](../../resources/company/about).