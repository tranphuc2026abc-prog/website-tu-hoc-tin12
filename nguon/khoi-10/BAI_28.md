# Bài 28. PHẠM VI CỦA BIẾN

> Học liệu được chuyển định dạng từ KHBD Tin học 10 do giáo viên cung cấp. Nội dung trích xuất đầy đủ được giữ ở phần cuối để đối chiếu.

## Chủ đề
GIẢI QUYẾT VẤN ĐỀ VỚI SỰ TRỢ GIÚP CỦA MÁY TÍNH

## Mục tiêu kiến thức từ KHBD

Học xong bài này, HS đạt các yêu cầu sau:
Biết và trình bày được ý nghĩa của phạm vi hoạt động của biến trong chương trình và hàm.

## Trọng tâm hoạt động

Hoạt động 1: Phạm vi của biến khai báo trong hàm
Hoạt động 2: Phạm vi của biến khai báo ngoài hàm
Hoạt động 3: Thực hành phạm vi của biến

## Nội dung KHBD đầy đủ đã trích xuất

<details>
<summary>Mở nội dung KHBD</summary>

```text
Ngày soạn: .../.../...
Ngày dạy: .../.../...
BÀI 28: PHẠM VI CỦA BIẾN
(3 tiết)
I. MỤC TIÊU
1. Kiến thức
Học xong bài này, HS đạt các yêu cầu sau:
Biết và trình bày được ý nghĩa của phạm vi hoạt động của biến trong chương trình và hàm.
2. Năng lực 
 - Năng lực chung:
Năng lực tự chủ và tự học trong tìm tòi khám phá
Năng lực giao tiếp và hợp tác trong trình bày, thảo luận và làm việc nhóm
Năng lực tư duy và giải quyết vấn đề một cách sáng tạo trong thực hành, vận dụng.
- Năng lực riêng: 
Biết và sử dụng được biến địa phương và biến tổng thể của chương trình có hàm.
- Năng lực số:
1.2.NC1b: Hiểu cơ chế quản lý bộ nhớ của Python (Global Frame vs Local Frame), tại sao biến biến mất sau khi hàm chạy xong.
5.2.NC1b: Phân tích và sửa các lỗi logic liên quan đến phạm vi biến.
6.2.NC1b: Sử dụng AI để giải thích nguyên lý hoạt động của từ khóa global hoặc sinh dữ liệu kiểm thử cho các hàm xử lý danh sách.
3.1.NC1a: Xây dựng mã nguồn sạch, phân định rõ ràng dữ liệu dùng chung và dữ liệu riêng tư của hàm.
3. Phẩm chất
Hình thành ý thức trách nhiệm, tính cẩn thận khi làm việc nhóm, phẩm chất làm việc chăm chỉ, chuyên cần để hoàn thành một nhiệm vụ.
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
a) Mục tiêu: Gợi mở cho HS đến khái niệm phạm vi tác dụng của biến.
b) Nội dung: GV đưa ra 2 câu hỏi và yêu cầu HS thảo luận, chưa cần trả lời chính xác.
c) Sản phẩm: GV dẫn ra được hai khái niệm liên quan đến tác dụng của biến trong chương trình:
- Biến địa phương (biến nhớ cục bộ).
- Biến tổng thể.
d) Tổ chức thực hiện: 
Bước 1: GV chuyển giao nhiệm vụ: 
- GV yêu cầu xem video AI được thiết kế để phục vụ bài dạy và trả lời câu hỏi xuất hiện trong video đó.
- GV yêu cầu HS trả lời câu hỏi:
1. Một biến được định nghĩa trong chương trình chính (bên ngoài các hàm) thì sẽ được sử dụng như thế nào bên trong các hàm?
2. Một biến được khai báo bên trong một hàm thì có sử dụng được ở bên ngoài hàm đó hay không?
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
- GV dẫn dắt HS vào bài học mới: Bài học ngày hôm nay sẽ giúp các em tìm câu trả lời cho các câu hỏi trên - Bài 28: Phạm vi của biến.
2. HÌNH THÀNH KIẾN THỨC MỚI
Hoạt động 1: Phạm vi của biến khai báo trong hàm
a) Mục tiêu: HS hiểu được tác dụng của biến được khai báo bên trong hàm sẽ không có tác dụng bên ngoài hàm.
b) Nội dung: GV hướng dẫn HS đọc SGK, thực hiện Hoạt động 1 để tìm hiểu phạm vi của biến khai báo trong hàm.
c) Sản phẩm: HS nêu được phạm vi của biến khai báo bên trong hàm, trả lời Câu hỏi và bài tập củng cố SGK trang 137.
d) Tổ chức thực hiện:
[BẢNG] HOẠT ĐỘNG CỦA GV VÀ HS | SẢN PHẨM DỰ KIẾN | NLS
[BẢNG] Bước 1: GV chuyển giao nhiệm vụ:- GV chia lớp thành các nhóm 3 - 4 HS.- GV giao nhiệm vụ cho HS: Thao tác trực tiếp trên môi trường Python, gõ và chạy đoạn lệnh trong Ví dụ để tìm hiểu phạm vi có hiệu lực của biến khi khai báo bên trong một hàm.- Từ ví dụ, GV đặt câu hỏi: Thế nào là biến địa phương, hay biến cục bộ?- GV nhấn mạnh thêm cho HS hiểu khái niệm biến địa phương khi khai báo bên trong hàm được hiểu như sau: Giả sử trong hàm có khai báo biến n và thực hiện một số tính toán với biến n. Khi đó:+ Nếu bên ngoài hàm cũng có biến n thì sau khi thực hiện hàm trên, biến n không thay đổi ngoài hàm.+ Nếu bên ngoài hàm chưa có biến n, thì sau khi thực hiện hàm, nếu gọi đến biến n sẽ báo lỗi.- GV yêu cầu HS hoạt động cá nhân và trả lời Câu hỏi và bài tập củng cố SGK trang 137:1. Giả sử có các lệnh sau:Giá trị của a, b bằng bao nhiêu sau khi thực hiện các lệnh sau?a) f(1, 2)              b) f(10, 20)2. Ta có thể khai báo một biến bên trong hàm trùng tên với biến đã khai báo bên ngoài hàm không?Bước 2: HS thực hiện nhiệm vụ học tập: - HS chia nhóm, thảo luận để hoàn thành Hoạt động 1.- HS đọc SGK, trả lời câu hỏi.- HS hoạt động cá nhân, trả lời Câu hỏi và bài tập củng cố.- GV hỗ trợ, quan sát.Bước 3: Báo cáo kết quả hoạt động, thảo luận: - Đại diện nhóm trình bày kết quả.- Một số HS khác nhận xét, bổ sung.Bước 4: Đánh giá kết quả thực hiện: - GV nêu nhận xét, tổng quát lại kiến thức và chuyển sang nội dung mới. | 1. Phạm vi của biến khai báo trong hàm- Hoạt động 1: Các biến được khai báo bên trong hàm chỉ được sử dụng bên trong hàm. Chương trình chính không sử dụng được.- Khái niệm biến địa phương (biến cục bộ): Biến được khai báo bên trong hàm sẽ không có tác dụng bên ngoài hàm. Các biến nhớ loại này được gọi là biến địa phương, hay biến cục bộ.Câu hỏi và bài tập củng cố:1. Trong cả hai trường hợp a), b), giá trị các biến a, b không thay đổi sau khi thực hiện lệnh, tức là a = 1, b = 2.2. Có thể khai báo một biến bên trong hàm trùng tên với biến đã khai báo bên ngoài hàm. | - 5.2.NC1b: HS thực hành nhập liệu chính xác; tuân thủ nghiêm ngặt quy tắc cú pháp của ngôn ngữ lập trình.- 1.2.NC1b: HS hiểu rằng biến khai báo trong hàm (biến cục bộ) chỉ tồn tại tạm thời trong ngăn xếp thực thi và bị hệ điều hành thu hồi ngay khi hàm kết thúc. Việc này giải thích tại sao máy tính báo lỗi "NameError" khi cố gắng truy xuất biến đó từ chương trình chính.
Hoạt động 2: Phạm vi của biến khai báo ngoài hàm
a) Mục tiêu: HS biết được phạm vi tác dụng của một biến khi khai báo ở chương trình chính.
b) Nội dung: GV hướng dẫn HS thực hiện Hoạt động 2 để tìm hiểu phạm vi của biến khi khai báo ngoài hàm.
c) Sản phẩm: HS nêu được phạm vi của biến khai báo bên ngoài hàm, trả lời Câu hỏi và bài tập củng cố SGK trang 138.
d) Tổ chức thực hiện: 
[BẢNG] HOẠT ĐỘNG CỦA GV VÀ HS | SẢN PHẨM DỰ KIẾN | NLS
[BẢNG] Bước 1: GV chuyển giao nhiệm vụ:- GV giao nhiệm vụ cho HS: Thao tác trực tiếp trên môi trường Python, gõ và chạy đoạn lệnh trong Ví dụ 1 và Ví dụ 2 để tìm hiểu phạm vi có hiệu lực của biến khi khai báo bên ngoài một hàm.+ Ví dụ 1: Biến khai báo ngoài hàm không có tác dụng bên trong hàm+ Ví dụ 2: Biên trong hàm có thể truy cập để sử dụng giá trị của biến đã khai báo trước đó ở bên ngoài hàm.- GV đặt câu hỏi cho HS: Nếu muốn biến bên ngoài vẫn có tác dụng bên trong hàm thì ta làm như thế nào?- GV lấy ví dụ minh họa và phân tích cụ thể cho HS:- GV đặt câu hỏi cho HS: Thế nào là biến tổng thể?- GV nhấn mạnh thêm cho HS hiểu khái niệm biến địa phương khi khai báo bên trong hàm được hiểu như sau: Giả sử trong hàm có khai báo biến n và thực hiện một số tính toán với biến n. Khi đó:+ Nếu bên ngoài hàm cũng có biến n thì sau khi thực hiện hàm trên, biến n không thay đổi ngoài hàm.+ Nếu bên ngoài hàm chưa có biến n, thì sau khi thực hiện hàm, nếu gọi đến biến n sẽ báo lỗi.- GV cho HS đọc và ghi nhớ khung kiến thức trọng tâm.- GV yêu cầu HS hoạt động cá nhân, trả lời Câu hỏi và bài tập củng cố SGK trang 138:Giả sử hàm f(x,y) được định nghĩa như sau:Kết quả nào được in ra khi thực hiện các lệnh sau?Bước 2: HS thực hiện nhiệm vụ học tập: - HS thảo luận nhóm, thực hiện Hoạt động 2.- HS suy nghĩ và trả lời câu hỏi, hoàn thành Câu hỏi và bài tập củng cố.- GV quan sát và trợ giúp HS. Bước 3: Báo cáo kết quả hoạt động, thảo luận: - HS xung phong trình bày kết quả.- Một số HS khác nhận xét, bổ sung cho bạn. Bước 4: Đánh giá kết quả thực hiện: GV tổng quát lưu ý lại kiến thức và yêu cầu HS ghi chép đầy đủ vào vở. | 2. Phạm vi của biến khai báo ngoài hàm- Hoạt động 2:Biến khai báo ngoài hàm không có tác dụng bên trong hàm.- Muốn biến khai báo bên ngoài hàm có tác dụng bên trong hàm thì bên trong hàm cần khai báo lại biến đó với từ khóa global.→ Khi đó biến nhớ bên ngoài đó trở thành biến tổng thể.- Biến tổng thể là biến có thể dùng bên ngoài và bên trong hàm đang xét.Câu hỏi và bài tập củng cố:Kết quả in ra số 16. | - 5.2.NC1b: HS thực hành nhập liệu chính xác; tuân thủ nghiêm ngặt quy tắc cú pháp của ngôn ngữ lập trình.- 1.2.NC1b: HS hiểu cách hàm đọc biến toàn cục và cách sử dụng từ khóa global để thay đổi giá trị biến toàn cục.
Hoạt động 3: Thực hành phạm vi của biến
a) Mục tiêu: HS được thực hành liên quan đến phạm vi biến.
b) Nội dung: GV lần lượt hướng dẫn HS làm từng nhiệm vụ của bài thực hành.
c) Sản phẩm: 
- HS viết hàm liên quan đến khai báo tham số và giá trị trả lại của hàm là kiểu dữ liệu danh sách.
- HS khai báo hàm với ý nghĩa các tham số có tính chất một lựa chọn của đầu ra của hàm.
- HS viết chương trình có sử dụng hàm như chương trình con.
d) Tổ chức thực hiện:
[BẢNG] HOẠT ĐỘNG CỦA GV VÀ HS | SẢN PHẨM DỰ KIẾN | NLS
[BẢNG] Bước 1: GV chuyển giao nhiệm vụ:- GV cho HS đọc yêu cầu và lần lượt hướng dẫn HS hoàn thành từng nhiệm vụ của bài thực hành:+ Nhiệm vụ 1: Viết hàm với đầu vào là danh sách A chứa các số và số thực x. Hàm trả lại một danh sách kết quả B từ danh sách A bằng cách chỉ giữ lại các phần tử lớn hơn hoặc bằng x.+ Nhiệm vụ 2: Viết hàm với đầu vào là xâu kí tự Str và số c, đầu ra là danh sách các từ được tách ra từ xâu Str những đã được chuyển thành chữ in hoa hoặc chữ in thường, hoặc chỉ chuyển kí tự đầu của các từ thành chữ in hoa tùy thuộc vào tham số đầu vào c như sau:Nếu c bằng 0, danh sách B là các từ được chuyển thành chữ in hoa.Nếu c = 1, danh sách là các từ được chuyển thành chữ in thường.Nếu c = 2, danh sách B là các từ được chuyển viết chữ hoa kí tự đầu của mỗi từ.+ Nhiệm vụ 3: Viết chương trình yêu cầu thực hiện lần lượt các việc sau, mỗi việc được thực hiện bởi một hàm:1. Nhập từ bàn phím một dãy các số nguyên, mỗi số cách nhau bởi dấu cách. Chuyển các số này vào danh sách A và in ra danh sách A ra màn hình.2. Trích từ danh sách A ra một danh sách B gồm các phần tử lớn hơn 0. In danh sách B ra màn hình.3. Trích từ danh sách A ra một danh sách C gồm các phần tử nhỏ hơn 0. In danh sách C ra màn hình.- GV cho HS tham khảo các chương trình mẫu trong SGK trang 138, 139.Bước 2: HS thực hiện nhiệm vụ học tập:- HS lắng nghe GV hướng dẫn.- HS thực hành, có thể sử dụng chương trình gợi ý trong SGK trang 138, 139.Bước 3: Báo cáo kết quả hoạt động, thảo luận: - HS xung phong trình bày kết quả thực hiện.- Các HS còn lại quan sát, nhận xét và bổ sung ý kiến (nếu có).Bước 4: Đánh giá kết quả thực hiện: GV tổng kết lại kiến thức trọng tâm và chuyển sang nội dung luyện tập. | - Nhiệm vụ 1: Chương trình có thể như sau:- Nhiệm vụ 2:Chương trình có thể viết như sau:- Nhiệm vụ 3: Toàn bộ chương trình có thể như sau: | 3.4.NC1a: HS thiết lập hàm trong Python.
3. HOẠT ĐỘNG LUYỆN TẬP
a) Mục tiêu: HS được thực hành, củng cố kĩ năng viết hàm.
b) Nội dung: HS vận dụng các kiến thức đã học để hoàn thành Luyện tập 1, 2 (SGK - tr140).
c) Sản phẩm học tập: Bài làm của HS, kĩ năng giải quyết nhiệm vụ học tập.
d) Tổ chức thực hiện: 
Bước 1: GV chuyển giao nhiệm vụ: 
- GV tổng hợp các kiến thức cần ghi nhớ cho HS.
Nhiệm vụ 1: Trả lời câu hỏi trắc nghiệm khách quan
- GV tổ chức trò chơi trắc nghiệm nhanh trên Quizizz hoặc Kahoot để củng cố toàn bài.
- GV cung cấp mã QR hoặc đường Links cho HS làm Phiếu bài tập, trả lời nhanh một số câu hỏi trắc nghiệm tổng kết bài học.
Câu 1. Biến được khai báo bên trong một hàm (không dùng từ khóa global) có phạm vi như thế nào?
A. Có thể sử dụng ở mọi nơi trong chương trình.B. Chỉ sử dụng được trong hàm đó.C. Chỉ sử dụng được trong chương trình chính.D. Có thể sử dụng ở mọi hàm khác.
Câu 2. Cho chương trình sau:
def f():
      x = 5
      return x
f()
print(x)
Kết quả khi thực hiện lệnh print(x) là:
A. In ra 0B. In ra 5C. Báo lỗi NameErrorD. In ra None
Câu 3. Cho đoạn chương trình:
a = 10
def f():
      return a + 5
print(f())
Kết quả in ra màn hình là:
A. 5B. 10C. 15D. Báo lỗi
Câu 4. Cho đoạn chương trình:
x = 3
def f():
      global x
      x = x + 2
f()
print(x)
Kết quả in ra màn hình là:
A. 3B. 2C. 0D. 5
Câu 5. Phát biểu nào sau đây đúng về biến toàn cục (biến khai báo ngoài hàm)?
A. Không thể sử dụng bên trong hàm.B. Chỉ có thể sử dụng nếu khai báo lại bằng từ khóa local.C. Có thể sử dụng bên trong hàm để đọc giá trị của nó.D. Luôn bị thay đổi giá trị khi gọi hàm.
Nhiệm vụ 2: Thực hiện phần Luyện tập tr.140 SGK
Bước 2: HS thực hiện nhiệm vụ học tập: 
- HS thảo luận cặp đôi, hoàn thành các bài tập GV yêu cầu.
- GV quan sát và hỗ trợ, hướng dẫn.
Bước 3: Báo cáo kết quả hoạt động, thảo luận: 
- Đại diện nhóm xung phong trình bày kết quả thảo luận. 
- Các HS khác chú ý chữa bài, theo dõi nhận xét bài các nhóm trên bảng.
Đáp án trắc nghiệm: 
[BẢNG] Câu 1 | Câu 2 | Câu 3 | Câu 4 | Câu 5
[BẢNG] B | C | C | D | C
Gợi ý thực hiện phần Luyện tập: 
Câu 1: Hàm có thể như sau:
Câu 2: Hàm Tach_day() có thể như sau:
Bước 4: Đánh giá kết quả thực hiện: 
- GV chữa bài, chốt đáp án, tuyên dương các hoạt động tốt, nhanh và chính xác.
[2.1.NC1a: HS thực hiện các tương tác được xác định rõ ràng với công nghệ số (làm bài tập online) trong lớp học.
3.4.NC1a: HS thiết lập hàm trong Python.]
4. HOẠT ĐỘNG VẬN DỤNG
a) Mục tiêu: Học sinh thực hiện làm bài tập vận dụng để nắm vững kiến thức.
b) Nội dung: HS sử dụng SGK và vận dụng kiến thức đã học để hoàn thành bài tập Vận dụng 1, 2 (SGK – tr140).
c) Sản phẩm: Bài làm của HS, kĩ năng giải quyết nhiệm vụ học tập.
d) Tổ chức thực hiện: 
Bước 1: GV chuyển giao nhiệm vụ
- GV yêu cầu HS thảo luận nhóm đôi, hoàn thành bài tập Vận dụng 1, 2 (SGK - tr140).
Bước 2: HS thực hiện nhiệm vụ học tập
- HS hợp tác, thảo luận đưa ra ý kiến.
- GV điều hành, quan sát, hỗ trợ.
Bước 3: Báo cáo kết quả hoạt động, thảo luận
- Đại diện nhóm trình bày kết quả thảo luận. 
- Các nhóm khác theo dõi, bổ sung ý kiến.
Gợi ý thực hiện: 
Câu 1: Chương trình có thể như sau:
Câu 2: Chương trình có thể như sau:
Bước 4: Đánh giá kết quả thực hiện
- GV nhận xét, đánh giá, đưa ra một vài ý mà HS còn thiếu, chốt đáp án.
[3.4.NC1a: HS viết chương trình Python giải quyết bài toán cụ thể.]
* HƯỚNG DẪN VỀ NHÀ
Ghi nhớ kiến thức trong bài. 
Hoàn thành các bài tập trong SBT.
Chuẩn bị bài mới Bài 29 - Nhận biết lỗi chương trình.
```

</details>

