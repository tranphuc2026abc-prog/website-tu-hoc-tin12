# Bài 23. THỰC HÀNH TRUY XUẤT DỮ LIỆU QUA LIÊN KẾT CÁC BẢNG

> Học liệu được chuyển định dạng từ KHBD khối 11; nội dung gốc được giữ đầy đủ ở phần cuối để đối chiếu.

## Chủ đề
THỰC HÀNH TẠO VÀ KHAI THÁC CƠ SỞ DỮ LIỆU

## Mục tiêu kiến thức từ KHBD

Học xong bài này, HS đạt các yêu cầu sau:
Hiểu được cách thức truy xuất dữ liệu qua liên kết các bảng.

## Trọng tâm hoạt động

Không phát hiện tiêu đề hoạt động theo mẫu.

## Nội dung KHBD đầy đủ đã trích xuất

<details>
<summary>Mở nội dung KHBD</summary>

```text
Ngày soạn: .../.../...
Ngày dạy: .../.../...
BÀI 23: THỰC HÀNH TRUY XUẤT DỮ LIỆU QUA LIÊN KẾT CÁC BẢNG
I. MỤC TIÊU
1. Kiến thức
Học xong bài này, HS đạt các yêu cầu sau:
Hiểu được cách thức truy xuất dữ liệu qua liên kết các bảng.
2. Năng lực 
Năng lực chung:
Tự chủ và tự học: biết lắng nghe, tự giác học tập và hoàn thành nhiệm vụ; tích cực tham gia các hoạt động học tập trong lớp.
Giao tiếp và hợp tác: có thói quen trao đổi, giúp đỡ nhau trong học tập; biết cùng nhau hoàn thành nhiệm vụ học tập theo sự hướng dẫn của GV.
Giải quyết vấn đề và sáng tạo: ứng dụng các kiến thức đã học vào thực tế, phát triển khả năng giải quyết vấn đề có tính tích hợp liên môn giữa Tin học với các môn học khác.
Năng lực riêng: 
Giải quyết vấn đề với sự hỗ trợ của công nghệ thông tin và truyền thông: Biết được cách truy xuất dữ liệu qua liên kết các bảng; Nâng cao kĩ năng sử dụng máy tính, phần mềm.
Năng lực số:
6.2.NC1a: Sử dụng Chatbot AI để "dịch" yêu cầu truy vấn ngôn ngữ tự nhiên (Natural Language) sang câu lệnh SQL phức tạp (chứa JOIN, ON).
1.2.NC1a: Phân tích sơ đồ quan hệ (Schema) để xác định "cầu nối" (cặp khóa chính - khóa ngoại) cần thiết cho việc liên kết dữ liệu.
6.1.NC1a: Chẩn đoán và xử lý lỗi kỹ thuật Ambiguous column (Lỗi mơ hồ tên cột) thông qua việc sử dụng bí danh bảng (Alias) hoặc chỉ định rõ tên bảng.
5.2.NC1a: Xây dựng các báo cáo tổng hợp dữ liệu (ví dụ: Danh sách bài hát kèm tên Nhạc sĩ và Ca sĩ) từ các nguồn dữ liệu rời rạc.
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
a) Mục tiêu: Đặt HS vào tình huống thực tiễn chứa đựng vấn đề về truy xuất dữ liệu qua liên kết các bảng. 
b) Nội dung: HS đọc thông tin được cung cấp và đưa ra cách giải quyết tình huống.
c) Sản phẩm: Gợi ý trả lời câu hỏi Phần khởi động và cách giải quyết tình huống.
d) Tổ chức thực hiện: 
Bước 1: GV chuyển giao nhiệm vụ: 
- GV yêu cầu xem video AI được thiết kế để phục vụ bài dạy và trả lời câu hỏi xuất hiện trong video đó.
- GV dẫn dắt, đặt vấn đề cho HS: Các bảng có thể có quan hệ với nhau qua tham chiếu khóa ngoài; Nhờ vậy có thể truy xuất dữ liệu từ nhiều bảng theo quan hệ giữa chúng.
- GV đặt câu hỏi cho HS trả lời: Việc này sẽ được thực hiện cụ thể như thế nào với SQL?
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
- GV đánh giá kết quả của HS, trên cơ sở đó dẫn dắt HS vào bài học mới – Bài 23: Thực hành truy xuất dữ liệu qua liên kết các bảng.
B. HOẠT ĐỘNG THỰC HÀNH
Nhiệm vụ 1: Lập danh sách các bản nhạc với tên bản nhạc và tên tác giả
a) Mục tiêu: HS thực hiện cập nhật bảng bannhac.
b) Nội dung: GV hướng dẫn HS cập nhật bảng.
c) Sản phẩm: HS thực hành cập nhật bảng bannhac bao gồm: thêm mới dữ liệu, sửa chữa, cập nhật dữ liệu, xóa dữ liệu, truy xuất dữ liệu.
d) Tổ chức thực hiện:
[BẢNG] HOẠT ĐỘNG CỦA GV VÀ HS | SẢN PHẨM DỰ KIẾN | NLS
[BẢNG] Bước 1: GV chuyển giao nhiệm vụ- GV hướng dẫn HS lập danh sách các bản nhạc với tên bản nhạc và tên nhạc sĩ.- GV yêu cầu HS đọc nội dung ví dụ trong SGK trang 109.- GV hướng dẫn HS thao tác theo hướng dẫn trong SGK.- GV đưa ra yêu cầu thực hành:+ Lập danh sách bao gồm idBannhac, tenBannhac, tenNhacsi từ tất cả các bản nhạc có trong bảng bannhac.+ Lập danh sách bao gồm idBannhac, tenBannhac từ tất cả các bản nhạc của nhạc sĩ Đỗ Nhuận có trong bảng bannhac.Bước 2: HS thực hiện nhiệm vụ học tập: - HS thực hiện lập danh sách các bản nhạc với tên bản nhạc và tên tác giả.- GV hỗ trợ, quan sát.Bước 3: Báo cáo kết quả hoạt động, thảo luận: - Đại diện HS lên bảng thực hiện thao tác.- HS còn lại quan sát, nhận xét. Bước 4: Đánh giá kết quả thực hiện: - GV nêu nhận xét, chuyển sang nhiệm vụ thực hành tiếp theo. | Nhiệm vụ 1. Lập danh sách các bản nhạc và tên tác giả- Để lấy ra danh sách các bản nhạc gồm tenBannhac, tenNhacsi, dùng câu truy vấn:SELECT bannhac.tenBannhac, nhacsi.tenNhacsiFROM bannhac INNER JOIN nhacsi ON bannhac.idNhacsi = nhacsi.idNhacsi; | - 1.2.NC1a: Xử lý và phân tích dữ liệu, thông tin.- 2.4.NC1a: Vận hành thiết bị và phần mềm.- 5.2.NC1a: HS viết đúng cú pháp câu lệnh SELECT ... INNER JOIN ... ON ...- 6.1.NC1a: Xác định nhu cầu và giải quyết vấn đề kỹ thuật.
Nhiệm vụ 2: Lập danh sách các bản thu âm với đủ các thông tin idBanthuaam, tenBannhac, tenCasi
a) Mục tiêu: HS thực hiện lập danh sách các bản thu âm với các thông tin idBanthuam, tenBannhac, tenCasi.
b) Nội dung: GV hướng dẫn HS lập danh sách bản thu âm.
c) Sản phẩm: HS thực hành lập danh sách các bản thu âm với các thông tin idBanthuam, tenBannhac, tenCasi.
d) Tổ chức thực hiện:
[BẢNG] HOẠT ĐỘNG CỦA GV VÀ HS | SẢN PHẨM DỰ KIẾN | NLS
[BẢNG] Bước 1: GV chuyển giao nhiệm vụ- GV đặt vấn đề: Để viết được nhiều hơn hai bảng theo liên kết khóa ngoài, hãy lặp lại mệnh đề JOIN trong câu truy vấn SQL. - GV yêu cầu HS đọc phần hướng dẫn thực hiện nhiệm vụ 2 và tự viết câu truy vấn.- GV kiểm tra theo dõi và giúp HS sửa lỗi, đưa ra câu truy vấn đúng.Bước 2: HS thực hiện nhiệm vụ học tập: - HS thực hiện lập danh sách các bản thu âm.- GV hỗ trợ, quan sát.Bước 3: Báo cáo kết quả hoạt động, thảo luận: - Đại diện HS lên bảng thực hiện thao tác.- HS còn lại quan sát, nhận xét. Bước 4: Đánh giá kết quả thực hiện: - GV nêu nhận xét, chuyển sang nhiệm vụ thực hành tiếp theo. | Nhiệm vụ 2. Lập danh sách các bản thu âm với đủ các thông tin idBanthuam, tenBannhac, tenCasi- Câu truy vấn đúng là:SELECT banthuam.idBanthuam, bannhac.tenBannhac, casi.tenCasiFROM banthuam    INNER JOIN bannhac ON banthuam.idBannhac = bannhac.idBannhac   INNER JOIN casi ON banthuam.idCasi = casi.idCasi | - 1.2.NC1a: Xử lý và phân tích dữ liệu, thông tin.- 2.4.NC1a: Vận hành thiết bị và phần mềm.- 5.2.NC1a: HS viết được câu lệnh SQL lồng ghép nhiều mệnh đề INNER JOIN liên tiếp.- 6.1.NC1a: Xác định nhu cầu và giải quyết vấn đề kỹ thuật.
Nhiệm vụ 3: Tìm hiểu một chức năng của ứng dụng "Quản lý dữ liệu âm nhạc"
a) Mục tiêu: HS thực hiện tìm hiểu một chức năng của ứng dụng "Quản lý dữ liệu âm nhạc" qua các giao diện mô tả.
b) Nội dung: GV hướng dẫn HS tìm hiểu chức năng của ứng dụng "Quản lý dữ liệu âm nhạc" và so sánh với kiến thức vừa học được.
c) Sản phẩm: HS thực hành tìm hiểu một chức năng của ứng dụng "Quản lý dữ liệu âm nhạc" qua các giao diện mô tả.
d) Tổ chức thực hiện:
[BẢNG] HOẠT ĐỘNG CỦA GV VÀ HS | SẢN PHẨM DỰ KIẾN | NLS
[BẢNG] Bước 1: GV chuyển giao nhiệm vụ:- GV yêu cầu HS đọc phần giới thiệu về một ứng dụng Quản lý dữ liệu âm nhạc. Phần mềm này cũng giống như HeidiSQL, hoạt động như một chương trình khách của MySQL, nhưng được thiết kế chuyên biệt cho bài toán quản lí dữ liệu âm nhạc.- GV yêu cầu HS trả lời các câu hỏi sau:+ Giao diện của phần mềm có dễ sử dụng không? Có hướng vào nghiệp vụ hằng ngày của người quản lí website âm nhạc không?+ Có hỗ trợ nhập dữ liệu vào trường khóa ngoài theo tham chiếu đến bảng nhacsi không? Có hỗ trợ đảm bảo tính nhất quán và toàn vẹn dữ liệu không?+ Người sử dụng phần mềm có cần biết đến cấu trúc của các bảng dữ liệu không?- GV tổng kết về nội dung tìm hiểu một chức năng của ứng dụng Quản lí dữ liệu âm nhạc.Bước 2: HS thực hiện nhiệm vụ học tập: - HS thực hiện tìm hiểu chức năng của ứng dụng Quản lí dữ liệu âm nhạc.- GV hỗ trợ, quan sát.Bước 3: Báo cáo kết quả hoạt động, thảo luận: - Đại diện HS lên bảng thực hiện thao tác.- HS còn lại quan sát, nhận xét. Bước 4: Đánh giá kết quả thực hiện: - GV nêu nhận xét, chuyển sang nhiệm vụ thực hành tiếp theo.- GV tổng kết kiến thức và yêu cầu HS ghi chép vào vở. | Nhiệm vụ 3. Tìm hiểu một chức năng của ứng dụng "Quản lý dữ liệu âm nhạc"- Cách tương tác với giao diện này tương tự như với giao diện "Quản lí danh sách các bản nhạc" ở Bài 22, chỉ khác ở chỗ khi nhập bản thu âm, chỉ có thể chọn tên bản nhạc, tên ca sĩ từ hộp danh sách với những tên đã có trong CSDL. Danh sách các bản thu âm có đầy đủ các thông tin tường minh tên bản nhạc, tên nhạc sĩ và tên ca sĩ thể hiện. | - 1.2.NC1a: Xử lý và phân tích dữ liệu, thông tin.- 2.4.NC1a: Vận hành thiết bị và phần mềm.- 6.2.NC1a: Giải quyết vấn đề với công cụ số (Tư duy Thiết kế hệ thống).
C. HOẠT ĐỘNG LUYỆN TẬP
a) Mục tiêu: HS củng cố kĩ năng truy xuất dữ liệu qua liên kết các bảng.
b) Nội dung: HS hoàn thành bài tập phần Luyện tập SGK trang 112.
c) Sản phẩm học tập: Kết quả thực hành của HS.
d) Tổ chức thực hiện: 
Bước 1: GV chuyển giao nhiệm vụ: 
- GV tổ chức cho HS làm bài tập phần Luyện tập SGK trang 112:
Lấy danh sách các bản thu âm với đầy đủ các thông tin: idBanthuam, tenBannhac, tenNhacsi, tenCasi.
Bước 2: HS thực hiện nhiệm vụ học tập: 
- HS hoàn thành bài tập GV yêu cầu.
- GV quan sát và hỗ trợ, hướng dẫn.
Bước 3: Báo cáo kết quả hoạt động, thảo luận: 
- HS thực hiện các bài tập.
Đáp án:
SELECT banthuam.idBanthuam, bannhac.tenBannhac, nhacsi.tenNhacsi, casi.tenCasi
FROM banthuam
INNER JOIN bannhac ON banthuam.idBannhac = bannhac.idBannhac
INNER JOIN casi ON banthuam.idCasi = casi.idCasi
INNER JOIN nhacsi ON bannhac.idNhacsi = nhacsi.idNhacsi;
Bước 4: Đánh giá kết quả thực hiện: 
- GV chữa bài, chốt đáp án, tuyên dương các hoạt động tốt, nhanh và chính xác.
[2.4.NC1a: Vận hành thiết bị và phần mềm.
5.2.NC1a: Học sinh viết được câu lệnh SQL phức tạp kết hợp nhiều bảng dữ liệu cùng lúc.
1.2.NC1a: Xử lý và phân tích dữ liệu, thông tin.]
D. HOẠT ĐỘNG VẬN DỤNG
a) Mục tiêu: HS thực hiện làm bài tập Vận dụng để nắm vững kiến thức.
b) Nội dung: HS vận dụng kiến thức đã học và hiểu biết của bản thân để làm bài tập Vận dụng SGK trang 112.
c) Sản phẩm: Hướng dẫn trả lời câu hỏi vận dụng trang 112 SGK.
d) Tổ chức thực hiện: 
Bước 1: GV chuyển giao nhiệm vụ
- GV yêu cầu HS hoàn thành bài tập phần Vận dụng SGK trang 112:
Bài 1. Lấy danh sách các bản thu âm với các thông tin: idBanthuam, tenBannhac, tenCasi các bản nhạc của nhạc sĩ Văn Cao.
Bài 2. Lấy danh sách các bản thu âm với các thông tin: idBanthuam, tenBannhac, tenTacgia các bản nhạc do ca sĩ Lê Dung thể hiện.
Bài 3. Lấy danh sách các bản thu âm với các thông tin: idBanthuam, tenBannhac, tenTacgia, tenCasi các bản nhạc do ca sĩ Lê Dung thể hiện thuộc thể loại Nhạc trữ tình.
Bài 4. Thực hành truy xuất bảng Quận/Huyện qua liên kết với bảng Tỉnh/Thành phố.
Bước 2: HS thực hiện nhiệm vụ học tập
- GV điều hành, quan sát, hỗ trợ.
Bước 3: Báo cáo kết quả hoạt động, thảo luận
- HS thực hiện bài tập.
Đáp án:
Bài 1:
SELECT tinh.tenTinh, huyen.tenHuyen
FROM tinh INNER JOIN huyen ON tinh.idTinh = huyen.idTinh;
Bài 2: 
SELECT banthuam.idBanthuam, bannhac.tenBannhac, nhacsi.tenNhacsi, casi.tenCasi
FROM banthuam
INNER JOIN bannhac ON banthuam.idBannhac = bannhac.idBannhac
INNER JOIN casi ON banthuam.idCasi = casi.idCasi
INNER JOIN nhacsi ON bannhac.idNhacsi = nhacsi.idNhacsi
WHERE nhacsi.tenNhacsi = 'Văn Cao';
Bài 3: 
SELECT banthuam.idBanthuam, bannhac.tenBannhac, nhacsi.tenNhacsi
FROM banthuam
INNER JOIN bannhac ON banthuam.idBannhac = bannhac.idBannhac
INNER JOIN casi ON banthuam.idCasi = casi.idCasi
INNER JOIN nhacsi ON bannhac.idNhacsi = nhacsi.idNhacsi
WHERE casi.tenCasi = 'Lê Dung';
Bài 4:
SELECT banthuam.idBanthuam, bannhac.tenBannhac, nhacsi.tenNhacsi, casi.tenCasi
FROM banthuam
INNER JOIN bannhac ON banthuam.idBannhac = bannhac.idBannhac
INNER JOIN casi ON banthuam.idCasi = casi.idCasi
INNER JOIN nhacsi ON bannhac.idNhacsi = nhacsi.idNhacsi
WHERE casi.tenCasi = 'Lê Dung';
Bước 4: Đánh giá kết quả thực hiện
- GV nhận xét, đánh giá, đưa ra một vài ý mà HS còn thiếu, chốt đáp án.
- GV tổng kết tiết học.
[2.4.NC1a: Vận hành thiết bị và phần mềm.
1.2.NC1a: Xử lý và phân tích dữ liệu, thông tin.
6.2.NC1a: Giải quyết vấn đề với công cụ số.]
* HƯỚNG DẪN VỀ NHÀ
Ghi nhớ kiến thức trong bài. 
Hoàn thành các bài tập trong SBT.
Chuẩn bị bài mới Bài 24 – Thực hành sao lưu dữ liệu.
```

</details>

