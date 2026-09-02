---
title: 分包处理商
description: InterMIND 用于处理个人数据的基础设施和服务提供商——包括每个提供商的目的、处理区域和保障措施。
updated: "2026-09-02"
---

为运行 InterMIND，我们使用少量基础设施和服务提供商（“分包处理商”）。本页面列出了每个分包处理商、其处理内容、处理地点以及所采取的保障措施。**服务运营商和签约实体：**Golden Fish LLC (阿联酋)。**发布商和知识产权所有者：**MindMeeting OÜ (爱沙尼亚)。

默认情况下，数据处理发生在欧盟。如果提供商的企业实体位于欧盟/欧洲经济区之外，数据传输将受标准合同条款 (SCCs) 和/或欧盟-美国数据隐私框架 (DPF) 的保护。每当添加或移除分包处理商时，我们会更新此列表。

| 分包处理商 | 实体所在地 | 目的 | 处理的个人数据 | 处理位置 | 保障措施 |
| --- | --- | --- | --- | --- | --- |
| Vercel Inc. | 美国 | Web 应用托管、无服务器功能、AI 网关（代理） | 所有应用流量，包括会议元数据、聊天 | 功能固定在法兰克福 (fra1)；AI 网关采用零数据保留政策（不保留提示） | DPA + SCCs; ZDR |
| Fly.io Inc. | 美国 | 实时 WebSocket 服务器托管 | 聊天分发、会议事件、传输中的转录词语 | 巴黎 (CDG) | DPA + SCCs |
| Neon Inc. | 美国 | Postgres（主数据库） | 账户、会议、消息、转录、计费使用情况 | 法兰克福 (AWS eu-central-1) | DPA + SCCs; 静态加密 |
| Tigris Data Inc. | 美国 | 对象存储 | 会议录音、聊天附件、文档、导出存档 | 欧盟多区域（法兰克福 + 阿姆斯特丹） | DPA; TLS |
| MindMeeting OÜ (Mind API) | 爱沙尼亚 | 会议媒体 (SFU)、语音识别、实时翻译 | 音频/视频流、语音、参与者姓名/角色 | OVH，法国 | 组内协议 |
| Mistral AI SAS | 法国 | 会后 AI 摘要 | 会议转录（仅在会议结束时一次） | 欧盟 | DPA; 零数据保留; 不对付费 API 数据进行训练 |
| DeepL SE | 德国 | 文档翻译 | 用户提交翻译的文档内容 | 欧盟（科隆） | DPA; 不保留用于训练 |
| Stripe Payments Europe Ltd / Stripe Inc. | 爱尔兰 / 美国 | 计费 | 姓名、电子邮件、账单地址、支付方式（信用卡数据绝不触及 InterMIND） | 欧盟 / 美国 | DPA + SCCs; PCI-DSS |
| PostHog | 美国（欧盟云） | 产品分析、会话回放 | 使用事件、控制台/回放（受同意门控，默认选择退出；会议语音从日志中清除） | 欧盟 (eu.posthog.com) | DPA; 欧盟居住地 |
| Functional Software Inc. (Sentry) | 美国（欧盟区域） | 错误监控 | 错误追踪、面包屑（不含会议内容） | 欧盟 (de.sentry.io) | DPA; 欧盟居住地 |
| Resend | 美国 | 事务性电子邮件（登录代码、通知） | 收件人电子邮件、消息内容 | 爱尔兰 (eu-west-1) | DPA + SCCs |
| Upstash Inc. | 美国 | OIDC 会话缓存 (Redis) | 加密会话/令牌缓存 | 法兰克福 (fra1) | DPA + SCCs; 加密负载 |
| Pipedrive OÜ | 爱沙尼亚 | 销售 CRM（联系/合作伙伴表格） | 潜在客户姓名、电子邮件、公司、消息 | 欧盟 | DPA |
| Google LLC / Microsoft Corp. | 美国 | 仅 OAuth 登录 | 姓名、电子邮件、个人资料照片（标准 OAuth 范围） | 美国 | DPF / SCCs |

如对此列表有疑问或需要相关传输保障措施的副本，请联系 privacy@mind.com。
