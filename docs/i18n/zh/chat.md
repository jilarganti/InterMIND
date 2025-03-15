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
  { id: "1", text: "迪拜世博城", category: "attractions" },
  { id: "2", text: "迪拜相框门票", category: "attractions" },
  { id: "3", text: "哈利法塔门票", category: "attractions" },
  { id: "4", text: "未来博物馆", category: "attractions" },
  { id: "5", text: "阿布扎比卢浮宫", category: "attractions" },
  { id: "6", text: "阿布扎比法拉利世界", category: "attractions" },
  { id: "7", text: "迪拜购物中心餐厅", category: "food" },
  { id: "8", text: "迪拜最佳阿拉伯美食", category: "food" },
  { id: "9", text: "迪拜米其林星级餐厅", category: "food" },
  { id: "10", text: "沙迦街头美食", category: "food" },
  { id: "11", text: "棕榈岛租房", category: "housing" },
  { id: "12", text: "迪拜码头公寓", category: "housing" },
  { id: "13", text: "阿布扎比经济适用房", category: "housing" },
  { id: "14", text: "阿联酋租赁法律", category: "housing" },
  { id: "15", text: "迪拜地铁线路图", category: "transportation" },
  { id: "16", text: "阿布扎比出租车费率", category: "transportation" },
  { id: "17", text: "阿联酋驾照", category: "transportation" },
  { id: "18", text: "迪拜RTA服务", category: "transportation" },
  { id: "19", text: "迪拜购物中心购物", category: "shopping" },
  { id: "20", text: "迪拜环球村", category: "shopping" },
  { id: "21", text: "迪拜黄金市场", category: "shopping" },
  { id: "22", text: "阿联酋购物中心优惠", category: "shopping" },
  { id: "23", text: "阿联酋企业设立", category: "business" },
  { id: "24", text: "迪拜自由区", category: "business" },
  { id: "25", text: "阿联酋公司注册", category: "business" },
  { id: "26", text: "阿联酋自由职业签证", category: "business" },
  { id: "27", text: "阿联酋签证要求", category: "travel" },
  { id: "28", text: "迪拜旅游景点", category: "travel" },
  { id: "29", text: "阿联酋访问签证申请", category: "travel" },
  { id: "30", text: "阿布扎比旅游景点", category: "travel" },
  { id: "31", text: "迪拜沙漠冒险", category: "travel" },
  { id: "32", text: "迪拜外籍人士工作", category: "jobs" },
  { id: "33", text: "阿联酋工作许可流程", category: "jobs" },
  { id: "34", text: "阿联酋远程工作", category: "jobs" },
  { id: "35", text: "阿联酋薪资指南", category: "jobs" },
  { id: "36", text: "阿联酋天气预报", category: "events" },
  { id: "37", text: "迪拜即将举行的活动", category: "events" },
  { id: "38", text: "阿联酋国庆庆典", category: "events" },
  { id: "39", text: "迪拜购物节", category: "events" },
  { id: "40", text: "Emirates ID更新", category: "services" },
  { id: "41", text: "阿联酋银行服务", category: "services" },
  { id: "42", text: "DEWA账单支付", category: "services" },
  { id: "43", text: "Etisalat套餐升级", category: "services" },
  { id: "44", text: "迪拜最佳学校", category: "education" },
  { id: "45", text: "阿联酋大学入学", category: "education" },
  { id: "46", text: "KHDA学校评级", category: "education" },
  { id: "47", text: "阿联酋医疗保险", category: "healthcare" },
  { id: "48", text: "迪拜最佳医院", category: "healthcare" },
  { id: "49", text: "阿联酋体检", category: "healthcare" },
  { id: "50", text: "DHA服务", category: "healthcare" }
]
</script>

<AIChat :prompts="chatPrompts" />