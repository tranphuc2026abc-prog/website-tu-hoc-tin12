# Bài 19. THỰC HÀNH TẠO LẬP  > Học liệu được chuẩn hóa từ KHBD khối 11; nội dung gốc được giữ đầy đủ ở phần cuối để đối chiếu.  ## Chủ đề True  ## Mục tiêu kiến thức từ KHBD  True  ## Trọng tâm hoạt động  Hoạt động 1: Tạo lập CSDL mymusic
Hoạt động 2: Tạo lập bảng  ## KHBD đầy đủ đã chuyển định dạng  <details> <summary>Mở toàn bộ nội dung trích xuất từ tài liệu Word</summary>  ```text Ngày soạn: .../.../...
Ngày dạy: .../.../...
BÀI 19: THỰC HÀNH TẠO LẬP
CƠ SỞ DỮ LIỆU VÀ CÁC BẢNG
I. MỤC TIÊU
1. Kiến thức
Học xong bài này, HS đạt các yêu cầu sau:
Biết tạo mới một CSDL, thực hiện thông qua giao diện của phần mềm khách quản trị CSDL HeidiSQL.
Tạo được các bảng không có khóa ngoài, chỉ định được khóa chính cho mỗi bảng, khóa cấm trùng lặp cho những trường không được có giá trị trùng lặp.
2. Năng lực 
Năng lực chung:
Tự chủ và tự học: biết lắng nghe, tự giác học tập và hoàn thành nhiệm vụ; tích cực tham gia các hoạt động học tập trong lớp.
Giao tiếp và hợp tác: có thói quen trao đổi, giúp đỡ nhau trong học tập; biết cùng nhau hoàn thành nhiệm vụ học tập theo sự hướng dẫn của GV.
Giải quyết vấn đề và sáng tạo: ứng dụng các kiến thức đã học vào thực tế, phát triển khả năng giải quyết vấn đề có tính tích hợp liên môn giữa Tin học với các môn học khác.
Năng lực riêng: 
Giải quyết vấn đề với sự hỗ trợ của công nghệ thông tin và truyền thông: Biết được cách tạo lập CSDL và các bảng; Nâng cao kĩ năng sử dụng máy tính, phần mềm.
Năng lực số:
5.2.NC1b: Sử dụng thành thạo phần mềm HeidiSQL để tạo CSDL.
1.3.NC1b: Triển khai được việc tổ chức và sắp xếp dữ liệu, thông tin và nội dung trong môi trường có cấu trúc (bảng).
3.1.NC1a: Thiết kế cấu trúc dữ liệu.
1.1.NC1a: Xác định đúng kiểu dữ liệu cho các trường thông tin.
3. Phẩm chất
Trách nhiệm, tính cẩn thận, chăm chỉ trong học tập và công việc.
II. THIẾT BỊ DẠY HỌC VÀ HỌC LIỆU 
1. Đối với GV 
KHBD, tài liệu giảng dạy, giáo án PPT.
Phòng thực hành máy tính đã cài đặt MySQL và HeidiSQL, kết nối Internet.
Máy chiếu.
Video AI tạo bằng công cụ AI được dùng để khởi động bài học.
2. Đối với HS 
SGK, SBT Tin học 11, vở ghi chép.
III. TIẾN TRÌNH DẠY HỌC
1. HOẠT ĐỘNG KHỞI ĐỘNG 
a) Mục tiêu: Đặt HS vào tình huống thực tiễn chứa đựng vấn đề cần giải quyết. 
b) Nội dung: HS đọc thông tin được cung cấp và đưa ra cách giải quyết tình huống.
c) Sản phẩm: Gợi ý trả lời câu hỏi Phần khởi động và cách giải quyết tình huống.
d) Tổ chức thực hiện: 
Bước 1: GV chuyển giao nhiệm vụ: 
- GV yêu cầu xem video AI được thiết kế để phục vụ bài dạy và trả lời câu hỏi xuất hiện trong video đó.
- GV dẫn dắt, đặt vấn đề cho HS: Ở bài học trước chúng ta đã thực hành xây dựng cấu trúc CSDL website âm nhạc bao gồm 4 bảng với các tên bảng, tên trường, kiểu dữ liệu của từng trường; cũng như xác định tất cả các trường khóa.
- GV đặt câu hỏi cho HS trả lời: Tuy nhiên, làm thế nào để tạo ra CSDL và các bảng dữ liệu trên máy tính? Có thể sử dụng HeidiSQL để tạo ra CSDL trên MySQL được không? Như thế nào?
Bước 2: HS thực hiện nhiệm vụ học tập: 
- HS xem video và suy nghĩ câu trả lời.
- HS thảo luận, suy nghĩ câu trả lời.
Bước 3: Báo cáo kết quả hoạt động, thảo luận: 
- GV gọi đại diện một số HS trả lời.
- HS khác nhận xét, bổ sung.
Bước 4: Đánh giá kết quả thực hiện: 
- GV nhận xét, đánh giá và kết luận.
[6.1.NC1a: HS sử dụng công cụ AI hoặc sản phẩm số do GV cung cấp để tiếp nhận thông tin, trả lời câu hỏi đơn giản.
2.1.NC1a: HS thực hiện các tương tác cơ bản với học liệu số (xem video, trả lời câu hỏi trên môi trường số).
1.1.NC1a: HS tiếp cận, khai thác được thông tin từ nguồn học liệu số dưới sự hướng dẫn của GV.]
- GV dẫn dắt HS vào bài học mới – Chúng ta sẽ bắt đầu với việc tạo lập CSDL và tạo lập các bảng đơn giản không có khóa ngoài - Bài 19: Thực hành tạo lập cơ sở dữ liệu và các bảng.
2. HOẠT ĐỘNG THỰC HÀNH
Hoạt động 1: Tạo lập CSDL mymusic
a) Mục tiêu: HS thực hiện tạo lập CSDL mới tên là mymusic.
b) Nội dung: GV hướng dẫn HS tạo lập CSDL mymusic.
c) Sản phẩm: HS tạo lập CSDL mymusic.
d) Tổ chức thực hiện:
[BẢNG] HOẠT ĐỘNG CỦA GV VÀ HS | SẢN PHẨM DỰ KIẾN | NLS
[BẢNG] Bước 1: GV chuyển giao nhiệm vụ:- GV chiếu hình ảnh thao tác tạo lập CSDL mymusic (hình 19.1) cho HS quan sát và hướng dẫn HS thực hiện thao tác tạo lập CSDL mymusic.- GV yêu cầu HS: Sử dụng AI tìm hiểu bộ mã kí tự utf8mb4.Bước 2: HS thực hiện nhiệm vụ học tập: - HS tạo lập CSDL mymusic trên máy tính.- HS sử dụng AI tìm hiểu kiến thức.- GV hỗ trợ, quan sát.Bước 3: Báo cáo kết quả hoạt động, thảo luận: - Đại diện HS lên bảng thực hiện thao tác.- HS còn lại quan sát, nhận xét. - HS đọc kết quả từ AI.Bước 4: Đánh giá kết quả thực hiện: - GV nêu nhận xét, chuyển sang nhiệm vụ thực hành tiếp theo. | 1. Tạo lập CSDL mymusic- Nháy nút phải chuột ở vùng danh sách các CSDL đã có, chọn thẻ Tạo mới, chọn Cơ sở dữ liệu. Nhập mymusic, chọn OK.- Bộ mã kí tự mặc định là Unicode 4 type: utf8mb4, đối chiếu so sánh xâu theo utf8mb4_general_ci.Lưu ý: Giống như tên các biến trong việc lập chương trình tên CSDL không được chứa các kí tự đặc biệt, bao gồm kí tự trống và kí tự tiếng Việt. | - 5.2.NC1b: Sử dụng thành thạo phần mềm HeidiSQL để lập CSDL.- 1.1.NC1a: HS nhận diện và lựa chọn chính xác bảng mã utf8mb4, thể hiện sự hiểu biết về yêu cầu biểu diễn ngôn ngữ tự nhiên trong hệ thống số.
Hoạt động 2: Tạo lập bảng
a) Mục tiêu: HS thực hiện khai báo tạo lập bảng, các trường và kiểu dữ liệu, khai báo khóa chính và lưu kết quả.
b) Nội dung: GV hướng dẫn HS tạo lập bảng.
c) Sản phẩm: HS tạo lập bảng, các trường và kiểu dữ liệu, khai báo khóa chính và lưu kết quả.
d) Tổ chức thực hiện:
[BẢNG] HOẠT ĐỘNG CỦA GV VÀ HS | SẢN PHẨM DỰ KIẾN | NLS
[BẢNG] Bước 1: GV chuyển giao nhiệm vụ:- GV hướng dẫn HS tạo lập bảng nhacsi (idNhacsi, tenNhacsi), idNhacsi kiểu INT, tenNhacsi kiểu VARCHAR (255).- GV hình ảnh khai báo tên bảng, thêm mới một trường (hình 19.2), hình ảnh khai báo trường kiểu INT, not NULL (hình 19.3) hình ảnh khai báo trường AUTO_INCREMENT (hình 19.4) và hình khai báo trường kiểu VARCHAR (hình 19.5) cho HS quan sát và thực hiện theo từng bước.- GV chiếu hình ảnh bảng chọn để khai báo khóa chính (hình 19.6), hình minh họa khai báo nhầm khóa chính (hình 19.7), hình thao tác sửa khóa chính (hình 19.8) và hình kết quả chỉnh sửa khóa chính (hình 19.9) cho HS quan sát và hướng dẫn HS thực hiện từng bước khai báo khóa chính theo SGK.- GV chiếu hình ảnh kết quả tạo lập bảng (hình 19.10) cho HS quan sát và hướng dẫn HS lưu kết quả.- GV tổng kết về nội dung tạo lập bảng.Bước 2: HS thực hiện nhiệm vụ học tập: - HS đọc SGK, quan sát và trả lời câu hỏi nhiệm vụ.Bước 3: Báo cáo kết quả hoạt động, thảo luận: - HS xung phong trả lời.- Một số HS khác nhận xét, bổ sung cho bạn.Bước 4: Đánh giá kết quả thực hiện: - GV nhận xét, đánh giá kết của HS.- GV tổng kết kiến thức và yêu cầu HS ghi chép vào vở. | 2. Tạo lập bảnga) Khai báo tạo lập bảng, các trường và kiểu dữ liệu- Tạo lập bảng nhacsi (idNhacsi, tenNhacsi), idNhacsi kiểu INT, tenNhacsi kiểu VARCHAR (255).- Nháy nút phải chuột ở vùng danh sách các CSDL đã có, chọn thẻ Tạo mới, chọn Bảng. Nhập tên: nhacsi, chọn Thêm mới để thêm trường.- Nhập tên: idNhacsi, chọn kiểu dữ liệu INT, bỏ đánh dấu ô Allow NULL.- Chọn AUTO_INCREMENT, dưới nhãn Mặc định và chọn OK.- Để thêm khai báo trường tiếp theo, nhấn Ctrl+Insert hoặc nháy nút phải chuột vào phần dưới dòng idNhacsi và chọn Add column.- Nhập: tenNhacsi, chọn kiểu VARCHAR, độ dài 255, giá trị mặc định là kí tự rỗng ''.b) Khai báo khóa chính- Ấn định idNhacsi là khóa chính: Nháy nút phải chuột vào dòng khai báo idNhacsi và chọn Create new index   PRIMARY.- Để sửa khóa chính đã khai báo nhầm này, hãy nháy đúp chuột vào ô tenNhacsi ở dưới ô PRIMARY KEY ở phần trên và chọn lại idNhacsi.- Sau đó nháy chuột vào ô bên cạnh dưới ô PRIMARY.c) Lưu kết quả- Cuối cùng chọn Lưu để lưu lại khai báo bảng nhacsi. Ở vùng hiển thị phía trái sẽ xuất hiện tên bảng nhacsi dưới dòng tên CSDL mymusic. | - 5.2.NC1b: Sử dụng thành thạo phần mềm HeidiSQL để tạo bảng.- 3.1.NC1a: Thiết kế cấu trúc dữ liệu.- 1.1.NC1a: Xác định đúng kiểu dữ liệu cho các trường thông tin.
3. HOẠT ĐỘNG LUYỆN TẬP
a) Mục tiêu: HS củng cố kĩ năng tạo lập cơ sở dữ liệu và các bảng.
b) Nội dung: HS hoàn thành bài tập phần Luyện tập SGK trang 94.
c) Sản phẩm học tập: Kết quả thực hành của HS.
d) Tổ chức thực hiện: 
Bước 1: GV chuyển giao nhiệm vụ: 
- GV tổ chức cho HS làm bài tập phần Luyện tập SGK trang 94:
Khai báo tạo lập bảng "casi" như thiết kế ở Bài 18.
Bước 2: HS thực hiện nhiệm vụ học tập: 
- HS hoàn thành bài tập GV yêu cầu.
- GV quan sát và hỗ trợ, hướng dẫn.
Bước 3: Báo cáo kết quả hoạt động, thảo luận: 
- HS thực hiện các bài tập.
Đáp án:
Các thao tác hoàn toàn tương tự như khai báo tạo lập bảng
Nhacsi (idNhacsi, tenNhacsi)
Bước 4: Đánh giá kết quả thực hiện: 
- GV chữa bài, chốt đáp án, tuyên dương các hoạt động tốt, nhanh và chính xác.
[5.2.NC1b: Sử dụng thành thạo phần mềm HeidiSQL để tạo bảng.
3.1.NC1a: Thiết kế cấu trúc dữ liệu.
1.1.NC1a: Xác định đúng kiểu dữ liệu cho các trường thông tin.]
4. HOẠT ĐỘNG VẬN DỤNG
a) Mục tiêu: HS thực hiện làm bài tập Vận dụng để nắm vững kiến thức.
b) Nội dung: HS vận dụng kiến thức đã học và hiểu biết của bản thân để làm bài tập Vận dụng SGK trang 14. 
c) Sản phẩm: Hướng dẫn trả lời câu hỏi vận dụng trang 94 SGK.
d) Tổ chức thực hiện: 
Bước 1: GV chuyển giao nhiệm vụ
- GV yêu cầu HS hoàn thành bài tập phần Vận dụng SGK trang 94.
Hãy lập CSDL quản lí tên các Quận/Huyện, Tỉnh/Thành phố của Việt Nam. Tạo bảng Tỉnh/Thành phố.
Bước 2: HS thực hiện nhiệm vụ học tập
- GV điều hành, quan sát, hỗ trợ.
Bước 3: Báo cáo kết quả hoạt động, thảo luận
- HS thực hiện bài tập.
Hướng dẫn:
- Tạo lập CSDL tinhhuyen tương tự thao tác tạo lập CSDL mymusic.
- Khai báo tạo lập bảng tinh (idTinh, tenTinh) tương tự như thao tác khai báo tạo lập bảng nhacsi (idNhacsi, tenNhacsi).
Bước 4: Đánh giá kết quả thực hiện
- GV nhận xét, đánh giá, đưa ra một vài ý mà HS còn thiếu, chốt đáp án.
- GV kết thúc tiết học.
[5.2.NC1b: Sử dụng thành thạo phần mềm HeidiSQL để lập CSDL, tạo các bảng.
3.1.NC1a: Thiết kế cấu trúc dữ liệu.
1.1.NC1a: Xác định đúng kiểu dữ liệu cho các trường thông tin.]
* HƯỚNG DẪN VỀ NHÀ
Ghi nhớ kiến thức trong bài. 
Hoàn thành các bài tập trong SBT.
Chuẩn bị bài mới Bài 20 – Thực hành tạo lập bảng có khóa ngoài. ```  </details> 
