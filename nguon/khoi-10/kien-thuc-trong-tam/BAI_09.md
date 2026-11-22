# BÀI 9: AN TOÀN TRÊN KHÔNG GIAN MẠNG

## 1. Thông tin chung & Mục tiêu bài học
- **Mã bài:** BAI_09 | **Chủ đề 2:** Mạng máy tính và Internet | **Thời lượng:** 2 tiết (SGK Tin học 10 – Kết nối tri thức với cuộc sống).
- **Mục tiêu:**
  - Nhận diện được các nguy cơ mất an toàn trên không gian mạng (tin giả, lừa đảo, lộ thông tin cá nhân, bắt nạt qua mạng, nghiện mạng).
  - Phân biệt bản chất, cơ chế lây nhiễm và tác hại của 3 loại phần mềm độc hại: Virus, Worm (sâu máy tính) và Trojan.
  - Biết cách phòng chống mã độc, bảo vệ thông tin cá nhân và sử dụng Windows Defender để quét virus.

## 2. Cấu trúc kiến thức trọng tâm
1. **Một số nguy cơ trên mạng:** 5 nhóm nguy cơ phổ biến và biện pháp bảo vệ thông tin cá nhân, phòng chống bắt nạt.
2. **Phần mềm độc hại (Malware):** Phân biệt Virus, Worm, Trojan; các biến thể (Spyware, Backdoor, Keylogger, Rootkit) và tấn công DDoS/Botnet.
3. **Thực hành phòng chống virus:** Sử dụng công cụ Windows Security / Windows Defender trên Windows 10, 11.

## 3. Kiến thức cốt lõi & Khái niệm chuẩn
- **5 nguy cơ thường gặp trên mạng:** (1) Tin giả và tin phản văn hóa; (2) Lừa đảo trực tuyến (giả mạo ngân hàng, nick Facebook người thân, dụ đầu tư lãi cao); (3) Lộ thông tin cá nhân; (4) Bắt nạt trên không gian mạng (cyberbullying); (5) Nghiện mạng.
- **So sánh 3 loại phần mềm độc hại:**

| Tiêu chí | Virus | Worm (Sâu máy tính) | Trojan (Phần mềm nội gián) |
| :--- | :--- | :--- | :--- |
| **Tính hoàn chỉnh** | Không hoàn chỉnh (đoạn mã ký sinh vào tệp/chương trình khác) | Chương trình hoàn chỉnh, tự chạy độc lập | Chương trình hoàn chỉnh (ngụy trang phần mềm sạch) |
| **Cơ chế lây lan** | Sao chép gắn vào tệp khác; lây khi người dùng mở/chạy tệp nhiễm | Tự động phát tán qua mạng, khai thác lỗ hổng hệ điều hành, email/tin nhắn | Không tự lây lan mạnh; lừa người dùng tự tải về cài đặt |
| **Tác hại chính** | Phá hỏng phần mềm, xóa dữ liệu, làm nhiễu loạn hệ thống | Tiêu tốn tài nguyên mạng/máy, lây lan diện rộng (VD: WannaCry 2017) | Mở cửa hậu (Backdoor), đánh cắp dữ liệu/mật khẩu (Keylogger/Spyware), chiếm quyền điều khiển |

- **Biện pháp bảo vệ:** Đặt mật khẩu mạnh (tối thiểu 8 ký tự gồm chữ hoa, thường, số, ký tự đặc biệt); không lưu mật khẩu và luôn đăng xuất trên máy công cộng; cẩn trọng với Wi-Fi công cộng; dùng phần mềm có bản quyền để nhận bản vá lỗ hổng bảo mật; không nhấp liên kết lạ.

## 4. Hướng dẫn thực hành & Ví dụ minh họa
- **Quy trình quét virus bằng Windows Defender (Windows 10/11):**
  - *Bước 1:* Vào **Start -> Settings -> Update & Security (hoặc Privacy & security) -> Windows Security -> Virus & threat protection**.
  - *Bước 2:* Chọn **Quick scan** để quét nhanh, hoặc nhấn **Scan options** để chọn kiểu quét phù hợp:
    - *Quick scan:* Quét các vùng hệ thống hay bị nhiễm.
    - *Full scan:* Quét toàn bộ ổ cứng (tốn nhiều thời gian).
    - *Custom scan:* Quét thư mục/ổ đĩa chỉ định (như USB mới cắm).
    - *Microsoft Defender Offline scan:* Khởi động lại máy để diệt mã độc ẩn sâu trước khi Windows tải.
  - *Bước 3:* Nhấn **Scan now** và xử lý tệp nhiễm nếu phát hiện.

