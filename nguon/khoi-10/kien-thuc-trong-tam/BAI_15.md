# BÀI 15: HOÀN THIỆN HÌNH ẢNH ĐỒ HỌA

## 1. Mục tiêu bài học
- **Kiến thức:** Hiểu quy trình hoàn thiện một sản phẩm thiết kế đồ họa hoàn chỉnh trên Inkscape từ xây dựng bố cục nền, vẽ chi tiết trang trí, trình bày văn bản đến xuất bản tệp ảnh; phân biệt được tệp dự án vector (`.svg`) và tệp ảnh điểm ảnh xuất ra (`.png`).
- **Năng lực:** Phối hợp linh hoạt các công cụ hình khối, đường cong Bézier, phép ghép `Path`, màu sắc `Gradient`, nét đứt `Dashes`, căn gióng `Align and Distribute` để tạo ấn phẩm hoàn chỉnh (tờ rơi, thiệp, minh họa).
- **Phẩm chất:** Chủ động sáng tạo, biết đánh giá tính thẩm mỹ và tính truyền tải thông tin của sản phẩm đồ họa.

## 2. Kiến thức trọng tâm
### 2.1. Quy trình hoàn thiện sản phẩm đồ họa (Ví dụ: Tờ rơi Hội chợ sách)
Một sản phẩm truyền thông (tờ rơi, áp phích, thiệp) cần đảm bảo đủ thông tin cốt lõi (tiêu đề, thời gian, địa điểm, ưu đãi) và tuân thủ trình tự lớp đối tượng từ sau ra trước:
1. **Nhiệm vụ 1 – Vẽ nền:** Vẽ hình chữ nhật vừa khít trang thiết kế, sử dụng tô màu chuyển sắc (`Gradient`) để tạo chiều sâu và độ nổi bật.
2. **Nhiệm vụ 2 – Vẽ dây cờ tam giác:** Tạo hình tam giác bằng công cụ `Polygon` (`Corners = 3`), nhân bản, đổi màu xen kẽ và sắp xếp theo dây dẫn.
3. **Nhiệm vụ 3 – Vẽ sách và giá sách:** Dùng các hình chữ nhật thay đổi kích thước, xoay góc và nhóm (`Ctrl + G`) thành cụm đối tượng trang trí.
4. **Nhiệm vụ 4 – Nhập các đoạn văn bản:** Trình bày tiêu đề, thời gian, địa điểm, nội dung ưu đãi với phông chữ, cỡ chữ và màu sắc phân cấp rõ ràng.
5. **Nhiệm vụ 5 – Vẽ bóng hội thoại:** Dùng công cụ `Pen` hoặc ghép (`Union`) hình chữ nhật bo góc/elip với hình tam giác nhọn để làm nổi bật thông tin ưu đãi.
6. **Nhiệm vụ 6 – Vẽ đoạn nét đứt phân cách:** Dùng `Pen` vẽ đoạn thẳng giữa phần thời gian và địa điểm, chỉnh `Dashes` trong thẻ `Stroke style`.
7. **Nhiệm vụ 7 – Xuất sản phẩm hoàn thiện:** Lưu tệp gốc `.svg` và xuất ra định dạng đồ họa điểm ảnh `.png` qua `File -> Export PNG Image` (`Ctrl + Shift + E`).

### 2.2. Lưu ý khi xuất tệp ảnh điểm ảnh (`.png`)
- **Phạm vi xuất (`Export area`):**
  - `Page`: Xuất đúng phần nằm trong khung trang giấy (thường dùng cho tờ rơi, thiệp).
  - `Drawing`: Xuất toàn bộ mọi đối tượng có trong bản vẽ.
  - `Selection`: Chỉ xuất đối tượng hoặc nhóm đối tượng đang chọn.
- **Độ phân giải (`DPI`):** Mặc định `96 DPI` phù hợp xem trên màn hình/web; nâng lên `300 DPI` khi cần in ấn sắc nét.

## 3. Thuật ngữ, khái niệm và cú pháp/lệnh quan trọng
| Thuật ngữ / Lệnh | Phím tắt / Vị trí | Ý nghĩa / Chức năng |
|---|---|---|
| `Group` / `Ungroup` | `Ctrl + G` / `Ctrl + Shift + G` | Nhóm hoặc tách nhóm các đối tượng |
| `Raise` / `Lower` | `Page Up` / `Page Down` | Đưa đối tượng lên trên hoặc xuống dưới 1 lớp |
| `Raise to Top` / `Lower to Bottom` | `Home` / `End` | Đưa đối tượng lên trên cùng hoặc xuống dưới cùng |
| `Export PNG Image` | `Ctrl + Shift + E` | Mở bảng xuất bản vẽ sang ảnh điểm ảnh `.png` |
| `Page` / `Drawing` / `Selection` | Bảng Export | Chọn phạm vi xuất ảnh (trang, toàn bộ hình, vùng chọn) |
| `.svg` vs `.png` | Định dạng tệp | `.svg` lưu vector để sửa tiếp; `.png` ảnh bitmap để chia sẻ/in |

