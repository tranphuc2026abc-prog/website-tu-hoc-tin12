# BÀI 14: LÀM VIỆC VỚI ĐỐI TƯỢNG ĐƯỜNG VÀ VĂN BẢN

## 1. Mục tiêu bài học
- **Kiến thức:** Phân biệt được hình khối và đối tượng tự do dạng đường (Path); hiểu cấu tạo của đoạn cong Bézier (điểm đầu mút, điểm điều khiển, điểm neo trơn và điểm neo góc); nắm được các thao tác đưa văn bản uốn lượn theo đường.
- **Năng lực:** Sử dụng thành thạo công cụ bút vẽ (`Pen`) và công cụ tinh chỉnh điểm neo (`Node tool`) để tạo hình tự do; định dạng văn bản nghệ thuật và đặt văn bản theo đường dẫn.
- **Phẩm chất:** Kiên trì, tỉ mỉ trong quá trình tinh chỉnh đường cong và bố cục chữ hài hòa.

## 2. Kiến thức trọng tâm
### 2.1. Làm quen với đối tượng dạng đường (`Path`)
- **Hình khối:** Là đối tượng định nghĩa sẵn theo tính chất toán học chặt chẽ (khi co giãn vẫn giữ nguyên đặc trưng hình khối, ví dụ hình chữ nhật góc bo).
- **Đối tượng tự do dạng đường:** Do người dùng tự tạo bằng công cụ bút vẽ (`Pen`/`Bézier`), là tổ hợp của nhiều đoạn thẳng hoặc đoạn cong nối lại với nhau.
- **Biểu diễn đoạn cong Bézier:** Mỗi đoạn cong được xác định bởi **4 điểm**: 2 điểm đầu mút và 2 điểm điều khiển. Đường nối điểm đầu mút với điểm điều khiển tạo thành **tiếp tuyến** của đường cong tại điểm đầu mút đó.
- Nếu điểm đầu trùng điểm cuối, ta thu được **đường cong kín** (có thể tô màu bên trong).

### 2.2. Tinh chỉnh đối tượng đường bằng `Node tool` (`N`)
- Điểm nối giữa các đoạn gọi là **điểm neo (node)**, gồm 2 loại chính:
  - **Điểm neo trơn (`Smooth nodes`):** Kí hiệu **hình vuông hoặc hình tròn**. Hai tia chỉ hướng ở hai bên luôn thẳng hàng tạo tiếp tuyến chung, giúp đường cong chuyển tiếp mượt mà.
  - **Điểm neo góc (`Corner/Cusp nodes`):** Kí hiệu **hình thoi**. Hai tia chỉ hướng thay đổi hướng và độ dài độc lập, tạo góc nhọn hoặc điểm gấp khúc.
- Độ cong tại mỗi điểm neo phụ thuộc vào **điểm chỉ hướng** và **đường chỉ hướng**. Có thể chuyển đổi qua lại giữa neo trơn và neo góc trên thanh điều khiển thuộc tính của `Node tool`.
- Mọi hình khối hoặc văn bản đều có thể chuyển thành đối tượng đường qua `Path -> Object to Path` (`Ctrl + Shift + C`) để chỉnh sửa tự do từng điểm neo.

### 2.3. Làm việc với đối tượng văn bản (`Text tool`, `T`)
- Chọn công cụ chữ **A** (`T`), nháy chuột lên vùng làm việc để gõ văn bản; nháy đúp vào văn bản để sửa nội dung hoặc bôi đen từng kí tự để đổi màu, kích thước, độ cao thấp khác nhau.
- **Đặt văn bản theo đường:** Chọn cả đối tượng văn bản và đối tượng đường, vào `Text -> Put on Path`.
- **Ẩn đường dẫn sau khi đặt chữ:** Chọn riêng đối tượng đường rồi bỏ `Stroke` (không xóa đường dẫn!).
- **Bỏ đặt văn bản theo đường:** Chọn văn bản và dùng `Text -> Remove from Path`.
- **Xóa tinh chỉnh thủ công từng kí tự:** Chọn văn bản và dùng `Text -> Remove Manual Kerns`.

## 3. Thuật ngữ, khái niệm và cú pháp/lệnh quan trọng
| Thuật ngữ / Lệnh | Phím tắt / Vị trí | Ý nghĩa / Chức năng |
|---|---|---|
| `Pen tool` (Bézier) | `B` (hoặc `Shift + F6`) | Vẽ đoạn thẳng (nháy) và đoạn cong (kéo thả) |
| `Node tool` | `N` (hoặc `F2`) | Chỉnh sửa điểm neo, điểm chỉ hướng, độ cong |
| `Smooth node` | Hình vuông / tròn | Điểm neo trơn, tạo đường cong mượt |
| `Corner node` | Hình thoi | Điểm neo góc, tạo đỉnh nhọn/gấp khúc |
| `Object to Path` | `Path -> Object to Path` (`Ctrl + Shift + C`) | Chuyển hình khối/văn bản thành đối tượng đường |
| `Put on Path` | `Text -> Put on Path` | Đặt văn bản chạy theo đường dẫn |
| `Remove from Path` | `Text -> Remove from Path` | Gỡ văn bản khỏi đường dẫn |
| `Remove Manual Kerns` | `Text -> Remove Manual Kerns` | Bỏ các tinh chỉnh cao thấp/khoảng cách thủ công của chữ |
| `Align and Distribute` | `Ctrl + Shift + A` | Căn lề và phân bố khoảng cách đều các đối tượng |

