# Bài 17. QUẢN TRỊ CƠ SỞ DỮ LIỆU TRÊN MÁY TÍNH  > Học liệu được chuẩn hóa từ KHBD khối 11; nội dung gốc được giữ đầy đủ ở phần cuối để đối chiếu.  ## Chủ đề True  ## Mục tiêu kiến thức từ KHBD  True  ## Trọng tâm hoạt động  Hoạt động 1: Tìm hiểu về lợi ích của việc quản trị cơ sở dữ liệu trên máy tính
Hoạt động 2: Tìm hiểu về hệ quản trị cơ sở dữ liệu MySQL và phần mềm HeidiSQL  ## KHBD đầy đủ đã chuyển định dạng  <details> <summary>Mở toàn bộ nội dung trích xuất từ tài liệu Word</summary>  ```text Ngày soạn: .../.../...
Ngày dạy: .../.../...
CHỦ ĐỀ 6: THỰC HÀNH TẠO VÀ KHAI THÁC CƠ SỞ DỮ LIỆU
BÀI 17: QUẢN TRỊ CƠ SỞ DỮ LIỆU TRÊN MÁY TÍNH
I. MỤC TIÊU
1. Kiến thức
Học xong bài này, HS đạt các yêu cầu sau:
Biết được lợi ích của việc quản trị CSDL trên máy tính.
Làm quen với MySQL và HeidiSQL – bộ cung cụ hỗ trợ việc quản trị CSDL trên máy tính.
2. Năng lực 
Năng lực chung:
Tự chủ và tự học: biết lắng nghe, tự giác học tập và hoàn thành nhiệm vụ; tích cực tham gia các hoạt động học tập trong lớp.
Giao tiếp và hợp tác: có thói quen trao đổi, giúp đỡ nhau trong học tập; biết cùng nhau hoàn thành nhiệm vụ học tập theo sự hướng dẫn của GV.
Giải quyết vấn đề và sáng tạo: ứng dụng các kiến thức đã học vào thực tế, phát triển khả năng giải quyết vấn đề có tính tích hợp liên môn giữa Tin học với các môn học khác.
Năng lực riêng: 
Giải quyết vấn đề với sự hỗ trợ của công nghệ thông tin và truyền thông trong học và tự học: Hiểu được những thuận lợi và lợi ích to lớn khi quản lí dữ liệu với CSDL trên máy tính và biết cách cài đặt hệ QTCSDL MySQL và phần mềm hỗ trợ truy cập CSDL HeidiSQL.
Năng lực số:
6.1.NC1a: Hiểu được mô hình Client-Server trong quản trị CSDL (MySQL là Server, HeidiSQL là Client).
5.2.NC1b: Cài đặt, cấu hình phần mềm hệ thống và xử lý các lỗi kết nối thường gặp.
4.1.NC1a: Nhận thức tầm quan trọng của tài khoản root và thiết lập mật khẩu mạnh khi cài đặt CSDL.
6.2.NC1b: Sử dụng AI để tra cứu ý nghĩa các dòng lệnh hoặc khắc phục lỗi cài đặt.
3. Phẩm chất
Trách nhiệm, tính cẩn thận, chăm chỉ trong học tập và công việc.
II. THIẾT BỊ DẠY HỌC VÀ HỌC LIỆU 
1. Đối với GV 
KHBD, tài liệu giảng dạy, giáo án PPT.
Phòng thực hành máy tính kết nối Internet.
Máy chiếu.
Video AI tạo bằng công cụ AI được dùng để khởi động bài học.
2. Đối với HS 
SGK, SBT Tin học 11, vở ghi chép.
III. TIẾN TRÌNH DẠY HỌC
1. HOẠT ĐỘNG KHỞI ĐỘNG 
a) Mục tiêu: Đặt HS vào tình huống thực tiễn chứa đựng vấn đề về quản trị cơ sở dữ liệu trên máy tính.
b) Nội dung: HS đọc thông tin được cung cấp và đưa ra cách giải quyết tình huống.
c) Sản phẩm: Gợi ý trả lời câu hỏi Phần khởi động và cách giải quyết tình huống.
d) Tổ chức thực hiện: 
Bước 1: GV chuyển giao nhiệm vụ: 
- GV yêu cầu xem video AI được thiết kế để phục vụ bài dạy và trả lời câu hỏi xuất hiện trong video đó.
- GV dẫn dắt và yêu cầu HS trả lời câu hỏi mở đầu: Trở lại với các bài toán quản lí điểm, quản lí các bản thu âm (Bài 10 đến Bài 15), em có nhận xét, so sánh gì về việc cập nhật, chỉnh sửa dữ liệu giữa quản lí thủ công và quản lí CSDL trên máy tính?
Bước 2: HS thực hiện nhiệm vụ học tập: 
- HS xem video và suy nghĩ câu trả lời.
- HS lắng nghe, suy nghĩ câu trả lời.
Bước 3: Báo cáo kết quả hoạt động, thảo luận: 
- GV gọi đại diện một số HS trả lời.
- HS khác nhận xét, bổ sung.
Bước 4: Đánh giá kết quả thực hiện: 
- GV nhận xét, đánh giá và kết luận.
[6.1.NC1a: HS sử dụng công cụ AI hoặc sản phẩm số do GV cung cấp để tiếp nhận thông tin, trả lời câu hỏi đơn giản.
2.1.NC1a: HS thực hiện các tương tác cơ bản với học liệu số (xem video, trả lời câu hỏi trên môi trường số).
1.1.NC1a: HS tiếp cận, khai thác được thông tin từ nguồn học liệu số dưới sự hướng dẫn của GV.]
- GV dẫn dắt HS vào bài học mới: Bài 17: Quản trị cơ sở dữ liệu trên máy tính.
2. HOẠT ĐỘNG HÌNH THÀNH KIẾN THỨC
Hoạt động 1: Tìm hiểu về lợi ích của việc quản trị cơ sở dữ liệu trên máy tính
a) Mục tiêu: Giúp HS hiểu được những lợi ích to lớn khi quản trị CSDL trên máy tính thay vì lưu trữ và quản lí dữ liệu thủ công trên giấy.
b) Nội dung: HS hoạt động nhóm đọc thông tin mục 1, thảo luận trả lời câu hỏi Hoạt động 1 trang 81.
c) Sản phẩm: Hướng dẫn trả lời câu hỏi liên quan đến lợi ích của quản trị CSDL trên máy tính.
d) Tổ chức thực hiện:
[BẢNG] HOẠT ĐỘNG CỦA GV VÀ HS | SẢN PHẨM DỰ KIẾN | NLS
[BẢNG] Bước 1: GV chuyển giao nhiệm vụ- GV đặt vấn đề: Các bài toán quản lí cùng với việc lưu trữ dữ liệu, khai thác thông tin đã xuất hiện từ rất lâu trong các hoạt động kinh tế - xã hội với những nghiệp vụ được vận hành nề nếp, ổn định từ rất nhiều năm,…- GV đặt câu hỏi và yêu cầu HS đọc mục 1 SGK, thảo luận cặp đôi trả lời câu hỏi:+ Hãy cùng tìm hiểu tại sao lại phải thay đổi thói quen quản lí thủ công, chuyển sang sử dụng máy tính với hệ QTCSDL.- Dựa vào kiến thức vừa nêu, GV yêu cầu HS trả lời câu hỏi củng cố trang 82 SGK: Hãy nêu vài ví dụ thực tế minh họa về việc ứng dụng quản trị CSDL trên máy tính và những lợi ích mà nó mang lại.- Trên cơ sở kiến thức vừa nêu, GV yêu cầu HS khái quát những lợi ích của việc quản trị cơ sở dữ liệu trên máy tính.Bước 2: HS thực hiện nhiệm vụ học tập: - HS thảo luận nhóm, đọc SGK và trả lời câu hỏi.Bước 3: Báo cáo kết quả hoạt động, thảo luận: - Đại diện nhóm HS trình bày.* Hoạt động 1 trang 81 SGK:Việc quản lí dữ liệu thủ công là công việc rất vất vả, khó kiểm soát, đòi hỏi nhiều công sức, đặc biệt với những dữ liệu không được phép sai sót dù rất nhỏ.*Câu hỏi củng cố trang 82 SGK:Ví dụ tại các trạm xăng dầu, nếu không có hỗ trợ bởi máy tính và CSDL thì không thể có việc lượng xăng dầu bán ra và số tiền thu về được đo đạc, ghi chép một cách tự động. Mỗi nhân viên bán hàng phải đong xăng dầu bằng dụng cụ, phải ghi chép vào số lượng xăng dầu bán ra và lượng tiền thu về. Mỗi giao dịch với khách hàng như thế mất thời gian gấp hàng chục lần như hiện tại, kéo theo số lượng nhân viên bán hàng phải tăng lên gấp hàng chục lần. Việc quản lí sổ sách và tính toán với khối lượng lớn dữ liệu vào cuối ngày sẽ là vô cùng vất vả nặng nhọc.- Các nhóm khác nhận xét, bổ sung cho nhóm bạn.Bước 4: Đánh giá kết quả thực hiện: - GV nhận xét, đánh giá kết quả thảo luận của HS. | 1. Lợi ích của việc quản trị cơ sở dữ liệu trên máy tính- Việc ứng dụng CSDL trong quản lí đem lại nhiều lợi ích to lớn: tiện lợi, kịp thời, nhanh chóng, hạn chế sai sót,… | 1.2.NC1a: HS đánh giá được hiệu quả của công nghệ trong bối cảnh thực tế; nhận thức được rủi ro của việc lưu trữ dữ liệu thủ công so với độ tin cậy của hệ thống CSDL máy tính.
Hoạt động 2: Tìm hiểu về hệ quản trị cơ sở dữ liệu MySQL và phần mềm HeidiSQL
a) Mục tiêu: Giúp HS:
+ Hiểu được rằng MySQL là một hệ QTCSDL mạnh, dễ sử dụng, được sử dụng rất phổ biến hiện nay trên thế giới.
+ Biết cách cài đặt MySQL, HeidiSQL và làm quen bước đầu với hai phần mềm này.
b) Nội dung: HS hoạt động nhóm đọc thông tin mục 2, thảo luận trả lời câu hỏi Hoạt động 2 trang 82.
c) Sản phẩm: Hướng dẫn trả lời câu hỏi liên quan đến hệ quản trị cơ sở dữ liệu MySQL và phần mềm HeidiSQL.
d) Tổ chức thực hiện:
[BẢNG] HOẠT ĐỘNG CỦA GV VÀ HS | SẢN PHẨM DỰ KIẾN | NLS
[BẢNG] Bước 1: GV chuyển giao nhiệm vụ- GV tiếp tục tổ chức cho HS hoạt động nhóm: Hãy sử dụng từ khóa “hệ quản trị CSDL phổ biến” để tìm kiếm thông tin trên Internet và trả lời câu hỏi “Nếu được lựa chọn, em sẽ chọn hệ QTCSDL nào để đáp ứng được các tiêu chí nhiều người dùng và là hệ QTCSDL miễn phí?”- GV yêu cầu HS thảo luận nhóm đôi, đọc thông tin trong SGK và thực hiện nhiệm vụ:+ Nêu cách cài đặt và làm việc với MySQL.+ Nêu cách cài đặt và làm việc với phần mềm HeidiSQL.- Dựa vào kiến thức vừa nêu, GV yêu cầu HS trả lời câu hỏi củng cố trang 85 SGK: + Khi cài đặt MySQL, phần mềm cài đặt có yêu cầu em làm điều gì mà cần phải ghi nhớ để sau đó có thể đăng nhập vào MySQL không?- Trên cơ sở kiến thức vừa nêu, GV yêu cầu HS kết luận về hệ quản trị cơ sở dữ liệu MySQL và phần mềm HeidiSQL.Bước 2: HS thực hiện nhiệm vụ học tập: - HS sử dụng công cụ số tìm hiểu kiến thức.- HS thảo luận nhóm, đọc SGK và trả lời câu hỏi.Bước 3: Báo cáo kết quả hoạt động, thảo luận: - Đại diện nhóm HS trình bày.*Hoạt động 2 trang 82 SGK:+ Nếu được lựa chọn, một hệ QTCSDL phổ biến và miễn phí mà có thể đáp ứng được các tiêu chí của nhiều người dùng là MySQL.*Câu hỏi củng cố trang 85 SGK:+ Khi cài đặt MySQL, phần mềm cài đặt yêu cầu cần phải ghi nhớ mật khẩu của tài khoản người dùng root.- Các nhóm khác nhận xét, bổ sung cho nhóm bạn.Bước 4: Đánh giá kết quả thực hiện: - GV nhận xét, đánh giá kết quả thảo luận của HS.- GV tổng kết kiến thức và yêu cầu HS ghi chép vào vở. | 2. Hệ quản trị cơ sở dữ liệu MySQL và phần mềm Heidisqla) Cài đặt và làm việc với MySQL - Truy cập trang dev.mysql.com/downloads/mysql/ hoặc downloads.mysql.cpm/archives/installer để tải về một trong các bản: Bản cài tự động, Bản gọn nhẹ và Bản đầy đủ.- MySQL có sẵn phần mềm khách giúp người dùng có thể kết nối, làm việc với MySQL.b) Phần mềm HeidiSQL- Heidi MySQL là một phần mềm mã nguồn mở, miễn phí, giúp kết nối, làm việc với nhiều hệ QTCSDL.- Truy cập trang www.heidisql.com/download.php để tải về một trong hai bản sau: Bản cài tự động và Bản Portable.☞ Kết luận:- MySQL và HeidiSQL là các phần mềm mã nguồn mở, được nhiều người dùng để quản trị các CSDL. | 1.1.NC1b: Áp dụng được kỹ thuật tìm kiếm để lấy được dữliệu, thông tin và nội dung trong môi trường số.- 5.2.NC1b: HS thực hiện quy trình cài đặt phần mềm hệ thống.- 4.1.NC1a: HS thực hiện thiết lập bảo mật cho tài khoản quản trị cao nhất (root); tạo mật khẩu đủ mạnh trong quá trình cài đặt MySQL để ngăn chặn truy cập trái phép vào cơ sở dữ liệu, thể hiện ý thức bảo vệ an ninh dữ liệu.- 6.1.NC1a: HS phân biệt được mô hình Khách - Chủ (Client-Server); hiểu rằng MySQL là một “Dịch vụ nền” (Service) chạy ngầm để quản lý dữ liệu, còn HeidiSQL chỉ là công cụ giao diện để kết nối vào đó.
3. HOẠT ĐỘNG LUYỆN TẬP
a) Mục tiêu: HS củng cố kiến thức về bảo mật và an toàn hệ cơ sở dữ liệu.
b) Nội dung: HS trả lời câu hỏi trắc nghiệm và hoàn thành bài tập phần Luyện tập SGK trang 85.
c) Sản phẩm học tập: Gợi ý trả lời câu hỏi về bảo mật và an toàn hệ cơ sở dữ liệu.
d) Tổ chức thực hiện: 
Bước 1: GV chuyển giao nhiệm vụ: 
- GV tổ chức trò chơi trắc nghiệm nhanh trên Quizizz hoặc Kahoot để củng cố toàn bài.
- GV cung cấp mã QR hoặc đường Links cho HS làm Phiếu bài tập, trả lời nhanh một số câu hỏi trắc nghiệm tổng kết bài học.
Câu 1: Do đâu mà Quản lý CSDL trên máy tính cung cấp khả năng kiểm soát truy cập và độ bảo mật cao hơn so với quản lý thủ công?
A. Dữ liệu trong CSDL có thể được tìm kiếm, lọc, và phân tích theo nhiều tiêu chí khác nhau trong thời gian ngắn, giúp người quản lý dễ dàng đưa ra quyết định hoặc tìm kiếm thông tin cần thiết.
B. Các hoạt động cập nhật và chỉnh sửa dữ liệu trên máy tính thường được tự động hóa và có thể được thực hiện đồng thời trên nhiều bản ghi, giúp tiết kiệm thời gian và giảm bớt công sức so với quản lý thủ công mà phải xử lý từng bản ghi một
C. Được trải nghiệm nhiều tính năng khác nhau: nghe, gọi, chơi trò chơi, xem video...
D. Dữ liệu trong CSDL có thể được bảo vệ bằng các biện pháp bảo mật như mã hóa
Câu 2: MySQL có hạn chế nào sau đây?
A. Dễ sử dụng
B. Miễn phí
C. Giao diện dòng lệnh không thuận tiện với người dùng mới
D. Tốc độ xử lí nhanh
Câu 3: Đâu không phải lí do để thay đổi thói quen quản lí thủ công, chuyển sang sử dụng máy tính với hệ QTCSDL?
A. Tiện lợi, kịp thời
B. Nhanh chóng hơn
C. Hạn chế sai sót
D. Miễn phí
Câu 4: Do đâu mà Quản lý CSDL trên máy tính thường nhanh chóng, tiết kiệm thời gian và công sức hơn so với quản lý thủ công?
A. Dữ liệu trong CSDL có thể được tìm kiếm, lọc, và phân tích theo nhiều tiêu chí khác nhau trong thời gian ngắn, giúp người quản lý dễ dàng đưa ra quyết định hoặc tìm kiếm thông tin cần thiết.
B. Các hoạt động cập nhật và chỉnh sửa dữ liệu trên máy tính thường được tự động hóa và có thể được thực hiện đồng thời trên nhiều bản ghi, giúp tiết kiệm thời gian và giảm bớt công sức so với quản lý thủ công mà phải xử lý từng bản ghi một
C. Được trải nghiệm nhiều tính năng khác nhau: nghe, gọi, chơi trò chơi, xem video...
D. Dữ liệu trong CSDL có thể được bảo vệ bằng các biện pháp bảo mật như mã hóa
Câu 5: Hệ thống quản lý dự án giúp?
A. Đồng bộ thông tin giữa các bộ phận khác
B. Dự đoán và quản lý nhu cầu cung cấp, và cải thiện quy trình đặt hàng và vận chuyển
C. Mạch tích hợp (IC)
D. Đơn giản hóa quá trình tuyển dụng
- GV tổ chức cho HS làm bài tập phần Luyện tập trang 85 SGK:
Thực hành cài đặt MySQL và cài đặt HeidiSQL.
Bước 2: HS thực hiện nhiệm vụ học tập: 
- HS hoàn thành bài tập GV yêu cầu.
- GV quan sát và hỗ trợ, hướng dẫn.
Bước 3: Báo cáo kết quả hoạt động, thảo luận: 
- HS xung phong báo cáo bài tập mình làm.
- Các HS khác nhận xét, bổ sung bài làm của bạn.
Gợi ý trả lời: 
[BẢNG] Câu 1 | Câu 2 | Câu 3 | Câu 4 | Câu 5
[BẢNG] D | C | D | B | A
[2.1.NC1a: HS thực hiện các tương tác được xác định rõ ràng với công nghệ số (làm bài tập online) trong lớp học.]
Luyện tập (yêu cầu HS cài đặt MySQL và HeidiSQL trên máy tính tại phòng máy).
[5.2.NC1b: HS thực hiện quy trình cài đặt MySQL và HeidiSQL.]
Bước 4: Đánh giá kết quả thực hiện: 
- GV nhận xét, tuyên dương các hoạt động tốt, nhanh và chính xác.
4. HOẠT ĐỘNG VẬN DỤNG
a) Mục tiêu: HS vận dụng được kiến thức trả lời câu hỏi vận dụng trang 85 SGK.
b) Nội dung: HS vận dụng hiểu biết của bản thân để làm bài tập phần câu hỏi vận dụng trang 85 SGK. 
c) Sản phẩm: Hướng dẫn trả lời câu hỏi vận dụng trang 85 SGK.
d) Tổ chức thực hiện: 
Bước 1: GV chuyển giao nhiệm vụ
- GV yêu cầu HS hoàn thành bài tập phần Vận dụng SGK trang 85:
Truy cập Internet với các cụm từ khóa thích hợp để tìm hiểu thêm thông tin về MySQL và HeidiSQL.
Bước 2: HS thực hiện nhiệm vụ học tập
- HS thiết kế bảng dữ liệu và xác định khóa chính, khóa ngoài của các bảng đó.
- GV điều hành, quan sát, hỗ trợ.
Bước 3: Báo cáo kết quả hoạt động, thảo luận
- HS trình bày kết quả.
 Bước 4: Đánh giá kết quả thực hiện
- GV nhận xét, tuyên dương, kết thúc tiết học.
[1.1.NC1b: Áp dụng được kỹ thuật tìm kiếm để lấy được dữ liệu, thông tin và nội dung trong môi trường số.]
* HƯỚNG DẪN VỀ NHÀ
Ghi nhớ kiến thức trong bài. 
Hoàn thành các bài tập trong SBT.
Chuẩn bị bài mới Bài 18 – Thực hành xác định cấu trúc bảng và các trường khóa. ```  </details> 
