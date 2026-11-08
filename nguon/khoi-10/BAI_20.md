# Bài 20. CÂU LỆNH LẶP FOR (2 TIẾT)

> Học liệu được chuyển định dạng từ KHBD Tin học 10 do giáo viên cung cấp. Nội dung trích xuất đầy đủ được giữ ở phần cuối để đối chiếu.

## Chủ đề
GIẢI QUYẾT VẤN ĐỀ VỚI SỰ TRỢ GIÚP CỦA MÁY TÍNH

## Mục tiêu kiến thức từ KHBD

: 
Học xong bài này, HS đạt các yêu cầu sau:
Biết được ý nghĩa của vùng chỉ số tạo bởi lệnh range().
Biết được chức năng của lệnh lặp for.

## Trọng tâm hoạt động

Hoạt động 1: Lệnh lặp for
Hoạt động 2: Lệnh range
Hoạt động 3: Thực hành lệnh lặp for và lệnh range()

## Nội dung KHBD đầy đủ đã trích xuất

<details>
<summary>Mở nội dung KHBD</summary>

```text
Ngày soạn: .../.../...
Ngày dạy: .../.../...
BÀI 20: CÂU LỆNH LẶP FOR (2 TIẾT)
I. MỤC TIÊU:
1. Kiến thức: 
Học xong bài này, HS đạt các yêu cầu sau:
Biết được ý nghĩa của vùng chỉ số tạo bởi lệnh range().
Biết được chức năng của lệnh lặp for.
2. Năng lực 
 - Năng lực chung:
Năng lực tự chủ và tự học trong tìm tòi khám phá
Năng lực giao tiếp và hợp tác trong trình bày, thảo luận và làm việc nhóm
Năng lực tư duy và giải quyết vấn đề một cách sáng tạo trong thực hành, vận dụng.
- Năng lực riêng: 
Biết cách dùng lệnh for trong Python.
- Năng lực số:
5.2.NC1a: Viết được mã nguồn Python sử dụng cấu trúc lặp for để giải quyết bài toán toán học (tính tổng dãy số, tìm ước).
6.2.NC1a: Sử dụng Chatbot AI để giải thích cơ chế hoạt động từng bước (step-by-step tracing) của vòng lặp, giúp hình dung rõ sự thay đổi của biến chạy.
6.1.NC1a: Chủ động chẩn đoán và sửa các lỗi logic phổ biến trong vòng lặp (như lỗi "Off-by-one" - thừa/thiếu 1 đơn vị trong hàm range).
2.4.NC1a: Sử dụng thành thạo môi trường lập trình (IDLE/VS Code) để chạy thử nghiệm các tham số khác nhau của hàm range().
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
a) Mục tiêu: Gợi mở cho HS hướng đến lệnh lặp for trong chương trình.
b) Nội dung: HS dựa vào hiểu biết của bản thân để trả lời câu hỏi.
c) Sản phẩm: Từ yêu cầu HS vận dụng kiến thức để trả lời câu hỏi GV đưa ra.
d) Tổ chức thực hiện: 
Bước 1: GV chuyển giao nhiệm vụ: 
- GV yêu cầu xem video AI được thiết kế để phục vụ bài dạy và trả lời câu hỏi xuất hiện trong video đó.
- GV dẫn dắt: Em có thể đã gặp những trường hợp cần thực hiện một số công việc lặp đi lặp lại nhiều lần. Ví dụ, để kể tên tất cả các bạn trong lớp có 30 học sinh, em cần lần lượt đọc tên từng bạn; để đếm số lượng các số chia hết cho 3 trong khoảng từ 1 đến 50, em có thể kiểm tra lần lượt các số từ 1 đến 50 và ghi ra các số chia hết cho 3 (chẳng hạn, 3, 6, 9...) rồi đếm các số đó. Ngôn ngữ lập trình bậc cao có các câu lệnh cho phép viết một cách ngắn gọn các bước cần thực hiện lặp đi lặp lại để tạo thành một cấu trúc lập trình gọi là cấu trúc lặp.
- GV yêu cầu HS: Em có thể xác định được trong mỗi ví dụ trên công việc nào cần phải lặp lại và được lặp lại bao nhiêu lần không?
Bước 2: HS thực hiện nhiệm vụ: 
- HS xem video và suy nghĩ câu trả lời.
- HS chú ý lắng nghe, suy nghĩ câu trả lời.
Bước 3: Báo cáo kết quả học tập, thảo luận: HS giơ tay lên bảng trình bày kết quả, HS khác nhận xét, bổ sung:
Công việc cần lặp lại:
- Đọc tên từng bạn: lặp lại 30 lần.
- Kiểm tra lần lượt các số từ 1 đến 50 và ghi ra các số chia hết cho 3: Thao tác xét lần lượt từng số từ 1 đến 50 chính là lệnh lặp, số lần lặp là 50.
Bước 4: Đánh giá kết quả thực hiện: 
- GV nhận xét, đánh giá và kết luận.
[6.1.NC1a: HS sử dụng công cụ AI hoặc sản phẩm số do GV cung cấp để tiếp nhận thông tin, trả lời câu hỏi đơn giản.
2.1.NC1a: HS thực hiện các tương tác cơ bản với học liệu số (xem video, trả lời câu hỏi trên môi trường số).
1.1.NC1a: HS tiếp cận, khai thác được thông tin từ nguồn học liệu số dưới sự hướng dẫn của GV.]
- GV đánh giá kết quả của HS, trên cơ sở đó dẫn dắt HS vào bài học mới - Bài 20. Câu lệnh lặp for.
B. HÌNH THÀNH KIẾN THỨC MỚI
Hoạt động 1: Lệnh lặp for
a) Mục tiêu: HS làm quen với lệnh lặp for của Python ở dạng ban đầu với lệnh range().
b) Nội dung: HS đọc SGK, nghe giảng, thực hiện các nhiệm vụ được giao.
c) Sản phẩm: HS thực hiện Hoạt động 1, câu hỏi và bài tập củng cố, hoàn thành tìm hiểu kiến thức.
d) Tổ chức thực hiện:
[BẢNG] HOẠT ĐỘNG CỦA GV VÀ HS | SẢN PHẨM DỰ KIẾN | NLS
[BẢNG] Bước 1: GV chuyển giao nhiệm vụ:- GV cho HS đọc và thực hiện Hoạt động 1 trong SGK trang 105 theo nhóm đôi:Thực hiện đoạn chương trình sau trong chế độ gõ lệnh trực tiếp của Python để tính tổng 0 + 1 + ... + 9. Tổng này có giá trị bao nhiêu? Giải thích kết quả.- GV yêu cầu HS: Sử dụng AI tìm hiểu:+ Ý nghĩa của câu lệnh for.+ Cấu trúc chung của lệnh for.- GV liệt kê giá trị của S và k qua từng bước lặp để HS hiểu rõ hơn cách hoạt động của lệnh lặp for.- GV cho HS làm quen với các ví dụ ban đầu của lệnh lặp for:+ Ví dụ 1: Tính tổng các số tự nhiên chẵn nhỏ hơn n, với n cho trước (n = 10).+ Ví dụ 2: Đếm các số nguyên nhỏ hơn n (n = 20) và là bội của 3.- GV chốt lại kiến thức:+ Lệnh lặp for sẽ cần một biến để chạy trong vùng các giá trị của lệnh range(n).+ Vùng range() sẽ là dãy các giá trị 0, 1, 2, ..., n - 1.+ Các lệnh lặp sẽ viết sau dấu:, xuống dòng và viết thụt vào (1 tab hoặc 4 dấu cách).- GV yêu cầu HS đọc và ghi nhớ khung kiến thức trọng tâm.- GV cho HS hoạt động cá nhân để hoàn thành Câu hỏi và bài tập củng cố SGK trang 106: Với giá trị n cho trước, so sánh giá trị S trong đoạn chương trình sau với tổng 1 + 2 + ... + n.Bước 2: HS thực hiện nhiệm vụ: - HS hình thành nhóm, thảo luận để trả lời các vấn đề được đưa ra. - HS sử dụng dụng Chatbot AI để tìm hiểu về lệnh lặp for.- HS theo dõi, chú ý lắng nghe GV hướng dẫn.- HS đọc hiểu ví dụ trong SGK.- HS ghi nhớ và củng cố kiến thức bằng cách hoàn thành bài tập.Bước 3: Báo cáo kết quả hoạt động, thảo luận: - HS đọc kết quả từ AI, đối chiếu với SGK và rút ra kết luận.- Đại diện nhóm trình bày.- Một số HS khác nhận xét, bổ sung cho bạn. Bước 4: Đánh giá kết quả thực hiện: - GV nêu nhận xét, tổng quát lại kiến thức. | 1. Lệnh lặp for- Hoạt động 1: + Tổng có giá trị bằng 45. + Giải thích: Trong đoạn chương trình trên, lệnh range (10) trả lại một vùng giá trị gồm 10 số 0, 1, 2, 3, 4, 5, 6, 7, 8, 9. Lệnh for sẽ thực hiện 10 lần lặp, mỗi lần lặp ứng với một giá trị k trong vùng giá trị trên. Sau lệnh lặp for trên, biến S sẽ có giá trị là tổng 0 + 1 + ... + 9 = 45.- for là lệnh lặp với số lần biết trước. Số lần lặp thường được xác định bởi vùng giá trị của lệnh range().- Cấu trúc chung của câu lệnh for:for <i> in range(m, n):      <khối lệnh>- Khi m bằng 0 câu lệnh for có thể viết như sau:for <i> in range(n):      <khối lệnh>Câu hỏi và bài tập củng cố:Lệnh range(1, n + 1) sẽ bao gồm các giá trị 1, 2, 3, ..., n. Do vậy đoạn chương trình trên thực sự tính tổng 1 + 2 + ... + n, với n là biến lưu một số tự nhiên nào đó cho trước. | - 1.2.NC1a: HS hiểu cách hoạt động của lệnh lặp for.- 5.2.NC1a: HS viết được các đoạn mã nguồn Python sử dụng lệnh lặp for.- 6.1.NC1a: Xác định nhu cầu và giải quyết vấn đề kỹ thuật.- 2.4.NC1a: Vận hành thiết bị và phần mềm.
Hoạt động 2: Lệnh range
a) Mục tiêu: HS tìm hiểu sâu hơn vùng giá trị của lệnh range() với đầy đủ các dạng range(start, stop).
b) Nội dung: Tìm hiểu vùng giá trị xác định bởi lệnh range().
c) Sản phẩm: HS hoàn thành tìm hiểu kiến thức.
d) Tổ chức thực hiện: 
[BẢNG] HOẠT ĐỘNG CỦA GV VÀ HS | SẢN PHẨM DỰ KIẾN | NLS
[BẢNG] Bước 1: GV chuyển giao nhiệm vụ:- GV yêu cầu HS thảo luận nhóm đôi, hoàn thành Hoạt động 2 SGK trang 102:Quan sát các lệnh for sau và so sánh kết quả in ra để biết vùng giá trị được xác định bởi lệnh range(). Lưu ý, lệnh print() có thể có thêm tham số để in bộ dữ liệu theo hàng ngang.- GV yêu cầu HS: Sử dụng AI tìm hiểu các dạng của lệnh range.1. Chỉ có một tham số. Lệnh có dạng range() là các giá trị từ 0 đến n - 1.2. Có hai tham số. Lệnh sẽ có dạng range(start, stop) sẽ là vùng các giá trị tính từ start đến trước stop (tức là stop - 1), bước nhảy 1.- GV lưu ý: Nếu trường hợp gọi là dạng 2 (có hai tham số) nhưng start > = stop thì kết quả của dãy range() là rỗng.- GV cho HS đọc lại khung kiến thức trọng tâm.- GV yêu cầu HS suy nghĩ và thực hiện cá nhân Câu hỏi và bài tập củng cố SGK trang 107: Hãy biểu diễn các dãy sau đây bằng lệnh range()a) 1, 2, 3, ..., 50b) 5, 6, 7, 8, 9, 10c) 0, 1d) 10Bước 2: HS thực hiện nhiệm vụ: - HS theo dõi SGK, thảo luận nhóm và thực hiện các yêu cầu đặt ra.- HS sử dụng dụng Chatbot AI để tìm hiểu kiến thức.- HS lắng nghe GV lưu ý và ghi nhớ.- HS đọc thông tin SGK, hoàn thành bài tập.- GV quan sát và trợ giúp HS. Bước 3: Báo cáo kết quả hoạt động, thảo luận: - HS đọc kết quả từ AI, đối chiếu với SGK và rút ra kết luận.- HS giơ tay phát biểu, trình bày kết quả.- Một số HS khác nhận xét, bổ sung cho bạn. Bước 4: Đánh giá kết quả thực hiện: GV tổng quát lưu ý lại kiến thức và yêu cầu HS ghi chép đầy đủ vào vở. | 2. Lệnh range- Hoạt động 2: + Kết quả của lệnh range(3, 10) là 3, 4, 5, 6, 7, 8, 9.+ Kết quả của lệnh range(0, 15) là 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14.- Kết luận: Lệnh tạo vùng giá trị bằng cú pháp range(start, stop) trả lại vùng giá trị gồm các số nguyên liên tiếp từ start đến stop - 1.Câu hỏi và bài tập củng cố:a) range(1, 51)b) range(5, 11)c) range(2)d) range(10, 11). | - 1.2.NC1a: HS hiểu cách hoạt động của lệnh lặp range.- 6.1.NC1a: Xác định nhu cầu và giải quyết vấn đề kỹ thuật.- 2.4.NC1a: Vận hành thiết bị và phần mềm.
Hoạt động 3: Thực hành lệnh lặp for và lệnh range()
a) Mục tiêu: HS thực hành với lệnh lặp for và hiểu được ý nghĩa của lệnh range().
b) Nội dung: HS thực hành viết chương trình sử dụng lệnh lặp for và lệnh range().
c) Sản phẩm: 
- Tính và in ra các ước số của n, tính cả 1 và n.
- Đếm các ước số thực sự của n, tức là các ước số của n nhưng phải nhỏ hơn n.
d) Tổ chức thực hiện: 
[BẢNG] HOẠT ĐỘNG CỦA GV VÀ HS | SẢN PHẨM DỰ KIẾN | NLS
[BẢNG] Bước 1: GV chuyển giao nhiệm vụ:- GV nêu từng nhiệm vụ và yêu cầu HS thực hành theo nhóm đôi:+ Nhiệm vụ 1: Nhập số tự nhiên n từ bàn phím và in ra màn hình dãy các ước số của n theo chiều ngang màn hình. Ví dụ nếu n = 10 thì chương trình sẽ in ra dãy số 1, 2, 5, 10.+ Nhiệm vụ 2: Nhập số tự nhiên n từ bàn phím và đếm các ước thực sự của n. Ước số thực sự của n là số tự nhiên k < n và là ước của n.Bước 2: HS thực hiện nhiệm vụ: - HS thực hành theo nhóm đôi.- GV quan sát và trợ giúp HS. Bước 3: Báo cáo kết quả hoạt động, thảo luận: - HS soạn thảo chương trình trong môi trường Python:+ Tính và in ra các ước số của n, tính cả 1 và n.+ Đếm các ước số thực sự của n, tức là các ước số của n nhưng phải nhỏ hơn n.Bước 4: Đánh giá kết quả thực hiện: GV quan sát, nhận xét kết quả của HS. | - Nhiệm vụ 1:Hướng dẫn: Chương trình có thể như sau:- Nhiệm vụ 2:Hướng dẫn: Chương trình có thể như sau: | - 1.2.NC1a: Xử lý và phân tích dữ liệu, thông tin (tư duy thuật toán và dữ liệu).- 5.2.NC1a: HS viết được các đoạn mã nguồn Python sử dụng lệnh lặp for.- 6.1.NC1a: Xác định nhu cầu và giải quyết vấn đề kỹ thuật.- 2.4.NC1a: Vận hành thiết bị và phần mềm.
C. HOẠT ĐỘNG LUYỆN TẬP
a) Mục tiêu: HS củng cố lại kiến thức về câu lệnh lặp for.
b) Nội dung: HS vận dụng các kiến thức đã học để giải bài tập trong phần Luyện tập (SGK - tr107) và một số bài tập làm thêm.
c) Sản phẩm học tập: Bài làm của học sinh, kĩ năng giải quyết nhiệm vụ học tập.
d) Tổ chức thực hiện: 
Bước 1: GV chuyển giao nhiệm vụ: 
- GV tổ chức trò chơi trắc nghiệm nhanh trên Quizizz hoặc Kahoot để củng cố toàn bài.
- GV cung cấp mã QR hoặc đường Links cho HS làm Phiếu bài tập, trả lời nhanh một số câu hỏi trắc nghiệm tổng kết bài học.
Câu 1. Câu lệnh lặp for thường được sử dụng trong trường hợp nào?
A. Khi số lần lặp đã biết trướcB. Khi số lần lặp chưa biết trướcC. Khi chương trình chỉ cần rẽ nhánhD. Khi cần xử lý lỗi chương trình
Câu 2. Trong Python, cấu trúc đúng của câu lệnh for là:
A. for i to n doB. for i in range(...)C. for (i = 1; i <= n; i++)D. foreach i in n
Câu 3. Kết quả của đoạn chương trình sau là gì?
for i in range(1, 4):
    print(i)
A. In ra các số: 1 2 3 4
B. In ra số: 1 2
C. In ra các số: 1 2 3
D. Không in ra gì
Câu 4. Trong câu lệnh for i in range(5):, biến i sẽ nhận các giá trị nào?
A. 1, 2, 3, 4, 5B. 1, 2, 3, 4C. 0, 1, 2, 3D. 0, 1, 2, 3, 4
Câu 5. Câu lệnh nào sau đây dùng để lặp lại một khối lệnh 10 lần?
A. for i in range(1,10):B. for i in range(10):C. for i in range(1,11,2):D. for i in range(0,9):
- GV tổ chức cho HS làm bài tập phần Luyện tập trang 107 SGK:
Bài 1: Với n nhập từ bàn phím, viết chương trình đưa ra màn hình tổng các số tự nhiên nhỏ hơn n và chia hết cho 3 hoặc chia hết cho 5.
Bài 2: Viết chương trình nhập từ bàn phím số tự nhiên n và tính tổng:
S = 1 × 2 + 2 × 3 + 3 × 4 + ... + (n - 1) × 1
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
[BẢNG] A | B | C | D | B
Luyện tập 1: 
Đoạn chương trình in ra (1 + 2 + … + n)2.
Luyện tập 2: Chương trình có thể như sau:
Bài tập làm thêm:
Bài 1: Tham khảo chương trình sau:
Bài 2: Tham khảo chương trình sau:
D. HOẠT ĐỘNG VẬN DỤNG
a) Mục tiêu: Học sinh thực hiện làm bài tập vận dụng để nắm vững kiến thức.
b) Nội dung: HS vận dụng kiến thức đã học để làm bài tập Vận dụng (SGK – tr107).
c) Sản phẩm: Bài làm của học sinh, kĩ năng giải quyết nhiệm vụ học tập.
d) Tổ chức thực hiện: 
Bước 1: GV chuyển giao nhiệm vụ
- GV yêu cầu HS hoàn thành bài tập 1, 2 phần Vận dụng (SGK -tr107).
- GV đưa câu hỏi, HS thảo luận nhóm đôi làm bài tập làm thêm.
Bài 3: Viết chương trình giải bài toán dân gian:
"Vừa gà vừa chó
Bó lại cho tròn
Ba mươi sáu con
Một trăm chân chẵn
Hỏi có mấy gà mấy chó?"
Bài 4: Lập trình giải bài toán dân gian TRĂM TRÂU TRĂM CỎ:
"Trâu đứng ăn năm
Trâu nằm ăn ba
Lụ khụ trâu già
Ba con một bó
Trăm con ăn cỏ
Trăm bó no nê.
Hỏi có bao nhiêu trâu đứng, trâu nằm, trâu già?".
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
Vận dụng 1: Chương trình có thể như sau:
Vận dụng 2: Chương trình có thể như sau:
Bài tập làm thêm:
Bài 3: Nếu kí hiệu k là số con gà thì số con chó sẽ là 36 - k và tổng số chân sẽ là so_chan = k × 2 + (36 - k) × 4. Rõ ràng k ≤ 36. Như vậy, ta chỉ việc cho k nhận các giá trị lần luợt từ 0 tới 36 và kiểm tra nếu so_chan = 100 thì k và 36 - k chính là số gà và số chó cần tìm. Chương trình có thể viết như sau:
Bài 4: Bài toán có thể phát biểu lại như sau: Có một trăm con trâu ăn hết một trăm bó cỏ. Mỗi con trâu đứng ăn được 5 bó. Mỗi con trâu nằm ăn được 3 bó. Ba con trâu già ăn cùng nhau hết 1 bó. Hỏi có bao nhiêu con trâu đứng, bao nhiêu con trâu nằm và bao nhiêu con trâu già?
Mỗi trâu đứng ăn 5 bó cỏ nên tối đa số trâu đứng chỉ có thể là 100/5 tức là 20 con.
Mỗi con trâu nằm ăn 3 bó cỏ nên số trâu nằm nhỏ hơn hoặc bằng 100/3 tức là 33 con.
Số trâu già = 100 - số trâu đứng - số trâu nằm.
Chương trình có thể viết như sau:
* HƯỚNG DẪN VỀ NHÀ
Ghi nhớ kiến thức trong bài. 
Hoàn thành bài tập còn lại trong SBT.
Chuẩn bị bài mới Bài 21 - Câu lệnh lặp while.
```

</details>

