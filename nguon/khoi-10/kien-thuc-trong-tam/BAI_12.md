# BÀI 12: PHẦN MỀM THIẾT KẾ ĐỒ HỌA

## 1. Mục tiêu bài học
- Phân biệt được hai loại đồ họa cơ bản: đồ họa điểm ảnh (bitmap) và đồ họa vectơ (vector) cùng ứng dụng của từng loại.
- Làm quen với giao diện, các thanh công cụ và thao tác cơ bản trong phần mềm thiết kế đồ họa vectơ mã nguồn mở **Inkscape**.
- Thực hành vẽ các hình khối cơ bản, thiết lập màu sắc (Fill/Stroke, hệ màu RGB) và sắp xếp thứ tự lớp đối tượng.

## 2. Cấu trúc kiến thức trọng tâm
1. **Thiết kế đồ họa & Phân loại đồ họa:** Khái niệm thiết kế đồ họa; so sánh đồ họa điểm ảnh (bitmap) và đồ họa vectơ.
2. **Phần mềm thiết kế đồ họa Inkscape:** Giao diện làm việc (Thanh bảng chọn, Hộp công cụ, Thanh điều khiển thuộc tính, Vùng làm việc, Trang in, Bảng màu, Thanh trạng thái).
3. **Các đối tượng đồ họa & Thực hành:** Quy trình 3 bước vẽ hình cơ bản, thứ tự lớp vẽ, thao tác chọn/nhân bản/lưu tệp và bài tập vẽ Quốc kỳ Việt Nam.

## 3. Kiến thức cốt lõi & Khái niệm chuẩn
- **Thiết kế đồ họa:** Là quá trình tạo ra sản phẩm bằng hình ảnh, chữ viết để truyền tải thông tin, thông điệp đến người xem.
- **So sánh Đồ họa điểm ảnh (Bitmap) và Đồ họa vectơ (Vector):**

| Tiêu chí | Đồ họa điểm ảnh (Bitmap) | Đồ họa vectơ (Vector) |
| :--- | :--- | :--- |
| **Cấu tạo** | Tập hợp các điểm ảnh (pixel) | Đường nét xác định bởi phương trình toán học |
| **Phóng to / Thu nhỏ** | Phóng to bị vỡ ảnh, giảm chất lượng | Co giãn vô hạn không bị vỡ nét |
| **Kích thước tệp** | Lớn (tăng theo độ phân giải/chi tiết) | Nhỏ, không đổi khi thay đổi kích thước in |
| **Chuyển đổi** | Khó chuyển sang vectơ giữ nguyên chất lượng | Dễ dàng xuất sang ảnh điểm ảnh (PNG, JPG) |
| **Ứng dụng & Định dạng** | Ảnh chụp, chỉnh sửa ảnh chân thực (`.jpg`, `.png`, `.bmp`) | Logo, minh họa, bản vẽ kỹ thuật, bộ nhận diện (`.svg`, `.ai`, `.cdr`, `.eps`, `.cmx`) |
| **Phần mềm tiêu biểu** | Adobe Photoshop, **GIMP** | **Inkscape**, Adobe Illustrator, CorelDRAW |

- **Các thành phần giao diện Inkscape & Phím tắt quan trọng:**
  - **Hộp công cụ (Tool box):** Thanh công cụ dùng nhiều nhất (chọn đối tượng, vẽ hình chữ nhật, hình tròn/elip, đa giác/sao, bút vẽ, nhập chữ).
  - **Vùng làm việc (Canvas):** Có thể vẽ ở bất kỳ đâu trên vùng làm việc; phần nằm trong khung **Trang in (Page)** sẽ được in/xuất trang.
  - **Phím tắt thiết yếu:** Tạo mới (`Ctrl + N`), Lưu (`Ctrl + S`), Chọn tất cả (`Ctrl + A`), Nhân bản đối tượng (`Ctrl + D`), Giữ `Shift` + nháy chuột để chọn nhiều đối tượng hoặc tô màu viền (Stroke) từ Bảng màu.

## 4. Hướng dẫn thực hành & Ví dụ minh họa
- **Quy trình 3 bước vẽ hình có sẵn trong Inkscape:**
  1. Chọn công cụ hình khối tương ứng trên *Hộp công cụ* (Hình chữ nhật, Hình tròn/Elip, Đa giác/Sao).
  2. Điều chỉnh thông số trên *Thanh điều khiển thuộc tính* (VD: số cánh sao = 5, bo góc...).
  3. Kéo thả chuột trên *Vùng làm việc* (giữ `Ctrl` để vẽ hình vuông/tròn đều).
- **Thực hành vẽ Quốc kỳ Việt Nam:**
  - Vẽ hình chữ nhật tỉ lệ 2:3, chọn màu nền (Fill) đỏ tươi, bỏ viền (Stroke).
  - Chọn công cụ *Stars and Polygons* (5 cánh), giữ `Ctrl` vẽ ngôi sao vàng đặt chính giữa lá cờ.
  - Lưu tệp nguồn `.svg` (`Ctrl + S`) và có thể xuất ảnh `.png` (`File -> Export PNG Image`).

