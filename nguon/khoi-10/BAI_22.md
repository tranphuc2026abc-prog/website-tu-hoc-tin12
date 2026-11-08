# Bài 22. KIỂU DỮ LIỆU DANH SÁCH

> Học liệu được chuyển định dạng từ KHBD Tin học 10 do giáo viên cung cấp. Nội dung trích xuất đầy đủ được giữ ở phần cuối để đối chiếu.

## Chủ đề
GIẢI QUYẾT VẤN ĐỀ VỚI SỰ TRỢ GIÚP CỦA MÁY TÍNH

## Mục tiêu kiến thức từ KHBD

Học xong bài này, HS đạt các yêu cầu sau:
Biết được kiểu dữ liệu danh sách (list), cách khởi tạo và truy cập từng phần tử của danh sách.
Biết và thực hiện được cách duyệt các phần tử của danh sách bằng lệnh for.

## Trọng tâm hoạt động

Hoạt động 1: Kiểu dữ liệu danh sách
Hoạt động 2: Duyệt các phần tử của danh sách
Hoạt động 3: Thêm phần tử vào danh sách
Hoạt động 4: Thực hành khởi tạo, nhập dữ liệu, thêm phần tử cho danh sách

## Nội dung KHBD đầy đủ đã trích xuất

<details>
<summary>Mở nội dung KHBD</summary>

