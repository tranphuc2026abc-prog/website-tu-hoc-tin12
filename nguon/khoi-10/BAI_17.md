# Bài 17. BIẾN VÀ LỆNH GÁN

> Học liệu được chuyển định dạng từ KHBD Tin học 10 do giáo viên cung cấp. Nội dung trích xuất đầy đủ được giữ ở phần cuối để đối chiếu.

## Chủ đề
GIẢI QUYẾT VẤN ĐỀ VỚI SỰ TRỢ GIÚP CỦA MÁY TÍNH

## Mục tiêu kiến thức từ KHBD

Học xong bài này, HS đạt các yêu cầu sau:
Biết cách thiết lập biến, phân biệt được biến và từ khóa.
Biết sử dụng lệnh gán và thực hiện một số phép toán trên kiểu số nguyên, số thực và xâu kí tự.

## Trọng tâm hoạt động

Hoạt động 1: Biến và lệnh gán
Hoạt động 2: Các phép toán trên một số kiểu dữ liệu cơ bản
Hoạt động 3: Từ khóa
Hoạt động 4: Thực hành tạo và làm việc với biến, tính toán với các kiểu dữ liệu cơ bản trong Python

## Nội dung KHBD đầy đủ đã trích xuất

<details>
<summary>Mở nội dung KHBD</summary>

