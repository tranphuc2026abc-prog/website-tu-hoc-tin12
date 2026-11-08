# Bài 27. THAM SỐ CỦA HÀM

> Học liệu được chuyển định dạng từ KHBD Tin học 10 do giáo viên cung cấp. Nội dung trích xuất đầy đủ được giữ ở phần cuối để đối chiếu.

## Chủ đề
GIẢI QUYẾT VẤN ĐỀ VỚI SỰ TRỢ GIÚP CỦA MÁY TÍNH

## Mục tiêu kiến thức từ KHBD

Học xong bài này, HS đạt các yêu cầu sau:
Biết cách thiết lập các tham số của hàm.
Biết được cách truyền giá trị thông qua đối số hàm.
Biết viết chương trình có sử dụng chương trình con.

## Trọng tâm hoạt động

Hoạt động 1: Tham số và đối số của hàm
Hoạt động 2: Cách sử dụng chương trình con
Hoạt động 3: Thực hành truyền giá trị cho đối số của hàm

## Nội dung KHBD đầy đủ đã trích xuất

<details>
<summary>Mở nội dung KHBD</summary>

```text
Ngày soạn: .../.../...
Ngày dạy: .../.../...
BÀI 27: THAM SỐ CỦA HÀM
(3 tiết)
I. MỤC TIÊU
1. Kiến thức
Học xong bài này, HS đạt các yêu cầu sau:
Biết cách thiết lập các tham số của hàm.
Biết được cách truyền giá trị thông qua đối số hàm.
Biết viết chương trình có sử dụng chương trình con.
2. Năng lực 
 - Năng lực chung:
Năng lực tự chủ và tự học trong tìm tòi khám phá
Năng lực giao tiếp và hợp tác trong trình bày, thảo luận và làm việc nhóm
Năng lực tư duy và giải quyết vấn đề một cách sáng tạo trong thực hành, vận dụng.
- Năng lực riêng: 
Thực hiện được khởi tạo hàm tự định nghĩa có tham số.
- Năng lực số:
1.2.NC1b: Hiểu cơ chế truyền dữ liệu giữa chương trình chính và chương trình con; phân biệt dữ liệu đầu vào (đối số) và biến cục bộ (tham số).
5.2.NC1b: Vận dụng kỹ năng gỡ lỗi để xử lý các lỗi thường gặp về tham số (thiếu đối số, sai kiểu dữ liệu).
3.1.NC1a: Xây dựng thư viện hàm có tính linh hoạt cao nhờ việc thiết kế tham số hợp lý, giúp tái sử dụng mã nguồn hiệu quả.
6.2.NC1b: Sử dụng AI để tạo các bộ dữ liệu kiểm thử (Test Cases) đa dạng cho các hàm đã viết.
3. Phẩm chất
Nghiêm túc, tập trung, tích cực và chủ động.
Có thái độ tự giác, hợp tác khi thảo luận nội dung bài học.
Trung thực hoàn thành đầy đủ các bài tập.
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
a) Mục tiêu: Gợi mở cho HS biết được hai khái niệm tham số và đối số của hàm.
b) Nội dung: HS quan sát hình ảnh, dựa vào hiểu biết để trả lời câu hỏi.
c) Sản phẩm: Từ yêu cầu, HS vận dụng kiến thức để thực hiện yêu cầu GV đưa ra.
d) Tổ chức thực hiện: 
Bước 1: GV chuyển giao nhiệm vụ: 
- GV yêu cầu xem video AI được thiết kế để phục vụ bài dạy và trả lời câu hỏi xuất hiện trong video đó.
- GV chiếu hình ảnh và yêu cầu HS: Quan sát các lệnh sau và cho biết sự khác nhau giữa tham số (parameter) và đối số (argument).
Bước 2: HS thực hiện nhiệm vụ học tập: 
- HS xem video và suy nghĩ câu trả lời.
- HS chú ý theo dõi, suy nghĩ câu trả lời.
Bước 3: Báo cáo kết quả hoạt động, thảo luận: 
- GV gọi một số HS trả lời, HS khác nhận xét, bổ sung
Bước 4: Đánh giá kết quả thực hiện: 
- GV nhận xét, đánh giá và kết luận.
[6.1.NC1a: HS sử dụng công cụ AI hoặc sản phẩm số do GV cung cấp để tiếp nhận thông tin, trả lời câu hỏi đơn giản.
2.1.NC1a: HS thực hiện các tương tác cơ bản với học liệu số (xem video, trả lời câu hỏi trên môi trường số).
1.1.NC1a: HS tiếp cận, khai thác được thông tin từ nguồn học liệu số dưới sự hướng dẫn của GV.]
- GV dẫn dắt HS vào bài học mới: Tham số và đối số là hai khái niệm rất dễ nhầm lẫn. Chúng ta sẽ cùng nhau tìm hiểu hai khái niệm này trong bài học - Bài 27: Tham số của hàm.
2. HÌNH THÀNH KIẾN THỨC MỚI
Hoạt động 1: Tham số và đối số của hàm
a) Mục tiêu: HS hiểu được cách truyền giá trị vào hàm khi gọi hàm và phân biệt được sự khác nhau của khái niệm tham số và đối số của hàm.
b) Nội dung: HS đọc SGK và trả lời Hoạt động 1, thảo luận nhóm xây dựng kiến thức bài mới, củng cố bằng cách trả lời Câu hỏi và bài tập củng cố SGK trang 132.
c) Sản phẩm: HS phân biệt được tham số và đối số.
d) Tổ chức thực hiện:
[BẢNG] HOẠT ĐỘNG CỦA GV VÀ HS | SẢN PHẨM DỰ KIẾN | NLS
[BẢNG] Bước 1: GV chuyển giao nhiệm vụ:- GV chia lớp thành các nhóm 3 - 4 HS.- GV giao nhiệm vụ cho HS: Thao tác trực tiếp trên môi trường Python, gõ các lệnh trong Ví dụ để tìm hiểu cách dữ liệu được truyền qua tham số vào hàm. Sau đó các nhóm thảo luận để giải thích kết quả.- Từ ví dụ, GV yêu cầu HS: Em hãy phân biệt tham số và đối số.- GV đặt vấn đề: Nếu ở dòng 3, hàm f() chỉ được gọi với hai giá trị là f(1,2) thì kết quả thực thi hàm sẽ như thế nào?- GV cho HS đọc và ghi nhớ khung kiến thức trọng tâm.- GV cho HS thảo luận nhóm đôi và trả lời Câu hỏi và bài tập củng cố SGK trang 132:1. Một hàm khi khai báo có một tham số, nhưng khi gọi hàm có thể có hai đối số được không?2. Giả sử hàm f có hai tham số x, y khi khai báo, hàm sẽ trả lại giá trị x + 2y. Lời gọi hàm f(10, a) có lỗi hay không?Bước 2: HS thực hiện nhiệm vụ học tập: - HS chia nhóm, thảo luận để hoàn thành Hoạt động 1.- HS đọc SGK, thực hiện yêu cầu.- HS thảo luận nhóm đôi, trả lời Câu hỏi và bài tập củng cố.- GV hỗ trợ, quan sát.Bước 3: Báo cáo kết quả hoạt động, thảo luận: - Đại diện nhóm trình bày kết quả.- Một số HS khác nhận xét, bổ sung.Bước 4: Đánh giá kết quả thực hiện: - GV nêu nhận xét, tổng quát lại kiến thức và chuyển sang nội dung mới. | 1. Tham số và đối số của hàmGiải thích:+ Dòng 1: Hàm f() đã được định nghĩa với ba tham số a, b, c. Hàm trả lại giá trị là a + b + c.+ Dòng 3: Hàm f() được gọi với ba giá trị cụ thể là 1, 2, 3. Các giá trị được truyền qua tham số được gọi là đối số. Đối số tại dòng 3 là các số cụ thể.+ Dòng 6: Hàm f() được gọi với ba biến x, y, z, đã được gán giá trị (dòng 5). các biến được truyền qua tham số được gọi là đối số, kết quả trả lại là x + y + z.+ Dòng 10: Hàm f() được gọi với ba biến a, b, c không xác định giá trị nên lời gọi hàm f(a, b, c) báo lỗi do không xác định được giá trị của a, b, c.- Phân biệt tham số và đối số:+ Tham số: là biến được ghi trong khai báo của hàm. Hàm có thể có hoặc không có tham số.+ Đối số: là giá trị được ghi khi gọi hàm.Câu hỏi và bài tập củng cố:1. Không thể có hai đối số.2. Lời gọi hàm f(10, a) không có lỗi. | - 5.2.NC1b: HS thực hành nhập liệu chính xác; tuân thủ nghiêm ngặt quy tắc cú pháp của ngôn ngữ lập trình.- 1.2.NC1b: HS hiểu cơ chế truyền dữ liệu; phân biệt rõ ràng hai trạng thái của dữ liệu trong lập trình: “tham số” là biến đại diện chờ nhận giá trị, còn “đối số” là dữ liệu thực tế được gửi đi khi gọi hàm. HS hiểu rằng sự khớp nối chính xác giữa tham số và đối số (về số lượng, thứ tự) là điều kiện tiên quyết để hệ thống xử lý đúng.
Hoạt động 2: Cách sử dụng chương trình con
a) Mục tiêu: HS biết và thực hiện được cách tạo và sử dụng các hàm (hay còn gọi là chương trình con) trong chương trình.
b) Nội dung: GV hướng dẫn HS cách sử dụng chương trình con và khi nào nên sử dụng chương trình con, hoàn thành Câu hỏi và bài tập củng cố SGK trang 133.
c) Sản phẩm: HS viết chương trình sử dụng chương trình con.
d) Tổ chức thực hiện: 
[BẢNG] HOẠT ĐỘNG CỦA GV VÀ HS | SẢN PHẨM DỰ KIẾN | NLS
[BẢNG] Bước 1: GV chuyển giao nhiệm vụ:- GV yêu cầu HS thảo luận nhóm đôi, thực hiện Hoạt động 2: Bài toán đưa ra là viết chương trình chính yêu cầu nhập số tự nhiên n từ bàn phím và in ra các số nguyên tố nhỏ hơn hoặc bằng n ra màn hình. Trong phần thực hành của Bài 26 em đã biết hàm prime(n) kiểm tra số n có là số nguyên tố. Em sẽ viết chương trình giải bài toán này như thế nào?- GV cho HS đọc nhiệm vụ và tìm hiểu Ví dụ 2 (SGK - tr133).- GV đặt câu hỏi: Lợi ích của việc sử dụng chương trình con là gì?- GV yêu cầu HS đọc và ghi nhớ khung kiến thức trọng tâm.- GV cho HS làm Câu hỏi và bài tập củng cố (SGK - tr133) theo nhóm đôi:1. Sử dụng hàm prime, em hãy viết chương trình in ra các số nguyên tố trong khoảng từ m đến n với m, n là hai số tự nhiên và 1 < m < n.2. Em hãy nêu một công việc, bài toán nào đó mà có thể sử dụng hàm để giải.Bước 2: HS thực hiện nhiệm vụ học tập: - HS thảo luận nhóm đôi, thực hiện Hoạt động 2.- HS suy nghĩ và trả lời câu hỏi, hoàn thành Câu hỏi và bài tập củng cố theo nhóm đôi.- GV quan sát và trợ giúp HS. Bước 3: Báo cáo kết quả hoạt động, thảo luận: - HS xung phong trình bày kết quả.- Một số HS khác nhận xét, bổ sung cho bạn. Bước 4: Đánh giá kết quả thực hiện: GV tổng quát lưu ý lại kiến thức và yêu cầu HS ghi chép đầy đủ vào vở. | 2. Cách sử dụng chương trình con- Hoạt động 2: Chương trình hoàn chỉnh có thể được viết như sau:- Lợi ích của việc sử dụng chương trình con:+ Làm giảm số câu lệnh của chương trình.+ Chương trình có cấu trúc sẽ dễ hiểu và tiết kiệm câu lệnh hơn.+ Chương trình có cấu trúc sẽ dễ dàng hơn khi nâng cấp, mở rộng, chỉnh sửa.Câu hỏi và bài tập củng cố:1. Chương trình có thể như sau:2. Ví dụ một số bài toán như sau:- Bài toán đếm số năm nhuận trong khoảng thời gian nào đó.- Bài toán đếm và tính tổng, trung bình cả các số thỏa mãn tính chất nào đó (ví dụ chia hết cho 5) trong dãy số cho trước. | - 5.2.NC1b: HS thực hành nhập liệu chính xác; tuân thủ nghiêm ngặt quy tắc cú pháp của ngôn ngữ lập trình.- 3.4.NC1a: Sử dụng chương trình con trong lập trình.
Hoạt động 3: Thực hành truyền giá trị cho đối số của hàm
a) Mục tiêu: HS được rèn luyện kĩ năng truyền giá trị cho đối số của hàm.
b) Nội dung: GV lần lượt hướng dẫn HS làm từng nhiệm vụ của bài thực hành.
c) Sản phẩm: HS viết chương trình thiết lập hàm có sử dụng đối số.
d) Tổ chức thực hiện:
[BẢNG] HOẠT ĐỘNG CỦA GV VÀ HS | SẢN PHẨM DỰ KIẾN | NLS
[BẢNG] Bước 1: GV chuyển giao nhiệm vụ:- GV cho HS đọc yêu cầu và lần lượt hướng dẫn HS hoàn thành từng nhiệm vụ của bài thực hành:+ Nhiệm vụ 1: Thiết lập hàm f_sum(A, b) có chức năng tính tổng các số của danh sách A theo quy định như sau:Nếu b = 0 thì tính tổng các số của danh sách A.Nếu b khác 0 thì chỉ tính tổng các số dương của A.+ Nhiệm vụ 2: Thiết lập hàm f_dem (msg, sep) có chức năng đếm số các từ của một xâu msg với kí tự tách từ là sep.+ Nhiệm vụ 3: Thiết lập hàm merge_str (s1, s2) với s1, s2 là hai xâu cần gộp.- GV cho HS tham khảo các chương trình mẫu trong SGK trang 134, 135.Bước 2: HS thực hiện nhiệm vụ học tập:- HS lắng nghe GV hướng dẫn.- HS thực hành, có thể sử dụng chương trình gợi ý trong SGK trang 134, 135.Bước 3: Báo cáo kết quả hoạt động, thảo luận: - HS xung phong trình bày kết quả thực hiện.- Các HS còn lại quan sát, nhận xét và bổ sung ý kiến (nếu có).Bước 4: Đánh giá kết quả thực hiện: GV tổng kết lại kiến thức trọng tâm và chuyển sang nội dung luyện tập. | - Nhiệm vụ 1: Chương trình có thể như sau:- Nhiệm vụ 2:Chương trình có thể như sau:- Nhiệm vụ 3: Gọi S là xâu kết quả sau khi gộp hai xâu s1, s2, chương trình có thể như sau: | 3.4.NC1a: HS thiết lập hàm có tham số trong Python.
3. HOẠT ĐỘNG LUYỆN TẬP
a) Mục tiêu: HS củng cố lại kĩ năng sử dụng chương trình con.
b) Nội dung: HS vận dụng các kiến thức đã học để hoàn thành Luyện tập 1, 2 (SGK - tr135) và trả lời câu hỏi trắc nghiệm.
c) Sản phẩm học tập: HS thiết lập hàm, sử dụng chương trình con để viết chương trình tính và in ra tổng của các số tự nhiên.
d) Tổ chức thực hiện: 
Bước 1: GV chuyển giao nhiệm vụ: 
- GV tổng hợp các kiến thức cần ghi nhớ cho HS.
Nhiệm vụ 1: Trả lời câu hỏi trắc nghiệm khách quan
- GV tổ chức trò chơi trắc nghiệm nhanh trên Quizizz hoặc Kahoot để củng cố toàn bài.
- GV cung cấp mã QR hoặc đường Links cho HS làm Phiếu bài tập, trả lời nhanh một số câu hỏi trắc nghiệm tổng kết bài học.
Câu 1: Hàm tự định nghĩa trong Python có thể có bao nhiêu tham số?
A. 0B. 1C. 2D. Không hạn chế
Câu 2: Khi gọi hàm, dữ liệu được truyền vào hàm được gọi là gì?
A. Tham sốB. Hiệu sốC. Đối sốD. Hàm số
Câu 3: Hàm func(m, n) được định nghĩa như sau:
Giả sử chúng ta thực hiện các lệnh sau: 
Kết quả sẽ in ra số nào?
A. 31B. 13C. 10D. 11
Câu 4: Đoạn chương trình sau sẽ in ra số nào?
A. 20B. 10C. 18D. 30
Câu 5: Cho hàm:
def power(a, b):
       return a ** b
Kết quả của lệnh print(power(2,3)) là:
A. 5B. 6C. 8D. 9
Nhiệm vụ 2: Thực hiện phần Luyện tập tr.135 SGK
Bước 2: HS thực hiện nhiệm vụ học tập: 
- HS suy nghĩ, hoàn thành các bài tập GV yêu cầu.
- GV quan sát và hỗ trợ, hướng dẫn.
Bước 3: Báo cáo kết quả hoạt động, thảo luận: 
- Mỗi BT GV mời 1 đến 2 HS trình bày. Các HS khác chú ý chữa bài, theo dõi nhận xét bài các nhóm trên bảng.
- HS trả lời nhanh câu hỏi trắc nghiệm.
Đáp án trắc nghiệm: 
[BẢNG] Câu 1 | Câu 2 | Câu 3 | Câu 4 | Câu 5
[BẢNG] D | C | B | A | C
Gợi ý thực hiện phần Luyện tập: 
Bài 1: Hàm power() có thể được thiết lập như sau:
Bài 2: Chương trình được thiết lập như sau:
Bước 4: Đánh giá kết quả thực hiện: 
- GV chữa bài, chốt đáp án, tuyên dương các hoạt động tốt, nhanh và chính xác.
[2.1.NC1a: HS thực hiện các tương tác được xác định rõ ràng với công nghệ số (làm bài tập online) trong lớp học.
3.4.NC1a: HS thiết lập hàm trong Python.]
4. HOẠT ĐỘNG VẬN DỤNG
a) Mục tiêu: Học sinh thực hiện làm bài tập vận dụng để nắm vững kiến thức.
b) Nội dung: HS sử dụng SGK và vận dụng kiến thức đã học để hoàn thành bài tập Vận dụng 1, 2 (SGK – tr135) và một số bài tập làm thêm.
c) Sản phẩm: Bài làm của HS, kĩ năng giải quyết nhiệm vụ học tập.
d) Tổ chức thực hiện: 
Bước 1: GV chuyển giao nhiệm vụ
- GV yêu cầu HS thảo luận nhóm đôi hoàn thành bài tập Vận dụng 1, 2 (SGK - tr135).
- GV giao một số bài tập làm thêm cho HS:
Bài 1: Chỉ số sức khỏe BMI của con người được định nghĩa theo công thức sau:
BMI =  , trong đó m là khối lượng cơ thể tính bằng kg, h là chiều cao tính theo mét. Viết hàm số tính chỉ số BMI theo các tham số m, h.
Bài 2: Viết hàm số (hàm dấu) sign(x) trả lại 1 nếu x > 0, trả lại 0 nếu x = 0 và trả lại - 1 nếu x < 0.
Bài 3: Chỉ số sức khỏe BMI có ý nghĩa như sau:
- Nếu BMI < 18 thì phân loại là gầy.
- Nếu BMI từ 18 đến 25 thì phân loại là bình thường.
- Nếu BMI > 25 thì phân loại là béo phì.
Viết chương trình thực hiện các công việc sau:
- Yêu cầu người dùng nhập các thông số: họ tên, cân nặng (đơn vị kg) và chiều cao (m).
- Sau đó thông báo "Bạn gầy" hoặc "Bạn bình thường" hoặc "Bạn bị béo phì".
Bước 2: HS thực hiện nhiệm vụ học tập
- HS hợp tác, thảo luận đưa ra ý kiến.
- GV điều hành, quan sát, hỗ trợ.
Bước 3: Báo cáo kết quả hoạt động, thảo luận
- Đại diện nhóm trình bày kết quả thảo luận, các nhóm khác theo dõi, bổ sung ý kiến.
Gợi ý thực hiện:
Vận dụng 1: Chương trình có thể như sau:
Vận dụng 2: Chương trình có thể như sau:
Bài 1: Hàm có thể viết như sau: 
Bài 2: Hàm có thể viết như sau: 
Bài 3: Chương trình có thể viết như sau:
Bước 4: Đánh giá kết quả thực hiện
- GV nhận xét, đánh giá, đưa ra một vài ý mà HS còn thiếu, chốt đáp án.
[3.4.NC1a: HS thiết lập hàm trong Python.]
* HƯỚNG DẪN VỀ NHÀ
Ghi nhớ kiến thức trong bài. 
Hoàn thành các bài tập còn lại trong SBT.
Chuẩn bị bài mới Bài 28 - Phạm vi của biến.
```

</details>