## 4. Hướng dẫn thực hành và ví dụ minh họa
- **Ví dụ: Quy trình nhóm và xuất chuẩn trang thiết kế tờ rơi:**
  1. Sau khi vẽ xong chồng sách gồm 5 hình chữ nhật, chọn cả 5 hình rồi nhấn `Ctrl + G` để nhóm lại, giúp di chuyển không bị xô lệch.
  2. Chọn hình nền chữ nhật, nhấn `End` (`Lower to Bottom`) để chắc chắn nền nằm dưới tất cả các lớp chữ và hình minh họa.
  3. Nhấn `Ctrl + S` lưu tệp `.svg` gốc.
  4. Nhấn `Ctrl + Shift + E`, chọn tab `Page`, đặt `DPI = 150` (hoặc `300` nếu in), chọn thư mục lưu và nhấn `Export` để thu được tệp `.png` hoàn chỉnh.

## 5. Câu hỏi và bài tập vận dụng nhanh
1. **Câu hỏi:** Để vẽ hình tam giác cân làm lá cờ trong Inkscape bằng công cụ hình đa giác/sao, ta đặt tham số `Corners` bằng bao nhiêu?
   - **Đáp án:** `Corners = 3`.
2. **Câu hỏi:** Khi xuất ảnh tờ rơi sang `.png`, tại sao nên chọn vùng xuất là `Page` thay vì `Drawing`?
   - **Đáp án:** Vì `Page` cắt gọn đúng khung trang giấy thiết kế, loại bỏ các chi tiết nháp hoặc phần hình tràn ra ngoài lề trang.
3. **Câu hỏi:** Có nên xóa tệp `.svg` sau khi đã xuất ra `.png` không?
   - **Đáp án:** Không, cần giữ tệp `.svg` để chỉnh sửa lại nội dung, màu sắc hoặc xuất độ phân giải cao hơn khi cần.

## 6. Lỗi chuyên môn thường gặp, nguyên nhân và cách khắc phục
1. **Xuất file `.png` bị thiếu phần nền hoặc bị dính các hình vẽ nháp nằm ngoài trang giấy:**
   - *Nguyên nhân:* Chọn nhầm phạm vi xuất sang `Selection` (khi chỉ đang chọn một chi tiết nhỏ) hoặc `Drawing` (xuất cả các hình nháp để ngoài lề trang).
   - *Khắc phục:* Bấm chọn tab `Page` trong hộp thoại `Export` (`Ctrl + Shift + E`) trước khi nhấn nút `Export`.
2. **Sản phẩm xuất ra bị che mất chữ hoặc thiếu chi tiết minh họa:**
   - *Nguyên nhân:* Thứ tự xếp lớp (Z-order) bị sai, ví dụ hình nền hoặc bóng hội thoại tô màu đặc nằm đè lên lớp văn bản.
   - *Khắc phục:* Chọn đối tượng nền nhấn `End` để đưa xuống đáy; chọn các đoạn văn bản nhấn `Home` để đưa lên lớp trên cùng.
3. **Khi phóng to tệp `.png` để in khổ lớn bị răng cưa, mờ nhòe:**
   - *Nguyên nhân:* Xuất ảnh với độ phân giải `DPI` quá thấp (dưới `96 DPI`) hoặc kích thước trang thiết kế quá nhỏ; quên bản chất `.png` là ảnh bitmap.
   - *Khắc phục:* Thiết lập đúng kích thước trang in trong `Document Properties` (`Ctrl + Shift + D`) và tăng `DPI` lên `300` khi xuất ảnh phục vụ in ấn.

## 7. Tổng kết và liên hệ thực tiễn
- Bài 15 tổng hợp toàn bộ kiến thức Chủ đề 4 thành một quy trình sản xuất ấn phẩm đồ họa hoàn chỉnh: từ phác thảo nền, dựng hình, trình bày chữ đến xuất bản đa định dạng.
- Quy trình lưu trữ kép (`.svg` gốc để bảo trì + `.png` thành phẩm để phát hành) là chuẩn làm việc chuyên nghiệp trong thiết kế truyền thông, làm poster sự kiện trường học, banner web và tài liệu học tập.
