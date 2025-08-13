---
layout: BlogPost
title: "Suporte Multi-idiomas no InterMIND"
date: 2025-03-05
author: Equipe de Localização
---

# Suporte Multi-idiomas no InterMIND

O InterMIND tem o orgulho de oferecer suporte abrangente para múltiplos idiomas, tornando nossa plataforma acessível para usuários em todo o mundo.

<!--more-->

## Idiomas Suportados

Atualmente, o InterMIND suporta **mais de 19 idiomas**, incluindo:

- Inglês, Espanhol, Francês, Alemão
- Chinês (Simplificado e Tradicional)
- Japonês, Coreano
- Árabe, Hebraico
- Russo, Polonês
- E muitos outros!

## Como Funciona

Nosso sistema de tradução usa:

1. **Traduções baseadas em IA**: Utilizando modelos OpenAI e Anthropic
2. **Fallback automático**: Se um serviço falha, alternamos para outro
3. **Suporte RTL**: Suporte completo para idiomas da direita para a esquerda

## Começando com as Traduções

Para acessar o InterMIND no seu idioma:

1. Visite a URL específica do seu idioma (ex: `/es/`, `/fr/`, `/ar/`)
2. O chat de IA detecta e responde automaticamente no seu idioma
3. Toda a documentação está disponível no seu idioma preferido

## Para Desenvolvedores

Adicionar um novo idioma é simples:

```javascript
// In translateConfig.ts
languages: {
  "pt": "Portuguese",
  // Adicione seu idioma aqui
}
```

Então execute: `pnpm translate`

Junte-se a nós para tornar o InterMIND acessível a todos, independentemente do idioma!