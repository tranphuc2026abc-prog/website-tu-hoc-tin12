# Bài 14. SQL – NGÔN NGỮ TRUY VẤN CÓ CẤU TRÚC  > Học liệu được chuẩn hóa từ KHBD khối 11; nội dung gốc được giữ đầy đủ ở phần cuối để đối chiếu.  ## Chủ đề True  ## Mục tiêu kiến thức từ KHBD  True  ## Trọng tâm hoạt động  Hoạt động 3: Cập nhật và truy xuất dữ liệu  ## KHBD đầy đủ đã chuyển định dạng  <details> <summary>Mở toàn bộ nội dung trích xuất từ tài liệu Word</summary>  ```text Ngày soạn: …/…/…
Ngày dạy: …/…/…
BÀI 14: SQL – NGÔN NGỮ TRUY VẤN CÓ CẤU TRÚC
I. MỤC TIÊU
1. Kiến thức
Học xong bài này, HS đạt các yêu cầu sau:
Hiểu được ở mức nguyên lí: có thể dùng SQL định nghĩa, cập nhật và truy xuất dữ liệu như thế nào qua các cấu trúc cơ bản của các câu truy vấn SQL. 
2. Năng lực 
Năng lực chung: 
Năng lực tự chủ, tự học: Chủ động học tập, tìm hiểu nội dung bài học, biết lắng nghe và trả lời nội dung trong bài học.
Năng lực giải quyết vấn đề và sáng tạo: Tham gia tích cực vào hoạt động luyện tập, làm bài tập củng cố. 
Năng lực giao tiếp và hợp tác: Thực hiện tốt nhiệm vụ trong hoạt động nhóm.
Năng lực riêng:
Năng lực tin học giải quyết vấn đề: Hình thành, phát triển với sự hỗ trợ của công nghệ thông tin và truyền thông. 
Khả năng tư duy logic và tư duy khái quát hóa. 
Khả năng tự học. 
Năng lực số:
1.1.NC1a: Đáp ứng được nhu cầu thông tin.
1.2.NC1b: Tiến hành đánh giá được các dữ liệu, thông tin và nội dung số khác nhau.
1.3.NC1b: Triển khai được việc tổ chức và sắp xếp dữ liệu, thông tin và nội dung trong môi trường có cấu trúc.
2.1.NC1a: Sử dụng được nhiều công nghệ số để tương tác.
3.4.NC1a: Lập trình.
6.2.NC1a: Lựa chọn và sử dụng được các công cụ AI phù hợp để giải quyết vấn đề.
3. Phẩm chất
Ý thức trách nhiệm: Có trách nhiệm hoàn thành các nhiệm vụ được giao; các công việc được phân công khi làm việc nhóm. 
Tính cẩn thận, chăm chỉ trong học tập và công việc.
II. THIẾT BỊ DẠY HỌC VÀ HỌC LIỆU 
1. Đối với GV
KHBD, SGV, SGK, SBT, giáo án PPT.
Phòng thực hành máy tính kết nối Internet, máy chiếu.
Video AI tạo bằng công cụ AI được dùng để khởi động bài học.
Bộ câu hỏi trắc nghiệm trên phần mềm Quizizz.
2. Đối với HS
- SGK, SBT, vở ghi.
III. TIẾN TRÌNH DẠY HỌC
1. HOẠT ĐỘNG KHỞI ĐỘNG 
a) Mục tiêu: Hướng HS tập trung vào nội dung kiến thức về SQL – Ngôn ngữ truy vấn có cấu trúc. 
b) Nội dung: GV đưa ra câu hỏi cho HS trao đổi, thảo luận để chỉ ra sự khác biệt giữa việc sử dụng SQL và việc truy xuất dữ liệu bằng ngôn ngữ lập trình. 
c) Sản phẩm: Dựa vào kiến thức của bản thân, HS thực hiện yêu cầu GV đưa ra. 
d) Tổ chức thực hiện: 
Bước 1: GV chuyển giao nhiệm vụ:
- GV yêu cầu xem video AI được thiết kế để phục vụ bài dạy và trả lời câu hỏi xuất hiện trong video đó.
- GV dẫn dắt: Ở bài trước các em đã biết hệ QTCSDL với vai trò là một bộ phần mềm hỗ trợ khởi tạo, cập nhật, truy xuất CSDL để người dùng có thể cập nhật, truy xuất CSDL. Ngày nay người ta thực hiện công việc đó chủ yếu thông qua ngôn ngữ truy vấn có cấu trúc SQL. 
- GV đặt câu hỏi: Sự khác biệt của việc sử dụng SQL so với việc truy xuất dữ liệu bằng ngôn ngữ lập trình là gì? 
Bước 2: HS thực hiện nhiệm vụ học tập: 
- HS xem video và suy nghĩ câu trả lời.
- HS thảo luận, suy nghĩ câu trả lời.
Bước 3: Báo cáo kết quả hoạt động, thảo luận: 
- GV mời một số HS trả lời, các HS khác nhận xét, bổ sung:
Sự khác biệt chính giữa SQL và ngôn ngữ lập trình là SQL được thiết kế để làm việc với CSDL, truy xuất và cập nhật dữ liệu trong CSDL; trong khi ngôn ngữ lập trình được thiết kế để thực hiện các tác vụ phức tạp khác như xử lý dữ liệu, tính toán và hiển thị kết quả cho người dùng. 
Bước 4: Đánh giá kết quả thực hiện: 
- GV nhận xét, đánh giá và kết luận.
[6.2.NC1a: HS sử dụng công cụ AI hoặc sản phẩm số do GV cung cấp để tiếp nhận thông tin, trả lời câu hỏi đơn giản.
2.1.NC1a: HS thực hiện các tương tác cơ bản với học liệu số (xem video, trả lời câu hỏi trên môi trường số).
1.1.NC1a: HS tiếp cận, khai thác được thông tin từ nguồn học liệu số dưới sự hướng dẫn của GV.]
- GV dẫn dắt HS vào bài học mới – Bài 14: SQL – Ngôn ngữ truy vấn có cấu trúc
2. HOẠT ĐỘNG HÌNH THÀNH KIẾN THỨC
Hoạt động: Thảo luận về hai cách truy xuất dữ liệu
a) Mục tiêu: HS hiểu được sự khác nhau giữa việc lập trình truy xuất trực tiếp các tệp dữ liệu với việc sử dụng ngôn ngữ truy vấn và có khái niệm ban đầu về SQL.
b) Nội dung: HS đọc SGK và trả lời Hoạt động, thảo luận nhóm xây dựng kiến thức bài, hoàn thành nhiệm vụ được giao. 
c) Sản phẩm: HS nêu được sự khác biệt cơ bản trong cách truy vấn nhờ ngôn ngữ truy vấn và lập trình trực tiếp; khái niệm SQL; các thành phần của SQL. 
d) Tổ chức thực hiện:
[BẢNG] HOẠT ĐỘNG CỦA GV VÀ HS | SẢN PHẨM DỰ KIẾN
[BẢNG] Bước 1: GV chuyển giao nhiệm vụ:- GV cho HS đọc Hoạt động 1 – Thảo luận về hai cách truy xuất dữ liệu SGK trang 69 và trả lời câu hỏi:Sự khác biệt cơ bản trong cách truy vấn nhờ ngôn ngữ truy vấn so với lập trình trực tiếp theo em là gì? - GV yêu cầu HS đọc mục 1 SGK trang 69, hoạt động nhóm bàn, thực hiện nhiệm vụ:+ Nêu khái niệm SQL. - GV giới thiệu thêm: Ngoài việc hỗ trợ SQL, hệ QTCSDL còn cung cấp giao diện lập trình ứng dụng (API – Application Programming Interface) dưới dạng các phương thức mà những người lập trình có thể sử dụng để gửi các câu truy vấn đến hệ QTCSDL và nhận về kết quả. Bước 2: HS thực hiện nhiệm vụ học tập:- HS đọc SGK, suy nghĩ trả lời câu hỏi, hoàn thành nhiệm vụ.- HS lắng nghe GV giới thiệu kiến thức. - GV quan sát, giải đáp thắc mắc cho HS. Bước 3: Báo cáo kết quả hoạt động, thảo luận:- HS xung phong phát biểu trả lời câu hỏi.- Các HS khác nhận xét, đánh giá, bổ sung ý kiến cho bạn. Bước 4: Đánh giá kết quả thực hiện:- GV đánh giá, tổng kết lại kiến thức.  | 1. Lợi ích của ngôn ngữ truy vấn- Khác biệt cơ bản trong cách truy vấn nhờ ngôn ngữ truy vấn so với lập trình trực tiếp là:+ Lập trình truy xuất dữ liệu trực tiếp bằng một ngôn ngữ lập trình là lập trình theo thủ tục. + Ngôn ngữ truy vấn có cấu trúc cung cấp những câu truy vấn khái quát, dễ hiểu và dễ sử dụng để người lập trình chỉ cần viết ra yêu cầu “muốn làm gì/ lấy ra cái gì” rồi gửi cho hệ QTCSDL thực hiện. - SQL (Structured Query Language) là ngôn ngữ truy vấn định chuẩn cho việc định nghĩa, cập nhật, truy xuất và điều khiển dữ liệu từ các CSDL quan hệ.
 Hoạt động 2: Khởi tạo CSDL
