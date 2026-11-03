# BÀI 18: THỰC HÀNH TỔNG HỢP THIẾT KẾ TRANG WEB

## I. MỤC TIÊU BÀI HỌC
- **Về kiến thức:** Nắm vững quy trình thiết kế và xây dựng một dự án website hoàn chỉnh (Trang chủ và các trang con) sử dụng kết hợp HTML và tệp CSS ngoại bối dùng chung.
- **Về kỹ năng:** Phân chia được bố cục các khối lớn/nhỏ bằng thẻ `<div>`, ứng dụng CSS flexbox chia cột, liên kết hệ thống các trang web và tuân thủ bản quyền nội dung.
- **Về thái độ:** Tăng cường khả năng làm việc nhóm, sáng tạo và hoàn thiện sản phẩm theo bộ tiêu chí đánh giá.

---

## II. KIẾN THỨC TRỌNG TÂM
1. **Dự án Website Câu lạc bộ Ngoại khóa trường học:**
   - *Cấu trúc tối thiểu:* 1 Trang chủ (`index.html`) + 2 Trang con chuyên đề (ví dụ `the_thao.html`, `nghe_thuat.html`) + Biểu mẫu đăng ký (`dang_ky.html`).
   - *Tính đồng bộ:* Tất cả các tệp HTML đều nhúng chung 1 tệp CSS ngoại bối (`style.css`) để thống nhất màu sắc, phông chữ và bố cục.
2. **Phân chia bố cục bằng thẻ `<div>` và CSS Flexbox:**
   - Dùng thẻ `<div>` tạo 3 khu vực lớn: Đầu trang (`#header`), Thân trang (`#main_content`), Chân trang (`#footer`).
   - Tạo các khối con bên trong `<div>`: Dùng chung `class` cho các khối có thiết kế tương đồng; dùng `id` cho khối riêng biệt.
   - Sắp xếp các khối nằm ngang: Dùng `display: flex; justify-content: space-between;` trên khối cha, đặt % độ rộng các khối con sao cho tổng $\le 100\%$.
3. **Tiêu chí đánh giá sản phẩm Website:**
   - *Cấu trúc:* Đảm bảo tối thiểu trang chủ và các trang con có hệ thống liên kết 2 chiều thông suốt.
   - *Nội dung:* Đúng chủ đề, thông tin chính xác, bài viết kèm ảnh/video chất lượng không vi phạm bản quyền (ghi rõ nguồn trích dẫn).
   - *Hình thức:* Bố cục khoa học, màu sắc trang nhã, phông chữ dễ đọc, khoảng đệm `padding` thoáng mát.

---

## III. GIẢI THÍCH KHÁI NIỆM CHI TIẾT
- **Kỹ thuật Flexbox (`display: flex`):** Mô hình dàn trang hiện đại của CSS giúp sắp xếp, căn chỉnh các khối con nằm song song theo hàng ngang và phân bổ khoảng trống tự động linh hoạt.

---

## IV. VÍ DỤ MINH HỌA THỰC TẾ
```html
<!-- Cấu trúc khung HTML dự án -->
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>CLB Ngoại Khóa Trường THPT</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div id="header">
    <h1>WEBSITE CÂU LẠC BỘ NGOẠI KHÓA</h1>
    <div id="menu">
      <a href="index.html">Trang chủ</a>
      <a href="the_thao.html">CLB Thể Thao</a>
      <a href="nghe_thuat.html">CLB Nghệ Thuật</a>
    </div>
  </div>
  
  <div id="main_content" class="row">
    <div class="cot_trai"><h2>Nội dung chính</h2></div>
    <div class="cot_phai"><h2>Tin nổi bật</h2></div>
  </div>
  
  <div id="footer">
    <p>&copy; 2026 Bản quyền thuộc về Trường THPT</p>
  </div>
</body>
</html>
```

---

## V. QUY TRÌNH THỰC HÀNH / THAO TÁC KỸ THUẬT
*Quy trình 4 bước hoàn thiện dự án Website:*
1. **Bước 1: Thiết kế Bố cục & Viết tệp `style.css`:** Định nghĩa kích thước, màu nền, căn lề cho các khối `#header`, `#menu`, `.row`, `.cot_trai`, `.cot_phai`, `#footer`.
2. **Bước 2: Soạn thảo `index.html` (Trang chủ):** Dựng khung thẻ `<div>`, viết nội dung giới thiệu chung và chèn menu liên kết.
3. **Bước 3: Soạn thảo các trang con (`the_thao.html`, `nghe_thuat.html`):** Nhân bản tệp khung, thay đổi bài viết chi tiết và ảnh minh họa.
4. **Bước 4: Kiểm tra & Nghiệm thu:** Mở kiểm tra các đường liên kết chuyên hướng hai chiều qua lại và tinh chỉnh `padding` cho thoáng mắt.

---

## VI. THUẬT NGỮ CHUYÊN NGÀNH (GLOSSARY)
| Thuật ngữ | Tiếng Anh | Ý nghĩa |
| :--- | :--- | :--- |
| External Stylesheet | External CSS (`style.css`) | Tệp CSS ngoài dùng chung cho toàn dự án web |
| Flexbox Layout | `display: flex;` | Kỹ thuật dàn trang xếp cột hàng ngang CSS |
| Navigation Bar | Navigation Bar (`#menu`) | Thanh điều hướng liên kết danh mục |
| Copyright | Copyright | Dòng thông báo bản quyền ở chân trang |

---

## VII. NỘI DUNG CỐT LÕI CẦN GHI NHỚ
1. Mọi trang HTML trong dự án nên liên kết tới **CÙNG MỘT tệp CSS ngoài** để đảm bảo tính đồng bộ giao diện.
2. Dùng `<div>` chia khối lớn trước, thêm chi tiết khối con sau. Tổng % chiều rộng các khối con $\le 100\%$.
3. Luôn kiểm tra liên kết 2 chiều giữa Trang chủ và các Trang con.
