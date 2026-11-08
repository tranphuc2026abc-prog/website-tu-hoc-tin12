# Bài 21. THỰC HÀNH CẬP NHẬT VÀ TRUY XUẤT DỮ LIỆU CÁC BẢNG  > Học liệu được chuẩn hóa từ KHBD khối 11; nội dung gốc được giữ đầy đủ ở phần cuối để đối chiếu.  ## Chủ đề True  ## Mục tiêu kiến thức từ KHBD  True  ## Trọng tâm hoạt động  Hoạt động 1: Thêm mới dữ liệu vào bảng nhacsi
Hoạt động 2: Chỉnh sửa dữ liệu trong bảng nhacsi
Hoạt động 3: Xóa dòng dữ liệu trong bảng nhacsi
Hoạt động 4: Truy xuất dữ liệu từ bảng nhacsi
Hoạt động 5: Truy xuất dữ liệu với câu truy vấn SQL  ## KHBD đầy đủ đã chuyển định dạng  <details> <summary>Mở toàn bộ nội dung trích xuất từ tài liệu Word</summary>  ```text Ngày soạn: .../.../...
Ngày dạy: .../.../...
BÀI 21: THỰC HÀNH CẬP NHẬT VÀ TRUY XUẤT DỮ LIỆU CÁC BẢNG
I. MỤC TIÊU:
1. Kiến thức
Học xong bài này, HS đạt các yêu cầu sau:
Biết cách cập nhật và truy xuất CSDL.
2. Năng lực 
Năng lực chung:
Tự chủ và tự học: biết lắng nghe, tự giác học tập và hoàn thành nhiệm vụ; tích cực tham gia các hoạt động học tập trong lớp.
Giao tiếp và hợp tác: có thói quen trao đổi, giúp đỡ nhau trong học tập; biết cùng nhau hoàn thành nhiệm vụ học tập theo sự hướng dẫn của GV.
Giải quyết vấn đề và sáng tạo: ứng dụng các kiến thức đã học vào thực tế, phát triển khả năng giải quyết vấn đề có tính tích hợp liên môn giữa Tin học với các môn học khác.
Năng lực riêng: 
Giải quyết vấn đề với sự hỗ trợ của công nghệ thông tin và truyền thông: Biết được cách cập nhật và truy xuất dữ liệu các bảng đơn giản không có khóa ngoài; Nâng cao kĩ năng sử dụng máy tính, phần mềm.
Năng lực số:
6.2.NC1a: Sử dụng Chatbot AI để tự động sinh mã SQL (Text-to-SQL) từ yêu cầu ngôn ngữ tự nhiên, giúp giảm thiểu lỗi cú pháp và tăng tốc độ nhập liệu.
1.2.NC1a: Phân tích tính logic của dữ liệu để xác định trình tự nhập liệu đúng (nhập bảng cha trước, bảng con sau) và đảm bảo tính toàn vẹn tham chiếu.
6.1.NC1a: Chẩn đoán nguyên nhân các lỗi cơ sở dữ liệu phổ biến (Lỗi 1452: Cannot add or update a child row...) và áp dụng giải pháp khắc phục.
5.2.NC1a: Viết và thực thi các kịch bản SQL để quản lý thông tin trong CSDL MyMusic.
3. Phẩm chất
Trách nhiệm, tính cẩn thận, chăm chỉ trong học tập và công việc.
II. THIẾT BỊ DẠY HỌC VÀ HỌC LIỆU 
1. Đối với GV
SGK, tài liệu giảng dạy, giáo án PPT.
Máy tính, máy chiếu.
Video AI tạo bằng công cụ AI được dùng để khởi động bài học.
2. Đối với HS
SGK, SBT, vở ghi.
Thiết bị di động/máy tính có kết nối Internet (sử dụng theo nhóm).
III. TIẾN TRÌNH DẠY HỌC
A. HOẠT ĐỘNG KHỞI ĐỘNG 
a) Mục tiêu: Đặt HS vào tình huống thực tiễn chứa đựng vấn đề về cập nhật và truy xuất dữ liệu các bảng. 
b) Nội dung: HS đọc thông tin được cung cấp và đưa ra cách giải quyết tình huống.
c) Sản phẩm: Gợi ý trả lời câu hỏi Phần khởi động và cách giải quyết tình huống.
d) Tổ chức thực hiện: 
Bước 1: GV chuyển giao nhiệm vụ: 
- GV yêu cầu xem video AI được thiết kế để phục vụ bài dạy và trả lời câu hỏi xuất hiện trong video đó.
- GV dẫn dắt, đặt vấn đề cho HS: Cập nhật và truy xuất dữ liệu là hai công việc chính khi làm việc với một CSDL.
- GV đặt câu hỏi cho HS trả lời: HeidiSQL hỗ trợ việc thực hiện các công việc đó như thế nào với những bảng đơn giản, không có khóa ngoài?
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
- GV đánh giá kết quả của HS, trên cơ sở đó dẫn dắt HS vào bài học mới – Bài 21: Thực hành cập nhật và truy xuất dữ liệu các bảng.
B. HOẠT ĐỘNG THỰC HÀNH
Hoạt động 1: Thêm mới dữ liệu vào bảng nhacsi
a) Mục tiêu: HS thực hiện thêm mới dữ liệu vào bảng nhacsi.
b) Nội dung: GV hướng dẫn HS thêm mới dữ liệu vào bảng.
c) Sản phẩm: HS thực hành thêm mới dữ liệu vào bảng nhacsi.
d) Tổ chức thực hiện:
[BẢNG] HOẠT ĐỘNG CỦA GV VÀ HS | SẢN PHẨM DỰ KIẾN | NLS
[BẢNG] Bước 1: GV chuyển giao nhiệm vụ - GV chiếu hình ảnh giao diện của thẻ dữ liệu (hình 21.1) cho HS quan sát và nhận xét bảng dữ liệu có hai trường idNhacsi và tenNhacsi nhưng chưa có dữ liệu.- GV hướng dẫn HS thêm mới dữ liệu theo nội dung SGK và chiếu hình ảnh giao diện thêm mới dữ liệu (hình 21.2) cho HS quan sát.- GV hướng dẫn HS nhập thêm dữ liệu và chiếu hình ảnh giao diện kết quả nhập dữ liệu (hình 21.3) cho HS quan sát và đối chiếu.- GV kết luận về nội dung thêm mới dữ liệu vào bảng nhacsi.Bước 2: HS thực hiện nhiệm vụ học tập: - HS thực hiện thêm mới dữ liệu vào bảng nhacsi.- GV hỗ trợ, quan sát.Bước 3: Báo cáo kết quả hoạt động, thảo luận: - Đại diện HS lên bảng thực hiện thao tác.- HS còn lại quan sát, nhận xét. Bước 4: Đánh giá kết quả thực hiện: - GV nêu nhận xét, chuyển sang nhiệm vụ thực hành tiếp theo. | 1. Thêm mới dữ liệu vào bảng nhacsi- Chọn bảng nhacsi, chọn thẻ Dữ liệu, ta thấy hai trường idNhacsi và tenNhacsi nhưng chưa có dữ liệu.- Để thêm vào một hàng dữ liệu mới có thể nhấn phím Insert hoặc chọn biểu tượng  hay nháy nút phải chuột lên vùng dữ liệu của bảng và chọn Chèn hàng. Một hàng dữ liệu rỗng sẽ xuất hiện. Tiếp theo nháy đúp chuột vào từng ô trên hàng đó để nhập dữ liệu tương ứng cho từng trường.- Trường idNhacsi có kiểu INT, AUTO_INCREMENT (tự động điền giá trị) nên không cần nhập dữ liệu cho trường này. Nháy đúp chuột vào ô ở cột tenNhacsi để nhập tên Nhạc sĩ, nhấn phím Enter, sau đó nhấn phím Insert để nhập hàng mới.- Tiếp tục thực hành nhập thêm dữ liệu để nắm vững những thao tác nhập dữ liệu. | - 1.1.NC1a: Tổ chức, lưu trữ và quản lý dữ liệu.- 2.4.NC1a: Vận hành thiết bị và phần mềm.
Hoạt động 2: Chỉnh sửa dữ liệu trong bảng nhacsi 
a) Mục tiêu: HS thực hiện chỉnh sửa dữ liệu trong bảng nhacsi.
b) Nội dung: GV hướng dẫn HS chỉnh sửa dữ liệu trong bảng.
c) Sản phẩm: HS thực hành chỉnh sửa dữ liệu trong bảng nhacsi.
d) Tổ chức thực hiện:
[BẢNG] HOẠT ĐỘNG CỦA GV VÀ HS | SẢN PHẨM DỰ KIẾN | NLS
[BẢNG] Bước 1: GV chuyển giao nhiệm vụ- GV chiếu hình ảnh minh họa dữ liệu có lỗi (hình 21.4) cho HS quan sát và yêu cầu HS chỉ ra lỗi sai trong hình trên.- GV hướng dẫn HS chỉnh sửa lỗi sai theo SGK và chiếu hình ảnh kết quả sửa lỗi (hình 21.5) cho HS quan sát.- GV kết luận về nội dung chỉnh sửa dữ liệu trong bảng nhacsi.Bước 2: HS thực hiện nhiệm vụ học tập: - HS thực hiện chỉnh sửa dữ liệu trong bảng nhacsi.- GV hỗ trợ, quan sát.Bước 3: Báo cáo kết quả hoạt động, thảo luận: - Đại diện HS lên bảng thực hiện thao tác.- HS còn lại quan sát, nhận xét. Bước 4: Đánh giá kết quả thực hiện: - GV nêu nhận xét, chuyển sang nhiệm vụ thực hành tiếp theo. | 2. Chỉnh sửa dữ liệu trong bảng nhacsi - Nháy đúp chuột vào ô dữ liệu cần sửa và nhập lại. | - 1.2.NC1a: Xử lý và phân tích dữ liệu, thông tin.- 2.4.NC1a: Vận hành thiết bị và phần mềm.- 6.1.NC1a: Xác định nhu cầu và giải quyết vấn đề kỹ thuật.
Hoạt động 3: Xóa dòng dữ liệu trong bảng nhacsi 
a) Mục tiêu: HS thực hiện xóa dòng dữ liệu trong bảng nhacsi.
b) Nội dung: GV hướng dẫn HS xóa dòng dữ liệu trong bảng.
c) Sản phẩm: HS thực hành xóa dòng dữ liệu trong bảng nhacsi.
d) Tổ chức thực hiện:
[BẢNG] HOẠT ĐỘNG CỦA GV VÀ HS | SẢN PHẨM DỰ KIẾN | NLS
[BẢNG] Bước 1: GV chuyển giao nhiệm vụ:- GV giới thiệu để xóa các dòng dữ liệu trong bảng nhacsi cần đánh dấu dữ liệu những dòng mong muốn như hình 21.6.- GV hướng dẫn HS xóa dòng dữ liệu trong bảng theo SGK và phần mềm sẽ có lời nhắc yêu cầu khẳng định muốn xóa (hình 21.7), nếu chắc chắn muốn xóa, nháy chuột OK.- GV kết luận về nội dung xóa dòng dữ liệu trong bảng nhacsi.Bước 2: HS thực hiện nhiệm vụ học tập: - HS thực hiện xóa dòng dữ liệu trong bảng nhacsi.- GV hỗ trợ, quan sát.Bước 3: Báo cáo kết quả hoạt động, thảo luận: - Đại diện HS lên bảng thực hiện thao tác.- HS còn lại quan sát, nhận xét. Bước 4: Đánh giá kết quả thực hiện: - GV nêu nhận xét, chuyển sang nhiệm vụ thực hành tiếp theo. | 3. Xóa dòng dữ liệu trong bảng nhacsi - Để xóa các dòng dữ liệu trong bảng nhacsi, hãy đánh dấu những dòng muốn chọn.- Nhấn tổ hợp phím Ctrl+Delete trên bàn phím hoặc chọn biểu tượng  để xóa. Phần mềm sẽ có lời nhắc yêu cầu khẳng định muốn xóa. Nếu chắc chắn muốn xóa, nháy chuột chọn OK. | - 1.2.NC1a: Xử lý và phân tích dữ liệu, thông tin.- 2.4.NC1a: Vận hành thiết bị và phần mềm.- 6.1.NC1a: Xác định nhu cầu và giải quyết vấn đề kỹ thuật.
Hoạt động 4: Truy xuất dữ liệu từ bảng nhacsi 
a) Mục tiêu: HS thực hiện truy xuất dữ liệu từ bảng nhacsi.
b) Nội dung: GV hướng dẫn HS truy xuất dữ liệu từ bảng.
c) Sản phẩm: HS thực hành truy xuất dữ liệu từ bảng nhacsi.
d) Tổ chức thực hiện:
[BẢNG] HOẠT ĐỘNG CỦA GV VÀ HS | SẢN PHẨM DỰ KIẾN | NLS
[BẢNG] Bước 1: GV chuyển giao nhiệm vụ:- GV hướng dẫn HS truy xuất đơn giản theo SGK và chiếu hình ảnh giao diện hiển thị dữ liệu trong bảng (hình 21.8) cho HS quan sát.- GV hướng dẫn HS truy xuất và sắp xếp kết quả theo thứ tự theo SGK và chiếu kết quả sắp xếp dữ liệu (hình 21.9) cho HS quan sát.- GV hướng dẫn lấy ra danh sách dữ liệu thỏa mãn yêu cầu và thực hiện thao tác bộ lọc như hình 21.10 và hình 21.11.- GV hướng dẫn HS xóa bộ lập đã thiết lập như hình 21.13.- GV kết luận về nội dung truy xuất dữ liệu từ bảng nhacsi.Bước 2: HS thực hiện nhiệm vụ học tập: - HS thực hiện truy xuất dữ liệu từ bảng nhacsi.- GV hỗ trợ, quan sát.Bước 3: Báo cáo kết quả hoạt động, thảo luận: - Đại diện HS lên bảng thực hiện thao tác.- HS còn lại quan sát, nhận xét. Bước 4: Đánh giá kết quả thực hiện: - GV nêu nhận xét, chuyển sang nhiệm vụ thực hành tiếp theo. | 4. Truy xuất dữ liệu từ bảng nhacsia) Truy xuất đơn giản- Để xem toàn bộ dữ liệu trong bảng nhacsi, chỉ cần chọn bảng nhacsi và thể Dữ liệu.b) Truy xuất và sắp xếp kết quả theo thứ tự- Nhìn trong danh sách dữ liệu kết xuất, có thể thấy bình thường dữ liệu được kết xuất theo thứ tự tăng dần của trường khóa chính idNhacsi. Nếu muốn kết xuất theo thứ tự giảm dần của idNhacsi, hãy nháy chuột vào ô idNhacsi. Hình tam giác màu đen sẽ xuất hiện và dữ liệu được kết xuất theo thứ tự giảm dần của idNhacsi.c) Tìm kiếm- Để lấy ra danh sách dữ liệu thỏa mãn một yêu cầu nào đó có thể thực hiện các thao tác bộ lọc: Nháy nút phải chuột vào vùng dữ liệu tenNhacsi, chọn Quick Filter, rồi chẳng hạn chọn LIKE "%...%". Nhập vào kí tự P.- Để xóa bộ lọc chọn Dọn dẹp và Lọc. | - 1.2.NC1a: Xử lý và phân tích dữ liệu, thông tin.- 2.2.NC1a: Chia sẻ và trao đổi thông tin.
Hoạt động 5: Truy xuất dữ liệu với câu truy vấn SQL 
a) Mục tiêu: HS thực hiện truy xuất dữ liệu với câu truy vấn SQL.
b) Nội dung: GV hướng dẫn HS truy xuất dữ liệu với câu truy vấn SQL.
c) Sản phẩm: HS thực hành truy xuất dữ liệu với câu truy vấn SQL.
d) Tổ chức thực hiện:
[BẢNG] HOẠT ĐỘNG CỦA GV VÀ HS | SẢN PHẨM DỰ KIẾN | NLS
[BẢNG] Bước 1: GV chuyển giao nhiệm vụ:- GV giới thiệu: Trong thực tế, người ta thường sử dụng câu truy vấn SQL vì nó nhanh chóng và hiệu quả hơn việc bấm chọn trong một giao diện đồ họa, nhất là với những truy xuất theo những yêu cầu phức tạp.- GV hướng dẫn HS sử dụng câu truy vấn SQL để truy xuất dữ liệu và chiếu hình ảnh giao diện nhập và thực hiện câu truy vấn dữ liệu (hình 21.14) cho HS quan sát.- GV kết luận về nội dung truy xuất dữ liệu với câu truy vấn SQL.Bước 2: HS thực hiện nhiệm vụ học tập: - HS thực hiện truy xuất dữ liệu từ bảng nhacsi.- GV hỗ trợ, quan sát.Bước 3: Báo cáo kết quả hoạt động, thảo luận: - Đại diện HS lên bảng thực hiện thao tác.- HS còn lại quan sát, nhận xét. Bước 4: Đánh giá kết quả thực hiện: - GV nêu nhận xét, chuyển sang nhiệm vụ thực hành tiếp theo.- GV tổng kết kiến thức và yêu cầu HS ghi chép vào vở. | 5. Truy xuất dữ liệu với câu truy vấn SQL- Cấu trúc cơ bản câu truy vấn vào một bảng dữ liệu như sau:SELECT danh_sách_các_trườngFROM tên_bảng[WHERE biểu_thức_điều_kiện][ORDER BY tên_trường_1 [ASC|DESC], tên_trường_2 [ASC|DESC],…] ];Trong đó:+ danh_sách_các_trường: liệt kê tên trường ngăn cách nhau bởi dấu phẩy, nếu muốn lấy tất cả các trường dùng ksi tự *.+ tên_bảng: khi làm việc với nhiều CSDL đồng thời, tên trường phải bao gồm cả tên CSDL.+ biểu_thức_điều_kiện: là biểu thức logic xác lập các điều kiện với các giá trị của các trường dữ liệu.- Cặp dấu [ ] biểu thị nội dung bên trong nó là một lựa chọn có thể dùng hoặc không dùng.- ASC|DESC: nghĩa là ASC hoặc DESC. ASC là viết tắt của Ascending – tăng dần,  DESC là viết tắt của Descending – giảm dần. | - 5.2.NC1a: HS viết các câu lệnh SQL đúng cú pháp để ra lệnh cho máy tính thực thi tác vụ.- 6.2.NC1a: HS chuyển đổi yêu cầu ngôn ngữ tự nhiên thành ngôn ngữ truy vấn cấu trúc.
C. HOẠT ĐỘNG LUYỆN TẬP
a) Mục tiêu: HS củng cố kĩ năng cập nhật và truy xuất dữ liệu các bảng.
b) Nội dung: HS hoàn thành bài tập phần Luyện tập SGK trang 104.
c) Sản phẩm học tập: Kết quả thực hành của HS.
d) Tổ chức thực hiện: 
Bước 1: GV chuyển giao nhiệm vụ: 
- GV tổ chức cho HS làm bài tập phần Luyện tập SGK trang 104:
Bài 1: Cập nhật dữ liệu vào bảng casi.
Bài 2: Truy xuất dữ liệu bảng casi theo các tiêu chí khác nhau.
Bước 2: HS thực hiện nhiệm vụ học tập: 
- HS hoàn thành bài tập GV yêu cầu.
- GV quan sát và hỗ trợ, hướng dẫn.
Bước 3: Báo cáo kết quả hoạt động, thảo luận: 
- HS thực hiện các bài tập.
Hướng dẫn:
Bài 1. Bảng casi (idCasi, tenCasi) có cấu trúc hoàn toàn tương tự bảng nhacsi (idNhacsi, tenNhacsi).
Bài 2. Thực hiện các thao tác hoàn toàn tương tự cập nhật, truy xuất bảng casi.
Bước 4: Đánh giá kết quả thực hiện: 
- GV chữa bài, chốt đáp án, tuyên dương các hoạt động tốt, nhanh và chính xác.
[1.2.NC1a: Xử lý và phân tích dữ liệu, thông tin.
2.4.NC1a: Vận hành thiết bị và phần mềm.
6.1.NC1a: Xác định nhu cầu và giải quyết vấn đề kỹ thuật.]
D. HOẠT ĐỘNG VẬN DỤNG
a) Mục tiêu: HS thực hiện làm bài tập Vận dụng để nắm vững kiến thức.
b) Nội dung: HS vận dụng kiến thức đã học và hiểu biết của bản thân để làm bài tập Vận dụng SGK trang 104. 
c) Sản phẩm: Hướng dẫn trả lời câu hỏi vận dụng trang 104 SGK.
d) Tổ chức thực hiện: 
Bước 1: GV chuyển giao nhiệm vụ
- GV yêu cầu HS hoàn thành bài tập phần Vận dụng SGK trang 104
Thực hiện cập nhật và truy xuất dữ liệu bảng Tỉnh/Thành phố trong CSDL quản lí tên Quận/Huyện, Tỉnh/Thành phố.
Bước 2: HS thực hiện nhiệm vụ học tập
- GV điều hành, quan sát, hỗ trợ.
Bước 3: Báo cáo kết quả hoạt động, thảo luận
- HS thực hiện bài tập.
Hướng dẫn:
- Bảng tỉnh/thành phố: tỉnh (idTinh, tenTinh), có cấu trúc hoàn toàn tương tự bảng nhacsi.
- Thực hiện các thao tác hoàn toàn tương tự cập nhật, truy xuất bảng casi.
Bước 4: Đánh giá kết quả thực hiện
- GV nhận xét, đánh giá, đưa ra một vài ý mà HS còn thiếu, chốt đáp án.
- GV tổng kết tiết học.
[1.2.NC1a: Xử lý và phân tích dữ liệu, thông tin.
2.4.NC1a: Vận hành thiết bị và phần mềm.
6.1.NC1a: Xác định nhu cầu và giải quyết vấn đề kỹ thuật.]
* HƯỚNG DẪN VỀ NHÀ
Ghi nhớ kiến thức trong bài. 
Hoàn thành các bài tập trong SBT.
Chuẩn bị bài mới Bài 22 – Thực hành cập nhật bảng dữ liệu có tham chiếu. ```  </details> 
