# ĐỀ XUẤT CẤU TRÚC VÀ CHỨC NĂNG WEBSITE TỰ HỌC TIN HỌC 12 - SGK ICT

---

## I. MỤC TIÊU VÀ ĐỐI TƯỢNG BẢO TRÌ NỘI DUNG WEBPAGE

* **Mục tiêu:** Xây dựng hệ thống portal tự học trực tuyến chuẩn hóa, chuyển đổi toàn bộ 28 bài học thuộc Kế hoạch bài dạy (KHBD) SGK Tin học 12 ICT (Kết nối tri thức) thành kho tài nguyên số tương tác, giúp học sinh THPT tự học, ôn luyện trắc nghiệm, thực hành coding HTML/CSS và hướng nghiệp hiệu quả.
* **Đối tượng người dùng:** Học sinh lớp 12 chuyên/không chuyên, giáo viên Tin học THPT và học viên tự học CNTT căn bản.

---

## II. KIẾN TRÚC THÔNG TIN & CẤU TRÚC SƠ ĐỒ WEBSITE (SITEMAP)

Website được tổ chức phân cấp hình cây chuẩn hóa theo 7 Chủ đề học tập SGK Tin học 12 ICT:

```
[TRANG CHỦ - PORTAL TIN HỌC 12 ICT]
 │
 ├── 1. CHỦ ĐỀ 1: MÁY TÍNH VÀ XÃ HỘI TRI THỨC (AI)
 │    ├── Bài 1: Làm quen với Trí tuệ nhân tạo
 │    └── Bài 2: Trí tuệ nhân tạo trong khoa học và đời sống
 │
 ├── 2. CHỦ ĐỀ 2: MẠNG MÁY TÍNH VÀ INTERNET
 │    ├── Bài 3: Một số thiết bị mạng thông dụng
 │    ├── Bài 4: Giao thức mạng (TCP/IP, IP, DNS)
 │    └── Bài 5: Thực hành chia sẻ tài nguyên trên mạng
 │
 ├── 3. CHỦ ĐỀ 3: ĐẠO ĐỨC, PHÁP LUẬT VÀ VĂN HOÁ TRONG MÔI TRƯỜNG SỐ
 │    └── Bài 6: Giao tiếp và ứng xử trong không gian mạng
 │
 ├── 4. CHỦ ĐỀ 4: THIẾT KẾ TRANG WEB VỚI HTML & CSS (TRỌNG TÂM LẬP TRÌNH WEB)
 │    ├── Bài 7: HTML và cấu trúc trang web
 │    ├── Bài 8: Định dạng văn bản bằng HTML
 │    ├── Bài 9: Tạo danh sách và bảng trong HTML
 │    ├── Bài 10: Tạo siêu liên kết trong HTML
 │    ├── Bài 11: Chèn đa phương tiện & Khung nội tuyến (iframe)
 │    ├── Bài 12: Tạo biểu mẫu (Form) trong HTML
 │    ├── Bài 13: Khái niệm & Vai trò của CSS
 │    ├── Bài 14: Định dạng văn bản bằng CSS
 │    ├── Bài 15: Tạo màu chữ & màu nền bằng CSS
 │    ├── Bài 16: Định dạng khung (CSS Box Model)
 │    ├── Bài 17: Các mức ưu tiên bộ chọn (CSS Specificity)
 │    └── Bài 18: Thực hành tổng hợp thiết kế trang web tĩnh
 │
 ├── 5. CHỦ ĐỀ 5: HƯỚNG NGHIỆP VỚI TIN HỌC
 │    ├── Bài 19: Dịch vụ sửa chữa và bảo trì máy tính
 │    ├── Bài 20: Nhóm nghề quản trị trong ngành CNTT
 │    └── Bài 21: Hội thảo hướng nghiệp CNTT
 │
 ├── 6. CHỦ ĐỀ 6: THỰC HÀNH KẾT NỐI THIẾT BỊ SỐ
 │    └── Bài 22: Thực hành kết nối các thiết bị số
 │
 ├── 7. CHỦ ĐỀ 7: XÂY DỰNG WEBSITE VỚI GOOGLE SITES (DỰ ÁN THỰC TẾ)
 │    ├── Bài 23: Chuẩn bị xây dựng trang web
 │    ├── Bài 24: Xây dựng phần đầu trang web (Header)
 │    ├── Bài 25: Xây dựng phần thân và chân trang web (Body & Footer)
 │    ├── Bài 26: Liên kết & Thanh điều hướng (Navigation Bar)
 │    ├── Bài 27: Nhúng biểu mẫu trên trang web (Google Forms)
 │    └── Bài 28: Thực hành tổng hợp công bố website
 │
 ├── 8. NGÂN HÀNG CÂU HỎI & ĐỀ THI ÔN LUYỆN
 │    ├── Ôn tập Trắc nghiệm 4 lựa chọn (Tự động chấm điểm)
 │    ├── Ôn tập Trắc nghiệm Đúng / Sai (Đánh giá năng lực)
 │    └── Đề thi thử Giữa kỳ & Cuối kỳ (Có đếm giờ & Đáp án)
 │
 └── 9. KHÔNG GIANG THỰC HÀNH (LAB SANDBOX)
      ├── Code Playground HTML/CSS (Biên dịch trực tiếp trên trình duyệt)
      └── Kho mẫu giao diện (Templates) dự án thực tế
```