```text
Ngày soạn: .../.../...
Ngày dạy: .../.../...
BÀI 17: BIẾN VÀ LỆNH GÁN 
(2 tiết)
I. MỤC TIÊU
1. Kiến thức
Học xong bài này, HS đạt các yêu cầu sau:
Biết cách thiết lập biến, phân biệt được biến và từ khóa.
Biết sử dụng lệnh gán và thực hiện một số phép toán trên kiểu số nguyên, số thực và xâu kí tự.
2. Năng lực 
 - Năng lực chung:
Năng lực tự chủ và tự học trong tìm tòi khám phá
Năng lực giao tiếp và hợp tác trong trình bày, thảo luận và làm việc nhóm
Năng lực giải quyết vấn đề và sáng tạo trong thực hành, vận dụng.
- Năng lực riêng: 
Sử dụng được lệnh gán.
Thực hiện được các phép toán đơn giản trên kiểu số nguyên, số thực và xâu kí tự.
- Năng lực số:
1.2.NC1b: Hiểu cơ chế lưu trữ và định kiểu dữ liệu động của Python thông qua việc quan sát sự thay đổi giá trị của biến.
5.2.NC1b: Vận hành môi trường lập trình (IDE) để kiểm thử các phép toán, phát hiện và sửa lỗi cú pháp (Syntax Error) liên quan đến từ khóa.
6.2.NC1b: Sử dụng AI Chatbot để giải thích ý nghĩa các thông báo lỗi hoặc gợi ý thuật toán chuyển đổi đơn vị.
1.1.NC1a: Tuân thủ quy tắc đặt tên biến (naming convention) để mã nguồn rõ ràng, dễ quản lý.
3. Phẩm chất
Nâng cao khả năng tự học và ý thức học tập, có ý thức làm việc nhóm, tôn trọng ý kiến các thành viên khi hợp tác.
Chăm chỉ tích cực xây dựng bài, có trách nhiệm, chủ động chiếm lĩnh kiến thức theo sự hướng dẫn của GV.
Hình thành tư duy logic, lập luận chặt chẽ, tự gải quyết vấn đề có sáng tạo.
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
a) Mục tiêu: Gợi ý để hướng HS đến khái niệm biến sẽ học trong bài.
b) Nội dung: HS dựa vào hiểu biết của bản thân để trả lời câu hỏi về lợi ích của việc sử dụng biến.
c) Sản phẩm: Từ yêu cầu HS vận dụng kiến thức để trả lời câu hỏi GV đưa ra.
d) Tổ chức thực hiện: 
Bước 1: GV chuyển giao nhiệm vụ: 
- GV yêu cầu xem video AI được thiết kế để phục vụ bài dạy và trả lời câu hỏi xuất hiện trong video đó.
- GV gợi mở vấn đề: Trong Đại số, người ta dùng chữ để thay thế cho số cụ thể, ví dụ hằng đẳng thức (a + b)2 = a2 + 2ab + b2 đúng cho mọi giá trị a, b. Trong các ngôn ngữ lập trình, người ta cũng dùng các kí tự hoặc nhóm các kí tự được gọi là biến (variable) để thay cho việc phải chỉ ra các giá trị dữ liệu cụ thể.
- GV đặt câu hỏi: "Theo em, sử dụng biến có những lợi ích gì?"
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
Bài học ngày hôm nay sẽ giúp chúng ta hiểu được những lợi ích của việc sử dụng biến và biết cách thiết lập biến - Bài 17. Biến và lệnh gán.
2. HÌNH THÀNH KIẾN THỨC MỚI
Hoạt động 1: Biến và lệnh gán
a) Mục tiêu: HS biết và hiểu được cách định nghĩa biến và lệnh gán trong Python.
b) Nội dung: HS tìm hiểu khái niệm biến và lệnh gán.
c) Sản phẩm: HS nêu được khái niệm biến và cú pháp lệnh gán, nêu quy tắc đặt tên biến.
d) Tổ chức thực hiện:
[BẢNG] HOẠT ĐỘNG CỦA GV VÀ HS | SẢN PHẨM DỰ KIẾN | NLS
[BẢNG] Bước 1: GV chuyển giao nhiệm vụ:- GV cho HS đọc và thực hiện Hoạt động 1 trong SGK trang 91:Quan sát các lệnh sau, n ở đây được hiểu là gì?- GV nhấn mạnh: Một biến có thể gán nhiều giá trị, kiểu dữ liệu khác nhau tại các thời điểm khác nhau.- GV đặt vấn đề: Trong Pascal/C++, ta phải khai báo kiểu dữ liệu trước còn Python thì không. Hãy dùng lệnh type(x) để kiểm tra kiểu dữ liệu của x.- GV chú ý cho HS lệnh gán đồng thời (hay còn gọi là đa gán) cho phép gán nhiều giá trị đồng thời cho nhiều biến → Đây là lệnh rất quan trọng của Python:+ Ví dụ:+ Cú pháp:<var1>, <var2>, ..., <varn> = <gt1>, <gt2>,... <gtn>- HS đọc lại khung kiến thức trọng tâm.- GV yêu cầu HS hoàn thành Câu hỏi và bài tập củng cố SGK trang 93 theo nhóm đôi:1. Các tên biến nào dưới đây là hợp lệ trong Python?A. _name             B. 12abc    C. My country     D. m123&b     E. xyzABC2. Sau các lệnh dưới đây, các biến x, y nhận giá trị bao nhiêu?3. a, b nhận giá trị gì sau các lệnh sau?Bước 2: HS thực hiện nhiệm vụ: - HS suy nghĩ hoàn thành các nhiệm vụ học tập. - HS theo dõi, chú ý lắng nghe GV hướng dẫn.- GV hỗ trợ, quan sát.Bước 3: Báo cáo kết quả hoạt động, thảo luận: - Đại diện nhóm trình bày.- Một số HS khác nhận xét, bổ sung cho bạn. Bước 4: Đánh giá kết quả thực hiện: - GV nêu nhận xét, tổng quát lại kiến thức. | 1. Biến và lệnh gán- Hoạt động 1: n được hiểu là biến.* Kết luận:- Biến là tên của một vùng nhớ dùng để lưu trữ giá trị (dữ liệu) và giá trị đó có thể được thay đổi khi thực hiện chương trình.- Cú pháp lệnh gán:<biến> = <biểu thức>- Quy tắc đặt tên biến:+ Chỉ gồm các chữ cái tiếng Anh, các chữ số từ 0 đến 9 và kí tự gạch dưới "_".+ Không bắt đầu bằng chữ số.+ Phân biệt chữ hoa và chữ thường.Câu hỏi và bài tập củng cố:1. Các phương án A, E.2. x = 104.0, y = 99.3. a = 5, b = -1. | 5.2.NC1b: HS sử dụng công cụ kiểm tra dữ liệu; thực hiện hành vi truy vấn hệ thống để xác thực cách máy tính tự động nhận diện và phân loại dữ liệu, từ đó hiểu bản chất của biến trong môi trường số.
Hoạt động 2: Các phép toán trên một số kiểu dữ liệu cơ bản
a) Mục tiêu: HS nhận biết được một số phép toán chính trên dữ liệu kiểu số và kiểu xâu trên Python.
b) Nội dung: HS trả lời câu hỏi xây dựng bài về các phép toán trên dữ liệu kiểu số và kiểu xâu kí tự, thực hiện Hoạt động 2, làm Câu hỏi và bài tập củng cố 1, 2 (SGK – tr94).
c) Sản phẩm: HS nắm được các phép toán trên dữ liệu kiểu số và kiểu xâu kí tự, từ đó trả lời Câu hỏi và bài tập củng cố 1, 2 (SGK – tr94).
d) Tổ chức thực hiện: 
[BẢNG] HOẠT ĐỘNG CỦA GV VÀ HS | SẢN PHẨM DỰ KIẾN | NLS
[BẢNG] Bước 1: GV chuyển giao nhiệm vụ:- GV chia lớp thành các nhóm 4 - 5 HS.- GV yêu cầu các nhóm đọc ví dụ 1, 2 SGK trang 93, 94 và thực hiện Hoạt động 2: Tìm hiểu các phép toán trên dữ liệu kiểu số và kiểu xâu kí tự.- GV yêu cầu HS: Sử dụng AI tìm hiểu:+ Các phép toán trên dữ liệu kiểu số và kiểu xâu kí tự.+ Thứ tự thực hiện các phép tính trên dữ liệu kiểu số.- GV chú ý: Nếu có dấu ngoặc thì biểu thức trong ngoặc được ưu tiên thực hiện trước.- GV tiếp tục giao nhiệm vụ cho HS: Hãy thử cộng một số với một xâu kí tự: 12 + "A". Quan sát lỗi.=> Lỗi TypeError- HS đọc lại khung kiến thức trọng tâm.- GV yêu cầu HS làm việc cá nhân, đọc và hoàn thành Câu hỏi và bài tập củng cố 1, 2 SGK trang 94:1. Mỗi lệnh sau là đúng hay sai? Nếu đúng thì cho kết quả là bao nhiêu?2. Mỗi lệnh sau cho kết quả là xâu kí tự như thế nào?Bước 2: HS thực hiện nhiệm vụ: - HS làm việc nhóm, sử dụng AI tìm hiểu kiến thức.- HS copy dòng code bị lỗi vào Chatbot AI để tìm hiểu và biết cách gỡ lỗi.- HS làm việc cá nhân, hoàn thành bài tập.- GV quan sát và trợ giúp HS. Bước 3: Báo cáo kết quả hoạt động, thảo luận: - HS đọc kết quả từ AI, đối chiếu với SGK và rút ra kết luận.- HS giơ tay phát biểu, trình bày kết quả.- Một số HS khác nhận xét, bổ sung cho bạn. Bước 4: Đánh giá kết quả thực hiện: GV tổng quát lưu ý lại kiến thức và yêu cầu HS ghi chép đầy đủ vào vở. | 2. Các phép toán trên một số kiểu dữ liệu cơ bản- Các phép tính trên dữ liệu kiểu số: +, -, *, /, //, % và **- Các phép tính trên dữ liệu kiểu xâu: +, *.Câu hỏi và bài tập củng cố:1. Lệnh 1 đúng, giá trị là 48.    Lệnh 2 sai vì không có phép toán giữa hai biểu thức trong dấu ngoặc tròn.2. Các lệnh với xâu kí tự trả về lần lượt là:- Lệnh 1 trả lại xâu '010'.- Lệnh 2 trả lại xâu '1000000'. | - 6.2.NC1a: Sử dụng AI để tìm kiếm thông tin phục vụ học tập và giải thích mã lỗi.- 1.1.NC1a: HS nhận diện sự khác biệt về hành vi của toán tử trên các kiểu dữ liệu khác nhau; ví dụ: hiểu rằng dấu + giữa hai số là phép cộng, nhưng giữa hai chuỗi là phép nối.- 5.2.NC1b: HS sử dụng thành thạo các toán tử trong Python.
Hoạt động 3: Từ khóa
a) Mục tiêu: HS hiểu và phân biệt được khái niệm biến với từ khóa.
b) Nội dung: HS tìm hiểu một số từ khóa trong Python phiên bản 3.x.
c) Sản phẩm: HS hoàn thành tìm hiểu kiến thức, từ đó trả lời Câu hỏi và bài tập củng cố (SGK – tr95).
d) Tổ chức thực hiện: 
[BẢNG] HOẠT ĐỘNG CỦA GV VÀ HS | SẢN PHẨM DỰ KIẾN | NLS
[BẢNG] Bước 1: GV chuyển giao nhiệm vụ:- GV yêu cầu HS đọc và hoàn thành Hoạt động 3 SGK trang 95 theo nhóm đôi:Quan sát các lệnh sau, tìm hiểu vì sao Python báo lỗi (HS suy nghĩ hoặc sử dụng AI để tìm hiểu):- GV chiếu danh sách các từ khóa chính của Python:- GV nhấn mạnh để HS nhận biết: Tất cả các từ khóa đều viết chữ thường, trừ ba từ True, False và None là bắt đầu bằng chữ hoa.- GV cho HS đọc để ghi nhớ khung thức trọng tâm.- GV yêu cầu HS làm việc cá nhân, đọc và hoàn thành Câu hỏi và bài tập củng cố SGK trang 95:Các tên biến sau có hợp lệ không?a)_if                 b) globalc) nolocal        d) return        e) trueBước 2: HS thực hiện nhiệm vụ: - HS copy dòng code bị lỗi vào Chatbot AI để tìm hiểu và biết cách gỡ lỗi.- HS theo dõi SGK, thảo luận nhóm và hoàn thành các yêu cầu.- HS lắng nghe GV, đọc và ghi nhớ kiến thức.- HS làm việc cá nhân, hoàn thành bài tập.- GV quan sát và trợ giúp HS. Bước 3: Báo cáo kết quả hoạt động, thảo luận: - HS đọc kết quả từ AI.- HS giơ tay phát biểu, trình bày kết quả.- Một số HS khác nhận xét, bổ sung cho bạn. Bước 4: Đánh giá kết quả thực hiện: GV tổng quát lưu ý lại kiến thức và yêu cầu HS ghi chép đầy đủ vào vở. | 3. Từ khóa- Hoạt động 3: Python báo lỗi vì đặt tên biến trùng với các từ khóa if và with.* Kết luận:- Từ khóa là các từ đặc biệt tham gia vào cấu trúc của ngôn ngữ lập trình. Không được phép đặt tên biến hay các định danh trùng với từ khóa.Câu hỏi và bài tập củng cố:Phương án: a), c), e) hợp lệ.* Lưu ý: true không phải là từ khóa. True mới là từ khóa. | - 6.2.NC1b: HS sử dụng AI như một trợ lý lập trình để giải thích mã lỗi.- 1.1.NC1a: HS áp dụng nghiêm ngặt các quy tắc cú pháp để đặt tên biến hợp lệ.
Hoạt động 4: Thực hành tạo và làm việc với biến, tính toán với các kiểu dữ liệu cơ bản trong Python
a) Mục tiêu: HS biết được cách tạo và làm việc với biến, tính toán với dữ liệu cơ bản trong Python.
b) Nội dung: HS thực hành hai nhiệm vụ làm việc với biến, tính toán các dữ liệu cơ bản trong Python.
c) Sản phẩm: HS thực hiện được các phép tính trong môi trường lập trình Python.
d) Tổ chức thực hiện: 
[BẢNG] HOẠT ĐỘNG CỦA GV VÀ HS | SẢN PHẨM DỰ KIẾN | NLS
[BẢNG] Bước 1: GV chuyển giao nhiệm vụ:- GV nêu từng nhiệm vụ và yêu cầu HS thực hành theo nhóm đôi:+ Nhiệm vụ 1: Thực hiện các phép tính sau trong môi trường lập trình Python, so sánh kết quả với việc tính biểu thức toán học.a) (1 + 2 + 3 + ... + 10)3b) 1/2 + 1/3 + 1/4 + 1/5.c) Thực hiện lệnh gán x = 2, y = 5 rồi tính giá trị biểu thức (x + y)(x2 + y2 - 1).d) Thực hiện lệnh gán a = 2, b = 3, c = 4 rồi tính giá trị biểu thức (a + b + c)(a + b - c).+ Nhiệm vụ 2: Gán giá trị cho biến R là bán kính hình tròn rồi viết chương trình tính và in ra kết quả theo mẫu:Bước 2: HS thực hiện nhiệm vụ: - HS thực hành theo nhóm đôi.- GV quan sát và trợ giúp HS. Bước 3: Báo cáo kết quả hoạt động, thảo luận: - HS thực hiện phép tính và soạn thảo chương trình trong môi trường Python.Bước 4: Đánh giá kết quả thực hiện: GV quan sát, nhận xét kết quả của HS. | Tạo và làm việc với biến, tính toán với các kiểu dữ liệu cơ bản trong Python.- Nhiệm vụ 1:Hướng dẫn: Các phép tính có thể thực hiện trong môi trường Python như sau:- Nhiệm vụ 2:Hướng dẫn: Soạn thảo chương trình trong môi trường lập trình Python như sau: | - 5.2.NC1b: HS thực hiện chuyển đổi tư duy toán học sang tư duy máy tính; phiên dịch chính xác các ký hiệu toán học sang cú pháp Python.- 3.4.NC1a: HS viết chương trình Python giải quyết bài toán cụ thể.
3. HOẠT ĐỘNG LUYỆN TẬP
a) Mục tiêu: HS củng cố lại kiến thức về biến và lệnh gán.
b) Nội dung: HS vận dụng các kiến thức đã học để giải bài tập trong phần Luyện tập (SGK - tr96) và một số bài tập làm thêm.
c) Sản phẩm học tập: HS nhận biết được lỗi và kết quả sau khi thực hiện lệnh.
d) Tổ chức thực hiện: 
Bước 1: GV chuyển giao nhiệm vụ: 
- GV tổng hợp các kiến thức cần ghi nhớ cho HS.
Nhiệm vụ 1: Trả lời câu hỏi trắc nghiệm khách quan
- GV tổ chức trò chơi trắc nghiệm nhanh trên Quizizz hoặc Kahoot để củng cố toàn bài.
- GV cung cấp mã QR hoặc đường Links cho HS làm Phiếu bài tập, trả lời nhanh một số câu hỏi trắc nghiệm tổng kết bài học.
Câu 1. Trong Python, phát biểu nào sau đây đúng về biến?
A. Biến là tên dùng để lưu trữ giá trị và giá trị đó có thể thay đổi khi chương trình chạy.
B. Biến chỉ lưu được số nguyên.
C. Biến phải khai báo kiểu dữ liệu trước khi sử dụng.
D. Một biến chỉ được gán giá trị một lần.
Câu 2. Câu lệnh nào sau đây hợp lệ trong Python?
A. 2x = 5B. x-y = 10C. _count = 3D. if = 7
Câu 3. Sau khi thực hiện các lệnh sau, giá trị của biến z là bao nhiêu?
>>> x = 4
>>> y = 2
>>> z = x**y
A. 6
B. 8
C. 16
D. 64
Câu 4. Kết quả của biểu thức Python sau là gì?
>>> "Tin" * 3
A. "Tin3"
B. "Tin Tin Tin"
C. "TinTinTin"
D. Lỗi vì không thể nhân chuỗi với số
Câu 5. Phát biểu nào sau đây không đúng khi nói về lệnh gán trong Python?
A. Có thể gán cùng lúc nhiều biến với nhiều giá trị.B. Giá trị bên phải dấu = được tính trước khi gán.C. Biểu thức bên phải có thể chứa các biến đã được xác định trước.D. Số biến bên trái có thể khác số giá trị bên phải.
Nhiệm vụ 2: Thực hiện phần Luyện tập tr.96 SGK
Bước 2: HS thực hiện nhiệm vụ: 
- HS suy nghĩ, hoàn thành các bài tập GV yêu cầu.
- GV quan sát và hỗ trợ, hướng dẫn.
Bước 3: Báo cáo kết quả hoạt động, thảo luận: 
- Mỗi BT GV mời 1 đến 2 HS trình bày. 
- Các HS khác chú ý chữa bài, theo dõi nhận xét bài các nhóm trên bảng.
Đáp án trắc nghiệm: 
[BẢNG] Câu 1 | Câu 2 | Câu 3 | Câu 4 | Câu 5
[BẢNG] A | C | C | C | D
[2.1.NC1a: HS thực hiện các tương tác được xác định rõ ràng với công nghệ số (làm bài tập online) trong lớp học.]
Gợi ý thực hiện phần Luyện tập: 
Câu 1.
Lỗi đặt sai tên biến 123a. Biến không thể bắt đầu bằng chữ số.
[1.2.NC1b: HS phân tích thông báo phản hồi từ hệ thống để xác định lỗi.
1.1.NC1a: HS nắm chắc các quy tắc đặt tên biến hợp lệ.]
Câu 2. 
Kết quả in ra xâu sau:
[5.2.NC1b: HS sử dụng thành thạo các toán tử trong Python.]
Bước 4: Đánh giá kết quả thực hiện: 
- GV chữa bài, chốt đáp án, tuyên dương các hoạt động tốt, nhanh và chính xác.
4. HOẠT ĐỘNG VẬN DỤNG
a) Mục tiêu: Học sinh thực hiện làm bài tập vận dụng để nắm vững kiến thức.
b) Nội dung: HS vận dụng kiến thức đã học để làm bài tập Vận dụng (SGK – tr96).
c) Sản phẩm: Bài làm của học sinh, kĩ năng giải quyết nhiệm vụ học tập.
d) Tổ chức thực hiện: 
Bước 1: GV chuyển giao nhiệm vụ
- GV yêu cầu HS hoạt động nhóm đôi hoàn thành bài tập 1, 2 phần Vận dụng (SGK -tr96).
Bước 2: HS thực hiện nhiệm vụ
- HS hợp tác thảo luận đưa ra ý kiến.
- GV điều hành, quan sát, hỗ trợ.
Bước 3: Báo cáo kết quả hoạt động, thảo luận
- Đại diện nhóm trình bày kết quả thảo luận, các nhóm khác theo dõi, đưa ý kiến.
Gợi ý thực hiện:
Câu 1. Chương trình có thể như sau:
Kết quả chạy chương trình trên như sau:
[5.2.NC1b: HS sử dụng thành thạo các toán tử trong Python.]
Câu 2. 
x = 7, y = 10. Lệnh x, y = y, x sẽ đổi giá trị của hai biến x, y.
Bước 4: Đánh giá kết quả thực hiện
- GV nhận xét, đánh giá, đưa ra một vài ý mà HS còn thiếu, chốt đáp án.
[1.2.NC1b: HS hiểu cơ chế lưu trữ dữ liệu của Python thông qua việc quan sát sự thay đổi giá trị của biến.]
* HƯỚNG DẪN VỀ NHÀ
Ghi nhớ kiến thức trong bài. 
Hoàn thành bài tập trong SBT.
Chuẩn bị bài mới Bài 18 - Các lệnh vào ra đơn giản.
```

</details>

