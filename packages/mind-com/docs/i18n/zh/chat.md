---
footer: false
# sidebar: false
# aside: false
next: false
lastUpdated: false
navbar: false
# layout: doc
---

<script setup>
  const chatPrompts = [
    // 基于痛点的搜索查询 - 商业中的语言障碍
    { id: "1", text: "如何在不懂对方语言的情况下与外国客户沟通", category: "communication" },
    { id: "2", text: "商务会议实时翻译", category: "translation" },
    { id: "3", text: "视频通话翻译软件", category: "interpretation" },
    { id: "4", text: "因语言障碍导致的业务损失", category: "business-problems" },
    
    // 具体商业场景
    { id: "5", text: "如何向国际客户做演示", category: "presentations" },
    { id: "6", text: "用不同语言进行产品演示", category: "demos" },
    { id: "7", text: "国际销售会议最佳实践", category: "sales" },
    { id: "8", text: "与不同国家的供应商沟通", category: "supply-chain" },
    
    // 寻求解决方案的查询
    { id: "9", text: "昂贵人工翻译的替代方案", category: "cost-saving" },
    { id: "10", text: "AI翻译与人工翻译对比", category: "comparison" },
    { id: "11", text: "商务即时语言翻译", category: "instant-translation" },
    { id: "12", text: "多语言团队协作工具", category: "collaboration" },
    
    // 技术要求搜索
    { id: "13", text: "技术讨论的翻译准确性", category: "accuracy" },
    { id: "14", text: "企业安全翻译软件", category: "security" },
    { id: "15", text: "与现有视频会议系统集成", category: "integration" },
    { id: "16", text: "符合GDPR的翻译服务", category: "compliance" },
    
    // 投资回报率和商业价值
    { id: "17", text: "国际业务中沟通不畅的成本", category: "roi" },
    { id: "18", text: "人工翻译与AI解决方案成本计算", category: "cost-calculator" },
    { id: "19", text: "提高国际销售转化率", category: "conversion" },
    { id: "20", text: "无需语言培训的全球扩张", category: "expansion" },
    
    // 竞争对手比较搜索
    { id: "21", text: "Google Meet翻译的局限性", category: "google-meet" },
    { id: "22", text: "Zoom字幕翻译问题", category: "zoom" },
    { id: "23", text: "Microsoft Teams翻译质量问题", category: "teams" },
    
    // 行业特定搜索
    { id: "24", text: "与海外供应商的制造业沟通", category: "manufacturing" },
    { id: "25", text: "出口业务语言解决方案", category: "export" },
]
</script>

<AIChat :prompts="chatPrompts" />