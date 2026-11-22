# BÀI 8: MẠNG MÁY TÍNH TRONG CUỘC SỐNG HIỆN ĐẠI

## 1. Mục tiêu bài học
- Phân biệt được mạng cục bộ (LAN) và mạng diện rộng (WAN / Internet) về phạm vi, thiết bị kết nối và quyền sở hữu.
- Hiểu khái niệm, phân loại (SaaS, PaaS, IaaS) và lợi ích của điện toán đám mây (Cloud Computing).
- Hiểu khái niệm và ứng dụng thực tiễn của Kết nối vạn vật (IoT – Internet of Things).

## 2. Cấu trúc kiến thức trọng tâm
1. **Mạng LAN và Internet:** Phân loại mạng theo phạm vi, vai trò bộ định tuyến (Router), nhà cung cấp dịch vụ Internet (ISP).
2. **Vai trò của Internet:** Trong giao tiếp cộng đồng, giáo dục, y tế, giải trí và kinh tế – xã hội.
3. **Điện toán đám mây (Cloud Computing):** Khái niệm, 3 mô hình dịch vụ (SaaS, PaaS, IaaS) và lợi ích.
4. **Kết nối vạn vật (IoT):** Khái niệm, cơ chế thu thập dữ liệu tự động và các ví dụ thực tiễn (thu phí không dừng ETC, nhà thông minh, y tế).

## 3. Kiến thức cốt lõi & Khái niệm chuẩn
- **So sánh Mạng LAN và Internet:**

| Tiêu chí | Mạng cục bộ (LAN) | Internet (Mạng toàn cầu) |
| :--- | :--- | :--- |
| Phạm vi, quy mô | Nhỏ (phòng học, gia đình, tòa nhà, cơ quan) | Toàn cầu |
| Thiết bị/Cách kết nối | Trực tiếp qua Switch, Hub, Wi-Fi | Liên kết nhiều LAN qua **Router** và đường truyền của **ISP** |
| Quyền sở hữu | Có chủ sở hữu cụ thể | Không thuộc quyền sở hữu của riêng ai |

- **Nguyên lý hoạt động của Router:** Khi nhận gói dữ liệu, Router kiểm tra địa chỉ đích; nếu địa chỉ nằm ngoài LAN nội bộ thì chuyển tiếp ra cổng kết nối Internet.
- **Điện toán đám mây (Cloud Computing):** Việc chia sẻ các tài nguyên mạng (phần cứng, nền tảng, phần mềm) theo nhu cầu qua Internet miễn phí hoặc trả phí theo hạn mức sử dụng.
  - **IaaS (Infrastructure as a Service):** Cho thuê hạ tầng phần cứng/lưu trữ (ví dụ: máy chủ ảo, không gian lưu trữ Google Drive/VNPT Cloud).
  - **PaaS (Platform as a Service):** Cho thuê nền tảng phát triển, cơ sở dữ liệu.
  - **SaaS (Software as a Service):** Cho thuê phần mềm ứng dụng qua Internet (ví dụ: Gmail, Zoom, Google Docs).
  - **3 lợi ích chính:** Tính mềm dẻo và độ sẵn sàng cao; Chất lượng dịch vụ cao; Kinh tế hơn.
- **Kết nối vạn vật (IoT):** Liên kết các thiết bị thông minh (cảm biến, camera, công tơ điện tử...) qua Internet hoặc các chuẩn kết nối khác (Bluetooth, ZigBee...) để tự động thu thập, trao đổi và xử lý dữ liệu.

## 4. Hướng dẫn thực hành & Ví dụ minh họa
- **Ví dụ phân biệt dịch vụ đám mây:**
  - *Gmail, Zoom, Canva online:* Là dịch vụ đám mây (SaaS) vì người dùng đăng nhập tài khoản và thuê/sử dụng phần mềm chạy trên máy chủ từ xa.
  - *Đọc tin tức miễn phí trên báo điện tử hoặc gửi SMS truyền thống:* Không phải dịch vụ đám mây.
- **Ví dụ IoT – Thu phí không dừng (ETC):** Thẻ định danh (RFID) trên xe giao tiếp tự động với trạm đọc tại làn thu phí, dữ liệu truyền tức thời về cơ sở dữ liệu trung tâm để trừ tiền tự động, giảm ùn tắc và minh bạch hóa doanh thu.

