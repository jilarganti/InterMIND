---
title: 子处理者
description: InterMIND 用于处理个人数据的基础设施和服务提供商——每个提供商的目的、处理区域和保障措施。
updated: "2026-06-17"
---

为运营 InterMIND，我们使用了一小部分基础设施和服务提供商（“子处理者”）。本页面列出了每个子处理者、其处理内容、处理地点以及所采取的保障措施。**服务运营商和合同实体：** Golden Fish CSP LLC (UAE)。**发布者和知识产权所有者：** MindMeeting OÜ (EE)。

数据处理默认在欧盟进行。如果提供商的企业实体位于欧盟/欧洲经济区以外，数据传输将受标准合同条款 (SCCs) 和/或欧盟-美国数据隐私框架 (DPF) 的保护。我们会在添加或删除子处理者时更新此列表。

| 子处理者 | 实体所在地 | 目的 | 处理的个人数据 | 处理位置 | 保障措施 |
| --- | --- | --- | --- | --- | --- |
| Vercel Inc. | US | Web 应用托管、无服务器函数、AI Gateway（代理） | 包括会议元数据、聊天的所有应用流量 | 函数固定在法兰克福 (fra1)；AI Gateway 实行零数据保留政策（不保留提示） | DPA + SCCs；ZDR |
| Fly.io Inc. | US | 实时 WebSocket 服务器托管 | 聊天分发、会议事件、传输中的转录词 | 巴黎 (CDG) | DPA + SCCs |
| Neon Inc. | US | Postgres（主数据库） | 账户、会议、消息、转录、计费使用情况 | 法兰克福 (AWS eu-central-1) | DPA + SCCs；静态加密 |
| Tigris Data Inc. | US | 对象存储 | 会议录音、聊天附件、文档、导出存档 | 欧盟多区域（法兰克福 + 阿姆斯特丹） | DPA；TLS |
| MindMeeting OÜ (Mind API) | EE | 会议媒体 (SFU)、语音识别、实时翻译 | 音频/视频流、语音、参与者姓名/角色 | OVH, 法国 | 集团内部协议 |
| Mistral AI SAS | FR | 会后 AI 摘要 | 会议转录（会议结束时一次性） | EU | DPA；零数据保留；不使用付费 API 数据进行训练 |
| DeepL SE | DE | 文档翻译 | 用户提交翻译的文档内容 | EU（科隆） | DPA；不为训练而保留数据 |
| Stripe Payments Europe Ltd / Stripe Inc. | IE / US | 计费 | 姓名、电子邮件、账单地址、支付方式（信用卡信息从未触及 InterMIND） | EU / US | DPA + SCCs；PCI-DSS |
| PostHog | US (EU Cloud) | 产品分析、会话回放 | 使用事件、控制台/回放（受同意门控，默认为选择退出；会议语音从日志中清除） | EU (eu.posthog.com) | DPA；欧盟居民 |
| Functional Software Inc. (Sentry) | US (EU region) | 错误监控 | 错误跟踪、面包屑（无会议内容） | EU (de.sentry.io) | DPA；欧盟居民 |
| Resend | US | 事务性电子邮件（登录代码、通知） | 收件人电子邮件、消息内容 | 爱尔兰 (eu-west-1) | DPA + SCCs |
| Upstash Inc. | US | OIDC 会话缓存 (Redis) | 加密会话/令牌缓存 | 法兰克福 (fra1) | DPA + SCCs；加密负载 |
| Pipedrive OÜ | EE | 销售 CRM（联系/合作表格） | 潜在客户姓名、电子邮件、公司、消息 | EU | DPA |
| Google LLC / Microsoft Corp. | US | 仅限 OAuth 登录 | 姓名、电子邮件、个人资料照片（标准 OAuth 范围） | US | DPF / SCCs |

如对此列表有疑问或需索取相关传输保障措施的副本，请联系 privacy@mind.com。
