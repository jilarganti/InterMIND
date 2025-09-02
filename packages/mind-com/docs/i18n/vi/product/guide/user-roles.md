# Vai trò người dùng

InterMIND phân định bốn vai trò người dùng riêng biệt, mỗi vai trò được thiết kế tỉ mỉ để nâng cao trải nghiệm cuộc họp an toàn, hợp tác và linh hoạt. Vai trò Host được trao quyền hạn cao nhất, trong khi các vai trò khác cung cấp các mức độ tương tác khác nhau.

## Chủ trì

Chủ trì chịu trách nhiệm khởi tạo cuộc họp và sở hữu các quyền quản trị toàn diện.

**Khả năng chính:**

- Bắt đầu và kết thúc cuộc họp
- Tắt tiếng bất kỳ người tham gia nào
- Thăng cấp hoặc hạ cấp người điều hành
- Bắt đầu và dừng ghi âm
  - Điều này bao gồm mọi bản ghi âm được khởi tạo bởi Người điều hành
- Loại bỏ bất kỳ người tham gia nào khỏi cuộc gọi
- Chấp nhận hoặc từ chối khách
- Truy cập lịch sử cuộc họp
- Sử dụng bất kỳ tính năng AI nào
- Điều chỉnh cài đặt cá nhân, bố cục, làm mờ và các tùy chọn xem

## Người điều hành

Người điều hành được Chủ phòng chỉ định để hỗ trợ quản lý phiên họp một cách hiệu quả.

**Khả năng chính:**

- Tắt tiếng bất kỳ người tham gia nào
- Bắt đầu và dừng ghi âm
  - Bao gồm bất kỳ bản ghi âm nào được khởi tạo bởi Chủ phòng
- Chấp nhận hoặc từ chối khách
- Loại bỏ bất kỳ người tham gia nào khỏi cuộc gọi, ngoại trừ Chủ phòng
- Sử dụng Trình dịch giọng nói trực tuyến và thay đổi ngôn ngữ (cho âm thanh của chính họ)
- Sử dụng Trợ lý AI (cho chế độ xem của chính họ)
- Tham gia trò chuyện, giơ tay hoặc hạ tay
- Truy cập bản ghi và lịch sử cuộc họp
- Thăng cấp hoặc hạ cấp người điều hành khác

## Người tham gia (Người dùng được ủy quyền)

Người tham gia được ủy quyền là những người dùng đã đăng nhập tham gia cuộc họp mà không có đặc quyền đặc biệt.

**Khả năng chính:**

- Tắt hoặc bật micrô của chính họ
- Bật hoặc tắt camera của chính họ
- Chia sẻ màn hình của họ (trình duyệt desktop)
- Sử dụng Trợ lý AI (cho chế độ xem của riêng họ)
- Sử dụng Trình dịch giọng nói trực tuyến và thay đổi ngôn ngữ (cho âm thanh của riêng họ)
- Chỉnh sửa bố cục và cài đặt cá nhân
- Truy cập chat, giơ tay, bản ghi chép và lịch sử cuộc họp

## Khách (Người dùng ẩn danh)

Khách là những người dùng tham gia cuộc họp mà không cần đăng nhập.

**Khả năng chính:**

- Sử dụng microphone và camera của riêng họ
- Chia sẻ màn hình (trình duyệt desktop)
- Sử dụng Trình dịch giọng nói trực tuyến và thay đổi ngôn ngữ (cho âm thanh của riêng họ)
- Sử dụng các tùy chọn bố cục và xem (chỉ cá nhân)
- Tham gia chat và giơ tay

> [!WARNING]
> Khách không thể quản lý những người tham gia khác.

## Bảng tóm tắt quyền hạn vai trò

| Tính năng                      | Chủ trì | Điều hành | Người tham gia | Khách |
| ------------------------------ | ------- | --------- | -------------- | ----- |
| Khởi tạo cuộc họp             | ✅      | ❌        | ❌             | ❌    |
| Tắt tiếng bất kỳ người tham gia| ✅      | ✅        | ❌             | ❌    |
| Bật tiếng bất kỳ người tham gia| ❌      | ❌        | ❌             | ❌    |
| Tắt/Bật micro của mình         | ✅      | ✅        | ✅             | ✅    |
| Bật/Tắt camera của mình        | ✅      | ✅        | ✅             | ✅    |
| Bắt đầu/Dừng ghi âm            | ✅      | ✅        | ❌             | ❌    |
| Chia sẻ màn hình (Desktop)     | ✅      | ✅        | ✅             | ✅    |
| Sử dụng trợ lý AI             | ✅      | ✅        | ✅             | ❌    |
| Sử dụng dịch thuật trực tuyến  | ✅      | ✅        | ✅             | ✅    |
| Thay đổi ngôn ngữ dịch thuật   | ✅      | ✅        | ✅             | ✅    |
| Giơ / Hạ tay                   | ✅/✅   | ✅/✅     | ✅/❌          | ✅/❌ |
| Thay đổi bố cục / Cài đặt      | ✅      | ✅        | ✅             | ✅    |
| Bật/Tắt làm mờ nền             | ✅      | ✅        | ✅             | ✅    |
| Chấp nhận/Từ chối khách        | ✅      | ✅        | ❌             | ❌    |
| Truy cập lịch sử cuộc họp      | ✅      | ✅        | ✅             | ❌    |
| Loại bỏ người tham gia         | ✅      | ✅        | ❌             | ❌    |
| Thăng/Giáng chức điều hành     | ✅      | ✅        | ❌             | ❌    |