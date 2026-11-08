# Bài 25. MỘT SỐ LỆNH LÀM VIỆC VỚI XÂU KÍ TỰ

> Học liệu được chuyển định dạng từ KHBD Tin học 10 do giáo viên cung cấp. Nội dung trích xuất đầy đủ được giữ ở phần cuối để đối chiếu.

## Chủ đề
GIẢI QUYẾT VẤN ĐỀ VỚI SỰ TRỢ GIÚP CỦA MÁY TÍNH

## Mục tiêu kiến thức từ KHBD

Học xong bài này, HS đạt các yêu cầu sau:
Biết được một số phương thức làm việc với xâu kí tự.

## Trọng tâm hoạt động

Hoạt động 1: Xâu con và lệnh tìm vị trí xâu con
Hoạt động 2: Một số lệnh thường dùng với xâu kí tự
Hoạt động 3: Thực hành một số bài toán liên quan đến xâu kí tự

## Nội dung KHBD đầy đủ đã trích xuất

<details>
<summary>Mở nội dung KHBD</summary>

```text
Ngày soạn: .../.../...
Ngày dạy: .../.../...
BÀI 25: MỘT SỐ LỆNH LÀM VIỆC VỚI XÂU KÍ TỰ
(3 tiết)
I. MỤC TIÊU
1. Kiến thức
Học xong bài này, HS đạt các yêu cầu sau:
Biết được một số phương thức làm việc với xâu kí tự.
2. Năng lực 
 - Năng lực chung:
Giải quyết được những nhiệm vụ học tập một cách độc lập, theo nhóm và thể hiện sự sáng tạo.
Góp phần phát triển năng lực giao tiếp và hợp tác qua hoạt động nhóm và trao đổi công việc với giáo viên.
- Năng lực riêng: 
Thực hiện được một số phương thức làm việc với xâu kí tự.
- Năng lực số:
1.2.NC1b: Hiểu cơ chế máy tính "đọc" văn bản thông qua việc tách từ và tìm kiếm từ khóa, là nền tảng của các hệ thống tìm kiếm và AI.
1.1.NC1a: Chuyển đổi linh hoạt giữa dữ liệu phi cấu trúc (xâu kí tự dài) và dữ liệu có cấu trúc (danh sách/list) để quản lý thông tin hiệu quả.
5.2.NC1b: Vận dụng môi trường lập trình để xử lý, làm sạch dữ liệu đầu vào trước khi đưa vào các bài toán xử lý tiếp theo.
6.2.NC1b: Sử dụng AI Chatbot để tạo dữ liệu giả lập hoặc tối ưu hóa thuật toán xử lý xâu.
3. Phẩm chất
Hình thành ý thức trách nhiệm, tính cẩn thận khi làm việc nhóm, phẩm chất làm việc chăm chỉ, chuyên cần để hoàn thành một nhiệm vụ.
Nghiêm túc, tập trung, tích cực và chủ động.
II. THIẾT BỊ DẠY HỌC VÀ HỌC LIỆU 
1. Đối với GV
- KHBD, tài liệu giảng dạy, giáo án PPT.
- Phòng thực hành máy tính cài sẵn Python và kết nối Internet.
- Máy chiếu.
- Video AI tạo bằng công cụ AI được dùng để khởi động bài học.
2. Đối với HS 
- SGK, SBT, vở ghi.
III. TIẾN TRÌNH DẠY HỌC
1. HOẠT ĐỘNG KHỞI ĐỘNG 
a) Mục tiêu: Gợi ý cho HS đến bài toán tìm vị trí một xâu con trong xâu kí tự.
b) Nội dung: HS dựa vào hiểu biết của bản thân để trả lời câu hỏi.
c) Sản phẩm: Từ yêu cầu, HS vận dụng kiến thức để trả lời câu hỏi GV đưa ra.
d) Tổ chức thực hiện: 
Bước 1: GV chuyển giao nhiệm vụ: 
- GV yêu cầu xem video AI được thiết kế để phục vụ bài dạy và trả lời câu hỏi xuất hiện trong video đó.
- GV đặt vấn đề: Bài toán tìm kiếm xâu con trong một xâu là một trong những bài toán tin học được ứng dụng nhiều trong thực tế. Công cụ tìm kiếm thông tin trên Internet hay lệnh tìm kiếm trong soạn thảo văn bản được xây dựng trên cơ sở bài toán tìm xâu con.
Cho xâu c = "Trường Sơn" và xâu m ="Bước chân trên dải Trường Sơn". Em hãy cho biết xâu c có là xâu con của xâu m không. Nếu có thì tìm vị trí của xâu c trong xâu m.
Bước 2: HS thực hiện nhiệm vụ: 
- HS xem video và suy nghĩ câu trả lời.
- HS chú ý lắng nghe, suy nghĩ câu trả lời.
Bước 3: Báo cáo kết quả học tập, thảo luận: 
- GV gọi đại diện HS đứng lên trình bày kết quả
- HS khác lắng nghe, nhận xét, bổ sung.
Gợi ý: Xâu c là xâu con của xâu m. Vị trí tìm thấy đầu tiên của xâu c trong xâu m là chỉ số 20.
Bước 4: Đánh giá kết quả thực hiện: 
- GV nhận xét, đánh giá và kết luận.
[6.1.NC1a: HS sử dụng công cụ AI hoặc sản phẩm số do GV cung cấp để tiếp nhận thông tin, trả lời câu hỏi đơn giản.
2.1.NC1a: HS thực hiện các tương tác cơ bản với học liệu số (xem video, trả lời câu hỏi trên môi trường số).
1.1.NC1a: HS tiếp cận, khai thác được thông tin từ nguồn học liệu số dưới sự hướng dẫn của GV.]
- GV dẫn dắt HS vào bài học mới - Bài 25. Một số lệnh làm việc với xâu kí tự.
2. HÌNH THÀNH KIẾN THỨC MỚI
Hoạt động 1: Xâu con và lệnh tìm vị trí xâu con
a) Mục tiêu: HS biết và thực hiện được lệnh kiểm tra, tìm vị trí xâu con trong xâu kí tự.
b) Nội dung: GV hướng dẫn HS tìm hiểu một số lệnh tìm kiếm xâu con trong xâu kí tự.
c) Sản phẩm: HS thực hiện Hoạt động 1, câu hỏi và bài tập củng cố SGK tr.124, hoàn thành tìm hiểu kiến thức.
d) Tổ chức thực hiện:
[BẢNG] HOẠT ĐỘNG CỦA GV VÀ HS | SẢN PHẨM DỰ KIẾN | NLS
[BẢNG] Bước 1: GV chuyển giao nhiệm vụ:- GV yêu cầu HS: Thao tác trực tiếp trên môi trường Python, gõ các lệnh trong Ví dụ 1, Ví dụ 2 và Ví dụ 3. Sau đó rút ra nhận xét về cách kiểm tra xâu con và tìm kiếm vị trí xâu con trong xâu kí tự.+ Ví dụ 1:  Muốn kiểm tra xâu s1 có nằm trong xâu s2 hay không có thể dùng toán tử in: s1 nằm trong s2 khi và chỉ khi biểu thức s1 in s2 là True.+ Ví dụ 2: Lệnh find() tìm vị trí xuất hiện của một xâu trong xâu khác.+ Ví dụ 3:  Dùng phương thức find() để kiểm tra vị trí xâu s1 trong xâu s2 như sau:Nếu s2.find(s1) = k (k≥ 0) thì s1 nằm trong xâu s2 tại vị trí k (vị trí đầu tiên của s1 trong s2).Nếu s2.find(s1) = -1 thì s1 không nằm trong s2.Cú pháp mở rộng của lệnh find() như sau:s2.find(s1, k) sẽ trả lại vị trí đầu tiên của s1 trong s2 tính từ vị trí k trở đi, nếu không tìm thấy trả lại giá trị -1.- GV cho HS đọc và ghi nhớ khung kiến thức trọng tâm.- GV yêu cầu HS thảo luận nhóm đôi và hoàn thành Câu hỏi và bài tập củng cố SGK tr.124:1. Biểu thức lôgic sau đây là đúng hay sai?>>> "010" in "001100"2. Lệnh sau trả lại giá trị gì?>>> "ababababab".find("ab",4)Bước 2: HS thực hiện nhiệm vụ: - HS theo dõi, chú ý lắng nghe GV hướng dẫn.- HS ghi nhớ khung kiến thức trọng tâm.- HS thảo luận nhóm, hoàn thành bài tập.Bước 3: Báo cáo kết quả hoạt động, thảo luận: - Đại diện nhóm trình bày.- Một số HS khác nhận xét, bổ sung cho bạn. Bước 4: Đánh giá kết quả thực hiện: - GV nêu nhận xét, tổng quát lại kiến thức. | 1. Xâu con và lệnh tìm vị trí xâu con- Để tìm một xâu trong xâu khác có thể dùng toán tử in hoặc lệnh find(). Lệnh find() trả về vị trí của xâu con trong xâu mẹ.Câu hỏi và bài tập củng cố:1. Sai2. Lệnh trả lại giá trị 4. | - 5.2.NC1b: HS thực hành nhập liệu chính xác; tuân thủ nghiêm ngặt quy tắc cú pháp của ngôn ngữ lập trình.- 1.2.NC1b: HS hiểu cơ chế truy xuất thông tin; phân biệt được hai trạng thái tìm kiếm dữ liệu: “Kiểm tra sự tồn tại” (sử dụng toán tử in) và “Định vị dữ liệu” (sử dụng lệnh find()). Đây là nền tảng để hiểu cách các công cụ tìm kiếm hoạt động trên tập dữ liệu lớn.
Hoạt động 2: Một số lệnh thường dùng với xâu kí tự
a) Mục tiêu: HS biết và sử dụng được một số phương thức phổ biến của kiểu dữ liệu xâu kí tự.
b) Nội dung: GV hướng dẫn HS tìm hiểu một số lệnh thường dùng với xâu kí tự.
c) Sản phẩm: HS thực hiện Hoạt động 2, Câu hỏi và bài tập củng cố SGK tr.125, hoàn thành tìm hiểu kiến thức.
d) Tổ chức thực hiện: 
[BẢNG] HOẠT ĐỘNG CỦA GV VÀ HS | SẢN PHẨM DỰ KIẾN | NLS
[BẢNG] Bước 1: GV chuyển giao nhiệm vụ:- GV yêu cầu HS: Thao tác trực tiếp trên môi trường Python, gõ các lệnh trong Ví dụ 1 và Ví dụ 2 để tìm hiểu cách sử dụng lệnh split() và join().+ Ví dụ 1: Lệnh split() tách một xâu thành danh sách các từ+ Ví dụ 2: Lệnh join() nối danh sách gồm các từ thành một xâu- GV cho HS đọc khung kiến thức trọng tâm để ghi nhớ.- GV yêu cầu HS hoạt động cá nhân, hoàn thành Câu hỏi và bài tập củng cố SGK tr.125:Cho xâu kí tự: "gà,vịt,chó,lợn,ngựa,cá". Em hãy trình bày cách làm để xóa các dấu "," và thay thế bằng dấu " " trong xâu này.Bước 2: HS thực hiện nhiệm vụ: - HS lắng nghe GV hướng dẫn.- HS suy nghĩ, hoàn thành câu hỏi và bài tập củng cố.- GV quan sát và trợ giúp HS. Bước 3: Báo cáo kết quả hoạt động, thảo luận: - HS giơ tay phát biểu, trình bày kết quả.- Một số HS khác nhận xét, bổ sung cho bạn. Bước 4: Đánh giá kết quả thực hiện: GV tổng quát lưu ý lại kiến thức và yêu cầu HS ghi chép đầy đủ vào vở. | 2. Một số lệnh thường dùng với xâu kí tự- Python có các lệnh đặc biệt để xử lí xâu là split() dùng để tách xâu thành danh sách và lệnh join() dùng để nối danh sách thành các xâu thành một xâu.Câu hỏi và bài tập củng cố:Cách làm như sau: | - 5.2.NC1b: HS thực hành nhập liệu chính xác; tuân thủ nghiêm ngặt quy tắc cú pháp của ngôn ngữ lập trình.- 1.1.NC1a: HS thực hiện chuyển đổi cấu trúc dữ liệu; biến đổi dữ liệu phi cấu trúc thành dữ liệu có cấu trúc (List) bằng lệnh split để dễ dàng quản lý và xử lý từng thành phần, sau đó tái cấu trúc lại bằng lệnh join.
Hoạt động 3: Thực hành một số bài toán liên quan đến xâu kí tự
a) Mục tiêu: HS thực hành một số bài toán liên quan đến xâu kí tự.
b) Nội dung: GV hướng dẫn HS lần lượt thực hiện ba nhiệm vụ của phần thực hành.
c) Sản phẩm: HS soạn thảo chương trình liên quan đến xâu kí tự trong môi trường Python.
d) Tổ chức thực hiện: 
[BẢNG] HOẠT ĐỘNG CỦA GV VÀ HS | SẢN PHẨM DỰ KIẾN | NLS
[BẢNG] Bước 1: GV chuyển giao nhiệm vụ:- GV yêu cầu HS thực hành theo nhóm đôi các nhiệm vụ sau:+ Nhiệm vụ 1: Viết chương trình nhập nhiều số nguyên từ bàn phím, các số cách nhau bởi dấu cách. Khi nhập xong thông báo số lượng các số đã nhập và in các số này thành hàng ngang.+ Nhiệm vụ 2: Viết chương trình nhập một xâu kí tự có thể có nhiều dấu cách giữa các từ. Sau đó chỉnh sửa xâu kí tự đó sao cho giữa các từ chỉ có một dấu cách. In xâu kết quả ra màn hình.+ Nhiệm vụ 3: Viết chương trình nhập số tự nhiên n, rồi nhập họ tên của n học sinh. Sau đó in ra danh sách tên học sinh theo hai cột, cột 1 là tên, cột 2 là họ đệm.Bước 2: HS thực hiện nhiệm vụ: - HS thực hành theo nhóm đôi.- GV quan sát và trợ giúp HS. Bước 3: Báo cáo kết quả hoạt động, thảo luận: - HS viết chương trình có sử dụng các lệnh cơ bản làm việc với xâu kí tự.Bước 4: Đánh giá kết quả thực hiện: GV quan sát, nhận xét kết quả của HS. | - Nhiệm vụ 1:Hướng dẫn: Chương trình có thể như sau:- Nhiệm vụ 2:Hướng dẫn: Chương trình có thể như sau:- Nhiệm vụ 3:Hướng dẫn: Chương trình có thể như sau: | 3.4.NC1a: HS viết chương trình Python sử dụng các lệnh làm việc với xâu kí tự.
3. HOẠT ĐỘNG LUYỆN TẬP
a) Mục tiêu: HS củng cố lại kiến thức về một số lệnh làm việc với xâu kí tự.
b) Nội dung: HS vận dụng các kiến thức đã học để giải bài tập trong phần Luyện tập (SGK - tr126), trả lời một số câu hỏi trắc nghiệm.
c) Sản phẩm học tập: Bài làm của học sinh, kĩ năng giải quyết nhiệm vụ học tập.
d) Tổ chức thực hiện: 
Bước 1: GV chuyển giao nhiệm vụ: 
- GV tổng hợp các kiến thức cần ghi nhớ cho HS.
Nhiệm vụ 1: Trả lời câu hỏi trắc nghiệm khách quan
- GV tổ chức trò chơi trắc nghiệm nhanh trên Quizizz hoặc Kahoot để củng cố toàn bài.
- GV cung cấp mã QR hoặc đường Links cho HS làm Phiếu bài tập, trả lời nhanh một số câu hỏi trắc nghiệm tổng kết bài học.
Câu 1: Biểu thức sau trả lại giá trị gì? 
"" in "0123"
A. True B. FalseC. Báo lỗi
Câu 2: Lệnh sau trả lại giá trị gì?
"abcde".find("")
A. -1B. 0C. 1D. Báo lỗi
Câu 3: Lệnh sau trả lại giá trị gì?
"0123456789".find("012abc")
A. -1B. 0C. 1D. Báo lỗi
Câu 4: Lệnh sau trả lại giá trị gì?
len(" Hà Nội Việt Nam ".split())
A. 0B. 4C. 7D. 8
Câu 5: Lệnh sau trả lại giá trị gì?
"Trường Sơn".find("Sơn", 4)
A. 5B. 6C. 7D. 8
Nhiệm vụ 2: Thực hiện phần Luyện tập tr.126 SGK
Bước 2: HS thực hiện nhiệm vụ: 
- HS thảo luận nhóm, hoàn thành các bài tập GV yêu cầu.
- GV quan sát và hỗ trợ, hướng dẫn.
Bước 3: Báo cáo kết quả hoạt động, thảo luận: 
- Mỗi BT GV mời 1 đến 2 HS trình bày. 
- Các HS khác chú ý chữa bài, theo dõi nhận xét bài các nhóm trên bảng.
Đáp án trắc nghiệm:
[BẢNG] Câu 1 | Câu 2 | Câu 3 | Câu 4 | Câu 5
[BẢNG] A | B | A | B | C
Gợi ý thực hiện phần Luyện tập: 
Bài 1: Chương trình như sau:
Bài 2: Chương trình như sau:
Bước 4: Đánh giá kết quả thực hiện: 
- GV chữa bài, chốt đáp án, tuyên dương các hoạt động tốt, nhanh và chính xác.
[2.1.NC1a: HS thực hiện các tương tác được xác định rõ ràng với công nghệ số (làm bài tập online) trong lớp học.
3.4.NC1a: HS viết chương trình Python sử dụng các lệnh làm việc với xâu kí tự.]
4. HOẠT ĐỘNG VẬN DỤNG
a) Mục tiêu: Học sinh thực hiện làm bài tập vận dụng để nắm vững kiến thức.
b) Nội dung: HS vận dụng kiến thức đã học để làm bài tập Vận dụng (SGK – tr126) và một số bài tập làm thêm.
c) Sản phẩm: Bài làm của học sinh, kĩ năng giải quyết nhiệm vụ học tập.
d) Tổ chức thực hiện: 
Bước 1: GV chuyển giao nhiệm vụ
- GV yêu cầu HS hoàn thành bài tập 1, 2 phần Vận dụng (SGK -tr126).
- HS thảo luận nhóm đôi, hoàn thành một số bài tập sau:
Bài 1: Viết chương trình nhập n số nguyên từ bàn phím, các số cách nhau bởi dấu cách, sau đó in ra màn hình:
- Danh sách số đã nhập trên một hàng ngang.
- Số lớn nhất và chỉ số của số lớn nhất.
- Số nhỏ nhất và chỉ số của số nhỏ nhất.
Bài 2: Cho trước xâu kí tự S và xâu substr. Viết đoạn chương trình tính số lần lặp của xâu con sbstr trong xâu S, cho phép chồng lấn của các xâu con này. Ví dụ nếu S = "1212133212143212", substr = "121" thì số lần lặp là 4.
Bước 2: HS thực hiện nhiệm vụ
- HS hợp tác thảo luận đưa ra ý kiến.
- GV điều hành, quan sát, hỗ trợ.
Bước 3: Báo cáo kết quả hoạt động, thảo luận
- Đại diện nhóm trình bày kết quả thảo luận, các nhóm khác theo dõi, đưa ý kiến.
Gợi ý thực hiện phần Vận dụng:
Bài 1: Chương trình như sau:
Bài 2: Chương trình như sau:
Bài tập làm thêm:
Bài 1: Chương trình có thể viết như sau:
Bài 2: Chương trình có thể viết như sau:
Bước 4: Đánh giá kết quả thực hiện
- GV nhận xét, đánh giá, đưa ra một vài ý mà HS còn thiếu, chốt đáp án.
[3.4.NC1a: HS viết chương trình Python sử dụng các lệnh làm việc với xâu kí tự.]
* HƯỚNG DẪN VỀ NHÀ
Ghi nhớ kiến thức trong bài. 
Hoàn thành bài tập còn lại trong SBT.
Chuẩn bị bài mới Bài 26 - Hàm trong Python.
```

</details>

