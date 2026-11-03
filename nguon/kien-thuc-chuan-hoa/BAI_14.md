# BÀI 14: ĐỊNH DẠNG VĂN BẢN BẰNG CSS

## I. MỤC TIÊU BÀI HỌC
- **Về kiến thức:** Nắm vững các thuộc tính CSS định dạng phông chữ, màu chữ, dòng văn bản, hiểu rõ tính kế thừa (Inheritance) và các quy tắc ưu tiên CSS (`*`, `!important`).
- **Về kỹ năng:** Sử dụng thành thạo các thuộc tính `font-family`, `font-size`, `font-style`, `font-weight`, `color`, `line-height`, `text-align`, `text-decoration`, `text-indent`.
- **Về thái độ:** Định hình tư duy thẩm mỹ trình bày văn bản khoa học, dễ đọc.

---

## II. KIẾN THỨC TRỌNG TÂM
1. **Các thuộc tính định dạng Phông chữ (Font):**
   - `font-family`: Chọn phông chữ. Được chia thành 5 họ phông cơ bản: `serif` (chữ có chân như Times New Roman), `sans-serif` (chữ không chân như Arial, Calibri), `monospace` (chữ chiều rộng đều như Courier), `cursive` (viết tay), `fantasy`.
   - `font-size`: Cỡ chữ (đơn vị tuyệt đối: `px`, `pt`, `cm`; đơn vị tương đối: `em`, `rem`, `%`). Cỡ mặc định là `medium` (16px).
   - `font-style`: Kiểu chữ (`normal` - thường, `italic` - nghiêng).
   - `font-weight`: Độ đậm nét chữ (`normal`, `bold`, hoặc giá trị số từ `100` đến `900`).
2. **Thuộc tính định dạng Màu chữ & Dòng văn bản:**
   - `color`: Đặt màu chữ (tên màu tiếng Anh, mã Hex `#FF0000`, hoặc `rgb()`).
   - `line-height`: Chiều cao dòng (khoảng cách giữa các dòng văn bản, mặc định tương đương `2em`).
   - `text-align`: Căn lề văn bản (`left`, `center`, `right`, `justify` - căn đều 2 bên).
   - `text-decoration`: Trang trí đường kẻ (`none` - không gạch, `underline` - gạch chân, `overline` - gạch trên, `line-through` - gạch ngang thân chữ).
   - `text-indent`: Thụt lề dòng đầu tiên của đoạn văn.
3. **Tính kế thừa & Mức ưu tiên CSS:**
   - *Tính kế thừa:* Mẫu CSS áp dụng cho phần tử cha (ví dụ `<body>`) sẽ tự động kế thừa xuống các phần tử con, cháu (`<h1>`, `<p>`) trừ các thuộc tính không kế thừa.
   - *Ký hiệu `*` (Universal selector):* Áp dụng cho mọi phần tử chưa có định dạng riêng, có **mức ưu tiên thấp nhất**.
   - *Từ khóa `!important`:* Đặt ngay sau giá trị thuộc tính để gán **mức ưu tiên cao nhất tuyệt đối**, bỏ qua mọi thứ tự viết sau.

---

## III. GIẢI THÍCH KHÁI NIỆM CHI TIẾT
- **Đơn vị tương đối `em` vs `rem`:**
  - `em`: Kích thước tính tương đối so với cỡ chữ của phần tử cha trực tiếp chứa nó.
  - `rem` (root em): Kích thước tính tương đối so với cỡ chữ của phần tử gốc `<html>` (thường là 16px). Dùng `rem` giúp giao diện tương thích (responsive) tốt hơn.

---

## IV. VÍ DỤ MINH HỌA THỰC TẾ
```css
/* Định dạng phông chữ chung cho toàn bộ trang web */
body {
  font-family: Calibri, Arial, sans-serif;
  font-size: 16px;
  color: #333333;
}

/* Định dạng tiêu đề h1 */
h1 {
  color: red !important; /* Ưu tiên tuyệt đối màu đỏ */
  text-align: center;
  font-size: 2rem;
}

/* Định dạng đoạn văn */
p {
  line-height: 1.6;
  text-align: justify;
  text-indent: 1.5em;
}
```

---

## V. QUY TRÌNH THỰC HÀNH / THAO TÁC KỸ THUẬT
*Trình bày đoạn văn chuẩn xuất bản web bằng CSS:*
1. **Bước 1:** Trong tệp CSS, định dạng thẻ `body` sử dụng họ phông không chân `font-family: Arial, sans-serif;`.
2. **Bước 2:** Định dạng các đoạn văn `p` căn đều 2 bên `text-align: justify;`, giãn dòng `line-height: 1.5;` và thụt đầu dòng `text-indent: 20px;`.
3. **Bước 3:** Loại bỏ gạch chân mặc định của các thẻ liên kết `a` bằng `text-decoration: none;`.

---

## VI. THUẬT NGỮ CHUYÊN NGÀNH (GLOSSARY)
| Thuật ngữ | Tiếng Anh | Ý nghĩa |
| :--- | :--- | :--- |
| Sans-serif | Sans-serif | Họ phông chữ không có chân nét |
| Inheritance | Inheritance | Tính kế thừa thuộc tính CSS từ cha xuống con |
| Text-align | Text-align | Thuộc tính căn lề văn bản |
| !important | !important | Từ khóa đánh dấu thuộc tính ưu tiên cao nhất |

---

## VII. NỘI DUNG CỐT LÕI CẦN GHI NHỚ
1. Nên chọn phông không chân (`sans-serif`) như Arial, Calibri cho văn bản web để dễ đọc.
2. Các phần tử con tự động kế thừa thuộc tính định dạng (phông, màu) từ phần tử cha.
3. Ký hiệu `*` có mức ưu tiên thấp nhất; từ khóa `!important` có mức ưu tiên cao nhất.
