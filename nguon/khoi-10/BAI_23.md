# Bài 23. MỘT SỐ LỆNH LÀM VIỆC VỚI DỮ LIỆU DANH SÁCH (3 TIẾT)

> Học liệu được chuyển định dạng từ KHBD Tin học 10 do giáo viên cung cấp. Nội dung trích xuất đầy đủ được giữ ở phần cuối để đối chiếu.

## Chủ đề
GIẢI QUYẾT VẤN ĐỀ VỚI SỰ TRỢ GIÚP CỦA MÁY TÍNH

## Mục tiêu kiến thức từ KHBD

Học xong bài này, HS đạt các yêu cầu sau:
Biết cách duyệt danh sách bằng toán tử in.
Biết được một số phương thức thường dùng với danh sách.

## Trọng tâm hoạt động

Hoạt động 1: Duyệt danh sách với toán tử in
Hoạt động 2: Một số lệnh làm việc với danh sách
Hoạt động 3: Thực hành các lệnh làm việc với dữ liệu kiểu danh sách

## Nội dung KHBD đầy đủ đã trích xuất

<details>
<summary>Mở nội dung KHBD</summary>

```text
Ngày soạn: .../.../...
Ngày dạy: .../.../...
BÀI 23: MỘT SỐ LỆNH LÀM VIỆC VỚI DỮ LIỆU DANH SÁCH (3 TIẾT)
I. MỤC TIÊU
1. Kiến thức 
Học xong bài này, HS đạt các yêu cầu sau:
Biết cách duyệt danh sách bằng toán tử in.
Biết được một số phương thức thường dùng với danh sách.
2. Năng lực 
 - Năng lực chung:
Giải quyết được những nhiệm vụ học tập một cách độc lập, theo nhóm và thể hiện sự sáng tạo.
Góp phần phát triển năng lực giao tiếp và hợp tác qua hoạt động nhóm và trao đổi công việc với giáo viên.
- Năng lực riêng: 
Thực hiện được một số phương thức thường dùng với danh sách.
- Năng lực số:
5.2.NC1a: Viết được mã nguồn Python sử dụng các phương thức của List để thao tác dữ liệu (thêm, sửa, xóa) đúng cú pháp.
6.2.NC1a: Sử dụng Chatbot AI để giải thích sự khác biệt về hiệu năng (tốc độ) giữa việc chèn đầu danh sách (insert(0)) và chèn cuối danh sách (append), hoặc để sinh dữ liệu kiểm thử (Test Case) cho bài toán tìm kiếm mẫu.
1.2.NC1a: Phân tích được logic của việc xóa phần tử trong khi duyệt danh sách (vấn đề trượt chỉ số) để chọn cấu trúc lặp while thay vì for.
1.1.NC1a: Đáp ứng được nhu cầu thông tin.
3. Phẩm chất
Chăm chỉ tích cực xây dựng bài, có trách nhiệm, chủ động chiếm lĩnh kiến thức theo sự hướng dẫn của GV.
Có ý thức học tập, ý thức tìm tòi, khám phá và sáng tạo, có ý thức làm việc nhóm, tôn trọng ý kiến các thành viên khi hợp tác.
II. THIẾT BỊ DẠY HỌC VÀ HỌC LIỆU 
1. Đối với GV 
- SGK, tài liệu giảng dạy, giáo án PPT.
- Máy tính, máy chiếu.
- Video AI tạo bằng công cụ AI được dùng để khởi động bài học.
2. Đối với HS
- SGK, SBT, vở ghi.
- Thiết bị di động/máy tính có kết nối Internet (sử dụng theo nhóm).
- Máy tính cài đặt Python.
III. TIẾN TRÌNH DẠY HỌC
A. HOẠT ĐỘNG KHỞI ĐỘNG 
a) Mục tiêu: Gợi mở HS học các phương thức khác liên quan đến danh sách.
b) Nội dung: HS dựa vào hiểu biết của bản thân để trả lời câu hỏi.
c) Sản phẩm: Từ yêu cầu, HS vận dụng kiến thức để trả lời câu hỏi GV đưa ra.
d) Tổ chức thực hiện: 
Bước 1: GV chuyển giao nhiệm vụ: 
- GV yêu cầu xem video AI được thiết kế để phục vụ bài dạy và trả lời câu hỏi xuất hiện trong video đó.
- GV đặt vấn đề: Trong bài trước chúng ta đã biết cách dùng lệnh append để thêm phần tử vào cuối một danh sách. Vậy Python có những lệnh nào dùng để:
 - Xóa nhanh một danh sách?
 - Chèn thêm phần tử vào đầu hay giữa danh sách?
 - Kiểm tra một phần tử có nằm trong một danh sách hay không?
Bước 2: HS thực hiện nhiệm vụ: 
- HS xem video và suy nghĩ câu trả lời.
- HS chú ý lắng nghe, suy nghĩ câu trả lời.
Bước 3: Báo cáo kết quả học tập, thảo luận: 
- GV gọi đại diện HS đứng lên trình bày kết quả
- HS khác lắng nghe, nhận xét, bổ sung.
Gợi ý:
- Để xóa toàn bộ danh sách dùng lệnh clear( ), để xóa phần tử có giá trị là value dùng lệnh remove(value).
- Để chèn thêm phần tử, dùng lệnh insert.
- Dùng toán tử in để kiểm tra một giá trị có nằm trong danh sách hay không.
Bước 4: Đánh giá kết quả thực hiện: 
- GV nhận xét, đánh giá và kết luận.
[6.1.NC1a: HS sử dụng công cụ AI hoặc sản phẩm số do GV cung cấp để tiếp nhận thông tin, trả lời câu hỏi đơn giản.
2.1.NC1a: HS thực hiện các tương tác cơ bản với học liệu số (xem video, trả lời câu hỏi trên môi trường số).
1.1.NC1a: HS tiếp cận, khai thác được thông tin từ nguồn học liệu số dưới sự hướng dẫn của GV.]
- Vì đây là câu hỏi gợi mở vào bài học nên chưa xét đến tính đúng, sai trong câu trả lời của HS. Dựa trên câu trả lời đó, GV dẫn dắt HS vào bài học mới - Bài 23. Một số lệnh làm việc với dữ liệu danh sách.
B. HÌNH THÀNH KIẾN THỨC MỚI
Hoạt động 1: Duyệt danh sách với toán tử in
a) Mục tiêu: HS biết được ý nghĩa của toán tử in với danh sách và thực hiện được lệnh duyệt trực tiếp từng phần tử của danh sách bằng toán tử in không thông qua lệnh range().
b) Nội dung: Sử dụng toán tử in với danh sách.
c) Sản phẩm: HS thực hiện Hoạt động 1, câu hỏi và bài tập củng cố, hoàn thành tìm hiểu kiến thức.
d) Tổ chức thực hiện:
[BẢNG] HOẠT ĐỘNG CỦA GV VÀ HS | SẢN PHẨM DỰ KIẾN | NLS
[BẢNG] Bước 1: GV chuyển giao nhiệm vụ:- GV cho HS đọc, thảo luận hoặc thao tác trực tiếp thông qua các ví dụ để HS biết và hiểu được ý nghĩa của toán tử in trong các trường hợp sau:1) Kiểm tra một phần tử có nằm trong một danh sách hay không?2) Sử dụng từ khóa in trong lệnh duyệt trực tiếp từng phần tử trong danh sách.- GV có thể lưu ý và nhấn mạnh lại cho HS biết: Lệnh duyệt trên dãy đã học trong Bài 21 có dạng:for i in range(n): <các lệnh>thì trong lệnh trên từ khóa in chính là toán tử in vừa học trong bài. Lệnh (hay hàm) range(n) trả lại dãy (vùng) các giá trị 0, 1, 2, ..., n - 1, do đó lệnh lặp trên sẽ thực hiện lần lượt các bước lặp và cho i nhận các giá trị lần lượt lấy từ range(n).- GV đặt vấn đề: Khi nào dùng for k in A và khi nào dùng for i in range(len(A))?- GV cho HS đọc và ghi nhớ khung kiến thức trọng tâm.- GV yêu cầu HS hoạt động nhóm đôi để hoàn thành Câu hỏi và bài tập củng cố SGK trang 116: 1. Giả sử A = ["0", "1", "01", "10"]. Các biểu thức sau trả về giá trị đúng hay sai?a) 1 in A.               b) "01" in A2. Hãy giải thích ý nghĩa từ khóa in trong câu lệnh sau:for i in range(10):     <các lệnh>Bước 2: HS thực hiện nhiệm vụ: - HS đọc hiểu ví dụ trong SGK.- HS suy nghĩ giải quyết vấn đề GV đưa ra hoặc nhờ sự trợ giúp từ AI: “So sánh ưu nhược điểm của 2 cách duyệt danh sách trong Python: 'for item in list' và 'for i in range(len(list))'. Khi nào nên dùng cách nào?”- HS theo dõi, chú ý lắng nghe GV hướng dẫn.- HS ghi nhớ và củng cố kiến thức bằng cách hoàn thành bài tập.Bước 3: Báo cáo kết quả hoạt động, thảo luận: - Đại diện nhóm trình bày.- Một số HS khác nhận xét, bổ sung cho bạn. Bước 4: Đánh giá kết quả thực hiện: - GV nêu nhận xét, tổng quát lại kiến thức. | 1. Duyệt danh sách với toán tử in- Toán tử in dùng để kiểm tra một phần tử có nằm trong danh sách đã cho hay không. Kết quả trả lại True (Đúng) hoặc False (Sai).<giá trị> in <danh sách>- Có thể duyệt nhanh từng phần tử của danh sách bằng toán tử in và lệnh for mà không cần sử dụng lệnh range().Câu hỏi và bài tập củng cố:1. a) Sai               b) Đúng2. Trong câu lệnh for i in range(10) có ý nghĩa là toán tử in. | - 1.2.NC1a: HS hiểu cách hoạt động của toán tử in.- 1.1.NC1a: Đáp ứng được nhu cầu thông tin.- 6.2.NC1a: Sử dụng AI để phân tích và lựa chọn giải pháp kỹ thuật tối ưu trong lập trình.
Hoạt động 2: Một số lệnh làm việc với danh sách
a) Mục tiêu: HS biết và hiểu được một số lệnh thường dùng khác của danh sách là clear(), insert(), remove().
b) Nội dung: GV hướng dẫn HS tìm hiểu một số lệnh làm việc với danh sách.
c) Sản phẩm: HS quan sát các ví dụ, thực hiện Câu hỏi và bài tập củng cố SGK tr.117, hoàn thành tìm hiểu kiến thức.
d) Tổ chức thực hiện: 
[BẢNG] HOẠT ĐỘNG CỦA GV VÀ HS | SẢN PHẨM DỰ KIẾN | NLS
[BẢNG] Bước 1: GV chuyển giao nhiệm vụ:- GV yêu cầu HS đọc nhiệm vụ và thực hiện Hoạt động 2 SGK trang 116: Quan sát các ví dụ sau để tìm hiểu một số lệnh làm việc với dữ liệu kiểu danh sách:+ Ví dụ 1: Lệnh clear() xóa toàn bộ một  danh sách+ Ví dụ 2: Lệnh remove(value) sẽ xóa phần tử đầu tiên của danh sách có giá trị value.GV gõ lệnh A.remove(10) để HS quan sát lỗi.+ Ví dụ 3: Lệnh insert có chức năng chèn phần tử vào danh sách tại chỉ số cho trước.- GV yêu cầu HS: Sử dụng AI tìm hiểu cách sử dụng các lệnh clear(), insert(), clear(), remove()+ clear(): xóa toàn bộ dãy. Không bao giờ có lỗi.+ insert(): chèn phần tử vào danh sách tại vị trí cho trước. Không gây lỗi.+ remove(): xóa phần tử đầu tiên tìm thấy. Có gây lỗi nếu trong danh sách không tìm thấy phần tử cần xóa.- Cuối cùng, GV tổng kết lại các phương thức đã học với dữ liệu danh sách là append(), insert(), remove() và clear() như khung kiến thức trọng tâm.- GV yêu cầu HS hoàn thành Câu hỏi và bài tập củng cố SGK tr.117 theo nhóm đôi:1. Khi nào lệnh A.append(1) và lệnh A.insert(0,1) có tác dụng giống nhau?2. Danh sách A trước và sau lệnh insert() là [1, 4, 10, 0] và [1, 4, 10, 5, 0]. Lệnh đã dùng là gì?Bước 2: HS thực hiện nhiệm vụ: - HS đọc và quan sát ví dụ trong SGK, lắng nghe GV hướng dẫn.- HS quan sát lỗi và áp dụng giải pháp kiểm tra trước khi xóa: if 10 in A:          A.remove(10)- HS sử dụng dụng Chatbot AI để tìm hiểu một số lệnh theo yêu cầu của GV.- HS ghi chép, lắng nghe GV tổng kết.- HS thảo luận nhóm, hoàn thành câu hỏi và bài tập củng cố.- GV quan sát và trợ giúp HS. Bước 3: Báo cáo kết quả hoạt động, thảo luận: - HS đọc kết quả từ AI, đối chiếu với SGK và rút ra kết luận.- HS giơ tay phát biểu, trình bày kết quả.- Một số HS khác nhận xét, bổ sung cho bạn. Bước 4: Đánh giá kết quả thực hiện: GV tổng quát lưu ý lại kiến thức và yêu cầu HS ghi chép đầy đủ vào vở. | 2. Một số lệnh làm việc với danh sách- Một số lệnh làm việc với dữ liệu kiểu danh sách:A.append(x)Bổ sung phần tử x vào cuối danh sách A.A.insert(k, x)Chèn phần tử x vào vị trí k của danh sách A.A.clear()Xóa toàn bộ dữ liệu của danh sách A.A.remove(x)Xóa phần tử x từ danh sách A.Câu hỏi và bài tập củng cố:1. Hai lệnh A.append(1) và A.insert (0,1) có tác dụng giống nhau khi trước đó A rỗng.2. Lệnh đã dùng là insert(3,5) | - 1.2.NC1a: HS hiểu cách hoạt động của một số lệnh làm việc với danh sách.- 1.2.NC1a: Thực hiện đánh giá được độ tin cậy và độ tin cậy của các nguồn dữ liệu, thông tin và nội dung số.- 6.2.NC1a: Giải quyết vấn đề với sự hỗ trợ của công cụ số.
Hoạt động 3: Thực hành các lệnh làm việc với dữ liệu kiểu danh sách
a) Mục tiêu: HS thực hành các lệnh làm việc với dữ liệu kiểu danh sách
b) Nội dung: 
- Nhiệm vụ 1, luyện tập lại lệnh tạo mới và bổ sung thêm phần tử vào dãy. 
- Nhiệm vụ 2, rèn luyện kĩ năng với các lệnh remove().
- Nhiệm vụ 3 là bài luyện tập sâu hơn của bài toán tìm kiếm thông tin trên danh sách.
c) Sản phẩm: HS viết chương trình sử dụng các lệnh với dữ liệu kiểu danh sách.
d) Tổ chức thực hiện: 
[BẢNG] HOẠT ĐỘNG CỦA GV VÀ HS | SẢN PHẨM DỰ KIẾN | NLS
[BẢNG] Bước 1: GV chuyển giao nhiệm vụ:- GV yêu cầu HS thực hành theo nhóm đôi các nhiệm vụ sau:+ Nhiệm vụ 1: Nhập số n từ bàn phím, sau đó nhập danh sách n tên học sinh trong lớp và in ra danh sách học sinh này, mỗi tên học sinh trên một dòng. Yêu cầu danh sách được in ra theo thứ tự ngược lại với thứ tự đã nhập.+ Nhiệm vụ 2: Cho trước dãy số A. Viết chương trình xóa đi các phần tử có giá trị nhỏ hơn 0 từ A.+ Nhiệm vụ 3: Cho trước dãy số A. Viết chương trình tìm và chỉ ra vị trí đầu tiền của dãy số A mà ba số hạng liên tiếp có giá trị là 1, 2, 3. Nếu tìm thấy thì thông báo vị trí tìm thấy, nếu không thì thông báo "Không tìm thấy mẫu".- GV nhắc nhở, lưu ý HS:+ Ở nhiệm vụ 1, cần chú ý yêu cầu đề bài là sau khi nhập cần in ra theo thứ tự ngược lại, tức là dữ liệu nhập sau cần được in trước, vì vậy cần dùng lệnh insert() để chèn tên HS vào bảng.+ Ở nhiệm vụ 2, GV nhắc HS nếu làm theo các cách sau sẽ bị sai:+ Ở nhiệm vụ 3, GV có thể hướng dẫn HS sử dụng cách khác để biểu thức lôgic của lệnh if được viết ngắn gọn hơn. Cụ thể điều kiện: A[i] == p[0] and A[i+1] == p[1] and A[i+2] == p[2] sẽ tương đương với cách viết A[i:i+3] = p.Bước 2: HS thực hiện nhiệm vụ: - HS thực hành theo nhóm đôi.- GV quan sát và trợ giúp HS. Bước 3: Báo cáo kết quả hoạt động, thảo luận: - HS soạn thảo các chương trình có sử dụng lệnh làm việc với dữ liệu kiểu danh sách.Bước 4: Đánh giá kết quả thực hiện: GV quan sát, nhận xét kết quả của HS. | - Nhiệm vụ 1:Hướng dẫn: Chương trình có thể như sau:- Nhiệm vụ 2:Hướng dẫn: Chương trình có thể như sau:- Nhiệm vụ 3: Hướng dẫn: | - 1.2.NC1a: Xử lý và phân tích dữ liệu, thông tin (tư duy thuật toán và dữ liệu).- 5.2.NC1a: HS viết được các đoạn mã nguồn Python sử dụng các lệnh làm việc với danh sách.- 1.1.NC1a: Đáp ứng được nhu cầu thông tin.- 2.4.NC1a: Vận hành thiết bị và phần mềm.
C. HOẠT ĐỘNG LUYỆN TẬP
a) Mục tiêu: HS củng cố lại kiến thức về một số lệnh làm việc với dữ liệu danh sách.
b) Nội dung: HS vận dụng các kiến thức đã học để giải bài tập trong phần Luyện tập (SGK - tr118).
c) Sản phẩm học tập: Bài làm của học sinh, kĩ năng giải quyết nhiệm vụ học tập.
d) Tổ chức thực hiện: 
Bước 1: GV chuyển giao nhiệm vụ: 
- GV tổ chức trò chơi trắc nghiệm nhanh trên Quizizz hoặc Kahoot để củng cố toàn bài.
- GV cung cấp mã QR hoặc đường Links cho HS làm Phiếu bài tập, trả lời nhanh một số câu hỏi trắc nghiệm tổng kết bài học.
Câu 1. Trong Python, lệnh nào dùng để thêm một phần tử vào cuối danh sách a?
A. a.insert(x)
B. a.add(x)
C. a.append(x)
D. a.extend(x)
Câu 2. Cho danh sách a = [2, 4, 6, 8]. Lệnh a.pop() sẽ thực hiện thao tác nào?
A. Xóa phần tử đầu tiên của danh sách
B. Xóa phần tử cuối cùng của danh sách
C. Xóa tất cả phần tử trong danh sách
D. Xóa phần tử có giá trị lớn nhất
Câu 3. Lệnh nào sau đây dùng để sắp xếp danh sách theo thứ tự tăng dần?
A. sort(a)
B. order(a)
C. a.sorted()
D. a.sort()
Câu 4. Cho danh sách a = [1, 3, 5, 7]. Biểu thức len(a) cho kết quả là:
A. 3
B. 5
C. 7
D. 4
Câu 5. Lệnh a.remove(x) có tác dụng gì?
A. Xóa tất cả các phần tử trong danh sách
B. Xóa phần tử ở vị trí x
C. Xóa phần tử có giá trị bằng x (nếu tồn tại)
D. Xóa phần tử cuối cùng của danh sách
- GV tổ chức cho HS làm bài tập phần Luyện tập trang 118 SGK:
1. Cho dãy số [1,2,2,3,4,5,5]. 51. Viết lệnh thực hiện:
a) Chèn số 1 vào ngay sau giá trị 1 của dãy.
b) Chèn số 3 và số 4 vào danh sách để dãy có số 3 và số 4 liền nhau hai lần.
2. Cho trước dãy số A. Viết chương trình thực hiện công việc sau:
- Xoá đi một phần tử ở chính giữa dãy nếu số phần tử của dãy là số lẻ.
- Xoá đi hai phần tử ở chính giữa của dãy nếu số phần tử của dãy là số chẵn.
Bước 2: HS thực hiện nhiệm vụ: 
- HS thảo luận nhóm, hoàn thành các bài tập GV yêu cầu.
- GV quan sát và hỗ trợ, hướng dẫn.
Bước 3: Báo cáo kết quả hoạt động, thảo luận: 
- Mỗi BT GV mời 1 đến 2 HS trình bày. 
- Các HS khác chú ý chữa bài, theo dõi nhận xét bài các nhóm trên bảng.
Bước 4: Đánh giá kết quả thực hiện: 
- GV chữa bài, chốt đáp án, tuyên dương các hoạt động tốt, nhanh và chính xác.
[2.1.NC1a: HS thực hiện các tương tác được xác định rõ ràng với công nghệ số (làm bài tập online) trong lớp học.
5.2.NC1a: Viết được chương trình Python giải quyết bài toán thực tế.
1.2.NC1a: Xử lý và phân tích dữ liệu, thông tin.
1.1.NC1a: Đáp ứng được nhu cầu thông tin.]
Kết quả: 
Trò chơi trắc nghiệm:
[BẢNG] Câu 1 | Câu 2 | Câu 3 | Câu 4 | Câu 5
[BẢNG] C | B | D | D | C
Luyện tập 1: 
a) A.insert(1,1)
b) A.insert(4,3)
    A.insert(5,4)
Luyện tập 2: 
a) Câu lệnh xóa như sau:
b) Câu lệnh xóa như sau:
D. HOẠT ĐỘNG VẬN DỤNG
a) Mục tiêu: Học sinh thực hiện làm bài tập vận dụng để nắm vững kiến thức.
b) Nội dung: HS vận dụng kiến thức đã học để làm bài tập Vận dụng (SGK – tr118) và một số bài tập làm thêm.
c) Sản phẩm: Bài làm của học sinh, kĩ năng giải quyết nhiệm vụ học tập.
d) Tổ chức thực hiện: 
Bước 1: GV chuyển giao nhiệm vụ
- GV yêu cầu HS hoàn thành bài tập phần Vận dụng (SGK -tr118).
1. Viết chương trình nhập n từ bàn phím, tạo và in ra màn hình dãy số A bao gồm n số tự nhiên chẵn đầu tiên.
2. Dãy số Fibonacci được xác định như sau:
F0 = 0
F1 = 1
Fn = Fn-1 + Fn-2 (với n ≥ 2).
Viết chương trình nhập n từ bàn phím, tạo và in ra màn hình dãy số A bao gồm n số hạng đầu của dãy Fibonacci.
- GV cho HS thảo luận nhóm đôi và thực hiện các bài tập:
Bài 1: Cho A là một danh sách gồm các số nguyên. Em hãy viết các câu lệnh xác định và in ra số các phần tử lớn hơn 0 của A.
Bài 2: Cho A là một danh sách gồm các số nguyên. Em hãy viết các câu lệnh tọa và in ra danh sách B chỉ gồm các số chẵn có trong A.
Bài 3: Cho dãy số [1, 2, -5, 5, 8, -8]. Em hãy viết chương trình chèn xâu "Số âm" vào sau phần tử nhỏ hơn 0 đầu tiên của dãy đã cho.
Bước 2: HS thực hiện nhiệm vụ
- HS hợp tác thảo luận đưa ra ý kiến.
- GV điều hành, quan sát, hỗ trợ.
Bước 3: Báo cáo kết quả hoạt động, thảo luận
- Đại diện nhóm trình bày kết quả thảo luận, các nhóm khác theo dõi, đưa ý kiến.
Bước 4: Đánh giá kết quả thực hiện
- GV nhận xét, đánh giá, đưa ra một vài ý mà HS còn thiếu, chốt đáp án.
[5.2.NC1a: Viết được chương trình Python giải quyết bài toán thực tế.
1.2.NC1a: Xử lý và phân tích dữ liệu, thông tin.
1.1.NC1a: Đáp ứng được nhu cầu thông tin.]
Đáp án:
Vận dụng 1: Chương trình có thể như sau:
Vận dụng 2: 
Bài tập làm thêm:
Bài 1: Các câu lệnh có thể viết như sau:
Bài 2: Các câu lệnh có thể viết như sau:
Bài 3: Chương trình có thể viết như sau:
* HƯỚNG DẪN VỀ NHÀ
Ghi nhớ kiến thức trong bài. 
Hoàn thành bài tập còn lại trong SBT.
Chuẩn bị bài mới Bài 24 - Xâu kí tự.
```

</details>