## 5. Phân dạng bài tập & Phương pháp giải
- **Dạng 1 (Phân biệt phần mềm & định dạng tệp):** Nhận diện GIMP/Photoshop là bitmap, Inkscape/Illustrator/CorelDRAW là vectơ (Visual Studio là IDE lập trình, không phải đồ họa); phân biệt đuôi `.svg`, `.cmx`, `.cdr`, `.ai` (vectơ) với `.png`, `.jpg`, `.bmp` (bitmap).
- **Dạng 2 (Giao diện & Thao tác Inkscape):** Chọn nhiều đối tượng bằng `Shift + Click`, kéo khung bao hoặc `Ctrl + A` (chú ý `Ctrl + I` là Import, không phải chọn); phân biệt vùng làm việc và trang in.
- **Dạng 3 (Hệ màu RGB & Thứ tự lớp):** `R=255, G=255, B=0` -> Vàng; `R=255, G=0, B=0` -> Đỏ; `R=255, G=255, B=255` -> Trắng; đối tượng vẽ sau nằm ở lớp trên và che đối tượng vẽ trước.

## 6. Lỗi chuyên môn thường gặp, nguyên nhân và cách khắc phục
1. **Nhầm lẫn phần mềm GIMP thuộc nhóm đồ họa vectơ:**
   - *Nguyên nhân:* Cả GIMP và Inkscape đều là phần mềm mã nguồn mở miễn phí được nhắc đến trong chương trình Tin học phổ thông.
   - *Khắc phục:* Ghi nhớ cặp đối xứng: **GIMP** = thay thế miễn phí cho Photoshop (xử lý ảnh *bitmap*); **Inkscape** = thay thế miễn phí cho Illustrator/CorelDRAW (thiết kế *vectơ*).
2. **Thiết kế logo bằng phần mềm ảnh điểm ảnh (Photoshop/Paint) hoặc lưu ở độ phân giải thấp:**
   - *Nguyên nhân:* Chưa phân biệt được đặc tính co giãn của hai loại đồ họa.
   - *Khắc phục:* Luôn thiết kế logo, biểu trưng bằng phần mềm vectơ (Inkscape) để có thể phóng to in trên phông bạt khổ lớn mà không bị răng cưa, vỡ nét.
3. **Vẽ đối tượng mới bị biến mất hoặc không thấy trên màn hình:**
   - *Nguyên nhân:* Đối tượng mới có màu trùng màu nền (hoặc độ trong suốt Alpha = 0), hoặc bị một đối tượng khác vẽ sau có Opacity = 100% nằm ở lớp trên che khuất hoàn toàn.
   - *Khắc phục:* Kiểm tra thanh trạng thái phía dưới để xem thông tin Fill/Stroke của đối tượng đang chọn; dùng lệnh `Object -> Raise to Top` (phím `Home`) để đưa đối tượng lên lớp trên cùng.
4. **Nhầm lẫn thao tác tô màu nền (Fill) và màu nét vẽ (Stroke) trên Bảng màu Inkscape:**
   - *Nguyên nhân:* Nháy chuột trái trực tiếp vào Bảng màu làm đổi màu nền khi đang muốn đổi màu viền.
   - *Khắc phục:* Nháy chuột trái để đổi màu nền (**Fill**); giữ phím **Shift + nháy chuột trái** để đổi màu nét viền (**Stroke**), hoặc mở hộp thoại `Fill and Stroke` (`Ctrl + Shift + F`).

## 7. Liên hệ thực tế & Câu hỏi tự kiểm tra nhanh
- **Liên hệ thực tế:** Khi thiết kế bộ nhận diện sự kiện (bút, sổ tay, danh thiếp, túi giấy, banner), nhà thiết kế dùng đồ họa vectơ để dùng chung một tệp gốc cho mọi kích thước in ấn.
- **Tự kiểm tra nhanh:**
  1. Vì sao ảnh chụp từ điện thoại không thuộc loại đồ họa vectơ? *(Gợi ý: Ảnh chụp được cảm biến máy ảnh ghi nhận theo lưới điểm ảnh – bitmap).*
  2. Trong Inkscape, muốn vừa giữ tỉ lệ hình tròn hoàn hảo vừa vẽ từ tâm ra, ta giữ phím nào khi kéo chuột? *(Gợi ý: Giữ phím `Ctrl` để tròn đều, giữ thêm `Shift` để vẽ từ tâm).*
- **Nguồn tham khảo NotebookLM:** `cd4_bai_12_phan_mem_thiet_ke_do_hoa_ket_noi_tri_thuc.docx`, `ds_tin_hoc_10_kntt_bai_12.docx`, `ndc_b12._phan_mem_thiet_ke_do_hoa_.docx`, `tn_tin10_on_tap_chu_de_4_phan_1.docx`.
