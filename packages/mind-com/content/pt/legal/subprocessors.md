---
title: Subprocessadores
description: Os provedores de infraestrutura e serviço que a InterMIND utiliza para processar dados pessoais — o propósito de cada provedor, região de processamento e salvaguardas.
updated: "2026-06-17"
---

Para operar o InterMIND, utilizamos um pequeno conjunto de provedores de infraestrutura e serviços ("subprocessadores"). Esta página lista cada um deles, o que processam, onde e sob quais salvaguardas. **Operador de Serviço e Entidade Contratante:** Golden Fish CSP LLC (UAE). **Editor e Proprietário da Propriedade Intelectual:** MindMeeting OÜ (EE).

O processamento ocorre na UE por padrão. Quando a entidade corporativa de um provedor está fora da UE/EEE, as transferências são cobertas por Cláusulas Contratuais Padrão (SCCs) e/ou pelo EU–US Data Privacy Framework (DPF). Atualizamos esta lista sempre que um subprocessador é adicionado ou removido.

| Subprocessador | Domicílio da Entidade | Propósito | Dados pessoais processados | Local de processamento | Salvaguardas |
| --- | --- | --- | --- | --- | --- |
| Vercel Inc. | US | Hospedagem de aplicativo web, funções serverless, AI Gateway (proxy) | Todo o tráfego do aplicativo, incluindo metadados de reunião, chat | Funções fixadas em Frankfurt (fra1); o AI Gateway possui uma política de retenção zero de dados (sem retenção de prompts) | DPA + SCCs; ZDR |
| Fly.io Inc. | US | Hospedagem de servidor WebSocket em tempo real | Distribuição de chat, eventos de conferência, palavras de transcrição em trânsito | Paris (CDG) | DPA + SCCs |
| Neon Inc. | US | Postgres (banco de dados principal) | Contas, reuniões, mensagens, transcrições, uso de faturamento | Frankfurt (AWS eu-central-1) | DPA + SCCs; criptografia em repouso |
| Tigris Data Inc. | US | Armazenamento de objetos | Gravações de reuniões, anexos de chat, documentos, arquivos de exportação | Múltiplas regiões da UE (Frankfurt + Amsterdã) | DPA; TLS |
| MindMeeting OÜ (Mind API) | EE | Mídia de reunião (SFU), reconhecimento de fala, tradução em tempo real | Streams de áudio/vídeo, fala, nomes/funções dos participantes | OVH, França | Acordo intra-grupo |
| Mistral AI SAS | FR | Resumo de IA pós-reunião | Transcrição da reunião (uma vez, ao final da reunião) | UE | DPA; retenção zero de dados; sem treinamento em dados de API pagos |
| DeepL SE | DE | Tradução de documentos | Conteúdo de documentos que os usuários enviam para tradução | UE (Colônia) | DPA; sem retenção para treinamento |
| Stripe Payments Europe Ltd / Stripe Inc. | IE / US | Faturamento | Nome, e-mail, endereço de faturamento, método de pagamento (o cartão nunca toca o InterMIND) | UE / US | DPA + SCCs; PCI-DSS |
| PostHog | US (EU Cloud) | Análise de produto, reprodução de sessão | Eventos de uso, console/replay (controlado por consentimento, opt-out por padrão; fala de reunião removida dos logs) | UE (eu.posthog.com) | DPA; EU residency |
| Functional Software Inc. (Sentry) | US (EU region) | Monitoramento de erros | Rastros de erros, migalhas (sem conteúdo de reunião) | UE (de.sentry.io) | DPA; EU residency |
| Resend | US | E-mail transacional (códigos de login, notificações) | E-mail do destinatário, conteúdo da mensagem | Irlanda (eu-west-1) | DPA + SCCs |
| Upstash Inc. | US | Cache de sessão OIDC (Redis) | Cache de sessão/token criptografado | Frankfurt (fra1) | DPA + SCCs; cargas úteis criptografadas |
| Pipedrive OÜ | EE | CRM de vendas (formulários de contato / parceiro) | Nome do lead, e-mail, empresa, mensagem | UE | DPA |
| Google LLC / Microsoft Corp. | US | Apenas login OAuth | Nome, e-mail, foto de perfil (escopos OAuth padrão) | US | DPF / SCCs |

Para perguntas sobre esta lista ou para solicitar uma cópia das salvaguardas de transferência relevantes, entre em contato com privacy@mind.com.
