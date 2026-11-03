# BÀI 11: CHÈN TỆP TIN ĐA PHƯƠNG TIỆN VÀ KHUNG NỘI TUYẾN VÀO TRANG WEB

## I. MỤC TIÊU BÀI HỌC
- **Về kiến thức:** Nắm vững cách chèn hình ảnh, tệp âm thanh (audio), video và khung nội tuyến (iframe) vào trang web; hiểu tác dụng của các thuộc tính liên quan.
- **Về kỹ năng:** Chèn và tối ưu được hình ảnh (`<img>`), âm thanh (`<audio>`), video (`<video>`) và nhúng khung nội tuyến (`<iframe>`) vào tệp HTML.
- **Về thái độ:** Chú ý tối ưu hóa dung lượng tệp đa phương tiện để không làm chậm tốc độ tải trang.

---

## II. KIẾN THỨC TRỌNG TÂM
1. **Chèn tệp Ảnh (`<img>`):**
   - Định dạng hỗ trợ phổ biến: PNG, JPEG, GIF, WebP.
   - Thẻ đơn `<img>` với thuộc tính bắt buộc `src="đường_dẫn_ảnh"`.
   - Thuộc tính `alt`: Văn bản thay thế hiển thị khi ảnh bị lỗi hoặc cho trình đọc màn hình.
   - Thuộc tính `width`, `height`: Thiết lập kích thước (pixel). Khuyên dùng đường dẫn tương đối.
2. **Chèn Âm thanh (`<audio>`) và Video (`<video>`):**
   - Định dạng âm thanh: MP3, WAV, OGG.
   - Định dạng video: MP4, WebM, OGG (MP4 phổ biến nhất).
   - Thuộc tính điều khiển:
     + `controls`: Hiển thị thanh điều khiển (nút Play/Pause, âm lượng, thời lượng).
     + `autoplay`: Tự động phát khi trang web tải xong.
     + `muted`: Tắt tiếng mặc định (cần thiết nếu muốn `autoplay` chạy trên Chrome).
     + `poster="anh.jpg"`: Ảnh hiển thị đại diện trước khi bấm phát video.
   - Thẻ con `<source src="..." type="...">`: Cho phép khai báo nhiều định dạng tệp dự phòng cho trình duyệt.
3. **Khung nội tuyến (`<iframe>`):**
   - Khung nhìn cho phép nhúng một tài nguyên/trang web khác trực tiếp vào trang web hiện tại (ví dụ: video trực tuyến, bản đồ trực tuyến).
   - Cú pháp: `<iframe src="URL" width="width" height="height"></iframe>`.
   - Phối hợp với thẻ `<a>`: Đặt `target="tên_iframe"` trên thẻ `<a>` để khi bấm liên kết, nội dung sẽ hiển thị ngay bên trong khung `<iframe>`.

---

## III. GIẢI THÍCH KHÁI NIỆM CHI TIẾT
- **Khung nội tuyến (Inline Frame - `<iframe>`):** Cửa sổ nhúng một trang web hoàn chỉnh khác vào trang web gốc.
- **Lazy Loading (`loading="lazy"`):** Thuộc tính giúp trình duyệt hoãn tải hình ảnh/iframe cho đến khi người dùng cuộn màn hình đến gần vị trí đó, giúp tăng tốc độ tải trang ban đầu.

---

## IV. VÍ DỤ MINH HỌA THỰC TẾ
```html
<!-- Chèn ảnh có văn bản thay thế -->
<img src="images/ha_long.jpg" alt="Vịnh Hạ Long" width="600">

<!-- Chèn Video MP4 có điều khiển và ảnh poster -->
<video width="640" height="360" controls poster="images/poster.jpg">
  <source src="videos/clip.mp4" type="video/mp4">
  Trình duyệt của bạn không hỗ trợ thẻ video.
</video>

<!-- Nhúng Video trực tuyến qua iframe -->
<iframe width="560" height="315" src="https://example.com/embed/video" 
        title="Video trực tuyến" frameborder="0" allowfullscreen></iframe>
```

---

## V. QUY TRÌNH THỰC HÀNH / THAO TÁC KỸ THUẬT
*Tạo Trang chủ chứa Menu và Khung nội tuyến hiển thị nội dung:*
1. **Bước 1:** Tạo tệp `index.html`. Trong phần `<body>`, chèn cặp thẻ `<iframe name="khung_hien_thi" width="800" height="500"></iframe>`.
2. **Bước 2:** Phía trên iframe, tạo các liên kết menu:
   `<a href="the_thao.html" target="khung_hien_thi">CLB Thể Thao</a>`
   `<a href="nghe_thuat.html" target="khung_hien_thi">CLB Nghệ Thuật</a>`.
3. **Bước 3:** Mở `index.html` trên trình duyệt, bấm thử từng liên kết và kiểm tra nội dung trang con nạp ngay trong khung iframe.

---

## VI. THUẬT NGỮ CHUYÊN NGÀNH (GLOSSARY)
| Thuật ngữ | Tiếng Anh | Ý nghĩa |
| :--- | :--- | :--- |
| Inline Frame | `<iframe>` | Khung nội tuyến nhúng trang web |
| Controls | `controls` | Thuộc tính hiển thị thanh điều khiển media |
| Poster | `poster` | Ảnh bìa đại diện cho video trước khi phát |
| Alt Text | `alt` (Alternative Text) | Văn bản mô tả thay thế cho tệp hình ảnh |

---

## VII. NỘI DUNG CỐT LÕI CẦN GHI NHỚ
1. Thẻ `<img>` chèn ảnh (cần có `src` và `alt`); thẻ `<audio>` và `<video>` chèn âm thanh/phim (nên có `controls`).
2. Tệp video phổ biến nhất là `.mp4`, âm thanh phổ biến nhất là `.mp3`.
3. Thẻ `<iframe>` nhúng tài nguyên bên ngoài (bản đồ, video) vào trang web hiện tại.
