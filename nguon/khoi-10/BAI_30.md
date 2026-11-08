# Bài 30. KIỂM THỬ VÀ GỠ LỖI CHƯƠNG TRÌNH

> Học liệu được chuyển định dạng từ KHBD Tin học 10 do giáo viên cung cấp. Nội dung trích xuất đầy đủ được giữ ở phần cuối để đối chiếu.

## Chủ đề
GIẢI QUYẾT VẤN ĐỀ VỚI SỰ TRỢ GIÚP CỦA MÁY TÍNH

## Mục tiêu kiến thức từ KHBD

Học xong bài này, HS đạt các yêu cầu sau:
Biết được một vài phương pháp đơn giản kiểm thử chương trình.
Biết được một vài cách gỡ lỗi đơn giản một chương trình.

## Trọng tâm hoạt động

Hoạt động 1: Một vài phương pháp kiểm thử chương trình
Hoạt động 2: Tìm hiểu một số ví dụ minh họa

## Nội dung KHBD đầy đủ đã trích xuất

<details>
<summary>Mở nội dung KHBD</summary>

```text
Ngày soạn: .../.../...
Ngày dạy: .../.../...
BÀI 30: KIỂM THỬ VÀ GỠ LỖI CHƯƠNG TRÌNH
(2 tiết)
I. MỤC TIÊU
1. Kiến thức
Học xong bài này, HS đạt các yêu cầu sau:
Biết được một vài phương pháp đơn giản kiểm thử chương trình.
Biết được một vài cách gỡ lỗi đơn giản một chương trình.
2. Năng lực 
 - Năng lực chung:
Giải quyết được những nhiệm vụ học tập một cách độc lập, theo nhóm và thể hiện sự sáng tạo.
Góp phần phát triển năng lực giao tiếp và hợp tác qua hoạt động nhóm và trao đổi công việc với giáo viên.
- Năng lực riêng: 
Thực hiện được một vài phương pháp đơn giản kiểm thử chương trình.
- Năng lực số:
1.2.NC1b: Hiểu vai trò của dữ liệu kiểm thử, đặc biệt là dữ liệu biên; phân tích trạng thái của hệ thống thông qua việc theo dõi sự thay đổi giá trị biến trong quá trình thực thi.
5.2.NC1b: Thành thạo kỹ thuật gỡ lỗi trên IDE.
6.2.NC1b: Sử dụng AI để tự động sinh ra các bộ dữ liệu kiểm thử đa dạng và phân tích logic lỗi sai mà mắt thường khó thấy.
1.1.NC1a: Lập bảng theo dõi kết quả kiểm thử để so sánh kết quả thực tế và kết quả mong đợi.
3. Phẩm chất
Chăm chỉ tích cực xây dựng bài, có trách nhiệm, chủ động chiếm lĩnh kiến thức theo sự hướng dẫn của GV.
Có ý thức học tập, ý thức tìm tòi, khám phá và sáng tạo, có ý thức làm việc nhóm, tôn trọng ý kiến các thành viên khi hợp tác.
II. THIẾT BỊ DẠY HỌC VÀ HỌC LIỆU 
1. Đối với GV
- KHBD, tài liệu giảng dạy, giáo án PPT.
- Phòng thực hành máy tính cài sẵn Python và kết nối Internet.
- Máy chiếu.
- Video AI tạo bằng công cụ AI được dùng để khởi động bài học.
2. Đối với HS 
- SGK, SBT, vở ghi.
III. TIẾN TRÌNH DẠY HỌC
1. HOẠT ĐỘNG KHỞI ĐỘNG 
a) Mục tiêu: Gợi ý cho HS hướng đến khái niệm kiểm thử (test) và gỡ lỗi (debug) một chương trình.
b) Nội dung: GV đưa ra câu hỏi và yêu cầu HS thảo luận, chưa cần trả lời chính xác.
c) Sản phẩm: HS tự do phát biểu suy nghĩ của mình về cách kiểm tra và gỡ lỗi một chương trình.
d) Tổ chức thực hiện: 
Bước 1: GV chuyển giao nhiệm vụ: 
- GV yêu cầu xem video AI được thiết kế để phục vụ bài dạy và trả lời câu hỏi xuất hiện trong video đó.
- GV dẫn dắt: Bài học trước các em đã biết khái niệm lỗi ngoại lệ khi chạy chương trình Python. Tuy nhiên, một chương trình chạy không có lỗi ngoại lệ (chương trình không bị dừng) thì không có nghĩa là chương trình không có lỗi. Thậm chí các "lỗi" không tường minh này (các lỗi này được gọi là bug) càng khó phát hiện và khó sửa.
- GV đặt câu hỏi: Theo em, làm thế nào để kiểm tra (test) và gỡ lỗi (bug) một chương trình? Môi trường lập trình có công cụ nào hỗ trợ việc đó không?
Bước 2: HS thực hiện nhiệm vụ học tập: 
- HS xem video và suy nghĩ câu trả lời.
- HS chú ý theo dõi, suy nghĩ câu trả lời.
Bước 3: Báo cáo kết quả hoạt động, thảo luận: 
- GV gọi một số HS trả lời, HS khác nhận xét, bổ sung
Bước 4: Đánh giá kết quả thực hiện: 
- GV chú ý HS:
+ Kiểm thử (test) có nghĩa là kiểm tra và chạy thử.
+ Lỗi tiếng Anh là bug (bug có nghĩa đen là con bọ).
+ Debug là de (lấy ra) bug (con bọ) = gỡ lỗi của chương trình. Vậy debug là tìm bù và tháo bug ra khỏi chương trình.
- GV nhận xét, đánh giá và kết luận.
[6.1.NC1a: HS sử dụng công cụ AI hoặc sản phẩm số do GV cung cấp để tiếp nhận thông tin, trả lời câu hỏi đơn giản.
2.1.NC1a: HS thực hiện các tương tác cơ bản với học liệu số (xem video, trả lời câu hỏi trên môi trường số).
1.1.NC1a: HS tiếp cận, khai thác được thông tin từ nguồn học liệu số dưới sự hướng dẫn của GV.]
- GV dẫn dắt HS vào bài học mới: Trong bài học ngày hôm nay, chúng ta sẽ cùng nhau đi tìm hiểu một vài phương pháp kiểm thử và gỡ lỗi đơn giản một chương trình - Bài 30: Kiểm thử và gỡ lỗi chương trình.
2. HÌNH THÀNH KIẾN THỨC MỚI
Hoạt động 1: Một vài phương pháp kiểm thử chương trình
a) Mục tiêu: HS biết được một số phương pháp kiểm thử hay dùng trên thực tế.
b) Nội dung: GV hướng dẫn HS tìm hiểu một số phương pháp kiểm thử hay dùng trên thực tế.
c) Sản phẩm: HS nêu được các phương pháp kiểm thử chương trình hay dùng trên thực tế.
d) Tổ chức thực hiện:
[BẢNG] HOẠT ĐỘNG CỦA GV VÀ HS | SẢN PHẨM DỰ KIẾN | NLS
[BẢNG] Bước 1: GV chuyển giao nhiệm vụ:- GV giới thiệu: Có rất nhiều phương pháp và công cụ khác nhau để kiểm thử chương trình. Các công cụ này không những có mục đích tìm ra lỗi của chương trình mà còn có tác dụng phòng ngừa và ngăn chặn các lỗi phát sinh tiếp trong tương lai.- GV yêu cầu HS: Sử dụng AI tìm hiểu một số phương pháp kiểm thử chương trình: + Quan sát mã lỗi Runtime và bắt lỗi ngoại lệ+ Kiểm thử chương trình với các bộ dữ liệu test+ In các thông số trung gian+ Sử dụng công cụ breakpoint (điểm dừng)- GV cho HS đọc và ghi nhớ khung kiến thức trọng tâm.Bước 2: HS thực hiện nhiệm vụ học tập: - HS sử dụng AI tìm hiểu kiến thức.- HS thảo luận nhóm đôi, trả lời câu hỏi.- GV hỗ trợ, quan sát.Bước 3: Báo cáo kết quả hoạt động, thảo luận: - HS đọc kết quả từ AI, đối chiếu với SGK và rút ra kết luận.- Đại diện nhóm trình bày kết quả.- Một số HS khác nhận xét, bổ sung.Bước 4: Đánh giá kết quả thực hiện: - GV nêu nhận xét, tổng quát lại kiến thức và chuyển sang nội dung mới. | 1. Một vài phương pháp kiểm thử chương trình - Quan sát mã lỗi Runtime và bắt lỗi ngoại lệ: Giúp kiểm tra vị trí dòng lệnh sinh ra lỗi này, từ đó phân tích, tìm và sửa lỗi.- Kiểm thử chương trình với các bộ dữ liệu test:+ Cần có nhiều bộ test+ Cần có bộ test ngẫu nhiên+ Cần có bộ test dữ liệu ở vùng biên- In các thông số trung gian: Thông qua các giá trị trung gian trong quá trình thực hiện chương trình, nếu kết quả cuối cùng có lỗi thì sẽ dễ tìm ra lỗi đó.- Sử dụng công cụ breakpoint (điểm dừng): cho phép tạo ra các điểm dừng bên trong chương trình, giúp người kiểm thử có thể quan sát, kiểm tra tính đúng đắn của chương trình.  | - 6.2.NC1a: Sử dụng AI để tìm kiếm thông tin phục vụ học tập.- 1.2.NC1b: HS hiểu một số phương pháp kiểm thử chương trình.
Hoạt động 2: Tìm hiểu một số ví dụ minh họa
a) Mục tiêu: Giúp HS biết và có thể thực hiện được một số phương pháp kiểm thử đơn giản.
b) Nội dung: GV giới thiệu ví dụ minh họa là bài toán ƯCLN của hai số tự nhiên m, n được nhập từ bàn phím.
c) Sản phẩm: HS áp dụng được các phương pháp vào kiểm thử chương trình.
d) Tổ chức thực hiện: 
[BẢNG] HOẠT ĐỘNG CỦA GV VÀ HS | SẢN PHẨM DỰ KIẾN | NLS
[BẢNG] Bước 1: GV chuyển giao nhiệm vụ:- GV cho HS đọc yêu cầu của ví dụ minh họa: Nhập từ bàn phím hai số tự nhiên m, n. Tính ƯCLN của hai số này.- GV giới thiệu cho HS các cách kiểm thử chương trình:+ Cách 1: In các giá trị trung gian để kiểm tra và kiểm soát lỗi chương trình. Đây là cách thực hiện kiểm thử thường được dùng trên thực tế.+ Cách 2: Sử dụng chức năng thiết lập điểm dừng (break point) và chức năng chạy từng lệnh.- Trong cách 2, GV giới thiệu: Chức năng thiết lập điểm dừng chỉ có ở các phần mềm soạn thảo lập trình chuyên nghiệp. Để sử dụng chức năng này, người kiểm thử cần làm các công việc sau:1. Thiết lập điểm dừng (có thể có nhiều hơn 1 điểm dừng).2. Tiến hành chạy chương trình. Chương trình sẽ chạy và dừng lại tại mỗi vị trí điểm dừng.3. Quan sát các biến của chương trình tại thời điểm dừng để kiểm tra lỗi nếu có.Bước 2: HS thực hiện nhiệm vụ học tập: - HS đọc nhiệm vụ.- HS chú ý lắng nghe GV hướng dẫn.- GV quan sát và trợ giúp HS. Bước 3: Báo cáo kết quả hoạt động, thảo luận: - HS xung phong trình bày kết quả.- Một số HS khác nhận xét, bổ sung cho bạn. Bước 4: Đánh giá kết quả thực hiện: GV tổng quát lưu ý lại kiến thức và yêu cầu HS ghi chép đầy đủ vào vở. | 2. Một số ví dụ minh họa- Cách 1: In các giá trị trung gian để kiểm soát chương trình- Cách 2: Sử dụng công cụ tạo điểm dừng của phần mềm soạn thảo lập trình.Với phần mềm soạn thảo lập trình Wingware, các bước trên như sau:+ Bước 1: Thiết lập điểm dừng: Nháy chuột tại vị trí muốn tạo điểm dừng trong cột đầu tiên. Sẽ xuất hiện ô tròn màu đỏ tại vị trí điểm dừng.+ Bước 2: Tiến chạy chương trình bằng cách nháy vào nút  hoặc F5 để chạy. Chương trình sẽ chạy bình thường nhưng sẽ dừng lại trước lệnh đã đánh dấu.- Bước 3: Quan sát các biến hệ thống của chương trình tại thời điểm hiện thời. Nháy chuột vào nút  để chạy tiếp và dừng lại tại vị trí điểm dừng tiếp theo (hoặc vòng lặp tiếp theo). Muốn xem thông tin các biến, nháy lên trang Stack Data để quan sát. | - 5.2.NC1b: HS vận hành thành thạo công cụ gỡ lỗi tích hợp; thực hiện thao tác thiết lập điểm dừng tại các dòng lệnh nghi ngờ để tạm ngưng chương trình, cho phép con người can thiệp và quan sát trạng thái nội tại của máy tính tại thời điểm đó.- 1.3.NC1a: HS lập bảng theo dõi sự biến thiên giá trị của các biến qua từng vòng lặp. Hành động này giúp trực quan hóa luồng dữ liệu để so sánh giữa “Kết quả thực tế” và “Kết quả mong đợi”.
3. HOẠT ĐỘNG LUYỆN TẬP
a) Mục tiêu: HS được thực hành, củng cố kĩ năng kiểm thử và gỡ lỗi đơn giản chương trình.
b) Nội dung: HS vận dụng các kiến thức đã học để hoàn thành Luyện tập 1, 2 (SGK - tr148) và trả lời câu hỏi trắc nghiệm.
c) Sản phẩm học tập: Bài làm của HS, kĩ năng giải quyết nhiệm vụ học tập.
d) Tổ chức thực hiện: 
Bước 1: GV chuyển giao nhiệm vụ: 
- GV tổng hợp các kiến thức cần ghi nhớ cho HS.
Nhiệm vụ 1: Trả lời câu hỏi trắc nghiệm khách quan
- GV tổ chức trò chơi trắc nghiệm nhanh trên Quizizz hoặc Kahoot để củng cố toàn bài.
- GV cung cấp mã QR hoặc đường Links cho HS làm Phiếu bài tập, trả lời nhanh một số câu hỏi trắc nghiệm tổng kết bài học.
Câu 1: Mục đích để kiểm thử chương trình là gì?
A. Để tự động sửa lỗi chương trình.
B. Để tìm lỗi của chương trình.
C. Để tìm lỗi và tự động sửa lỗi chương trình.
D. Để tìm lỗi và phòng ngừa, ngăn chặn các lỗi phát sinh trong tương lai.
Câu 2: Nếu chương trình chạy bị lỗi với thông báo lỗi là ZeroDivisionError thì đó là lỗi gì và em cần sửa lỗi như thế nào?
A. Đây là lỗi không thể sửa được.
B. Đây là lỗi chia cho 0, em cần xóa lệnh này ra khỏi chương trình.
C. Đây là lỗi chia cho 0, em cần thay thế phép toán khác để không xảy ra lỗi này nữa.
D. Đây là lỗi chia cho 0, em cần tìm hiểu nguyên nhân vì sao lại xuất hiện 0 khi chia, có thể bổ sung lệnh kiểm tra trước khi thực hiện phép chia.
Câu 3: Điểm dừng (break point) trong các phần mềm soạn thảo lập trình có ý nghĩa gì?
A. Đó là vị trí chương trình chạy tới đó thì kết thúc.
B. Đó là vị trí chương trình dừng lại để người lập trình quan sát phát hiện lỗi.
C. Đó là vị trí chương trình mỗi khi chạy đến dòng lệnh đó sẽ kêu pip pip.
D. Đó là vị trí chương trình tạm dừng, người lập trình sẽ quan sát các biến của chương trình và có thể điều khiển để chương trình tiếp tục chạy.
Câu 4: Giả sử đầu vào của dữ liệu bài toán là vùng {x ≥ 0}. Khi đó dữ liệu ở vùng biên là những dữ liệu nào?
A. x = 0B. x = 1000000
C. x ở gần 0D. x ở gần 0 hoặc x rất lớn
Câu 5: Phần mềm soạn thảo lập trình có thể tạo ra bao nhiêu điểm dừng?
A. 0B. 1
C. Không hạn chếD. 10
Nhiệm vụ 2: Thực hiện phần Luyện tập tr.148 SGK
Bước 2: HS thực hiện nhiệm vụ học tập: 
- HS suy nghĩ, hoàn thành các bài tập GV yêu cầu.
- GV quan sát và hỗ trợ, hướng dẫn.
Bước 3: Báo cáo kết quả hoạt động, thảo luận: 
- HS xung phong trình bày kết quả thảo luận. 
- Các HS khác chú ý chữa bài, theo dõi nhận xét bài các nhóm trên bảng.
Đáp án trắc nghiệm:
[BẢNG] Câu 1 | Câu 2 | Câu 3 | Câu 4 | Câu 5
[BẢNG] D | D | D | D | C
Gợi ý thực hiện phần Luyện tập: 
Câu 1: 
Đây là lỗi chia cho 0. Nếu gặp lỗi này cần tìm ra vị trí gây lỗi để biết phép tính nào tạo ra phép chia cho 0. Sau đó sẽ tiến hành các biện pháp xử lí lỗi ngay trong chương trình, ví dụ chỉ cho phép thực hiện phép chia khi mẫu số khác 0.
Câu 2: 
Chương trình trên có lỗi do khi nhập dữ liệu từ bàn phím chưa thực hiện chuyển đổi sang số nguyên. Cần sửa lại hai câu lệnh đầu như sau:
Bước 4: Đánh giá kết quả thực hiện: 
- GV chữa bài, chốt đáp án, tuyên dương các hoạt động tốt, nhanh và chính xác.
[2.1.NC1a: HS thực hiện các tương tác được xác định rõ ràng với công nghệ số (làm bài tập online) trong lớp học.
[5.2.NC1b: HS phát hiện lỗi và áp dụng phương pháp gỡ lỗi phù hợp.]
4. HOẠT ĐỘNG VẬN DỤNG
a) Mục tiêu: Học sinh thực hiện làm bài tập vận dụng để nắm vững kiến thức.
b) Nội dung: HS sử dụng SGK và vận dụng kiến thức đã học để hoàn thành bài tập Vận dụng 1, 2 (SGK – tr148) và một số bài tập làm thêm.
c) Sản phẩm: Bài làm của HS, kĩ năng giải quyết nhiệm vụ học tập.
d) Tổ chức thực hiện: 
Bước 1: GV chuyển giao nhiệm vụ
- GV yêu cầu HS hoàn thành bài tập Vận dụng 1, 2 (SGK - tr148).
- GV giao một số bài tập làm thêm để HS thực hiện:
Câu 1: Viết chương trình nhập số n, sau đó lần lượt nhập n số của dãy. Yêu cầu khi nhập vào các số sẽ được sắp xếp ngay theo thứ tự tăng dần. Viết chương trình sau đó thực hiện các công việc kiểm thử.
Câu 2: Chương trình sau sẽ yêu cầu nhập một danh sách học sinh trong lớp cùng với cân nặng, chiều cao, sau đó tự động tính chỉ số BMI và in ra danh sách các bạn béo phì. Quan sát chương trình và đưa thêm các lệnh in giá trị trung gian để kiểm soát lỗi chương trình.
Bước 2: HS thực hiện nhiệm vụ học tập
- HS suy nghĩ, đưa ra đáp án.
- GV điều hành, quan sát, hỗ trợ.
Bước 3: Báo cáo kết quả hoạt động, thảo luận
- HS trình bày kết quả. 
- Các HS khác theo dõi, bổ sung ý kiến.
Gợi ý thực hiện phần Vận dụng:
Câu 1: 
Chương trình trên lỗi tại dòng lệnh thứ 4 (lệnh while j > 1 and A[j] < A[j - 1]:)
Sửa lại dòng lệnh này như sau: while j > 0 and A[j] < A[j - 1]:
Câu 2: 
Không đảm bảo hết lỗi. Việc kiểm tra chương trình bằng các bộ dữ liệu test càng nhiều sẽ càng làm tăng độ tin cậy của chương trình nhưng vẫn chưa đảm bảo tìm ra hết lỗi của chương trình, hay nói cách khác chưa chứng minh được rằng chương trình đúng.
Bài tập làm thêm:
Câu 1: Chương trình có thể viết như sau:
Câu 2: Chương trình có thể viết như sau:
Bước 4: Đánh giá kết quả thực hiện
- GV nhận xét, đánh giá, đưa ra một vài ý mà HS còn thiếu, chốt đáp án.
[5.2.NC1b: HS đọc hiểu mã nguồn, phát hiện và sửa lỗi chương trình.
3.4.NC1a: HS viết chương trình và thực hiện các phương pháp kiểm thử.]
* HƯỚNG DẪN VỀ NHÀ
Ghi nhớ kiến thức trong bài. 
Hoàn thành các bài tập trong SBT.
Chuẩn bị bài mới Bài 31 - Thực hành viết chương trình đơn giản.
```

</details>

