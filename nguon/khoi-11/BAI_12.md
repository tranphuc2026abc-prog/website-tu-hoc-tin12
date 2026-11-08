# Bài 12. HỆ QUẢN TRỊ CƠ SỞ DỮ LIỆU VÀ HỆ CƠ SỞ DỮ LIỆU  > Học liệu được chuẩn hóa từ KHBD khối 11; nội dung gốc được giữ đầy đủ ở phần cuối để đối chiếu.  ## Chủ đề True  ## Mục tiêu kiến thức từ KHBD  True  ## Trọng tâm hoạt động  Hoạt động 1: Thảo luận về một phần mềm hỗ trợ thao tác dữ liệu
Hoạt động 3: Tìm hiểu hệ cơ sở dữ liệu tập trung và phân tán  ## KHBD đầy đủ đã chuyển định dạng  <details> <summary>Mở toàn bộ nội dung trích xuất từ tài liệu Word</summary>  ```text Ngày soạn: …/…/…
Ngày dạy: …/…/…
BÀI 12: HỆ QUẢN TRỊ CƠ SỞ DỮ LIỆU VÀ HỆ CƠ SỞ DỮ LIỆU
I. MỤC TIÊU
1. Kiến thức
Học xong bài này, HS đạt các yêu cầu sau:
Hiểu được khái niệm hệ quản trị CSDL và vai trò của hệ QTCSDL trong việc lưu trữ, cập nhật và truy xuất dữ liệu.
Hiểu được khái niệm hệ CSDL.
Phân biệt được CSDL tập trung và CSDL phân tán. 
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
1.1.NC1b: Áp dụng được kỹ thuật tìm kiếm để lấy được dữ liệu, thông tin và nội dung trong môi trường số.
2.1.NC1a: Sử dụng được nhiều công nghệ số để tương tác.
5.2.NC1b: Áp dụng được các công cụ số khác nhau và các giải pháp công nghệ có thể có để giải quyết vấn đề.
6.2.NC1a: Lựa chọn và sử dụng được các công cụ AI phù hợp để giải quyết vấn đề.
3. Phẩm chất
Ý thức trách nhiệm: Có trách nhiệm hoàn thành các nhiệm vụ được giao; các công việc được phân công khi làm việc nhóm. 
Tính cẩn thận, chăm chỉ trong học tập và công việc.
II. THIẾT BỊ DẠY HỌC VÀ HỌC LIỆU 
1. Đối với GV
KHBD, SGV, SGK, SBT Tin học 11 – Định hướng Khoa học máy tính – Kết nối tri thức, giáo án PPT.
Phòng thực hành máy tính kết nối Internet, máy chiếu.
Video AI tạo bằng công cụ AI được dùng để khởi động bài học.
Bộ câu hỏi trắc nghiệm trên phần mềm Quizizz.
2. Đối với HS
- SGK, SBT Tin học 11 – Định hướng Khoa học máy tính – Kết nối tri thức, vở ghi.
III. TIẾN TRÌNH DẠY HỌC
1. HOẠT ĐỘNG KHỞI ĐỘNG 
a) Mục tiêu: HS thảo luận, giải quyết vấn đề không phải tất cả người dùng đều có thể tự viết chương trình khai thác dữ liệu. 
b) Nội dung: GV đưa ra câu hỏi cho HS trao đổi, thảo luận để chỉ ra cách giải quyết vấn đề được đưa ra. 
c) Sản phẩm: Dựa vào kiến thức của bản thân, HS thực hiện yêu cầu GV đưa ra. 
d) Tổ chức thực hiện: 
Bước 1: GV chuyển giao nhiệm vụ:
- GV yêu cầu xem video AI được thiết kế để phục vụ bài dạy và trả lời câu hỏi xuất hiện trong video đó.
- GV dẫn dắt, nêu vấn đề: Một CSDL lưu dữ liệu trên hệ thống máy tính dưới dạng các tệp có cấu trúc được thiết kế để nhiều người dùng có thể cùng khai thác dữ liệu trong CSDL đó. Tuy nhiên, không phải tất cả người dùng đều biết về cấu trúc các tệp lưu dữ liệu và tự viết chương trình khai thác dữ liệu.
- GV đặt câu hỏi: Theo em, có thể giải quyết vấn đề này như thế nào?
Bước 2: HS thực hiện nhiệm vụ học tập: 
- HS xem video và suy nghĩ câu trả lời.
- HS thảo luận, suy nghĩ câu trả lời.
Bước 3: Báo cáo kết quả hoạt động, thảo luận: 
- GV mời đại diện một số HS trả lời, HS khác nhận xét, bổ sung:
Lưu dữ liệu dưới dạng một phần mềm hệ thống quản trị mà ai cũng có thể dễ dàng truy vấn. 
Bước 4: Đánh giá kết quả thực hiện: 
- GV nhận xét, đánh giá và kết luận.
[6.2.NC1a: HS sử dụng công cụ AI hoặc sản phẩm số do GV cung cấp để tiếp nhận thông tin, trả lời câu hỏi đơn giản.
2.1.NC1a: HS thực hiện các tương tác cơ bản với học liệu số (xem video, trả lời câu hỏi trên môi trường số).
1.1.NC1a: HS tiếp cận, khai thác được thông tin từ nguồn học liệu số dưới sự hướng dẫn của GV.]
- GV dẫn dắt HS vào bài học mới – Bài 12: Hệ quản trị cở sở dữ liệu và cơ sở dữ liệu
2. HOẠT ĐỘNG HÌNH THÀNH KIẾN THỨC
Hoạt động 1: Thảo luận về một phần mềm hỗ trợ thao tác dữ liệu
a) Mục tiêu: Giới thiệu ở mức nguyên lí về phần mềm hệ quản trị CSDL và các nhóm chức năng của phần mềm này. 
b) Nội dung: HS đọc SGK và trả lời Hoạt động 1, thảo luận nhóm xây dựng kiến thức bài mới, củng cố bằng cách trả lời Câu hỏi SGK 59.
c) Sản phẩm: HS nêu được những yêu cầu mà một phần mềm hỗ trợ làm việc với các CSDL cần thực hiện; khái niệm hệ QTCSDL; 3 nhóm chức năng chính của hệ QTCSDL. 
d) Tổ chức thực hiện:
[BẢNG] HOẠT ĐỘNG CỦA GV VÀ HS | SẢN PHẨM DỰ KIẾN
[BẢNG] Bước 1: GV chuyển giao nhiệm vụ:- GV giới thiệu: Để tạo ra, lưu trữ và sửa đổi một văn bản trên máy tính chúng ta cần một phần mềm soạn thảo văn bản. Để tạo ra và cập nhật một bảng tính điện tử chúng ta cần một phần mềm bảng tính. - GV đặt câu hỏi: Theo em, một phần mềm hỗ trợ làm việc với các CSDL cần thực hiện được những yêu cầu nào dưới đây?A. Cung cấp công cụ tạo lập CSDLB. Cập nhật dữ liệu và tự động kiểm tra tính đúng đắn của dữ liệuC. Hỗ trợ truy xuất dữ liệuD. Cung cấp giao diện để ai cũng có thể xem nội dung của các bảng dữ liệu một cách dễ dàng- GV giới thiệu: Để hỗ trợ làm việc với các CSDL người ta xây dựng những bộ phần mềm chuyên dụng gọi là hệ quản trị cơ sở dữ liệu (gọi tắt là hệ QTCSDL).- GV yêu cầu HS đọc mục 1 SGK trang 58, thảo luận nhóm 4-5 người, thực hiện nhiệm vụ:+ Nêu khái niệm hệ QTCSDL.+ Hệ quản trị cơ sở dữ liệu gồm mấy nhóm chức năng chính? Đó là những nhóm nào?- GV giới thiệu thêm: Hệ QTCSDL còn cung cấp Giao diện lập trình ứng dụng (Application Programing Interface – API). API cung cấp cách thức làm việc trực tiếp với CSDL, phương thức để những người làm phần mềm ứng dụng có thể cập nhật, truy xuất CSDL từ mô đun chương trình mà họ sẽ viết. - GV cho HS đọc và trả lời Câu hỏi SGK trang 59:+ Câu 1: Nêu những khó khăn trong việc khai thác CSDL nếu không có hệ QTCSDL.+ Câu 2: Tóm tắt các nhóm chức năng của hệ QTCSDL.Bước 2: HS thực hiện nhiệm vụ học tập:- HS chú ý lắng nghe GV giới thiệu kiến thức mới, suy nghĩ trả lời câu hỏi.- HS trao đổi nhóm, hoàn thành nhiệm vụ theo yêu cầu. - HS làm bài cá nhân, trả lời Câu hỏi củng cố kiến thức. Bước 3: Báo cáo kết quả hoạt động, thảo luận:- HS giơ tay phát biểu, trình bày kết quả.- HS khác đối chiếu, nhận xét, bổ sung ý kiến. Bước 4: Đánh giá kết quả thực hiện:- GV nêu nhận xét, tổng quát lại kiến thức.  | 1. Khái niệm hệ quản trị cơ sở dữ liệu- Hệ QTCSDL là phần mềm cung cấp phương thức để lưu trữ, cập nhật và truy xuất dữ liệu của CSDL, bảo mật và an toàn dữ liệu. - Hệ QTCSDL gồm 3 nhóm chức năng chính, đó là:- Nhóm chức năng định nghĩa dữ liệu.- Nhóm chức năng cập nhật và truy xuất dữ liệu.- Nhóm chức năng bảo mật, an toàn CSDL.Câu hỏi: Câu 1: Nếu không có hệ QTCSDL, người dùng phải tự xây dựng lấy giải pháp trực tiếp tổ chức lưu trữ, cập nhật, truy xuất dữ liệu. Điều này kéo theo những khó khăn trong việc phát triển phần mềm, lãng phí nguồn lực và các tài nguyên khác. Câu 2: - Nhóm chức năng định nghĩa dữ liệu:+ Khai báo CSDL với tên gọi xác định. Một hệ QTCSDL có thể quản trị nhiều CSDL.+ Nhiều hệ QTCSDL cho phép cài đặt các ràng buộc toàn vẹn dữ liệu.- Nhóm chức năng cập nhật và truy xuất dữ liệu (thao tác dữ liệu):- Nhóm chức năng bảo mật, an toàn CSDL:+ Hệ QTCSDL cần cung cấp chức năng kiểm soát giao dịch, đảm bảo tính nhất quán dữ liệu. + Hệ QTCSDL cung cấp phương tiện thực hiện sao lưu dự phòng (backup) để đề phòng các sự cố gây mất dữ liệu và khôi phục dữ liệu khi cần thiết. 
 Hoạt động 2: Thảo luận về tra cứu trực tuyến điểm thi
