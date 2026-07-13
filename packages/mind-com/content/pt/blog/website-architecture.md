---
title: "Como o Site Mind.com é Construído: Uma Arquitetura Nuxt 4"
description: "Um tour técnico pelo site de marketing Mind.com — Nuxt 4 SSR, @nuxt/content, i18n, rotas de servidor Nitro e as compensações por trás de cada escolha."
date: "2025-08-15"
author: "[Jilarganti](https://github.com/jilarganti)"
image: "/blog/iStock-681469612.jpg"
---

# Como o Site Mind.com é Construído: Uma Arquitetura Nuxt 4

<img src="/blog/iStock-681469612.jpg" alt="Arquitetura Mind.com" width="500" align="right" style="padding: 1.5rem"/>

Este é um tour sobre como o [mind.com](https://mind.com) é realmente construído e por que fizemos as escolhas que fizemos. É um site de marketing — uma superfície de aterrissagem, um blog, páginas legais e um formulário de contato — então a parte interessante não é nenhuma peça de tecnologia individual. É onde traçamos os limites: o que renderiza no servidor, o que é enviado para o navegador e o que permanece como um script de tempo de construção. Onde uma decisão foi uma compensação em vez de uma vitória óbvia, nós o afirmamos.

O site é um pacote em um monorepo pnpm (o repositório é nomeado `InterMIND`). Ele roda em **Nuxt 4** e é implantado no Vercel. Nada aqui é exótico; o valor está no encaixe entre as peças.

## Por que Nuxt 4 com SSR, e não uma construção estática

Um site de marketing poderia ser uma saída puramente estática. Nós renderizamos no servidor, usando o motor Nitro do Nuxt com o preset `vercel`, e as razões são concretas em vez de aspiracionais.

Temos um formulário de contato que envia dados para um backend, roteamento por localidade em sete idiomas e conteúdo que muda com frequência suficiente para que não queiramos pensar em quais páginas estão desatualizadas. O SSR permite que uma única base de código lide com as páginas de marketing, as rotas localizadas e o endpoint do formulário sem acoplar um serviço separado a um pacote estático. O Nitro compila o servidor em funções Vercel no momento da construção, então obtemos a renderização do servidor sem ter que rodar ou manter nosso próprio servidor.

A compensação é honesta: SSR significa que há trabalho em tempo de requisição que um site totalmente estático não teria. Para um site deste tamanho, esse custo é pequeno, e em troca evitamos os problemas de coordenação de costurar um frontend estático a uma API separada. Se este fosse um site de documentação de 10.000 páginas sem superfície dinâmica, a geração estática seria a melhor opção. Não é o caso, então o SSR vence.

## Conteúdo: @nuxt/content e MDC

O conteúdo do blog e legal são arquivos Markdown em `content/blog/` e `content/legal/`. Usamos **@nuxt/content v3**, que analisa esses arquivos em um banco de dados local better-sqlite3 no momento da construção e nos permite consultá-los como dados. A forma do frontmatter é imposta com schemas Zod em `content.config.ts`, então um post sem um `title` ou com uma `date` malformada falha na construção em vez de ser publicado quebrado.

O blog é escrito em **MDC** — Markdown com componentes. Um destaque é `:::tip{title="..."}` em vez de HTML puro, o que mantém o código-fonte legível e nos permite controlar a renderização em um só lugar (o componente `ProseTip`) em vez de espalhar a marcação por cada postagem.

Manter o conteúdo como arquivos no repositório significa que ele é versionado, revisado em pull requests e comparável (diffable). Não há CMS separado para fazer login e nenhum banco de dados para fazer backup. O limite é o outro lado da moeda: a edição requer um commit, então isso se adapta a uma equipe que já vive no Git, e não a uma grande equipe editorial não técnica.

## Internacionalização e como a tradução funciona

O site é lançado em sete locais — inglês, espanhol, português, francês, alemão, russo e chinês — via **@nuxtjs/i18n** com a estratégia `prefix_except_default`. O inglês serve a partir da raiz; cada outro local fica sob seu próprio prefixo de caminho. Strings de UI vivem em `app/locales/<code>.json`.

A tradução é um trabalho de duas frentes, e mantemos as frentes separadas. Strings de UI e conteúdo são traduzidos por dois scripts Node — `scripts/i18n-translate-ui.ts` e `scripts/i18n-translate-content.ts` — construídos sobre o AI SDK com modelos Anthropic. Estes são executados como uma etapa de autoria no tempo de construção, não no tempo de requisição: um humano os dispara, revisa a saída e a commita. As traduções são arquivos comuns no repositório como tudo o mais.

Essa é a fronteira deliberada. Não há tradução em tempo de execução, nenhuma chamada de modelo de linguagem em tempo real quando um visitante carrega uma página. As traduções são geradas antecipadamente e servidas como rotas localizadas simples, o que mantém a renderização previsível e nos permite revisar antes que algo seja lançado.

## Sistema de design: Tailwind v4 e @nuxt/ui

A estilização é **Tailwind CSS v4** com **@nuxt/ui v4** por cima. Novos visitantes chegam no modo escuro por padrão; o fundo da página é um quase-preto deliberado, `#0a0b0d`, em vez de preto puro. Cada página e componente é construído para funcionar tanto no modo claro quanto no escuro — essa é uma restrição que mantemos, não uma reflexão tardia, então nada codifica uma cor apenas para o modo claro.

Apoiar-se no @nuxt/ui significa que herdamos componentes acessíveis e consistentes em vez de reconstruir botões, controles de formulário e overlays do zero. O custo é uma dependência cujas convenções seguimos, em vez de um sistema totalmente personalizado, o que para um site de marketing é o lado certo dessa troca.

## O backend: rotas de servidor Nitro e Pipedrive

O backend é pequeno e vive no mesmo projeto, como rotas de servidor Nitro em `server/`:

- `server/api/submit-form.post.ts` lida com o formulário de contato.
- `server/api/health.get.ts` é uma verificação de saúde.
- `server/api/__sitemap__/urls.ts` alimenta o sitemap.
- `server/routes/llms.txt.ts` e `llms-full.txt.ts` servem resumos legíveis por máquina para rastreadores de AI.
- `server/middleware/` contém lógica transversal, incluindo um manipulador 410-gone para URLs aposentadas e tratamento de audiência.

Quando alguém envia o formulário de contato, o lead vai para o **Pipedrive** através de `server/utils/pipedrive.ts`, que cria uma pessoa e um lead. Essa é a única integração de CRM e o único lugar para onde os dados do formulário vão. Não há fila, nenhum pipeline de dados, nenhum armazenamento de objetos intermediário — o endpoint valida a entrada e chama uma API. Mantê-lo tão direto significa que há muito pouco a quebrar e muito pouco para raciocinar quando algo acontece.

Também não há, deliberadamente, autenticação de usuário no site de marketing. É um folheto e um formulário de contato, não um aplicativo; adicionar login e sessões seria uma área de superfície que teríamos que proteger sem benefício.

## Observabilidade: Sentry e PostHog, com controle de consentimento

Executamos duas ferramentas de observabilidade, e elas fazem trabalhos diferentes.

**Sentry** (`@sentry/nuxt`) captura erros. Ele é integrado como um módulo em tempo de construção e permanece desativado no desenvolvimento, para que o ruído local não o alcance. Sua função é nos dizer quando algo quebra em produção.

**PostHog** (`nuxt-posthog`) lida com a análise de produtos, e seu comportamento em relação ao consentimento é a parte que vale a pena detalhar. Ele começa **com a opção desativada**. Nada é capturado até que a plataforma de consentimento Usercentrics conceda permissão, momento em que `app/plugins/posthog-consent.client.ts` o habilita. O padrão é não rastrear; o consentimento o ativa, não o contrário. PostHog cobre análises e Sentry cobre erros — essa é a visão completa, sem um gerenciador de tags separado ou uma camada de análise de terceiros acoplada.

## SEO e rastreadores de AI

O SEO é gerenciado por `@nuxtjs/sitemap` e `@nuxtjs/robots` para o sitemap e diretivas de robots. Redirecionamentos e cabeçalhos de cache — incluindo a longa lista de redirecionamentos de URLs legadas que o site acumulou — vivem em `vercel.json`, perto de onde eles entram em vigor na borda (edge).

As rotas `llms.txt` e `llms-full.txt` mencionadas acima são um aceno à forma como a web é lida agora: elas fornecem aos rastreadores de AI um resumo limpo e estruturado do site, em vez de deixá-los raspar páginas renderizadas. É barato de servir e significa que as máquinas que leem o site obtêm uma versão precisa dele.

## Implantação

Tudo é implantado no **Vercel**. O preset `vercel` do Nitro transforma as rotas do servidor em funções Vercel e as páginas em saída renderizada pelo servidor, então um `git push` se torna uma implantação sem a necessidade de manter um pipeline separado de construção e envio. Localizado dentro do monorepo pnpm, mind.com compartilha ferramentas e disciplina de lockfile com os outros pacotes, mantendo-se independentemente implantável.

## A estrutura geral

Nada disso é incomum, e esse é o ponto. Nuxt 4 nos dá SSR sem rodar servidores; @nuxt/content mantém posts e páginas legais como arquivos revisáveis; i18n e os scripts de tradução localizam o site como uma etapa de construção que podemos revisar; um backend Nitro leve entrega leads ao Pipedrive; Sentry e PostHog monitoram quebras e comportamento, com análises desativadas até que o consentimento diga o contrário.

O site é fácil de entender porque mantivemos as partes móveis em poucas e colocamos cada uma onde pertence. Para um site de marketing, ser descomplicado e legível supera o inteligente em todos os momentos.
