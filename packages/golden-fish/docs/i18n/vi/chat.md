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
    { id: "49", text: "các trang phổ biến của trang web này, bảng", category: "general" },
    { id: "49", text: "trang web này, 10 câu hỏi thường gặp hàng đầu", category: "general" },
    { id: "49", text: "liên kết trang web free zone, bảng", category: "general" },
    { id: "49", text: "bảng liên kết đến các trang web free zone kèm giá", category: "general" },
    
    { id: "1", text: "Đăng ký công ty tại UAE", category: "business" },
    { id: "7", text: "Yêu cầu giấy phép thương mại UAE", category: "business" },
    { id: "7", text: "so sánh các loại hình doanh nghiệp UAE, bảng & phân tích", category: "business" },
    { id: "7", text: "chuyên gia so sánh chi phí chuyển công ty từ Anh đến các free zone khác nhau cho doanh nghiệp tài chính với hai người sáng lập. 8 thị thực, 3 thành viên gia đình + một chú chó. Thuê văn phòng trong trung tâm thương mại. Người Anh, không phải cư dân UAE", category: "business" },
    { id: "48", text: "10 Bệnh viện Tốt nhất tại UAE, Ưu và Nhược điểm", category: "healthcare" },

    { id: "15", text: "Giấy ủy quyền tại UAE", category: "legal" },

    { id: "2", text: "Thành lập công ty Mainland", category: "business" },
    { id: "3", text: "Đăng ký công ty Free zone", category: "business" },
    { id: "4", text: "Thành lập công ty Offshore", category: "business" },
    { id: "5", text: "Thị thực freelance UAE", category: "business" },
    { id: "6", text: "Giấy phép kinh doanh Dubai", category: "business" },
    { id: "23", text: "Thành lập doanh nghiệp UAE", category: "business" },
    { id: "24", text: "Free zone Dubai", category: "business" },
    { id: "25", text: "Đăng ký công ty UAE", category: "business" },
    { id: "26", text: "Thị thực freelance UAE", category: "business" },
    
    { id: "8", text: "Đơn xin Golden Visa UAE", category: "visa" },
    { id: "9", text: "Thị thực lao động UAE", category: "visa" },
    { id: "10", text: "Bảo lãnh thị thực gia đình tại UAE", category: "visa" },
    { id: "11", text: "Yêu cầu kiểm tra y tế cho thị thực", category: "visa" },
    { id: "12", text: "Quy trình thị thực cư trú UAE", category: "visa" },
    { id: "27", text: "Yêu cầu thị thực UAE", category: "visa" },
    
    { id: "13", text: "Đăng ký Emirates ID", category: "legal" },
    { id: "14", text: "Chứng thực tài liệu UAE", category: "legal" },
    { id: "16", text: "Xem xét hợp đồng kinh doanh UAE", category: "legal" },
    { id: "40", text: "Gia hạn Emirates ID", category: "legal" },
    
    { id: "17", text: "Tài khoản ngân hàng doanh nghiệp UAE", category: "finance" },
    { id: "18", text: "Đăng ký thuế UAE (VAT)", category: "finance" },
    { id: "19", text: "Dịch vụ kế toán tại UAE", category: "finance" },
    { id: "20", text: "Quy định về Thực thể Kinh tế UAE", category: "finance" },
    { id: "41", text: "Dịch vụ ngân hàng UAE", category: "finance" },
    
    { id: "21", text: "Đầu tư bất động sản UAE", category: "property" },
    { id: "22", text: "Thuê văn phòng Dubai", category: "property" },

    { id: "47", text: "Bảo hiểm y tế UAE", category: "healthcare" },
    { id: "49", text: "Kiểm tra sức khỏe UAE", category: "healthcare" },
    
    { id: "28", text: "Điểm du lịch Dubai", category: "travel" },
    { id: "29", text: "Expo City Dubai", category: "attractions" },
    { id: "30", text: "Vé Dubai Frame", category: "attractions" },
    { id: "31", text: "Vé Burj Khalifa", category: "attractions" },
    { id: "32", text: "Bảo tàng Tương lai", category: "attractions" },
    { id: "33", text: "Abu Dhabi Louvre", category: "attractions" },
    { id: "34", text: "Ferrari World Abu Dhabi", category: "attractions" },
    { id: "35", text: "Mua sắm tại Dubai Mall", category: "shopping" },
]
</script>

<AIChat :prompts="chatPrompts" />