a) Mục tiêu: Giới thiệu cấu trúc các câu truy vấn định nghĩa dữ liệu. 
b) Nội dung: HS đọc SGK, trả lời câu hỏi xây dựng bài, làm Câu hỏi củng cố kiến thức SGK trang 71. 
c) Sản phẩm: HS nhận biết cách viết các câu truy vấn định nghĩa CSDL và kiểu dữ liệu của thành phần DDL. 
d) Tổ chức thực hiện:
[BẢNG] HOẠT ĐỘNG CỦA GV VÀ HS | SẢN PHẨM DỰ KIẾN | NLS
[BẢNG] Bước 1: GV chuyển giao nhiệm vụ:- GV cho HS đọc mục 2 SGK trang 70, chiếu bảng 14.1 và 14.2 SGK trang 70.GV cùng HS phân tích các câu truy vấn và kiểu dữ liệu trong hai bảng:- GV cho HS đọc ví dụ khởi tạo CSDL âm nhạc và khởi tạo các bảng Nhạc sĩ, Bản nhạc SGK trang 70; hoạt động nhóm 4-5 người, phân tích, khái quát cách viết các câu truy vấn.  - GV đặt thêm câu hỏi: Có nhận xét gì về quy tắc đặt tên CSDL, tên bảng và tên trường?- GV cho HS đọc và trả lời Câu hỏi SGK trang 71:+ Câu 1: Hãy viết câu truy vấn tạo bảng Ca sĩ như đã mô tả trong Bài 11 với tên bảng là casi.+ Câu 2: Hãy viết câu truy vấn thêm khóa chính Sid cho bảng casi. Bước 2: HS thực hiện nhiệm vụ học tập:- HS đọc SGK, phân tích bảng và ví dụ để ghi nhớ kiến thức.- HS suy nghĩ, trả lời câu hỏi của GV và Câu hỏi củng cố kiến thức. Bước 3: Báo cáo kết quả hoạt động, thảo luận:- HS xung phong trình bày kết quả.- Các HS khác nhận xét, bổ sung ý kiến. Bước 4: Đánh giá kết quả thực hiện:- GV nêu nhận xét, tổng quát lại kiến thức. | 2. Khởi tạo CSDL- Tên CSDL, tên bảng và tên trường chỉ gồm các kí tự La-tinh và chữ số, không chứa kí tự trống và các kí tự đặc biệt. - Câu hỏi:Câu 1:         CREATE TABLE casi (                   Sid INT,                   TenCS VARCHAR (128)        ); | - 1.3.NC1b: Triển khai được việc tổ chức và sắp xếp dữ liệu, thông tin và nội dung trong môi trường có cấu trúc (bảng).- 3.4.NC1a: HS viết được các câu truy vấn định nghĩa CSDL.
Hoạt động 3: Cập nhật và truy xuất dữ liệu
a) Mục tiêu: Giới thiệu cấu trúc các câu truy vấn truy xuất và cập nhật dữ liệu. 
b) Nội dung: HS đọc SGK, thảo luận nhóm xây dựng kiến thức bài, củng cố bằng cách trả lời Câu hỏi SGK trang 72. 
c) Sản phẩm: HS nắm được cách viết các câu truy vấn truy xuất và cập nhật dữ liệu. 
d) Tổ chức thực hiện:
[BẢNG] HOẠT ĐỘNG CỦA GV VÀ HS | SẢN PHẨM DỰ KIẾN | NLS
[BẢNG] Bước 1: GV chuyển giao nhiệm vụ:- GV cho HS đọc bảng 14.3 và 14.4 SGK trang 71, yêu cầu HS hoạt động nhóm bàn, phân tích và ghi nhớ các câu truy xuất dữ liệu và các câu truy vấn cập nhật dữ liệu.GV chiếu hình 2 bảng:- GV giới thiệu: Toàn bộ việc truy xuất dữ liệu theo mọi yêu cầu, hoàn cảnh sẽ được thực hiện bởi câu truy vấn SELECT. Do đó, đây là câu truy vấn được xây dựng với độ khái quát cao, nhiều thành phần, mệnh đề và rất phức tạp để hiểu toàn bộ. - GV cho HS đọc ví dụ SGK trang 71, hoạt động nhóm bàn, thảo luận về mệnh đề JOIN và điều kiện sau ON.→ GV chốt lại: + Mệnh đề JOIN là mệnh đề sử dụng khi muốn thực hiện liên kết các bảng theo khóa ngoài của một bảng với khóa chính của bảng khác.+ Điều kiện sau ON là điều kiện so sánh bằng giữa khóa ngoài và khóa chính.- GV đặt câu hỏi: Em hãy viết khái quát câu truy vấn có chứa mệnh đề JOIN.- GV cho HS đọc và trả lời Câu hỏi SGK trang 72:+ Câu 1: Hãy viết câu truy vấn lấy tất cả các dòng của bảng nhacsi.+ Câu 2: Hãy viết câu truy vấn thêm các dòng cho bảng casi với các giá trị là (‘TK’, ‘Nguyễn Trung Kiên’), (‘QD’, ‘Quý Dương’), (‘YM’, ‘Y Moan’).Bước 2: HS thực hiện nhiệm vụ học tập:- HS đọc SGK, hoạt động nhóm theo yêu cầu của GV. - HS lắng nghe GV giới thiệu kiến thức mới.- HS trả lời Câu hỏi củng cố kiến thức.- GV quan sát, hỗ trợ HS.Bước 3: Báo cáo kết quả hoạt động, thảo luận:- HS xung phong trình bày kết quả.- Các HS khác nhận xét, bổ sung cho bạn. Bước 4: Đánh giá kết quả thực hiện:- GV nêu nhận xét, tổng quát lại kiến thức. | 3. Cập nhật và truy xuất dữ liệuKhái quát câu truy vấn chứa mệnh đề JOIN:SELECT danh sách các trường      FROM tên_bảng_1 INNER JOIN ten_bang_2 ON điều kiện- Câu hỏi:Câu 1:SELECT Aid, tenNS FROM nhacsi ;Hay SELECT * FROM nhacsi ; Câu 2: INSERT INTO casi VALUES ( ‘TK’ , ‘Nguyễn Trung Kiên ‘ ) ; INSERT INTO casi VALUES ( ‘QD’ , ‘Quý Dương’) ; INSERT INTO casi VALUES ( ‘YM’ , ‘Y Moan’ ) ;  | 3.4.NC1a: HS viết được các câu truy vấn cập nhật và truy xuất dữ liệu.
3. HOẠT ĐỘNG LUYỆN TẬP
a) Mục tiêu: HS củng cố kiến thức về SQL – Ngôn ngữ truy vấn có cấu trúc thông qua làm bài tập.
b) Nội dung: HS vận dụng kiến thức đã học để trả lời câu hỏi trắc nghiệm và hoàn thành bài tập phần Luyện tập SGK trang 72.
c) Sản phẩm học tập: 
- HS tham gia trò chơi, trả lời câu hỏi trắc nghiệm.
- HS viết được câu truy vấn tạo bảng Bản thu âm (banthuam).
- HS viết được câu truy vấn tạo khóa ngoài Mid và Sid cho bảng banthuam.
- HS viết được câu truy vấn lấy ra tất cả các dòng trong liên kết bảng banthuam với bảng bannhac theo yêu cầu đề bài. 
d) Tổ chức thực hiện:
Bước 1: GV chuyển giao nhiệm vụ:
- GV tổng hợp các kiến thức cần ghi nhớ cho HS.
- GV tổ chức trò chơi trắc nghiệm nhanh trên Quizizz để củng cố toàn bài.
- GV cung cấp mã QR hoặc đường Links cho HS trả lời nhanh một số câu hỏi trắc nghiệm tổng kết bài học.
Câu 1: SQL gồm mấy thành phần?
A. 1
B. 2
C. 3
D. 4
Câu 2: SQL được xây dựng từ những năm:
A. 1960
B. 1970
C. 1980
D. 1990
Câu 3: Câu truy vấn DDL “FOREIGN KEY … REFERENCES …” có ý nghĩa:
A. Khai báo khóa ngoài
B. Khởi tạo bảng
C. Thay đổi định nghĩa bảng
D. Khai báo khóa chính
Câu 4: Trong câu truy vấn yêu cầu tạo lập CSDL, tên CSDL phải tuân thủ quy tắc đặt tên như thế nào?
A. Chỉ gồm các kí tự La-tinh và chữ số
B. Không chứa kí tự trống và các kí tự đặc biệt
C. Cả A, B đều đúng
D. Cả A, B đều sai
Câu 5: Hàm AVG là:
A. Giá trị trung bình
B. Giá trị nhỏ nhất
C. Giá trị lớn nhất
D. Tổng các phần tử
- GV tổ chức cho HS làm Bài 1, 2, 3 phần Luyện tập SGK trang 72
Bài 1: Hãy viết câu truy vấn tạo bảng Bản thu âm (banthuam) như đã mô tả trong Bài 13.
Bài 2: Viết câu truy vấn tạo khóa ngoài Mid và Sid cho bảng banthuam.
Bài 3: Viết câu truy vấn lấy ra tất cả các dòng trong liên kết bảng banthuam với bảng bannhac, mỗi dòng lấy các cột: Mid, Sid của bảng banthuam và cột TenBN của bảng bannhac.  
Bước 2: HS thực hiện nhiệm vụ học tập:
- HS suy nghĩ, hoàn thành các bài tập GV yêu cầu.
- GV quan sát và hỗ trợ, hướng dẫn.
Bước 3: Báo cáo kết quả hoạt động, thảo luận:
- HS suy nghĩ, trả lời câu hỏi trắc nghiệm.
- Mỗi bài tập GV mời 1-2 HS trình bày. Các HS khác chú ý chữa bài, theo dõi nhận xét bài làm của các bạn.
Kết quả:
Đáp án trắc nghiệm: 
[BẢNG] Câu 1 | Câu 2 | Câu 3 | Câu 4 | Câu 5
[BẢNG] C | B | A | C | A
[2.1.NC1a: HS thực hiện các tương tác được xác định rõ ràng với công nghệ số (làm bài tập online) trong lớp học.]
Bài 1: 
CREATE TABLE banthuam (Mid CHAR (4), Sid INT) ;
Bài 2: 
ALTER TABLE banthuam ADD FOREIGN KEY (Mid) REFERENCES bannhac (Mid) ;
ALTER TABLE banthuam ADD FOREIGN KEY (Sid) REFERENCES casi (Sid) ;
Bài 3: 
SELECT banthuam.Mid, banthuam.Sid, bannhac.TenBN
FROM banthuam INNER JOIN bannhac ON banthuam.Mid=bannhac.Mid;
hay 
SELECT a.Mid, a.Sid, b.TenBN
FROM banthuam as a INNER JOIN bannhac as b ON a.Mid=b.Mid;
hay
SELECT a.Mid, a.Sid, b.TenBN
FROM banthuam a INNER JOIN bannhac b ON a.Mid=b.Mid;
Dễ hiểu hơn nếu thay INNER bởi LEFT
SELECT a.Mid, a.Sid, b.TenBN
FROM banthuam a LEFT JOIN bannhac b ON a.Mid=b.Mid;
[3.4.NC1a: HS viết được các câu truy vấn SQL.]
Bước 4: Đánh giá kết quả thực hiện:
- GV chữa bài, chốt đáp án, tuyên dương các hoạt động tốt, nhanh và chính xác.
4. HOẠT ĐỘNG VẬN DỤNG 
a) Mục tiêu: HS làm bài tập vận dụng để ghi nhớ kiến thức.
b) Nội dung: HS sử dụng SGK và vận dụng kiến thức đã học để làm bài tập Vận dụng (SGK – tr72)
c) Sản phẩm: 
- HS viết câu truy vấn lấy ra tất cả các dòng trong liên kết bảng banthuam với bảng bannhac và bảng casi theo yêu cầu đề bài. 
d) Tổ chức thực hiện: 
Bước 1: GV chuyển giao nhiệm vụ
- GV yêu cầu HS hoạt động nhóm bàn hoàn thành bài tập phần Vận dụng SGK trang 72. 
Viết câu truy vấn lấy ra tất cả các dòng trong liên kết bảng banthuam với bảng bannhac và bảng casi, mỗi dòng lấy các cột: Mid, Sid của bảng banthuam, cột TenBN của bảng bannhac và TenCS của bảng casi. 
Bước 2: HS thực hiện nhiệm vụ học tập
- HS phân công thành viên trong nhóm, hợp tác thảo luận, đưa ra ý kiến, tra cứu để có phương hướng giải quyết bài tập.
- GV quan sát, hỗ trợ, giải đáp thắc mắc cho HS.
Bước 3: Báo cáo kết quả hoạt động, thảo luận 
- Đại diện nhóm trình bày kết quả thảo luận. Các nhóm khác lắng nghe, bổ sung ý kiến.
Kết quả:
SELECT a.Mid, a.Sid, b.TenBN, c.TenCS
FROM banthuam a
LEFT JOIN bannhac b ON a.Mid = b.Mid
LEFT JOIN casi c ON a.Sid = c.Sid ; 
[3.4.NC1a: HS viết được các câu truy vấn SQL.]
Bước 4: Đánh giá kết quả thực hiện 
- GV nhận xét, đánh giá, bổ sung ý kiến còn thiếu, chốt đáp án. 
* HƯỚNG DẪN VỀ NHÀ
Ghi nhớ kiến thức trong bài.
Hoàn thành các bài tập trong SBT.
Chuẩn bị bài mới Bài 15 – Bảo mật và an toàn hệ cơ sở dữ liệu. ```  </details> 
