# Bài 21. CÂU LỆNH LẶP WHILE (2 TIẾT)

> Học liệu được chuyển định dạng từ KHBD Tin học 10 do giáo viên cung cấp. Nội dung trích xuất đầy đủ được giữ ở phần cuối để đối chiếu.

## Chủ đề
GIẢI QUYẾT VẤN ĐỀ VỚI SỰ TRỢ GIÚP CỦA MÁY TÍNH

## Mục tiêu kiến thức từ KHBD

Học xong bài này, HS đạt các yêu cầu sau:
Biết lệnh lặp while với số vòng lặp không biết trước.

## Trọng tâm hoạt động

Hoạt động 1: Lệnh lặp while
Hoạt động 2: Cấu trúc lập trình
Hoạt động 3: Thực hành sử dụng lệnh lặp while và các lệnh đã học

## Nội dung KHBD đầy đủ đã trích xuất

<details>
<summary>Mở nội dung KHBD</summary>

```text
Ngày soạn: .../.../...
Ngày dạy: .../.../...
BÀI 21: CÂU LỆNH LẶP WHILE (2 TIẾT)
I. MỤC TIÊU:
1. Kiến thức 
Học xong bài này, HS đạt các yêu cầu sau:
Biết lệnh lặp while với số vòng lặp không biết trước.
2. Năng lực 
 - Năng lực chung:
Năng lực tự chủ và tự học trong tìm tòi khám phá
Năng lực giao tiếp và hợp tác trong trình bày, thảo luận và làm việc nhóm
Năng lực tư duy và giải quyết vấn đề một cách sáng tạo trong thực hành, vận dụng.
- Năng lực riêng: 
Thực hành được giải các bài toán sử dụng lệnh lặp while.
- Năng lực số:
6.1.NC1a: Chủ động tạo ra và xử lý tình huống "treo máy" do vòng lặp vô hạn (Infinite Loop) gây ra, biết cách sử dụng phím tắt (Ctrl+C) hoặc công cụ để ngắt chương trình.
6.2.NC1a: Sử dụng Chatbot AI để mô phỏng bảng chạy (Trace Table) của vòng lặp while, giúp hình dung sự thay đổi của biến điều kiện qua từng bước lặp.
5.2.NC1a: Viết được chương trình giải quyết bài toán thực tế (in bảng mã ASCII, tính tổng có điều kiện) sử dụng cấu trúc while.
1.2.NC1a: Phân tích biểu thức logic làm điều kiện lặp để đảm bảo vòng lặp sẽ dừng đúng lúc (hội tụ).
3. Phẩm chất
Hình thành ý thức trách nhiệm, tính cẩn thận khi làm việc nhóm, phẩm chất làm việc chăm chỉ, chuyên cần để hoàn thành một nhiệm vụ.
Nghiêm túc, tập trung, tích cực và chủ động.
II. THIẾT BỊ DẠY HỌC VÀ HỌC LIỆU 
1. Đối với GV
- SGK, tài liệu giảng dạy, giáo án PPT.
- Máy tính, máy chiếu.
- Video AI tạo bằng công cụ AI được dùng để khởi động bài học.
2. Đối với HS
- SGK, SBT, vở ghi.
- Thiết bị di động/máy tính có kết nối Internet (sử dụng theo nhóm).
- Máy tính cài đặt Python.
III. TIẾN TRÌNH DẠY HỌC
A. HOẠT ĐỘNG KHỞI ĐỘNG 
a) Mục tiêu: Hướng HS đến khái niệm lặp với số lần lặp không cố định.
b) Nội dung: HS dựa vào hiểu biết của bản thân để trả lời câu hỏi.
c) Sản phẩm: Từ yêu cầu HS vận dụng kiến thức để trả lời câu hỏi GV đưa ra.
d) Tổ chức thực hiện: 
Bước 1: GV chuyển giao nhiệm vụ: 
- GV yêu cầu xem video AI được thiết kế để phục vụ bài dạy và trả lời câu hỏi xuất hiện trong video đó.
- GV đặt vấn đề: Cho các công việc được ghi trong cột A và cột B của bảng sau:
[BẢNG] A | B
[BẢNG] Vận động viên chạy 20 vòng xung quanh sân vận động. | Vận động viên chạy nhiều vòng xung quanh sân vận động trong thời gian 2 tiếng.
[BẢNG] Em làm 5 bài tập thầy cô giao về nhà. | Em làm các bài tập về nhà đến giờ ăn cơm thì dừng lại.
[BẢNG] Em đi lấy 15 xô nước giúp mẹ. | Em xách các xô nước giúp mẹ cho đến khi đầy thùng nước.
- GV yêu cầu HS: Đối với mỗi hàng, em hãy cho biết công việc được lặp đi lặp lại là gì? Điều kiện để dừng công việc là gì? Số lần thực hiện việc lặp lại giữa hai cột có gì khác nhau?
- GV chia lớp thành các nhóm nhỏ và cùng trả lời ba câu hỏi của phần khởi động.
Bước 2: HS thực hiện nhiệm vụ: 
- HS xem video và suy nghĩ câu trả lời.
- HS chú ý lắng nghe, suy nghĩ câu trả lời.
Bước 3: Báo cáo kết quả học tập, thảo luận: 
- GV gọi đại diện HS đứng lên trình bày kết quả
- HS khác lắng nghe, nhận xét, bổ sung.
Kết quả:
- Công việc được lặp đi lặp lại là:
Hàng 1: chạy xung quanh sân vận động.
Hàng 2: làm các bài tập thầy cô giao về nhà.
Hàng 3: xách các xô nước giúp mẹ
- Điều kiện để dừng công việc:
[BẢNG] A | B
[BẢNG] Chạy hết 20 vòng | Chạy hết thời gian 2 tiếng
[BẢNG] Làm hết 5 bài tập | Làm tới giờ ăn cơm
[BẢNG] Lấy đủ 15 xô nước | Đến khi đầy thùng nước
- Sự khác nhau:
Cột A: các công việc biết trước số lần lặp.
Cột B: các công việc được lặp với số lần không biết trước.
Bước 4: Đánh giá kết quả thực hiện: 
- GV nhận xét, đánh giá và kết luận.
[6.1.NC1a: HS sử dụng công cụ AI hoặc sản phẩm số do GV cung cấp để tiếp nhận thông tin, trả lời câu hỏi đơn giản.
2.1.NC1a: HS thực hiện các tương tác cơ bản với học liệu số (xem video, trả lời câu hỏi trên môi trường số).
1.1.NC1a: HS tiếp cận, khai thác được thông tin từ nguồn học liệu số dưới sự hướng dẫn của GV.]
- GV đánh giá kết quả của HS, trên cơ sở đó dẫn dắt HS vào bài học mới - Bài 21. Câu lệnh lặp while.
B. HÌNH THÀNH KIẾN THỨC MỚI
Hoạt động 1: Lệnh lặp while
a) Mục tiêu: HS làm quen với lệnh lặp while của Python.
b) Nội dung: HS đọc SGK, nghe giảng, thực hiện các nhiệm vụ được giao.
c) Sản phẩm: HS thực hiện Hoạt động 1, câu hỏi và bài tập củng cố, hoàn thành tìm hiểu kiến thức.
d) Tổ chức thực hiện:
[BẢNG] HOẠT ĐỘNG CỦA GV VÀ HS | SẢN PHẨM DỰ KIẾN | NLS
[BẢNG] Bước 1: GV chuyển giao nhiệm vụ:- GV yêu cầu HS: Hãy nêu một số ví dụ thực tế về việc lặp đi lặp lại một hành động mà không biết trước số lần, chỉ dừng khi thỏa mãn một điều kiện.- GV cho HS đọc và thực hiện Hoạt động 1 trong SGK trang 108 theo nhóm đôi:Quan sát chương trình sau, giải thích kết quả in ra - GV yêu cầu HS: Sử dụng AI tìm hiểu:+ Ý nghĩa của câu lệnh while.+ Cấu trúc chung của lệnh while.- GV cho HS làm quen với các ví dụ ban đầu của lệnh lặp while:+ Ví dụ 1: Quan sát đoạn chương trình sau và cho biết S là giá trị của biểu thức toán học nào?+ Ví dụ 2: Thực hiện các lệnh sau. Kết quả sẽ in ra những số nào?- GV đặt vấn đề: Các em hãy chạy thử đoạn mã sau và cho biết kết quả.k=1; while k<10:         print(k)- GV yêu cầu HS đọc và ghi nhớ khung kiến thức trọng tâm.- GV cho HS hoạt động nhóm đôi để hoàn thành Câu hỏi và bài tập củng cố SGK trang 109: 1. Lệnh while kiểm tra điều kiện trước hay sau khi thực hiện khối lệnh lặp?2. Viết đoạn chương trình tính tổng 2 + 4 +...+ 100 sử dụng lệnh while.Bước 2: HS thực hiện nhiệm vụ: - HS hình thành nhóm, thảo luận để trả lời các vấn đề được đưa ra. - HS sử dụng dụng Chatbot AI để tìm hiểu về lệnh lặp while.- HS chạy đoạn mã, có thể sử dụng AI để tìm hiểu và gỡ lỗi.- HS theo dõi, chú ý lắng nghe GV hướng dẫn.- HS đọc hiểu ví dụ trong SGK.- HS ghi nhớ và củng cố kiến thức bằng cách hoàn thành bài tập.Bước 3: Báo cáo kết quả hoạt động, thảo luận: - HS đọc kết quả từ AI, đối chiếu với SGK và rút ra kết luận.- Đại diện nhóm trình bày.- Một số HS khác nhận xét, bổ sung cho bạn. Bước 4: Đánh giá kết quả thực hiện: - GV nêu nhận xét, tổng quát lại kiến thức. | 1. Lệnh lặp while- Hoạt động 1: Giải thích kết quả:Lệnh lặp sẽ dừng lại khi k ≥ 100 và giá trị 750 nhận được là tổng của 1 + 8 + 15 + ... + 99.- Lệnh while là câu lệnh lặp với số lần không được xác định trước. Cấu trúc của câu lệnh while có dạng như sau:while <điều kiện>:          <khối lệnh>Việc thực hiện <khối lệnh> được lặp đi lặp lại tới khi <điều kiện> không còn được thỏa mãn.- Ví dụ 1: Đoạn chương trình tính tổng 12  + 22 + ... + k2 với điều kiện k2 < 100. Vậy S chính là tổng bình phương các số tự nhiên nhỏ hơn 10.- Ví dụ 2: Vòng lặp while sẽ dừng lại khi k vượt quá 50. Bắt đầu vòng lặp, k = 2. Sau mỗi vòng lặp k tăng lên 3 đơn vị. Do vậy kết quả in ra dãy sau:2 5 8 11 14 17 20 23 26 29 32 35 38 41 44 47- Đoạn mã chạy mãi không dừng (lặp vô hạn).Câu hỏi và bài tập củng cố:1. Lệnh lặp while sẽ kiểm tra điều kiện lặp trước.2. Chương trình có thể như sau: | - 1.2.NC1a: HS hiểu cách hoạt động của lệnh lặp while.- 5.2.NC1a: HS viết được các đoạn mã nguồn Python sử dụng lệnh lặp while.- 6.1.NC1a: Xác định nhu cầu và giải quyết vấn đề kỹ thuật.- 2.4.NC1a: Vận hành thiết bị và phần mềm.
Hoạt động 2: Cấu trúc lập trình
a) Mục tiêu: HS biết và tổng kết lại được các cấu trúc điều khiển chính của lập trình cơ bản bao gồm cấu trúc tuần tự, cấu trúc rẽ nhánh if, cấu trúc lặp thông qua các lệnh lặp for và while.
b) Nội dung: HS tìm hiểu các cấu trúc lập trình cơ bản.
c) Sản phẩm: HS hoàn thành tìm hiểu kiến thức.
d) Tổ chức thực hiện: 
[BẢNG] HOẠT ĐỘNG CỦA GV VÀ HS | SẢN PHẨM DỰ KIẾN | NLS
[BẢNG] Bước 1: GV chuyển giao nhiệm vụ:- GV yêu cầu HS đọc nhiệm vụ Hoạt động 2 SGK trang 109: Đọc, thảo luận để hiểu các cấu trúc lập trình cơ bản trong ngôn ngữ lập trình bậc cao.- GV yêu cầu HS: Sử dụng AI tìm hiểu ba cấu trúc lập trình cơ bản của các ngôn ngữ lập trình bậc cao.- GV cho HS ghi hộp kiến thức trọng tâm vào vở để ghi nhớ.Bước 2: HS thực hiện nhiệm vụ: - HS sử dụng dụng Chatbot AI để tìm hiểu kiến thức.- HS ghi chép, chú ý lắng nghe.- GV quan sát và trợ giúp HS. Bước 3: Báo cáo kết quả hoạt động, thảo luận: - HS đọc kết quả từ AI, đối chiếu với SGK và rút ra kết luận.- HS giơ tay phát biểu, trình bày kết quả.- Một số HS khác nhận xét, bổ sung cho bạn. Bước 4: Đánh giá kết quả thực hiện: GV tổng quát lưu ý lại kiến thức và yêu cầu HS ghi chép đầy đủ vào vở. | 2. Cấu trúc lập trìnhBa cấu trúc lập trình cơ bản của các ngôn ngữ lập trình bậc cao gồm: cấu trúc tuần tự, cấu trúc rẽ nhánh, cấu trúc lặp. | 6.2.NC1a: Giải quyết vấn đề với sự hỗ trợ của công cụ số.
Hoạt động 3: Thực hành sử dụng lệnh lặp while và các lệnh đã học
a) Mục tiêu: HS thực hành rèn luyện kĩ năng lập trình với lệnh lặp while và các lệnh đã học trong các bài trước.
b) Nội dung: HS thực hành viết chương trình sử dụng lệnh lặp while và các lệnh đã học.
c) Sản phẩm: HS viết chương trình:
- In toàn bộ dãy các số tự nhiên từ 1 đến 100 trên một hàng ngang.
- In ra màn hình các chữ cái tiếng Anh từ "A" đến "Z" theo ba hàng ngang trên màn hình, hai hàng ngang đầu có 10 chữ cái, hàng thứ ba có 6 chữ cái.
d) Tổ chức thực hiện: 
[BẢNG] HOẠT ĐỘNG CỦA GV VÀ HS | SẢN PHẨM DỰ KIẾN | NLS
[BẢNG] Bước 1: GV chuyển giao nhiệm vụ:- GV nêu từng nhiệm vụ và yêu cầu HS thực hành theo nhóm đôi:+ Nhiệm vụ 1: Viết chương trình in toàn bộ dãy các số tự nhiên từ 1 đến 100 trên một hàng ngang.+ Nhiệm vụ 2: Viết chương trình in ra màn hình dãy các chữ cái tiếng Anh từ "A" đến "Z" ba hàng ngang trên màn hình, hai hàng ngang đầu có 10 chữ cái, hàng thứ ba có 6 chữ cái.- Ở nhiệm vụ 2, GV giới thiệu cho HS biết thêm về hai lệnh ord() và chr() của Python:+ ord(<kí tự>) = số thứ tự của kí tự trong bảng mã Unicode.+ chr(k) = kí tự tương ứng số thứ tự k trong bảng mã Unicode.Bước 2: HS thực hiện nhiệm vụ: - HS thực hành theo nhóm đôi.- GV quan sát và trợ giúp HS. Bước 3: Báo cáo kết quả hoạt động, thảo luận: - HS soạn thảo chương trình trong môi trường Python:+ In toàn bộ dãy các số tự nhiên từ 1 đến 100 trên một hàng ngang.+ In ra màn hình các chữ cái tiếng Anh từ "A" đến "Z" theo ba hàng ngang trên màn hình, hai hàng ngang đầu có 10 chữ cái, hàng thứ ba có 6 chữ cái.Bước 4: Đánh giá kết quả thực hiện: GV quan sát, nhận xét kết quả của HS. | - Nhiệm vụ 1:Hướng dẫn: Chương trình có thể như sau:- Nhiệm vụ 2:Hướng dẫn: Chương trình có thể như sau: | - 1.2.NC1a: Xử lý và phân tích dữ liệu, thông tin (tư duy thuật toán và dữ liệu).- 5.2.NC1a: HS viết được các đoạn mã nguồn Python sử dụng lệnh lặp while.- 6.1.NC1a: Xác định nhu cầu và giải quyết vấn đề kỹ thuật.- 2.4.NC1a: Vận hành thiết bị và phần mềm.
C. HOẠT ĐỘNG LUYỆN TẬP
a) Mục tiêu: HS củng cố lại kiến thức về câu lệnh lặp while.
b) Nội dung: HS vận dụng các kiến thức đã học để giải bài tập trong phần Luyện tập (SGK - tr110) và một số bài tập làm thêm.
c) Sản phẩm học tập: Bài làm của học sinh, kĩ năng giải quyết nhiệm vụ học tập.
d) Tổ chức thực hiện: 
Bước 1: GV chuyển giao nhiệm vụ: 
- GV tổ chức trò chơi trắc nghiệm nhanh trên Quizizz hoặc Kahoot để củng cố toàn bài.
- GV cung cấp mã QR hoặc đường Links cho HS làm Phiếu bài tập, trả lời nhanh một số câu hỏi trắc nghiệm tổng kết bài học.
Câu 1. Câu lệnh lặp while được sử dụng khi nào là phù hợp nhất?
A. Khi biết trước số lần lặp
B. Khi số lần lặp chưa biết trước, phụ thuộc vào điều kiện
C. Khi chỉ cần thực hiện câu lệnh đúng một lần
D. Khi không cần kiểm tra điều kiện
Câu 2. Trong cấu trúc lặp while, điều kiện lặp được kiểm tra vào thời điểm nào?
A. Sau mỗi lần lặp
B. Sau khi kết thúc toàn bộ vòng lặp
C. Trước khi thực hiện khối lệnh trong vòng lặp
D. Chỉ kiểm tra một lần duy nhất
Câu 3. Điều gì sẽ xảy ra nếu điều kiện trong câu lệnh while luôn luôn đúng và không có lệnh thay đổi điều kiện?
A. Chương trình chạy nhanh hơnB. Vòng lặp chỉ chạy một lầnC. Chương trình kết thúc ngayD. Chương trình rơi vào vòng lặp vô hạn
Câu 4. Trong Python, câu lệnh nào dưới đây là cú pháp đúng của vòng lặp while?
A. while i < 5
      print(i)
B. while (i < 5) do
      print(i)
C. while i < 5:
      print(i)
D. while i < 5 then
      print(i)
Câu 5. Cho đoạn chương trình sau:
i = 1
while i <= 3:
    print(i)
    i = i + 1
Chương trình sẽ in ra kết quả nào?
A. 1B. 1 2 3C. 1 2D. 1 2 3 4
- GV tổ chức cho HS làm bài tập phần Luyện tập trang 110 SGK:
Bài 1: Em hãy cho biết đoạn chương trình sau sẽ in những gì ra màn hình? Khi nào thì quá trình in kết thúc?
a)
b)
Bài 2: Đoạn chương trình sau thực hiện công việc gì? Khi nào vòng lặp kết thúc?
Bài 3: Em hãy cho biết kết quả thực hiện của hai đoạn chương trình sau:
a)
b)
Bài 4: Em hãy sử dụng câu lệnh lặp while để thay thế câu lệnh for trong đoạn chương trình sau:
Bước 2: HS thực hiện nhiệm vụ: 
- HS suy nghĩ, hoàn thành các bài tập GV yêu cầu.
- GV quan sát và hỗ trợ, hướng dẫn.
Bước 3: Báo cáo kết quả hoạt động, thảo luận: 
- Mỗi BT GV mời 1 đến 2 HS trình bày. 
- Các HS khác chú ý chữa bài, theo dõi nhận xét bài các nhóm trên bảng.
Bước 4: Đánh giá kết quả thực hiện: 
- GV chữa bài, chốt đáp án, tuyên dương các hoạt động tốt, nhanh và chính xác.
[2.1.NC1a: HS thực hiện các tương tác được xác định rõ ràng với công nghệ số (làm bài tập online) trong lớp học.
5.2.NC1a: Viết được chương trình Python sử dụng lệnh lặp giải quyết bài toán thực tế.
1.2.NC1a: Xử lý và phân tích dữ liệu, thông tin.
6.1.NC1a: Xác định nhu cầu và giải quyết vấn đề kỹ thuật.]
Kết quả: 
Trò chơi trắc nghiệm:
[BẢNG] Câu 1 | Câu 2 | Câu 3 | Câu 4 | Câu 5
[BẢNG] B | C | D | C | B
Luyện tập 1: Chương trình sau sẽ in ra số cần tìm.
Kết quả in ra số 97 là số cần tìm.
Luyện tập 2: Chương trình có thể như sau:
Bài tập làm thêm:
Bài 1: 
a) Lần lượt in ra trên cùng một dòng các giá trị bằng (gần đúng) của , , , . Chương trình dừng khi giá trị i = 5.
b) Chương trình không in gì mà kết thúc luôn, do điều kiện thực hiện vòng lặp (i < 5) không được thỏa mãn.
Bài 2: Đoạn chương trình đã cho thực hiện việc nhập dữ liệu thu nhập của hộ gia đình từ bàn phím. Khi giá trị được nhập vào nhỏ hơn hoặc bằng 0 thì quá trình nhập dữ liệu kết thúc.
Bài 3: Cả hai đoạn chương trình đều tính và in ra tổng các số tự nhiên từ 1 đến 10.
Bài 4: Đoạn chương trình thực hiện việc tính tổng bình phương các số từ 5 đến 10 Em có thể dùng câu lệnh while để thay thế câu lệnh for như sau:
D. HOẠT ĐỘNG VẬN DỤNG
a) Mục tiêu: Học sinh thực hiện làm bài tập vận dụng để nắm vững kiến thức.
b) Nội dung: HS vận dụng kiến thức đã học để làm bài tập Vận dụng (SGK – tr107).
c) Sản phẩm: Bài làm của học sinh, kĩ năng giải quyết nhiệm vụ học tập.
d) Tổ chức thực hiện: 
Bước 1: GV chuyển giao nhiệm vụ
- GV yêu cầu HS hoàn thành bài tập phần Vận dụng (SGK -tr110).
- GV đưa câu hỏi, HS thảo luận nhóm đôi làm bài tập làm thêm.
Bài 5: Sử dụng câu lệnh while để giải bài toán dân gian:
"Vừa gà vừa chó
Bó lại cho tròn
Ba mươi sáu con
Một trăm chân chẵn
Hỏi có mấy gà mấy chó?"
Bước 2: HS thực hiện nhiệm vụ
- HS hợp tác thảo luận đưa ra ý kiến.
- GV điều hành, quan sát, hỗ trợ.
Bước 3: Báo cáo kết quả hoạt động, thảo luận
- Đại diện nhóm trình bày kết quả thảo luận, các nhóm khác theo dõi, đưa ý kiến.
Bước 4: Đánh giá kết quả thực hiện
- GV nhận xét, đánh giá, đưa ra một vài ý mà HS còn thiếu, chốt đáp án.
[5.2.NC1a: Viết được chương trình Python sử dụng lệnh lặp giải quyết bài toán thực tế.
1.2.NC1a: Xử lý và phân tích dữ liệu, thông tin.
6.1.NC1a: Xác định nhu cầu và giải quyết vấn đề kỹ thuật.]
Đáp án:
Vận dụng Chương trình có thể như sau:
Lưu ý: Lệnh print() không có tham số có ý nghĩa xuống dòng.
Bài tập làm thêm:
Bài 5: Chương trình có thể viết như sau:
* HƯỚNG DẪN VỀ NHÀ
Ghi nhớ kiến thức trong bài. 
Hoàn thành bài tập còn lại trong SBT.
Chuẩn bị bài mới Bài 22 - Kiểu dữ liệu danh sách.
```

</details>

