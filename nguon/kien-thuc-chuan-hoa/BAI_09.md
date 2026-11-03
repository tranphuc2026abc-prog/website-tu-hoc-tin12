# BÀI 9: TẠO DANH SÁCH, BẢNG

## I. MỤC TIÊU BÀI HỌC
- **Về kiến thức:** Nắm vững cú pháp tạo các loại danh sách (có thứ tự, không có thứ tự, mô tả) và cấu trúc tạo Bảng dữ liệu trong HTML.
- **Về kỹ năng:** Sử dụng thành thạo các thẻ `<ol>`, `<ul>`, `<li>`, `<table>`, `<tr>`, `<td>`, `<th>`, `<caption>` cùng các thuộc tính gộp ô `colspan`, `rowspan`.
- **Về thái độ:** Rèn luyện tư duy tổ chức dữ liệu dạng bảng biểu khoa học, rõ ràng.

---

## II. KIẾN THỨC TRỌNG TÂM
1. **Tạo Danh sách trong HTML:**
   - *Danh sách có thứ tự (Ordered List):* Cặp thẻ `<ol></ol>`, các mục dùng `<li></li>`.
     + Thuộc tính `type`: Kiểu đánh số (`"1"`, `"A"`, `"a"`, `"I"`, `"i"`).
     + Thuộc tính `start`: Số nguyên bắt đầu đánh danh sách.
   - *Danh sách không có thứ tự (Unordered List):* Cặp thẻ `<ul></ul>`, các mục dùng `<li></li>`.
     + Thuộc tính `style="list-style-type: ..."` chọn ký tự đầu dòng: `disc` (chấm tròn đặc), `circle` (vòng tròn rỗng), `square` (ô vuông đặc), `none`.
   - *Danh sách mô tả:* Cặp thẻ `<dl>`, mục thuật ngữ `<dt>`, đoạn mô tả `<dd>`.
   - *Danh sách lồng nhau:* Đặt một danh sách `<ul>`/`<ol>` mới bên trong cặp thẻ `<li>` của danh sách cha.
2. **Tạo Bảng dữ liệu (Table) trong HTML:**
   - `<table>...</table>`: Thẻ định nghĩa bảng.
   - `<caption>...</caption>`: Tạo tiêu đề/chú thích của bảng (đặt ngay sau `<table>`).
   - `<tr>...</tr>`: Tạo một hàng trong bảng (Table Row).
   - `<th>...</th>`: Tạo ô tiêu đề hàng/cột (chữ in đậm, căn giữa mặc định).
   - `<td>...</td>`: Tạo ô chứa dữ liệu thông thường (Table Data).
3. **Gộp ô trong Bảng:**
   - `colspan="n"`: Gộp $n$ ô liên tiếp theo **chiều ngang (cột)**.
   - `rowspan="n"`: Gộp $n$ ô liên tiếp theo **chiều dọc (hàng)** (Lưu ý: Bỏ qua các thẻ `<td>` tương ứng ở các hàng bên dưới bị gộp).

---

## III. GIẢI THÍCH KHÁI NIỆM CHI TIẾT
- **Cơ chế gộp hàng `rowspan`:** Khi đặt `rowspan="2"` tại ô `<td>` ở Hàng 1, ô đó sẽ chiếm không gian kéo dài xuống Hàng 2. Vì vậy, ở mã lệnh của Hàng 2, ta phải **xóa bỏ 1 thẻ `<td>`** tương ứng để bảng không bị thừa ô gây lệch khung.

---

## IV. VÍ DỤ MINH HỌA THỰC TẾ
```html
<table border="1" style="width: 100%; border-collapse: collapse;">
  <caption>BẢNG ĐIỂM HỌC TẬP</caption>
  <tr style="background-color: #4CAF50; color: white;">
    <th rowspan="2">Họ và Tên</th>
    <th colspan="2">Điểm Thi</th>
  </tr>
  <tr style="background-color: #ddd;">
    <th>Toán</th>
    <th>Văn</th>
  </tr>
  <tr>
    <td>Nguyễn Văn An</td>
    <td>9.0</td>
    <td>8.5</td>
  </tr>
</table>
```

---

## V. QUY TRÌNH THỰC HÀNH / THAO TÁC KỸ THUẬT
*Tạo Bảng thời khóa biểu tuần:*
1. **Bước 1:** Khai báo thẻ `<table>` kèm thuộc tính `style="border: 1px solid black;"`.
2. **Bước 2:** Thêm tiêu đề `<caption>THỜI KHÓA BIỂU LỚP 12A</caption>`.
3. **Bước 3:** Tạo hàng đầu tiên `<tr>` chứa các ô tiêu đề `<th>` (Tiết, Thứ 2, Thứ 3, Thứ 4...).
4. **Bước 4:** Tạo các hàng dữ liệu `<tr>` tiếp theo chứa `<td>` môn học tương ứng. Dùng `colspan` nếu môn học kéo dài 2 tiết.

---

## VI. THUẬT NGỮ CHUYÊN NGÀNH (GLOSSARY)
| Thuật ngữ | Tiếng Anh | Ý nghĩa |
| :--- | :--- | :--- |
| Ordered List | `<ol>` | Danh sách có thứ tự |
| Unordered List | `<ul>` | Danh sách không có thứ tự |
| Colspan | `colspan` | Gộp các cột theo chiều ngang |
| Rowspan | `rowspan` | Gộp các hàng theo chiều dọc |

---

## VII. NỘI DUNG CỐT LÕI CẦN GHI NHỚ
1. `<ol>` tạo danh sách có số; `<ul>` tạo danh sách có dấu chấm đầu dòng; `<li>` khai báo từng mục.
2. Bảng được dựng bằng `<table>`, từng hàng dùng `<tr>`, ô tiêu đề dùng `<th>`, ô dữ liệu dùng `<td>`.
3. `colspan` gộp cột ngang; `rowspan` gộp hàng dọc.
