# BÀI 28: PHẠM VI CỦA BIẾN

## 1. Thông tin chung & Mục tiêu bài học (GDPT 2018)
- **Môn học:** Tin học 10 – Bộ sách Kết nối tri thức với cuộc sống (Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính).
- **Mục tiêu:**
  - Phân biệt được **biến cục bộ (biến địa phương)** và **biến toàn cục (biến tổng thể)**.
  - Hiểu cơ chế che khuất biến khi trùng tên và tác dụng của từ khóa `global`.
  - Tránh được các lỗi phổ biến về phạm vi biến (`NameError`, `UnboundLocalError`) khi viết chương trình có nhiều hàm.

## 2. Tóm tắt kiến thức trọng tâm
- **Biến cục bộ (Local variable):** Là biến được khai báo bên trong một hàm (bao gồm cả các tham số của hàm). Biến cục bộ chỉ có hiệu lực và tồn tại trong thời gian hàm thực thi; ra khỏi hàm không thể truy cập được.
- **Biến toàn cục (Global variable):** Là biến được khai báo ở chương trình chính (bên ngoài tất cả các hàm).
  - Bên trong hàm có thể **đọc** giá trị của biến toàn cục nếu không có biến cục bộ trùng tên.
  - Nếu bên trong hàm thực hiện phép gán cho tên biến trùng với biến toàn cục (mà không khai báo `global`), Python sẽ tạo ra một **biến cục bộ mới**, không làm thay đổi biến toàn cục bên ngoài.
- **Từ khóa `global`:** Dùng ở đầu thân hàm (`global <tên_biến>`) để chỉ rõ hàm sẽ thao tác và thay đổi trực tiếp giá trị của biến toàn cục bên ngoài.
- **Lưu ý với kiểu khả biến (`list`):** Dù không dùng `global`, các phương thức thay đổi nội dung tại chỗ như `mylist.append(...)` vẫn làm thay đổi danh sách truyền vào.

## 3. Cú pháp, Lệnh & Bảng tra cứu nhanh

| Khái niệm / Từ khóa | Phạm vi hiệu lực | Có sửa được biến ngoài hàm? | Ghi chú |
| :--- | :--- | :--- | :--- |
| Biến cục bộ | Chỉ bên trong hàm khai báo | Không | Tự hủy khi hàm kết thúc. |
| Biến ngoài hàm (không `global`) | Đọc được ở ngoài và trong hàm | Không (gán sẽ tạo biến cục bộ mới) | Nếu vừa đọc vừa gán cùng tên sẽ gây `UnboundLocalError`. |
| `global <tên_biến>` | Dùng chung trong hàm và ngoài hàm | Có | Nên hạn chế lạm dụng để tránh rối luồng dữ liệu. |

## 4. Ví dụ minh họa có giải thích chi tiết
```python
n = 10               # Biến toàn cục

def tang_cuc_bo():
    n = 20           # Tạo biến cục bộ mới, không ảnh hưởng n ngoài
    print("Trong tang_cuc_bo:", n)

def tang_toan_cuc():
    global n         # Liên kết trực tiếp với n toàn cục
    n = n + 5

tang_cuc_bo()        # In ra 20
print("Sau tang_cuc_bo:", n)   # Vẫn là 10
tang_toan_cuc()
print("Sau tang_toan_cuc:", n) # Đổi thành 15
```

## 5. Hướng dẫn Thực hành – Luyện tập – Vận dụng (SGK)
- **Luyện tập 1 (Lấy danh sách kí tự đầu tiên của `sList`):**
  ```python
  def lay_ki_tu_dau(sList):
      cList = []
      for s in sList:
          if len(s) > 0:
              cList.append(s[0])
      return cList
  ```
- **Luyện tập 2 (Hàm `Tach_day(A)` tách phần tử chỉ số chẵn và lẻ):**
  ```python
  def Tach_day(A):
      B, C = [], []
      for i in range(len(A)):
          if i % 2 == 0:
              B.append(A[i])
          else:
              C.append(A[i])
      return B, C
  ```
- **Vận dụng 1 (Hàm trả về đồng thời ƯCLN và BCNN của `m, n`):** Dùng biến cục bộ `a, b = m, n` để tính ƯCLN, giữ nguyên `m, n` để tính `bcnn = (m * n) // ucln`, sau đó `return ucln, bcnn`.

## 6. Các lỗi chuyên môn thường gặp, nguyên nhân & cách khắc phục
1. **Lỗi `UnboundLocalError: cannot access local variable ... where it is not associated with a value`:**
   - *Nguyên nhân:* Trong hàm có phép gán `n = n + 1` hoặc `s = s + name` nhưng không truyền `n`/`s` làm tham số và cũng không khai báo `global`. Python thấy phép gán nên coi `n`/`s` là biến cục bộ, nhưng ở vế phải lại đọc giá trị trước khi biến cục bộ được khởi tạo.
   - *Khắc phục:* Truyền biến vào qua tham số hàm (`def f(n): return n + 1`) hoặc khai báo `global n` ở đầu thân hàm.
2. **Truy cập biến cục bộ ở bên ngoài hàm (`NameError`):**
   - *Nguyên nhân:* Khai báo biến `kq` bên trong hàm rồi gọi `print(kq)` ở chương trình chính.
   - *Khắc phục:* Dùng `return kq` để trả giá trị ra ngoài và gán vào biến nhận ở chương trình chính (`ans = ham()`).
3. **Kỳ vọng biến toàn cục tự động đổi giá trị sau khi gán trong hàm:**
   - *Nguyên nhân:* Quên từ khóa `global` khi viết `x = 100` bên trong hàm.
   - *Khắc phục:* Ưu tiên thiết kế hàm thuần khiết nhận tham số và `return` giá trị mới; chỉ dùng `global` khi thực sự cần thiết.

## 7. Câu hỏi ôn tập & Tự kiểm tra nhanh
1. Biến khai báo bên trong hàm có sử dụng được ở bên ngoài hàm không? *(Đáp án: Không)*
2. Muốn thay đổi giá trị biến toàn cục bên trong hàm cần dùng từ khóa nào? *(Đáp án: `global`)*
3. Đoạn code `x = 5; def f(): x = 10; f(); print(x)` in ra số mấy? *(Đáp án: `5`)*
