# Bài 11. CƠ SỞ DỮ LIỆU

> Học liệu được chuyển định dạng từ KHBD khối 11; nội dung gốc được giữ đầy đủ ở phần cuối để đối chiếu.

## Chủ đề
GIỚI THIỆU CÁC HỆ CƠ SỞ DỮ LIỆU

## Mục tiêu kiến thức từ KHBD

Học xong bài này, HS đạt các yêu cầu sau:
Biết được việc lưu trữ dữ liệu trên máy tính đòi hỏi phải được tổ chức một cách khoa học với những yêu cầu đã được khái quát và hệ thống hóa. 
Hiểu được khái niệm CSDL và các thuộc tính cơ bản của CSDL.
Trình bày được khái niệm CSDL và các thuộc tính cơ bản của CSDL.

## Trọng tâm hoạt động

Hoạt động 1: Có cần lưu trữ bảng điểm lớp học không?
Hoạt động 2: Sự cần thiết phải lưu trữ dữ liệu theo một cấu trúc xác định

## Nội dung KHBD đầy đủ đã trích xuất

<details>
<summary>Mở nội dung KHBD</summary>

```text
Ngày soạn: …/…/…
Ngày dạy: …/…/…
BÀI 11: CƠ SỞ DỮ LIỆU
I. MỤC TIÊU
1. Kiến thức
Học xong bài này, HS đạt các yêu cầu sau:
Biết được việc lưu trữ dữ liệu trên máy tính đòi hỏi phải được tổ chức một cách khoa học với những yêu cầu đã được khái quát và hệ thống hóa. 
Hiểu được khái niệm CSDL và các thuộc tính cơ bản của CSDL.
Trình bày được khái niệm CSDL và các thuộc tính cơ bản của CSDL.
2. Năng lực 
Năng lực chung: 
Năng lực tự chủ, tự học: Chủ động học tập, tìm hiểu nội dung bài học, biết lắng nghe và trả lời nội dung trong bài học.
Năng lực giải quyết vấn đề và sáng tạo: Tham gia tích cực vào hoạt động luyện tập, làm bài tập củng cố. 
Năng lực giao tiếp và hợp tác: Thực hiện tốt nhiệm vụ trong hoạt động nhóm.
Năng lực riêng:
Năng lực tin học giải quyết vấn đề: Hình thành, phát triển với sự hỗ trợ của công nghệ thông tin và truyền thông. 
Nâng cao khả năng phân tích và tư duy khái quát.
Năng lực số:
1.1.NC1a: Đáp ứng được nhu cầu thông tin.
1.3.NC1b: Triển khai được việc tổ chức và sắp xếp dữ liệu, thông tin và nội dung trong môi trường có cấu trúc.
2.1.NC1a: Sử dụng được nhiều công nghệ số để tương tác.
5.2.NC1a: Đánh giá được vấn đề trong bài toán tin học.
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
a) Mục tiêu: HS tìm hiểu về việc lưu trữ dữ liệu có phải chỉ là việc chuyển các ghi chép trên giấy thành văn bản trên máy tính không. 
b) Nội dung: GV đưa ra câu hỏi cho HS tự trao đổi, thảo luận để chỉ ra việc lưu trữ dữ liệu còn cần các hoạt động khác ngoài việc chuyển các ghi chép trên giấy thành văn bản máy tính. 
c) Sản phẩm: Bằng kiến thức của bản thân, HS thực hiện yêu cầu của GV đưa ra. 
d) Tổ chức thực hiện: 
Bước 1: GV chuyển giao nhiệm vụ:
- GV yêu cầu xem video AI được thiết kế để phục vụ bài dạy và trả lời câu hỏi xuất hiện trong video đó.
- GV dẫn dắt và đặt câu hỏi: Trong bài trước, các em đã được tìm hiểu về khái niệm lưu trữ dữ liệu. Tuy nhiên, chúng ta chỉ đề cập chủ yếu đến ghi chép dữ liệu trên giấy. Vậy tình hình có gì khác, có gì phải chú ý khi chuyển việc lưu trữ dữ liệu lên máy tính? Phải chăng đơn giản chỉ là chuyển văn bản trên giấy thành các tệp văn bản trên máy tính? 
Bước 2: HS thực hiện nhiệm vụ học tập: 
- HS xem video và suy nghĩ câu trả lời.
- HS thảo luận, suy nghĩ câu trả lời.
Bước 3: Báo cáo kết quả hoạt động, thảo luận: 
- GV mời đại diện một số HS trả lời, các HS khác nhận xét, bổ sung:
Việc lưu trữ dữ liệu phục vụ cho các bài toán quản lí không phải chỉ là việc chuyển các ghi chép trên giấy thành văn bản trên máy tính. 
Bước 4: Đánh giá kết quả thực hiện: 
- GV nhận xét, đánh giá và kết luận.
[6.2.NC1a: HS sử dụng công cụ AI hoặc sản phẩm số do GV cung cấp để tiếp nhận thông tin, trả lời câu hỏi đơn giản.
2.1.NC1a: HS thực hiện các tương tác cơ bản với học liệu số (xem video, trả lời câu hỏi trên môi trường số).
1.1.NC1a: HS tiếp cận, khai thác được thông tin từ nguồn học liệu số dưới sự hướng dẫn của GV.]
- GV dẫn dắt HS vào bài học mới – Bài 11: Cơ sở dữ liệu
2. HOẠT ĐỘNG HÌNH THÀNH KIẾN THỨC
Hoạt động 1: Có cần lưu trữ bảng điểm lớp học không?
a) Mục tiêu: HS nhận biết được rằng khi lưu trữ dữ liệu trên máy tính cần phải tổ chức dữ liệu một cách khoa học, đảm bảo được tính nhất quán và tính độc lập. 
b) Nội dung: HS đọc SGK và trả lời Hoạt động 1, thảo luận nhóm xây dựng kiến thức bài, củng cố bằng cách trả lời Câu hỏi SGK trang 55. 
c) Sản phẩm: HS thảo luận về việc có cần lưu trữ bảng điểm lớp học không; nêu yêu cầu chung đối với việc lưu trữ dữ liệu của bài toán quản lí; kể tên các mô đun và nhiệm vụ của chúng. 
d) Tổ chức thực hiện:
[BẢNG] HOẠT ĐỘNG CỦA GV VÀ HS | SẢN PHẨM DỰ KIẾN
[BẢNG] Bước 1: GV chuyển giao nhiệm vụ:- GV yêu cầu HS đọc Hoạt động 1 – Có cần lưu trữ bảng điểm lớp học không? SGK trang 53 và dẫn dắt: Điểm của mỗi môn học được ghi chép trong sổ điểm môn học và trong sổ điểm lớp học. Và vì sơ suất nào đó mà khác nhau – dữ liệu lưu trữ dư thừa (lưu trữ hai lần) và không nhất quán. - GV yêu cầu HS thảo luận nhóm: Vậy có cần lưu trữ bảng điểm lớp học không.- GV yêu cầu HS hoạt động nhóm bàn, đọc thông tin trong SGK và thực hiện nhiệm vụ:+ Nêu yêu cầu chung đối với việc lưu trữ dữ liệu của mọi bài toán quản lí. - GV hướng dẫn HS đọc ví dụ phân tích về sự phụ thuộc giữa tổ chức lưu trữ dữ liệu và phần mềm. Từ đó đặt ra yêu cầu về tổ chức lưu trữ dữ liệu độc lập với phần mềm:+ Phần mềm đọc, cập nhật điểm và lập bảng điểm lớp học sẽ đọc tệp diem.txt từng dòng và tách các thành phần theo dấu phẩy.→ sự phụ thuộc giữa việc tổ chức lưu trữ dữ liệu và phần mềm. Ví dụ khi cần đổi dấu phẩy thành dấu chấm phẩy “;” trong tệp diem.txt thì phải sửa phần mềm để tách các thành phần theo dấu chấm phẩy. → gây nhiều khó khăn cho công tác bảo trì, phát triển. Do đó đặt ra vấn đề tổ chức lưu trữ dữ liệu sao cho công tác xây dựng phần mềm không phụ thuộc vào tổ chức lưu trữ dữ liệu. - GV đặt câu hỏi thảo luận: Hãy kể tên các mô đun phần mềm và nhiệm vụ của chúng. - GV cho HS thảo luận nhóm đôi, trả lời Câu hỏi củng cố kiến thức trang 55:+ Câu 1: Hãy giải thích yêu cầu về tính nhất quán dữ liệu trong lưu trữ dữ liệu.+ Câu 2: Tại sao cần tổ chức lưu trữ dữ liệu độc lập với phần mềm?Bước 2: HS thực hiện nhiệm vụ học tập:- HS lắng nghe, trả lời câu hỏi trong phần Hoạt động 1.- HS lắng nghe GV hướng dẫn, giới thiệu kiến thức mới.- HS làm việc nhóm đôi, trả lời Câu hỏi củng cố kiến thức.- GV hỗ trợ, quan sát.Bước 3: Báo cáo kết quả hoạt động, thảo luận:- Đại diện nhóm trình bày.- Một số HS khác nhận xét, bổ sung cho bạn.Bước 4: Đánh giá kết quả thực hiện:- GV nêu nhận xét, tổng quát lại kiến thức.  | 1. Yêu cầu tổ chức lưu trữ dữ liệu một cách khoa họcKhông cần lưu trữ bảng điểm lớp học do bảng này chỉ là một khung nhìn tổng hợp từ dữ liệu cơ sở bằng cách ghép các bảng điểm môn học. a) Hạn chế dư thừa trong lưu trữ dữ liệuYêu cầu chung đối với việc lưu trữ dữ liệu của mọi bài toán quản lí là cần phải tổ chức việc lưu trữ sao cho có thể hạn chế trùng lặp làm dư thừa dữ liệu, khắc phục những lỗi không nhất quán về dữ liệu. b) Sự phụ thuộc phần mềm và dữ liệu- Mô đun Danh sách lớp: đọc và ghi dữ liệu cập nhật vào Danh sách lớp học.- Mô đun Lập bảng điểm: đọc dữ liệu từ Bảng điểm môn học, xử lí dữ liệu để tạo và kết xuất ra bảng điểm lớp học. Câu hỏi:Câu 1: Tính nhất quán dữ liệu đòi hỏi không gây ra mâu thuẫn dữ liệu, ví dụ không được có lưu trữ hai giá trị khác nhau về điểm cuối kì I, môn Toán của HS Dương Hoàng Anh lớp 11A. Câu 2: Cần phải tổ chức lưu trữ dữ liệu độc lập với phần mềm để có thể xây dựng, bảo trì và phát triển phần mềm một cách thuận lợi, không tiêu tốn nhiều nguồn lực mỗi khi có thay đổi về tổ chức lưu trữ dữ liệu. 
Hoạt động 2: Sự cần thiết phải lưu trữ dữ liệu theo một cấu trúc xác định
a) Mục tiêu: Giới thiệu khái niệm CSDL và một số thuộc tính cơ bản. 
b) Nội dung: HS trả lời câu hỏi xây dựng bài về CSDL và một số thuộc tính cơ bản, làm Câu hỏi củng cố SGK trang 57.
c) Sản phẩm: 
- HS nêu được khái niệm CSDL và một số thuộc tín cơ bản.
- HS hoàn thành Câu hỏi củng cố kiến thức SGK trang 57.
d) Tổ chức thực hiện:
[BẢNG] HOẠT ĐỘNG CỦA GV VÀ HS | SẢN PHẨM DỰ KIẾN | NLS
[BẢNG] Bước 1: GV chuyển giao nhiệm vụ:- GV yêu cầu HS đọc Hoạt động 2 – Sự cần thiết phải lưu trữ dữ liệu theo một cấu trúc xác định SGK trang 56 và trả lời câu hỏi: Hãy so sánh cách thức ghi chép và lưu trữ kết quả điểm môn học nêu trong Mục 1 với cách ghi chép và lưu trữ dưới dạng bảng. Theo em, cách nào là phù hợp hơn? Thông qua ví dụ bảng điểm môn học hãy chỉ ra một vài lí do cần lưu trữ dữ liệu theo một cấu trúc xác định.- GV yêu cầu HS đọc thông tin mục 2 SGK 56 trang và thảo luận cặp đôi, thực hiện nhiệm vụ:+ Nêu khái niệm CSDL.+ Em hãy tóm tắt các thuộc tính cơ bản của CSDL.- GV cho HS thảo luận nhóm bàn, trả lời Câu hỏi củng cố kiến thức SGK trang 57:Hãy nêu ví dụ minh họa cho một vài thuộc tính cơ bản của CSDL.Bước 2: HS thực hiện nhiệm vụ học tập:- HS đọc thông tin SGK và trả lời câu hỏi. - HS thảo luận nhóm, hoàn thành nhiệm vụ theo yêu cầu. - HS thảo luận để trả lời Câu hỏi củng cố kiến thức SGK trang 57. Bước 3: Báo cáo kết quả hoạt động, thảo luận:- HS xung phong trình bày kết quả.- Một số HS khác nhận xét, bổ sung cho bạn. Bước 4: Đánh giá kết quả thực hiện:GV tổng kết lại kiến thức trọng tâm và chuyển sang nội dung luyện tập. | 2. Cơ sở dữ liệu và một số thuộc tính cơ bản- So sánh:+ Ghi chép và lưu trữ dữ liệu trong Mục 1 yêu cầu người làm phần mềm phải biết cầu trúc chi tiết của tệp và viết chương trình đọc trực tiếp từ tệp dữ liệu.+ Ghi chép và lưu trữ dưới dạng bảng giúp người làm phần mềm không cần biết đến chi tiết cách thức dữ liệu được lưu trữ mà vẫn viết được chương trình cập nhật, truy xuất dữ liệu.→ Cách ghi chép và lưu trữ dưới dạng bảng phù hợp hơn. a) Khái niệm CSDLCSDL là một tập hợp các dữ liệu có liên quan với nhau, được lưu trữ một cách có tổ chức trên hệ thống máy tính. b) Một số thuộc tính cơ bản của CSDL- Tính cấu trúc: Dữ liệu được lưu trữ dưới dạng bảng gồm các hàng và cột.- Tính độc lập dữ liệu: Khả năng các mô đun phần mềm ứng dụng không cần cập nhật khi thay đổi cách thức tổ chức hoặc lưu trữ dữ liệu.- Tính bảo mật và an toàn: Dữ liệu được bảo vệ an toàn, ngăn chặn những truy xuất trái phép, chống được việc sao chép dữ liệu không hợp lệ. Câu hỏi:Đơn giá hàng hóa là dữ liệu dạng số nguyên dương. Dữ liệu điểm là dữ liệu số nằm trong khoảng cận dưới, cận trên và theo định dạng quy định.  | 1.3.NC1b: Triển khai được việc tổ chức và sắp xếp dữ liệu, thông tin và nội dung trong môi trường có cấu trúc (bảng).
3. HOẠT ĐỘNG LUYỆN TẬP
a) Mục tiêu: HS củng cố kiến thức về cơ sở dữ liệu thông qua làm bài tập.
b) Nội dung: HS vận dụng kiến thức đã học để trả lời câu hỏi trắc nghiệm và hoàn thành bài tập phần Luyện tập SGK trang 57
c) Sản phẩm học tập:
- HS tham gia trò chơi, trả lời câu hỏi trắc nghiệm
- HS trả lời được có cần lưu trữ cột điểm trung bình trong bảng điểm môn học khi lưu trữ trên máy tính hay không.
- HS lấy ví dụ minh họa cho sự cần thiết của việc lưu trữ dữ liệu độc lập với phần mềm khai thác dữ liệu. 
d) Tổ chức thực hiện:
Bước 1: GV chuyển giao nhiệm vụ:
- GV tổng hợp các kiến thức cần ghi nhớ cho HS.
- GV tổ chức trò chơi trắc nghiệm nhanh trên Quizizz để củng cố toàn bài.
- GV cung cấp mã QR hoặc đường Links cho HS trả lời nhanh một số câu hỏi trắc nghiệm tổng kết bài học.
Câu 1: Mục đích của lưu trữ dữ liệu là gì?
A. Cập nhật dữ liệu
B. Tổ chức dữ liệu
C. Khai thác thông tin
D. Quản lí thông tin
Câu 2: CSDL bán hàng có thể bao gồm những thông tin:
A. Ngày giao dịch, Loại giao dịch (nhập hay xuất)
B. Tên hàng hóa, Mã hàng hóa
C. Đơn vị tính, Số lượng, Đơn giá
D. Cả A, B, C đều đúng
Câu 3: Cho tình huống: Hai đại lí vé máy bay bán cùng một vé ngồi cho hai khách hàng khác nhau. 
Tình huống trên đã vi phạm thuộc tính nào của CSDL?
A. Tính độc lập dữ liệu
B. Tính toàn vẹn
C. Tính bảo mật và an toàn
D. Tính nhất quán
Câu 4: Với CSDL tài khoản ngân hàng, người không có thẩm quyền không được truy xuất để lấy thông tin cá nhân hay sửa đổi số dư tài khoản.
Tình huống trên thể hiện thuộc tính nào của CSDL?
A. Tính cấu trúc
B. Tính toàn vẹn
C. Tính bảo mật và an toàn
D. Tính không dư thừa
Câu 5: Đâu là giải pháp đảm bảo tính độc lập dữ liệu?
A. Lưu trữ dữ liệu (có liên quan với nhau) trên hệ thống máy tính một cách có tổ chức (theo một mô hình có cấu trúc)
B. Lưu trữ dữ liệu (không liên quan với nhau) trên hệ thống máy tính một cách có tổ chức (theo một mô hình có cấu trúc)
C. Lưu trữ dữ liệu (có liên quan với nhau) trên hệ thống máy tính một cách tùy ý
D. Lưu trữ dữ liệu (không liên quan với nhau) trên hệ thống máy tính một cách tùy ý
- GV tổ chức cho HS làm Bài 1, 2 phần Luyện tập SGK trang 57
Bài 1: Khi lưu trữ trên máy tính, theo em, có cần lưu trữ cột điểm trung bình trong bảng điểm môn học không?
Bài 2: Hãy lấy một ví dụ minh họa cho sự cần thiết của việc lưu trữ dữ liệu độc lập với phần mềm khai thác dữ liệu.
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
[BẢNG] C | B | D | C | A
[2.1.NC1a: HS thực hiện các tương tác được xác định rõ ràng với công nghệ số (làm bài tập online) trong lớp học.]
Bài 1: Không. Vì điểm trung bình môn học là kết quả tính toán theo công thức đã định từ các dữ liệu đã có. 
[5.2.NC1a: Đánh giá được vấn đề trong bài toán tin học.]
Bài 2: Có thể đưa ra bất cứ ví dụ nào về việc lưu trữ dữ liệu và phần mềm khai thác thông tin từ dữ liệu lưu trữ đó: dữ liệu hàng hóa và phần mềm quản lí bán hàng, dữ liệu về biến động tiền gửi trong tài khoản ngân hàng và phần mềm quản lí tài khoản,…
4. HOẠT ĐỘNG VẬN DỤNG 
a) Mục tiêu: HS làm bài tập vận dụng để ghi nhớ kiến thức.
b) Nội dung: HS sử dụng SGK và vận dụng kiến thức đã học để làm bài tập Vận dụng (SGK – tr57)
c) Sản phẩm: 
- HS nêu được các dữ liệu cần quản lí của một thư viện. 
d) Tổ chức thực hiện: 
Bước 1: GV chuyển giao nhiệm vụ
- GV yêu cầu HS hoạt động nhóm bàn hoàn thành bài tập phần Vận dụng SGK trang 57. 
Thư viện là nơi em có thể đến để đọc hay mượn sách. Hãy đề xuất các dữ liệu cần quản lí của một thư viện. 
Bước 2: HS thực hiện nhiệm vụ học tập
- HS phân công thành viên trong nhóm, hợp tác thảo luận, đưa ra ý kiến, tra cứu để có phương hướng giải quyết bài tập.
- GV quan sát, hỗ trợ, giải đáp thắc mắc cho HS.
Bước 3: Báo cáo kết quả hoạt động, thảo luận 
- Đại diện nhóm trình bày kết quả thảo luận. Các nhóm khác lắng nghe, bổ sung ý kiến.
[1.1.NC1a: Đề xuất các dữ liệu cần thiết phù hợp với nhu cầu thông tin.]
Bước 4: Đánh giá kết quả thực hiện 
- GV nhận xét, đánh giá, bổ sung ý kiến còn thiếu, chốt đáp án. 
* HƯỚNG DẪN VỀ NHÀ
Ghi nhớ kiến thức trong bài.
Hoàn thành các bài tập trong SBT.
Chuẩn bị bài mới Bài 12 – Hệ quản trị cơ sở dữ liệu và hệ cơ sở dữ liệu.
```

</details>

