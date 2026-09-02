---
title: Subprocessadores
description: Os provedores de infraestrutura e serviços que a InterMIND utiliza para processar dados pessoais — o propósito de cada provedor, região de processamento e salvaguardas.
updated: "2026-09-02"
---

Para operar o InterMIND, utilizamos um pequeno conjunto de provedores de infraestrutura e serviços ("subprocessadores"). Esta página lista cada um deles, o que processam, onde e sob quais salvaguardas. **Operador de Serviço e Entidade Contratante:** Golden Fish LLC (UAE). **Editor e Proprietário da Propriedade Intelectual:** MindMeeting OÜ (EE).

O processamento ocorre na UE por padrão. Quando a entidade corporativa de um provedor está fora da UE/EEA, as transferências são cobertas por Cláusulas Contratuais Padrão (SCCs) e/ou pelo Estrutura de Privacidade de Dados UE-EUA (DPF). Atualizamos esta lista sempre que um subprocessador é adicionado ou removido.

| Subprocessador | Domicílio da Entidade | Finalidade | Dados pessoais processados | Local de processamento | Salvaguardas |
| --- | --- | --- | --- | --- | --- |
| Vercel Inc. | US | Hospedagem de aplicativo web, funções serverless, AI Gateway (proxy) | Todo o tráfego do aplicativo, incluindo metadados de reunião, chat | Funções fixadas em Frankfurt (fra1); o AI Gateway possui uma política de retenção de dados zero (sem retenção de prompts) | DPA + SCCs; ZDR |
| Fly.io Inc. | US | Hospedagem de servidor WebSocket em tempo real | Distribuição de chat, eventos de conferência, palavras de transcrição em trânsito | Paris (CDG) | DPA + SCCs |
| Neon Inc. | US | Postgres (banco de dados principal) | Contas, reuniões, mensagens, transcrições, uso de faturamento | Frankfurt (AWS eu-central-1) | DPA + SCCs; criptografia em repouso |
| Tigris Data Inc. | US | Armazenamento de objetos | Gravações de reuniões, anexos de chat, documentos, arquivos de exportação | Múltiplas regiões da UE (Frankfurt + Amsterdã) | DPA; TLS |
| MindMeeting OÜ (Mind API) | EE | Mídia de reunião (SFU), reconhecimento de fala, tradução em tempo real | Fluxos de áudio/vídeo, fala, nomes/funções dos participantes | OVH, France | Acordo intra-grupo |
| Mistral AI SAS | FR | Resumo de IA pós-reunião | Transcrição da reunião (uma vez, no final da reunião) | EU | DPA; retenção de dados zero; sem treinamento em dados de API pagos |
| DeepL SE | DE | Tradução de documentos | Conteúdo dos documentos que os usuários enviam para tradução | EU (Cologne) | DPA; sem retenção para treinamento |
| Stripe Payments Europe Ltd / Stripe Inc. | IE / US | Faturamento | Nome, e-mail, endereço de cobrança, método de pagamento (cartão nunca toca o InterMIND) | EU / US | DPA + SCCs; PCI-DSS |
| PostHog | US (EU Cloud) | Análise de produto, reprodução de sessão | Eventos de uso, console/reprodução (requer consentimento, opt-out por padrão; fala da reunião removida dos logs) | EU (eu.posthog.com) | DPA; residência na UE |
| Functional Software Inc. (Sentry) | US (EU region) | Monitoramento de erros | Rastros de erro, migalhas de pão (sem conteúdo de reunião) | EU (de.sentry.io) | DPA; residência na UE |
| Resend | US | E-mail transacional (códigos de login, notificações) | E-mail do destinatário, conteúdo da mensagem | Ireland (eu-west-1) | DPA + SCCs |
| Upstash Inc. | US | Cache de sessão OIDC (Redis) | Cache de sessão/token criptografado | Frankfurt (fra1) | DPA + SCCs; payloads criptografados |
| Pipedrive OÜ | EE | CRM de vendas (formulários de contato / parceiro) | Nome do lead, e-mail, empresa, mensagem | EU | DPA |
| Google LLC / Microsoft Corp. | US | Apenas login OAuth | Nome, e-mail, foto de perfil (escopos OAuth padrão) | US | DPF / SCCs |

Para perguntas sobre esta lista ou para solicitar uma cópia das salvaguardas de transferência relevantes, entre em contato com privacy@mind.com.
