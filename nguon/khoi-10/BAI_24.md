# Bài 24. XÂU KÍ TỰ (2 TIẾT)

> Học liệu được chuyển định dạng từ KHBD Tin học 10 do giáo viên cung cấp. Nội dung trích xuất đầy đủ được giữ ở phần cuối để đối chiếu.

## Chủ đề
GIẢI QUYẾT VẤN ĐỀ VỚI SỰ TRỢ GIÚP CỦA MÁY TÍNH

## Mục tiêu kiến thức từ KHBD

: 
Học xong bài này, HS đạt các yêu cầu sau:
Hiểu được xâu kí tự là kiểu dữ liệu cơ bản của Python.
Biết được lệnh for để xử lí xâu kí tự.

## Trọng tâm hoạt động

Hoạt động 1: Xâu là một dãy các kí tự
Hoạt động 2: Lệnh duyệt kí tự của xâu
Hoạt động 3: Thực hành các lệnh cơ bản làm việc với xâu kí tự

## Nội dung KHBD đầy đủ đã trích xuất

<details>
<summary>Mở nội dung KHBD</summary>

```text
Ngày soạn: .../.../...
Ngày dạy: .../.../...
BÀI 24: XÂU KÍ TỰ (2 TIẾT)
I. MỤC TIÊU:
1. Kiến thức: 
Học xong bài này, HS đạt các yêu cầu sau:
Hiểu được xâu kí tự là kiểu dữ liệu cơ bản của Python.
Biết được lệnh for để xử lí xâu kí tự.
2. Năng lực 
 - Năng lực chung:
Giải quyết được những nhiệm vụ học tập một cách độc lập, theo nhóm và thể hiện sự sáng tạo.
Góp phần phát triển năng lực giao tiếp và hợp tác qua hoạt động nhóm và trao đổi công việc với giáo viên.
- Năng lực riêng: 
Thực hiện được lệnh for trên xâu kí tự.
- Năng lực số:
1.2.NC1a: Phân biệt được sự khác nhau căn bản giữa Danh sách (List - thay đổi được) và Xâu (String - không thay đổi được) thông qua thực nghiệm.
6.1.NC1a: Chủ động chẩn đoán và giải thích lỗi TypeError: 'str' object does not support item assignment khi cố tình thay đổi nội dung xâu.
6.2.NC1a: Sử dụng Chatbot AI để tạo sinh các bộ dữ liệu kiểm thử (Test Cases) đặc biệt (xâu rỗng, xâu chứa kí tự đặc biệt, xâu Unicode) để kiểm tra tính đúng đắn của chương trình.
5.2.NC1a: Viết mã nguồn Python giải quyết bài toán xử lý văn bản thực tế (chuẩn hóa tên, tìm từ khóa).
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
a) Mục tiêu: Gợi mở cho HS muốn tìm hiểu sâu hơn về đối tượng xâu kí tự trong Python.
b) Nội dung: HS dựa vào hiểu biết của bản thân để trả lời câu hỏi.
c) Sản phẩm: Từ yêu cầu, HS vận dụng kiến thức để trả lời câu hỏi GV đưa ra.
d) Tổ chức thực hiện: 
Bước 1: GV chuyển giao nhiệm vụ: 
- GV yêu cầu xem video AI được thiết kế để phục vụ bài dạy và trả lời câu hỏi xuất hiện trong video đó.
- GV đặt vấn đề: Em đã biết dữ liệu kiểu xâu kí tự (gọi tắt là xâu) từ Bài 16 và chúng ta đã có thể tạo các biến kiểu xâu kí tự theo nhiều cách như sau:
Liệu có lệnh nào trích ra từng kí tự của một xâu kí tự? Đếm số kí tự của một xâu?
Bước 2: HS thực hiện nhiệm vụ: 
- HS xem video và suy nghĩ câu trả lời.
- HS chú ý lắng nghe, suy nghĩ câu trả lời.
Bước 3: Báo cáo kết quả học tập, thảo luận: 
- GV gọi đại diện HS đứng lên trình bày kết quả
- HS khác lắng nghe, nhận xét, bổ sung.
Gợi ý:
- Có thể duyệt các kí tự của xâu bằng lệnh for tương tự như với danh sách.
- Để đếm số kí tự của một xâu, ta dùng lệnh len( ).
Bước 4: Đánh giá kết quả thực hiện: 
- GV nhận xét, đánh giá và kết luận.
[6.1.NC1a: HS sử dụng công cụ AI hoặc sản phẩm số do GV cung cấp để tiếp nhận thông tin, trả lời câu hỏi đơn giản.
2.1.NC1a: HS thực hiện các tương tác cơ bản với học liệu số (xem video, trả lời câu hỏi trên môi trường số).
1.1.NC1a: HS tiếp cận, khai thác được thông tin từ nguồn học liệu số dưới sự hướng dẫn của GV.]
- Vì đây là câu hỏi gợi mở vào bài học nên chưa xét đến tính đúng, sai trong câu trả lời của HS. Dựa trên câu trả lời đó, GV dẫn dắt HS vào bài học mới - Bài 24. Xâu kí tự.
B. HÌNH THÀNH KIẾN THỨC MỚI
Hoạt động 1: Xâu là một dãy các kí tự
a) Mục tiêu: HS biết và hiểu được cấu trúc xâu kí tự là một dãy các kí tự, có thể thực hiện một số lệnh cơ bản như duyệt xâu, truy cập từng phần tử. 
b) Nội dung: GV hướng dẫn HS tìm hiểu cấu trúc của xâu kí tự.
c) Sản phẩm: HS thực hiện Hoạt động 1, câu hỏi và bài tập củng cố SGK tr.120, hoàn thành tìm hiểu kiến thức.
d) Tổ chức thực hiện:
[BẢNG] HOẠT ĐỘNG CỦA GV VÀ HS | SẢN PHẨM DỰ KIẾN | NLS
[BẢNG] Bước 1: GV chuyển giao nhiệm vụ:- GV yêu cầu HS đọc nhiệm vụ và thực hiện Hoạt động 1 SGK tr.119: Quan sát các ví dụ sau để biết cấu trúc xâu kí tự, so sánh với danh sách để biết sự khác nhau giữa xâu (string) và danh sách (list):+ Ví dụ 1: Xâu kí tự và cách truy cập đến từng kí tự của xâu.+ Ví dụ 2: Quan sát các lệnh sau để thấy được sự khác nhau giữa xâu và danh sách:- GV đặt vấn đề: Danh sách A=[1,2], ta sửa A[0]=5 được. Vậy với xâu s, em hãy thử lệnh s[0] = 'J' xem điều gì xảy ra?- GV giới thiệu và nhấn mạnh các tính chất ban đầu của xâu kí tự có nhiều nét gần giống với danh sách nhưng lại rất khác biệt với danh sách:+ Điểm giống:Xâu có thể hiểu là một dãy các kí tự, có thể truy cập từng phần tử đánh từ chỉ số 0 hoàn toàn tương tự như danh sách.Có thể duyệt theo từng kí tự trên xâu. (Chức năng này sẽ được học trong Hoạt động 2).+ Điểm khác biệt: Không thể thay đổi các kí tự trên xâu, trong khi có thể thay đổi giá trị từng phần tử của danh sách.- GV cho HS đọc và ghi nhớ khung kiến thức trọng tâm.- GV yêu cầu HS thảo luận nhóm đôi và hoàn thành Câu hỏi và bài tập củng cố SGK tr.120:1. Các xâu kí tự sau có hợp lệ không?a) "123&*()+-ABC"      b)"1010110&0101001"c) "Tây Nguyên"        d) 11111111 = 2562. Mỗi xâu hợp lệ ở Câu 1 có độ dài bằng bao nhiêu?Bước 2: HS thực hiện nhiệm vụ: - HS đọc hiểu ví dụ trong SGK.- HS sử dụng AI để tìm hiểu nguyên nhân gây lỗi: "Lỗi TypeError: 'str' object does not support item assignment nghĩa là gì? Tại sao Python không cho sửa xâu?"- HS theo dõi, chú ý lắng nghe GV hướng dẫn.- HS ghi nhớ khung kiến thức trọng tâm.- HS thảo luận nhóm, hoàn thành bài tập.Bước 3: Báo cáo kết quả hoạt động, thảo luận: - Đại diện nhóm trình bày.- Một số HS khác nhận xét, bổ sung cho bạn. Bước 4: Đánh giá kết quả thực hiện: - GV nêu nhận xét, tổng quát lại kiến thức. | 1. Xâu là một dãy các kí tự- Xâu kí tự trong Python là dãy các kí tự Unicode. Xâu có thể được coi là danh sách các kí tự nhưng không thay đổi từng kí tự của xâu.- Truy cập từng kí tự của xâu qua chỉ số, chỉ số từ 0 đến độ dài len() - 1.Câu hỏi và bài tập củng cố:1. Các xâu kí tự hợp lệ là a), b), c).2. a) 12;         b) 15;           c) 10. | - 1.2.NC1a: HS hiểu cấu trúc của xâu kí tự.- 6.1.NC1a: Chủ động tạo tình huống lỗi kỹ thuật và sử dụng công cụ để chẩn đoán nguyên nhân, từ đó hiểu sâu bản chất dữ liệu.
Hoạt động 2: Lệnh duyệt kí tự của xâu
a) Mục tiêu: HS biết và thực hành được lệnh duyệt xâu.
b) Nội dung: GV hướng dẫn HS tìm hiểu lệnh duyệt từng kí tự của xâu.
c) Sản phẩm: HS thực hiện Hoạt động 2, Câu hỏi và bài tập củng cố SGK tr.120, hoàn thành tìm hiểu kiến thức.
d) Tổ chức thực hiện: 
[BẢNG] HOẠT ĐỘNG CỦA GV VÀ HS | SẢN PHẨM DỰ KIẾN | NLS
[BẢNG] Bước 1: GV chuyển giao nhiệm vụ:- GV yêu cầu HS đọc nhiệm vụ và thực hiện Hoạt động 2 SGK trang 120: Quan sát các lệnh sau để biết cách duyệt từng kí tự của xâu kí tự bằng lệnh for. Có hai cách duyệt, theo chỉ số và theo phần tử của xâu kí tự:- GV đặt vấn đề: Khi nào bắt buộc phải duyệt xâu theo chỉ số?- GV yêu cầu HS: Hãy so sánh cách duyệt xâu và duyệt danh sách.- GV lưu ý cho HS: Với toán tử in dùng với xâu kí tự thì ý nghĩa được mở rộng thêm như sau:Nếu s1, s2 là 2 xâu thì s1 in s2 sẽ trả về True nếu s1 là xâu con của s2.- GV yêu cầu HS hoàn thành Câu hỏi và bài tập củng cố SGK tr.121 theo nhóm đôi:1. Sau khi thực hiện các lệnh sau, biến skq sẽ có giá trị bao nhiêu?2. Cho s1 = "abc", s2 = "ababcabca". Các biểu thức logic sau cho kết quả là đúng hay sai?a) s1 in s2                      b) s1 + s1 in s2c) "abcabca" in s2        d) "abc123" in s2Bước 2: HS thực hiện nhiệm vụ: - HS suy nghĩ giải quyết vấn đề GV đưa ra hoặc nhờ AI trợ giúp: “So sánh 2 cách duyệt xâu trong Python. Khi nào tôi cần dùng 'range(len(s))' thay vì 'for ch in s'? Cho ví dụ cụ thể.”- HS đọc SGK, lắng nghe GV hướng dẫn.- HS thảo luận nhóm, hoàn thành câu hỏi và bài tập củng cố.- GV quan sát và trợ giúp HS. Bước 3: Báo cáo kết quả hoạt động, thảo luận: - HS đọc kết quả từ AI.- HS giơ tay phát biểu, trình bày kết quả.- Một số HS khác nhận xét, bổ sung cho bạn. Bước 4: Đánh giá kết quả thực hiện: GV tổng quát lưu ý lại kiến thức và yêu cầu HS ghi chép đầy đủ vào vở. | 2. Lệnh duyệt kí tự của xâu- Hoạt động 2: Các cách duyệt từng kí tự của xâu:+ Cách 1: biến i lần lượt chạy theo chỉ số của xâu kí tự, từ 0 đến len(s) - 1. + Cách 2: duyệt theo từng kí tự của xâu s. Biến ch sẽ được gán lần lượt các kí tự của xâu s từ đầu đến cuối.Câu hỏi và bài tập củng cố:1. skq sẽ bao gồm các chữ số lẻ trong xâu s. Kết quả thu được là "173".2. a) Đúng                 b) Đúng    c) Đúng                 d) Sai. | - 1.2.NC1a: HS hiểu cách duyệt kí tự của xâu.- 6.2.NC1a: Sử dụng AI để so sánh, đánh giá các giải pháp kỹ thuật và lựa chọn phương án tối ưu cho bối cảnh cụ thể.
Hoạt động 3: Thực hành các lệnh cơ bản làm việc với xâu kí tự
a) Mục tiêu: HS thực hành các chức năng cơ bản với kiểu xâu kí tự.
b) Nội dung: HS thực hiện 2 nhiệm vụ, viết chương trình có sử dụng các lệnh cơ bản làm việc với xâu kí tự.
c) Sản phẩm: HS soạn thảo chương trình trong môi trường Python.
d) Tổ chức thực hiện: 
[BẢNG] HOẠT ĐỘNG CỦA GV VÀ HS | SẢN PHẨM DỰ KIẾN | NLS
[BẢNG] Bước 1: GV chuyển giao nhiệm vụ:- GV yêu cầu HS thực hành theo nhóm đôi các nhiệm vụ sau:+ Nhiệm vụ 1: Viết chương trình nhập số tự nhiên n là số học sinh, sau đó nhập họ và tên học sinh. Lưu họ và tên học sinh vào một danh sách. In danh sách ra màn hình, mỗi họ tên trên một dòng.+ Nhiệm vụ 2: Nhập một xâu kí tự S từ bàn phím rồi kiểm tra xem xâu S có chứa xâu con "10" không.- Ở nhiệm vụ 2, GV hướng dẫn HS:+ Đây thực chất là bài toán kiểm tra xem một xâu này có là xâu con của một xâu khác hay không.+ Cách làm nhanh nhất là cách 2. Python cho phép lệnh in tổng quát kiểm tra xem xâu s1 có nằm trong xâu s2 hay không thông qua toán tử in: s1 là xâu con của s2 khi và chỉ khi s1 in s2 là True.- GV lưu ý cho HS: biểu thức s1 in s2 là một biểu thức logic mô tả quan hệ giữa hai xâu kí tự.- GV tổng kết: Như vậy giữa xâu kí tự ngoài các phép so sánh (<, >, <=, >=, ==) còn có phép kiểm tra "nằm trong" là in.Bước 2: HS thực hiện nhiệm vụ: - HS thực hành theo nhóm đôi.- GV quan sát và trợ giúp HS. Bước 3: Báo cáo kết quả hoạt động, thảo luận: - HS viết chương trình có sử dụng các lệnh cơ bản làm việc với xâu kí tự.Bước 4: Đánh giá kết quả thực hiện: GV quan sát, nhận xét kết quả của HS. | - Nhiệm vụ 1:Hướng dẫn: Chương trình có thể như sau:- Nhiệm vụ 2:Hướng dẫn: Chương trình có thể như sau:+ Cách 1: Duyệt kí tự của xâu theo chỉ số.+ Cách 2: Sử dụng toán tử in | - 1.2.NC1a: Xử lý và phân tích dữ liệu, thông tin (tư duy thuật toán và dữ liệu).- 5.2.NC1a: HS viết được các đoạn mã nguồn Python sử dụng các lệnh cơ bản làm việc với xâu kí tự.- 6.1.NC1a: Xác định nhu cầu và giải quyết vấn đề kỹ thuật.- 2.4.NC1a: Vận hành thiết bị và phần mềm.
C. HOẠT ĐỘNG LUYỆN TẬP
a) Mục tiêu: HS củng cố lại kiến thức về xâu kí tự.
b) Nội dung: HS vận dụng các kiến thức đã học để giải bài tập trong phần Luyện tập (SGK - tr122), trả lời một số câu hỏi trắc nghiệm.
c) Sản phẩm học tập: Bài làm của học sinh, kĩ năng giải quyết nhiệm vụ học tập.
d) Tổ chức thực hiện: 
Bước 1: GV chuyển giao nhiệm vụ: 
- GV tổ chức trò chơi trắc nghiệm nhanh trên Quizizz hoặc Kahoot để củng cố toàn bài.
- GV cung cấp mã QR hoặc đường Links cho HS làm Phiếu bài tập, trả lời nhanh một số câu hỏi trắc nghiệm tổng kết bài học.
Câu 1: Giả sử s = "Thời khóa biểu" thì len(s) bằng bao nhiêu?
A. 3                  B. 5                   C. 14                   D. 17
Câu 2: Biểu thức lôgic nào sau đây trả về giá trị True?
A. "01" in "10101"                          B. "10110" in "111000101"
C. "acbab" in "bacbcabcabcb"         D. "125" in "0123456789"
Câu 3: Nếu S = "1234567890" thì S[0:4] là gì?
A. "123"                                           B. "0123"
C. "01234"                                       D. "1234"
Câu 4: Kết quả của đoạn chương trình sau là gì?
A.""                  B. "02468"               C. "13579"                     D. "0123456789"
Câu 5: Mệnh đề nào dưới đây là đúng?
A. Xâu kí tự trong Python là xâu chỉ gồm các kí tự nằm trong bảng mã ASCII.
B. Xâu kí tự trong Python là xâu bao gồm các kí tự nằm trong bảng mã ASCII và một số kí tự tiếng Việt trong bảng mã Unicode.
C. Xâu kí tự trong Python là xâu bao gồm các kí tự nằm trong bảng mã Unicode.
D. Xâu kí tự trong Python là xâu bao gồm các kí tự số và chữ trong bảng mã Unicode.
- GV tổ chức cho HS làm bài tập phần Luyện tập trang 122 SGK:
1. Cho xâu S, viết đoạn lệnh trích ra xâu con của S bao gồm ba kí tự đầu tiên của S.
2. Viết chương trình kiểm tra xâu S có chứa chữ số không. Thông báo "S có chứa chữ số" hoặc "S không chứa chữ số nào".
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
6.1.NC1a: Xác định nhu cầu và giải quyết vấn đề kỹ thuật.]
Kết quả: 
Trò chơi trắc nghiệm:
[BẢNG] Câu 1 | Câu 2 | Câu 3 | Câu 4 | Câu 5
[BẢNG] C | A | D | B | C
Luyện tập 1: S1 = S[0] + S[1] + S[2].
Luyện tập 2: Chương trình có thể như sau:
D. HOẠT ĐỘNG VẬN DỤNG
a) Mục tiêu: Học sinh thực hiện làm bài tập vận dụng để nắm vững kiến thức.
b) Nội dung: HS vận dụng kiến thức đã học để làm bài tập Vận dụng (SGK – tr122).
c) Sản phẩm: Bài làm của học sinh, kĩ năng giải quyết nhiệm vụ học tập.
d) Tổ chức thực hiện: 
Bước 1: GV chuyển giao nhiệm vụ
- GV yêu cầu HS hoàn thành bài tập 1, 2 phần Vận dụng (SGK -tr122).
1. Cho hai xâu s1, s2. Viết đoạn chương trình chèn xâu s1 vào giữa s2, tại vị trí len(s2)//2. In kết quả ra màn hình.
2. Viết chương trình nhập số học sinh và họ tên học sinh. Sau đó đếm xem trong danh sách có bao nhiêu bạn tên là "Hương".
Gợi ý: Sử dụng toán tử in để kiểm tra một xâu có là xâu con của một xâu khác.
Bước 2: HS thực hiện nhiệm vụ
- HS hợp tác thảo luận đưa ra ý kiến.
- GV điều hành, quan sát, hỗ trợ.
Bước 3: Báo cáo kết quả hoạt động, thảo luận
- Đại diện nhóm trình bày kết quả thảo luận, các nhóm khác theo dõi, đưa ý kiến.
Bước 4: Đánh giá kết quả thực hiện
- GV nhận xét, đánh giá, đưa ra một vài ý mà HS còn thiếu, chốt đáp án.
[5.2.NC1a: Viết được chương trình Python giải quyết bài toán thực tế.
1.2.NC1a: Xử lý và phân tích dữ liệu, thông tin.
6.1.NC1a: Xác định nhu cầu và giải quyết vấn đề kỹ thuật.]
Đáp án:
Vận dụng 1: Chương trình có thể như sau:
Vận dụng 2: 
* HƯỚNG DẪN VỀ NHÀ
Ghi nhớ kiến thức trong bài. 
Hoàn thành bài tập trong SBT.
Chuẩn bị bài mới Bài 25 - Một số lệnh làm việc với xâu kí tự.
```

</details>

