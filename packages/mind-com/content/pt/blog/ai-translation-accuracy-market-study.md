---
title: "Precisão da Tradução por IA: Como Verificar a Qualidade, Não Confiar em um Número"
description: "Uma única porcentagem de precisão não diz quase nada. Veja como avaliar a qualidade da tradução por IA em relação a benchmarks públicos — de forma verificável, em vez de por confiança."
date: "2025-10-20"
author: "[Jilarganti](https://github.com/jilarganti)"
image: "/blog/ai-translation-efficiency-infographic.webp"
---

# Precisão da Tradução por IA: Como Verificar a Qualidade, Não Confiar em um Número

Quase todo fornecedor de tradução apresenta um título: "98% de precisão", "qualidade quase humana", "o melhor da categoria". Nenhuma dessas frases significa algo por si só. Precisão não é um número único que você pode imprimir em um banner — ela depende do par de idiomas, do assunto, da métrica usada para medir e de quem fez a medição.

Esta é a parte da indústria que consideramos quebrada. Na Mind.com — a empresa por trás do [InterMIND](https://intermind.com) — nossa regra é **verificável em vez de confie-em-nós**: qualidade que você pode verificar contra um padrão público, não um número no qual pedimos que acredite. Este artigo é a versão do comprador desse princípio: como ler alegações de precisão e como verificá-las por si mesmo.

## Por que "X% de precisão" não diz quase nada

Quando um fornecedor diz "94% de precisão", faça quatro perguntas antes que o número signifique algo:

- **Como medido?** Métricas automáticas como **BLEU**, **chrF** e **COMET** pontuam a saída da máquina contra traduções de referência — e elas discordam entre si constantemente. Uma estrutura de avaliação humana como **MQM** (Multidimensional Quality Metrics) produz uma imagem diferente, porque ela conta *tipos* de erros, não apenas a sobreposição superficial. Uma porcentagem sem métrica anexada é marketing, não medição.
- **Em qual par de idiomas?** A qualidade para Inglês↔Espanhol não é a qualidade para Inglês↔Japonês, e nenhuma delas prevê um par de baixo recurso. Uma média entre "idiomas principais" esconde exatamente o par com o qual você se importa.
- **Em qual conteúdo?** Um modelo que lida com documentação técnica de forma limpa pode desmoronar em textos de marketing, textos jurídicos ou expressões idiomáticas. O domínio do conjunto de testes decide a pontuação.
- **Contra qual referência, em qual conjunto de testes?** Um número que você não pode rastrear até um conjunto de testes público e nomeado é um número que você não pode reproduzir — e um resultado não reproduzível não é evidência.

Se uma alegação sobreviver a todas as quatro perguntas, ela pode ser útil. A maioria não sobrevive.

## Como realmente é uma medição verificável

A boa notícia: padrões públicos para isso já existem. Você não precisa acreditar na palavra de um fornecedor, e não deveria.

- **Benchmarks públicos.** As campanhas anuais de avaliação da **WMT** (Conference on Machine Translation) e conjuntos de testes abertos como **FLORES-200** permitem que qualquer pessoa compare sistemas nos mesmos dados, em vários idiomas. Os resultados são publicados e reproduzíveis.
- **Métricas nomeadas, declaradas em conjunto.** Uma alegação de qualidade séria nomeia sua métrica *e* seu conjunto de testes — por exemplo, "COMET em FLORES-200, EN→DE" — para que um terceiro possa executá-la novamente. Uma métrica isoladamente é fácil de manipular; relatar várias juntas é mais difícil de falsificar.
- **Avaliação humana com uma rubrica.** Para qualquer coisa de alto risco, as pontuações automáticas são uma triagem, não um veredito. Uma revisão humana estilo MQM, com uma taxonomia de erros documentada, é o que diz se a saída é *utilizável*, não apenas estatisticamente próxima.

A mudança aqui é simples: pare de perguntar "qual é a sua precisão?" e comece a perguntar "contra qual padrão público, e posso reproduzi-lo?".

## Onde a tradução por IA é forte — e onde não é

Você não precisa de porcentagens inventadas para declarar o que está bem estabelecido no campo:

- **Forte:** pares de idiomas de alto recurso, conteúdo técnico e estruturado, terminologia consistente em volume e velocidade que os fluxos de trabalho humanos não conseguem igualar.
- **Mais fraco, e ainda precisa de um humano:** textos criativos e de marketing, humor e expressões idiomáticas, nuances culturalmente carregadas e textos jurídicos ou médicos onde um erro acarreta responsabilidade.

Posicionamento honesto significa dizer as duas metades em voz alta. Um fornecedor que só lhe diz a metade forte está vendendo a lacuna.

## O que isso significa para reuniões em tempo real

A conversa multilíngue ao vivo eleva o nível além da tradução de documentos. Não há tempo para pós-edição, a entrada é uma linguagem falada desordenada, e o custo de um mal-entendido ocorre no momento — em uma negociação, um telefonema de suporte, uma conversa clínica. Um valor de "precisão média" é a lente errada; o que importa é se o *tom, a intenção e sua terminologia específica* sobrevivem.

É por isso que o InterMIND é construído de forma que cada participante fale sua própria língua e seja compreendido em tempo real, com os elementos que realmente determinam a qualidade sendo verificáveis em vez de apenas afirmados:

- **Glossários controlados pelo cliente** — você decide como os nomes de seus produtos, termos legais e vocabulário de domínio são renderizados, em vez de esperar que um modelo geral acerte.
- **Um rastro de auditoria** — o que foi dito e como foi traduzido pode ser revisado após o fato, para que a qualidade seja algo que você possa inspecionar, não apenas confiar.
- **Infraestrutura da UE / neutra e implantação on-premise** — onde as palavras são processadas é sua decisão, o que importa tanto quanto a própria tradução para trabalhos regulamentados.

## Uma pequena lista de verificação para avaliar qualquer fornecedor de tradução

1. Em qual **métrica** a alegação se baseia e em qual **conjunto de testes público**?
2. O resultado pode ser **reproduzido** por um terceiro?
3. Como ele se comporta em **seus** pares de idiomas e **seu** conteúdo — não nas médias do fornecedor?
4. Você pode controlar a **terminologia** (glossários), ou está preso ao padrão?
5. Existe um **rastro de auditoria** para revisar a qualidade após o fato?
6. Onde seus dados são **processados e armazenados**, e eles são usados para treinar modelos?

Se um fornecedor puder responder a estas perguntas, a conversa é real. Se a única resposta for uma porcentagem em um slide, você também aprendeu algo.

:::tip{title="Verificável em vez de confie-em-nós"}
Preferimos mostrar como verificar a qualidade do que pedir que você confie em um número de manchete. Esse é o padrão que nos impomos — veja como funciona no produto em [intermind.com](https://intermind.com).
:::