---

## III. THIẾT KẾ MÔ-ĐUN CHỨC NĂNG CỦA WEBSITE TỰ HỌC

| STT | Tên mô-đun chức năng | Mô tả chi tiết tính năng & Trải nghiệm học tập |
|---|---|---|
| 1 | **Mô-đun Quản lý Học tập (LMS)** | * Hiển thị lộ trình 28 bài học trực quan kèm thanh tiến độ (Progress bar).<br>* Lưu lịch sử học tập, bài đã đọc, điểm số trắc nghiệm theo tài khoản học sinh. |
| 2 | **Mô-đun Bài giảng Đa phương tiện** | * Nội dung lý thuyết tóm tắt theo 7 mục chuẩn KHBD.<br>* Tích hợp video minh họa bài giảng, sơ đồ tư duy tương tác và tệp đính kèm. |
| 3 | **Mô-đun Lập trình Thực hành (HTML/CSS Playground)** | * Trình biên dịch mã nguồn trực tuyến 2 màn hình (Trái: Nhập code HTML/CSS; Phải: Xem ngay kết quả hiển thị Real-time).<br>* Kiểm tra và báo lỗi cú pháp mã lệnh tự động (VD: báo lỗi quên đóng thẻ). |
| 4 | **Mô-đun Trắc nghiệm & Kiểm tra tự động** | * Chấm điểm tự động trắc nghiệm 4 lựa chọn và Đúng/Sai.<br>* Hiển thị ngay đáp án đúng, giải thích chi tiết trích xuất từ KHBD nguồn.<br>* Thống kê tỷ lệ làm đúng theo từng chủ đề để gợi ý học sinh ôn luyện lại. |
| 5 | **Mô-đun Gamification (Trò chơi học tập)** | * **Ghép nối thuật ngữ:** Kéo thả ghép thuật ngữ tiếng Anh với ý nghĩa (VD: `href` -> `Thuộc tính liên kết`).<br>* **Điền khuyết mã lệnh:** Điền cú pháp HTML/CSS còn thiếu vào ô trống.<br>* **Flashcard thông minh:** Lật thẻ ôn tập từ khóa cốt lõi trước kỳ thi. |
| 6 | **Mô-đun Tư vấn Hướng nghiệp CNTT** | * Ma trận tra cứu kỹ năng, thu nhập và cơ sở đào tạo ngành CNTT.<br>* Trắc nghiệm tính cách chọn nghề CNTT phù hợp (Sửa chữa/Bảo trì hay Quản trị mạng/An toàn thông tin). |

---

## IV. MỐI LIÊN HỆ GIỮA CÁC BÀI HỌC VÀ ĐỀ XUẤT DẠNG BÀI TẬP TƯƠNG TÁC

