### 2.1. Xâu là một dãy các kí tự
- Xâu kí tự được đặt trong cặp dấu nháy đơn `'...'` hoặc nháy kép `"..."`. Xâu rỗng là `""` có độ dài `0`.
- Python **không có kiểu kí tự riêng**; một kí tự đơn lẻ chính là một xâu có độ dài `1`.
- **Chỉ số và độ dài**: `len(s)` trả về số kí tự (tính cả khoảng trắng và kí tự đặc biệt). Chỉ số chạy từ `0` đến `len(s) - 1`.
- **Tính bất biến**: Không thể sửa đổi trực tiếp từng kí tự trong xâu (lệnh `s[0] = 'A'` sẽ báo lỗi). Muốn thay đổi phải tạo xâu mới (bằng phép ghép `+` hoặc cắt xâu `s[start:stop]`).

### 2.2. Duyệt xâu và kiểm tra xâu con
- **Cách 1 (duyệt theo chỉ số)**: `for i in range(len(s)):` -> truy cập `s[i]`.
- **Cách 2 (duyệt trực tiếp theo kí tự)**: `for ch in s:` -> `ch` nhận lần lượt từng kí tự của `s`.
- **Toán tử `in`**: `s1 in s2` trả về `True` nếu `s1` là xâu con liên tiếp nằm trong `s2`, ngược lại `False`.