## 5. Phân dạng bài tập & Phương pháp giải
- **Dạng 1 (Phân biệt LAN và WAN/Internet):** Xác định dựa vào phạm vi địa lý (tòa nhà -> LAN; liên tỉnh/quốc gia/toàn cầu -> WAN) và phương thức kết nối (nối hai LAN qua Switch thành LAN lớn hơn; nối hai LAN qua Internet thành WAN).
- **Dạng 2 (Nhận diện mô hình SaaS / PaaS / IaaS):** Hỏi về phần mềm dùng ngay trên web -> SaaS; hỏi về nền tảng lập trình/CSDL -> PaaS; hỏi về máy chủ ảo, ổ cứng lưu trữ -> IaaS.
- **Dạng 3 (Đánh giá ứng dụng IoT):** Kiểm tra 2 yếu tố: có thiết bị/cảm biến thông minh và có cơ chế tự động thu thập/truyền xử lý dữ liệu qua mạng.

## 6. Lỗi chuyên môn thường gặp, nguyên nhân và cách khắc phục
1. **Nhầm lẫn Switch/Hub với Router khi kết nối nhiều mạng:**
   - *Nguyên nhân:* Học sinh thấy cả Switch và Router đều có cổng cắm dây mạng nên cho rằng thiết bị nào cũng nối được mạng LAN ra Internet.
   - *Khắc phục:* Ghi nhớ quy tắc: *Switch/Hub* chỉ chuyển tiếp khung dữ liệu trong nội bộ một mạng LAN; *Router (Bộ định tuyến)* mới có khả năng định tuyến gói tin giữa các mạng LAN khác nhau và kết nối ra Internet.
2. **Đánh đồng mọi trang web trực tuyến đều là dịch vụ điện toán đám mây:**
   - *Nguyên nhân:* Hiểu nhầm cứ truy cập qua Internet là dùng đám mây.
   - *Khắc phục:* Đối chiếu tiêu chí: dịch vụ đám mây phải có việc *chia sẻ/thuê bao tài nguyên tính toán, lưu trữ hoặc phần mềm* theo nhu cầu (thường gắn với tài khoản người dùng và hạn mức). Đọc báo điện tử thông thường hoặc nhắn SMS di động không phải dịch vụ đám mây.
3. **Nhầm lẫn viết tắt giữa IaaS và SaaS (đặc biệt với dịch vụ lưu trữ Google Drive):**
   - *Nguyên nhân:* Thấy Google Drive có giao diện web giống phần mềm nên gọi là SaaS, hoặc nhầm IaaS là SaaS.
   - *Khắc phục:* Phân biệt theo đối tượng thuê: thuê *không gian đĩa cứng/máy chủ* là hạ tầng (**I**nfrastructure -> **I**aaS); thuê *nền tảng* (**P**latform -> **P**aaS); thuê *phần mềm ứng dụng* (**S**oftware -> **S**aaS).
4. **Cho rằng hai phòng máy nối với nhau qua Switch tạo thành mạng WAN:**
   - *Nguyên nhân:* Nhầm cứ khác phòng là khác mạng LAN và thành WAN.
   - *Khắc phục:* Nếu hai phòng máy cạnh nhau nối trực tiếp qua Switch/cáp mạng nội bộ, chúng hợp thành **một mạng LAN lớn hơn**; chỉ khi kết nối thông qua hạ tầng Internet hoặc đường truyền diện rộng của ISP mới tạo thành mạng WAN.

## 7. Liên hệ thực tế & Câu hỏi tự kiểm tra nhanh
- **Liên hệ thực tế:** Các nhà cung cấp dịch vụ Internet (ISP) lớn tại Việt Nam gồm VNPT, Viettel, FPT Telecom, CMC Telecom; các dịch vụ đám mây nội địa tiêu biểu như VNPT Cloud, Viettel IDC.
- **Tự kiểm tra nhanh:**
  1. Vì sao Internet không có chủ sở hữu duy nhất nhưng vẫn hoạt động ổn định toàn cầu? *(Gợi ý: Có các tổ chức điều phối chuẩn kỹ thuật và giao thức chung TCP/IP mà các nhà mạng tự nguyện tuân thủ).*
  2. Nêu 2 lợi ích của công tơ điện tử thông minh (IoT) so với công tơ cơ truyền thống? *(Gợi ý: Không tốn nhân công ghi số thủ công; truyền dữ liệu tức thời và chính xác về trung tâm).*
- **Nguồn tham khảo NotebookLM:** `cd2_bai_8_mang_may_tinh_trong_cuoc_song_hien_dai_ket_noi_tri_thuc.docx`, `ds_tin_hoc_10_kntt_bai_8.docx`, `ndc_b8._mang_may_tinh_trong_cuoc_song_hien_dai_.docx`, `da_tin_hoc_10_bai_8_mang_may_tinh_trong_cuoc_song_hien_dai.docx`.
