# Quyền riêng tư dữ liệu cho cuộc họp AI

## Giới thiệu

InterMind là một nền tảng cho các cuộc họp video đa ngôn ngữ với tính năng phiên dịch trực tiếp được hỗ trợ bởi AI. Chúng tôi được xây dựng dành cho các chuyên gia — nơi mà không chỉ thông điệp quan trọng, mà tính riêng tư của thông điệp đó cũng vậy.

Để mang lại trải nghiệm liền mạch, InterMind tích hợp các dịch vụ bên thứ ba cho video, âm thanh, lưu trữ đám mây, phiên dịch thời gian thực và phân tích. Những nhà cung cấp bên thứ ba này giúp chúng tôi đảm bảo hiệu suất và khả năng mở rộng — nhưng họ cũng tạo ra một lớp mà chúng tôi không thể kiểm soát trực tiếp.

Chúng tôi tin vào **tính minh bạch hơn là lời hứa**. Chúng tôi chỉ có thể đảm bảo quyền riêng tư và bảo mật cho các thành phần dưới sự kiểm soát trực tiếp của chúng tôi — phần mềm, logic giao diện và cách chúng tôi định tuyến dữ liệu. Đối với mọi thứ khác, chúng tôi cung cấp cho bạn **quyền lựa chọn**.

Đây là lý do tại sao chúng tôi thiết kế InterMind với **tính bảo mật dựa trên khu vực**: bạn chọn nơi dữ liệu của mình được xử lý, khung pháp lý nào điều chỉnh nó, và mô hình AI nào được sử dụng — dựa trên vùng riêng tư mà bạn đã chọn.

> **Vùng riêng tư là gì?**  
> _Một khu vực có thể cấu hình (EU, US, Châu Á) điều chỉnh nơi dữ liệu của bạn được xử lý và dưới khung pháp lý nào._

## Nguyên tắc bảo mật cốt lõi

### 1. **Mô hình phân chia trách nhiệm**

- InterMind **không sở hữu hoặc vận hành** cơ sở hạ tầng đám mây cơ bản hoặc các LLM (mô hình ngôn ngữ lớn).
- Chúng tôi không lưu trữ các tệp phương tiện của bạn, cũng không trực tiếp xử lý giọng nói của bạn để huấn luyện mô hình.
- Chúng tôi **có quyền kiểm soát** phần mềm phía khách hàng, quy tắc định tuyến và logic tuân thủ — bao gồm khu vực mà dữ liệu của bạn chảy qua, mô hình nào được sử dụng và trong những điều kiện nào.

### 2. **Minh bạch kiến trúc**

- Bạn có thể thấy rõ ràng khu vực nào đang hoạt động cho phiên của mình và luật nào được áp dụng (ví dụ: GDPR ở châu Âu, CCPA ở Mỹ, PDPL ở UAE).
- Mỗi phiên chạy trong **chế độ tuân thủ** được chỉ định, và cấu hình này có thể nhìn thấy và kiểm tra được.

### 3. **Bảo mật theo mặc định**

- InterMind **không bao giờ** lưu trữ hoặc tái sử dụng nội dung của bạn để huấn luyện, lập hồ sơ hoặc phân tích thương mại.
- Chúng tôi không giữ lại bản ghi hoặc phương tiện trừ khi bạn yêu cầu rõ ràng.
- Nếu bạn tắt tính năng thông dịch, **không có dữ liệu người dùng nào rời khỏi thiết bị của bạn**.

## Bảo mật theo vùng: Cách thức hoạt động

Khi bắt đầu mỗi phiên làm việc, hoặc như một phần trong cài đặt tài khoản tổ chức của bạn, bạn có thể chọn vùng bảo mật ưu tiên:

