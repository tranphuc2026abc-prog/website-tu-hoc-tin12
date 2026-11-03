# BÀI 10: TẠO LIÊN KẾT

## I. MỤC TIÊU BÀI HỌC
- **Về kiến thức:** Nắm vững khái niệm siêu văn bản, siêu liên kết, cấu trúc thẻ `<a>`, thuộc tính `href`, phân biệt đường dẫn tuyệt đối và đường dẫn tương đối, liên kết trong và liên kết ngoài.
- **Về kỹ năng:** Tạo được liên kết tới trang web khác, liên kết tới vị trí bất kỳ trong cùng trang web (dùng `id`), liên kết tải tệp và liên kết gửi email.
- **Về thái độ:** Ý thức kiểm tra tính hoạt động của các đường dẫn, tránh liên kết gãy.

---

## II. KIẾN THỨC TRỌNG TÂM
1. **Khái niệm Siêu văn bản & Siêu liên kết:**
   - *Siêu văn bản (Hypertext):* Văn bản chứa nhiều dạng dữ liệu (chữ, ảnh, âm thanh) và chứa các siêu liên kết tới văn bản khác.
   - *Siêu liên kết (Hyperlink):* Tham chiếu cho phép nháy chuột để chuyển hướng nhanh tới một vị trí hoặc tài nguyên khác.
2. **Cấu trúc thẻ tạo liên kết `<a>`:**
   - Cú pháp: `<a href="URL" target="kiểu_mở" title="chú_thích">Tên_hiển_thị</a>`
   - Thuộc tính `href`: Cung cấp địa chỉ (URL) của trang web hoặc tài nguyên đích.
   - Thuộc tính `target="_blank"`: Mở liên kết trong một tab/cửa sổ trình duyệt mới.
   - Thuộc tính `title`: Hiển thị văn bản gợi ý (tooltip) khi di chuột vào liên kết.
3. **Phân biệt hai loại Đường dẫn (URL):**
   - *Đường dẫn tuyệt đối:* Cung cấp địa chỉ đầy đủ bao gồm cả giao thức (`https://`) và tên miền (ví dụ: `https://example.com/document.html`). Dùng cho liên kết ngoài.
   - *Đường dẫn tương đối:* Mô tả vị trí tài nguyên so với vị trí tệp HTML hiện tại. Dùng cho liên kết nội bộ trong cùng website.
     + Cùng thư mục: `href="bai2.html"`
     + Thư mục con dưới 1 cấp: `href="docs/bai2.html"`
     + Thư mục cha trên 1 cấp: `href="../index.html"`
4. **Các cách tạo liên kết:**
   - *Liên kết ngoài (External link):* Trỏ tới website khác trên Internet (dùng URL tuyệt đối).
   - *Liên kết trong (Internal link):* Trỏ tới trang khác trong cùng website (dùng URL tương đối).
   - *Liên kết vị trí trong cùng trang (Anchor link):* Bước 1 đặt `id="section1"` tại vị trí đích; Bước 2 tạo liên kết `href="#section1"`.
   - *Liên kết ảnh:* Đặt thẻ `<img>` vào bên trong cặp thẻ `<a>...</a>`.
   - *Liên kết Email / Tệp:* `href="mailto:user@domain.com"` hoặc `href="tailieu.pdf"`.

---

## III. GIẢI THÍCH KHÁI NIỆM CHI TIẾT
- **Mã định danh `id` (Anchor ID):** Thuộc tính gán giá trị duy nhất cho một phần tử trên trang web. Dấu `#` trong `href="#section1"` báo cho trình duyệt biết cần cuộn màn hình đến phần tử có `id="section1"` ngay trong trang hiện tại.

---

## IV. VÍ DỤ MINH HỌA THỰC TẾ
```html
<!-- 1. Liên kết ngoài mở tab mới -->
<a href="https://example.com" target="_blank" title="Trang liên kết mẫu">Truy cập Website</a>

<!-- 2. Liên kết hình ảnh -->
<a href="trangchu.html">
  <img src="images/logo.png" alt="Logo Trang chủ">
</a>

<!-- 3. Liên kết Anchor trong cùng trang -->
<a href="#phan_ket_luan">Đi đến phần Kết luận</a>
<!-- ... đoạn văn dài ... -->
<h2 id="phan_ket_luan">KẾT LUẬN BÀI VIẾT</h2>
```

---

## V. QUY TRÌNH THỰC HÀNH / THAO TÁC KỸ THUẬT
*Tạo Menu điều hướng liên kết trong cùng trang web:*
1. **Bước 1:** Đặt các mã `id` cho từng phần nội dung trong bài viết: `<h2 id="chuong1">Chương 1</h2>`, `<h2 id="chuong2">Chương 2</h2>`.
2. **Bước 2:** Ở đầu trang web, tạo danh sách các mục lục dùng thẻ `<a>` với `href="#chuong1"` và `href="#chuong2"`.
3. **Bước 3:** Nháy chuột thử vào từng mục liên kết trên trình duyệt để kiểm tra thao tác tự động cuộn màn hình đến đúng vị trí.

---

## VI. THUẬT NGỮ CHUYÊN NGÀNH (GLOSSARY)
| Thuật ngữ | Tiếng Anh | Ý nghĩa |
| :--- | :--- | :--- |
| Hyperlink | Hyperlink | Siêu liên kết |
| Absolute Path | Absolute URL / Path | Đường dẫn tuyệt đối (có `https://`) |
| Relative Path | Relative URL / Path | Đường dẫn tương đối (trong cùng website) |
| Anchor Link | Anchor Link | Liên kết mỏ neo (chuyển hướng nội bộ trang qua `#id`) |

---

## VII. NỘI DUNG CỐT LÕI CẦN GHI NHỚ
1. Thẻ `<a>` tạo liên kết, thuộc tính `href` chứa địa chỉ đích.
2. Liên kết ngoài dùng đường dẫn tuyệt đối; liên kết trong cùng website dùng đường dẫn tương đối.
3. Dùng `href="#id_name"` để liên kết nhảy đến đúng vị trí trong cùng trang.
