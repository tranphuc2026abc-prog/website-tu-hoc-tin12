# BÀI 12: TẠO BIỂU MẪU

## I. MỤC TIÊU BÀI HỌC
- **Về kiến thức:** Nắm vững khái niệm biểu mẫu web (Web Form), vai trò thu thập dữ liệu người dùng, cấu trúc thẻ `<form>`, các thẻ phần tử nhập liệu `<input>`, `<label>`, `<select>`, `<textarea>`, `<fieldset>`.
- **Về kỹ năng:** Xây dựng được các biểu mẫu hoàn chỉnh như Biểu mẫu Đăng ký tài khoản, Đăng ký môn học, Phản hồi liên hệ.
- **Về thái độ:** Ý thức kiểm tra tính hợp lệ của dữ liệu đầu vào để bảo mật hệ thống.

---

## II. KIẾN THỨC TRỌNG TÂM
1. **Khái niệm Biểu mẫu Web (Form):**
   - Công cụ trong HTML dùng để thu thập thông tin do người dùng nhập vào (đăng ký, đăng nhập, tìm kiếm, đặt hàng, khảo sát) và gửi về máy chủ xử lý.
2. **Cấu trúc thẻ `<form>`:**
   - Cú pháp: `<form action="URL_xử_lý" method="GET/POST"> ... </form>`
   - Thuộc tính `action`: Địa chỉ URL của trang/script trên máy chủ sẽ nhận và xử lý dữ liệu.
   - Thuộc tính `method`: Phương thức gửi dữ liệu (`GET` hoặc `POST`).
3. **Các phần tử nhập liệu thông dụng:**
   - `<label for="id_input">Tên nhãn</label>`: Đặt nhãn hướng dẫn cho ô nhập liệu. Khi bấm vào nhãn, con trỏ sẽ nhảy vào ô tương ứng.
   - `<input type="..." name="..." id="...">`:
     + `type="text"`: Ô nhập văn bản 1 dòng.
     + `type="password"`: Ô nhập mật khẩu (mã hóa ký tự dạng dấu chấm/sao).
     + `type="radio"`: Nút chọn 1 trong nhiều lựa chọn (các nút cùng nhóm phải có chung thuộc tính `name`).
     + `type="checkbox"`: Hộp kiểm cho phép chọn nhiều lựa chọn đồng thời.
     + `type="submit"`: Nút bấm gửi biểu mẫu đi.
     + `type="button"` / `type="reset"`: Nút bấm thực thi/làm lại.
     + `type="number"`, `type="email"`, `type="date"`, `type="file"`.
   - `<select name="...">` và `<option value="...">`: Tạo danh sách lựa chọn thả xuống (Dropdown).
   - `<textarea name="..." rows="..." cols="...">`: Ô nhập văn bản nhiều dòng (ý kiến, ghi chú).
   - `<fieldset>` và `<legend>`: Nhóm các trường liên quan và đặt tiêu đề khung bao quanh.
4. **Các thuộc tính hỗ trợ kiểm tra dữ liệu:**
   - `required`: Bắt buộc người dùng phải điền, không được bỏ trống.
   - `placeholder="..."`: Chữ gợi ý mờ nằm trong ô nhập.
   - `value="..."`: Giá trị mặc định hoặc giá trị gửi đi của phần tử.

---

## III. GIẢI THÍCH KHÁI NIỆM CHI TIẾT
- **Thuộc tính `name` vs `id` trong Input:**
  - `name`: Tên biến đại diện cho dữ liệu của ô đó khi gửi về máy chủ (Server nhận dữ liệu theo cặp `name=value`).
  - `id`: Mã định danh duy nhất của phần tử trên trang web, dùng để kết nối với `<label for="...">` hoặc định dạng CSS/JavaScript.

---

## IV. VÍ DỤ MINH HỌA THỰC TẾ
```html
<form action="xuly.php" method="POST">
  <fieldset>
    <legend>Thông tin Đăng ký</legend>
    
    <label for="username">Họ và tên:</label>
    <input type="text" id="username" name="fullname" placeholder="Nhập họ tên" required><br><br>
    
    <label for="pass">Mật khẩu:</label>
    <input type="password" id="pass" name="password" required><br><br>
    
    <label>Giới tính:</label>
    <input type="radio" id="nam" name="gender" value="Nam"> <label for="nam">Nam</label>
    <input type="radio" id="nu" name="gender" value="Nữ"> <label for="nu">Nữ</label><br><br>
    
    <label for="khoahoc">Chọn khóa học:</label>
    <select id="khoahoc" name="course">
      <option value="tin12">Tin học 12</option>
      <option value="laptrinh">Lập trình Web</option>
    </select><br><br>
    
    <button type="submit">Đăng ký ngay</button>
  </fieldset>
</form>
```

---

## V. QUY TRÌNH THỰC HÀNH / THAO TÁC KỸ THUẬT
*Tạo Biểu mẫu Đăng ký môn thi:*
1. **Bước 1:** Khai báo thẻ `<form>` chứa `<fieldset>` và `<legend>ĐĂNG KÝ MÔN THI</legend>`.
2. **Bước 2:** Tạo các ô nhập văn bản bắt buộc: Họ tên, Số CCCD bằng `<input type="text" required>`.
3. **Bước 3:** Tạo danh sách chọn Giới tính bằng `<select>` và chọn các Môn thi tự chọn bằng `<input type="checkbox">`.
4. **Bước 4:** Tạo nút gửi dữ liệu bằng `<button type="submit">Gửi đăng ký</button>`.

---

## VI. THUẬT NGỮ CHUYÊN NGÀNH (GLOSSARY)
| Thuật ngữ | Tiếng Anh | Ý nghĩa |
| :--- | :--- | :--- |
| Web Form | Web Form (`<form>`) | Biểu mẫu thu thập dữ liệu trên trang web |
| Radio Button | Radio Button (`type="radio"`) | Nút chọn duy nhất 1 trong nhóm |
| Checkbox | Checkbox (`type="checkbox"`) | Hộp kiểm chọn nhiều lựa chọn đồng thời |
| Dropdown List | Dropdown List (`<select>`) | Danh sách lựa chọn thả xuống |

---

## VII. NỘI DUNG CỐT LÕI CẦN GHI NHỚ
1. Thẻ `<form>` tạo biểu mẫu; thuộc tính `action` chứa URL xử lý, `method` chọn cách gửi.
2. Thuộc tính `type` trong `<input>` quyết định kiểu ô nhập (text, password, radio, checkbox, submit).
3. Luôn gán `<label for="id">` kết nối với `<input id="...">` và thêm `required` cho các trường bắt buộc.