| Vùng          | Luật áp dụng                                                                                  | Cơ sở hạ tầng                  | Nhà cung cấp LLM           |
| ------------- | --------------------------------------------------------------------------------------------- | ------------------------------ | -------------------------- |
| Châu Âu       | [GDPR](https://gdpr.eu)                                                                       | Chỉ trung tâm dữ liệu EU       | Lưu trữ tại EU hoặc tuân thủ EU |
| Hoa Kỳ        | [CCPA](https://oag.ca.gov/privacy/ccpa)                                                       | AWS / GCP / Azure (US)         | OpenAI US / Anthropic US   |
| UAE / MENA    | [PDPL](https://www.signzy.com/data-privacy-laws-in-the-uae-2025-everything-you-need-to-know/) | Đám mây UAE hoặc Bahrain       | LLM khu vực hoặc tuân thủ  |
| Châu Á / Trung Quốc | Luật bảo mật địa phương của Trung Quốc                                                  | Alibaba, Huawei, Tencent Cloud | Chỉ LLM có trụ sở tại Trung Quốc |

Lựa chọn này quyết định cách video, âm thanh và nội dung được diễn giải của bạn được xử lý và thông qua thẩm quyền nào.

Bạn có thể:

- **Đặt vùng mặc định** cho tổ chức của bạn
- **Ghi đè vùng cho mỗi phiên**
- **Đưa một số vùng nhất định vào danh sách đen** hoàn toàn

## Những gì InterMind đảm bảo

Chúng tôi triển khai các biện pháp bảo vệ kỹ thuật và pháp lý nghiêm ngặt trong phạm vi kiểm soát của mình:

### 1. **Ưu tiên thực thi cục bộ**

Các chức năng phía máy khách như thu âm giọng nói và hiển thị giao diện người dùng được xử lý cục bộ bất cứ khi nào có thể.

### 2. **Giảm thiểu dữ liệu**

Chỉ truyền tải lượng dữ liệu tối thiểu cần thiết cho tác vụ hiện tại.

### 3. **Mã hóa đầu cuối**

Tất cả dữ liệu âm thanh/video được truyền qua các kênh được mã hóa. Các yêu cầu phiên dịch được chuyển qua proxy bảo mật, tránh tiếp xúc công khai.

### 4. **Không lưu trữ mặc định**

Chúng tôi không lưu trữ các cuộc họp, bản ghi chép hoặc cuộc trò chuyện của bạn trừ khi bạn chọn tham gia. Tất cả việc lưu trữ đều bị ràng buộc theo khu vực.

## Tuân thủ pháp lý & quy định

InterMind hỗ trợ tương thích đầy đủ với:

- **GDPR** — Quyền truy cập, xóa, xuất dữ liệu và hạn chế xử lý. Không có hồ sơ AI.
- **CCPA** — Không bán dữ liệu cá nhân, tùy chọn từ chối và thực hành thu thập minh bạch.
- **UAE PDPL** — Lưu trữ cục bộ nếu được yêu cầu, kiểm soát truy cập nghiêm ngặt, không chuyển giao quốc tế mà không có sự đồng ý.
- **China DSL/PIPL** — Chỉ xử lý trong khu vực, không định tuyến nước ngoài nếu chọn Trung Quốc.

## Những Gì Chúng Tôi Có Thể và Không Thể Đảm Bảo

Chúng tôi cam kết minh bạch hoàn toàn, không chỉ là ngôn ngữ pháp lý.

> InterMind không thể đảm bảo cách thức các nhà cung cấp LLM hoặc hạ tầng bên thứ ba xử lý dữ liệu sau khi dữ liệu rời khỏi tầm kiểm soát của chúng tôi.

### Chúng tôi KHÔNG đảm bảo:

- Rằng OpenAI, Anthropic, hoặc các nhà cung cấp LLM khác sẽ không ghi lại hoặc lưu giữ dữ liệu đầu vào.
- Rằng các máy chủ đám mây không có quyền truy cập vào phương tiện được truyền qua hệ thống của họ (trừ khi bạn đang sử dụng enclave bảo mật hoặc triển khai doanh nghiệp).
- Rằng nội dung được chuyển đến mô hình bên thứ ba nằm ngoài phạm vi đào tạo của họ (trừ khi có hợp đồng riêng).

### Chúng tôi ĐẢM BẢO:

- Bạn luôn biết **ở đâu và như thế nào** dữ liệu của bạn đang được xử lý.
- Bạn có các công cụ để **kiểm soát rủi ro** bằng cách chọn khu vực và chế độ tuân thủ của mình.
- InterMind **không bao giờ** lưu trữ hoặc khai thác nội dung của bạn — ngay cả tạm thời — mà không có sự đồng ý của bạn.

## Chế Độ Tin Cậy & Mức Độ Riêng Tư

Bạn có thể tùy chỉnh phiên làm việc để phù hợp với nhu cầu bảo mật của mình:

| Chế Độ Tin Cậy   | Diễn Giải      | Chuyển Giao Liên Vùng | Lưu Trữ            | Phù Hợp Nhất Cho                    |
| ---------------- | -------------- | --------------------- | ------------------ | ----------------------------------- |
| 🔒 Chỉ Cục Bộ    | ❌             | ❌                    | ❌                 | Pháp lý, chính phủ, đánh giá nội bộ |
| 🔐 Khóa Theo Vùng | ✅             | ✅ (chỉ trong khu vực) | ❌ hoặc chỉ trong phiên | Y tế, tài chính, nhân sự             |
| 🌐 Linh Hoạt Toàn Cầu | ✅             | ✅ (đa vùng)     | ✅                 | Hỗ trợ, bán hàng, nhóm đa quốc gia |

## Những gì bạn nhận được ngay từ đầu

- Sử dụng LLM theo từng khu vực cụ thể, với tính minh bạch theo thời gian thực.
- Không đào tạo hoặc phân tích nội dung của bạn — không bao giờ.
- Không truyền tải dữ liệu nếu tính năng diễn giải bị tắt.
- Lưu trữ dữ liệu tùy chọn, luôn được giới hạn theo khu vực.
- Công cụ kiểm toán và xuất dữ liệu đầy đủ cho khách hàng doanh nghiệp.

## Kết luận

> Quyền riêng tư không phải là lời hứa — mà là một kiến trúc.

InterMind không che giấu sau những cam kết mơ hồ. Thay vào đó, chúng tôi mang đến cho bạn **sự lựa chọn**, **tính minh bạch**, và **quyền kiểm soát**.

- Bạn chọn khu vực của mình.
- Bạn chọn mức độ diễn giải của mình.
- Bạn quyết định mức độ rủi ro mà bạn sẵn sàng chấp nhận — và chúng tôi giúp bạn tuân thủ ở mọi cấp độ.

**InterMind — được xây dựng cho các chuyên gia, được hỗ trợ bởi sự tuân thủ, được quản lý bởi niềm tin.**