## 5. Phân dạng bài tập & Phương pháp giải
- **Dạng 1 (Phân biệt Virus – Worm – Trojan):** Dựa vào 2 từ khóa: *đoạn mã ký sinh* -> Virus; *chương trình hoàn chỉnh tự lây qua mạng/lỗ hổng* -> Worm; *phần mềm nội gián đánh cắp thông tin/điều khiển từ xa* -> Trojan.
- **Dạng 2 (Xử lý tình huống an toàn mạng):** Gặp tin nhắn vay tiền, link trúng thưởng, email ngân hàng yêu cầu OTP -> tuyệt đối không bấm link/cung cấp OTP, xác minh qua kênh chính thức. Bị bắt nạt qua mạng -> không tranh cãi, lưu bằng chứng, báo thầy cô/cha mẹ hoặc công an.
- **Dạng 3 (Nhận diện phần mềm diệt virus):** Phân biệt phần mềm diệt virus (Windows Defender, BKAV, Kaspersky, AVG, Bitdefender, Norton, McAfee, Panda) với phần mềm lập trình/hệ điều hành (Ubuntu, Visual Studio, MySQL, Node.js).

## 6. Lỗi chuyên môn thường gặp, nguyên nhân và cách khắc phục
1. **Nhầm lẫn bản chất và cơ chế lây lan giữa Virus, Worm và Trojan:**
   - *Nguyên nhân:* Trong giao tiếp hàng ngày, người dùng thường gọi chung mọi mã độc là "virus" nên khi làm bài tập dễ gán tính năng tự lây qua mạng của Worm hoặc tính năng mở cửa hậu của Trojan cho Virus.
   - *Khắc phục:* Nhớ bảng đối chiếu 3 tiêu chí: *Virus* = đoạn mã ký sinh, cần vật chủ; *Worm* = chương trình độc lập, tự lây qua lỗ hổng mạng; *Trojan* = nội gián giả danh, không tự nhân bản.
2. **Tin tưởng tuyệt đối vào các trang web có giao thức `https://`:**
   - *Nguyên nhân:* Hiểu nhầm biểu tượng ổ khóa (`https://`) nghĩa là trang web uy tín và an toàn 100%.
   - *Khắc phục:* Giải thích rằng `https://` chỉ mã hóa đường truyền giữa trình duyệt và máy chủ; kẻ lừa đảo vẫn có thể đăng ký chứng chỉ SSL cho trang web giả mạo (phishing), nên luôn phải kiểm tra kỹ tên miền chính xác.
3. **Cho rằng chỉ cần cài phần mềm diệt virus là không cần cập nhật hệ điều hành:**
   - *Nguyên nhân:* Phụ thuộc hoàn toàn vào phần mềm diệt virus.
   - *Khắc phục:* Phần mềm diệt virus chỉ nhận diện được mẫu mã độc đã biết hoặc hành vi bất thường, trong khi cập nhật hệ điều hành giúp **vá tận gốc lỗ hổng bảo mật** (như lỗ hổng SMB mà sâu WannaCry năm 2017 khai thác).
4. **Cấm tuyệt đối việc kết bạn qua mạng để phòng chống bắt nạt:**
   - *Nguyên nhân:* Hiểu máy móc biện pháp phòng ngừa.
   - *Khắc phục:* Biện pháp đúng là *không kết bạn dễ dãi với người lạ*, thiết lập quyền riêng tư, không trả lời kẻ bắt nạt và lưu giữ bằng chứng để báo cáo.

## 7. Liên hệ thực tế & Câu hỏi tự kiểm tra nhanh
- **Liên hệ thực tế:** Thảm họa sâu WannaCry (5/2017) mã hóa dữ liệu đòi tiền chuộc trên hàng trăm nghìn máy tính toàn cầu vì người dùng chưa cập nhật bản vá Windows.
- **Tự kiểm tra nhanh:**
  1. Vì sao dùng phần mềm hệ điều hành không bản quyền (bẻ khóa) dễ bị nhiễm mã độc hơn? *(Gợi ý: Tệp bẻ khóa thường chứa Trojan và hệ thống bị tắt cập nhật vá lỗi bảo mật).*
  2. Khi nhận tin nhắn từ Facebook bạn thân hỏi mượn tiền gấp, bước đầu tiên cần làm là gì? *(Gợi ý: Gọi điện thoại trực tiếp qua số điện thoại thật để xác minh).*
- **Nguồn tham khảo NotebookLM:** `cd2_bai_9_an_toan_tren_khong_gian_mang_ket_noi_tri_thuc.docx`, `ds_tin_hoc_10_kntt_bai_9.docx`, `ndc_b9_an_toan_tren_khong_gian_mang.docx`, `da_tin_hoc_10_bai_9_an_toan_tren_khong_gian_mang.docx`.
