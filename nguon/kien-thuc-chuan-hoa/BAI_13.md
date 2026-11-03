# BÀI 13: KHÁI NIỆM, VAI TRÒ CỦA CSS

## I. MỤC TIÊU BÀI HỌC
- **Về kiến thức:** Nắm vững khái niệm CSS (Cascading Style Sheets), vai trò tách biệt giữa nội dung (HTML) và trình bày (CSS), cú pháp mẫu định dạng CSS và 3 cách thiết lập CSS.
- **Về kỹ năng:** Khai báo và sử dụng thành thạo 3 cách nhúng CSS: CSS nội tuyến (Inline), CSS trong (Internal) và CSS ngoài (External).
- **Về thái độ:** Tự giác viết mã CSS gọn gàng, chuẩn hóa để dễ bảo trì trang web.

---

## II. KIẾN THỨC TRỌNG TÂM
1. **Khái niệm & Vai trò của CSS:**
   - *Khái niệm:* CSS (Cascading Style Sheets - Bảng kiểu dáng xếp tầng) là ngôn ngữ định dạng độc lập với chuẩn HTML, dùng để thiết lập giao diện (màu sắc, phông chữ, kích thước, bố cục) cho trang web.
   - *Vai trò:*
     + Tách biệt phần nội dung (HTML) và phần trình bày giao diện (CSS).
     + Thiết lập một lần, áp dụng đồng bộ cho nhiều phần tử hoặc nhiều trang web.
     + Giúp việc thiết kế, chỉnh sửa và bảo trì website nhanh chóng, chuyên nghiệp.
2. **Cấu trúc tổng quát của một mẫu định dạng CSS:**
   ```css
   Bộ_chọn (Selector) {
     Thuộc_tính_1: Giá_trị_1;
     Thuộc_tính_2: Giá_trị_2;
   }
   ```
   - *Bộ chọn (Selector):* Quy định các thẻ HTML nào sẽ được chọn để áp dụng định dạng.
   - *Vùng mô tả (Declaration block):* Nằm trong cặp dấu `{}` gồm các cặp `Thuộc_tính: Giá_trị;` phân cách bởi dấu chấm phẩy `;`.
3. **Ba cách thiết lập CSS:**
   - **CSS ngoài (External CSS):** Viết các mẫu CSS trong tệp riêng có đuôi `.css`. Liên kết vào tệp HTML bằng thẻ `<link rel="stylesheet" href="style.css">` đặt trong phần `<head>`. *Ưu điểm tối ưu nhất cho toàn bộ website.*
   - **CSS trong (Internal CSS):** Viết các mẫu CSS bên trong cặp thẻ `<style>...</style>` đặt trong phần `<head>` của tệp HTML. *Chỉ áp dụng cho trang hiện tại.*
   - **CSS nội tuyến (Inline CSS):** Khai báo thuộc tính trực tiếp trong thẻ HTML bằng `style="..."`. *Ưu tiên cao nhưng khó quản lý.*

---

## III. GIẢI THÍCH KHÁI NIỆM CHI TIẾT
- **Mô hình Hộp (Box Model):** Khái niệm nền tảng của CSS coi mọi phần tử HTML là một hộp hình chữ nhật gồm 4 lớp từ trong ra ngoài: Nội dung (`content`), Đệm trong (`padding`), Đường viền (`border`), Lề ngoài (`margin`).

---

## IV. VÍ DỤ MINH HỌA THỰC TẾ
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Ví dụ CSS</title>
  <!-- 1. CSS ngoài -->
  <link rel="stylesheet" href="style.css">
  
  <!-- 2. CSS trong -->
  <style>
    h1 {
      color: red;
      font-size: 28px;
    }
    p {
      color: blue;
      text-indent: 15px;
    }
  </style>
</head>
<body>
  <h1>Tiêu đề màu đỏ</h1>
  <p>Đoạn văn màu xanh thụt lề 15px.</p>
  <!-- 3. CSS nội tuyến -->
  <p style="background-color: yellow;">Đoạn văn có màu nền vàng nội tuyến.</p>
</body>
</html>
```

---

## V. QUY TRÌNH THỰC HÀNH / THAO TÁC KỸ THUẬT
*Tạo và liên kết tệp CSS ngoài cho Website:*
1. **Bước 1:** Tạo một tệp văn bản mới, viết các mẫu CSS (không chứa thẻ `<style>`) và lưu tên tệp là `style.css`.
2. **Bước 2:** Mở tệp `index.html`, chèn thẻ sau vào giữa cặp thẻ `<head>...</head>`:
   `<link rel="stylesheet" href="style.css">`
3. **Bước 3:** Lưu cả 2 tệp, mở `index.html` trên trình duyệt và quan sát các mẫu định dạng từ `style.css` được tự động áp dụng.

---

## VI. THUẬT NGỮ CHUYÊN NGÀNH (GLOSSARY)
| Thuật ngữ | Tiếng Anh | Ý nghĩa |
| :--- | :--- | :--- |
| CSS | Cascading Style Sheets | Ngôn ngữ định dạng bảng kiểu dáng xếp tầng |
| Selector | Selector | Bộ chọn trong CSS |
| Declaration Block | Declaration Block | Vùng mô tả định dạng `{ thuộc tính: giá trị; }` |
| External CSS | External CSS | CSS ngoài (lưu trong tệp `.css` riêng) |

---

## VII. NỘI DUNG CỐT LÕI CẦN GHI NHỚ
1. CSS dùng để định dạng trình bày trang web, tách biệt khỏi phần nội dung HTML.
2. Cú pháp: `Bộ_chọn { Thuộc_tính: Giá_trị; }`.
3. Có 3 cách nhúng CSS: **Ngoại bối (External)** dùng thẻ `<link>`, **Nội bối (Internal)** dùng `<style>`, **Nội tuyến (Inline)** dùng `style=""`.
