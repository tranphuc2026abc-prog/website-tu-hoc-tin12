# Bài 29. NHẬN BIẾT LỖI CHƯƠNG TRÌNH

> Học liệu được chuyển định dạng từ KHBD Tin học 10 do giáo viên cung cấp. Nội dung trích xuất đầy đủ được giữ ở phần cuối để đối chiếu.

## Chủ đề
GIẢI QUYẾT VẤN ĐỀ VỚI SỰ TRỢ GIÚP CỦA MÁY TÍNH

## Mục tiêu kiến thức từ KHBD

Học xong bài này, HS đạt các yêu cầu sau:
Biết và phân loại được một số loại lỗi chương trình.
Biết được một vài lỗi ngoại lệ thường gặp.

## Trọng tâm hoạt động

Hoạt động 1: Nhận biết lỗi chương trình
Hoạt động 2: Một số lỗi ngoại lệ thường gặp
Hoạt động 3: Thực hành lập trình và kiểm tra khả năng sinh lỗi khi chạy chương trình

## Nội dung KHBD đầy đủ đã trích xuất

<details>
<summary>Mở nội dung KHBD</summary>

```text
Ngày soạn: .../.../...
Ngày dạy: .../.../...
BÀI 29: NHẬN BIẾT LỖI CHƯƠNG TRÌNH
(2 tiết)
I. MỤC TIÊU
1. Kiến thức
Học xong bài này, HS đạt các yêu cầu sau:
Biết và phân loại được một số loại lỗi chương trình.
Biết được một vài lỗi ngoại lệ thường gặp.
2. Năng lực 
 - Năng lực chung:
Giải quyết được những nhiệm vụ học tập một cách độc lập, theo nhóm và thể hiện sự sáng tạo.
Góp phần phát triển năng lực giao tiếp và hợp tác qua hoạt động nhóm và trao đổi công việc với giáo viên.
- Năng lực riêng: 
Biết và thực hiện được một vài cách nhận biết và sửa lỗi chương trình.
- Năng lực số:
1.2.NC1b: Hiểu cấu trúc của thông báo lỗi (Traceback) do hệ thống trả về; biết cách đọc dòng thông báo để xác định vị trí và nguyên nhân lỗi.
5.2.NC1b: Thực hiện quy trình gỡ lỗi: Chạy thử  Đọc lỗi  Sửa mã  Chạy lại.
6.2.NC1b: Sử dụng Chatbot AI làm trợ lý gỡ lỗi để giải thích ý nghĩa các mã lỗi tiếng Anh chuyên ngành hoặc tìm lỗi logic mà trình biên dịch không phát hiện được.
3.1.NC1a: Xây dựng các đoạn mã kiểm thử để đảm bảo chương trình hoạt động ổn định với nhiều loại dữ liệu đầu vào.
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
a) Mục tiêu: Gợi mở cho HS đến khái niệm lỗi chương trình.
b) Nội dung: GV đưa ra câu hỏi và yêu cầu HS thảo luận, chưa cần trả lời chính xác.
c) Sản phẩm: HS tự do phát biểu suy nghĩ của mình về lỗi, cách nhận biết và sửa lỗi chương trình.
d) Tổ chức thực hiện: 
Bước 1: GV chuyển giao nhiệm vụ: 
- GV yêu cầu xem video AI được thiết kế để phục vụ bài dạy và trả lời câu hỏi xuất hiện trong video đó.
- GV đặt vấn đề: Một chương trình hoàn chỉnh được mô tả như Hình 29.1: Tiếp nhận các dữ liệu đầu vào, xử lí theo yêu cầu bài toán và đưa ra kết quả theo đúng yêu cầu.
- GV đặt câu hỏi: Theo em nếu chương trình có lỗi, thì các lỗi này sẽ như thế nào và có thể ở đâu?
Bước 2: HS thực hiện nhiệm vụ học tập: 
- HS xem video và suy nghĩ câu trả lời.
- HS chú ý theo dõi, suy nghĩ câu trả lời.
Bước 3: Báo cáo kết quả hoạt động, thảo luận: GV gọi một số HS trả lời, HS khác nhận xét, bổ sung
Bước 4: Đánh giá kết quả thực hiện: 
- GV nhận xét, đánh giá và kết luận.
[6.1.NC1a: HS sử dụng công cụ AI hoặc sản phẩm số do GV cung cấp để tiếp nhận thông tin, trả lời câu hỏi đơn giản.
2.1.NC1a: HS thực hiện các tương tác cơ bản với học liệu số (xem video, trả lời câu hỏi trên môi trường số).
1.1.NC1a: HS tiếp cận, khai thác được thông tin từ nguồn học liệu số dưới sự hướng dẫn của GV.]
- GV dẫn dắt HS vào bài học mới: Bài học ngày hôm nay sẽ giúp các em nhận biết được một số lỗi chương trình thường gặp - Bài 29: Nhận biết lỗi chương trình.
2. HÌNH THÀNH KIẾN THỨC MỚI
Hoạt động 1: Nhận biết lỗi chương trình
a) Mục tiêu: HS nhận biết và phân loại được các lỗi chương trình trong Python.
b) Nội dung: GV hướng dẫn HS nhận biết và phân biệt một số loại lỗi chương trình.
c) Sản phẩm: HS nêu được ba loại lỗi thường gặp khi lập trình Python, trả lời Câu hỏi và bài tập củng cố SGK trang 142.
d) Tổ chức thực hiện:
[BẢNG] HOẠT ĐỘNG CỦA GV VÀ HS | SẢN PHẨM DỰ KIẾN | NLS
[BẢNG] Bước 1: GV chuyển giao nhiệm vụ:- GV chia lớp thành các nhóm 3 - 4 HS.- GV giao nhiệm vụ cho HS: Thao tác trực tiếp trên môi trường Python, gõ và chạy đoạn lệnh trong bốn trường hợp để tìm hiểu một số loại lỗi chương trình. Với mỗi trường hợp, GV yêu cầu HS phân tích lỗi và sửa lại cho đúng.+ Trường hợp 1: Người lập trình viết sai cú pháp lệnh+ Trường hợp 2: Người dùng nhập dữ liệu sai+ Trường hợp 3: Chương trình báo lỗi chỉ số vượt quá giới hạn cho phépKhi chạy chương trình sẽ báo lỗi:+ Trường hợp 4: Kết quả không đúng với yêu cầu bài toán- GV yêu cầu HS thảo luận cặp đôi và trả lời Câu hỏi và bài tập củng cố SGK trang 142:1. Khi gõ sai cú pháp một lệnh, chương trình sẽ dừng lại và báo lỗi, đó là lỗi loại gì?2. Bài toán yêu cầu sắp xếp dãy số ban đầu thành dãy tăng dần. Giả sử dãy số ban đầu là [3, 1, 8, 10, 0]. Kết quả thu được dãy [1, 3, 8, 10, 0]. Chương trình có lỗi không? Nếu có thì lỗi đó thuộc loại gì?- GV cho HS đọc và ghi nhớ khung kiến thức trọng tâm.Bước 2: HS thực hiện nhiệm vụ học tập: - HS chia nhóm, thảo luận để hoàn thành Hoạt động 1.- Trong trường hợp HS không tự sửa được lỗi có thể sử dụng AI để tìm hiểu và gỡ lỗi.- HS thảo luận nhóm đôi, trả lời Câu hỏi và bài tập củng cố.- GV hỗ trợ, quan sát.Bước 3: Báo cáo kết quả hoạt động, thảo luận: - Đại diện nhóm trình bày kết quả.- Một số HS khác nhận xét, bổ sung.Bước 4: Đánh giá kết quả thực hiện: - GV nêu nhận xét, tổng quát lại kiến thức và chuyển sang nội dung mới. | 1. Nhận biết lỗi chương trình- Hoạt động 1: Phân biệt một số loại lỗi chương trình:+ Loại 1: Lỗi cú pháp. Đây là lỗi viết sai cú pháp, chương trình sẽ dừng lại ngay. Lỗi này là lỗi Runtime.+ Loại 2: Lỗi ngoại lệ. Đây là lỗi lôgic nội tại khi lập trình, chương trình sẽ dừng lại ngay và trả về một mã lỗi gọi là mã lỗi ngoại lệ. Lỗi này vẫn là lỗi Runtime.+ Loại 3: Lỗi khác. Các lỗi này chương trình không dừng lại mà chỉ đưa ra kết quả sai. Các lỗi loại này thường gọi là lỗi ngữ nghĩa hay lỗi lôgic bên trong chương trình.Câu hỏi và bài tập củng cố:1. Đây là lỗi cú pháp.2. Đây là lỗi lôgic nội tại, không phải lỗi ngoại lệ. | - 1.2.NC1b: HS phân tích phản hồi hệ thống; đọc hiểu cấu trúc thông báo lỗi “Traceback” của Python. HS phân biệt được sự khác nhau giữa lỗi làm chương trình dừng ngay lập tức (Syntax Error - lỗi cú pháp) và lỗi chỉ xuất hiện khi chạy đến dòng lệnh cụ thể (Runtime Error - lỗi thực thi), từ đó hiểu cách trình biên dịch/thông dịch xử lý mã nguồn.- 5.2.NC1b: HS nhận diện được lỗi logic - loại lỗi nguy hiểm nhất khi máy tính không báo lỗi nhưng kết quả sai. HS hiểu rằng “Chương trình chạy được” không đồng nghĩa với “Chương trình đúng”.- 6.2.NC1b: HS sử dụng AI như một trợ lý lập trình để giải thích và sửa lỗi.
Hoạt động 2: Một số lỗi ngoại lệ thường gặp
a) Mục tiêu: HS biết được một số lỗi ngoại lệ phổ biến trong Python.
b) Nội dung: GV hướng dẫn HS tìm hiểu một số lỗi ngoại lệ thường gặp.
c) Sản phẩm: HS nêu được một số lỗi ngoại lệ phổ biến trong Python, trả lời Câu hỏi và bài tập củng cố SGK trang 143.
d) Tổ chức thực hiện: 
[BẢNG] HOẠT ĐỘNG CỦA GV VÀ HS | SẢN PHẨM DỰ KIẾN | NLS
[BẢNG] Bước 1: GV chuyển giao nhiệm vụ:- GV yêu cầu các nhóm: Sử dụng AI để giải thích một số lỗi ngoại lệ sau bằng ví dụ cụ thể. + ZeroDivisionError+ IndexError+ NameError+ TypeError+ ValueError+ IndentationError+ SyntaxError- GV nhấn mạnh: Mỗi lỗi ngoại lệ sẽ sinh ra một mã lỗi riêng biệt. Thông qua mã lỗi này để biết cách xử lí các lỗi này.- GV yêu cầu HS hoạt động cá nhân, trả lời Câu hỏi và bài tập củng cố SGK trang 143:Hãy nêu mã lỗi ngoại lệ của mỗi lệnh sau nếu xảy ra lỗi?a) A[1.5]                b) int("abc")c) "10"*3.5            d) 12 + x(10)Bước 2: HS thực hiện nhiệm vụ học tập: - HS sử dụng AI tìm hiểu kiến thức.- HS suy nghĩ và trả lời câu hỏi, hoàn thành Câu hỏi và bài tập củng cố.- GV quan sát và trợ giúp HS. Bước 3: Báo cáo kết quả hoạt động, thảo luận: - HS đọc kết quả từ AI, thảo luận nhóm phân tích ví dụ, đối chiếu với SGK và rút ra kết luận.- HS xung phong trình bày kết quả.- Một số HS khác nhận xét, bổ sung cho bạn. Bước 4: Đánh giá kết quả thực hiện: GV tổng quát lưu ý lại kiến thức và yêu cầu HS ghi chép đầy đủ vào vở. | 2. Một số lỗi ngoại lệ thường gặp- Một số lỗi ngoại lệ thường gặp:+ ZeroDivisionError: Lỗi này xảy ra khi thực hiện phép chia cho giá trị 0.+ IndexError: Lỗi xảy ra khi lệnh cố gắng truy cập phần tử của danh sách nhưng chỉ số vượt quá giới hạn.+ NameError: Lỗi xảy ra khi chương trình muốn tìm một tên nhưng không nhìn thấy.+ TypeError: Lỗi kiểu dữ liệu.+ ValueError: Lỗi liên quan đến giá trị của đối tượng.Lỗi khi thực hiện lệnh chuyển đổi kiểu dữ liệu, đối số của hàm có giá trị mà hàm không hỗ trợ.+ IndentationError: Lỗi khi các dòng lệnh thụt vào không thẳng hàng hoặc không đúng vị trí.+ SyntaxError: Lỗi cú pháp.Câu hỏi và bài tập củng cố:a) Lỗi kiểu dữ liệu: TypeError.b) Lỗi giá trị dữ liệu: ValueError.c) Lỗi kiểu dữ liệu: TypeError.d) Nếu có lỗi xảy ra thì có thể là các loại lỗi sau đây:+ TypeError nếu dữ liệu (số 10) truyền vào đối số của hàm x() bị sai kiểu.+ NameError nếu hàm x() chưa được định nghĩa trước đó.+ TypeError nếu giá trị trả lại của hàm x(10) không cùng kiểu để có thể thực hiện phép toán 12 + x(10). | - 6.2.NC1a: Sử dụng AI để tìm kiếm thông tin phục vụ học tập.- 1.2.NC1b: HS đọc hiểu các mã lỗi ngoại lệ thường gặp khi lập trình. 
Hoạt động 3: Thực hành lập trình và kiểm tra khả năng sinh lỗi khi chạy chương trình
a) Mục tiêu: HS được thực hành lập trình kiểm tra khả năng sinh lỗi khi chạy chương trình.
b) Nội dung: GV lần lượt hướng dẫn HS hoàn thành từng nhiệm vụ của bài thực hành.
c) Sản phẩm: HS nhập chương trình và kiểm tra khả năng sinh lỗi khi chạy các chương trình đó.
d) Tổ chức thực hiện:
[BẢNG] HOẠT ĐỘNG CỦA GV VÀ HS | SẢN PHẨM DỰ KIẾN | NLS
[BẢNG] Bước 1: GV chuyển giao nhiệm vụ:- GV cho HS đọc yêu cầu và lần lượt hướng dẫn HS hoàn thành từng nhiệm vụ của bài thực hành:+ Nhiệm vụ 1: Viết chương trình nhập các số nguyên m, n từ bàn phím, cách nhau bởi dấu cách. Chương trình đưa ra tổng hiệu của hai số đã nhập.+ Nhiệm vụ 2: Viết chương trình nhập số tự nhiên n và nhập lần lượt n số nguyên đưa vào danh sách số A. Sau khi nhập xong in danh sách A ra màn hình.- GV yêu cầu HS nhập các chương trình, sau đó kiểm tra khả năng sinh lỗi khi chạy.Bước 2: HS thực hiện nhiệm vụ học tập:- HS lắng nghe GV hướng dẫn.- HS thực hành, có thể sử dụng chương trình gợi ý trong SGK trang 138, 139.Bước 3: Báo cáo kết quả hoạt động, thảo luận: - HS xung phong trình bày kết quả thực hiện.- Các HS còn lại quan sát, nhận xét và bổ sung ý kiến (nếu có).Bước 4: Đánh giá kết quả thực hiện: GV tổng kết lại kiến thức trọng tâm và chuyển sang nội dung luyện tập. | - Nhiệm vụ 1: Các khả năng sinh lỗi của chương trình là:+ Các số m, n nhập vào không phải là số nguyên.+ Giữa hai số m, n không có dấu cách.+ Số n nhập vào là số 0.- Nhiệm vụ 2: Các khả năng sinh lỗi của chương trình là:+ Số n được nhập không phải là số nguyên.+ Mỗi số hạng của danh sách nhập vào không là số nguyên. | - 3.4.NC1a: HS viết chương trình giải quyết bài toán cụ thể.- 5.2.NC1b: HS kiểm tra khả năng sinh lỗi khi chạy chương trình. 
3. HOẠT ĐỘNG LUYỆN TẬP
a) Mục tiêu: HS được thực hành, củng cố kĩ năng nhận biết một số loại lỗi chương trình.
b) Nội dung: HS vận dụng các kiến thức đã học để hoàn thành Luyện tập 1, 2 (SGK - tr144) và trả lời câu hỏi trắc nghiệm.
c) Sản phẩm học tập: Bài làm của HS, kĩ năng giải quyết nhiệm vụ học tập.
d) Tổ chức thực hiện: 
Bước 1: GV chuyển giao nhiệm vụ: 
- GV tổng hợp các kiến thức cần ghi nhớ cho HS.
Nhiệm vụ 1: Trả lời câu hỏi trắc nghiệm khách quan
- GV tổ chức trò chơi trắc nghiệm nhanh trên Quizizz hoặc Kahoot để củng cố toàn bài.
- GV cung cấp mã QR hoặc đường Links cho HS làm Phiếu bài tập, trả lời nhanh một số câu hỏi trắc nghiệm tổng kết bài học.
Câu 1: Xác định loại lỗi của câu lệnh sau: 
>>>A = list(12)
A. Lỗi cú phápB. Lỗi ngoại lệ
C. Lỗi khácD. Không có lỗi
Câu 2: Lệnh sau có lỗi không? Nếu có thì lỗi thuộc loại nào?
A. Lỗi cú phápB. Lỗi ngoại lệ
C. Lỗi khácD. Không có lỗi
Câu 3: Lỗi ngoại lệ trong Python là lỗi gì?
A. Lỗi khi viết một câu lệnh sai cú pháp của ngôn ngữ lập trình.
B. Lỗi khi truy cập một biến chưa được khai báo.
C. Lỗi khi không thể thực hiện một lệnh nào đó của chương trình.
D. Lỗi khi chương trình biên dịch sang tệp exe.
Câu 4: Trong lời gọi hàm, nếu các đối số được truyền vào hàm bị thiếu thì lỗi ngoại lệ phát sinh thuộc loại nào dưới đây?
A. SyntaxErrorB. NameError
C. TypeErrorD. Không phát sinh lỗi ngoại lệ
Câu 5: Các lệnh sau sẽ phát sinh lỗi ngoại lệ nào?
A. SyntaxErrorB. NameError
C. TypeErrorD. IndexError
Câu 6: Giả sử chương trình có lệnh nhập dữ liệu sau:
Khi chúng ta nhập 1.5 thì chương trình có lỗi ngoại lệ không? Đó là lỗi ngoại lệ nào?
A. SyntaxErrorB. ValueError
C. TypeErrorD. IndexError
Nhiệm vụ 2: Thực hiện phần Luyện tập tr.144 SGK
Bước 2: HS thực hiện nhiệm vụ học tập: 
- HS suy nghĩ, hoàn thành các bài tập GV yêu cầu.
- GV quan sát và hỗ trợ, hướng dẫn.
Bước 3: Báo cáo kết quả hoạt động, thảo luận: 
- HS xung phong trình bày kết quả thảo luận. 
- Các HS khác chú ý chữa bài, theo dõi nhận xét bài các nhóm trên bảng.
Đáp án trắc nghiệm:
[BẢNG] Câu 1 | Câu 2 | Câu 3 | Câu 4 | Câu 5 | Câu 6
[BẢNG] B | A | C | C | D | B
[2.1.NC1a: HS thực hiện các tương tác được xác định rõ ràng với công nghệ số (làm bài tập online) trong lớp học.]
Gợi ý thực hiện phần Luyện tập:  
Câu 1: 
- Nhóm lệnh 1 có lỗi chỉ số.
- Nhóm lệnh 2 có lỗi kiểu dữ liệu.
[1.2.NC1b: HS vận dụng kiến thức về cấu trúc dữ liệu mảng (phân tích chỉ số) và các kiểu dữ liệu trong Python để nhận diện lỗi.]
Câu 2: gttb = sum(A)/len(A)
Lỗi có thể phát sinh là lỗi chia cho 0 nếu dãy A rỗng.
[5.2.NC1b: HS phân tích lệnh tính trung bình để tìm lỗi ngoại lệ.]
Bước 4: Đánh giá kết quả thực hiện: 
- GV chữa bài, chốt đáp án, tuyên dương các hoạt động tốt, nhanh và chính xác.
4. HOẠT ĐỘNG VẬN DỤNG
a) Mục tiêu: Học sinh thực hiện làm bài tập vận dụng để nắm vững kiến thức.
b) Nội dung: HS sử dụng SGK và vận dụng kiến thức đã học để hoàn thành bài tập Vận dụng 1, 2 (SGK – tr144).
c) Sản phẩm: Bài làm của HS, kĩ năng giải quyết nhiệm vụ học tập.
d) Tổ chức thực hiện: 
Bước 1: GV chuyển giao nhiệm vụ
- GV yêu cầu HS thảo luận nhóm đôi, hoàn thành bài tập Vận dụng 1, 2 (SGK - tr144).
Bước 2: HS thực hiện nhiệm vụ học tập
- HS hợp tác, thảo luận đưa ra ý kiến.
- GV điều hành, quan sát, hỗ trợ.
Bước 3: Báo cáo kết quả hoạt động, thảo luận
- Đại diện nhóm trình bày kết quả thảo luận. 
- Các nhóm khác theo dõi, bổ sung ý kiến.
Gợi ý thực hiện:
Câu 1: Chương trình có thể như sau:
Chương trình trên có thể phát sinh lỗi ngoại lệ như sau:
- Dữ liệu đã nhập không phải là số tự nhiên, ví dụ nhập số thập phân hoặc xâu kí tự.
- Không nhập gì mà nhấn phím Enter ngay sau dòng yêu cầu nhập liệu.
Câu 2: Nếu chương trình có lệnh gọi đến một biến chưa được gán hay hàm chưa được xác định nghĩa thì sẽ phát sinh lỗi NameError.
Ví dụ về một lỗi chương trình khi chạy sinh mã lỗi NameError:
Bước 4: Đánh giá kết quả thực hiện
- GV nhận xét, đánh giá, đưa ra một vài ý mà HS còn thiếu, chốt đáp án.
[1.2.NC1b: HS nhận biết được các loại lỗi chương trình.
3.4.NC1a: HS viết chương trình với mục đích cụ thể là tái hiện lại một loại lỗi.]
* HƯỚNG DẪN VỀ NHÀ
Ghi nhớ kiến thức trong bài. 
Hoàn thành các bài tập trong SBT.
Chuẩn bị bài mới Bài 30 - Kiểm thử và gỡ lỗi chương trình.
```

</details>

