---
layout: BlogPost
title: "Suporte Multi-idioma no InterMIND"
date: 2025-03-05
author: "Equipe de Localização"
---

# Suporte Multi-idioma no InterMIND

O InterMIND tem o orgulho de oferecer suporte abrangente a múltiplos idiomas, tornando nossa plataforma acessível a usuários em todo o mundo.

## Idiomas suportados

Atualmente, o InterMIND suporta **mais de 19 idiomas** incluindo:

- Inglês, Espanhol, Francês, Alemão
- Chinês (Simplificado e Tradicional)
- Japonês, Coreano
- Árabe, Hebraico
- Russo, Polonês
- E muitos mais!

## Como funciona

Nosso sistema de tradução utiliza:

1. **Traduções com IA**: Usando modelos OpenAI e Anthropic
2. **Fallback automático**: Se um serviço falha, mudamos para outro
3. **Suporte RTL**: Suporte completo para idiomas da direita para a esquerda

## Começando com as traduções

Para acessar o InterMIND no seu idioma:

1. Visite a URL específica do seu idioma (ex: `/es/`, `/fr/`, `/ar/`)
2. O chat de IA detecta automaticamente e responde no seu idioma
3. Toda a documentação está disponível no seu idioma preferido

## Para Desenvolvedores

Adicionar um novo idioma é simples:

```javascript
// Em translateConfig.ts
languages: {
  "pt": "Portuguese",
  // Adicione seu idioma aqui
}
```

Em seguida, execute: `pnpm translate`

Junte-se a nós para tornar o InterMIND acessível a todos, independentemente do idioma!