### 1. Phân tích mối liên hệ logic giữa các chuỗi bài học
* **Chuỗi Lý thuyết nền tảng (Bài 1 - Bài 6):** Cung cấp tư duy về Trí tuệ nhân tạo (Bài 1-2), hạ tầng Mạng máy tính/TCP/IP (Bài 3-5) và Đạo đức không gian mạng (Bài 6). Đây là tri thức nền tảng để học sinh hiểu cách thức Internet vận hành trước khi tạo trang web.
* **Chuỗi Lập trình Web cốt lõi HTML/CSS (Bài 7 - Bài 18):** Tiến trình phát triển kỹ năng lập trình web nâng cao dần:
  * *Bài 7-12:* Dựng khung cấu trúc HTML (Chữ, Danh sách, Bảng, Liên kết, Đa phương tiện, Biểu mẫu).
  * *Bài 13-17:* Trang trí giao diện bằng CSS (Định dạng phông chữ, Màu sắc, Box Model, Trọng số ưu tiên).
  * *Bài 18:* Thực hành tổng hợp kết nối tệp HTML và tệp CSS độc lập.
* **Chuỗi Thiết kế Web ứng dụng Google Sites (Bài 23 - Bài 28):** Chuyển từ lập trình mã nguồn thuần sang sử dụng công cụ No-code hiện đại. Học sinh áp dụng kiến thức bố cục ở Bài 18 để dựng website thực tế (Dự án "Những bài ca đi cùng năm tháng") và xuất bản lên Internet.
* **Chuỗi Hướng nghiệp & Kết nối thiết bị (Bài 19 - Bài 22):** Định hướng nghề nghiệp thực tế ngành CNTT (Sửa chữa phần cứng, Quản trị mạng, An ninh thông tin).

### 2. Bảng đề xuất dạng bài tập tương tác phù hợp cho từng bài học

