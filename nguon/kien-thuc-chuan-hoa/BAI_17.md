# BÀI 17: CÁC MỨC ƯU TIÊN CỦA BỘ CHỌN

## I. MỤC TIÊU BÀI HỌC
- **Về kiến thức:** Nắm vững bộ chọn Lớp giả (Pseudo-class), Phần tử giả (Pseudo-element), thứ tự ưu tiên khi áp dụng CSS và quy tắc tính trọng số điểm số (Specificity).
- **Về kỹ năng:** Sử dụng thành thạo các lớp giả `:hover`, `:active`, `:focus`, `:first-child`, các phần tử giả `::before`, `::after`, `::first-letter` và tính toán chính xác trọng số bộ chọn để giải quyết xung đột CSS.
- **Về thái độ:** Cẩn thận trong việc đặt tên và tổ chức bộ chọn, hạn chế lạm dụng `!important`.

---

## II. KIẾN THỨC TRỌNG TÂM
1. **Lớp giả (Pseudo-class) và Phần tử giả (Pseudo-element):**
   - *Pseudo-class (Lớp giả):* Chỉ các trạng thái đặc biệt của phần tử HTML. Cú pháp dùng **một dấu hai chấm `:`**.
     + Một số lớp giả thông dụng: `:hover` (khi di chuột qua), `:active` (khi nhấp chuột), `:focus` (khi ô nhập được chọn), `:link` (liên kết chưa truy cập), `:visited` (liên kết đã truy cập), `:first-child` (phần tử con đầu tiên), `:last-child` (phần tử con cuối cùng).
   - *Pseudo-element (Phần tử giả):* Chỉ một thành phần ảo bên trong phần tử. Cú pháp chuẩn CSS3 dùng **hai dấu hai chấm `::`**.
     + Một số phần tử giả: `::before` (chèn nội dung ảo vào trước), `::after` (chèn nội dung ảo vào sau), `::first-letter` (ký tự đầu tiên), `::first-line` (dòng đầu tiên).
2. **Các mức độ ưu tiên khi áp dụng CSS (Thứ tự giảm dần):**
   1. Từ khóa `!important` (Ưu tiên cao nhất tuyệt đối).
   2. Inline CSS (Viết trực tiếp trong thuộc tính `style="..."` của thẻ HTML).
   3. Media Query (`@media` phụ thuộc kích thước màn hình thiết bị).
   4. **Trọng số bộ chọn (Specificity Weight):** Mẫu nào có tổng điểm trọng số lớn hơn sẽ được ưu tiên.
   5. **Nguyên tắc thứ tự viết sau (Rule Order):** Nếu cùng trọng số, mẫu định dạng viết sau cùng trong mã nguồn sẽ đè lên mẫu viết trước.
   6. Tính kế thừa từ phần tử cha (Inheritance).
   7. Mặc định của trình duyệt (Thấp nhất).
3. **Cách tính điểm Trọng số Bộ chọn (Specificity Calculation):**
   - Mỗi bộ chọn ID (`#id`): **100 điểm**.
   - Mỗi bộ chọn Class (`.class`), Pseudo-class (`:hover`), Bộ chọn thuộc tính (`[type="text"]`): **10 điểm**.
   - Mỗi bộ chọn Tên thẻ/Element (`p`, `h1`), Pseudo-element (`::before`): **1 điểm**.
   - Bộ chọn đại diện `*`: **0 điểm**.

---

## III. GIẢI THÍCH KHÁI NIỆM CHI TIẾT
- **Ví dụ tính Trọng số (Specificity):**
  - Bộ chọn `p` $ightarrow 1$ Element = **1 điểm**.
  - Bộ chọn `p.noibat` $ightarrow 1$ Element + 1 Class = $1 + 10 = \mathbf{11	ext{ điểm}}$.
  - Bộ chọn `#main_menu li.active a:hover` $ightarrow 1$ ID + 1 Class + 1 Pseudo-class + 2 Elements = $100 + 10 + 10 + 1 + 1 = \mathbf{122	ext{ điểm}}$.
  - Mẫu nào có tổng điểm lớn hơn sẽ chiến thắng và được áp dụng định dạng.

---

## IV. VÍ DỤ MINH HỌA THỰC TẾ
```css
/* Pseudo-class: Đổi màu liên kết khi rê chuột */
a:hover {
  color: yellow;
  text-decoration: underline;
}

/* Pseudo-element: Thêm biểu tượng trước mỗi đoạn văn */
p::before {
  content: "• ";
  color: red;
  font-weight: bold;
}

/* Trọng số: #header p (101 điểm) sẽ đè p.text (11 điểm) */
#header p { color: red; }
p.text { color: blue; }
```

---

## V. QUY TRÌNH THỰC HÀNH / THAO TÁC KỸ THUẬT
*Tạo hiệu ứng chữ Drop-Cap (chữ cái đầu tiên phóng to) bằng Pseudo-element:*
1. **Bước 1:** Trong tệp HTML, tạo đoạn văn `<p class="doan_van">Ngày xưa có một...</p>`.
2. **Bước 2:** Trong tệp CSS, dùng phần tử giả chọn ký tự đầu:
   ```css
   p.doan_van::first-letter {
     font-size: 200%;
     font-weight: bold;
     color: #008CBA;
     float: left;
     margin-right: 5px;
   }
   ```
3. **Bước 3:** Quan sát chữ cái đầu tiên "N" tự động phóng to đẹp mắt trên trình duyệt.

---

## VI. THUẬT NGỮ CHUYÊN NGÀNH (GLOSSARY)
| Thuật ngữ | Tiếng Anh | Ý nghĩa |
| :--- | :--- | :--- |
| Pseudo-class | Pseudo-class (`:hover`) | Lớp giả chỉ trạng thái đặc biệt của phần tử |
| Pseudo-element | Pseudo-element (`::before`) | Phần tử giả định dạng thành phần nhỏ bên trong |
| Specificity | Specificity Weight | Trọng số ưu tiên của bộ chọn CSS |
| Rule Order | Rule Order | Nguyên tắc ưu tiên mẫu định dạng viết sau cùng |

---

## VII. NỘI DUNG CỐT LÕI CẦN GHI NHỚ
1. Pseudo-class dùng `:` (trạng thái động); Pseudo-element dùng `::` (thành phần ảo).
2. Trọng số điểm: ID = 100, Class/Pseudo-class = 10, Element = 1.
3. Khi trọng số bằng nhau, quy tắc viết sau trong tệp CSS sẽ đè lên quy tắc viết trước.
