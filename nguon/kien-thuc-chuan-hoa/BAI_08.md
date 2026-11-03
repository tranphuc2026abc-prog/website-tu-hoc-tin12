# BÀI 8: ĐỊNH DẠNG VĂN BẢN

## I. MỤC TIÊU BÀI HỌC
- **Về kiến thức:** Nắm vững các thẻ định dạng tiêu đề, đoạn văn, định dạng phông chữ, kiểu chữ và cách sử dụng thuộc tính `style` trong HTML.
- **Về kỹ năng:** Áp dụng đúng các thẻ `<hx>`, `<p>`, `<div>`, `<span>`, `<strong>`, `<em>`, `<br>`, `<hr>` để trình bày đoạn văn bản đẹp mắt, có bố cục.
- **Về thái độ:** Ý thức tổ chức trình bày văn bản khoa học, rõ ràng.

---

## II. KIẾN THỨC TRỌNG TÂM
1. **Thuộc tính của thẻ (Attribute):**
   - Bổ sung thông tin cho thẻ, nằm trong thẻ bắt đầu theo cú pháp: `tên_thuộc_tính="giá_trị"`.
   - Thuộc tính `style` dùng để thiết lập định dạng trực tiếp (màu sắc, phông chữ, cỡ chữ, căn lề).
2. **Thẻ định dạng tiêu đề `<hx>`:**
   - Gồm 6 mức từ `<h1>` đến `<h6>` (với `<h1>` là tiêu đề cấp lớn nhất, giảm dần đến `<h6>`).
   - Giúp công cụ tìm kiếm (SEO) và người đọc nắm bắt cấu trúc bài viết.
3. **Thẻ định dạng đoạn văn & khối:**
   - `<p>...</p>`: Tạo một đoạn văn hoàn chỉnh (trình duyệt tự động chèn khoảng trống nhỏ trước và sau đoạn).
   - `<div>...</div>`: Khối lớn độc lập (bắt đầu trên dòng mới).
   - `<span>...</span>`: Khối nhỏ nội tuyến (hiển thị trên cùng dòng).
   - `<br>`: Xuống dòng trực tiếp; `<hr>`: Chèn một đường kẻ ngang phân cách.
4. **Thẻ định dạng kiểu chữ:**
   - `<b>` và `<strong>`: In đậm văn bản (`<strong>` mang ý nghĩa nhấn mạnh ngữ nghĩa).
   - `<i>` và `<em>`: In nghiêng văn bản (`<em>` mang ý nghĩa nhấn mạnh).
   - `<sub>`: Chỉ số dưới (ví dụ $H_2O$); `<sup>`: Số mũ / Chỉ số trên (ví dụ $X^2$).

---

## III. GIẢI THÍCH KHÁI NIỆM CHI TIẾT
- **Phân biệt `<div>` vs `<span>`:**
  - `<div>` (Block-level): Khối dạng dòng mới, kéo dài hết chiều rộng. Thường dùng để nhóm các phần tử lớn.
  - `<span>` (Inline-level): Khối nội tuyến, chỉ chiếm độ rộng vừa đủ nội dung. Thường dùng để đổi màu hay định dạng 1 vài từ trong đoạn văn.

---

## IV. VÍ DỤ MINH HỌA THỰC TẾ
```html
<h1 style="color: blue;">Bài toán Phương trình bậc hai</h1>
<p style="color: black; font-size: 16px;">
  Cho phương trình: <strong style="color: red;">aX<sup>2</sup> + bX + c = 0</strong> (với a &ne; 0).
</p>
<hr>
<p>Công thức hóa học của nước là <em>H<sub>2</sub>O</em>.</p>
```

---

## V. QUY TRÌNH THỰC HÀNH / THAO TÁC KỸ THUẬT
*Trình bày bài thơ có công thức hóa học bằng HTML:*
1. **Bước 1:** Dùng thẻ `<h2>` làm tiêu đề bài viết.
2. **Bước 2:** Dùng thẻ `<p>` bao bọc đoạn văn; dùng `<br>` ở cuối mỗi câu thơ để xuống dòng.
3. **Bước 3:** Dùng `<sub>` và `<sup>` để biểu diễn các chỉ số công thức. Dùng `style="color: red;"` để đổi màu từ cần nhấn mạnh.

---

## VI. THUẬT NGỮ CHUYÊN NGÀNH (GLOSSARY)
| Thuật ngữ | Tiếng Anh | Ý nghĩa |
| :--- | :--- | :--- |
| Heading tag | Heading tag (`<h1>` - `<h6>`) | Thẻ tiêu đề phân cấp |
| Paragraph | Paragraph (`<p>`) | Thẻ đoạn văn |
| Inline vs Block | Inline / Block level | Khối nội tuyến / Khối dòng mới |
| Superscript / Subscript | `<sup>` / `<sub>` | Chỉ số trên (mũ) / Chỉ số dưới |

---

## VII. NỘI DUNG CỐT LÕI CẦN GHI NHỚ
1. Thẻ `<h1>` - `<h6>` tạo tiêu đề phân cấp; thẻ `<p>` tạo đoạn văn.
2. Sử dụng `<strong>` (đậm) và `<em>` (nghiêng) được khuyến khích để tăng ngữ nghĩa bài viết.
3. `<sub>` dùng cho chỉ số dưới ($H_2O$), `<sup>` dùng cho chỉ số trên ($X^2$).
