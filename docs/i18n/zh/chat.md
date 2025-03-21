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
  // 商业服务（第一块）
  { id: "1", text: "在UAE注册公司", category: "business" },
  { id: "2", text: "Mainland公司设立", category: "business" },
  { id: "3", text: "Free Zone公司注册", category: "business" },
  { id: "4", text: "离岸公司成立", category: "business" },
  { id: "5", text: "UAE自由职业签证", category: "business" },
  { id: "6", text: "迪拜营业执照", category: "business" },
  { id: "7", text: "UAE贸易许可证要求", category: "business" },
  { id: "23", text: "UAE企业设立", category: "business" },
  { id: "24", text: "迪拜Free Zone", category: "business" },
  { id: "25", text: "UAE公司注册", category: "business" },
  { id: "26", text: "UAE自由职业签证", category: "business" },
  
  // 签证和移民
  { id: "8", text: "UAE Golden Visa申请", category: "visa" },
  { id: "9", text: "UAE工作签证", category: "visa" },
  { id: "10", text: "UAE家庭签证担保", category: "visa" },
  { id: "11", text: "签证体检要求", category: "visa" },
  { id: "12", text: "UAE居留签证流程", category: "visa" },
  { id: "27", text: "UAE签证要求", category: "visa" },
  
  // 法律和文件
  { id: "13", text: "Emirates ID申请", category: "legal" },
  { id: "14", text: "UAE文件认证", category: "legal" },
  { id: "15", text: "UAE授权委托书", category: "legal" },
  { id: "16", text: "UAE商业合同审查", category: "legal" },
  { id: "40", text: "Emirates ID更新", category: "legal" },
  
  // 金融服务
  { id: "17", text: "UAE企业银行账户", category: "finance" },
  { id: "18", text: "UAE税务登记（VAT）", category: "finance" },
  { id: "19", text: "UAE会计服务", category: "finance" },
  { id: "20", text: "UAE经济实质法规", category: "finance" },
  { id: "41", text: "UAE银行服务", category: "finance" },
  
  // 房地产和服务
  { id: "21", text: "UAE房地产投资", category: "property" },
  { id: "22", text: "迪拜办公空间租赁", category: "property" },

  // 医疗保健
  { id: "47", text: "UAE医疗保险", category: "healthcare" },
  { id: "48", text: "迪拜最佳医院", category: "healthcare" },
  { id: "49", text: "UAE体检", category: "healthcare" },
  
  // 旅游和娱乐（最后）
  { id: "28", text: "迪拜旅游景点", category: "travel" },
  { id: "29", text: "Expo City Dubai", category: "attractions" },
  { id: "30", text: "Dubai Frame门票", category: "attractions" },
  { id: "31", text: "Burj Khalifa门票", category: "attractions" },
  { id: "32", text: "未来博物馆", category: "attractions" },
  { id: "33", text: "阿布扎比卢浮宫", category: "attractions" },
  { id: "34", text: "阿布扎比法拉利世界", category: "attractions" },
  { id: "35", text: "迪拜购物中心购物", category: "shopping" },
]
</script>

<AIChat :prompts="chatPrompts" />

<userStyle>Normal</userStyle>