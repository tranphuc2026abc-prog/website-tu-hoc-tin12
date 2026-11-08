# Bài 26. HÀM TRONG PYTHON

> Học liệu được chuyển định dạng từ KHBD Tin học 10 do giáo viên cung cấp. Nội dung trích xuất đầy đủ được giữ ở phần cuối để đối chiếu.

## Chủ đề
GIẢI QUYẾT VẤN ĐỀ VỚI SỰ TRỢ GIÚP CỦA MÁY TÍNH

## Mục tiêu kiến thức từ KHBD

Học xong bài này, HS đạt các yêu cầu sau:
Biết được chương trình con là hàm.
Biết cách tạo hàm.

## Trọng tâm hoạt động

Hoạt động 1: Một số hàm thiết kế sẵn trong Python
Hoạt động 2: Thiết lập các hàm tự định nghĩa
Hoạt động 3: Thực hành

## Nội dung KHBD đầy đủ đã trích xuất

<details>
<summary>Mở nội dung KHBD</summary>

```text
Ngày soạn: .../.../...
Ngày dạy: .../.../...
BÀI 26: HÀM TRONG PYTHON
(2 tiết)
I. MỤC TIÊU
1. Kiến thức
Học xong bài này, HS đạt các yêu cầu sau:
Biết được chương trình con là hàm.
Biết cách tạo hàm.
2. Năng lực 
 - Năng lực chung:
Tự chủ và tự học, chủ động tìm hiểu, đọc và tìm kiếm thêm các tài liệu liên quan đến nội dung bài học.
Giải quyết được những nhiệm vụ học tập một cách độc lập, theo nhóm và thể hiện sự sáng tạo.
Góp phần phát triển năng lực giao tiếp và hợp tác qua hoạt động nhóm và trao đổi công việc với giáo viên.
- Năng lực riêng: 
Thực hiện được việc tạo hàm và chương trình con.
- Năng lực số:
1.2.NC1b: Hiểu cơ chế “hộp đen” của hàm: nhận dữ liệu đầu vào (Input/Tham số)  xử lý  trả về dữ liệu đầu ra (Output/Return).
3.1.NC1a: Xây dựng các hàm có tính tái sử dụng cao, tuân thủ quy tắc đặt tên chuẩn.
6.2.NC1b: Sử dụng AI để so sánh hiệu quả của các giải thuật khác nhau.
5.2.NC1b: Thực hiện kiểm thử hàm với các bộ dữ liệu biên để đảm bảo tính chính xác.
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
a) Mục tiêu: Gợi mở cho HS biết được ý nghĩa của chương trình con, biết được chương trình con chính là hàm.
b) Nội dung: GV đưa ra câu hỏi cho HS tự trao đổi, thảo luận về lợi ích của hàm trong lập trình.
c) Sản phẩm: Từ yêu cầu, HS vận dụng kiến thức để thực hiện yêu cầu GV đưa ra.
d) Tổ chức thực hiện: 
Bước 1: GV chuyển giao nhiệm vụ: 
- GV yêu cầu xem video AI được thiết kế để phục vụ bài dạy và trả lời câu hỏi xuất hiện trong video đó.
- GV giải thích, giới thiệu cho HS: Các chương trình giải những bài toán thực tế phức tạp thường có rất nhiều dòng lệnh, trong đó có không ít những khối lệnh tương ứng với một số thao tác được lặp đi lặp lại nhiều lần ở những vị trí khác nhau. Để đỡ công viết đi viết lại các khối lệnh đó, trong tổ chức chương trình viết bằng ngôn ngữ lập trình bậc cao, người ta thường gom các khối lệnh như vậy thành những chương trình con. Khi đó, trong chương trình người ta chỉ cần thay cả khối lệnh bằng một lệnh gọi là chương trình con tương ứng. Trong Python, các hàm chính là các chương trình con.
- GV yêu cầu HS thảo luận nhóm, trả lời câu hỏi: Em có thể kể tên một số hàm trong số các lệnh đã học hay không? Các hàm đó có những đặc điểm chung gì? 
Bước 2: HS thực hiện nhiệm vụ học tập: 
- HS xem video và suy nghĩ câu trả lời.
- HS chú ý theo dõi, suy nghĩ câu trả lời.
Bước 3: Báo cáo kết quả hoạt động, thảo luận: 
- GV gọi một số HS trả lời, HS khác nhận xét, bổ sung:
+ Một số hàm đã học là: input(), int(), print()...
+ Đặc điểm chung là hàm luôn có dấu ngoặc tròn đi liền sau tên lệnh.
Bước 4: Đánh giá kết quả thực hiện: 
- GV nhận xét, đánh giá và kết luận.
[6.1.NC1a: HS sử dụng công cụ AI hoặc sản phẩm số do GV cung cấp để tiếp nhận thông tin, trả lời câu hỏi đơn giản.
2.1.NC1a: HS thực hiện các tương tác cơ bản với học liệu số (xem video, trả lời câu hỏi trên môi trường số).
1.1.NC1a: HS tiếp cận, khai thác được thông tin từ nguồn học liệu số dưới sự hướng dẫn của GV.]
- GV dẫn dắt HS vào bài học mới.
Nội dung của hàm trong Python sẽ được chỉ ra cụ thể hơn trong bài học - Bài 26: Hàm trong Python.
2. HÌNH THÀNH KIẾN THỨC MỚI
Hoạt động 1: Một số hàm thiết kế sẵn trong Python
a) Mục tiêu: HS nhận biết tác dụng và cách viết các hàm đã học trong Python.
b) Nội dung: HS đọc SGK và trả lời Hoạt động 1, thảo luận nhóm xây dựng kiến thức bài mới, củng cố bằng cách trả lời Câu hỏi và bài tập củng cố SGK trang 128.
c) Sản phẩm: HS chỉ ra được đặc điểm chung của một số hàm thiết kế sẵn của Python.
d) Tổ chức thực hiện:
[BẢNG] HOẠT ĐỘNG CỦA GV VÀ HS | SẢN PHẨM DỰ KIẾN | NLS
[BẢNG] Bước 1: GV chuyển giao nhiệm vụ:- GV yêu cầu HS thảo luận nhóm đôi, hoàn thành Hoạt động 1 SGK trang 127:Quan sát một số câu lệnh trong Bảng 26.1 và cho biết những câu lệnh này có đặc điểm chung gì.Bảng 26.1. Một số lệnh trong Pythonabs()list()str()len()round()divmod()range()chr()int()bool()input()print()float()ord()type() - GV giới thiệu cho HS: Các lệnh trong Bảng 26.1 chính là các chương trình con được thiết kế sẵn của Python, cho phép người dùng được tùy ý sử dụng khi viết chương trình bằng các câu lệnh gọi hàm tương ứng.- GV yêu cầu HS: Sử dụng AI tìm hiểu chức năng của các lệnh trong bảng 26.1 mà mình chưa biết.- GV yêu cầu HS đọc SGK và cho biết cú pháp câu lệnh gọi hàm trong Python.- GV đặt câu hỏi cho HS: Hàm được chia thành mấy loại? Lấy ví dụ?- GV nhấn mạnh cho HS: Khi gọi hàm luôn phải đi liền với dấu ngoặc tròn.- GV yêu cầu HS đọc lại khung kiến thức trọng tâm.- GV cho HS đọc và trả lời Câu hỏi và bài tập củng cố SGK trang 128:Mô tả tham số và giá trị trả lại của mỗi hàm sau: float(), str(), len(), list().Bước 2: HS thực hiện nhiệm vụ học tập: - HS thảo luận nhóm đôi, suy nghĩ để hoàn thành Hoạt động 1.- HS lắng nghe GV hướng dẫn, giới thiệu kiến thức mới.- HS sử dụng AI tìm hiểu kiến thức.- HS làm việc cá nhân, trả lời Câu hỏi và bài tập củng cố.- GV hỗ trợ, quan sát.Bước 3: Báo cáo kết quả hoạt động, thảo luận: - HS đọc kết quả từ AI.- Đại diện nhóm trình bày.- Một số HS khác nhận xét, bổ sung cho bạn. Bước 4: Đánh giá kết quả thực hiện: - GV nêu nhận xét, tổng quát lại kiến thức. | 1. Một số hàm thiết kế sẵn của Python- Hoạt động 1: Đặc điểm chung của các lệnh trong Bảng 26.1:+ Đều có dấu đóng mở ngoặc đi sau tên lệnh.+ Bên trong dấu ngoặc là các tham số, có thể là các đại lượng, các biến hoặc biểu thức.- Cú pháp câu lệnh gọi hàm:<tên hàm>(<danh sách tham số hàm>)- Hàm trong Python được phân làm hai loại:+ Hàm có giá trị trả lại: input(), int(), divmod(),...+ Hàm không có giá trị trả lại: print().Câu hỏi và bài tập củng cố:HàmTham sốÝ nghĩafloat()x có thể là số hoặc xâu kí tự.Chuyển x sang số thập phân.str(x)x có thể là số hoặc xâu kí tự.Chuyển x sang xâu kí tự.len(x)x là danh sách hoặc xâu kí tự.Độ dài của đối tượng xlist(x)x là xâu kí tự hoặc hàm range().Chuyển x sang danh sách. | - 6.2.NC1a: Sử dụng AI để tìm kiếm thông tin phục vụ học tập.- 5.2.NC1b: HS biết cách gọi và sử dụng các hàm thư viện chuẩn để giải quyết vấn đề nhanh chóng và chính xác.- 1.2.NC1b: HS phân loại chức năng xử lý dữ liệu; nhận diện được nhóm hàm xử lý số, nhóm hàm xử lý chuỗi/danh sách và nhóm hàm chuyển đổi kiểu dữ liệu, từ đó lựa chọn công cụ phù hợp cho từng loại dữ liệu cụ thể.
Hoạt động 2: Thiết lập các hàm tự định nghĩa
a) Mục tiêu: HS biết cách định nghĩa hàm trong Python.
b) Nội dung: HS trả lời câu hỏi xây dựng bài về các thiết lập các hàm trong Python, làm Câu hỏi và bài tập củng cố SGK trang 129.
c) Sản phẩm: HS thiết lập được các hàm tự định nghĩa.
d) Tổ chức thực hiện: 
[BẢNG] HOẠT ĐỘNG CỦA GV VÀ HS | SẢN PHẨM DỰ KIẾN | NLS
[BẢNG] Bước 1: GV chuyển giao nhiệm vụ:- GV giao nhiệm vụ cho HS: Thao tác trực tiếp trên môi trường Python, gõ các lệnh trong Ví dụ 1 và Ví dụ 2 để tìm hiểu cách viết hàm trong Python.+ Ví dụ 1: Cách viết hàm có trả lại giá trị.+ Ví dụ 2: Cách viết hàm không trả lại giá trị.- GV yêu cầu HS: Hãy viết khối lệnh mô tả hàm thẳng hàng với dòng khai báo hàm (không thụt đầu dòng) và quan sát kết quả khi thực thi hàm. GV lưu ý cho HS cách viết hàm: Sau dấu ":" cần xuống dòng và viết thụt vào (1 tab hoặc 4 dấu cách).- Từ Ví dụ 1 và 2, GV yêu cầu HS: Em hãy nêu cú pháp thiết lập hàm trong Python.- GV chốt kiến thức cách tự định nghĩa hàm trong Python như khung kiến thức trọng tâm, sau đó nhấn mạnh:+ Nếu trong khai báo của hàm có lệnh return <giá trị> thì đó là hàm có giá trị trả lại.+ Nếu trong khai báo của hàm không có lệnh return hoặc có return nhưng sau đó không có giá trị nào cả thì đó là hàm không có giá trị trả lại.+ Gặp lệnh return thì hàm dừng ngay.+ Trong khai báo của hàm có thể có nhiều từ khóa return.+ Các biến trong khai báo đầu vào của hàm được gọi là tham số của hàm tự định nghĩa.- GV cho HS làm Câu hỏi và bài tập củng cố (SGK - tr129) theo nhóm đôi:Quan sát các hàm sau, giải thích cách thiết lập và chức năng của mỗi hàm:a) b)Bước 2: HS thực hiện nhiệm vụ học tập: - HS lắng nghe GV hướng dẫn, thực hiện nhiệm vụ.- Nếu gặp lỗi trong quá trình viết code, HS có thể sử dụng AI để tìm hiểu và gỡ lỗi.- HS hoàn thành các yêu cầu, hoạt động cặp đôi, kiểm tra chéo đáp án.- GV quan sát và trợ giúp HS. Bước 3: Báo cáo kết quả hoạt động, thảo luận: - HS xung phong trình bày kết quả.- Một số HS khác nhận xét, bổ sung cho bạn. Bước 4: Đánh giá kết quả thực hiện: GV tổng quát lưu ý lại kiến thức và yêu cầu HS ghi chép đầy đủ vào vở. | 2. Thiết lập các hàm tự định nghĩa- Cách thiết lập hàm trong Python:+ Hàm trong Python được định nghĩa bằng từ khóa def, theo sau là tên hàm (tên hàm sẽ theo quy tắc đặt tên địa danh).+ Hàm có thể có hoặc không có tham số. Khối lệnh mô tả hàm được viết sau dấu ":" và viết lùi vào, thẳng hàng.+ Hàm có thể có hoặc không có giá trị trả lại sau từ khóa return.- Cú pháp thiết lập hàm có trả lại giá trị:def <tên hàm>(<tham số>):      <khối lệnh>      return <giá trị>- Cú pháp thiết lập hàm không trả lại giá trị:def <tên hàm>(<tham số>):      <khối lệnh>      return Câu hỏi và bài tập củng cố:a) Hàm sẽ yêu cầu người dùng nhập một xâu, sau đó trả về xâu đó.b) Hàm có tham số là n, hàm thực hiện in dãy các số 0, 1, ..., n - 1 trên một dòng. | - 5.2.NC1b: HS thực hành nhập liệu chính xác; tuân thủ nghiêm ngặt quy tắc cú pháp của ngôn ngữ lập trình.- 6.2.NC1b: HS sử dụng AI như một trợ lý lập trình để giải thích mã lỗi.- 1.1.NC1a: HS tuân thủ quy tắc đặt tên hàm để mã nguồn trở thành một tài liệu số minh bạch, dễ bảo trì và chia sẻ trong nhóm làm việc.
Hoạt động 3: Thực hành
a) Mục tiêu: HS được rèn luyện kĩ năng thiết lập hàm trong Python.
b) Nội dung: HS thực hành tự thiết lập hàm trong Python.
c) Sản phẩm: 
- HS viết hàm yêu cầu người dùng nhập họ tên rồi đưa lời chào ra màn hình.
- HS viết hàm prime(n) với tham số là số tự nhiên n và trả lại giá trị True nếu n là số nguyên tố, trả lại False nếu n không phải số nguyên tố.
d) Tổ chức thực hiện:
[BẢNG] HOẠT ĐỘNG CỦA GV VÀ HS | SẢN PHẨM DỰ KIẾN | NLS
[BẢNG] Bước 1: GV chuyển giao nhiệm vụ:- GV cho HS đọc nhiệm vụ:+ Nhiệm vụ 1: Viết hàm yêu cầu người dùng nhập họ tên rồi đưa lời chào ra màn hình.+ Nhiệm vụ 2: Viết hàm prime(n) với tham số là số tự nhiên n và trả lại giá trị True nếu n là số nguyên tố, trả lại False nếu n không phải số nguyên tố.- GV hướng dẫn HS tham khảo các chương trình mẫu trong SGK trang 129, 130.Bước 2: HS thực hiện nhiệm vụ học tập:- HS lắng nghe GV hướng dẫn.- HS thực hành, có thể sử dụng chương trình gợi ý trong SGK trang 129, 130.Bước 3: Báo cáo kết quả hoạt động, thảo luận: - HS trình bày các hàm đã tự thiết lập.- Các HS còn lại quan sát, nhận xét và bổ sung ý kiến (nếu có).Bước 4: Đánh giá kết quả thực hiện: GV tổng kết lại kiến thức trọng tâm và chuyển sang nội dung luyện tập. | Nhiệm vụ 1: Chương trình có thể như sau:Nhiệm vụ 2:Hàm prime(n) và chương trình có thể được thiết lập như sau: | 3.4.NC1a: HS thiết lập hàm trong Python.
3. HOẠT ĐỘNG LUYỆN TẬP
a) Mục tiêu: HS củng cố lại kĩ năng thiết lập hàm trong Python.
b) Nội dung: HS vận dụng các kiến thức đã học để hoàn thành Luyện tập 1, 2 (SGK - tr130) và trả lời câu hỏi trắc nghiệm.
c) Sản phẩm học tập: 
- HS viết hàm với tham số là số tự nhiên n in ra các ước nguyên tố của n.
- HS viết hàm numbers(s) đếm số các chữ số có trong xâu s.
d) Tổ chức thực hiện: 
Bước 1: GV chuyển giao nhiệm vụ: 
- GV tổng hợp các kiến thức cần ghi nhớ cho HS.
Nhiệm vụ 1: Trả lời câu hỏi trắc nghiệm khách quan
- GV tổ chức trò chơi trắc nghiệm nhanh trên Quizizz hoặc Kahoot để củng cố toàn bài.
- GV cung cấp mã QR hoặc đường Links cho HS làm Phiếu bài tập, trả lời nhanh một số câu hỏi trắc nghiệm tổng kết bài học.
Câu 1: Trong ngôn ngữ lập trình Python, hàm có phải là thủ tục hay không? Mệnh đề nào dưới đây mô tả đúng quan hệ giữa hàm và thủ tục?
A. Hàm và thủ tục là hai khái niệm hoàn toàn khác nhau.
B. Hàm là thủ tục nhưng thủ tục có thể không phải là hàm.
C. Trong Python, hàm và thủ tục là hai khái niệm đồng nhất.
D. Thủ tục là hàm nhưng hàm có thể không là thủ tục.
Câu 2: Trong định nghĩa của hàm có thể có bao nhiêu từ khóa return?
A. 1B. 2C. 5D. Không hạn chế
Câu 3: Hàm nào dưới đây là hàm không trả lại giá trị?
A. print()B. float()C. len()D. divmod()
Câu 4: Mệnh đề nào dưới đây mô tả đúng về hàm tự định nghĩa không trả lại giá trị?
A. Trong mô tả hàm không có từ khóa return.
B. Trong mô tả hàm chỉ có một từ khóa return.
C. Trong mô tả hàm phải có tối thiểu hai từ khóa return.
D. Trong mô tả hàm hoặc không có return hoặc có return nhưng không có giá trị sau từ khóa return.
Câu 5: Chọn phát biểu sai
A. Trong Python có thể tự tạo hàm trùng tên với một hàm có sẵn.
B. Trong Python có thể định nghĩa hàm với tên trùng với từ khóa.
C. Hàm có thể có hoặc không có tham số.
D. Đáp án khác.
Nhiệm vụ 2: Thực hiện phần Luyện tập tr.130 SGK
Bước 2: HS thực hiện nhiệm vụ học tập: 
- HS suy nghĩ, hoàn thành các bài tập GV yêu cầu.
- GV quan sát và hỗ trợ, hướng dẫn.
Bước 3: Báo cáo kết quả hoạt động, thảo luận: 
- Mỗi BT GV mời 1 đến 2 HS trình bày. Các HS khác chú ý chữa bài, theo dõi nhận xét bài các nhóm trên bảng.
- HS trả lời nhanh câu hỏi trắc nghiệm.
Đáp án trắc nghiệm: 
[BẢNG] Câu 1 | Câu 2 | Câu 3 | Câu 4 | Câu 5
[BẢNG] C | D | A | D | B
Gợi ý thực hiện phần Luyện tập: 
Bài 1: Chương trình có thể như sau:
Lưu ý: Hàm prime đã được xây dựng ở Nhiệm vụ 2, phần thực hành.
Bài 2: Chương trình có thể như sau:
Bước 4: Đánh giá kết quả thực hiện: 
- GV chữa bài, chốt đáp án, tuyên dương các hoạt động tốt, nhanh và chính xác.
[2.1.NC1a: HS thực hiện các tương tác được xác định rõ ràng với công nghệ số (làm bài tập online) trong lớp học.
3.4.NC1a: Thiết lập hàm trong Python.]
4. HOẠT ĐỘNG VẬN DỤNG
a) Mục tiêu: Học sinh thực hiện làm bài tập vận dụng để nắm vững kiến thức.
b) Nội dung: HS sử dụng SGK và vận dụng kiến thức đã học để làm bài tập Vận dụng 1, 2 (SGK – tr130).
c) Sản phẩm: HS viết hàm cho chương trình và quan sát kết quả.
d) Tổ chức thực hiện: 
Bước 1: GV chuyển giao nhiệm vụ
- GV yêu cầu HS hoạt động nhóm 4 hoàn thành bài tập Vận dụng 1, 2 (SGK - tr130).
Bước 2: HS thực hiện nhiệm vụ học tập
- HS tự phân công nhóm trưởng, hợp tác thảo luận đưa ra ý kiến.
- GV điều hành, quan sát, hỗ trợ.
Bước 3: Báo cáo kết quả hoạt động, thảo luận
- Đại diện nhóm trình bày kết quả thảo luận, các nhóm khác theo dõi, đưa ý kiến.
Gợi ý thực hiện:
Bài 1: 
- Hàm này có ba lần thực hiện lệnh return:
+ Lần return thứ nhất kiểm tra nếu n < 2 thì dừng ngay và trả về False.
+ Lần return thứ hai nếu tìm ra số k là ước của n thì dừng lại ngay và trả về False.
+ Cuối cùng mới return True thông báo n là số nguyên tố.
→ Các viết hàm như trên sẽ tối ưu hơn hàm ở Nhiệm vụ 2, phần thực hành.
[5.2.NC1b: HS giải thích được ý nghĩa của các dòng lệnh.]
Bài 2: 
- Hàm đếm số các kí tự là chữ số trong xâu:
- Hàm đếm số các kí tự là chữ cái tiếng Anh trong xâu:
Bước 4: Đánh giá kết quả thực hiện
- GV nhận xét, đánh giá, đưa ra một vài ý mà HS còn thiếu, chốt đáp án.
[3.4.NC1a: HS viết chương trình sử dụng các hàm.]
* HƯỚNG DẪN VỀ NHÀ
Ghi nhớ kiến thức trong bài. 
Hoàn thành các bài tập còn lại trong SBT.
Chuẩn bị bài mới Bài 27 - Tham số của hàm.
```

</details>

