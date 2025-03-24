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
  // Dịch vụ kinh doanh (khối đầu tiên)
  { id: "1", text: "Đăng ký công ty tại UAE", category: "business" },
  { id: "2", text: "Thành lập công ty Mainland", category: "business" },
  { id: "3", text: "Đăng ký công ty Free zone", category: "business" },
  { id: "4", text: "Thành lập công ty Offshore", category: "business" },
  { id: "5", text: "Visa freelance UAE", category: "business" },
  { id: "6", text: "Giấy phép kinh doanh Dubai", category: "business" },
  { id: "7", text: "Yêu cầu giấy phép thương mại UAE", category: "business" },
  { id: "23", text: "Thành lập doanh nghiệp tại UAE", category: "business" },
  { id: "24", text: "Khu Free zone Dubai", category: "business" },
  { id: "25", text: "Đăng ký công ty tại UAE", category: "business" },
  { id: "26", text: "Visa freelance UAE", category: "business" },
  
  // Thị thực và di trú
  { id: "8", text: "Đơn xin Golden Visa UAE", category: "visa" },
  { id: "9", text: "Visa lao động UAE", category: "visa" },
  { id: "10", text: "Bảo lãnh visa gia đình tại UAE", category: "visa" },
  { id: "11", text: "Yêu cầu kiểm tra y tế visa", category: "visa" },
  { id: "12", text: "Quy trình visa cư trú UAE", category: "visa" },
  { id: "27", text: "Yêu cầu visa UAE", category: "visa" },
  
  // Pháp lý và giấy tờ
  { id: "13", text: "Đăng ký Emirates ID", category: "legal" },
  { id: "14", text: "Chứng thực giấy tờ UAE", category: "legal" },
  { id: "15", text: "Giấy ủy quyền tại UAE", category: "legal" },
  { id: "16", text: "Xem xét hợp đồng kinh doanh UAE", category: "legal" },
  { id: "40", text: "Gia hạn Emirates ID", category: "legal" },
  
  // Dịch vụ tài chính
  { id: "17", text: "Tài khoản ngân hàng doanh nghiệp UAE", category: "finance" },
  { id: "18", text: "Đăng ký thuế UAE (VAT)", category: "finance" },
  { id: "19", text: "Dịch vụ kế toán tại UAE", category: "finance" },
  { id: "20", text: "Quy định về Economic Substance UAE", category: "finance" },
  { id: "41", text: "Dịch vụ ngân hàng UAE", category: "finance" },
  
  // Bất động sản và dịch vụ
  { id: "21", text: "Đầu tư bất động sản UAE", category: "property" },
  { id: "22", text: "Thuê văn phòng Dubai", category: "property" },

  // Y tế
  { id: "47", text: "Bảo hiểm y tế UAE", category: "healthcare" },
  { id: "48", text: "Các bệnh viện tốt nhất tại Dubai", category: "healthcare" },
  { id: "49", text: "Kiểm tra sức khỏe UAE", category: "healthcare" },
  
  // Du lịch và giải trí (cuối cùng)
  { id: "28", text: "Điểm du lịch Dubai", category: "travel" },
  { id: "29", text: "Expo City Dubai", category: "attractions" },
  { id: "30", text: "Vé Dubai Frame", category: "attractions" },
  { id: "31", text: "Vé Burj Khalifa", category: "attractions" },
  { id: "32", text: "Museum of the Future", category: "attractions" },
  { id: "33", text: "Abu Dhabi Louvre", category: "attractions" },
  { id: "34", text: "Ferrari World Abu Dhabi", category: "attractions" },
  { id: "35", text: "Mua sắm tại Dubai Mall", category: "shopping" },
]
</script>

<AIChat :prompts="chatPrompts" />

<userStyle>Normal</userStyle>