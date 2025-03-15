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
  { id: "1", text: "Expo City Dubai", category: "attractions" },
  { id: "2", text: "Vé Dubai Frame", category: "attractions" },
  { id: "3", text: "Vé Burj Khalifa", category: "attractions" },
  { id: "4", text: "Museum of the Future", category: "attractions" },
  { id: "5", text: "Abu Dhabi Louvre", category: "attractions" },
  { id: "6", text: "Ferrari World Abu Dhabi", category: "attractions" },
  { id: "7", text: "Nhà hàng tại Dubai Mall", category: "food" },
  { id: "8", text: "Món ăn Ả Rập ngon nhất Dubai", category: "food" },
  { id: "9", text: "Nhà hàng sao Michelin Dubai", category: "food" },
  { id: "10", text: "Ẩm thực đường phố Sharjah", category: "food" },
  { id: "11", text: "Thuê nhà tại Palm Jumeirah", category: "housing" },
  { id: "12", text: "Căn hộ Dubai Marina", category: "housing" },
  { id: "13", text: "Nhà ở giá rẻ Abu Dhabi", category: "housing" },
  { id: "14", text: "Luật thuê nhà UAE", category: "housing" },
  { id: "15", text: "Bản đồ tàu điện ngầm Dubai", category: "transportation" },
  { id: "16", text: "Giá taxi Abu Dhabi", category: "transportation" },
  { id: "17", text: "Bằng lái xe UAE", category: "transportation" },
  { id: "18", text: "Dịch vụ RTA Dubai", category: "transportation" },
  { id: "19", text: "Mua sắm tại Dubai Mall", category: "shopping" },
  { id: "20", text: "Global Village Dubai", category: "shopping" },
  { id: "21", text: "Chợ vàng Dubai", category: "shopping" },
  { id: "22", text: "Ưu đãi tại Mall of Emirates", category: "shopping" },
  { id: "23", text: "Thành lập doanh nghiệp UAE", category: "business" },
  { id: "24", text: "Dubai Free Zones", category: "business" },
  { id: "25", text: "Đăng ký công ty UAE", category: "business" },
  { id: "26", text: "Visa freelance UAE", category: "business" },
  { id: "27", text: "Yêu cầu visa UAE", category: "travel" },
  { id: "28", text: "Điểm du lịch Dubai", category: "travel" },
  { id: "29", text: "Đơn xin visa du lịch UAE", category: "travel" },
  { id: "30", text: "Địa điểm du lịch Abu Dhabi", category: "travel" },
  { id: "31", text: "Safari sa mạc Dubai", category: "travel" },
  { id: "32", text: "Việc làm cho người nước ngoài tại Dubai", category: "jobs" },
  { id: "33", text: "Quy trình giấy phép lao động UAE", category: "jobs" },
  { id: "34", text: "Việc làm từ xa tại UAE", category: "jobs" },
  { id: "35", text: "Hướng dẫn lương UAE", category: "jobs" },
  { id: "36", text: "Dự báo thời tiết UAE", category: "events" },
  { id: "37", text: "Sự kiện sắp tới tại Dubai", category: "events" },
  { id: "38", text: "Lễ kỷ niệm quốc khánh UAE", category: "events" },
  { id: "39", text: "Lễ hội mua sắm Dubai", category: "events" },
  { id: "40", text: "Gia hạn Emirates ID", category: "services" },
  { id: "41", text: "Dịch vụ ngân hàng UAE", category: "services" },
  { id: "42", text: "Thanh toán hóa đơn DEWA", category: "services" },
  { id: "43", text: "Nâng cấp gói Etisalat", category: "services" },
  { id: "44", text: "Trường học tốt nhất Dubai", category: "education" },
  { id: "45", text: "Tuyển sinh đại học UAE", category: "education" },
  { id: "46", text: "Xếp hạng trường học KHDA", category: "education" },
  { id: "47", text: "Bảo hiểm y tế UAE", category: "healthcare" },
  { id: "48", text: "Bệnh viện tốt nhất Dubai", category: "healthcare" },
  { id: "49", text: "Kiểm tra sức khỏe UAE", category: "healthcare" },
  { id: "50", text: "Dịch vụ DHA", category: "healthcare" }
]
</script>

<AIChat :prompts="chatPrompts" />