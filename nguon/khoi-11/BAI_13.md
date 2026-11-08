# Bài 13. CƠ SỞ DỮ LIỆU QUAN HỆ

> Học liệu được chuyển định dạng từ KHBD khối 11; nội dung gốc được giữ đầy đủ ở phần cuối để đối chiếu.

## Chủ đề
GIỚI THIỆU CÁC HỆ CƠ SỞ DỮ LIỆU

## Mục tiêu kiến thức từ KHBD

Học xong bài này, HS đạt các yêu cầu sau:
Hiểu được mô hình CSDL quan hệ.
Hiểu được các thuật ngữ và khái niệm liên quan: bản ghi, trường (thuộc tính), khóa, khóa chính, khóa ngoài, liên kết dữ liệu, các kiểu dữ liệu,…

## Trọng tâm hoạt động

Hoạt động 1: Tìm hiểu về một CSDL thông tin âm nhạc

## Nội dung KHBD đầy đủ đã trích xuất

<details>
<summary>Mở nội dung KHBD</summary>

```text
Ngày soạn: …/…/…
Ngày dạy: …/…/…
BÀI 13: CƠ SỞ DỮ LIỆU QUAN HỆ
I. MỤC TIÊU
1. Kiến thức
Học xong bài này, HS đạt các yêu cầu sau:
Hiểu được mô hình CSDL quan hệ.
Hiểu được các thuật ngữ và khái niệm liên quan: bản ghi, trường (thuộc tính), khóa, khóa chính, khóa ngoài, liên kết dữ liệu, các kiểu dữ liệu,…
2. Năng lực 
Năng lực chung: 
Năng lực tự chủ, tự học: Chủ động học tập, tìm hiểu nội dung bài học, biết lắng nghe và trả lời nội dung trong bài học.
Năng lực giải quyết vấn đề và sáng tạo: Tham gia tích cực vào hoạt động luyện tập, làm bài tập củng cố. 
Năng lực giao tiếp và hợp tác: Thực hiện tốt nhiệm vụ trong hoạt động nhóm.
Năng lực riêng:
Năng lực tin học giải quyết vấn đề: Hình thành, phát triển với sự hỗ trợ của công nghệ thông tin và truyền thông.
Khả năng tư duy logic và mô hình hóa. 
Khả năng tự học. 
Năng lực số:
1.1.NC1a: Đáp ứng được nhu cầu thông tin.
1.2.NC1b: Tiến hành đánh giá được các dữ liệu, thông tin và nội dung số khác nhau.
2.1.NC1a: Sử dụng được nhiều công nghệ số để tương tác.
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
a) Mục tiêu: Hướng HS tập trung vào nội dung kiến thức về mô hình CSDL quan hệ.
b) Nội dung: GV đưa ra câu hỏi cho HS trao đổi, thảo luận để nêu được khái niệm mô hình CSDL quan hệ.
c) Sản phẩm: Dựa vào kiến thức của bản thân, HS thực hiện yêu cầu GV đưa ra. 
d) Tổ chức thực hiện: 
Bước 1: GV chuyển giao nhiệm vụ:
- GV yêu cầu xem video AI được thiết kế để phục vụ bài dạy và trả lời câu hỏi xuất hiện trong video đó.
- GV dẫn dắt: Trong bài trước các em đã biết khái niệm CSDL. Đã có khá nhiều mô hình CSDL khác nhau. Từ những năm 1970, Edgar Frank Codd (1923 – 2003) đã đề xuất mô hình CSDL quan hệ. Mô hình này nhanh chóng trở thành mô hình được dùng phổ biến nhất, nó xuất hiện trong hầu khắp các ứng dụng quản lí, kể cả trong các ứng dụng thư tín điện tử, mạng xã hội…
Trong phần Vận dụng của Bài 12, khi tìm kiếm trên Internet, các em có thể để ý thấy những hệ QTCSDL thông dụng.
Nếu để ý ở cột Database Model (mô hình CSDL), ta có thể thấy đa số là mô hình Relational (mô hình quan hệ). 
- GV đặt câu hỏi: Vậy mô hình CSDL quan hệ là gì? 
Bước 2: HS thực hiện nhiệm vụ học tập: 
- HS xem video và suy nghĩ câu trả lời.
- HS thảo luận, suy nghĩ câu trả lời.
Bước 3: Báo cáo kết quả hoạt động, thảo luận: 
- GV mời đại diện một số HS trả lời, HS khác nhận xét, bổ sung:
Mô hình CSDL quan hệ là mô hình tổ chức dữ liệu thành các bảng dữ liệu của các đối tượng có các thuộc tính giống nhau, có thể có quan hệ với nhau.
Bước 4: Đánh giá kết quả thực hiện: 
- GV nhận xét, đánh giá và kết luận.
[6.2.NC1a: HS sử dụng công cụ AI hoặc sản phẩm số do GV cung cấp để tiếp nhận thông tin, trả lời câu hỏi đơn giản.
2.1.NC1a: HS thực hiện các tương tác cơ bản với học liệu số (xem video, trả lời câu hỏi trên môi trường số).
1.1.NC1a: HS tiếp cận, khai thác được thông tin từ nguồn học liệu số dưới sự hướng dẫn của GV.]
- GV dẫn dắt HS vào bài học mới – Bài 13: Cơ sở dữ liệu quan hệ
2. HOẠT ĐỘNG HÌNH THÀNH KIẾN THỨC
Hoạt động 1: Tìm hiểu về một CSDL thông tin âm nhạc
a) Mục tiêu: Giới thiệu mô hình CSDL quan hệ. 
b) Nội dung: HS đọc SGK và trả lời Hoạt động 1, thảo luận nhóm xây dựng kiến thức bài, củng cố bằng cách trả lời Câu hỏi SGK trang 65. 
c) Sản phẩm: HS dựa vào các bảng, mã định danh trong CSDL âm nhạc để trả lời câu hỏi; nắm được khái niệm CSDL quan hệ. 
d) Tổ chức thực hiện:
[BẢNG] HOẠT ĐỘNG CỦA GV VÀ HS | SẢN PHẨM DỰ KIẾN
[BẢNG] Bước 1: GV chuyển giao nhiệm vụ:- GV chiếu Hình 13.1. CSDL âm nhạc (SGK – tr64), yêu cầu HS đọc Hoạt động 1 – Tìm hiểu về một CSDL thông tin âm nhạc:- GV đặt câu hỏi:+ Nhạc sĩ sáng tác bản nhạc “Trường ca sông Lô” là ai? Nhạc sĩ sáng tác bản nhạc “Xa khơi” là ai?+ Bản thu âm (Hình 13.1d) tương ứng với dòng 0005 TN là bản nhạc nào, do ca sĩ nào thể hiện?- GV gợi ý qua các câu hỏi để HS trả lời.Ví dụ:+ Hỏi: Tên bản nhạc “Trường ca sông Lô” có hình nào?+ Trả lời: Có trong hình 13.1c. (Bản nhạc), Cột TenBN.+ Hỏi: Ở hình 13.1c còn có những thông tin nào khác liên quan đến “Trường ca Sông Lô”?+ Trả lời: Aid = 2, Mid = 0002…- GV yêu cầu HS quan sát hình 13.2 và thảo luận nhóm đôi, nêu nhận xét về mối quan hệ giữa bảng Bản nhạc và bảng Nhạc sĩ; bảng Bản thu âm và bảng Bản nhạc. - GV đặt câu hỏi gợi ý: + Bảng Bản nhạc và bảng Nhạc sĩ có cùng cột nào? Suy ra, chúng có quan hệ với nhau qua thuộc tính nào?+ Bảng Bản thu âm và bảng Bản nhạc có cùng cột nào? Suy ra, chúng có quan hệ với nhau qua thuộc tính nào?→ GV chốt lại: CSDL quan hệ là CSDL lưu trữ dữ liệu dưới dạng các bảng có quan hệ với nhau. Bước 2: HS thực hiện nhiệm vụ học tập:- HS lắng nghe GV hướng dẫn kiến thức mới.- HS quan sát các bảng và hoàn thành nhiệm vụ theo yêu cầu. - HS làm cá nhân, trả lời Câu hỏi củng cố kiến thức.- GV hỗ trợ, quan sát. Bước 3: Báo cáo kết quả hoạt động, thảo luận:- HS xung phong phát biểu, trả lời câu hỏi.- Các HS khác nhận xét, bổ sung cho bạn. Bước 4: Đánh giá kết quả thực hiện:- GV đánh giá, tổng quát lại kiến thức.  | 1. Khái niệm cơ sở dữ liệu quan hệ- Nhạc sĩ sáng tác bản nhạc “Trường ca sông Lô” là nhạc sĩ Văn Cao.Nhạc sĩ sáng tác bản nhạc “Xa khơi” là nhạc sĩ Nguyễn Tài Tuệ. - Bản thu âm (Hình 13.1d) tương ứng với dòng 0005 TN là bản thu âm của bản nhạc Việt Nam quê hương tôi, do ca sĩ Quốc Hương thể hiện. - Bảng Bản nhạc và bảng Nhạc sĩ có chung thuộc tính Aid.- Bảng Bản thu âm và bảng Bản nhạc có chung thuộc tính Mid.  
 Hoạt động 2: Một số thuật ngữ, khái niệm liên quan
a) Mục tiêu: Giới thiệu các khái niệm liên quan: bản ghi, trường; khóa chính; khóa ngoài và liên kết dữ liệu; các kiểu dữ liệu của trường. 
b) Nội dung: HS đọc SGK, thảo luận nhóm xây dựng kiến thức bài, củng cố bằng cách trả lời Câu hỏi SGK trang 68. 
c) Sản phẩm: HS nêu được các khái niệm bản ghi, trường; khóa chính; khóa ngoài và liên kết dữ liệu; các kiểu dữ liệu của trường. 
d) Tổ chức thực hiện:
[BẢNG] HOẠT ĐỘNG CỦA GV VÀ HS | SẢN PHẨM DỰ KIẾN | NLS
[BẢNG] Bước 1: GV chuyển giao nhiệm vụ:- GV yêu cầu HS đọc mục 2 SGK trang 65, 66, 67, 68, hoạt động theo nhóm bàn, thực hiện nhiệm vụ:+ Mục a: Nêu khái niệm bản ghi và trường. Xác định bản ghi và trường của bảng Ca sĩ. GV giới thiệu: Mỗi hàng là một bản ghi chép dữ liệu cho một đối tượng, gồm một bộ giá trị ghi trong các trường tương ứng với các thuộc tính của đối tượng. Hiện nay, nhiều tài liệu dùng thuật ngữ dòng (row) và cột (column).+ Mục b: Nêu khái niệm khóa và khóa chính.+ Mục c: Nêu khái niệm khóa ngoài. + Mục d: Nêu khái niêm liên kết dữ liệu.Nêu lí do vì sao người ta không thiết lập CSDL gồm chỉ một bảng như bảng NBC mà dùng 4 bảng như mô tả ở Hình 13.1 SGK trang 64. - GV cho HS đọc và trả lời Câu hỏi SGK trang 68:+ Câu 1: Hãy chỉ ra khóa chính của bảng Ca sĩ và bảng Bản nhạc.+ Câu 2: Hãy chỉ ra các khóa ngoài của bảng Bản nhạc và bảng Bản thu âm. Bước 2: HS thực hiện nhiệm vụ học tập:- HS đọc SGK, lắng nghe GV hướng dẫn, hoàn thành nhiệm vụ theo yêu cầu.- HS làm Câu hỏi củng cố kiến thức SGK trang 68. - GV quan sát, hỗ trợ. Bước 3: Báo cáo kết quả hoạt động, thảo luận:- HS xung phong trả lời câu hỏi nhiệm vụ.- HS hoàn thành Câu hỏi củng cố. - Các HS khác nhận xét, bổ sung ý kiến.Bước 4: Đánh giá kết quả thực hiện:- GV nêu nhận xét, tổng quát lại kiến thức. | 2. Một số thuật ngữ, khái niệm liên quana) Bản ghi, trường - Bản ghi (record) tương ứng với mỗi hàng của bảng, là tập hợp các thông tin về một đối tượng cụ thể được quản lí trong bảng.- Trường (field) tương ứng với mỗi cột trong bảng, thể hiện thuộc tính của đối tượng được quản lí trong bảng. - Bảng Ca sĩ có 4 bản ghi là (TK, Trần Khánh), (LD, Lê Dung), (TN, Tân Nhân), (QH, Quốc Hương); 2 trường là Sid và TenCS.b) Khoá chính- Khóa là một hay một nhóm trường mà giá trị của chúng tại các bản ghi không trùng nhau, xác định duy nhất một bản ghi (nói cách khác, bộ giá trị của chúng cho phép xác định phân biệt các bản ghi của bảng).Một bảng có thể có nhiều khóa.- Khóa chính thường là khóa có số trường ít nhất. c) Khóa ngoàiKhóa ngoài của một bảng là trường hay nhóm trường làm khóa chính ở một bảng khác. d) Liên kết dữ liệu- Liên kết dữ liệu theo khóa là dùng khóa ngoài để liên kết hai bảng, tạo ra bảng mới. - Lí do: hạn chế dư thừa dữ liệu, thuận lợi trong việc đảm bảo tính nhất quán, tính toàn vẹn của dữ liệu khi cập nhật dữ liệu.- Câu hỏi:Câu 1:+ Khóa chính của bảng Ca sĩ là: Sid.+ Khóa chính của bảng Bản nhạc là: Mid. Câu 2:+ Khóa ngoài của bảng Bản nhạc là: Aid.+ Khóa ngoài của bảng Bản thu âm là: Mid và Sid.  | 1.2.NC1b: Xác định được khoá chính, khoá ngoài của bảng dữ liệu.
3. HOẠT ĐỘNG LUYỆN TẬP
a) Mục tiêu: HS củng cố kiến thức về cơ sở dữ liệu quan hệ thông qua làm bài tập.
b) Nội dung: HS vận dụng kiến thức đã học để trả lời câu hỏi trắc nghiệm và hoàn thành bài tập phần Luyện tập SGK trang 68.
c) Sản phẩm học tập:
- HS tham gia trò chơi, trả lời câu hỏi trắc nghiệm.
- HS xác định các khóa chính, khóa ngoài của các bảng: Hocsinh, monhoc, Diem; trả lời được có thể lấy số CCCD làm khóa chính được không. 
d) Tổ chức thực hiện:
Bước 1: GV chuyển giao nhiệm vụ:
- GV tổng hợp các kiến thức cần ghi nhớ cho HS.
- GV tổ chức trò chơi trắc nghiệm nhanh trên Quizizz để củng cố toàn bài.
- GV cung cấp mã QR hoặc đường Links cho HS trả lời nhanh một số câu hỏi trắc nghiệm tổng kết bài học.
Câu 1: Phát biểu nào SAI trong các phát biểu sau?
A. Một bảng có thể có nhiều khóa chính
B. Mỗi bảng có ít nhất một khóa
C. Xác định khóa phụ thuộc vào quan hệ logic của các dữ liệu chứ không phụ thuộc vào giá trị các dữ liệu
D. Nên chọn khóa chính là khóa có ít thuộc tính nhất
Câu 2: Mô hình phổ biến để xây dựng CSDL quan hệ là:
A. Mô hình phân cấp
B. Mô hình dữ liệu quan hệ
C. Mô hình hướng đối tượng
D. Mô hình cơ sở quan hệ
Câu 3: Lí do người ta thường chọn khóa bao gồm ít trường nhất làm khóa chính:
A. Khóa ít trường nhất thường đứng ở đầu
B. Việc lựa chọn trở nên đơn giản, ít phức tạp
C. Việc tìm kiếm trở nên dễ dàng hơn
D. Thường phải tìm kiếm dữ liệu theo khóa chính
Câu 4: Trường ngaysinh có kiểu dữ liệu là:
A. Ngày/tháng/năm
B. Các số nguyên
C. Xâu kí tư, độ dài giới hạn
D. Số thập phân
Câu 5: Trường gt (giới tính) có kiểu dữ liệu là:
A. Nữ 
B. Nam
C. Nữ hoặc Nam
D. Nữ và Nam
- GV tổ chức cho HS làm phần Luyện tập SGK trang 68:
Cho CSDL học tập có các bảng sau: Hocsinh (họ tên, số CCCD, số thẻ học sinh, ngày sinh, địa chỉ), monhoc (ten, mã môn). Diem (số thẻ học sinh, mã môn, năm, học kì, loại điểm, điểm), trong đó loại điểm chỉ các loại ĐĐG thường xuyên, ĐĐG giữa kì, ĐĐG cuối kì.
Hãy xác định các khóa chính và các khóa ngoài của từng bảng, có thể lấy số CCCD làm khóa chính được không. 
Bước 2: HS thực hiện nhiệm vụ học tập:
- HS suy nghĩ, hoàn thành các bài tập GV yêu cầu.
- GV quan sát và hỗ trợ, hướng dẫn.
Bước 3: Báo cáo kết quả hoạt động, thảo luận:
- HS suy nghĩ, trả lời câu hỏi trắc nghiệm.
- Mỗi bài tập GV mời 1-2 HS trình bày. Các HS khác chú ý chữa bài, theo dõi nhận xét bài làm của các bạn.
Bước 4: Đánh giá kết quả thực hiện:
- GV chữa bài, chốt đáp án, tuyên dương các hoạt động tốt, nhanh và chính xác.
Kết quả:
Đáp án trắc nghiệm: 
[BẢNG] Câu 1 | Câu 2 | Câu 3 | Câu 4 | Câu 5
[BẢNG] A | B | D | A | C
[2.1.NC1a: HS thực hiện các tương tác được xác định rõ ràng với công nghệ số (làm bài tập online) trong lớp học.]
Luyện tập (SGK – tr68)
- Số thẻ HS là khóa chính của bảng Hocsinh.
- Nhóm các trường (số thẻ HS, mã môn, năm, học kì, loại điểm) là khóa chính của bảng Diem.
- Trường Số thẻ HS trong bảng Diem là khóa ngoài của bảng này.
[1.2.NC1b: Xác định được khoá chính, khoá ngoài của bảng dữ liệu.]
4. HOẠT ĐỘNG VẬN DỤNG 
a) Mục tiêu: HS làm bài tập vận dụng để ghi nhớ kiến thức.
b) Nội dung: HS sử dụng SGK và vận dụng kiến thức đã học để làm bài tập Vận dụng (SGK – tr68)
c) Sản phẩm: 
- HS đề xuất một số bảng dữ liệu dựa vào thông tin đề bài (SBD, họ tên, phòng thi, môn thi, điểm) và các trường làm khóa chính và khóa ngoài cho các bảng đó. 
d) Tổ chức thực hiện: 
Bước 1: GV chuyển giao nhiệm vụ
- GV yêu cầu HS hoạt động nhóm bàn hoàn thành bài tập phần Vận dụng SGK trang 68. 
Trong kì thi tốt nghiệp trung học phổ thông, học sinh được đánh số báo danh, có thể thi một số môn, được chia vào các phòng thi được đánh số, sau khi chấm sẽ có điểm thi với các môn đăng kí dự thi. Em hãy đề xuất một số bảng dữ liệu và các trường làm khóa chính và khóa ngoài cho các bảng đó. 
Bước 2: HS thực hiện nhiệm vụ học tập
- HS phân công thành viên trong nhóm, hợp tác thảo luận, đưa ra ý kiến, tra cứu để có phương hướng giải quyết bài tập.
- GV quan sát, hỗ trợ, giải đáp thắc mắc cho HS.
Bước 3: Báo cáo kết quả hoạt động, thảo luận 
- Đại diện nhóm trình bày kết quả thảo luận. Các nhóm khác lắng nghe, bổ sung ý kiến.
Kết quả:
- Có thể lập danh sách các thông tin cần quản lí như sau:
(SBD, Họ và tên, Phòng thi, Môn thi, Điểm)
Từ đó có thể lập bảng ví dụ:
[BẢNG] SBD | Họ và tên | Phòng thi | Môn thi | Điểm
[BẢNG] 0001 | Trần Thu Hà | 001 | Toán | 8,5
[BẢNG] 0001 | Trần Thu Hà | 001 | Ngữ văn | 7,5
[BẢNG] 0001 | Trần Thu Hà | 001 | Vật lí | 8,0
[BẢNG] 0002 | Trần Mạnh Dũng | 002 | Toán | 9,0
[BẢNG] 0002 | Trần Mạnh Dũng | 002 | Ngữ văn | 7,0
[BẢNG] 0003 | Trần Mạnh Dũng | 002 | Hóa học | 8,5
[BẢNG] …
- Nếu lập CSDL gồm chỉ một bảng như trên sẽ gây dư thừa lượng lớn dữ liệu và xuất hiện nguy cơ gây mất tính nhất quán dữ liệu.
[1.1.NC1a: Đề xuất các dữ liệu cần thiết phù hợp với nhu cầu thông tin.
1.2.NC1b: Xác định được khoá chính, khoá ngoài của bảng dữ liệu.]
Bước 4: Đánh giá kết quả thực hiện 
- GV nhận xét, đánh giá, bổ sung ý kiến còn thiếu, chốt đáp án. 
* HƯỚNG DẪN VỀ NHÀ
Ghi nhớ kiến thức trong bài.
Hoàn thành các bài tập trong SBT.
Chuẩn bị bài mới Bài 14 – SQL – Ngôn ngữ truy vấn có cấu trúc.
```

</details>

