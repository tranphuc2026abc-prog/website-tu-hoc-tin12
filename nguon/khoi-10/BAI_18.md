# Bài 18. CÁC LỆNH VÀO RA ĐƠN GIẢN

> Học liệu được chuyển định dạng từ KHBD Tin học 10 do giáo viên cung cấp. Nội dung trích xuất đầy đủ được giữ ở phần cuối để đối chiếu.

## Chủ đề
GIẢI QUYẾT VẤN ĐỀ VỚI SỰ TRỢ GIÚP CỦA MÁY TÍNH

## Mục tiêu kiến thức từ KHBD

Học xong bài này, HS đạt các yêu cầu sau:
Biết và thực hiện được một số lệnh vào, ra đơn giản.
Thực hiện được một số chuyển đổi dữ liệu giữa các kiểu dữ liệu đơn giản.

## Trọng tâm hoạt động

Hoạt động 1: Các lệnh vào ra đơn giản
Hoạt động 2: Chuyển đổi kiểu dữ liệu cơ bản của Python
Hoạt động 3: Thực hành nhập dữ liệu từ bàn phím bằng lệnh input()

## Nội dung KHBD đầy đủ đã trích xuất

<details>
<summary>Mở nội dung KHBD</summary>

```text
Ngày soạn: .../.../...
Ngày dạy: .../.../...
BÀI 18: CÁC LỆNH VÀO RA ĐƠN GIẢN
(2 tiết)
I. MỤC TIÊU
1. Kiến thức
Học xong bài này, HS đạt các yêu cầu sau:
Biết và thực hiện được một số lệnh vào, ra đơn giản.
Thực hiện được một số chuyển đổi dữ liệu giữa các kiểu dữ liệu đơn giản.
2. Năng lực 
 - Năng lực chung:
Giải quyết được những nhiệm vụ học tập một cách độc lập, theo nhóm và thể hiện sự sáng tạo.
Góp phần phát triển năng lực giao tiếp và hợp tác qua hoạt động nhóm và trao đổi công việc với giáo viên.
- Năng lực riêng: 
Thực hiện được các biến đổi dữ liệu đơn giản từ dạng này sang dạng khác.
Thực hiện được một số lệnh nhập dữ liệu đơn giản từ bàn phím.
- Năng lực số:
1.2.NC1b: Hiểu bản chất dữ liệu đầu vào từ bàn phím luôn là dạng chuỗi (str) và tầm quan trọng của việc định kiểu dữ liệu (casting) trước khi xử lý tính toán.
6.2.NC1b: Sử dụng trợ lý AI để giải thích các thông báo lỗi (như ValueError) khi chuyển đổi kiểu dữ liệu sai quy cách.
5.2.NC1b: Vận hành môi trường lập trình để kiểm thử (testing) các trường hợp nhập liệu khác nhau (nhập chữ vào ô nhập số) để thấy phản ứng của hệ thống.
1.1.NC1a: Nhận diện và phân loại chính xác các kiểu dữ liệu trong chương trình.
3. Phẩm chất
Chăm chỉ tích cực xây dựng bài, có trách nhiệm, chủ động chiếm lĩnh kiến thức theo sự hướng dẫn của GV.
Có ý thức học tập, ý thức tìm tòi, khám phá và sáng tạo, có ý thức làm việc nhóm, tôn trọng ý kiến các thành viên khi hợp tác.
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
a) Mục tiêu: HS được gợi mở về lệnh input() sẽ được học trong bài.
b) Nội dung: HS dựa vào hiểu biết của bản thân để trả lời câu hỏi.
c) Sản phẩm: Từ yêu cầu HS vận dụng kiến thức để trả lời câu hỏi GV đưa ra.
d) Tổ chức thực hiện: 
Bước 1: GV chuyển giao nhiệm vụ: 
- GV yêu cầu xem video AI được thiết kế để phục vụ bài dạy và trả lời câu hỏi xuất hiện trong video đó.
- GV gợi mở vấn đề: Để tương tác với người sử dụng trong khi thực hiện chương trình, các ngôn ngữ lập trình có các câu lệnh để đưa dữ liệu ra màn hình hay nhập dữ liệu vào từ bàn phím. Em đã biết Python có lệnh print() dùng để đưa ra dữ liệu ra màn hình. Để nhập dữ liệu từ bàn phím khi thực hiện chương trình, Python sử dung câu lệnh input().
- GV đặt câu hỏi: "Em dự đoán lệnh nhập dữ liệu input() có cú pháp và chức năng như thế nào?"
Bước 2: HS thực hiện nhiệm vụ: 
- HS xem video và suy nghĩ câu trả lời.
- HS chú ý lắng nghe, suy nghĩ câu trả lời.
Bước 3: Báo cáo kết quả học tập, thảo luận: 
- GV gọi một số HS trả lời, HS khác nhận xét, bổ sung.
Bước 4: Đánh giá kết quả thực hiện: 
- GV nhận xét, đánh giá và kết luận.
[6.1.NC1a: HS sử dụng công cụ AI hoặc sản phẩm số do GV cung cấp để tiếp nhận thông tin, trả lời câu hỏi đơn giản.
2.1.NC1a: HS thực hiện các tương tác cơ bản với học liệu số (xem video, trả lời câu hỏi trên môi trường số).
1.1.NC1a: HS tiếp cận, khai thác được thông tin từ nguồn học liệu số dưới sự hướng dẫn của GV.]
- GV dẫn dắt HS vào bài học mới.
Bài học ngày hôm nay sẽ giúp chúng ta tìm hiểu cú pháp và chức năng của lệnh input()- Bài 18. Các lệnh vào ra đơn giản.
2. HÌNH THÀNH KIẾN THỨC MỚI
Hoạt động 1: Các lệnh vào ra đơn giản
a) Mục tiêu: HS biết tính năng chính của lệnh input() cho phép nhập dữ liệu từ bàn phím.
b) Nội dung: HS tìm hiểu chức năng của lệnh input().
c) Sản phẩm: HS thực hiện Hoạt động 1, hoàn thành tìm hiểu kiến thức.
d) Tổ chức thực hiện:
[BẢNG] HOẠT ĐỘNG CỦA GV VÀ HS | SẢN PHẨM DỰ KIẾN | NLS
[BẢNG] Bước 1: GV chuyển giao nhiệm vụ:- GV giao nhiệm vụ cho HS:+ Gõ lệnh a = input("Nhập một số: ")+ Nhập 12+ Gõ a + 5+ Quan sát kết quả => Lỗi TypeError: can only concatenate str (not "int") to str- Từ ví dụ, GV yêu cầu HS: Rút ra nhận xét về chức năng và kết quả trả về của lệnh input().- GV tiếp tục đặt câu hỏi: Lệnh nào dùng để đưa dữ liệu ra? - GV chốt lại kiến thức: Các lệnh vào ra đơn giản của Python chính là các lệnh input() và print().Bước 2: HS thực hiện nhiệm vụ: - HS lắng nghe, suy nghĩ để trả lời các vấn đề được đưa ra. - HS theo dõi, chú ý lắng nghe GV hướng dẫn.Bước 3: Báo cáo kết quả hoạt động, thảo luận: - Đại diện nhóm trình bày.- Một số HS khác nhận xét, bổ sung cho bạn. Bước 4: Đánh giá kết quả thực hiện: - GV nêu nhận xét, tổng quát lại kiến thức. | 1. Các lệnh vào ra đơn giản- Lệnh input() – Lệnh vào+ Nhập dữ liệu từ thiết bị vào chuẩn, thường là bàn phím. + Nội dung nhập có thể nhập số, biểu thức hay xâu và cho kết quả là một xâu kí tự. + Cú pháp:<biến> = input (<Dòng thông báo>)- Lệnh print() – Lệnh ra + Đưa dữ liệu ra thiết bị ra chuẩn, thường là màn hình. + Thông tin cần đưa ra có thể bao gồm một hay nhiều dữ liệu với kiểu khác nhau, cho phép cả biểu thức tính toán. | 1.2.NC1b: HS hiểu dữ liệu đầu vào được nhập từ bàn phím qua lệnh input() đều được máy tính mặc định coi là chuỗi văn bản, ngay cả khi người dùng nhập các con số.
Hoạt động 2: Chuyển đổi kiểu dữ liệu cơ bản của Python
a) Mục tiêu: 
- HS biết và phân biệt được các kiểu dữ liệu cơ bản là int, float, str và bool.
- HS biết được cách chuyển đổi dữ liệu từ kiểu này sang kiểu khác chính bằng các hàm trùng tên với kiểu dữ liệu.
- HS hiểu được muốn dùng input() để nhập số nguyên hoặc số thực thì cần phải làm như thế nào?
b) Nội dung: 
- HS nhận biết kiểu dữ liệu của biến.
- Tìm hiểu cách chuyển đổi giữa các kiểu dữ liệu.
- Nhập dữ liệu kiểu số nguyên hoặc số thực từ bàn phím.
c) Sản phẩm: HS trả lời câu hỏi xây dựng bài về chuyển đổi kiểu dữ liệu cơ bản của Python, thực hiện các Hoạt động 2, 3, 4, làm Câu hỏi và bài tập củng cố (SGK – tr98, 99, 100).
d) Tổ chức thực hiện: 
[BẢNG] HOẠT ĐỘNG CỦA GV VÀ HS | SẢN PHẨM DỰ KIẾN | NLS
[BẢNG] Bước 1: GV chuyển giao nhiệm vụ:- GV dẫn dắt HS: Chúng ta đã biết một số kiểu dữ liệu cơ bản như số nguyên, số thực và xâu kí tự. Trong Python có cách nào để nhận biết được kiểu dữ liệu của biến không?- GV giới thiệu cho HS lệnh type() có tác dụng chỉ ra kiểu dữ liệu cơ bản trong Python:+ Ví dụ:+ GV giải thích: Lệnh type(a) sẽ chỉ ra kiểu dữ liệu của đối tượng a. Trong Python mọi đối tượng dữ liệu đều được mô tả bởi một "lớp" hay "class" dữ liệu, do đó từ "class" hiển thị trong lệnh trên được hiểu như sau: Đối tượng a thuộc lớp (hay kiểu) dữ liệu "int". Vậy int chính là tên của kiểu dữ liệu của biến a.- GV cho HS đọc lại khung kiến thức trọng tâm, yêu cầu HS ghi vào vở.- GV tổ chức cho HS thực hiện Câu hỏi và bài tập củng cố SGK trang 98 theo nhóm đôi:Xác định kiểu và giá trị của các biểu thức sau:a)"15 + 20 - 7"           b) 32 > 45c) 13!= 8 + 5              d) 1==2- GV chia lớp thành nhóm 4 - 5 HS, yêu cầu các nhóm thảo luận để thực hiện Hoạt động 3 SGK trang 98:+ Có chuyển đổi dữ liệu kiểu này sang kiểu khác được không?+ Giả sử có biến s với giá trị "123". Nếu muốn biến s có giá trị là số nguyên 123 chứ không phải là xâu "123" thì em phải làm gì?- GV tập trung giới thiệu nhanh ba lệnh chuyển đổi kiểu dữ liệu đơn giản: int(), float() và str():+ Lệnh int() chuyển đổi kiểu dữ liệu từ float và str → int.+ Lệnh float() chuyển đổi kiểu dữ liệu từ int, str → float.+ Lệnh str() chuyển đổi từ int, float → str.- GV cho HS đọc và ghi nhớ khung kiến thức trọng tâm.- GV yêu cầu HS hoạt động cá nhân, hoàn thành Câu hỏi và bài tập củng cố 1, 2 (SGK - tr99):1. Mỗi lệnh sau sẽ trả lại các giá trị nào?a) str(150);                   b) int("1110")                   c) float("15.0")2. Lệnh nào sau đây sẽ báo lỗi?A. int("12.0")                  B. float(13 + 1)                 C. str(17.001)- GV giữ nguyên nhóm HS vừa chia, yêu cầu các nhóm đọc và thảo luận Hoạt động 4:Dữ liệu nhập từ bàn phím bằng lệnh input() luôn là xâu kí tự nên muốn nhập dữ liệu đầu vào là số nguyên hay số thực thì phải làm thế nào?- GV chốt kiến thức và nhấn mạnh với HS: lệnh input() luôn trả lại xấu lí tự mà người dùng nhập từ bàn phím. Do đó muốn nhập số thì cần chuyển đổi từ xâu sang số.- GV yêu cầu HS suy nghĩ và trả lời Câu hỏi và bài tập củng cố SGK trang 100:Dùng lệnh x = input("Nhập số x:") để nhập số cho biến x là đúng hay sai? Vì sao?Bước 2: HS thực hiện nhiệm vụ: - HS theo dõi SGK, thảo luận nhóm và thực hiện các yêu cầu đặt ra.- HS thảo luận và hoàn thành bài tập.- HS ghi chép, ghi nhớ kiến thức.- GV quan sát và trợ giúp HS. Bước 3: Báo cáo kết quả hoạt động, thảo luận: - HS giơ tay phát biểu, trình bày kết quả.- Một số HS khác nhận xét, bổ sung cho bạn. Bước 4: Đánh giá kết quả thực hiện: GV tổng quát lưu ý lại kiến thức và yêu cầu HS ghi chép đầy đủ vào vở. | 2. Chuyển đổi kiểu dữ liệu cơ bản của Python- Hoạt động 2: Sử dụng lệnh type() để biết được kiểu dữ liệu của biến.* Kết luận:- Một số kiểu dữ liệu cơ bản của Python bao gồm: int (số nguyên), float (số thực), str (xâu kí tự), bool (lôgic).- Lệnh type() dùng để nhận biết kiểu dữ liệu của biến trong Python.Câu hỏi và bài tập củng cố:a) Kiểu str (xâu kí tự)   Giá trị của biểu thức là: '15 + 20 + 7'b) Kiểu bool (logic)    Giá trị của biểu thức là: False.c) Kiểu bool(logic)    Giá trị của biểu thức là: False.d) Kiểu bool (logic)    Giá trị của biểu thức là: False.- Hoạt động 3:+ Có thể chuyển đổi dữ liệu kiểu này sang kiểu khác được.+ Sử dụng lệnh chuyển đổi s = int("123").* Kết luận:- Các lệnh int(), float(), str() có chức năng chuyển đổi dữ liệu từ các kiểu khác tương ứng về kiểu số nguyên, số thực và xâu kí tự.- Các lệnh int(), float() không thực hiện xâu là biểu thức toán.Câu hỏi và bài tập củng cố:1. a) Trả về "150".    b) Trả về số 110.   c) Trả về số 15.0.2. Các phương án A, B bị lỗi.- Hoạt động 4: Ta cần chuyển đổi từ xâu sang số.Câu hỏi và bài tập củng cố:Đáp án: Sai. Vì kết quả của lệnh input() luôn là xâu kí tự. | - 1.2.NC1b: HS sử dụng lệnh type() kiểm tra kiểu dữ liệu.- 5.2.NC1b: HS phân tích và xử lý lỗi chuyển đổi dữ liệu, qua đó hiểu được cơ chế ràng buộc dữ liệu chặt chẽ của ngôn ngữ lập trình.
Hoạt động 3: Thực hành nhập dữ liệu từ bàn phím bằng lệnh input()
a) Mục tiêu: HS thực hiện được việc nhập dữ liệu từ bàn phím bằng lệnh input().
b) Nội dung: HS thực hành viết chương trình nhập dữ liệu từ bàn phím bằng lệnh input().
c) Sản phẩm: HS sử dụng lệnh input() để nhập dữ liệu từ bàn phím trong môi trường lập trình Python.
d) Tổ chức thực hiện: 
[BẢNG] HOẠT ĐỘNG CỦA GV VÀ HS | SẢN PHẨM DỰ KIẾN | NLS
[BẢNG] Bước 1: GV chuyển giao nhiệm vụ:- GV nêu từng nhiệm vụ và yêu cầu HS thực hành theo nhóm đôi:+ Nhiệm vụ 1: Viết chương trình nhập lần lượt ba số tự nhiên m, n, p, sau đó in ra tổng của ba số này.+ Nhiệm vụ 2: Viết chương trình nhập họ tên, sau đó nhập tuổi của học sinh. Chương trình đưa ra thông báo, ví dụ: Bạn Nguyễn Hòa Bình 15 tuổi.Bước 2: HS thực hiện nhiệm vụ: - HS thực hành theo nhóm đôi.- GV quan sát và trợ giúp HS. Bước 3: Báo cáo kết quả hoạt động, thảo luận: - HS thực hiện phép tính và soạn thảo chương trình trong môi trường Python.Bước 4: Đánh giá kết quả thực hiện: GV quan sát, nhận xét kết quả của HS. | - Nhiệm vụ 1:Hướng dẫn: Chương trình có thể viết như sau:- Nhiệm vụ 2:Hướng dẫn: Chương trình có thể viết như sau: | 3.4.NC1a: HS viết được chương trình sử dụng các lệnh vào ra.
3. HOẠT ĐỘNG LUYỆN TẬP
a) Mục tiêu: HS củng cố lại kiến thức về các lệnh vào ra đơn giản.
b) Nội dung: HS vận dụng các kiến thức đã học để giải bài tập trong phần Luyện tập (SGK - tr100) và một số bài tập làm thêm.
c) Sản phẩm học tập: Bài làm của học sinh, kĩ năng giải quyết nhiệm vụ học tập.
d) Tổ chức thực hiện: 
Bước 1: GV chuyển giao nhiệm vụ: 
- GV tổng hợp các kiến thức cần ghi nhớ cho HS.
Nhiệm vụ 1: Trả lời câu hỏi trắc nghiệm khách quan
- GV tổ chức trò chơi trắc nghiệm nhanh trên Quizizz hoặc Kahoot để củng cố toàn bài.
- GV cung cấp mã QR hoặc đường Links cho HS làm Phiếu bài tập, trả lời nhanh một số câu hỏi trắc nghiệm tổng kết bài học.
Câu 1. Trong Python, lệnh nào dùng để nhập dữ liệu từ bàn phím?
A. input()B. print()C. type()D. int()
Câu 2. Giá trị và kiểu dữ liệu của x là gì?
>>> x = input("Nhập số: ")
A. Giá trị số nguyên, kiểu int
B. Giá trị số thực, kiểu float
C. Giá trị nhập vào, kiểu str
D. Giá trị logic, kiểu bool
Câu 3. Lệnh nào sau đây dùng để chuyển dữ liệu nhập từ bàn phím thành số nguyên?
A. str(input())B. int(input())C. float(input())D. type(input())
Câu 4. Lệnh nào sau đây sẽ báo lỗi khi thực hiện?
A. int("123")B. float("10.5")C. str(12.5)D. int("12+5")
Câu 5. Kết quả của lệnh sau là gì?
>>> print("Tin" + " học")
A. Tin học
B. Tin+học
C. Tin học 
D. Báo lỗi
Nhiệm vụ 2: Thực hiện phần Luyện tập tr.100 SGK
Nhiệm vụ 3: Bài tập thêm
Câu 1. Em hãy cho biết kết quả thực hiện các lệnh sau:
a) print("m" + "m" + "m")
b) print("m" + 3*"k")
Câu 2. Những lệnh nào trong các lệnh sau sẽ báo lỗi?
a) int("5*2")              b) float(123)                c) str(5)              d) float("123 + 5. 5")
Câu 3. Em hãy cho biết giá trị mà các câu lệnh sau trả lại:
a) int(5 + 3)                b) str(5 + 3)               c) float(4 + 5)        d) int(4.3 + 2)
Câu 4. Khi thực hiện câu lệnh x = input ("Nhập giá trị x: ") bạn Lan gõ vào số 5. câu lệnh tiếp theo print(2*x) sẽ cho ra kết quả như thế nào?
Câu 5. Em hãy viết chương trình tính diện tích hình thang với độ dài đáy trên, đáy dưới và chiều cao được nhập từ bàn phím.
Bước 2: HS thực hiện nhiệm vụ: 
- HS suy nghĩ, hoàn thành các bài tập GV yêu cầu.
- GV quan sát và hỗ trợ, hướng dẫn.
Bước 3: Báo cáo kết quả hoạt động, thảo luận: 
- Mỗi BT GV mời 1 đến 2 HS trình bày. 
- Các HS khác chú ý chữa bài, theo dõi nhận xét bài các nhóm trên bảng.
Đáp án trắc nghiệm: 
[BẢNG] Câu 1 | Câu 2 | Câu 3 | Câu 4 | Câu 5
[BẢNG] A | C | B | D | A
[2.1.NC1a: HS thực hiện các tương tác được xác định rõ ràng với công nghệ số (làm bài tập online) trong lớp học.]
Gợi ý thực hiện phần Luyện tập: 
Câu 1.
Các phương án A và C bị lỗi.
[5.2.NC1b: HS phân tích và xử lý lỗi chuyển đổi dữ liệu.]
Câu 2. Khi nhập một số thực cần viết lệnh float(input()) vì lệnh input() sẽ trả lại xâu nên cần dùng lệnh float() để chuyển số nhập vài về dạng số thực.
[1.2.NC1b: HS hiểu bản chất của dòng dữ liệu vào.
1.1.NC1a: HS phân biệt được sự khác nhau giữa “Dữ liệu hiển thị” và “Dữ liệu lưu trữ”.]
Bài tập làm thêm:
Câu 1. a) mmm           b) mkkk
Câu 2. a và d.
Lí do: các câu lệnh int(), float() không chuyển đổi xâu dạng biểu thức sang kiểu số.
Câu 3. a) 8             b) '8'               c) 9.0              d) 6.
Câu 4. Kết quả cho ra là '55'. 
Giải thích: Số 5 bạn Lan gõ vào được hiểu là kí tự '5', câu lệnh print(2*x) sẽ in ra trên màn hình xâu kí tự có giá trị là '55' = 2*'5'.
Câu 5. Chương trình có thể viết như sau:
Bước 4: Đánh giá kết quả thực hiện: 
- GV chữa bài, chốt đáp án, tuyên dương các hoạt động tốt, nhanh và chính xác.
4. HOẠT ĐỘNG VẬN DỤNG
a) Mục tiêu: Học sinh thực hiện làm bài tập vận dụng để nắm vững kiến thức.
b) Nội dung: HS vận dụng kiến thức đã học để làm bài tập Vận dụng (SGK – tr100).
c) Sản phẩm: Bài làm của học sinh, kĩ năng giải quyết nhiệm vụ học tập.
d) Tổ chức thực hiện: 
Bước 1: GV chuyển giao nhiệm vụ
- GV yêu cầu HS hoạt động nhóm đôi hoàn thành bài tập 1, 2 phần Vận dụng (SGK -tr100).
Bước 2: HS thực hiện nhiệm vụ
- HS hợp tác thảo luận đưa ra ý kiến.
- GV điều hành, quan sát, hỗ trợ.
Bước 3: Báo cáo kết quả hoạt động, thảo luận
- Đại diện nhóm trình bày kết quả thảo luận, các nhóm khác theo dõi, đưa ý kiến.
Gợi ý thực hiện:
Câu 1. Chương trình có thể như sau:
Câu 2. Chương trình có thể như sau:
Bước 4: Đánh giá kết quả thực hiện
- GV nhận xét, đánh giá, đưa ra một vài ý mà HS còn thiếu, chốt đáp án.
[3.4.NC1a: HS viết được chương trình sử dụng các lệnh vào ra.]
* HƯỚNG DẪN VỀ NHÀ
Ghi nhớ kiến thức trong bài. 
Hoàn thành bài tập trong SBT.
Chuẩn bị bài mới Bài 19 - Câu lệnh rẽ nhánh if.
```

</details>

