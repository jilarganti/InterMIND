---
layout: BlogPost
title: "Kiến trúc website Mind.com"
description: "Nghiên cứu kỹ thuật về giải pháp JAMstack hiện đại với tích hợp AI"
date: 2025-08-15
author: "[Jilarganti](https://github.com/jilarganti)"
---

# Kiến trúc website Mind.com: Nghiên cứu kỹ thuật về giải pháp JAMstack hiện đại với tích hợp AI

<img src="/blog/iStock-681469612.jpg" alt="dirham UAE" width="500" align="right" style="padding: 1.5rem" class="dark-only">
<img src="/blog/iStock-681469612.jpg" alt="Emirates NBD" width="500" align="right" style="padding: 1.5rem" class="light-only">

Website [mind.com](https://mind.com) đại diện cho một ví dụ xuất sắc về kiến trúc hiện đại cho các trang web marketing, kết hợp các thực tiễn tốt nhất của phát triển JAMstack với các công nghệ AI tiên tiến. Trong phân tích kỹ thuật này, chúng tôi sẽ xem xét chi tiết các quyết định kiến trúc làm nền tảng cho dự án này, là một phần của monorepo InterMIND nhưng hoạt động như một nền tảng tĩnh độc lập với khả năng động.

> **Các đổi mới kiến trúc chính** bao gồm một số giải pháp kỹ thuật phân biệt dự án này với các trang web marketing thông thường.

## Hệ thống dịch thuật tự động được hỗ trợ bởi AI

Hệ thống tự động dịch tất cả nội dung trang web sang hơn 20 ngôn ngữ mà không cần sử dụng các tệp i18n và từ điển truyền thống. Khi chạy lệnh `pnpm translate`, script sẽ phân tích các tệp trong thư mục `docs/en/` và tạo các phiên bản đã dịch trong `docs/i18n/{lang}/`. Hệ thống hỗ trợ mọi định dạng văn bản — Markdown, Vue components, TypeScript, JavaScript. Hệ thống sử dụng hai mô hình AI (OpenAI GPT-4 và Anthropic Claude) với khả năng tự động chuyển đổi khi có lỗi. Mỗi phiên bản ngôn ngữ được tạo thành một trang tĩnh riêng biệt, đảm bảo việc lập chỉ mục hoàn toàn bởi công cụ tìm kiếm mà không phụ thuộc vào JavaScript.

## Tìm kiếm AI Chat với nội dung được lập chỉ mục

AI chat hoạt động với nội dung trang web được lập chỉ mục trước, loại bỏ việc tạo ra thông tin không chính xác. Trong quá trình xây dựng (`pnpm build`), tất cả nội dung được chuyển đổi thành vector embeddings và tải lên Upstash Vector — một cơ sở dữ liệu vector serverless. Tìm kiếm sử dụng khớp ngữ nghĩa thông qua cosine similarity để tìm các đoạn tài liệu liên quan. Kiến trúc RAG cho phép mô hình AI (Claude 3.5 Haiku hoặc GPT-4) tạo ra các phản hồi dựa hoàn toàn trên các đoạn được tìm thấy từ cơ sở tri thức. Chat tự động phát hiện ngôn ngữ truy vấn và phản hồi bằng cùng ngôn ngữ đó, hỗ trợ hơn 100 ngôn ngữ mà không cần cấu hình thủ công.

## Kiến trúc cơ bản: VitePress + Vue.js

Mind.com được xây dựng trên **VitePress** — một trình tạo trang web tĩnh hiện đại đại diện cho bước tiến hóa trong phát triển kiến trúc JAMstack. VitePress triển khai **mô hình hybrid SSR/SSG** độc đáo, đảm bảo sự cân bằng tối ưu giữa hiệu suất và chức năng.

### Ưu điểm kiến trúc chính

**Mô hình rendering hybrid** của VitePress cung cấp tải nội dung hai giai đoạn: tải ban đầu diễn ra dưới dạng HTML tĩnh để hiển thị nhanh và SEO tối ưu, sau đó trang web chuyển đổi thành Vue SPA với điều hướng phía client và preloading trang. Kiến trúc này đạt được **điểm số Core Web Vitals gần như hoàn hảo**, điều này cực kỳ quan trọng đối với một trang web marketing.

**Tích hợp Vue 3 và Composition API** cung cấp cho các nhà phát triển mind.com những công cụ mạnh mẽ để tạo các component động trong kiến trúc tĩnh. Hỗ trợ TypeScript hạng nhất đảm bảo type safety ở tất cả các cấp độ ứng dụng, từ component đến tích hợp API.

**Phát triển được hỗ trợ bởi Vite** đảm bảo khởi động dev server tức thì với các cập nhật dưới 100ms thông qua Hot Module Replacement, cực kỳ quan trọng cho các team làm việc với lượng lớn nội dung.

### Tối ưu hóa hiệu suất

Mind.com sử dụng nhiều chiến lược tối ưu hóa hiệu suất:

**Smart hydration** đảm bảo chỉ tải các phần trang động, trong khi nội dung tĩnh không bị ảnh hưởng bởi quá trình hydration. Điều này giảm đáng kể thời gian để trang có thể tương tác.

**Automatic code splitting** tạo ra các chunk riêng biệt cho mỗi trang với preloading thông minh các liên kết trong viewport của người dùng, đảm bảo điều hướng tức thì.

**Tối ưu hóa tài nguyên** bao gồm tự động tạo static assets được hash với optimal caching headers, hỗ trợ các định dạng hình ảnh hiện đại WebP/AVIF với lazy loading.

## Tích hợp AI: Cơ sở dữ liệu vector và tìm kiếm ngữ nghĩa

Một trong những tính năng sáng tạo nhất của mind.com là việc tích hợp khả năng AI vào kiến trúc tĩnh. Nền tảng sử dụng **Upstash Vector** làm nền tảng cho tìm kiếm ngữ nghĩa và chat AI.

### Kiến trúc tìm kiếm vector

**Upstash Vector** hoạt động như một cơ sở dữ liệu vector serverless sử dụng thuật toán DiskANN để tìm kiếm láng giềng gần nhất hiệu quả giữa các embedding lên đến 1536 chiều. Tích hợp với Vercel AI SDK cung cấp chatbot RAG (Retrieval-Augmented Generation) với độ trễ tối thiểu.

**Chiến lược embedding** bao gồm việc chia tài liệu thông minh thành các đoạn theo dấu chấm hoặc đoạn văn trước khi vector hóa, sử dụng các mô hình hiện đại như `text-embedding-3-small` để tạo vector 1536 chiều, và chèn dữ liệu hàng loạt theo batch 1000 bản ghi để đạt hiệu suất tối ưu.

### Kiến trúc AI kép

Mind.com triển khai chiến lược tiên tiến sử dụng **hai nhà cung cấp AI**: OpenAI GPT-4 và Anthropic Claude. Kiến trúc này mang lại nhiều lợi thế quan trọng.

**Định tuyến yêu cầu thông minh** cho phép sử dụng GPT-4 cho các tác vụ yêu cầu khả năng đa phương thức và xử lý thời gian thực, trong khi Claude được áp dụng cho lý luận phức tạp và các tác vụ đa ngôn ngữ, nơi nó thể hiện hiệu suất 85%+ so với tiếng Anh trong 14+ ngôn ngữ.

**Chiến lược failover** bao gồm chuyển đổi dựa trên quota (chuyển sang Anthropic khi quota OpenAI cạn kiệt), định tuyến theo mô hình cụ thể, và lựa chọn nhà cung cấp động để tối ưu hóa chi phí.

### Phát hiện ngôn ngữ tự động

Hệ thống tự động phát hiện ngôn ngữ của các yêu cầu đến mà không cần chỉ định thủ công, hỗ trợ 100+ ngôn ngữ. Claude thể hiện khả năng đa ngôn ngữ vượt trội, hỗ trợ chuyển đổi ngôn ngữ liền mạch trong các cuộc hội thoại và hiểu biết bối cảnh văn hóa.

## Kiến trúc Serverless trên Vercel

Mind.com sử dụng **Vercel Serverless Functions** làm nền tảng cho API backend, triển khai các mẫu phát triển serverless hiện đại.

### TypeScript và Fluid Compute

**Vercel Functions** trong năm 2025 cung cấp mô hình đồng thời được cải thiện thông qua Fluid Compute, giúp giảm cold start bằng cách tái sử dụng các instance function và cho phép thực thi đồng thời trong một instance duy nhất.

**Tích hợp TypeScript** bao gồm gói @vercel/sdk mới với hỗ trợ TypeScript đầy đủ và Zod schemas để xác thực, phản hồi lỗi có cấu trúc với thông tin kiểu chi tiết, và các đối tượng NextResponse mở rộng để xử lý tham số trong môi trường serverless.

### Middleware bảo vệ tên miền

**Triển khai bảo vệ tên miền** bao gồm cấu hình CORS thông qua Serverless Framework với `cors: true` để quản lý header CORS tự động, Custom Authorizers cho API Gateway với khả năng cache xác thực, và engine middleware Middy cho các Lambda functions bao gồm CORS, xác thực và xử lý lỗi.

## OAuth và Xác thực Người dùng

Hệ thống xác thực của Mind.com tích hợp với **dịch vụ OAuth bên ngoài** được triển khai ở phía sản phẩm InterMIND. Quyết định kiến trúc này đảm bảo sự tách biệt các mối quan tâm giữa nền tảng marketing và sản phẩm chính.

### Tích hợp OAuth bên ngoài

**Component AuthButton** xử lý toàn bộ luồng OAuth, hướng dẫn người dùng đến dịch vụ xác thực bên ngoài với các URL dựa trên môi trường (`dev.inter.mind.com/auth` so với `inter.mind.com/auth`).

**Cấu hình Client ID** sử dụng định danh an toàn công khai `oauthClientId = "vca"`, cho phép tích hợp frontend chính xác với hệ thống xác thực bên ngoài.

**Phương pháp không trạng thái** ở phía trang web có nghĩa là mind.com không lưu trữ phiên người dùng cục bộ, dựa vào hệ thống bên ngoài để quản lý trạng thái xác thực người dùng.

## Hỗ trợ đa ngôn ngữ: Hơn 20 ngôn ngữ

Mind.com hỗ trợ hơn 20 ngôn ngữ với khả năng hỗ trợ đầy đủ hướng văn bản RTL (từ phải sang trái), thể hiện cách tiếp cận nghiêm túc đối với việc mở rộng quốc tế.

### Hỗ trợ RTL và LTR

**Thuộc tính logic CSS** được sử dụng thay vì `left/right` truyền thống để quản lý hướng văn bản tự động. Sass mixins cung cấp tạo style RTL/LTR tự động, và các ký tự Unicode đặc biệt (LRE, PDF) xử lý đúng cách dấu ngoặc và dấu nháy trong ngữ cảnh RTL.

### Hệ thống dịch thuật AI cách mạng

**Script dịch thuật** đại diện cho một **đổi mới công nghệ quan trọng** thay đổi căn bản cách tiếp cận quốc tế hóa trang web. Không giống như các hệ thống i18n truyền thống yêu cầu tạo và bảo trì liên tục từ điển dịch thuật, hệ thống này **hoàn toàn loại bỏ nhu cầu quản lý dịch thuật thủ công**. Bằng cách phân tích nội dung nguồn trong thư mục `docs/en/`, hệ thống tự động tạo bản dịch trong `docs/i18n/{lang}/`, hỗ trợ bất kỳ số lượng ngôn ngữ nào được chỉ định trong cấu hình. Việc thực thi được kích hoạt bằng lệnh đơn giản `pnpm translate` từ thư mục package.

**Hỗ trợ định dạng toàn cầu** là một lợi thế quan trọng: hệ thống xử lý Markdown, Vue components, TypeScript, JavaScript và bất kỳ định dạng văn bản nào khác mà không cần thích ứng đặc biệt. Điều này có nghĩa là **tất cả nội dung trang web — từ tài liệu đến UI components — được dịch tự động**, bảo toàn cấu trúc, định dạng và chức năng.

**Tối ưu hóa SEO đẳng cấp thế giới** được đạt được bằng cách tạo các trang tĩnh hoàn chỉnh cho mỗi ngôn ngữ. Không giống như các giải pháp i18n phía client tải nội dung động, mỗi phiên bản ngôn ngữ tồn tại như một trang tĩnh riêng biệt, đảm bảo **lập chỉ mục công cụ tìm kiếm hoàn hảo** và tải nội dung tức thì. Bot tìm kiếm thấy HTML được dịch đầy đủ mà không phụ thuộc JavaScript.

**Kiến trúc AI kép** sử dụng OpenAI GPT-4 và Anthropic Claude với chuyển đổi model tự động khi có lỗi. Hệ thống bao gồm dịch thuật tăng dần (chỉ các file đã thay đổi), đồng bộ hóa cấu trúc file tự động, và kiểm tra biên dịch tùy chọn của các file đã dịch thông qua `checkBuildErrors: true`.

**Kỹ thuật prompt thông minh** đảm bảo bảo toàn định dạng markdown, tính bất biến của các khối code, duy trì tất cả liên kết và tham chiếu, và dịch chỉ văn bản ngôn ngữ tự nhiên. Hệ thống tự động chia các file lớn thành các phần để xử lý tối ưu bởi các model AI.

**Xử lý lỗi và tự động sửa** bao gồm chuyển đổi tự động sang model tiếp theo khi có lỗi dịch thuật, lưu các file dịch một phần với phần mở rộng `.log`, dịch lại các file có vấn đề sử dụng tất cả model có sẵn, và báo cáo cuối cùng về các file không thể sửa được.

## Tích hợp CRM với Pipedrive

Tích hợp CRM Pipedrive minh họa cách các trang web marketing hiện đại quản lý leads hiệu quả trong kiến trúc serverless.

### Tự động hóa quản lý leads

**Kiến trúc hướng sự kiện** sử dụng triggers S3/EventBridge để xử lý leads, các hàm serverless để chuẩn hóa dữ liệu leads, và đồng bộ hóa giữa Pipedrive và các nền tảng tự động hóa marketing.

**Pipeline phân tích** được triển khai thông qua Step Functions để điều phối pipeline dữ liệu, các hàm Lambda cho các hoạt động ETL, và lưu trữ tối ưu hóa ở định dạng Parquet để lưu trữ dữ liệu dài hạn hiệu quả.

## Quản lý trạng thái với Pinia

Mind.com sử dụng **Pinia** như một giải pháp hiện đại cho quản lý trạng thái ứng dụng Vue 3, được tối ưu hóa cho các trang web tĩnh.

### Các mẫu tích hợp Pinia

**Định nghĩa store** sử dụng phương pháp Composition API với các tham chiếu reactive cho theme và truy vấn tìm kiếm, các giá trị computed cho trạng thái dẫn xuất, và các actions cho việc thay đổi trạng thái.

**Lưu trữ trạng thái** được triển khai thông qua pinia-plugin-persistedstate với hỗ trợ localStorage và sessionStorage, lưu có chọn lọc chỉ những phần trạng thái cần thiết, và xử lý nhẹ nhàng các API trình duyệt không khả dụng trong môi trường SSR.

### Tích hợp theo dõi UTM

**Analytics store** tự động thu thập các tham số UTM từ URL, lưu chúng trong sessionStorage để theo dõi phiên, và tích hợp với Google Analytics để theo dõi nguồn gốc.

## Tích hợp phân tích

Mind.com sử dụng phương pháp hiện đại để phân tích thông qua **Google Tag Manager** và **Google Analytics 4**.

### Tích hợp GTM

**Kiểm thử A/B phía máy chủ** được triển khai thông qua các hàm edge để duy trì hiệu suất, tránh các công cụ kiểm thử A/B phía client truyền thống có thể làm giảm điểm Lighthouse xuống 10 điểm.

**Sự kiện dataLayer tùy chỉnh** để theo dõi thí nghiệm sử dụng cấu trúc `{'experimentId': 'id', 'variationId': 'id'}`, đảm bảo theo dõi biến thể kiểm thử chính xác mà không ảnh hưởng đến hiệu suất.

## Bảo mật và khả năng mở rộng

### Phương pháp bảo mật đa lớp

**Điều tiết API Gateway** cung cấp giới hạn tốc độ ở cấp độ phương thức, AWS WAF với các quy tắc dựa trên tốc độ để bảo vệ khỏi DDoS, và các chính sách CORS với danh sách trắng tên miền cụ thể thay vì cấu hình ký tự đại diện.

**Quản lý bí mật** được triển khai thông qua các biến môi trường và kho lưu trữ tham số cho dữ liệu nhạy cảm, xác thực đầu vào ở cấp độ API Gateway trước khi thực thi chức năng, và định dạng phản hồi có cấu trúc với xử lý lỗi phù hợp.

### Các cân nhắc về quyền riêng tư dữ liệu

**Kiến trúc ưu tiên quyền riêng tư** bao gồm mã hóa đầu cuối đến đầu cuối mà không lưu trữ dữ liệu phía máy chủ, cookie xác thực an toàn với thời hạn phù hợp, ghi nhật ký toàn diện cho các yêu cầu tuân thủ, và giảm thiểu dữ liệu thông qua JWT token chỉ chứa thông tin người dùng thiết yếu.

## Ưu điểm kiến trúc Mind.com

### Hiệu suất

Kiến trúc của Mind.com cung cấp **cải thiện hiệu suất 35-60%** so với các phương pháp truyền thống. Các trang JAMstack tải nhanh hơn 35%, với 50% đạt được First Contentful Paint trong vòng dưới 1 giây.

**Xử lý lưu lượng truy cập** được cải thiện gấp 10 lần so với kiến trúc render phía máy chủ truyền thống với chi phí thấp hơn đáng kể nhờ vào phân phối CDN và mở rộng serverless.

### Trải nghiệm nhà phát triển

**Monorepo với pnpm** cung cấp tốc độ cài đặt vượt trội: npm (~45s), yarn (~35s), pnpm (~22s), với tổng cộng 85MB không gian đĩa chia sẻ thay vì 130MB cho mỗi dự án với npm.

**Tối ưu hóa CI/CD** bao gồm tạo động các công việc song song cho từng gói bị ảnh hưởng, xây dựng tăng dần, và kích hoạt triển khai tự động với đồng bộ hóa nội dung.

## Lợi thế cạnh tranh

Mind.com chứng minh cách kiến trúc JAMstack hiện đại với tích hợp AI tạo ra những lợi thế cạnh tranh đáng kể:

**Giảm bề mặt tấn công** với không có máy chủ runtime hoặc lỗ hổng cơ sở dữ liệu, các tệp tĩnh loại bỏ SQL injection và các vector tấn công phía máy chủ, phân phối dựa trên CDN cung cấp bảo vệ DDoS và dự phòng toàn cầu.

**Hiệu quả chi phí** đạt được thông qua hosting CDN, rẻ hơn đáng kể so với hosting máy chủ truyền thống, giảm chi phí vận hành mà không cần plugin và quản lý máy chủ, tự động mở rộng quy mô thông qua phân phối CDN, và việc sử dụng serverless function giảm overhead bảo trì backend.

## Kết luận

Kiến trúc của Mind.com đại diện cho một triển khai mẫu mực các nguyên tắc phát triển web hiện đại, kết hợp thành công hiệu suất tĩnh với khả năng AI động. Sự kết hợp của VitePress + Vue.js + Serverless Functions + tích hợp AI tạo ra một nền tảng mạnh mẽ, có khả năng mở rộng, mang lại trải nghiệm người dùng vượt trội với chi phí vận hành tối thiểu.

Cách tiếp cận kiến trúc trang web marketing này chứng minh sự trưởng thành của hệ sinh thái JAMstack vào năm 2025 và chỉ ra hướng phát triển cho các giải pháp cấp doanh nghiệp. Việc tích hợp các công nghệ AI tiên tiến vào kiến trúc tĩnh mở ra những khả năng mới cho cá nhân hóa và tự động hóa trải nghiệm khách hàng, đồng thời duy trì tất cả các ưu điểm về hiệu suất và bảo mật của phương pháp JAMstack.

Mind.com đóng vai trò như một ví dụ về cách các giải pháp công nghệ hiện đại có thể tạo ra hiệu ứng hiệp đồng, vượt quá tổng của các thành phần riêng lẻ và thiết lập các tiêu chuẩn mới cho ngành công nghệ marketing.