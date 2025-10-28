---
layout: "BlogPost"
title: "Giới thiệu về các khái niệm và thuật ngữ kiểm thử phần mềm"
description: "Hướng dẫn thân thiện cho người mới bắt đầu để hiểu các nguyên tắc cơ bản của kiểm thử phần mềm, bao gồm các loại kiểm thử, quy trình và thuật ngữ chính."
date: "2025-10-06"
author: "[Jilarganti](https://github.com/jilarganti)"
---

# Cơ bản về kiểm thử phần mềm: Hướng dẫn đầy đủ (2025)

<p class="subtitle">Mọi thứ bạn cần biết để bắt đầu với kiểm thử phần mềm</p>

> **Kiểm thử phần mềm là gì?**  
> Kiểm thử phần mềm là quá trình đánh giá và xác minh rằng một ứng dụng phần mềm hoạt động như mong đợi. Nó giúp xác định lỗi, khoảng trống hoặc các yêu cầu còn thiếu trước khi phần mềm đến tay người dùng.

## Các loại kiểm thử phần mềm

Có bốn loại kiểm thử chính, mỗi loại phục vụ một mục đích khác nhau trong chu trình phát triển:

| Loại                        | Chúng ta kiểm thử gì         | Khi nào            | Mục tiêu                    |
| --------------------------- | ---------------------------- | ------------------ | --------------------------- |
| **Kiểm thử đơn vị**         | Các hàm/phương thức riêng lẻ | Trong quá trình phát triển | Xác minh từng phần hoạt động |
| **Kiểm thử tích hợp**       | Cách các module hoạt động cùng nhau | Sau kiểm thử đơn vị | Kiểm tra kết nối           |
| **Kiểm thử hệ thống**       | Ứng dụng hoàn chỉnh          | Trước khi phát hành | Xác thực từ đầu đến cuối   |
| **Kiểm thử chấp nhận**      | Yêu cầu nghiệp vụ            | Giai đoạn cuối     | Xác nhận sẵn sàng          |

## Quy Trình Kiểm Thử

Kiểm thử phần mềm tuân theo một quy trình làm việc rõ ràng từ lập kế hoạch đến phát hành:

<div class="process-flow">
  <div class="process-step">
    <div class="process-icon">📋</div>
    <div class="process-label">Lập kế hoạch</div>
  </div>
  <div class="arrow">→</div>
  <div class="process-step">
    <div class="process-icon">✍️</div>
    <div class="process-label">Thiết kế</div>
  </div>
  <div class="arrow">→</div>
  <div class="process-step">
    <div class="process-icon">▶️</div>
    <div class="process-label">Thực thi</div>
  </div>
  <div class="arrow">→</div>
  <div class="process-step">
    <div class="process-icon">🐛</div>
    <div class="process-label">Báo cáo</div>
  </div>
  <div class="arrow">→</div>
  <div class="process-step">
    <div class="process-icon">🔧</div>
    <div class="process-label">Sửa chữa</div>
  </div>
  <div class="arrow">→</div>
  <div class="process-step">
    <div class="process-icon">✅</div>
    <div class="process-label">Xác minh</div>
  </div>
</div>

## Kiểm thử thủ công vs Kiểm thử tự động

Cả hai phương pháp đều có vị trí của mình trong chiến lược kiểm thử:

<div class="comparison-grid">

<div class="comparison-card manual">

### 👤 Kiểm thử thủ công

- Người kiểm thử khám phá ứng dụng
- Tuyệt vời cho đánh giá UI/UX
- Hoàn hảo cho các tính năng mới
- Linh hoạt và sáng tạo
- Chậm hơn cho các tác vụ lặp lại

**Tốt nhất cho:** Kiểm thử khám phá, khả năng sử dụng, các kịch bản đặc biệt

</div>

<div class="comparison-card automated">

### 🤖 Kiểm thử tự động

- Các script chạy kiểm thử tự động
- Nhanh và nhất quán
- Lý tưởng cho kiểm thử hồi quy
- Yêu cầu thời gian thiết lập ban đầu
- Hiệu quả về chi phí trong dài hạn

**Tốt nhất cho:** Hồi quy, kiểm thử API, các kịch bản lặp lại

</div>

</div>

## Kim Tự Tháp Kiểm Thử

Một chiến lược kiểm thử cân bằng tuân theo phân phối này:

<div class="pyramid">
  <div class="pyramid-level level-ui">Kiểm Thử UI/E2E (Ít hơn)</div>
  <div class="pyramid-level level-integration">Kiểm Thử Tích Hợp (Nhiều hơn)</div>
  <div class="pyramid-level level-unit">Kiểm Thử Đơn Vị (Nhiều nhất)</div>
</div>

