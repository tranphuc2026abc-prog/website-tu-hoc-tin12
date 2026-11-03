# BÀI 15: TẠO MÀU CHO CHỮ VÀ NỀN

## I. MỤC TIÊU BÀI HỌC
- **Về kiến thức:** Nắm vững các hệ thống biểu diễn màu trong CSS (RGB, HSL, Hex, tên màu), cách phối màu cho chữ, nền, viền và các bộ chọn tổ hợp ghép phần tử.
- **Về kỹ năng:** Khai báo thành thạo các thuộc tính `color`, `background-color`, `border`, `rgba()`, `hsla()` và viết được bộ chọn tổ hợp có quan hệ.
- **Về thái độ:** Ý thức chọn lựa màu sắc tương phản hài hòa, đảm bảo tính thẩm mỹ và dễ đọc.

---

## II. KIẾN THỨC TRỌNG TÂM
1. **Các hệ thống biểu diễn màu trong CSS:**
   - *Tên màu (Color names):* Sử dụng các tên Tiếng Anh có sẵn (140 tên màu chuẩn trong CSS3 như `red`, `blue`, `green`, `yellow`, `black`, `white`, `purple`).
   - *Hệ màu RGB (Red, Green, Blue):* Hoạt động theo nguyên lý tổng hợp ánh sáng 3 màu cơ bản với giá trị từ `0` đến `255`.
     + Cú pháp: `rgb(r, g, b)` (ví dụ `rgb(255, 0, 0)` là màu đỏ).
     + Cú pháp mã Hex: `#rrggbb` (hệ cơ số 16, ví dụ `#FF0000` là màu đỏ, `#000000` là màu đen, `#FFFFFF` là màu trắng).
   - *Hệ màu HSL (Hue, Saturation, Lightness):* Dựa trên cảm nhận màu sắc con người.
     + `H (Hue)`: Sắc độ trên vòng tròn màu ($0^\circ - 360^\circ$).
     + `S (Saturation)`: Độ bão hòa ($0\%$ là xám $ightarrow 100\%$ màu nguyên chất).
     + `L (Lightness)`: Độ sáng ($0\%$ là đen $ightarrow 50\%$ đúng màu $ightarrow 100\%$ là trắng).
     + Cú pháp: `hsl(hue, saturation%, lightness%)` (ví dụ `hsl(0, 100%, 50%)` là màu đỏ).
   - *Kênh độ trong suốt Alpha (`RGBA` / `HSLA`):* Thêm giá trị $a$ từ $0$ (trong suốt hoàn toàn) đến $1$ (đặc đục hoàn toàn), ví dụ `rgba(0, 0, 0, 0.5)` tạo màu đen mờ $50\%$.
2. **Các thuộc tính áp dụng màu:**
   - `color`: Màu chữ (màu nổi).
   - `background-color`: Màu nền của phần tử.
   - `border`: Màu khung viền bao quanh.
3. **Các bộ chọn tổ hợp có quan hệ (Bảng 15.1):**
   - `A B` (Cách nhau bởi dấu cách): Chọn tất cả phần tử `B` là **con hoặc cháu** nằm bên trong `A`.
   - `A > B` (Dấu lớn hơn): Chọn phần tử `B` là **con trực tiếp** của `A`.
   - `A + B` (Dấu cộng): Chọn phần tử `B` nằm **ngay sau** `A` (anh em kề cận).
   - `A ~ B` (Dấu ngã): Chọn tất cả phần tử `B` là **anh em đứng sau** `A`.

---

## III. GIẢI THÍCH KHÁI NIỆM CHI TIẾT
- **Sự khác biệt Bộ chọn `div p` vs `div > p`:**
  - `div p`: Chọn tất cả các thẻ `<p>` nằm bên trong `<div>`, bất kể nằm ở cấp con hay cấp cháu sâu bên trong.
  - `div > p`: Chỉ chọn những thẻ `<p>` là con trực tiếp ở cấp ngay bên dưới `<div>`.

---

## IV. VÍ DỤ MINH HỌA THỰC TẾ
```css
/* Đặt màu chữ và màu nền cho thẻ div */
div.thongbao {
  color: #003366; /* Màu xanh đậm Hex */
  background-color: rgba(240, 240, 240, 0.8); /* Nền xám trong suốt 80% */
  border: 2px solid hsl(120, 100%, 25%); /* Viền xanh lá */
}

/* Bộ chọn con trực tiếp */
ul.main_menu > li {
  background-color: yellow;
}
```

---

## V. QUY TRÌNH THỰC HÀNH / THAO TÁC KỸ THUẬT
*Tạo nút bấm có hiệu ứng đổi màu khi rê chuột (Hover):*
1. **Bước 1:** Định dạng màu mặc định cho nút:
   `button { background-color: #008CBA; color: white; border: none; padding: 10px 20px; }`
2. **Bước 2:** Thêm bộ chọn giả `:hover` để đổi màu nền khi con trỏ di chuột vào:
   `button:hover { background-color: #005f7f; }`
3. **Bước 3:** Kiểm tra tương tác màu sắc trên trình duyệt.

---

## VI. THUẬT NGỮ CHUYÊN NGÀNH (GLOSSARY)
| Thuật ngữ | Tiếng Anh | Ý nghĩa |
| :--- | :--- | :--- |
| RGB / RGBA | Red Green Blue (Alpha) | Hệ màu Đỏ - Xanh lá - Xanh dương (Độ trong suốt) |
| HSL / HSLA | Hue Saturation Lightness | Hệ màu Sắc độ - Độ bão hòa - Độ sáng |
| Hex Code | Hexadecimal Color Code | Mã màu hệ cơ số 16 (dạng `#RRGGBB`) |
| Background-color | Background Color | Thuộc tính định dạng màu nền |

---

## VII. NỘI DUNG CỐT LÕI CẦN GHI NHỚ
1. Có 4 cách đặt màu: Tên màu, Mã Hex (`#RRGGBB`), `rgb()` và `hsl()`.
2. Thêm kênh Alpha (`rgba()`, `hsla()`) để điều chỉnh độ trong suốt từ $0$ đến $1$.
3. Bộ chọn `A > B` chọn con trực tiếp; `A B` chọn tất cả con cháu.