```text
Ngày soạn: .../.../...
Ngày dạy: .../.../...
BÀI 22: KIỂU DỮ LIỆU DANH SÁCH
(2 tiết)
I. MỤC TIÊU
1. Kiến thức
Học xong bài này, HS đạt các yêu cầu sau:
Biết được kiểu dữ liệu danh sách (list), cách khởi tạo và truy cập từng phần tử của danh sách.
Biết và thực hiện được cách duyệt các phần tử của danh sách bằng lệnh for.
2. Năng lực 
 - Năng lực chung:
Năng lực tự chủ và tự học trong tìm tòi khám phá
Năng lực giao tiếp và hợp tác trong trình bày, thảo luận và làm việc nhóm
Năng lực tư duy và giải quyết vấn đề một cách sáng tạo trong thực hành, vận dụng.
- Năng lực riêng: 
Thực hành được một số phương thức đơn giản trên dữ liệu danh sách.
- Năng lực số:
6.2.NC1a: Sử dụng được các công cụ AI tạo sinh (ChatGPT, Copilot) để hỗ trợ tạo dữ liệu mẫu (dataset) cho danh sách và giải thích/sửa lỗi (debug) các thông báo lỗi cú pháp thường gặp khi thao tác với List.
3.4.NC1a: Viết được chương trình Python sử dụng kiểu dữ liệu danh sách để lưu trữ và xử lý dãy số hoặc dãy văn bản nhằm giải quyết bài toán thực tế.
2.3.NC1b: Hiểu và áp dụng được cấu trúc dữ liệu mảng/danh sách để quản lý thông tin một cách khoa học thay vì sử dụng các biến rời rạc.
3. Phẩm chất
Hình thành ý thức trách nhiệm, tính cẩn thận khi làm việc nhóm, phẩm chất làm việc chăm chỉ, chuyên cần để hoàn thành một nhiệm vụ.
Nghiêm túc, tập trung, tích cực và chủ động.
II. THIẾT BỊ DẠY HỌC VÀ HỌC LIỆU 
1. Đối với GV
- SGK, tài liệu giảng dạy, giáo án PPT.
- Phòng thực hàng máy tính cài sẵn Python và kết nối Internet.
- Máy chiếu.
- Video AI tạo bằng công cụ AI được dùng để khởi động bài học.
2. Đối với HS
- SGK, SBT, vở ghi.
III. TIẾN TRÌNH DẠY HỌC
1. HOẠT ĐỘNG KHỞI ĐỘNG 
a) Mục tiêu: Gợi mở cho HS đến khái niệm danh sách (list).
b) Nội dung: HS dựa vào hiểu biết của bản thân để trả lời câu hỏi.
c) Sản phẩm: Từ yêu cầu HS vận dụng kiến thức để trả lời câu hỏi GV đưa ra.
d) Tổ chức thực hiện: 
Bước 1: GV chuyển giao nhiệm vụ: 
- GV yêu cầu xem video AI được thiết kế để phục vụ bài dạy và trả lời câu hỏi xuất hiện trong video đó.
- GV giới thiệu: Em đã được học những kiểu dữ liệu cơ bản của Python như số nguyên, số thực xâu kí tự, kiểu dữ liệu lôgic. Tuy nhiên, khi em cần lưu một dãy các số hay một danh sách học sinh thì cần kiểu dữ liệu dạng danh sách (còn gọi là dãy hay mảng). Kiểu dữ liệu danh sách được dùng nhiều nhất trong Python là kiểu list.
- GV yêu cầu HS: Em hãy tìm một số dữ liệu kiểu danh sách thường gặp trên thực tế.
Bước 2: HS thực hiện nhiệm vụ: 
- HS xem video và suy nghĩ câu trả lời.
- HS chú ý lắng nghe, suy nghĩ câu trả lời.
Bước 3: Báo cáo kết quả học tập, thảo luận: 
- GV gọi đại diện HS đứng lên trình bày kết quả
- HS khác lắng nghe, nhận xét, bổ sung.
Một số dữ liệu kiểu danh sách thường gặp trên thực tế như:
- Danh sách học sinh được khen thưởng.
- Danh sách các học sinh trong lớp.
- Bảng điểm của lớp 10A3.
- Báo cáo các khoản thu, chi của thủ quỹ...
Bước 4: Đánh giá kết quả thực hiện: 
- GV nhận xét, đánh giá và kết luận.
[6.1.NC1a: HS sử dụng công cụ AI hoặc sản phẩm số do GV cung cấp để tiếp nhận thông tin, trả lời câu hỏi đơn giản.
2.1.NC1a: HS thực hiện các tương tác cơ bản với học liệu số (xem video, trả lời câu hỏi trên môi trường số).
1.1.NC1a: HS tiếp cận, khai thác được thông tin từ nguồn học liệu số dưới sự hướng dẫn của GV.]
- GV đánh giá kết quả của HS, trên cơ sở đó dẫn dắt HS vào bài học mới - Bài 22. Kiểu dữ liệu danh sách.
2. HÌNH THÀNH KIẾN THỨC MỚI
Hoạt động 1: Kiểu dữ liệu danh sách
a) Mục tiêu: 
- HS tìm hiểu khái niệm và các lệnh làm việc đầu tiên với dữ liệu kiểu danh sách. 
- Sử dụng được công cụ số để tìm hiểu kiến thức.
b) Nội dung: Khởi tạo và tìm hiểu dữ liệu kiểu danh sách.
c) Sản phẩm: HS thực hiện Hoạt động 1, câu hỏi và bài tập củng cố, hoàn thành tìm hiểu kiến thức.
d) Tổ chức thực hiện:
[BẢNG] HOẠT ĐỘNG CỦA GV VÀ HS | SẢN PHẨM DỰ KIẾN | NLS
[BẢNG] Bước 1: GV chuyển giao nhiệm vụ:- GV nhắc lại cho HS các kiểu dữ liệu đã học là int, float, str, bool. Các kiểu dữ liệu này đều là dữ liệu dạng "đơn", nghĩa là chỉ có một giá trị. Ngược lại, kiểu dữ liệu danh sách là kiểu dữ liệu có nhiều phần tử, hay kiểu dữ liệu bao gồm một dãy các giá trị.- GV yêu cầu HS: Sử dụng Chatbot AI để tìm hiểu cách khởi tạo dữ liệu danh sách; quy tắc đánh chỉ số; cách truy cập phần tử trong danh sách.- GV tiếp tục cho HS quan sát Ví dụ 2, ví dụ 3 SGK tr.111 để:+ Biết cách thay đổi hoặc xóa phần tử của danh sách.+ Biết cách tạo danh sách rỗng và các phép toán ghép danh sách.- GV yêu cầu HS đọc và ghi nhớ khung kiến thức trọng tâm.- GV cho HS hoạt động nhóm đôi để hoàn thành Câu hỏi và bài tập củng cố SGK trang 112: 1. Cho danh sách A = [1, 0, "One", 9, 15, "Two", True, False]. Hãy cho biết giá trị các phần tử:a) A[0]                      b) A[2]c) A[7]                      d) A[len(A)]2. Giả sử A là một danh sách các số, mỗi lệnh sau thực hiện công việc gì?a) A = A + [10]            b) del A[0]c) A = [100] + A          d) A = A[1]*25Bước 2: HS thực hiện nhiệm vụ: - HS mở Chatbot và nhập lệnh: + “Trong Python, kiểu dữ liệu danh sách được khởi tạo như thế nào? Cho 1 ví dụ cụ thể.”+ “Tại sao trong Python phần tử đầu tiên của List lại có chỉ số là 0? Vẽ mô hình minh họa chỉ số dương và âm của một List gồm 3 phần tử.”- HS ghi nhớ và củng cố kiến thức bằng cách hoàn thành bài tập.- GV hướng dẫn, theo dõi, hỗ trợ HS nếu cần thiết.Bước 3: Báo cáo kết quả hoạt động, thảo luận: - HS đọc kết quả từ AI, đối chiếu với SGK và rút ra kết luận.- Đại diện nhóm trình bày.- Một số HS khác nhận xét, bổ sung cho bạn. Bước 4: Đánh giá kết quả thực hiện: - GV nêu nhận xét, tổng quát lại kiến thức. | 1. Kiểu dữ liệu danh sách- Kiểu dữ liệu danh sách được khởi tạo như sau:<tên list> = [<v1>, < v2>, ..., <vn>]trong đó các giá trị <v1>, <v2>, ..., <vn> có thể có kiểu dữ liệu khác nhau.- Truy cập hoặc thay đổi giá trị của từng phần tử thông qua chỉ số:<danh sách> [<chỉ số>]- Chỉ số của danh sách bắt đầu từ 0 đến len() - 1, trong đó len () là lệnh tính độ dài danh sách.- Để xóa một phần tử của danh sách, ta dùng lệnh del.Câu hỏi và bài tập củng cố:1. a) 1                 b) "One"    c) False           d) Lỗi chỉ số2. a) Bổ sung phần tử 10 vào cuối danh sách A.     b) Xóa phần tử đầu tiên của danh sách A.     c) Bổ sung số 100 vào đầu danh sách A.     d) Thiết lập biến A mới là tích của 25 với giá trị phần tử thứ hai của danh sách A. | 6.2.NC1a: Sử dụng công cụ AI để trực quan hóa các khái niệm trừu tượng (indexing).
Hoạt động 2: Duyệt các phần tử của danh sách
a) Mục tiêu: HS biết được lệnh duyệt các phần tử trên danh sách bằng lệnh for.
b) Nội dung: GV hướng dẫn HS thực hành để hiểu cách duyệt phần tử trên đối tượng danh sách bằng lệnh for thông qua lệnh range().
c) Sản phẩm: HS dùng lệnh for để duyệt danh sách.
d) Tổ chức thực hiện: 
[BẢNG] HOẠT ĐỘNG CỦA GV VÀ HS | SẢN PHẨM DỰ KIẾN | NLS
[BẢNG] Bước 1: GV chuyển giao nhiệm vụ:- GV yêu cầu HS đọc nhiệm vụ và thực hiện Hoạt động 2 SGK trang 112: Quan sát các lệnh sau để biết cách dùng lệnh for duyệt lần lượt các phần tử của một danh sách:+ Ví dụ 1: Duyệt và in ra từng phần tử của danh sách+ Ví dụ 2: Duyệt và in ra một phần của danh sách.- GV chốt lại kiến thức bằng cách cho HS đọc khung kiến thức trọng tâm.- GV chia lớp thành các nhóm nhỏ, yêu cầu các nhóm hoàn thành Câu hỏi và bài tập củng cố SGK tr.113:1. Giải thích các lệnh ở mỗi câu sau thực hiện công việc gì?a)b)2. Cho dãy số nguyên A, viết chương trình in ra các số chẵn của A.Bước 2: HS thực hiện nhiệm vụ: - HS đọc thông tin SGK và hoàn thành yêu cầu.- HS ghi chép, chú ý lắng nghe.- GV quan sát và trợ giúp HS. Bước 3: Báo cáo kết quả hoạt động, thảo luận: - HS giơ tay phát biểu, trình bày kết quả.- Một số HS khác nhận xét, bổ sung cho bạn. Bước 4: Đánh giá kết quả thực hiện: GV tổng quát lưu ý lại kiến thức và yêu cầu HS ghi chép đầy đủ vào vở. | 2. Duyệt các phần tử của danh sáchCó thể duyệt lần lượt các phần tử của danh sách bằng lệnh for kết hợp với vùng giá trị của lệnh range().Câu hỏi và bài tập củng cố:1. a) Tính tổng các số dương trong danh sách A.     b) Đếm số các số dương trong danh sách A.2. Chương trình có thể như sau: | 3.4.NC1a: Sử dụng ngôn ngữ lập trình để giải quyết bài toán duyệt và lọc dữ liệu trong danh sách. 
Hoạt động 3: Thêm phần tử vào danh sách
a) Mục tiêu: HS biết và làm việc được với lệnh (phương thức) đầu tiên của danh sách là append(). Đây là hoạt động khó nhất của bài học này.
b) Nội dung: GV hướng dẫn HS tìm hiểu lệnh thêm phần tử vào danh sách.
c) Sản phẩm: HS thực hiện Hoạt động 3, trả lời Câu hỏi và bài tập củng cố SGK tr.113, hoàn thành tìm hiểu kiến thức.
d) Tổ chức thực hiện: 
[BẢNG] HOẠT ĐỘNG CỦA GV VÀ HS | SẢN PHẨM DỰ KIẾN | NLS
[BẢNG] Bước 1: GV chuyển giao nhiệm vụ:- GV yêu cầu HS: Sử dụng Chatbot AI để tìm hiểu cách thêm phần tử vào một danh sách bằng phương thức append().- GV chốt lại kiến thức bằng cách cho HS đọc khung kiến thức trọng tâm.- GV yêu cầu HS hoàn thành Câu hỏi và bài tập củng cố SGK tr.113 theo nhóm đôi:1. Sau khi thêm một phần tử vào danh sách A bằng lệnh append() thì độ dài danh sách A thay đổi như thế nào?2. Danh sách A sẽ như thế nào sau các lệnh sau?Bước 2: HS thực hiện nhiệm vụ: - HS mở Chatbot và nhập lệnh: “Hãy giải thích cách sử dụng phương thức append() để thêm phần tử vào cuối danh sách. Cho 1 ví dụ cụ thể”.- GV hướng dẫn, theo dõi, hỗ trợ HS nếu cần thiết. Bước 3: Báo cáo kết quả hoạt động, thảo luận: - HS đọc kết quả từ AI, đối chiếu với SGK và rút ra kết luận.- HS khác lắng nghe, nhận xét và bổ sung. Bước 4: Đánh giá kết quả thực hiện: GV tổng quát lưu ý lại kiến thức và yêu cầu HS ghi chép đầy đủ vào vở. | 3. Thêm phần tử vào danh sách- Python có một số lệnh dành riêng (phương thức) cho dữ liệu kiểu danh sách. Cú pháp các lệnh đó như sau:<danh sách>.<phương thức>- Lệnh thêm phần tử vào cuối danh sách là: <danh sách>.append().Câu hỏi và bài tập củng cố:1. Độ dài danh sách A sẽ tăng lên một đơn vị.2. [2, 10, 1, 0, 100] | 3.4.NC1a: Thao tác thay đổi cấu trúc dữ liệu (thêm mới) bằng lệnh lập trình chuẩn. 
Hoạt động 4: Thực hành khởi tạo, nhập dữ liệu, thêm phần tử cho danh sách
a) Mục tiêu: HS thực hành các thao tác khởi tạo, nhập, bổ sung dữ liệu cho danh sách.
b) Nội dung: 
- Nhiệm vụ 1, dùng để luyện tập với lệnh append().
- Nhiệm vụ 2, luyện tập sâu hơn với lệnh append().
c) Sản phẩm: HS viết chương trình khởi tạo, nhập dữ liệu, thêm phần tử cho danh sách. 
d) Tổ chức thực hiện: 
[BẢNG] HOẠT ĐỘNG CỦA GV VÀ HS | SẢN PHẨM DỰ KIẾN | NLS
[BẢNG] Bước 1: GV chuyển giao nhiệm vụ:- GV nêu từng nhiệm vụ và yêu cầu HS thực hành theo nhóm đôi:+ Nhiệm vụ 1: Nhập số n từ bàn phím, sau đó nhập danh sách n tên các bạn trong lớp em và in ra danh sách các tên đó, mỗi tên trên một dòng.+ Nhiệm vụ 2: Nhập một dãy số từ bàn phím. Tính tổng, trung bình của dãy và in dãy số trên một hàng ngang.Bước 2: HS thực hiện nhiệm vụ: - HS tự tư duy hoặc nhờ Chatbot gợi ý mã lệnh nếu chưa thạo.- GV quan sát và trợ giúp HS. Bước 3: Báo cáo kết quả hoạt động, thảo luận: - HS soạn thảo chương trình khởi tạo, nhập dữ liệu, thêm phần tử cho danh sách trong môi trường Python.Bước 4: Đánh giá kết quả thực hiện: GV quan sát, nhận xét kết quả của HS. | - Nhiệm vụ 1:Hướng dẫn: Chương trình có thể như sau:- Nhiệm vụ 2:Hướng dẫn: Chương trình có thể như sau: | - 6.2.NC1a: Sử dụng AI để vượt qua rào cản kỹ thuật (cú pháp nhập liệu phức tạp) để tập trung vào logic bài toán.- 2.3.NC1b: Tổ chức và kiểm soát đúng kiểu dữ liệu trong cấu trúc danh sách.
3. HOẠT ĐỘNG LUYỆN TẬP
a) Mục tiêu: HS củng cố lại kiến thức về kiểu dữ liệu danh sách.
b) Nội dung: HS vận dụng các kiến thức đã học để giải bài tập trong phần Luyện tập (SGK - tr114).
c) Sản phẩm học tập: Bài làm của học sinh, kĩ năng giải quyết nhiệm vụ học tập.
d) Tổ chức thực hiện: 
Bước 1: GV chuyển giao nhiệm vụ: 
- GV yêu cầu HS hoạt động cá nhân, hoàn thành Luyện tập 1, 2 (SGK - tr114).
Bước 2: HS thực hiện nhiệm vụ: 
- HS suy nghĩ, hoàn thành các bài tập GV yêu cầu.
- GV quan sát và hỗ trợ, hướng dẫn.
Bước 3: Báo cáo kết quả hoạt động, thảo luận: 
- Mỗi BT GV mời 1 đến 2 HS trình bày. 
- Các HS khác chú ý chữa bài, theo dõi nhận xét bài các nhóm trên bảng.
Bước 4: Đánh giá kết quả thực hiện: 
- GV chữa bài, chốt đáp án, tuyên dương các hoạt động tốt, nhanh và chính xác.
Kết quả: 
Luyện tập 1: del(A[len(A) - 1])
Luyện tập 2: 
Có thể thực hiện lệnh sau để bổ sung phần tử x vào đầu của danh sách A.
A = [x] + A.
[3.4.NC1a: Sử dụng ngôn ngữ lập trình để giải quyết bài toán]
4. HOẠT ĐỘNG VẬN DỤNG
a) Mục tiêu: Học sinh thực hiện làm bài tập vận dụng để nắm vững kiến thức.
b) Nội dung: HS vận dụng kiến thức đã học để làm bài tập Vận dụng (SGK – tr114) và một số bài tập làm thêm.
c) Sản phẩm: Bài làm của học sinh, kĩ năng giải quyết nhiệm vụ học tập.
d) Tổ chức thực hiện: 
Bước 1: GV chuyển giao nhiệm vụ
- GV yêu cầu HS hoàn thành bài tập phần Vận dụng (SGK -tr114).
- GV cho HS thảo luận nhóm đôi và thực hiện các bài tập:
Bài 1: Em hãy viết chương trình nhập một số tự nhiên n và tạo một danh sách các ước số thực của n.
Bài 2: Em hãy viết chương trình tạo danh sách gồm các chữ số của một số tự nhiên n được nhập từ bàn phím.
Bài 3: Kết quả khảo sát về tình hình thu nhập của n (n > 0) gia đình được chọn ngẫu nhiêm ở một địa phương được nhập từ bàn phím vào hai danh sách: danh sách thứ nhất là họ tên các chủ hộ, danh sách thứ hai là thu nhập tương ứng của từng hộ gia đình tính theo đơn vị triệu đồng. Viết các câu lệnh thực hiện việc tạo hai danh sách đó.
Bước 2: HS thực hiện nhiệm vụ
- HS hợp tác thảo luận đưa ra ý kiến.
- GV điều hành, quan sát, hỗ trợ.
Bước 3: Báo cáo kết quả hoạt động, thảo luận
- Đại diện nhóm trình bày kết quả thảo luận, các nhóm khác theo dõi, đưa ý kiến.
Bước 4: Đánh giá kết quả thực hiện
- GV nhận xét, đánh giá, đưa ra một vài ý mà HS còn thiếu, chốt đáp án.
[3.4.NC1a: Sử dụng ngôn ngữ lập trình để giải quyết bài toán]
Đáp án:
Vận dụng: Chương trình có thể như sau:
Bài tập làm thêm:
Bài 1: Chương trình có thể viết như sau:
Bài 2: Chương trình có thể viết như sau:
Bài 3: Chương trình có thể viết như sau:
* HƯỚNG DẪN VỀ NHÀ
Ghi nhớ kiến thức trong bài. 
Hoàn thành bài tập còn lại trong SBT.
Chuẩn bị bài mới Bài 23 - Một số lệnh làm việc với dữ liệu danh sách.
```

</details>