| Mã bài | Tên bài học | Dạng bài tập tương tác đề xuất trên Website |
|---|---|---|
| **ICT12_B01** | Bài 1. Làm quen với AI | Trắc nghiệm nhận biết mốc lịch sử (1956), Phân loại AI hẹp vs AI tổng quát. |
| **ICT12_B02** | Bài 2. AI trong khoa học & đời sống | Kéo thả ghép nối ứng dụng AI với lĩnh vực (Y tế, Giáo dục, Tài chính, Nông nghiệp). |
| **ICT12_B03** | Bài 3. Thiết bị mạng thông dụng | Trò chơi phân loại chức năng thiết bị mạng (Switch, Hub, Router, Modem). |
| **ICT12_B04** | Bài 4. Giao thức mạng | Bài tập tương tác chuyển đổi nhị phân -> IPv4 thập phân; Điền lệnh `ping`. |
| **ICT12_B05** | Bài 5. Thực hành chia sẻ tài nguyên | Trắc nghiệm Đúng/Sai về quyền Read, Read/Write và an toàn mạng Private/Public. |
| **ICT12_B06** | Bài 6. Giao tiếp không gian mạng | Xử lý tình huống tương tác (Mô phỏng hội thoại ứng xử văn hóa trên mạng). |
| **ICT12_B07** | Bài 7. HTML & Cấu trúc trang web | Điền khuyết mã khung HTML5 chuẩn; Sắp xếp thứ tự lồng thẻ `<html>`, `<head>`, `<body>`. |
| **ICT12_B08** | Bài 8. Định dạng văn bản | Playground: Nhập thẻ `<b>`, `<i>`, `<sup>`, `<sub>` xem ngay kết quả công thức Toán/Hóa. |
| **ICT12_B09** | Bài 9. Tạo danh sách và bảng | Interactive Coding: Tạo bảng có gộp ô `colspan`, `rowspan` và sửa lỗi vỡ khung. |
| **ICT12_B10** | Bài 10. Tạo liên kết | Kéo thả phân loại Đường dẫn tương đối vs Đường dẫn tuyệt đối; Chèn liên kết `#id`. |
| **ICT12_B11** | Bài 11. Đa phương tiện & iframe | Thực hành nhúng video YouTube và liên kết mở trang trong khung `iframe`. |
| **ICT12_B12** | Bài 12. Tạo biểu mẫu | Kéo thả thiết kế giao diện Form (Text, Password, Radio, Checkbox, Submit). |
| **ICT12_B13** | Bài 13. Khái niệm & Vai trò CSS | Trắc nghiệm phân biệt Inline CSS, Internal CSS và External CSS. |
| **ICT12_B14** | Bài 14. Định dạng văn bản bằng CSS | Playground: Tùy chỉnh `font-family`, `font-size`, `text-align` trực tiếp. |
| **ICT12_B15** | Bài 15. Tạo màu chữ & màu nền | Bảng chọn màu tương tác: Nhập mã Hex (`#FF0000`) / RGB xem thay đổi màu nền. |
| **ICT12_B16** | Bài 16. Định dạng khung (Box Model) | Mô phỏng Box Model 3D: Tùy chỉnh slider `margin`, `border`, `padding`, `content`. |
| **ICT12_B17** | Bài 17. Các mức ưu tiên bộ chọn | Bài tập tính toán trọng số CSS Specificity (100 - 10 - 1) xác định màu sắc hiển thị. |
| **ICT12_B18** | Bài 18. Thực hành tổng hợp HTML/CSS | Project Sandbox: Hoàn thiện tệp `index.html` và `style.css` theo đề bài yêu cầu. |
| **ICT12_B19** | Bài 19. Dịch vụ sửa chữa bảo trì | Trắc nghiệm chẩn đoán sự cố máy tính (Phần cứng vs Phần mềm). |
| **ICT12_B20** | Bài 20. Nhóm nghề quản trị CNTT | Trắc nghiệm tình huống bảo mật (Phát hiện lỗ hổng mã độc WannaCry, IDS). |
| **ICT12_B21** | Bài 21. Hội thảo hướng nghiệp | Kéo thả hoàn thiện dàn ý 5 phần cho bài thuyết trình hướng nghiệp. |
| **ICT12_B22** | Bài 22. Thực hành kết nối thiết bị số | Trò chơi trắc nghiệm chọn cổng kết nối chuẩn (HDMI, VGA, Miracast, Bluetooth). |
| **ICT12_B23** | Bài 23. Chuẩn bị xây dựng trang web | Sắp xếp trình tự 3 bước chuẩn bị xây dựng website và nhận diện thành phần Header/Footer. |
| **ICT12_B24** | Bài 24. Xây dựng phần đầu trang web | Mô phỏng giao diện Google Sites: Thao tác tải Logo, Favicon và Banner. |
| **ICT12_B25** | Bài 25. Xây dựng thân & chân trang | Kéo thả sắp xếp các Khối nội dung Layout (1 ảnh + text, 2 ảnh + text, YouTube). |
| **ICT12_B26** | Bài 26. Liên kết & Thanh điều hướng | Xây dựng sơ đồ cây trang con (Trang chủ -> Trang cấp 1 -> Trang cấp 2). |
| **ICT12_B27** | Bài 27. Biểu mẫu trên trang web | Trắc nghiệm quy trình nhúng Google Forms vào Google Sites và cài đặt quyền. |
| **ICT12_B28** | Bài 28. Thực hành tổng hợp | Đăng tải sản phẩm dự án Google Sites cá nhân/nhóm để cộng đồng bình chọn. |

---

## V. KẾ HOẠCH TRIỂN KHAI & LỘ TRÌNH PHÁT TRIỂN WEBSITE

* **Giai đoạn 1 (Tuần 1 - 2):** Khởi tạo cơ sở dữ liệu bài học và Ngân hàng câu hỏi từ file `MUC_LUC_BAI_HOC.csv` và `NGAN_HANG_CAU_HOI.md`.
* **Giai đoạn 2 (Tuần 3 - 4):** Lập trình giao diện Frontend (Responsive HTML5/CSS3/JavaScript) và công cụ HTML/CSS Playground.
* **Giai đoạn 3 (Tuần 5 - 6):** Tích hợp hệ thống trắc nghiệm tự động chấm điểm, mô-đun Gamification và tra cứu hướng nghiệp.
* **Giai đoạn 4 (Tuần 7):** Kiểm thử giao diện đa thiết bị (PC, Tablet, Mobile), tối ưu hóa tốc độ tải trang và công bố chính thức.