## 4. Hướng dẫn thực hành và ví dụ minh họa
- **Ví dụ 1: Vẽ chiếc lá bằng đường cong Bézier:**
  1. Chọn `Pen tool` (`B`), nháy 1 điểm làm cuống lá, nháy và kéo tại điểm giữa tạo độ phình, nháy tạo đỉnh nhọn ở chóp lá, rồi khép kín về điểm đầu.
  2. Chuyển sang `Node tool` (`N`), đặt hai điểm đầu/cuối thành **neo góc** (hình thoi) và hai điểm thân bên thành **neo trơn** (hình vuông), kéo điểm chỉ hướng cho cân đối, sau đó tô màu chuyển sắc xanh lá.
- **Ví dụ 2: Tạo chữ uốn lượn theo sóng:**
  1. Vẽ đường cong hình sin bằng `Pen tool`.
  2. Nhập dòng chữ bằng `Text tool`.
  3. Chọn cả chữ và đường cong -> `Text -> Put on Path`.
  4. Chọn riêng đường cong, giữ `Shift` + nháy vào ô dấu `X` trên Palette để ẩn viền đường dẫn.

## 5. Câu hỏi và bài tập vận dụng nhanh
1. **Câu hỏi:** Một đoạn cong Bézier được xác định bởi bao nhiêu điểm?
   - **Đáp án:** 4 điểm (2 điểm đầu mút và 2 điểm điều khiển).
2. **Câu hỏi:** Khi dùng công cụ `Pen` vẽ nhầm điểm vừa chấm, làm thế nào để xóa riêng điểm đó mà không phải vẽ lại từ đầu?
   - **Đáp án:** Nhấn phím `Backspace` (hoặc `Delete`).
3. **Câu hỏi:** Để căn 4 biểu tượng cách đều nhau theo chiều ngang, ta dùng nhóm lệnh nào trong bảng `Align and Distribute` (`Ctrl + Shift + A`)?
   - **Đáp án:** Nhóm lệnh `Distribute`.

## 6. Lỗi chuyên môn thường gặp, nguyên nhân và cách khắc phục
1. **Xóa đường dẫn sau khi dùng `Text -> Put on Path` làm chữ bị duỗi thẳng trở lại:**
   - *Nguyên nhân:* Văn bản vẫn đang liên kết động với đối tượng đường; nếu xóa đường gốc, liên kết mất nên chữ trở về dạng thẳng.
   - *Khắc phục:* Không xóa đường dẫn mà chỉ bỏ màu viền (`Stroke = None`); hoặc nếu muốn xóa đường dẫn, phải chọn văn bản và nhấn `Ctrl + Shift + C` (`Path -> Object to Path`) trước khi xóa đường.
2. **Đường cong bị gãy góc ở vị trí đáng lẽ phải tròn mượt (hoặc ngược lại):**
   - *Nguyên nhân:* Chọn nhầm loại điểm neo (dùng `Corner node` hình thoi ở đoạn cần trơn, hoặc dùng `Smooth node` ở đỉnh nhọn chiếc lá/trái tim).
   - *Khắc phục:* Chọn điểm neo bằng `Node tool` (`N`), nhấn nút `Make selected nodes smooth` hoặc `Make selected nodes corner` trên thanh thuộc tính để chuyển đổi đúng loại neo.
3. **Vẽ bằng `Pen` không tô được màu bên trong (`Fill`):**
   - *Nguyên nhân:* Đường vẽ chưa được khép kín (điểm cuối chưa chạm đúng điểm đầu) hoặc `Fill` đang đặt là `None`.
   - *Khắc phục:* Đưa con trỏ về đúng ô vuông điểm đầu khi kết thúc (ô vuông chuyển đỏ báo hiệu khép kín) hoặc chọn cả hai điểm đầu/cuối bằng `Node tool` và nhấn `Join selected nodes`.

## 7. Tổng kết và liên hệ thực tiễn
- Bài 14 giúp người học làm chủ công cụ vẽ tự do (`Pen` và `Node tool`) cùng kỹ năng xử lý chữ nghệ thuật (`Text`), vượt qua giới hạn của các hình khối có sẵn.
- Đây là kỹ năng nền tảng để vẽ lại logo thương hiệu, minh họa nhân vật, thiết kế tiêu đề uốn lượn trên áp phích, huy hiệu và tem nhãn.
