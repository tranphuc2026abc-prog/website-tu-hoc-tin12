### 2.1. Quy trình hoàn thiện sản phẩm đồ họa (Ví dụ: Tờ rơi Hội chợ sách)
Một sản phẩm truyền thông (tờ rơi, áp phích, thiệp) cần đảm bảo đủ thông tin cốt lõi (tiêu đề, thời gian, địa điểm, ưu đãi) và tuân thủ trình tự lớp đối tượng từ sau ra trước:
1. **Nhiệm vụ 1 – Vẽ nền:** Vẽ hình chữ nhật vừa khít trang thiết kế, sử dụng tô màu chuyển sắc (`Gradient`) để tạo chiều sâu và độ nổi bật.
2. **Nhiệm vụ 2 – Vẽ dây cờ tam giác:** Tạo hình tam giác bằng công cụ `Polygon` (`Corners = 3`), nhân bản, đổi màu xen kẽ và sắp xếp theo dây dẫn.
3. **Nhiệm vụ 3 – Vẽ sách và giá sách:** Dùng các hình chữ nhật thay đổi kích thước, xoay góc và nhóm (`Ctrl + G`) thành cụm đối tượng trang trí.
4. **Nhiệm vụ 4 – Nhập các đoạn văn bản:** Trình bày tiêu đề, thời gian, địa điểm, nội dung ưu đãi với phông chữ, cỡ chữ và màu sắc phân cấp rõ ràng.
5. **Nhiệm vụ 5 – Vẽ bóng hội thoại:** Dùng công cụ `Pen` hoặc ghép (`Union`) hình chữ nhật bo góc/elip với hình tam giác nhọn để làm nổi bật thông tin ưu đãi.
6. **Nhiệm vụ 6 – Vẽ đoạn nét đứt phân cách:** Dùng `Pen` vẽ đoạn thẳng giữa phần thời gian và địa điểm, chỉnh `Dashes` trong thẻ `Stroke style`.
7. **Nhiệm vụ 7 – Xuất sản phẩm hoàn thiện:** Lưu tệp gốc `.svg` và xuất ra định dạng đồ họa điểm ảnh `.png` qua `File -> Export PNG Image` (`Ctrl + Shift + E`).

### 2.2. Lưu ý khi xuất tệp ảnh điểm ảnh (`.png`)
- **Phạm vi xuất (`Export area`):**
  - `Page`: Xuất đúng phần nằm trong khung trang giấy (thường dùng cho tờ rơi, thiệp).
  - `Drawing`: Xuất toàn bộ mọi đối tượng có trong bản vẽ.
  - `Selection`: Chỉ xuất đối tượng hoặc nhóm đối tượng đang chọn.
- **Độ phân giải (`DPI`):** Mặc định `96 DPI` phù hợp xem trên màn hình/web; nâng lên `300 DPI` khi cần in ấn sắc nét.