<p style="text-align: center; color: var(--vp-c-text-2); margin-top: 1em;">
  <small>Nhiều kiểm thử đơn vị = phản hồi nhanh hơn, chi phí thấp hơn. Ít kiểm thử UI = bảo trì ít hơn.</small>
</p>

## Thuật ngữ kiểm thử phổ biến

| Thuật ngữ              | Định nghĩa                                                                  |
| ---------------------- | --------------------------------------------------------------------------- |
| **Test Case**          | Một kịch bản cụ thể để kiểm thử với kết quả mong đợi                       |
| **Bug/Defect**         | Một lỗi hoặc khiếm khuyết gây ra hành vi không chính xác                   |
| **Regression Testing** | Kiểm thử lại để đảm bảo các thay đổi mới không làm hỏng các tính năng hiện có |
| **Smoke Testing**      | Các bài kiểm thử cơ bản nhanh để kiểm tra xem bản build có đủ ổn định cho việc kiểm thử sâu hơn không |
| **Test Coverage**      | Tỷ lệ phần trăm mã nguồn được thực thi bởi các bài kiểm thử                |

## Câu Hỏi Thường Gặp

### Hỏi: Tôi có cần kỹ năng lập trình để kiểm thử phần mềm không?

Đối với kiểm thử thủ công, kiến thức kỹ thuật cơ bản là đủ. Kiểm thử tự động yêu cầu kỹ năng lập trình (Python, Java, JavaScript là những ngôn ngữ phổ biến).

### Hỏi: Sự khác biệt giữa QA và kiểm thử là gì?

Kiểm thử là tìm ra lỗi. QA (Đảm Bảo Chất Lượng) là quy trình rộng hơn để ngăn ngừa lỗi thông qua các quy trình và tiêu chuẩn tốt.

### Hỏi: Kiểm thử bao nhiêu là đủ?

Không có con số hoàn hảo. Cân bằng giữa rủi ro, thời gian và tài nguyên. Các tính năng quan trọng cần kiểm thử nhiều hơn; các khu vực ít rủi ro cần ít hơn.

### Hỏi: AI có thể thay thế các tester phần mềm không?

AI có thể tự động hóa các bài kiểm thử lặp đi lặp lại, nhưng các tester con người vẫn cần thiết để hiểu logic nghiệp vụ, các trường hợp biên và trải nghiệm người dùng.

---

::: info Sẵn Sàng Bắt Đầu Kiểm Thử?
Hướng dẫn này bao gồm các kiến thức cơ bản. Cách tốt nhất để học là thực hành—bắt đầu với các test case đơn giản và dần dần xây dựng kỹ năng của bạn.
:::

<style scoped>
.subtitle {
  color: var(--vp-c-text-2);
  font-size: 1.1em;
  margin-bottom: 2em;
}

.process-flow {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2em 0;
  padding: 1.5em;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  flex-wrap: wrap;
}

.process-step {
  text-align: center;
  flex: 1;
  min-width: 80px;
  margin: 10px 5px;
}

.process-icon {
  font-size: 2em;
  margin-bottom: 0.3em;
}

.process-label {
  font-size: 0.9em;
  font-weight: 500;
  color: var(--vp-c-text-1);
}

.arrow {
  font-size: 1.5em;
  color: var(--vp-c-brand);
  margin: 0 5px;
}

.comparison-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5em;
  margin: 2em 0;
}

.comparison-card {
  padding: 1.5em;
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
}

.comparison-card.manual {
  border-left: 4px solid #ffc107;
}

.comparison-card.automated {
  border-left: 4px solid #17a2b8;
}

.comparison-card h3 {
  margin-top: 0;
  margin-bottom: 1em;
  color: var(--vp-c-text-1);
}

.comparison-card ul {
  list-style: none;
  padding-left: 0;
}

.comparison-card li {
  padding: 0.5em 0;
  padding-left: 1.5em;
  position: relative;
  color: var(--vp-c-text-1);
}

.comparison-card li:before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #28a745;
  font-weight: bold;
}

.comparison-card p {
  margin-top: 1em;
  color: var(--vp-c-text-2);
}

.comparison-card strong {
  color: var(--vp-c-text-1);
}

.pyramid {
  margin: 2em auto;
  text-align: center;
  max-width: 500px;
}

.pyramid-level {
  margin: 10px auto;
  padding: 15px;
  border-radius: 4px;
  font-weight: 500;
  transition: transform 0.2s;
  color: white;
}

.pyramid-level:hover {
  transform: scale(1.02);
}

.level-ui {
  width: 40%;
  background: #e74c3c;
}

.level-integration {
  width: 60%;
  background: #f39c12;
}

.level-unit {
  width: 80%;
  background: #27ae60;
}

@media (max-width: 768px) {
  .comparison-grid {
    grid-template-columns: 1fr;
  }
  
  .process-flow {
    flex-direction: column;
  }
  
  .arrow {
    transform: rotate(90deg);
  }
}
</style>