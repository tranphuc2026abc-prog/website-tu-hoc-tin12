# BÀI 7: HTML VÀ CẤU TRÚC TRANG WEB

## I. MỤC TIÊU BÀI HỌC
- **Về kiến thức:** Nắm vững khái niệm HTML, thẻ HTML (Tag), phần tử HTML (Element), cấu trúc cây tệp HTML và vai trò của các phần mềm soạn thảo mã nguồn.
- **Về kỹ năng:** Soạn thảo được một tệp HTML chuẩn cấu trúc bằng phần mềm Notepad, Notepad++ hoặc Sublime Text và mở hiển thị trên trình duyệt web.
- **Về thái độ:** Cẩn thận, tỉ mỉ trong việc viết mã lệnh đúng cú pháp.

---

## II. KIẾN THỨC TRỌNG TÂM
1. **Khái niệm HTML:**
   - HTML (Hypertext Markup Language - Ngôn ngữ đánh dấu siêu văn bản) là bộ quy tắc dùng để thiết lập cấu trúc và hiển thị nội dung trang web. Tệp nguồn có phần mở rộng `.html` hoặc `.htm`.
2. **Thẻ đánh dấu HTML (Tag):**
   - Viết trong cặp dấu `<` và `>`.
   - *Thẻ đôi (mở và đóng):* Có dạng `<tên_thẻ> nội dung </tên_thẻ>` (ví dụ: `<p>Chào mừng</p>`).
   - *Thẻ đơn:* Không có thẻ đóng, ví dụ `<hr/>` (đường kẻ ngang), `<br/>` (xuống dòng), `<img .../>`.
   - Tên thẻ không phân biệt chữ hoa/thường nhưng mặc định nên viết chữ thường.
3. **Phần tử HTML (Element):**
   - Bao gồm toàn bộ thẻ bắt đầu, thẻ kết thúc và nội dung nằm giữa cặp thẻ đó.
4. **Cấu trúc cơ bản của tệp HTML:**
   ```html
   <!DOCTYPE html>
   <html>
     <head>
       <meta charset="utf-8">
       <title>Tên trang web</title>
     </head>
     <body>
       <!-- Nội dung hiển thị trên trang web đặt tại đây -->
     </body>
   </html>
   ```
   - `<!DOCTYPE html>`: Khai báo chuẩn định dạng HTML5.
   - `<html>`: Phần tử gốc (root) chứa toàn bộ trang web.
   - `<head>`: Chứa thông tin khai báo chung (tiêu đề `<title>`, mã hóa ký tự `<meta charset="utf-8">`).
   - `<body>`: Chứa toàn bộ nội dung hiển thị cho người dùng xem.
5. **Phần mềm soạn thảo HTML:** Notepad (có sẵn Windows), Notepad++, Sublime Text, Visual Studio Code.

---

## III. GIẢI THÍCH KHÁI NIỆM CHI TIẾT
- **Cấu trúc mô hình Cây HTML (HTML DOM Tree):** Các phần tử HTML lồng nhau tạo thành mối quan hệ Cha - Con (Parent - Child). Phần tử `<html>` là nút gốc (root), chứa 2 nhánh con chính là `<head>` và `<body>`.
- **Thẻ `<meta charset="utf-8">`:** Khai báo bảng mã mã hóa ký tự Unicode UTF-8 giúp trang web hiển thị đúng tiếng Việt có dấu mà không bị lỗi font.

---

## IV. VÍ DỤ MINH HỌA THỰC TẾ
- Mã HTML đơn giản:
  ```html
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>Trang web đầu tiên</title>
    </head>
    <body>
      <h1>Xin chào các bạn!</h1>
      <p>Đây là bài thực hành HTML đầu tiên của tôi.</p>
    </body>
  </html>
  ```

---

## V. QUY TRÌNH THỰC HÀNH / THAO TÁC KỸ THUẬT
*Soạn thảo và chạy trang HTML bằng Notepad:*
1. **Bước 1:** Mở Notepad trên máy tính.
2. **Bước 2:** Nhập đoạn mã cấu trúc HTML chuẩn ở trên.
3. **Bước 3:** Vào **File** $ightarrow$ **Save As...** $ightarrow$ Chọn *Save as type:* **All Files (*.*)** $ightarrow$ Đặt tên tệp `index.html` $ightarrow$ Nhấp **Save**.
4. **Bước 4:** Nháy đúp vào tệp `index.html` vừa lưu để mở và quan sát kết quả trên trình duyệt web (Chrome/Edge).

---

## VI. THUẬT NGỮ CHUYÊN NGÀNH (GLOSSARY)
| Thuật ngữ | Tiếng Anh | Ý nghĩa |
| :--- | :--- | :--- |
| HTML | Hypertext Markup Language | Ngôn ngữ đánh dấu siêu văn bản |
| Tag | Tag | Thẻ đánh dấu HTML |
| Element | Element | Phần tử HTML (gồm thẻ + nội dung) |
| Root element | Root element | Phần tử gốc (`<html>`) |

---

## VII. NỘI DUNG CỐT LÕI CẦN GHI NHỚ
1. HTML dùng các thẻ (tag) để dựng cấu trúc trang web. Tệp tin có đuôi `.html`.
2. Cấu trúc chuẩn tệp HTML gồm 2 nhánh chính trong `<html>`: `<head>` (chứa khai báo) và `<body>` (chứa nội dung hiển thị).
3. Đặt `<meta charset="utf-8">` để hiển thị đúng tiếng Việt.
