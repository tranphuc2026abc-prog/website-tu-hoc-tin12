# BÀI 1: THÔNG TIN VÀ XỬ LÍ THÔNG TIN

## 1. Mục tiêu học tập và yêu cầu cần đạt
- Phân biệt được **thông tin** và **dữ liệu**; nêu được ví dụ minh họa mối quan hệ phụ thuộc tương đối và tính toàn vẹn của thông tin.
- Trình bày được 3 bước trong quá trình xử lí thông tin của máy tính: *Tiếp nhận dữ liệu → Xử lí dữ liệu → Đưa ra kết quả*.
- Nắm vững các đơn vị đo lượng dữ liệu từ **bit, byte** đến **KB, MB, GB, TB, PB** và thực hiện thành thạo quy đổi theo hệ số $2^{10} = 1024$.
- Giải thích được ưu điểm của thiết bị số trong lưu trữ, xử lí và truyền thông tin so với phương thức truyền thống.

## 2. Kiến thức trọng tâm
### 2.1. Thông tin và dữ liệu
- **Quá trình xử lí thông tin của máy tính** gồm 3 bước:
  1. **Tiếp nhận dữ liệu** (Input).
  2. **Xử lí dữ liệu** (Process).
  3. **Đưa ra kết quả** (Output).
- Máy tính không tự nhận thức được mà chỉ là công cụ hỗ trợ con người trong quá trình nhận thức.
- **Phân biệt**:
  - *Dữ liệu*: là thông tin đã được đưa vào máy tính để máy tính nhận biết và xử lí được (hoặc các yếu tố thể hiện, xác định thông tin).
  - *Thông tin*: là ý nghĩa của dữ liệu.
- **Tính chất**: Thông tin và dữ liệu có tính độc lập tương đối (cùng một thông tin có thể biểu diễn bằng nhiều dạng dữ liệu khác nhau; ngược lại một dữ liệu có thể mang nhiều thông tin khác nhau tùy ngữ cảnh). Thông tin có **tính toàn vẹn**: dữ liệu thiếu hoặc sai lệch sẽ làm thông tin bị hiểu sai hoặc không xác định được.

### 2.2. Đơn vị lưu trữ dữ liệu
- **Bit**: đơn vị đo lượng thông tin nhỏ nhất, nhận 1 trong 2 giá trị `0` hoặc `1`.
- **Byte**: đơn vị dữ liệu nhỏ nhất mà máy tính truy cập được (`1 Byte = 8 bit`, biểu diễn được $2^8 = 256$ trạng thái).
- **Bảng quy đổi đơn vị lưu trữ** (hơn kém nhau $2^{10} = 1024$ lần):
  - $1	ext{ KB} = 1024	ext{ B}$
  - $1	ext{ MB} = 1024	ext{ KB}$
  - $1	ext{ GB} = 1024	ext{ MB}$
  - $1	ext{ TB} = 1024	ext{ GB}$
  - $1	ext{ PB} = 1024	ext{ TB}$

### 2.3. Lưu trữ, xử lí và truyền thông bằng thiết bị số
Thiết bị số có 4 ưu điểm nổi bật:
1. Xử lí thông tin rất nhanh, độ chính xác cao, làm việc liên tục không mệt mỏi.
2. Lưu trữ dữ liệu dung lượng lớn trong không gian nhỏ gọn, giá thành rẻ, tìm kiếm nhanh.
3. Truyền tin tốc độ rất cao qua mạng máy tính và Internet.
4. Tự động hóa nhiều công việc một cách chính xác, tiết kiệm chi phí.

## 3. Thuật ngữ và khái niệm
| Thuật ngữ | Giải thích ngắn gọn |
| :--- | :--- |
| **Thông tin (Information)** | Ý nghĩa rút ra được từ dữ liệu, mang lại sự hiểu biết cho con người. |
| **Dữ liệu (Data)** | Thông tin đã được mã hóa/đưa vào máy tính dưới dạng văn bản, số, âm thanh, hình ảnh... |
| **Vật mang tin** | Phương tiện vật lí dùng để lưu trữ, truyền tải dữ liệu (giấy, thẻ nhớ, ổ cứng, sóng điện từ). |
| **Bit (Binary digit)** | Chữ số nhị phân (`0` hoặc `1`), đơn vị cơ sở nhỏ nhất đo lượng thông tin. |
| **Byte** | Nhóm gồm 8 bit liên tiếp, đơn vị nhỏ nhất máy tính truy cập được. |

