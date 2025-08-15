---
layout: BlogPost
title: "InterMIND 多语言支持"
date: 2025-03-05
author: "本地化团队"
---

# InterMIND 多语言支持

InterMIND 很自豪地提供全面的多语言支持，让我们的平台能够为全球用户提供服务。

## 支持的语言

目前，InterMIND 支持 **19+ 种语言**，包括：

- 英语、西班牙语、法语、德语
- 中文（简体和繁体）
- 日语、韩语
- 阿拉伯语、希伯来语
- 俄语、波兰语
- 以及更多语言！

## 工作原理

我们的翻译系统使用：

1. **AI驱动的翻译**：使用OpenAI和Anthropic模型
2. **自动故障转移**：如果一个服务失败，我们会切换到另一个
3. **RTL支持**：完全支持从右到左的语言

## 开始使用翻译功能

要以您的语言访问 InterMIND：

1. 访问您的特定语言URL（例如，`/es/`、`/fr/`、`/ar/`）
2. AI聊天会自动检测并以您的语言回复
3. 所有文档都提供您的首选语言版本

## 面向开发者

添加新语言很简单：

```javascript
// 在 translateConfig.ts 中
languages: {
  "pt": "Portuguese",
  // 在这里添加您的语言
}
```

然后运行：`pnpm translate`

加入我们，让 InterMIND 对每个人都可访问，无论使用何种语言！