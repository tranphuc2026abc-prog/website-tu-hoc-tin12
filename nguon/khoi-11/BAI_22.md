# Bài 22. THỰC HÀNH CẬP NHẬT BẢNG DỮ LIỆU CÓ THAM CHIẾU  > Học liệu được chuẩn hóa từ KHBD khối 11; nội dung gốc được giữ đầy đủ ở phần cuối để đối chiếu.  ## Chủ đề True  ## Mục tiêu kiến thức từ KHBD  True  ## Trọng tâm hoạt động  Không phát hiện tiêu đề hoạt động theo mẫu.  ## KHBD đầy đủ đã chuyển định dạng  <details> <summary>Mở toàn bộ nội dung trích xuất từ tài liệu Word</summary>  ```text Ngày soạn: .../.../...
Ngày dạy: .../.../...
BÀI 22: THỰC HÀNH CẬP NHẬT BẢNG DỮ LIỆU CÓ THAM CHIẾU
I. MỤC TIÊU
1. Kiến thức
Học xong bài này, HS đạt các yêu cầu sau:
Hiểu được cách thức nhập dữ liệu đối với các bảng có trường khóa ngoài – trường tham chiếu đến một khóa chính thức của bảng khác.
2. Năng lực 
Năng lực chung:
Tự chủ và tự học: biết lắng nghe, tự giác học tập và hoàn thành nhiệm vụ; tích cực tham gia các hoạt động học tập trong lớp.
Giao tiếp và hợp tác: có thói quen trao đổi, giúp đỡ nhau trong học tập; biết cùng nhau hoàn thành nhiệm vụ học tập theo sự hướng dẫn của GV.
Giải quyết vấn đề và sáng tạo: ứng dụng các kiến thức đã học vào thực tế, phát triển khả năng giải quyết vấn đề có tính tích hợp liên môn giữa Tin học với các môn học khác.
Năng lực riêng: 
Giải quyết vấn đề với sự hỗ trợ của công nghệ thông tin và truyền thông: Biết được cách cập nhật dữ liệu các bảng có tham chiếu; Nâng cao kĩ năng sử dụng máy tính, phần mềm.
Năng lực số:
6.1.NC1a: Chẩn đoán chính xác nguyên nhân các lỗi CSDL phổ biến (Error 1451, 1452) khi thao tác trên bảng có khóa ngoài và áp dụng giải pháp phù hợp.
1.2.NC1a: Phân tích mối quan hệ phụ thuộc dữ liệu (Cha-Con) để xác định trình tự thao tác an toàn (ví dụ: Xóa con trước khi xóa cha).
6.2.NC1a: Sử dụng Chatbot AI để mô phỏng các kịch bản rủi ro dữ liệu (Data Loss Simulation) khi sử dụng lệnh CASCADE, từ đó ra quyết định cấu hình phù hợp.
5.2.NC1a: Điều chỉnh cấu trúc bảng (ALTER TABLE) thông qua giao diện phần mềm hoặc mã lệnh để thay đổi ràng buộc tham chiếu.
3. Phẩm chất
Trách nhiệm, tính cẩn thận, chăm chỉ trong học tập và công việc.
II. THIẾT BỊ DẠY HỌC VÀ HỌC LIỆU 
1. Đối với GV: 
SGK, tài liệu giảng dạy, giáo án PPT.
Máy tính, máy chiếu.
Video AI tạo bằng công cụ AI được dùng để khởi động bài học.
2. Đối với HS: 
SGK, SBT, vở ghi.
Thiết bị di động/máy tính có kết nối Internet (sử dụng theo nhóm).
III. TIẾN TRÌNH DẠY HỌC
A. HOẠT ĐỘNG KHỞI ĐỘNG 
a) Mục tiêu: Đặt HS vào tình huống thực tiễn chứa đựng vấn đề về cập nhật bảng dữ liệu có tham chiếu. 
b) Nội dung: HS đọc thông tin được cung cấp và đưa ra cách giải quyết tình huống.
c) Sản phẩm: Gợi ý trả lời câu hỏi Phần khởi động và cách giải quyết tình huống.
d) Tổ chức thực hiện: 
Bước 1: GV chuyển giao nhiệm vụ: 
- GV yêu cầu xem video AI được thiết kế để phục vụ bài dạy và trả lời câu hỏi xuất hiện trong video đó.
- GV dẫn dắt, đặt vấn đề cho HS: Khi cập nhật một bảng có khóa ngoài, dữ liệu của trường khóa ngoài phải là dữ liệu tham chiếu được đến một trường khóa chính của một bảng tham chiếu.
- GV đặt câu hỏi cho HS trả lời: Làm thế nào để biết dữ liệu nhập cho khóa ngoài là hợp lệ? Heidi SQL có hỗ trợ gì không?
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
- GV đánh giá kết quả của HS, trên cơ sở đó dẫn dắt HS vào bài học mới – Bài 22: Thực hành cập nhật bảng dữ liệu có tham chiếu.
B. HOẠT ĐỘNG THỰC HÀNH
Nhiệm vụ 1: Cập nhật bảng bannhac
a) Mục tiêu: HS thực hiện cập nhật bảng bannhac.
b) Nội dung: GV hướng dẫn HS cập nhật bảng.
c) Sản phẩm: HS thực hành cập nhật bảng bannhac bao gồm: thêm mới dữ liệu, sửa chữa, cập nhật dữ liệu, xóa dữ liệu, truy xuất dữ liệu.
d) Tổ chức thực hiện:
[BẢNG] HOẠT ĐỘNG CỦA GV VÀ HS | SẢN PHẨM DỰ KIẾN | NLS
[BẢNG] Bước 1: GV chuyển giao nhiệm vụ:- GV hướng dẫn HS thực hiện thêm mới dữ liệu như trong SGK và chiếu hình ảnh giao diện thêm mới dữ liệu (hình 22.1) cho HS quan sát.- GV chiếu hình ảnh minh họa thao tác nhập dữ liệu (hình 22.2) cho HS quan sát.- GV hướng dẫn HS nhập dữ liệu cho trường khóa ngoài theo SGK và chiếu hình ảnh 22.3 cho HS quan sát.- GV kết luận về nội dung thêm mới dữ liệu vào bảng bannhac.- GV hướng dẫn HS thao tác sửa chữa dữ liệu  trong bảng bannhac như ở Bài 21 và chiếu hình ảnh giao diện sửa dữ liệu (hình 22.4) cho HS quan sát.- GV hướng dẫn HS xóa các dòng dữ liệu trong bảng bannhac tương tự như các bước ở Bài 21.- GV đặt vấn đề: Bây giờ bảng bannhac đã có dữ liệu với trường idNhacsi tham chiếu đến trường idNhacsi của bảng nhacsi. Do vậy ta không thể tùy tiện xóa các dòng của bảng nhacsi. MySQL sẽ kiểm tra và ngăn chặn việc xóa các dòng trong bảng nhacsi mà giá trị trường idNhacsi đã có trong trường idNhacsi của bảng bannhac.- GV đưa ra ví dụ về idNhacsi của nhạc sĩ Văn Cao là 2 đã có trong các bản nhạc Trường ca sông Lô, Tiến về Hà Nội ở bảng bannhac. MySQL sẽ ngăn chặn xóa dòng tương ứng với nhạc sĩ Văn Cao ở bảng nhacsi.- GV chiếu hình ảnh thông báo lỗi xóa dữ liệu làm mất tính toàn vẹn dữ liệu (hình 22.6) cho HS quan sát và thông báo nếu chọn OK.- GV hướng dẫn HS truy xuất dữ liệu trong bản bannhac tương tự như truy xuất dữ liệu trong bảng nhacsi ở bài 21.+ Hãy thực hành các truy xuất dữ liệu theo thứ tự giảm dần của trường idBannhac, theo thứ tự các bản nhạc.+ Hãy thực hành lấy ra danh sách tên các  bản nhạc của nhạc sĩ Văn Cao có trong bảng bannhac.- GV tổng kết nhiệm vụ cập nhật bảng bannhac.Bước 2: HS thực hiện nhiệm vụ học tập: - HS thực hiện cập nhật bảng bannhac.- GV hỗ trợ, quan sát.Bước 3: Báo cáo kết quả hoạt động, thảo luận: - Đại diện HS lên bảng thực hiện thao tác.- HS còn lại quan sát, nhận xét. Bước 4: Đánh giá kết quả thực hiện: - GV nêu nhận xét, chuyển sang nhiệm vụ thực hành tiếp theo. | Nhiệm vụ 1. Cập nhật bảng bannhaca) Thêm mới dữ liệu vào bảng bannhac- Chọn bảng bannhac, nháy chuột chọn thẻ Dữ liệu, ta thấy các trường idBannhac, tenBannhac, idNhacsi nhưng chưa có dữ liệu.- Thực hiện nhập dữ liệu.- Trường idNhacsi có kiểu INT, AUTO_INCREMENT nên không cần nhập dữ liệu cho trường này. Nháy đúp chuột vào ô ở trường tenBannhac để nhập tên bản nhạc.- Trường idNhacsi là trường khóa ngoài, đã được khia báo tham chiếu đến trường idNhacsi của bảng nhacsi, vì vậy để đảm bảo tính nhất quán, giá trị hợp lệ chỉ có thể lấy từ các giá trị của idNhacsi có trong bảng nhacsi. Nháy đúp chuột vào ô nhập trường idNhacsi và chọn tên nhạc sĩ trong hộp danh sách.b) Sửa chữa, cập nhật dữ liệu trong bảng bannhac- Thao tác sửa chữa dữ liệu trong bảng bannhac nếu phát hiện có sai sót, chỉ cần nháy đúp chuột vào ô dữ liệu muốn sửa.c) Xóa dữ liệu trong bảng bannhac- Thực hiện tương tự các bước ở Bài 21 để xóa các dòng dữ liệu trong bảng bannhac.d) Xóa dữ liệu trong bảng nhacsi- Bảng bannhac đã có dữ liệu với trường idNhacsi tham chiếu đến trường idNhacsi của bảng nhacsi. Do vậy ta không thể tùy tiện xóa các dòng của bảng nhacsi. MySQL sẽ kiểm tra và ngăn chặn việc xóa các dòng trong bảng nhacsi mà giá trị trường idNhacsi đã có trong trường idNhacsi của bảng bannhac.e) Truy xuất dữ liệu trong bảng bannhac- Việc truy xuất dữ liệu trong bảng bannhac là hoàn toàn tương tự như truy xuất dữ liệu trong bảng nhacsi. | - 1.1.NC1a: Tổ chức, lưu trữ và quản lý dữ liệu.- 1.2.NC1a: Xử lý và phân tích dữ liệu, thông tin.- 2.4.NC1a: Vận hành thiết bị và phần mềm.- 6.1.NC1a: Xác định nhu cầu và giải quyết vấn đề kỹ thuật.
Nhiệm vụ 2: Tìm hiểu chức năng của phần mềm ứng dụng quản lí dữ liệu âm nhạc
a) Mục tiêu: HS tìm hiểu chức năng của phần mềm ứng dụng quản lí dữ liệu âm nhạc, so sánh với những kiến thức vừa được học trong bài TH và cho nhận xét.
b) Nội dung: GV hướng dẫn HS tìm hiểu chức năng của phần mềm ứng dụng quản lí dữ liệu âm nhạc.
c) Sản phẩm: HS thực hành quản lí dữ liệu âm nhạc, so sánh và đưa ra nhận xét.
d) Tổ chức thực hiện:
[BẢNG] HOẠT ĐỘNG CỦA GV VÀ HS | SẢN PHẨM DỰ KIẾN | NLS
[BẢNG] Bước 1: GV chuyển giao nhiệm vụ:- GV chiếu hình ảnh giao diện Quản lí danh sách các bản nhạc (hình 22.7) cho HS quan sát và yêu cầu HS đọc phần tương tác với giao diện này (SGK – tr108)- GV giới thiệu về phần mềm quản lí ứng dụng quản lí dữ liệu âm nhạc, phần mềm này cũng giống như HeidiSQL, hoạt động như một chương trình khách của MySQL, nhưng được thiết kế chuyên biệt cho bài toán quản lí dữ liệu âm nhạc.- GV đặt câu hỏi:+ Giao diện của phần mềm có dễ sử dụng không? Có hướng vào nghiệp vụ hằng ngày của người quản lí website âm nhạc không?+ Có hỗ trợ nhập dữ liệu vào trường khóa ngoài theo tham chiếu đến bảng nhacsi không?+ Người sử dụng phần mềm có cần biết đến cấu trúc của các bảng dữ liệu không?- GV kết luận về nhiệm vụ số 2.Bước 2: HS thực hiện nhiệm vụ học tập: - HS thực hiện tìm hiểu chức năng của phần mềm.- GV hỗ trợ, quan sát.Bước 3: Báo cáo kết quả hoạt động, thảo luận: - Đại diện HS lên bảng thực hiện thao tác.- HS còn lại quan sát, nhận xét. Bước 4: Đánh giá kết quả thực hiện: - GV nêu nhận xét, chuyển sang nhiệm vụ thực hành tiếp theo.- GV tổng kết kiến thức và yêu cầu HS ghi chép vào vở. | 2. Nhiệm vụ 2- Cách tương tác với giao diện Quản lí danh sách các bản nhạc:+ Để nhập dữ liệu bản nhạc mới, người dùng phải nhập tên bản nhạc, chọn nhạc sĩ từ hộp danh sách phía dưới sau đó chọn Nhập. + Để tìm một bản nhạc có thể nhập vài từ của tên bản nhạc, cũng có thể chọn nhạc sĩ nếu biết, sau đó nháy chuột chọn Tìm. + Danh sách các bản nhạc đã có trong CSDL được thể hiện ở bảng phía dưới thành nhiều trang, mỗi trang 10 dòng. Có thể nhảy chuột vào hộp danh sách trang đề chọn trang. + Muốn sửa một bản nhạc nào đó, nháy chuột vào phím radio trên dòng đó, thông tin của bản nhạc sẽ được hiển thị ở phần phía trên của giao diện để người dùng sửa chữa, thay đổi,... Nháy chuột chọn Nhập để lưu lại kết quả thay đổi. + Muốn xoá một hay nhiều bản nhạc nào đó trong danh sách đã có: nháy chuột vào các checkbox ở đầu các dòng tương ứng và chọn Xoá. | - 2.4.NC1a: HS phân tích và hiểu cách vận hành một phần mềm quản lý thực tế thông qua các thành phần giao diện tiêu chuẩn.- 1.2.NC1a: Xử lý và phân tích dữ liệu, thông tin.- 6.1.NC1a: Xác định nhu cầu và giải quyết vấn đề kỹ thuật.
C. HOẠT ĐỘNG LUYỆN TẬP
a) Mục tiêu: HS củng cố kĩ năng cập nhật bảng dữ liệu có tham chiếu.
b) Nội dung: HS hoàn thành bài tập phần Luyện tập SGK trang 108.
c) Sản phẩm học tập: Kết quả thực hành của HS.
d) Tổ chức thực hiện: 
Bước 1: GV chuyển giao nhiệm vụ: 
- GV tổ chức cho HS làm bài tập phần Luyện tập SGK trang 108:
Bài 1. Cập nhật dữ liệu vào bảng banthuam.
Bài 2. Truy xuất dữ liệu bảng banthuam theo các tiêu chí khác nhau.
Bước 2: HS thực hiện nhiệm vụ học tập: 
- HS hoàn thành bài tập GV yêu cầu.
- GV quan sát và hỗ trợ, hướng dẫn.
Bước 3: Báo cáo kết quả hoạt động, thảo luận: 
- HS thực hiện các bài tập.
Hướng dẫn:
Bài 1. Bảng banthuam (idBanthuam, idBannhac, idCasi) có cấu trục tương tự bảng nhacsi bannhac, điểm khác biệt là có hai khóa ngoài tham chiếu đến hai bảng khác nhau.
Bài 2. Thực hiện các thao tác hoàn toàn tương tự cập nhật, truy xuất bảng bannhac.
Bước 4: Đánh giá kết quả thực hiện: 
- GV chữa bài, chốt đáp án, tuyên dương các hoạt động tốt, nhanh và chính xác.
[1.2.NC1a: Xử lý và phân tích dữ liệu, thông tin.
2.4.NC1a: Vận hành thiết bị và phần mềm.
6.1.NC1a: Xác định nhu cầu và giải quyết vấn đề kỹ thuật.]
D. HOẠT ĐỘNG VẬN DỤNG
a) Mục tiêu: HS thực hiện làm bài tập Vận dụng để nắm vững kiến thức.
b) Nội dung: HS vận dụng kiến thức đã học và hiểu biết của bản thân để làm bài tập Vận dụng SGK trang 108. 
c) Sản phẩm: Hướng dẫn trả lời câu hỏi vận dụng trang 108 SGK.
d) Tổ chức thực hiện: 
Bước 1: GV chuyển giao nhiệm vụ
- GV yêu cầu HS hoàn thành bài tập phần Vận dụng SGK trang 108:
Hãy thực hành cập nhật và truy xuất bảng Quận/Huyện trong CSDL quản lí danh sách tên các Quận/Huyện, Tỉnh/Thành phố.
Bước 2: HS thực hiện nhiệm vụ học tập
- GV điều hành, quan sát, hỗ trợ.
Bước 3: Báo cáo kết quả hoạt động, thảo luận
- HS thực hiện bài tập.
Hướng dẫn:
- Bảng quận/huyện: huyen (idHuyen, tenHuyen, idTinh) là cấu trúc hoàn toàn tương tự bảng bannhac; có khóa ngoài idTinh tham chiếu đến bảng tinh (idTinh, tenTinh).
- Thực hiện các thao tác hoàn toàn tương tự cập nhật, truy xuất bảng bannhac.
Bước 4: Đánh giá kết quả thực hiện
- GV nhận xét, đánh giá, đưa ra một vài ý mà HS còn thiếu, chốt đáp án.
- GV tổng kết tiết học.
[1.2.NC1a: Xử lý và phân tích dữ liệu, thông tin.
2.4.NC1a: Vận hành thiết bị và phần mềm.
6.1.NC1a: Xác định nhu cầu và giải quyết vấn đề kỹ thuật.]
* HƯỚNG DẪN VỀ NHÀ
Ghi nhớ kiến thức trong bài. 
Hoàn thành các bài tập trong SBT.
Chuẩn bị bài mới Bài 23 – Thực hành truy xuất dữ liệu qua liên kết các bảng. ```  </details> 