a) Mục tiêu: Giới thiệu khái niệm “Phần mềm ứng dụng CSDL” (thường gọi tắt là “Ứng dụng CSDL”); từ đó đưa ra khái niệm “Hệ CSDL”. 
b) Nội dung: HS trả lời câu hỏi xây dựng bài về hệ CSDL, làm Câu hỏi củng cố kiến thức SGK trang 61. 
c) Sản phẩm: HS nêu được các yếu tố khác mà hệ thống tra cứu điểm thi cần có ngoài CSDL điểm thi để cung cấp thông tin cho người dùng; mục đích của phần mềm CSDL; khái niệm hệ CSDL.  
d) Tổ chức thực hiện:
[BẢNG] HOẠT ĐỘNG CỦA GV VÀ HS | SẢN PHẨM DỰ KIẾN
[BẢNG] Bước 1: GV chuyển giao nhiệm vụ:- GV dẫn dắt: Khi lên mạng để tra cứu điểm thi vào lớp 10, thông thường trên màn hình chỉ yêu cầu nhập vài dữ liệu tối thiểu. Ví dụ sau khi nhập số báo danh gần như ngay lập tức em nhận được đầy đủ thông tin họ tên, trường lớp, điểm thi cùng kết quả xét tuyển.- GV đặt câu hỏi: Vậy, ngoài CSDL điểm thi, hệ thống tra cứu trực tuyến cần có những gì để có thể cung cấp cho em thông tin như vậy? → GV gợi ý để HS phát hiện đã có một phần mềm tổ chức giao tiếp với người dùng (tra cứu điểm thi), làm cầu nối giữa người dùng với hệ QTCSDL và hệ CSDL. Người dùng không phải làm việc với hệ QTCSDL để truy xuất CSDL. - GV hướng dẫn HS đọc mục 2 SGK trang 60 về mô hình tổ chức phần mềm của các hệ QTCSDL.- GV yêu cầu HS đọc mục 2 SGK trang 60, hoạt động nhóm 4-6 người, thực hiện nhiệm vụ:+ Nêu mục đích của phần mềm ứng dụng CSDL.+ Nêu khái niệm hệ CSDL. - GV cho HS đọc và trả lời Câu hỏi SGK trang 61:Hệ QTCSDL và hệ CSDL khác nhau như thế nào?Bước 2: HS thực hiện nhiệm vụ học tập:- HS lắng nghe, suy nghĩ trả lời câu hỏi.- HS lắng nghe GV giới thiệu kiến thức mới, hoạt động nhóm để hoàn thành nhiệm vụ được giao.- HS trả lời Câu hỏi củng cố kiến thức.- GV quan sát, hỗ trợ HS.Bước 3: Báo cáo kết quả hoạt động, thảo luận:- HS xung phong trình bày kết quả.- Các HS khác nhận xét, bổ sung cho bạn.Bước 4: Đánh giá kết quả thực hiện:- GV tổng quát lại kiến thức, yêu cầu HS ghi chép bài vào vở.  | 2. Hệ cơ sở dữ liệu- Hệ CSDL là hệ thống gồm 3 thành phần: Phần mềm ứng dụng CSDL, Thành phần chủ của hệ QTCSDL (gọi tắt là hệ QTCSDL) và các CSDL.- Câu hỏi:+ Hệ QTCSDL là một phần mềm hỗ trợ tạo lập CSDL, cập nhật và truy xuất dữ liệu. + Hệ CSDL bao hàm hệ QTCSDL, tất cả các CSDL mà hệ QTCSDL lưu trữ, quản trị và tất cả các phần mềm ứng dụng CSDL ấy. 
Hoạt động 3: Tìm hiểu hệ cơ sở dữ liệu tập trung và phân tán
a) Mục tiêu: 
- Giới thiệu CSDL tập trung, CSDL phân tán.
- HS phân biệt CSDL tập trung và CSDL phân tán. 
b) Nội dung: HS đọc SGK để tìm hiểu về hệ CSDL tập trung và hệ CSDL phân tán.
c) Sản phẩm: HS nắm được kiến thức về hệ CSDL tập trung và phân tán; nêu được ưu, nhược điểm của các hệ này; chỉ ra sự khác nhau giữa chúng. 
d) Tổ chức thực hiện:
[BẢNG] HOẠT ĐỘNG CỦA GV VÀ HS | SẢN PHẨM DỰ KIẾN | NLS
[BẢNG] Bước 1: GV chuyển giao nhiệm vụ:- GV hướng dẫn HS đọc SGK trang 61, 62, 63, thảo luận nhóm 4-6 người:+ Mục a: GV giới thiệu: Hệ CSDL được gọi là tập trung nếu thành phần CSDL của nó được lưu trữ trên chỉ một máy tính. Các phần mềm ứng dụng CSDL có thể nằm trên cùng một máy tính chứa hệ QTCSDL và CSDL, cũng có thể nằm trên các máy tính khác nhau (như Hình 12.4).→ GV yêu cầu HS: Sử dụng công cụ số (Máy tìm kiếm hoặc Chatbot AI) tìm kiếm thông tin và trả lời các câu hỏi:Với những CSDL một người dùng trên một máy, người dùng có những quyền hạn gì?Nêu ưu, nhược điểm của hệ CSDL tập trung. + Mục b: GV giới thiệu: Hệ CSDL được gọi là phân tán nếu thành phần CSDL của nó được lưu trữ phân tán trên các máy tính khác nhau (gọi là trạm CSDL cục bộ (hay vùng/địa phương) trong mạng máy tính. → GV yêu cầu HS: Sử dụng công cụ số (Máy tìm kiếm hoặc Chatbot AI) tìm hiểu ưu, nhược điểm của CSDL phân tán.- GV cho HS đọc và trả lời Câu hỏi SGK trang 63:Hệ CSDL tập trung và hệ CSDL phân tán khác nhau như thế nào?Bước 2: HS thực hiện nhiệm vụ học tập:- HS lắng nghe GV giới thiệu kiến thức mới.- HS sử dụng công cụ số tìm hiểu kiến thức.- HS làm Câu hỏi củng cố kiến thức.- GV trợ giúp HS.Bước 3: Báo cáo kết quả hoạt động, thảo luận:- HS đọc kết quả tìm kiếm, đối chiếu với SGK và rút ra kết luận.- HS giơ tay phát biểu trình bày ý kiến của mình.- Các HS khác nhận xét, bổ sung ý kiến cho bạn. Bước 4: Đánh giá kết quả thực hiện:- GV nêu nhận xét, tổng quát lại kiến thức. | 3. Hệ cơ sở dữ liệu tập trung và phân tána) Hệ CSDL tập trung- Ưu, nhược điểm của hệ CSDL tập trung:+ Ưu điểm: dễ bảo trì phát triển, thuận lợi trong công tác đảm bảo nhất quán dữ liệu và an ninh.+ Nhược điểm: khi triển khai cho người dùng sử dụng trên diện rộng đòi hỏi mạng máy tính ổn định và đường truyền mạng có tốc độ đáp ứng đủ nhanh. b) Hệ CSDL phân tán- Ưu điểm: + Tính sẵn sàng cao, dễ dàng mở rộng vì có thể bổ sung thêm trạm CSDL cục bộ một cách nhanh chóng khi cần thiết.+ Độ tin cậy và an toàn được nâng cao. - Câu hỏi: + Khác biệt chính nằm ở việc CSDL được lưu trữ tập trung trên một máy tính hay được lưu trữ phân tán tại nhiều máy tính trong hệ thống máy tính kết nối với nhau.+ Sự khác biệt này kéo theo điểm phức tạp hơn về kiến trúc và vận hành của hệ CSDL phân tán:Hệ QTCSDL phân tán hỗ trợ người dùng làm việc mà không biết đến sự phân tán của dữ liệu.Hỗ trợ quản trị dữ liệu phân tán.  | - 1.1.NC1b: Áp dụng được kỹ thuật tìm kiếm để lấy được dữ liệu, thông tin và nội dung trong môi trường số.- 5.2.NC1b: HS sử dụng công cụ số để tìm kiếm thông tin.
3. HOẠT ĐỘNG LUYỆN TẬP
a) Mục tiêu: HS củng cố kiến thức về hệ quản trị cơ sở dữ liệu và hệ cơ sở dữ liệu thông qua làm bài tập.
b) Nội dung: HS vận dụng kiến thức đã học để trả lời câu hỏi trắc nghiệm và hoàn thành bài tập phần Luyện tập SGK trang 63.
c) Sản phẩm học tập: 
- HS tham gia trò chơi, trả lời câu hỏi trắc nghiệm.
- HS lập danh sách các chức năng của hệ QTCSDL trong từng nhóm chức năng của hệ QTCSDL.
- HS phân tích điểm mạnh, điểm yếu của hệ CSDL phân tán so với hệ CSDL tập trung. 
d) Tổ chức thực hiện:
Bước 1: GV chuyển giao nhiệm vụ:
- GV tổng hợp các kiến thức cần ghi nhớ cho HS.
- GV tổ chức trò chơi trắc nghiệm nhanh trên Quizizz để củng cố toàn bài.
- GV cung cấp mã QR hoặc đường Links cho HS trả lời nhanh một số câu hỏi trắc nghiệm tổng kết bài học.
Câu 1: Trong các hệ QTCSDL được dùng phổ biến hiện nay, hệ QTCSDL nào không được sử dụng cho các ứng dụng phức tạp:
A. Oracle
B. MySQL
C. Microsoft Access
D. PostGreSQL
Câu 2: Khẳng định sau đúng hay sai: Hệ QTCSDL hỗ trợ tạo lập, cập nhật, truy xuất tất cả các CSDL khác nhau theo cùng phương thức xác định.
A. Đúng
B. Sai
C. “Hệ QTCSDL hỗ trợ tạo lập, cập nhật, truy xuất tất cả các CSDL khác nhau” đúng, “theo cùng phương thức xác định” sai
D. Đáp án khác
Câu 3: Những phần mềm ứng dụng CSDL là:
A. Phần mềm mua hàng trực tuyến
B. Phần mềm thanh toán ngân hàng (mobile banking)
C. Phần mềm đặt xe taxi công nghệ
D. Cả A, B, C đều đúng
Câu 4: Những hệ CSDL nào được tổ chức ở dạng hệ CSDL phân tán:
A. Facebook
B. Google
C. Amazon
D. Cả A, B, C đều đúng
Câu 5: Mô hình máy chủ tệp (file server) là:
A. Một hệ CSDL tập trung
B. Một hệ CSDL tập trung nhưng xử lí dữ liệu phân tán
C. Một hệ CSDL phân tán
D. Một hệ CSDL trung tâm
- GV tổ chức cho HS làm Bài 1, 2 phần Luyện tập SGK trang 63.
Bài 1: Hãy lập danh sách các chức năng của hệ QTCSDL trong từng nhóm chức năng của hệ QTCSDL.
Bài 2: Hãy phân tích điểm mạnh và điểm yếu của hệ CSDL phân tán so với hệ CSDL tập trung. 
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
[BẢNG] C | A | D | D | B
[2.1.NC1a: HS thực hiện các tương tác được xác định rõ ràng với công nghệ số (làm bài tập online) trong lớp học.]
Bài 1: Các chức năng của hệ QTCSDL được chia thành ba nhóm: Định nghĩa dữ liệu, Cập nhật và truy xuất dữ liệu và Bảo mật, an toàn dữ liệu.
+ Nhóm chức năng Định nghĩa dữ liệu hỗ trợ định nghĩa CSDL bao gồm: tên CSDL, tạo lập và sửa đổi cấu trúc CSDL cũng như các định nghĩa khác liên quan đến các ràng buộc dữ liệu.
+ Nhóm chức năng Cập nhật và truy xuất dữ liệu bao gồm các chức năng thêm mới, sửa, xóa dữ liệu và truy xuất dữ liệu theo các tiêu chí khác nhau. 
+ Nhóm chức năng Bảo mật, an toàn dữ liệu bao gồm các chức năng: hỗ trợ bảo mật qua phân quyền cập nhật, truy xuất dữ liệu và hỗ trợ đảm bảo an toàn dữ liệu qua biện pháp sao lưu, phục hồi dữ liệu.
Bài 2: 
+ Mô hình CSDL phân tán có tính sẵn sàng cao, nhanh chóng mở rộng vì có thể bổ sung thêm trạm CSDL một cách nhanh chóng khi cần thiết. Độ tin cậy và an toàn dữ liệu cũng được nâng cao vì thường có những bản sao lưu dữ liệu được lưu trữ ở các trạm cục bộ khác nhau. Mô hình này hỗ trợ một cách hiệu quả người dùng trên diện rộng. 
+ Điểm yếu của mô hình này bắt nguồn từ sự phức tạp của kiến trúc: không dễ thiết kế và triển khai, bảo trì; chi phí duy trì cao, tính nhất quán dữ liệu có thể bị ảnh hưởng nếu hệ QTCSDL không thực hiện được việc đồng bộ hóa dữ liệu một cách chính xác và kịp thời. 
4. HOẠT ĐỘNG VẬN DỤNG 
a) Mục tiêu: HS làm bài tập vận dụng để ghi nhớ kiến thức.
b) Nội dung: HS sử dụng SGK và vận dụng kiến thức đã học để làm bài tập Vận dụng 1, 2 (SGK – tr63)
c) Sản phẩm: 
- HS lấy ví dụ về một hệ CSDL trong thực tế và chỉ ra những thành phần của nó. 
- HS tìm hiểu tên một số hệ quản trị CSDL quan hệ được sử dụng phổ biến. 
d) Tổ chức thực hiện: 
Bước 1: GV chuyển giao nhiệm vụ
- GV yêu cầu HS hoạt động nhóm bàn hoàn thành bài tập phần Vận dụng SGK trang 63. 
Bài 1: Cho ví dụ về một hệ CSDL trên thực tế, chỉ rõ những thành phần của nó.
Bài 2: Hãy tìm hiểu qua Internet tên một số hệ quản trị CSDL quan hệ được sử dụng phổ biến. 
Bước 2: HS thực hiện nhiệm vụ học tập
- HS phân công thành viên trong nhóm, hợp tác thảo luận, đưa ra ý kiến, tra cứu để có phương hướng giải quyết bài tập.
- GV quan sát, hỗ trợ, giải đáp thắc mắc cho HS.
Bước 3: Báo cáo kết quả hoạt động, thảo luận 
- Đại diện nhóm trình bày kết quả thảo luận. Các nhóm khác lắng nghe, bổ sung ý kiến.
Bước 4: Đánh giá kết quả thực hiện 
- GV nhận xét, đánh giá, bổ sung ý kiến còn thiếu, chốt đáp án. 
Kết quả:
Bài 1: Có nhiều ví dụ, chẳng hạn:
+ Hệ CSDL quản lí nhân sự với các thành phần: Phần mềm quản lí nhân sự, hệ QTCSDL và CSDL nhân sự.
+ Hệ CSDL quản lí thư viện với các thành phần: Phần mềm quản lí thư viện, hệ QTCSDL và CSDL thư viện.
+ Hệ CSDL quản lí bán hàng với các thành phần: Phần mềm quản lí bán hàng, hệ QTCSDL và CSDL bán hàng. 
Bài 2: Gợi ý: Tìm theo từ khóa “Hệ QTCSDL thông dụng” hay “Popular DBMS”.
Một số hệ quản trị CSDL quan hệ được sử dụng phổ biến: Oracle; MySQL; MariaDB; Microsoft SQL Server; PostgreSQL; IBM Db2,…
[1.1.NC1b: Áp dụng được kỹ thuật tìm kiếm để lấy được dữ liệu, thông tin và nội dung trong môi trường số.
5.2.NC1b: HS sử dụng công cụ số để tìm hiểu một số hệ quản trị CSDL quan hệ được sử dụng phổ biến.]
* HƯỚNG DẪN VỀ NHÀ
Ghi nhớ kiến thức trong bài.
Hoàn thành các bài tập trong SBT.
Chuẩn bị bài mới Bài 13 – Cơ sở dữ liệu quan hệ. ```  </details> 
