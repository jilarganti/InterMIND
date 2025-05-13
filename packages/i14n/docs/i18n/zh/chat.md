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
    { id: "49", text: "本站热门页面，表格", category: "general" },
    { id: "49", text: "本站十大常见问题", category: "general" },
    { id: "49", text: "自贸区网站链接，表格", category: "general" },
    { id: "49", text: "带价格的自贸区网站链接表格", category: "general" },
    
    { id: "1", text: "在阿联酋注册公司", category: "business" },
    { id: "7", text: "阿联酋贸易许可证要求", category: "business" },
    { id: "7", text: "阿联酋实体类型比较，表格和分析", category: "business" },
    { id: "7", text: "专业比较将英国公司迁移到不同自贸区的成本，针对有两位创始人的金融企业。8个签证名额，3位家庭成员+一只狗。商务中心租赁。英国人，非阿联酋居民", category: "business" },
    { id: "48", text: "阿联酋十大最佳医院，优劣分析", category: "healthcare" },

    { id: "15", text: "阿联酋授权委托书", category: "legal" },

    // 商业服务（第一部分）
    { id: "2", text: "内地公司设立", category: "business" },
    { id: "3", text: "自贸区公司注册", category: "business" },
    { id: "4", text: "离岸公司成立", category: "business" },
    { id: "5", text: "阿联酋自由职业签证", category: "business" },
    { id: "6", text: "迪拜营业执照", category: "business" },
    { id: "23", text: "阿联酋企业设立", category: "business" },
    { id: "24", text: "迪拜自贸区", category: "business" },
    { id: "25", text: "阿联酋公司注册", category: "business" },
    { id: "26", text: "阿联酋自由职业签证", category: "business" },
    
    // 签证和移民
    { id: "8", text: "阿联酋黄金签证申请", category: "visa" },
    { id: "9", text: "阿联酋工作签证", category: "visa" },
    { id: "10", text: "阿联酋家庭签证担保", category: "visa" },
    { id: "11", text: "签证体检要求", category: "visa" },
    { id: "12", text: "阿联酋居留签证流程", category: "visa" },
    { id: "27", text: "阿联酋签证要求", category: "visa" },
    
    // 法律和文件
    { id: "13", text: "阿联酋身份证申请", category: "legal" },
    { id: "14", text: "阿联酋文件认证", category: "legal" },
    { id: "16", text: "阿联酋商业合同审查", category: "legal" },
    { id: "40", text: "阿联酋身份证续签", category: "legal" },
    
    // 金融服务
    { id: "17", text: "阿联酋公司银行账户", category: "finance" },
    { id: "18", text: "阿联酋税务登记（增值税）", category: "finance" },
    { id: "19", text: "阿联酋会计服务", category: "finance" },
    { id: "20", text: "阿联酋经济实质法规", category: "finance" },
    { id: "41", text: "阿联酋银行服务", category: "finance" },
    
    // 房地产和服务
    { id: "21", text: "阿联酋房地产投资", category: "property" },
    { id: "22", text: "迪拜办公空间租赁", category: "property" },

    // 医疗保健
    { id: "47", text: "阿联酋医疗保险", category: "healthcare" },
    { id: "49", text: "阿联酋体检", category: "healthcare" },
    
    // 旅游和娱乐（最后部分）
    { id: "28", text: "迪拜旅游景点", category: "travel" },
    { id: "29", text: "迪拜世博城", category: "attractions" },
    { id: "30", text: "迪拜相框门票", category: "attractions" },
    { id: "31", text: "哈利法塔门票", category: "attractions" },
    { id: "32", text: "未来博物馆", category: "attractions" },
    { id: "33", text: "阿布扎比卢浮宫", category: "attractions" },
    { id: "34", text: "阿布扎比法拉利世界", category: "attractions" },
    { id: "35", text: "迪拜购物中心购物", category: "shopping" },
]
</script>

<AIChat :prompts="chatPrompts" />