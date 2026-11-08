# Bài 31. THỰC HÀNH

> Học liệu được chuyển định dạng từ KHBD Tin học 10 do giáo viên cung cấp. Nội dung trích xuất đầy đủ được giữ ở phần cuối để đối chiếu.

## Chủ đề
GIẢI QUYẾT VẤN ĐỀ VỚI SỰ TRỢ GIÚP CỦA MÁY TÍNH

## Mục tiêu kiến thức từ KHBD

Học xong bài này, HS đạt các yêu cầu sau:
Biết cách viết chương trình đơn giản trên Python.
Biết cách sử dụng công thức printline - in các giá trị trung gian và debug - thiết lập điểm dừng và chạy theo từng lệnh.

## Trọng tâm hoạt động

Không phát hiện tiêu đề hoạt động theo mẫu.

## Nội dung KHBD đầy đủ đã trích xuất

<details>
<summary>Mở nội dung KHBD</summary>

```text
Ngày soạn: .../.../...
Ngày dạy: .../.../...
BÀI 31: THỰC HÀNH
VIẾT CHƯƠNG TRÌNH ĐƠN GIẢN
(2 tiết)
I. MỤC TIÊU
1. Kiến thức
Học xong bài này, HS đạt các yêu cầu sau:
Biết cách viết chương trình đơn giản trên Python.
Biết cách sử dụng công thức printline - in các giá trị trung gian và debug - thiết lập điểm dừng và chạy theo từng lệnh.
2. Năng lực 
 - Năng lực chung:
Năng lực tự chủ và tự học trong tìm tòi khám phá
Năng lực giao tiếp và hợp tác trong trình bày, thảo luận và làm việc nhóm
Năng lực tư duy và giải quyết vấn đề một cách sáng tạo trong thực hành, vận dụng.
- Năng lực riêng: 
Thực hành viết chương trình hoàn chỉnh trên Python.
Thực hành được các bước gỡ rối chương trình bằng các công cụ printline - in các giá trị trung gian và debug - thiết lập điểm dừng và chạy theo từng lệnh.
- Năng lực số:
5.2.NC1b: Sử dụng thành thạo tính năng gỡ lỗi của IDE để kiểm soát luồng chạy chương trình và phát hiện lỗi logic.
1.2.NC1b: Phân tích trạng thái thay đổi của dữ liệu trong bộ nhớ thông qua việc quan sát biến trong quá trình gỡ lỗi, từ đó hiểu sâu sắc về thuật toán.
6.2.NC1b: Sử dụng AI để sinh ra các bộ dữ liệu kiểm thử để đảm bảo chương trình không bỏ sót trường hợp.
3.1.NC1a: Tổ chức mã nguồn khoa học dưới dạng các hàm chức năng để tạo ra sản phẩm phần mềm dễ bảo trì.
3. Phẩm chất
Nghiêm túc, tập trung, tích cực và chủ động.
Có thái độ tự giác, hợp tác khi thảo luận nội dung bài học.
Trung thực hoàn thành đầy đủ các bài tập.
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
a) Mục tiêu:
- Ôn tập lại cho HS kiến thức đã học về một số phương pháp kiểm thử chương trình.
- Tạo tâm thế vui vẻ, hào hứng cho HS trước khi bước vào bài học mới.
b) Nội dung: GV đưa ra câu hỏi, HS trả lời.
c) Sản phẩm: Từ yêu cầu, HS vận dụng kiến thức đã học để trả lời câu hỏi GV đưa ra.
d) Tổ chức thực hiện: 
Bước 1: GV chuyển giao nhiệm vụ: 
- GV yêu cầu xem video AI được thiết kế để phục vụ bài dạy và trả lời câu hỏi xuất hiện trong video đó.
- GV đặt câu hỏi: Các phương pháp nào dưới đây được coi là phương pháp kiểm thử chương trình?
A. In các dữ liệu trung gian.
B. Viết chú thích chi tiết trong chương trình.
C. Sinh các bộ dữ liệu test để kiểm tra chương trình.
D. Đặt tên biến và hàm có ý nghĩa.
E. Tạo điểm dừng để quan sát và phát hiện lỗi chương trình.
F. Ghi nhớ các mã lỗi ngoại lệ khi phát sinh.
Bước 2: HS thực hiện nhiệm vụ học tập: 
- HS xem video và suy nghĩ câu trả lời.
- HS chú ý theo dõi, suy nghĩ câu trả lời.
Bước 3: Báo cáo kết quả hoạt động, thảo luận: 
- GV gọi một số HS trả lời.
- HS khác nhận xét, bổ sung.
Đáp án: A, C, E
Bước 4: Đánh giá kết quả thực hiện: 
- GV nhận xét, đánh giá và kết luận.
[6.1.NC1a: HS sử dụng công cụ AI hoặc sản phẩm số do GV cung cấp để tiếp nhận thông tin, trả lời câu hỏi đơn giản.
2.1.NC1a: HS thực hiện các tương tác cơ bản với học liệu số (xem video, trả lời câu hỏi trên môi trường số).
1.1.NC1a: HS tiếp cận, khai thác được thông tin từ nguồn học liệu số dưới sự hướng dẫn của GV.]
- GV dẫn dắt HS vào bài học mới: Trong bài học ngày hôm nay, chúng ta sẽ cùng nhau thực hành viết một số chương trình đơn giản trong môi trường Python - Bài 31: Thực hành viết chương trình đơn giản.
2. HOẠT ĐỘNG THỰC HÀNH
a) Mục tiêu: HS được thực hành viết chương trình đơn giản bằng ngôn ngữ Python và rèn luyện kĩ năng gỡ rối chương trình bằng công cụ debug.
b) Nội dung: GV lần lượt hướng dẫn HS làm từng nhiệm vụ của bài thực hành.
c) Sản phẩm: HS viết được chương trình hoàn chỉnh, thực hiện đồng thời với sử dụng công cụ gỡ rối của phần mềm lập trình.
d) Tổ chức thực hiện:
[BẢNG] HOẠT ĐỘNG CỦA GV VÀ HS | SẢN PHẨM DỰ KIẾN | NLS
[BẢNG] Bước 1: GV chuyển giao nhiệm vụ:- GV cho HS đọc yêu cầu và lần lượt hướng dẫn HS hoàn thành từng nhiệm vụ của bài thực hành:+ Nhiệm vụ 1: Viết chương trình nhập từ bàn phím số tự nhiên n, kiểm tra n có phải là số nguyên tố hay không. Nếu n là hợp số thì in kết quả phân tích n thành các thừa số nguyên tố. Chú ý số 1 không là số nguyên tố và cũng không là hợp số.+ Nhiệm vụ 2: Viết chương trình nhập từ bàn phím ba số thực a, b, c và tìm nghiệm của phương trình bậc hai: ax2 + bx + c = 0. Chương trình cần xét đầy đủ các trường hợp xảy ra.- GV yêu cầu HS viết chương trình hoàn chỉnh, yêu cầu HS thực hiện đồng thời với sử dụng công cụ gỡ rối của phần mềm lập trình.- GV gợi ý cách thức gỡ rối là công cụ điểm dừng và chèn lệnh print() vào bên trong chương trình để quan sát các biến nhớ trung gian trong quá trình thực hiện chương trình.- GV cho HS tham khảo các chương trình mẫu trong SGK trang 149 - 152.Bước 2: HS thực hiện nhiệm vụ học tập:- HS lắng nghe GV hướng dẫn.- HS thực hành, có thể sử dụng chương trình gợi ý trong SGK trang 149 - 152.Bước 3: Báo cáo kết quả hoạt động, thảo luận: - HS xung phong trình bày kết quả thực hiện.- Các HS còn lại quan sát, nhận xét và bổ sung ý kiến (nếu có).Bước 4: Đánh giá kết quả thực hiện: GV khen ngợi, khích lệ HS có tinh thần nghiêm túc thực hành và chuyển sang nội dung luyện tập. | - Nhiệm vụ 1: + Chương trình có thể như sau:+ Chạy chương trình với công cụ gỡ lỗi của phần mềm lập trình:- Nhiệm vụ 2:Chương trình có thể như sau: | - 3.4.NC1a: HS viết chương trình giải quyết bài toán cụ thể.- 5.2.NC1b: Chạy chương trình với công cụ gỡ lỗi của phần mềm lập trình.
3. HOẠT ĐỘNG LUYỆN TẬP
a) Mục tiêu: HS rèn luyện, củng cố kĩ năng viết chương trình đơn giản bằng ngôn ngữ Python.
b) Nội dung: HS vận dụng các kiến thức đã học để hoàn thành Luyện tập 1, 2 (SGK - tr152).
c) Sản phẩm học tập: HS viết chương trình hoàn chỉnh thỏa mãn các yêu cầu của đề bài.
d) Tổ chức thực hiện: 
Bước 1: GV chuyển giao nhiệm vụ: 
- GV tổng hợp các kiến thức cần ghi nhớ cho HS.
- GV tổ chức cho HS làm Luyện tập 1, 2 SGK - tr152.
Bước 2: HS thực hiện nhiệm vụ học tập: 
- HS suy nghĩ, hoàn thành các bài tập GV yêu cầu.
- GV quan sát và hỗ trợ, hướng dẫn.
Bước 3: Báo cáo kết quả hoạt động, thảo luận: 
- Mỗi BT GV mời 1 đến 2 HS trình bày. Các HS khác chú ý chữa bài, theo dõi nhận xét bài các nhóm trên bảng.
Gợi ý thực hiện: 
Luyện tập 1: Chương trình có thể như sau:
Luyện tập 2: Chương trình có thể như sau:
Bước 4: Đánh giá kết quả thực hiện: 
- GV chữa bài, chốt đáp án, tuyên dương các hoạt động tốt, nhanh và chính xác.
[3.4.NC1a: HS viết chương trình giải quyết bài toán cụ thể.]
4. HOẠT ĐỘNG VẬN DỤNG
a) Mục tiêu: Học sinh thực hiện làm bài tập vận dụng để nắm vững kiến thức.
b) Nội dung: HS sử dụng SGK và vận dụng kiến thức đã học để hoàn thành bài tập Vận dụng 1, 2 (SGK – tr152) và một số bài tập làm thêm.
c) Sản phẩm: Bài làm của HS, kĩ năng giải quyết nhiệm vụ học tập.
d) Tổ chức thực hiện: 
Bước 1: GV chuyển giao nhiệm vụ
- GV yêu cầu HS thảo luận nhóm đôi hoàn thành bài tập Vận dụng 1, 2 (SGK - tr152).
- GV giao một số bài tập làm thêm cho HS:
Câu 1: Cho trước dãy số bất kì A. Em hãy viết chương trình tìm và chỉ ra vị trí đầu tiên của dãy A mà 3 số hạng liên tiếp có giá trị là 1, 2, 3 (có thể tổng quát 3 số bất kì p, q, s). Nếu tìm thấy thì thông báo vị trí tìm thấy, nếu không thì thông báo "không tìm thấy mẫu".
Câu 2: Em hãy viết chương trình nhập một xâu kí tự bất kì từ bàn phím. Cần sắp xếp lại các chữ số thì dồn sang trái, các chữ cái tiếng Anh thì dồn sang phải xâu, các kí tự khác thì giữ nguyên vị trí.
Câu 3: Em hãy viết chương trình nhập số tự nhiên n > 1, sau đó in ra tất cả các ước số nguyên tố khác nhau của n theo hàng ngang trên màn hình. Ví dụ:
- Nếu n = 10 thì in ra 2 5.
- Nếu n = 12 thì in ra 2 3.
Bước 2: HS thực hiện nhiệm vụ học tập
- HS hợp tác, thảo luận đưa ra ý kiến.
- GV điều hành, quan sát, hỗ trợ.
Bước 3: Báo cáo kết quả hoạt động, thảo luận
- Đại diện nhóm trình bày kết quả thảo luận, các nhóm khác theo dõi, bổ sung ý kiến.
Gợi ý thực hiện phần Vận dụng:
Câu 1: Chương trình có thể như sau:
Áp dụng tính cho thế kỉ XXI từ năm 2000 đến năm 2100 có 25 năm nhuận.
Câu 2: Chương trình có thể như sau:
Bài tập làm thêm:
Câu 1: Chương trình có thể như sau: 
Câu 2: Chương trình có thể như sau: 
Câu 3: Chương trình có thể viết như sau:
Bước 4: Đánh giá kết quả thực hiện
- GV nhận xét, đánh giá, đưa ra một vài ý mà HS còn thiếu, chốt đáp án.
[3.4.NC1a: HS viết chương trình giải quyết bài toán cụ thể.]
* HƯỚNG DẪN VỀ NHÀ
Ghi nhớ kiến thức trong bài. 
Hoàn thành các bài tập còn lại trong SBT.
Chuẩn bị bài mới Bài 32 - Ôn tập lập trình Python.
```

</details>

