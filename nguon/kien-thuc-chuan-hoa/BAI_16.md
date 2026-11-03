# BÀI 16: ĐỊNH DẠNG KHUNG

## I. MỤC TIÊU BÀI HỌC
- **Về kiến thức:** Nắm vững phân loại phần tử khối (Block) và nội tuyến (Inline), thuộc tính `display`, các thuộc tính định dạng khung (`width`, `height`, `margin`, `padding`, `border`, `border-radius`, `box-shadow`) và cách dùng bộ chọn `class`, `id`, bộ chọn thuộc tính.
- **Về kỹ năng:** Tùy chỉnh được kích thước, khoảng cách lề và đường viền khung cho các khối phần tử trên trang web.
- **Về thái độ:** Rèn luyện tư duy thiết kế bố cục khung mạch lạc, cân đối.

---

## II. KIẾN THỨC TRỌNG TÂM
1. **Phân loại Phần tử Khối (Block) và Nội tuyến (Inline):**
   - *Phần tử khối (Block-level):* Mặc định bắt đầu từ đầu hàng mới và kéo dài hết chiều rộng trang web (ví dụ `<div>`, `<p>`, `<h1>`-`<h6>`, `<ul>`, `<li>`). Thiết lập được đầy đủ kích thước chiều rộng, chiều cao, margin, padding.
   - *Phần tử nội tuyến (Inline-level):* Nhúng nằm trên cùng dòng với văn bản, chỉ chiếm độ rộng vừa đủ chứa nội dung (ví dụ `<span>`, `<a>`, `<b>`, `<i>`, `<img>`). Không thiết lập được `width` và `height`.
   - *Thuộc tính `display`:* Thay đổi kiểu phần tử.
     + `display: block;`: Chuyển thành phần tử khối.
     + `display: inline;`: Chuyển thành phần tử nội tuyến.
     + `display: none;`: Ẩn hoàn toàn phần tử khỏi trang web.
2. **Các thuộc tính định dạng Khung (Mô hình Box Model):**
   - `width`, `height`: Chiều rộng và chiều cao của khung nội dung (đơn vị `px`, `%`, `auto`, `vh`, `vw`).
   - `padding`: Khoảng đệm trong (khoảng cách từ nội dung đến đường viền).
   - `margin`: Khoảng lề ngoài (khoảng cách từ đường viền đến các phần tử xung quanh).
   - `border`: Đường viền bao quanh (cú pháp viết gọn: `border: độ_dày kiểu_viền màu_viền;` ví dụ `border: 1px solid black;`). Kiểu viền: `solid` (nét liền), `dotted` (chấm), `dashed` (nét đứt), `double` (viền đôi).
   - `border-radius`: Bo tròn góc viền (ví dụ `border-radius: 10px;` hoặc `50%` để tạo hình tròn).
   - `box-shadow`: Đổ bóng cho khung.
3. **Các bộ chọn CSS đặc biệt:**
   - *Bộ chọn Lớp (Class selector):* Bắt đầu bằng dấu chấm `.tên_lớp`. Dùng để áp dụng kiểu dùng chung cho **nhiều phần tử** (ví dụ `.thongbao`).
   - *Bộ chọn Mã định danh (ID selector):* Bắt đầu bằng dấu thăng `#tên_id`. Dùng cho **một phần tử duy nhất** trong trang web (ví dụ `#header`).
   - *Bộ chọn Thuộc tính (Attribute selector):* Chọn phần tử có thuộc tính cụ thể (ví dụ `input[type="text"]` hay `a[target="_blank"]`).

---

## III. GIẢI THÍCH KHÁI NIỆM CHI TIẾT
- **Sự khác biệt giữa Margin và Padding:**
  - `padding`: Nằm **bên trong** đường viền `border`. Làm tăng không gian đệm giữa chữ và viền khung.
  - `margin`: Nằm **bên ngoài** đường viền `border`. Tạo khoảng cách đẩy các khối hộp khác ra xa.
  - *Mẹo căn giữa khối:* `margin: 0 auto;` (với khối có khai báo `width` cố định) sẽ tự động căn khối đó vào chính giữa màn hình.

---

## IV. VÍ DỤ MINH HỌA THỰC TẾ
```css
/* Định dạng khung thẻ quảng cáo theo class */
.card_quangcao {
  width: 300px;
  height: auto;
  padding: 15px; /* Đệm trong 15px */
  margin: 20px auto; /* Căn giữa khung */
  border: 2px solid #008CBA; /* Viền nét liền màu xanh */
  border-radius: 8px; /* Bo tròn góc 8px */
  box-shadow: 3px 3px 10px rgba(0,0,0,0.2); /* Đổ bóng nhẹ */
}

/* Bộ chọn thuộc tính nút bấm */
input[type="submit"] {
  background-color: green;
  color: white;
}
```

---

## V. QUY TRÌNH THỰC HÀNH / THAO TÁC KỸ THUẬT
*Tạo Khung thông báo Bo tròn có Bóng đổ:*
1. **Bước 1:** Trong tệp HTML, tạo thẻ `<div class="hop_thongbao">Nội dung thông báo</div>`.
2. **Bước 2:** Trong tệp CSS, định nghĩa `.hop_thongbao`:
   Đặt `width: 80%;`, `padding: 20px;`, `background-color: #f9f9f9;`.
3. **Bước 3:** Bổ sung viền và bo góc: `border-left: 5px solid red; border-radius: 5px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);`.

---

## VI. THUẬT NGỮ CHUYÊN NGÀNH (GLOSSARY)
| Thuật ngữ | Tiếng Anh | Ý nghĩa |
| :--- | :--- | :--- |
| Block vs Inline | Block / Inline Level | Khối bắt đầu dòng mới / Khối nội tuyến |
| Class Selector | `.class_name` | Bộ chọn lớp (dùng cho nhiều phần tử) |
| ID Selector | `#id_name` | Bộ chọn mã định danh (duy nhất cho 1 phần tử) |
| Margin / Padding | Margin / Padding | Lề ngoài khung / Đệm trong khung |

---

## VII. NỘI DUNG CỐT LÕI CẦN GHI NHỚ
1. Khối Block chiếm nguyên dòng, chỉnh được `width`/`height`; Khối Inline chỉ chiếm vừa đủ chữ. Dùng `display` để chuyển đổi.
2. Class dùng dấu chấm `.`, áp dụng cho nhiều phần tử; ID dùng dấu thăng `#`, duy nhất cho 1 phần tử.
3. `padding` đệm trong viền, `margin` lề ngoài viền; `border-radius` bo góc khung.
