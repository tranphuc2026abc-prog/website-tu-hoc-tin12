# Bài 18. THỰC HÀNH XÁC ĐỊNH

> Học liệu được chuyển định dạng từ KHBD khối 11; nội dung gốc được giữ đầy đủ ở phần cuối để đối chiếu.

## Chủ đề
THỰC HÀNH TẠO VÀ KHAI THÁC CƠ SỞ DỮ LIỆU

## Mục tiêu kiến thức từ KHBD

Học xong bài này, HS đạt các yêu cầu sau:
Có được hình dung về công việc xác định các bảng dữ liệu, cấu trúc của chúng và các trường khóa trước khi bước vào tạo lập CSDL.

## Trọng tâm hoạt động

Hoạt động 1: Xem xét bài toán
Hoạt động 2: Xác định cấu trúc bảng
Hoạt động 3: Tổ chức lại bảng dữ liệu
Hoạt động 4: Các loại khóa
Hoạt động 5: Về các kiểu dữ liệu của các trường

## Nội dung KHBD đầy đủ đã trích xuất

<details>
<summary>Mở nội dung KHBD</summary>

```text
Ngày soạn: .../.../...
Ngày dạy: .../.../...
BÀI 18: THỰC HÀNH XÁC ĐỊNH
CẤU TRÚC BẢNG VÀ CÁC TRƯỜNG KHÓA
I. MỤC TIÊU
1. Kiến thức
Học xong bài này, HS đạt các yêu cầu sau:
Có được hình dung về công việc xác định các bảng dữ liệu, cấu trúc của chúng và các trường khóa trước khi bước vào tạo lập CSDL.
2. Năng lực 
Năng lực chung:
Tự chủ và tự học: biết lắng nghe, tự giác học tập và hoàn thành nhiệm vụ; tích cực tham gia các hoạt động học tập trong lớp.
Giao tiếp và hợp tác: có thói quen trao đổi, giúp đỡ nhau trong học tập; biết cùng nhau hoàn thành nhiệm vụ học tập theo sự hướng dẫn của GV.
Giải quyết vấn đề và sáng tạo: ứng dụng các kiến thức đã học vào thực tế, phát triển khả năng giải quyết vấn đề có tính tích hợp liên môn giữa Tin học với các môn học khác.
Năng lực riêng: 
Giải quyết vấn đề với sự hỗ trợ của công nghệ thông tin và truyền thông trong học và tự học: Hiểu được những bước chuẩn bị trước khi tiến hành tạo lập CSDL.
Năng lực số:
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
- GV dẫn dắt, đặt vấn đề cho HS: Ở bài 13, các em đã phần nào thấy được lợi ích khi tổ chức CSDL của website âm nhạc với nhiều bảng mà không phải là một bảng với đầy đủ tất cả các thông tin về mỗi bản thu âm (tên bản nhạc, tên nhạc sĩ, tên ca sĩ).
- GV đặt câu hỏi cho HS trả lời: Tuy nhiên, làm thế nào để yêu cầu ban đầu (quản lí danh sách các bản thu âm với đầy đủ thông tin tên bản nhạc, tên nhạc sĩ, tên ca sĩ) người ta lại đi đến được CSDL với các bảng như đã trình bày ở Bài 13?
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
- GV dẫn dắt HS vào bài học mới: Bài 18: Thực hành xác định cấu trúc bảng và các trường khóa.
2. HOẠT ĐỘNG THỰC HÀNH
Hoạt động 1: Xem xét bài toán
a) Mục tiêu: HS tìm hiểu chi tiết bài toán quản lí các bản thu âm các bản nhạc.
b) Nội dung: GV giới thiệu bài toán cho HS và yêu cầu HS trả lời các câu hỏi. 
c) Sản phẩm: 
- HS xác định được chi tiết bài toán quản lí các bản thu âm các bản nhạc.
d) Tổ chức thực hiện:
[BẢNG] HOẠT ĐỘNG CỦA GV VÀ HS | SẢN PHẨM DỰ KIẾN | NLS
[BẢNG] Bước 1: GV chuyển giao nhiệm vụ:- GV đặt vấn đề: + Mỗi bản thu âm có các thông tin: tên bản nhạc, nhạc sĩ và ca sĩ thể hiện.+ Quy ước: nhạc sĩ sáng tác bản nhạc là nhạc sĩ hoặc nhóm nhạc sĩ sáng tác một bản nhạc; ca sĩ là ca sĩ hay nhóm ca sĩ biểu diễn. Một bản nhạc có thể được một số ca sĩ thể hiện nên sẽ có những bản thu âm khác nhau. Không có hai bản thu âm khác nhau cho một bản nhạc có cùng ca sĩ thể hiện.- GV giới thiệu ví dụ về một bản ghi chép các bản thu âm nhạc (bảng 18.1) và đặt câu hỏi yêu cầu HS trả lời:+ Những bản nhạc nào có hai bản thu âm?+ Nhạc sĩ nào có nhiều bản nhạc được thu âm? + Ca sĩ Lê Dung thể hiện bao nhiêu bản thu âm? Bước 2: HS thực hiện nhiệm vụ học tập: - HS xác định được bài toán.- GV hỗ trợ, quan sát.Bước 3: Báo cáo kết quả hoạt động, thảo luận: - Đại diện HS lên bảng thực hiện thao tác.- HS còn lại quan sát, nhận xét. Bước 4: Đánh giá kết quả thực hiện: - GV nêu nhận xét, chuyển sang nhiệm vụ thực hành tiếp theo. | 1. Xem xét bài toán- Ta sẽ quy ước nói đến nhạc sĩ sáng tác bản nhạc là nói đến tên một nhạc sĩ hay tên một nhóm nhạc sĩ sáng tác bản nhạc đó. Tương tự như vậy, ta cũng quy ước khi nói đến tên ca sĩ là nói đến một ca sĩ hay một nhóm ca sĩ biểu diễn tác phẩm. | 1.3.NC1a: Hiểu biết về dữ liệu.
Hoạt động 2: Xác định cấu trúc bảng
a) Mục tiêu: HS xác định tất cả các dữ liệu phải lưu trữ.
b) Nội dung: GV hướng dẫn HS đưa ra danh sách dữ liệu phải lưu trữ, từ đó xác định được cấu trúc bảng.
c) Sản phẩm: HS đưa ra danh sách các dữ liệu cần lưu trữ dưới dạng mô tả một bảng có các trường dữ liệu với các tên gọi cụ thể.
d) Tổ chức thực hiện:
[BẢNG] HOẠT ĐỘNG CỦA GV VÀ HS | SẢN PHẨM DỰ KIẾN | NLS
[BẢNG] Bước 1: GV chuyển giao nhiệm vụ:- GV yêu cầu HS tự đưa ra danh sách các dữ liệu phải lưu trữ, viết thành dãy.- GV đặt câu hỏi gợi ý:+ Có đánh số thứ tự bản thu âm hay không?+ Tên các dữ liệu được liệt kê sẽ là tên trường dữ liệu – cần phải tuân thủ quy tắc đặt tên trường?+ Trường khóa là trường nào?- GV tổng kết và đưa ra danh sách các dữ liệu cần lưu trữ dưới dạng mô tả một bảng có các trường dữ liệu với các tên gọi cụ thể.Bước 2: HS thực hiện nhiệm vụ học tập: - HS xác định được cấu trúc bảng.- GV hỗ trợ, quan sát.Bước 3: Báo cáo kết quả hoạt động, thảo luận: - Đại diện HS lên bảng thực hiện thao tác.- HS còn lại quan sát, nhận xét. Bước 4: Đánh giá kết quả thực hiện: - GV nêu nhận xét, chuyển sang nhiệm vụ thực hành tiếp theo. | 2. Xác định cấu trúc bảng- Thông tin quản lí bao gồm: Số hiệu bản thu âm (STT), tên bản nhạc, tên nhạc sĩ sáng tác, tên ca sĩ thể hiện. Từ đó có thể hình dung một bảng dữ liệu tên là banthuam, với các trường idBanthuam (để lưu số hiệu bản thu âm), tenBannhac (để lưu tên bản nhạc), tenNhacsi (để lưu tên nhạc sĩ), tenCasi (để lưu tên ca sĩ) và viết mô tả ngắn gọn ở dạng:banthuam(idBanthuam, tenBannhac,tenNhacsi,tenCasi)trong đó, trường idBanthuam là trường khóa chính. | 1.3.NC1b: Triển khai được việc tổ chức và sắp xếp dữ liệu, thông tin và nội dung trong môi trường có cấu trúc (bảng).
Hoạt động 3: Tổ chức lại bảng dữ liệu
a) Mục tiêu: HS xác định phân tích và từng bước đưa ra giải pháp hạn chế dữ liệu lặp lại, dễ kiểm soát tính nhất quán của dữ liệu.
b) Nội dung: GV đặt vấn đề về mục đích và những công việc cần làm để tổ chức lại bảng dữ liệu.
c) Sản phẩm: HS phân tích và đưa ra giải pháp hạn chế dữ liệu lặp lại, dễ kiểm soát tính nhất quán của dữ liệu.
d) Tổ chức thực hiện:
[BẢNG] HOẠT ĐỘNG CỦA GV VÀ HS | SẢN PHẨM DỰ KIẾN | NLS
[BẢNG] Bước 1: GV chuyển giao nhiệm vụ:- GV đặt câu hỏi: + Tổ chức lại bảng dữ liệu nhằm mục đích gì?+ Tổ chức lại bảng dữ liệu cần thực hiện những công việc nào?- GV nêu vấn đề: Trường tenCasi có giá trị lặp lại, tên ca sĩ dài, làm lớn dung lượng lưu trữ và khó khăn khi sửa chữa.- GV chiếu hình ảnh bảng casi và hai trường khóa idCasi và trường tenCasi (bảng 18.2) để minh họa.- GV nêu câu hỏi: Để khắc phục hạn chế này, cách làm tốt hơn là gì?- GV kết luận về cách hạn chế dư thừa do việc lặp lại tên ca sĩ.- GV đặt vấn đề: Tương tự, một bản nhạc có thể có nhiều bản thu âm khác nhau do những ca sĩ khác nhau thể hiện và tên nhạc sĩ bị lặp lại do một nhạc sĩ có thể sáng tác nhiều bản nhạc.- GV nêu câu hỏi: Để khắc phục hạn chế này, cách làm tốt hơn là gì?- GV kết luận về cách hạn chế dư thừa do lặp tên nhạc sĩ và ban nhạc.- GV chiếu các bảng dữ liệu sau khi được tổ chức lại (hình 18.1) cho HS thấy được sự khác nhau sau khi tổ chức lại bảng dữ liệu.- GV đặt câu hỏi để HS thấy được lợi ích của tổ chức CSDL như trên:+ Nếu cần sửa tên bản nhạc "Trường ca Sông Lô" ở bảng 18.1 cần sửa ở những dòng nào? Phải sửa mấy lần? Nếu hai lần sửa khác nhau thì dữ liệu còn nhất quán không?+ Với cách tổ chức CSDL thành 4 bảng như trên, cần sửa tên bản nhạc ở bảng nào? Phải sửa mấy lần?+ Tương tự trong các trường hợp với tên ca sĩ và tên nhạc sĩ.Bước 2: HS thực hiện nhiệm vụ học tập: - HS tổ chức lại được bảng dữ liệu.- GV hỗ trợ, quan sát.Bước 3: Báo cáo kết quả hoạt động, thảo luận: - Đại diện HS lên bảng thực hiện thao tác.- HS còn lại quan sát, nhận xét. Bước 4: Đánh giá kết quả thực hiện: - GV nêu nhận xét, chuyển sang nhiệm vụ thực hành tiếp theo. | 3. Tổ chức lại bảng dữ liệu- Phân tích và sắp xếp lại bảng dữ liệu để hạn chế lượng dữ liệu lặp lại.Bước 1. Đầu tiên là hạn chế dữ liệu dư thừa do việc lặp lại tên ca sĩ, có thể khá dài, chiếm nhiều dung lượng lưu trữ. Do sự lặp lại này, mỗi lần sửa tên một ca sĩ ở tất cả các dòng có tên ca sĩ này. Nếu sót hoặc sửa khác nhau thì dữ liệu sẽ mất tính nhất quán.Giải pháp giúp cho việc kiểm soát tính nhất quán tên ca sĩ là tạo bảng casi (idCasi, tenCasi). Khi đó bảng bản thu âm sẽ có dạng: banthuam (idBanthuam, tenBannhac, tenNhacsi, idCasi).Bước 2. Tương tự, đối với bản nhạc, giải pháp là tạo bảng bản nhạc: bannhac (idBannhac, tenBannhac, tenNhacsi). Khi đó bảng thu âm sẽ có dạng: banthuam (idBanthuam, idBannhac, idCasi).Bước 3. Tương tự đối với tên nhạc sĩ trong bảng bản nhạc, giải pháp là tạo bảng nhạc sĩ: nhacsi (idNhacsi, tenNhacsi), bảng bản nhạc sẽ có dạng: bannhac (idBannhac, tenBannhac, idNhacsi).- Tổng kết lại, CSDL sau khi tổ chức lại gồm 4 bảng như sau:casi (idCasi, tenCasi)nhacsi (idNhacsi, tenNhacsi)bannhac(idBannhac, tenBannhac, idNhacsi)banthuam(idBanthuam, idBannhac, idCasi) | 1.3.NC1b: Tái cấu trúc bảng dữ liệu, thiết lập mối liên kết logic giữa các bảng.
Hoạt động 4: Các loại khóa
a) Mục tiêu: HS xác định được các trường khóa chính, khóa ngoài và khóa cấm trùng.
b) Nội dung: GV tổ chức cho HS nêu được các trường khóa chính, khóa ngoài và khóa cấm trùng.
c) Sản phẩm: HS phân tích và xác định được các trường khóa chính, khóa ngoài và khóa cấm trùng.
d) Tổ chức thực hiện:
[BẢNG] HOẠT ĐỘNG CỦA GV VÀ HS | SẢN PHẨM DỰ KIẾN | NLS
[BẢNG] Bước 1: GV chuyển giao nhiệm vụ:- GV yêu cầu HS thảo luận theo nhóm đôi, nghiên cứu SGK và trả lời câu hỏi:+ Khóa chính là gì?+ Khóa ngoài là gì?+ Khóa cấm trùng lặp giá trị là gì?- GV giới thiệu cấu trúc các bảng và quan hệ của các bảng theo tham chiếu từ khóa ngoài chính ở dạng sơ đồ (hình 18.2).Bước 2: HS thực hiện nhiệm vụ học tập: - HS phân tích và xác định được các trường khóa chính, khóa ngoài, khóa cấm trùng.- GV hỗ trợ, quan sát.Bước 3: Báo cáo kết quả hoạt động, thảo luận: - Đại diện HS lên bảng thực hiện thao tác.- HS còn lại quan sát, nhận xét. Bước 4: Đánh giá kết quả thực hiện: - GV nêu nhận xét, chuyển sang nhiệm vụ thực hành tiếp theo. | 4. Các loại khóa- Mỗi bảng đã có một khóa chính.- Khóa ngoài của các bảng:bannhac: idNhacsi tham chiếu đến idNhac trong bảng nhacsibanthuam: idBannhac tham chiếu đến idBannhac trong bảng bannhac, idCasi tham chiếu đến idCasi trong bảng casi.- Khóa cấm trùng lặp: Cặp (tenBannhac, idNhacsi) trong bảng bannhac không được trùng lặp giá trị. Cặp (idBannhac, idCasi) cũng không được trùng lặp giá trị. Để ghi nhớ điều này người ta cũng nói rằng các trường này phải đặt khóa cấm trùng lặp. | 3.1.NC1a: Thiết kế cấu trúc dữ liệu.
Hoạt động 5: Về các kiểu dữ liệu của các trường
a) Mục tiêu: HS xác định được kiểu dữ liệu cho từng trường.
b) Nội dung: GV tổ chức cho HS các kiểu dữ liệu của các trường.
c) Sản phẩm: HS phân tích và xác định được kiểu dữ liệu cho từng trường.
d) Tổ chức thực hiện:
[BẢNG] HOẠT ĐỘNG CỦA GV VÀ HS | SẢN PHẨM DỰ KIẾN | NLS
[BẢNG] Bước 1: GV chuyển giao nhiệm vụ:- GV yêu cầu HS thảo luận theo nhóm đôi, nghiên cứu SGK và trả lời câu hỏi:+ Các trường khóa chính thường có kiểu nào?+ Các trường tenNhacsi, tenCasi, tenBannhac có thể chọn xâu kí tự nào?- GV yêu cầu HS trả lời câu hỏi củng cố trang 90:+ Em hãy chỉ ra những lợi ích có được khi tổ chức CSDL âm nhạc với các bảng như đã trình bày trong bài học.- Trên cơ sở vừa bài tập vừa thực hiện, GV rút ra các kiểu dữ liệu của các trường.Bước 2: HS thực hiện nhiệm vụ học tập: - HS đọc SGK về các kiểu dữ liệu của các trường, quan sát và trả lời câu hỏi nhiệm vụ.Bước 3: Báo cáo kết quả hoạt động, thảo luận: - HS xung phong trả lời.- Một số HS khác nhận xét, bổ sung cho bạn.Bước 4: Đánh giá kết quả thực hiện: - GV nhận xét, đánh giá kết của HS.- GV tổng kết kiến thức và yêu cầu HS ghi chép vào vở. | 5. Về các kiểu dữ liệu của các trường- Để đơn giản, các trường khóa chính thường có kiểu INT và tự động tăng giá trị (AUTO_INCREMENT).- Các trường tenNhacsi, tenCasi, tenBannhac có thể chọn là xâu kí tự có độ dài tối đa 255 kí tự (VARCHAR (255)).- Hướng dẫn trả lời câu hỏi củng cố trang 71 SGK:+ Giảm không gian lưu trữ dữ liệu lặp lại (hạn chế dư thừa dữ liệu), thuận lợi cho việc đảm bảo tính toàn vẹn dữ liệu. Giảm thiểu công sức sửa dữ liệu khi cần. | 1.1.NC1a: Xác định đúng kiểu dữ liệu cho các trường thông tin.
3. HOẠT ĐỘNG LUYỆN TẬP
a) Mục tiêu: HS củng cố kiến thức về thực hành xác định cấu trúc bảng và các trường khóa.
b) Nội dung: HS trả lời câu hỏi trắc nghiệm và hoàn thành bài tập phần Luyện tập SGK trang 90.
c) Sản phẩm học tập: Gợi ý trả lời câu hỏi Luyện tập SGK trang 90.
d) Tổ chức thực hiện: 
Bước 1: GV chuyển giao nhiệm vụ: 
- GV tổ chức cho HS làm bài tập phần Luyện tập SGK trang 90:
Bài 1: Có thể có những nhạc sĩ, ca sĩ trùng tên nên người ta muốn quản lí thêm thông tin ngày sinh của các nhạc sĩ, ca sĩ. Để làm được việc đó, CSDL cần thay đổi như thế nào?
Bài 2: Nếu muốn quản lí thêm thông tin nơi sinh của nhạc sĩ, ca sĩ (tên tỉnh/thành phố), CSDL cần thay đổi như thế nào?
Bước 2: HS thực hiện nhiệm vụ học tập: 
- HS hoàn thành bài tập GV yêu cầu.
- GV quan sát và hỗ trợ, hướng dẫn.
Bước 3: Báo cáo kết quả hoạt động, thảo luận: 
- HS thực hiện bài tập.
- Các HS khác nhận xét, bổ sung bài làm của bạn.
Gợi ý trả lời: 
Bài 1: Bổ sung trường ngày sinh vào các bảng nhacsi, casi.
Bài 2: Bổ sung bảng tinh (idTinh, tenTinh) và thêm trường idTinh vào bảng nhacsi.
Bước 4: Đánh giá kết quả thực hiện: 
- GV nhận xét, tuyên dương các hoạt động tốt, nhanh và chính xác.
[1.2.NC1.b: Nhận biết được hạn chế của CSDL hiện tại và nhu cầu mở rộng dữ liệu.
1.1.NC1a: Đề xuất được việc bổ sung dữ liệu vào CSDL để đáp ứng yêu cầu quản lí.]
4. HOẠT ĐỘNG VẬN DỤNG
a) Mục tiêu: HS vận dụng được kiến thức trả lời câu hỏi vận dụng trang 90 SGK.
b) Nội dung: HS vận dụng hiểu biết của bản thân để làm bài tập phần câu hỏi vận dụng trang 90 SGK. 
c) Sản phẩm: Hướng dẫn trả lời câu hỏi vận dụng trang 90 SGK.
d) Tổ chức thực hiện: 
Bước 1: GV chuyển giao nhiệm vụ
- GV yêu cầu HS hoàn thành bài tập phần Vận dụng SGK trang 90: 
Thực hiện các bước phân tích để thiết lập mô hình dữ liệu cho một bài toán quản lí thực tế, ví dụ quản lí "danh sách tên" quận/huyện của các tỉnh thành phố.
Bước 2: HS thực hiện nhiệm vụ học tập
- GV điều hành, quan sát, hỗ trợ.
Bước 3: Báo cáo kết quả hoạt động, thảo luận
- HS thực hiện bài tập.
Đáp án:
tinh (idTinh, tenTinh), khóa chính là idTinh.
huyen (idHuyen, tenHuyen, idTinh), khóa chính là idHuyen, khóa ngoài là idTinh.
Bước 4: Đánh giá kết quả thực hiện
- GV nhận xét, đánh giá, đưa ra một vài ý mà HS còn thiếu, chốt đáp án.
- GV kết thúc tiết học.
[3.1.NC1a: Thiết lập mô hình dữ liệu cho bài toán thực tế.]
* HƯỚNG DẪN VỀ NHÀ
Ghi nhớ kiến thức trong bài. 
Hoàn thành các bài tập trong SBT.
Chuẩn bị bài mới Bài 19 – Thực hành tạo lập cơ sở dữ liệu và các bảng.
```

</details>

