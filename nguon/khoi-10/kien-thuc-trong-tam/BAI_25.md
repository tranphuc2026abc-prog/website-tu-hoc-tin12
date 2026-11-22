# BÀI 25: MỘT SỐ LỆNH LÀM VIỆC VỚI XÂU KÍ TỰ

## 1. Thông tin chung & Mục tiêu bài học (GDPT 2018)
- **Môn học:** Tin học 10 – Bộ sách Kết nối tri thức với cuộc sống (Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính).
- **Mục tiêu:**
  - Sử dụng được toán tử `in` và phương thức `find()` để kiểm tra và tìm vị trí xâu con trong xâu mẹ.
  - Vận dụng thành thạo các phương thức xử lí xâu phổ biến: `split()`, `join()`, `replace()`, `upper()`, `lower()`, `strip()`.
  - Giải quyết được các bài toán thực tế về chuẩn hóa văn bản, tách họ tên và nhập nhiều dữ liệu số trên cùng một dòng.

## 2. Tóm tắt kiến thức trọng tâm
- **Xâu con (Substring):** Là một đoạn các kí tự liên tiếp nhau trích từ xâu mẹ (kể cả xâu rỗng hoặc chính xâu mẹ).
- **Kiểm tra xâu con:** Toán tử `in` trả về `True` nếu xâu thứ nhất nằm trong xâu thứ hai, ngược lại trả về `False`.
- **Tìm vị trí xâu con:** Phương thức `find()` tìm vị trí xuất hiện đầu tiên của xâu con trong xâu mẹ. Nếu không tìm thấy, hàm trả về `-1`.
- **Tách và nối xâu:**
  - `split()` tách một xâu thành danh sách (`list`) các xâu con dựa vào kí tự phân cách.
  - `join()` ghép một danh sách các xâu thành một xâu duy nhất, chèn xâu nối vào giữa các phần tử.
- **Tính bất biến của xâu (`str`):** Mọi phương thức xử lí xâu (`upper()`, `lower()`, `replace()`, `strip()`) đều tạo ra **xâu mới**, không làm thay đổi trực tiếp xâu gốc nếu không thực hiện phép gán lại.

## 3. Cú pháp, Lệnh & Bảng tra cứu nhanh

| Lệnh / Toán tử | Cú pháp | Ý nghĩa / Giá trị trả về |
| :--- | :--- | :--- |
| Toán tử `in` | `<xâu_1> in <xâu_2>` | Trả về `True` nếu `<xâu_1>` là xâu con của `<xâu_2>`, ngược lại `False`. |
| `find()` | `s.find(sub)` hoặc `s.find(sub, start)` | Trả về chỉ số đầu tiên của `sub` trong `s` (tính từ `start` nếu có); trả về `-1` nếu không thấy. |
| `split()` | `s.split()` hoặc `s.split(sep)` | Tách `s` thành danh sách các xâu con. Mặc định tách theo khoảng trắng và tự bỏ khoảng trắng thừa. |
| `join()` | `sep.join(ds)` | Nối các phần tử kiểu `str` trong danh sách `ds` thành 1 xâu, ngăn cách bởi `sep`. |
| `replace()` | `s.replace(old, new)` | Trả về xâu mới đã thay thế toàn bộ `old` bằng `new`. |
| `upper()` / `lower()` | `s.upper()` / `s.lower()` | Trả về xâu mới viết hoa toàn bộ / viết thường toàn bộ. |
| `strip()` | `s.strip()` | Trả về xâu mới đã xóa khoảng trắng ở đầu và cuối xâu. |

## 4. Ví dụ minh họa có giải thích chi tiết
```python
s = "  Tin học   10  "
# 1. Tìm kiếm xâu con
print("học" in s)          # True
print(s.find("10"))        # 12
print(s.find("Python"))    # -1

# 2. Chuẩn hóa khoảng trắng bằng split() và join()
ds_tu = s.split()          # ['Tin', 'học', '10']
s_chuan = " ".join(ds_tu)  # "Tin học 10"
print(s_chuan)
```
**Giải thích:** `s.split()` không truyền tham số sẽ tự động gom nhiều dấu cách liên tiếp và bỏ khoảng trắng hai đầu, giúp `join()` tạo ra xâu chuẩn chỉ có đúng 1 dấu cách giữa các từ.

## 5. Hướng dẫn Thực hành – Luyện tập – Vận dụng (SGK)
- **Luyện tập 1 (Nhập nhiều số cách nhau bởi dấu cách và tính tổng):**
  ```python
  ds = input("Nhập các số: ").split()
  tong = 0
  for x in ds:
      tong += float(x)
  print("Tổng =", tong)
  ```
- **Luyện tập 2 (Tách họ đệm và tên từ họ tên đầy đủ):**
  ```python
  ds = input("Nhập họ tên: ").split()
  ten = ds[-1]
  ho_dem = " ".join(ds[:-1])
  print("Họ đệm:", ho_dem, "| Tên:", ten)
  ```
- **Vận dụng 1 & 2:** Kết hợp `split()` để nhận hai số tự nhiên trên cùng một dòng (`a, b = map(int, input().split())`) khi tính ƯCLN, hoặc tách tên học sinh (`ds[-1]`) để đếm số bạn trùng tên trong lớp.

## 6. Các lỗi chuyên môn thường gặp, nguyên nhân & cách khắc phục
1. **Nhầm lẫn thứ tự trong `join()` (viết `ds.join(" ")` thay vì `" ".join(ds)`):**
   - *Nguyên nhân:* Tưởng nhầm `join()` là phương thức của `list` giống `append()`. Thực tế `join()` là phương thức của `str`.
   - *Khắc phục:* Luôn đặt xâu phân cách ở phía trước dấu chấm: `" ".join(ds)`.
2. **Lỗi `TypeError: sequence item 0: expected str instance, int found` khi dùng `join()`:**
   - *Nguyên nhân:* Danh sách truyền vào `join()` chứa phần tử là số (`int`/`float`) thay vì xâu (`str`).
   - *Khắc phục:* Chuyển từng phần tử sang xâu trước khi nối, ví dụ `" ".join(str(x) for x in ds)`.
3. **Quên gán lại kết quả sau khi gọi `replace()`, `upper()`, `lower()`, `strip()`:**
   - *Nguyên nhân:* Hiểu nhầm xâu có thể thay đổi tại chỗ như danh sách (`list`).
   - *Khắc phục:* Luôn viết phép gán lại: `s = s.replace(",", " ")`.
4. **Nhầm lẫn giữa `s.split()` và `s.split(" ")` khi có nhiều dấu cách liên tiếp:**
   - *Nguyên nhân:* `s.split(" ")` tách cứng theo từng dấu cách đơn lẻ nên sinh ra các phần tử rỗng `""` trong danh sách kết quả.
   - *Khắc phục:* Dùng `s.split()` (không đối số) khi muốn tách từ và loại bỏ khoảng trắng thừa.

## 7. Câu hỏi ôn tập & Tự kiểm tra nhanh
1. Lệnh `"abc".find("d")` trả về giá trị gì? *(Đáp án: `-1`)*
2. Lệnh `len("  a   b  c ".split())` cho kết quả bao nhiêu? *(Đáp án: `3`)*
3. Viết một dòng lệnh chuyển xâu `s = "1-2-3"` thành `"1 2 3"` bằng hai cách khác nhau. *(Đáp án: `s.replace("-", " ")` hoặc `" ".join(s.split("-"))`)*
