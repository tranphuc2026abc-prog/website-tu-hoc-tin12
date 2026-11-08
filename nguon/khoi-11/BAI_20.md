# Bài 20. THỰC HÀNH TẠO LẬP BẢNG CÓ KHÓA NGOÀI

> Học liệu được chuyển định dạng từ KHBD khối 11; nội dung gốc được giữ đầy đủ ở phần cuối để đối chiếu.

## Chủ đề
THỰC HÀNH TẠO VÀ KHAI THÁC CƠ SỞ DỮ LIỆU

## Mục tiêu kiến thức từ KHBD

: 
Học xong bài này, HS đạt các yêu cầu sau:
Biết cách tạo mới các bảng có khóa ngoài.

## Trọng tâm hoạt động

Hoạt động 1: Khai báo bảng bannhac với các trường idBannhac, tenBannhac
Hoạt động 2: Khai báo các trường là khóa ngoài
Hoạt động 3: Khai báo các trường khóa

## Nội dung KHBD đầy đủ đã trích xuất

<details>
<summary>Mở nội dung KHBD</summary>

```text
Ngày soạn: .../.../...
Ngày dạy: .../.../...
BÀI 20: THỰC HÀNH TẠO LẬP BẢNG CÓ KHÓA NGOÀI
I. MỤC TIÊU:
1. Kiến thức: 
Học xong bài này, HS đạt các yêu cầu sau:
Biết cách tạo mới các bảng có khóa ngoài.
2. Năng lực 
Năng lực chung:
Tự chủ và tự học: biết lắng nghe, tự giác học tập và hoàn thành nhiệm vụ; tích cực tham gia các hoạt động học tập trong lớp.
Giao tiếp và hợp tác: có thói quen trao đổi, giúp đỡ nhau trong học tập; biết cùng nhau hoàn thành nhiệm vụ học tập theo sự hướng dẫn của GV.
Giải quyết vấn đề và sáng tạo: ứng dụng các kiến thức đã học vào thực tế, phát triển khả năng giải quyết vấn đề có tính tích hợp liên môn giữa Tin học với các môn học khác.
Năng lực riêng: 
Giải quyết vấn đề với sự hỗ trợ của công nghệ thông tin và truyền thông: Biết được cách tạo lập các bảng có khóa ngoài; Nâng cao kĩ năng sử dụng máy tính, phần mềm.
Năng lực số:
1.2.NC1a: Phân tích được sơ đồ quan hệ (Schema) để xác định thứ tự tạo bảng (Bảng cha tạo trước, bảng con tạo sau) dựa trên luồng dữ liệu.
5.2.NC1a: Viết (hoặc tạo qua giao diện) các cấu trúc bảng CSDL chính xác, định nghĩa đúng các trường dữ liệu và kiểu dữ liệu.
6.1.NC1a: Chẩn đoán và xử lý các lỗi thường gặp về khóa ngoài (như lỗi 1215: Cannot add foreign key constraint) thông qua việc kiểm tra kiểu dữ liệu hoặc thứ tự nhập liệu.
6.2.NC1a: Sử dụng Chatbot AI để chuyển đổi mô tả ngôn ngữ tự nhiên thành câu lệnh SQL tạo bảng hoặc để giải thích ý nghĩa các thông báo lỗi của hệ quản trị CSDL.
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
a) Mục tiêu: Đặt HS vào tình huống thực tiễn chứa đựng vấn đề về tạo lập bảng cần khóa ngoài. 
b) Nội dung: HS đọc thông tin được cung cấp và đưa ra cách giải quyết tình huống.
c) Sản phẩm: Gợi ý trả lời câu hỏi Phần khởi động và cách giải quyết tình huống.
d) Tổ chức thực hiện: 
Bước 1: GV chuyển giao nhiệm vụ: 
- GV yêu cầu xem video AI được thiết kế để phục vụ bài dạy và trả lời câu hỏi xuất hiện trong video đó.
- GV dẫn dắt, đặt vấn đề cho HS: Các em đã biết, khóa ngoài có tác dụng liên kết dữ liệu giữa các bảng.
- GV đặt câu hỏi cho HS trả lời: Khi tạo bảng có khóa ngoài, việc thiết lập khóa ngoài được thực hiện như thế nào?
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
- GV đánh giá kết quả của HS, trên cơ sở đó dẫn dắt HS vào bài học mới – Bài 20: Thực hành tạo lập cơ sở dữ liệu và các bảng.
B. HOẠT ĐỘNG THỰC HÀNH
Hoạt động 1: Khai báo bảng bannhac với các trường idBannhac, tenBannhac
a) Mục tiêu: HS thực hiện khai báo tên bảng, các trường idBannhac, tenBannhac.
b) Nội dung: GV hướng dẫn HS khai báo bảng bản nhạc.
c) Sản phẩm: HS khai báo tên bảng, các trường idBannhac, tenBannhac.
d) Tổ chức thực hiện:
[BẢNG] HOẠT ĐỘNG CỦA GV VÀ HS | SẢN PHẨM DỰ KIẾN | NLS
[BẢNG] Bước 1: GV chuyển giao nhiệm vụ:- GV chiếu hình ảnh khai báo bảng mới (hình 20.1), hình ảnh khai báo trường kiểu INT (hình 20.2) và khai báo trường kiểu VARCHAR (hình 20.3) cho HS quan sát và hướng dẫn HS thực hiện theo từng bước khai báo bảng theo SGK.+ Khai báo bảng mới+ Khai báo trường kiểu INT+ Khai báo trường kiểu VARCHAR- GV tổng kết về nội dung khai báo bảng bannhac.Bước 2: HS thực hiện nhiệm vụ học tập: - HS khai báo bảng bannhac với các trường idBannhac, tenBannhac.- GV hỗ trợ, quan sát.Bước 3: Báo cáo kết quả hoạt động, thảo luận: - Đại diện HS lên bảng thực hiện thao tác.- HS còn lại quan sát, nhận xét. Bước 4: Đánh giá kết quả thực hiện: - GV nêu nhận xét, chuyển sang nhiệm vụ thực hành tiếp theo. | 1. Khai báo bảng bannhac với các trường idbannhac, tenbannhac- Chọn thẻ Tạo mới, chọn Bảng. Nhập tên: bannhac, chọn Thêm mới để thêm trường dữ liệu, một trường với tên mặc định Column1 sẽ xuất hiện phía dưới.- Nhập tên: idBannhac, chọn kiểu dữ liệu INT, bỏ đánh dấu ô Allow NULL, nháy chuột vào ô No default để chọn giá trị mặc định là AUTO_INCREMENT.- Để khai báo thêm trường tiếp theo, nhấn Ctrl+Insert hoặc nháy nút phải chuột vào phần dưới dòng idBannhac và chọn Add column.- Nhập: tenBannhac, chọn kiểu VARCHAR, độ dài 255, giá trị mặc định là kí tự rỗng ". | - 1.2.NC1a: Xử lý và phân tích dữ liệu, thông tin.- 2.4.NC1a: Vận hành thiết bị và phần mềm.- 6.1.NC1a: Xác định nhu cầu và giải quyết vấn đề kỹ thuật.
Hoạt động 2: Khai báo các trường là khóa ngoài
a) Mục tiêu: HS thực hiện khai báo các trường là khóa ngoài.
b) Nội dung: GV hướng dẫn HS khai báo trường idNhacsi là khóa ngoài.
c) Sản phẩm: HS khai báo các trường là khóa ngoài.
d) Tổ chức thực hiện:
[BẢNG] HOẠT ĐỘNG CỦA GV VÀ HS | SẢN PHẨM DỰ KIẾN | NLS
[BẢNG] Bước 1: GV chuyển giao nhiệm vụ:- GV chiếu hình ảnh khai báo trường sẽ là khóa ngoài của bảng (hình 20.4) cho HS quan sát và hướng dẫn HS khai báo trường idNhacsi, trường này sẽ là khóa ngoài, sẽ tham chiếu đến idNhacsi trong bảng nhacsi.- GV đặt vấn đề: Nếu em lỡ tay chọn idNhacsi là VARCHAR rồi bấm Lưu, máy báo lỗi. Hãy giải thích.- GV kết luận về nội dung khai báo các trường là khóa ngoài.Bước 2: HS thực hiện nhiệm vụ học tập: - HS khai báo các trường là khóa ngoài.- HS đọc lỗi, suy nghĩ hoặc nhờ sự trợ giúp của AI: “Tôi đang dùng HeidiSQL. Bảng nhacsi có id là INT. Tôi tạo bảng bannhac và đặt id_nhacsi là VARCHAR, sau đó tạo khóa ngoại liên kết 2 trường này thì bị lỗi. Tại sao và sửa thế nào?”- GV hỗ trợ, quan sát.Bước 3: Báo cáo kết quả hoạt động, thảo luận: - Đại diện HS lên bảng thực hiện thao tác.- HS còn lại quan sát, nhận xét. - HS đọc kết quả từ AI.Bước 4: Đánh giá kết quả thực hiện: - GV nêu nhận xét, chuyển sang nhiệm vụ thực hành tiếp theo. | 2. Khai báo các trường là khóa ngoài- Các trường là khóa ngoài của bảng là các trường tham chiếu đến một trường khóa chính (k) của một bảng khác vì vậy cần được khai báo giá trị mặc định phù hợp với giá trị tương ứng của k.- Ví dụ bảng bannhac, trường idNhacsi tham chiếu đến trường idNhacsi (kiểu INT) của bảng nhacsi nên giá trị của trường này cũng là INT và giá trị mặc định là một số nguyên, chẳng hạn số 0. | - 1.2.NC1a: HS hiểu được mối quan hệ logic giữa các bảng; Đồng bộ định dạng dữ liệu.- 5.2.NC1a: Tạo CSDL.- 6.1.NC1a: Xác định nhu cầu và giải quyết vấn đề kỹ thuật (Thiết lập ràng buộc toàn vẹn; Cấu hình tham số mặc định).
Hoạt động 3: Khai báo các trường khóa
a) Mục tiêu: HS thực hiện khai báo các trường khóa.
b) Nội dung: GV hướng dẫn HS khai báo trường khóa.
c) Sản phẩm: HS khai báo các trường các trường khóa.
d) Tổ chức thực hiện:
[BẢNG] HOẠT ĐỘNG CỦA GV VÀ HS | SẢN PHẨM DỰ KIẾN | NLS
[BẢNG] Bước 1: GV chuyển giao nhiệm vụ:- GV chiếu hình ảnh bảng chọn để khai báo khóa chính (hình 20.5) cho HS quan sát và hướng dẫn HS khai báo khóa chính theo SGK.- GV chiếu hình ảnh giao diện khai báo khóa cấm trùng lặp (hình 20.6) cho HS quan sát và hướng dẫn HS khai báo khóa cấm trùng lặp theo SGK.- GV chiếu hình ảnh khai báo khóa ngoài (hình 20.7), hình ảnh chọn trường là khóa ngoài (hình 20.8), hình ảnh chọn bảng tham chiếu (hình 20.9) và hình ảnh chọn trường tham chiếu (hình 20.10) cho HS quan sát và hướng dẫn HS khai báo các khóa ngoài theo từng bước trong SGK.+ Khai báo khóa ngoài + Chọn trường là khóa ngoài+ Chọn bảng tham chiếu+ Chọn trường tham chiếu- GV đặt vấn đề: Trong thẻ Foreign Keys có 2 ô ON UPDATE và ON DELETE đang để trống (hoặc NO ACTION). Nếu bây giờ xóa Nhạc sĩ số 1, thì các bài hát của nhạc sĩ này sẽ bị xóa theo hay giữ lại?- GV kết luận về nội dung khai báo các khóa ngoài.Bước 2: HS thực hiện nhiệm vụ học tập: - HS khai báo các trường là khóa ngoài.- HS suy nghĩ giải quyết vấn đề GV đưa ra hoặc sử dụng AI để tìm hiểu “Giải thích ý nghĩa của ON DELETE CASCADE và ON DELETE RESTRICT trong khóa ngoài MySQL. Nếu muốn khi xóa Nhạc sĩ thì xóa luôn tất cả bài hát của họ, tôi nên chọn gì?”- GV hỗ trợ, quan sát.Bước 3: Báo cáo kết quả hoạt động, thảo luận: - Đại diện HS lên bảng thực hiện thao tác.- HS còn lại quan sát, nhận xét. - HS đọc kết quả từ AI.Bước 4: Đánh giá kết quả thực hiện: - GV nêu nhận xét, chuyển sang nhiệm vụ thực hành tiếp theo.- GV tổng kết kiến thức và yêu cầu HS ghi chép vào vở. | 3. Khai báo các trường khóaa) Khai báo khóa chính: idBannhac- Nháy chuột phải chuột vào ô idBannhac, chọn Create new index, chọn PRIMARY.b) Khai báo khóa cấm trùng lặp- Cặp (tenBannhac, idNhacsi) không được trùng lặp giá trị nên phải khai báo khóa cấm trùng lặp. Đánh dấu hai trường này, nháy nút phải chuột vào cùng đánh dấu và chọn Create new index, chọn UNIQUE.c) Khai báo các khóa ngoài- Để khai báo khóa ngoài idNhacsi, chọn thẻ Foreign keys.- Nháy chuột vào ô dưới dòng Columns và chọn trường khóa ngoài là idNhacsi rồi chọn OK.- Nháy chuột vào ô phía dưới Reference table để chọn bảng tham chiếu là nhacsi và chọn OK.- Tiếp theo chọn trường tham chiếu trong bảng nhacsi.- Cuối cùng nháy chuột chọn Lưu để kết thúc khai báo và khởi tạo bảng bannhac. | - 1.2.NC1a: Xử lý và phân tích dữ liệu, thông tin (Định danh dữ liệu; Thiết lập mối quan hệ; Kiểm soát trùng lặp).- 5.2.NC1a: Vận hành thiết bị và phần mềm.- 6.1.NC1a: Xác định nhu cầu và giải quyết vấn đề kỹ thuật (Thiết lập ràng buộc toàn vẹn; Cấu hình tham chiếu).
C. HOẠT ĐỘNG LUYỆN TẬP
a) Mục tiêu: HS củng cố kĩ năng tạo lập bảng có khóa ngoài.
b) Nội dung: HS hoàn thành bài tập phần Luyện tập SGK trang 99
c) Sản phẩm học tập: Kết quả thực hành của HS.
d) Tổ chức thực hiện: 
Bước 1: GV chuyển giao nhiệm vụ: 
- GV tổ chức cho HS làm bài tập phần Luyện tập SGK trang 99:
Hãy tạo lập bảng banthuam.
Bước 2: HS thực hiện nhiệm vụ học tập: 
- HS hoàn thành bài tập GV yêu cầu.
- GV quan sát và hỗ trợ, hướng dẫn.
Bước 3: Báo cáo kết quả hoạt động, thảo luận: 
- HS thực hiện các bài tập.
Hướng dẫn: 
- Bảng này có khóa chính là idBanthuam, cặp (idBannhac, idCasi) không được trùng lặp giá trị, có khóa ngoài là idCasi.
- Thao tác hoàn toàn tương tự như tạo lập bảng bannhac (idBannhac, tenBannhac, idNhacsi).
Bước 4: Đánh giá kết quả thực hiện: 
- GV chữa bài, chốt đáp án, tuyên dương các hoạt động tốt, nhanh và chính xác.
[5.2.NC1a: sử dụng phần mềm quản trị CSDL (HeidiSQL) để hiện thực hóa thiết kế bảng banthuam thành một đối tượng số hoàn chỉnh.
6.1.NC1a: Xác định nhu cầu và giải quyết vấn đề kỹ thuật.]
D. HOẠT ĐỘNG VẬN DỤNG
a) Mục tiêu: HS thực hiện làm bài tập Vận dụng để nắm vững kiến thức.
b) Nội dung: HS vận dụng kiến thức đã học và hiểu biết của bản thân để làm bài tập Vận dụng SGK trang 99. 
c) Sản phẩm: Hướng dẫn trả lời câu hỏi vận dụng trang 99 SGK.
d) Tổ chức thực hiện: 
Bước 1: GV chuyển giao nhiệm vụ
- GV yêu cầu HS hoàn thành bài tập phần Vận dụng SGK trang 99.
Hãy tạo lập bảng Quận/Huyện trong CSDL quản lí tên Quận/Huyện, Tỉnh/Thành phố.
Bước 2: HS thực hiện nhiệm vụ học tập
- GV điều hành, quan sát, hỗ trợ.
Bước 3: Báo cáo kết quả hoạt động, thảo luận
- HS thực hiện bài tập.
Hướng dẫn:
- Bảng quận/huyện: huyen (idHuyen, tenHuyen, idTinh) có khóa chính là idHuyen, khóa ngoài là idTinh, cặp (tenHuyen, idTinh) không được trùng lặp giá trị.
- Khai báo tạo lập bảng huyện hoàn toàn tương tự như thao tác khai báo tạo lập bảng bannhac (idBannhac, tenBannhac, idNhacsi).
Bước 4: Đánh giá kết quả thực hiện
- GV nhận xét, đánh giá, đưa ra một vài ý mà HS còn thiếu, chốt đáp án.
- GV tổng kết tiết học.
[1.2.NC1a: Xử lý và phân tích dữ liệu.
5.2.NC1a: sử dụng phần mềm quản trị CSDL (HeidiSQL) để hiện thực hóa thiết kế bảng Quận/Huyện thành một đối tượng số hoàn chỉnh.
6.1.NC1a: Xác định nhu cầu và giải quyết vấn đề kỹ thuật.]
* HƯỚNG DẪN VỀ NHÀ
Ghi nhớ kiến thức trong bài. 
Hoàn thành các bài tập trong SBT.
Chuẩn bị bài mới Bài 21 – Thực hành cập nhật và truy xuất dữ liệu các bảng.
```

</details>