## 4. Ví dụ minh họa và ứng dụng thực tế
- **Tính toàn vẹn của thông tin**: Dữ liệu `"40 độ"` nếu đứng một mình sẽ mơ hồ; đặt trong bản tin thời tiết là *trời rất nóng*, đặt trên nhiệt kế y tế là *sốt cao*. Trong bóng đá, chỉ biết số áo `10` chưa đủ xác định cầu thủ nếu thiếu dữ liệu *màu áo đội bóng*.
- **Số hóa thư viện**: 1 cuốn sách số hóa gồm văn bản và hình ảnh nặng khoảng `50 MB`. Toàn bộ thư viện 2000 cuốn cần $2000 	imes 50 = 100\,000	ext{ MB} pprox 97{,}66	ext{ GB}$, nằm gọn trong 1 thẻ nhớ `256 GB`.
- **Thẻ Căn cước công dân gắn chip**: Thông tin được mã hóa trong chip nhớ và mã QR giúp máy đọc tự động truy xuất nhanh, chính xác, chống làm giả và kết nối bảo hiểm y tế, dịch vụ công.

## 5. Hướng dẫn thực hành hoặc hoạt động vận dụng
- **Bài tập quy đổi nhanh**: Thực hành đổi qua lại giữa `B`, `KB`, `MB`, `GB` (ví dụ: $3	ext{ MB} = 3072	ext{ KB}$; $2	ext{ GB} = 2\,097\,152	ext{ KB}$; $2048	ext{ B} = 2	ext{ KB}$).
- **Ước lượng sức chứa thiết bị**: Kiểm tra dung lượng một tệp ảnh trên điện thoại (ví dụ `8 MB`), tính số lượng ảnh tối đa có thể lưu trên thẻ nhớ `16 GB`: $rac{16 	imes 1024}{8} = 2048$ ảnh.

## 6. Những lỗi thường gặp, nguyên nhân và cách khắc phục
1. **Nhầm lẫn khái niệm Bit và Byte khi quy đổi**:
   - *Nguyên nhân*: Quên hệ số $8	ext{ bit} = 1	ext{ byte}$ hoặc nhầm $1	ext{ KB} = 1000	ext{ bit}$.
   - *Khắc phục*: Luôn kiểm tra đơn vị viết hoa (`B` = Byte) hay viết thường (`b` = bit), và nhớ quy tắc $1	ext{ KB} = 1024	ext{ B} = 8192	ext{ bit}$.
2. **Dùng sai hệ số 1000 thay cho 1024 trong tính toán Tin học**:
   - *Nguyên nhân*: Nhầm với tiền tố SI trong Vật lí (kilo = 1000).
   - *Khắc phục*: Trong chương trình Tin học 10 KNTT, các đơn vị dung lượng bộ nhớ hơn kém nhau $2^{10} = 1024$ lần.
3. **Đồng nhất hoàn toàn thông tin với dữ liệu**:
   - *Nguyên nhân*: Chưa phân biệt giữa *nội dung ý nghĩa* (thông tin) và *hình thức thể hiện* (dữ liệu).
   - *Khắc phục*: Luôn đặt câu hỏi: "Dữ liệu này cho ta biết ý nghĩa gì?" và kiểm tra ngữ cảnh đi kèm (tính toàn vẹn).

## 7. Tổng kết và câu hỏi tự kiểm tra
- **Tổng kết**: Dữ liệu là đầu vào để máy tính xử lí thành thông tin có ý nghĩa. Mọi dữ liệu trong máy tính đều lưu theo đơn vị cơ bản là byte ($8	ext{ bit}$) và các bội số $1024$. Thiết bị số giúp tăng vượt bậc tốc độ xử lí, dung lượng lưu trữ và khả năng truyền tin.
- **Câu hỏi tự kiểm tra**:
  1. Tại sao nói thông tin có tính toàn vẹn? Cho một ví dụ thực tế.
  2. Quy đổi $4	ext{ GB}$ ra đơn vị `KB` và `Byte`.
  3. So sánh ưu điểm của gửi thư điện tử so với gửi thư giấy qua bưu điện.
