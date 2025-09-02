<script setup>
  const chatPrompts = [
    // Truy vấn tìm kiếm dựa trên vấn đề - Rào cản ngôn ngữ trong kinh doanh
    "Thay thế cho phiên dịch viên đắt đỏ",
    "Cách giao tiếp với khách hàng nước ngoài mà không biết ngôn ngữ của họ",
    "Dịch thuật thời gian thực cho cuộc họp kinh doanh",
    "Phần mềm phiên dịch cuộc gọi video",
    "Mất hợp đồng do rào cản ngôn ngữ",
    
    // Các tình huống kinh doanh cụ thể
    "Cách thuyết trình với khách hàng quốc tế",
    "Thực hiện demo sản phẩm bằng nhiều ngôn ngữ khác nhau",
    "Thực hành tốt nhất cho cuộc họp bán hàng quốc tế",
    "Giao tiếp với nhà cung cấp từ các quốc gia khác nhau",
    
    // Truy vấn tìm kiếm giải pháp
    "So sánh dịch thuật AI với phiên dịch viên con người",
    "Dịch thuật ngôn ngữ tức thì cho kinh doanh",
    "Công cụ cộng tác nhóm đa ngôn ngữ",
    
    // Tìm kiếm yêu cầu kỹ thuật
    "Độ chính xác dịch thuật cho thảo luận kỹ thuật",
    "Phần mềm dịch thuật bảo mật cho doanh nghiệp",
    "Tích hợp với hội nghị truyền hình hiện có",
    "Dịch vụ dịch thuật tuân thủ GDPR",
    
    // ROI và giá trị kinh doanh
    "Chi phí hiểu lầm trong kinh doanh quốc tế",
    "Tính toán chi phí phiên dịch viên so với giải pháp AI",
    "Tăng tỷ lệ chuyển đổi bán hàng quốc tế",
    "Mở rộng toàn cầu mà không cần đào tạo ngôn ngữ",
    
    // Tìm kiếm so sánh đối thủ
    "Hạn chế dịch thuật Google Meet",
    "Vấn đề dịch phụ đề Zoom",
    "Vấn đề chất lượng dịch thuật Microsoft Teams",
    
    // Tìm kiếm theo ngành cụ thể
    "Giao tiếp sản xuất với nhà cung cấp nước ngoài",
    "Giải pháp ngôn ngữ cho kinh doanh xuất khẩu",
  ]
</script>

<AIChat :prompts="chatPrompts" />