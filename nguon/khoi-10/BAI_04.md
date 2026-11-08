# Bài 4. HỆ NHỊ PHÂN

> Học liệu được chuyển định dạng từ KHBD Tin học 10 do giáo viên cung cấp. Nội dung trích xuất đầy đủ được giữ ở phần cuối để đối chiếu.

## Chủ đề
Chủ đề không ghi trong tệp

## Mục tiêu kiến thức từ KHBD

Học xong bài này, HS đạt các yêu cầu sau:
Biết được hệ nhị phân và cách biểu diễn số nguyên trong máy tính.
Giải thích được ứng dụng của hệ nhị phân để tính toán trong máy tính.

## Trọng tâm hoạt động

Hoạt động 1: Biểu diễn một số dưới dạng tổng các lũy thừa của 2
Hoạt động 2: Phép tính trong hệ nhị phân

## Nội dung KHBD đầy đủ đã trích xuất

<details>
<summary>Mở nội dung KHBD</summary>

```text
Ngày soạn:…/…/… 
Ngày dạy:…/…/…
BÀI 4: HỆ NHỊ PHÂN
VÀ DỮ LIỆU SỐ NGUYÊN
(2 tiết)
I. MỤC TIÊU
1. Kiến thức
Học xong bài này, HS đạt các yêu cầu sau:
Biết được hệ nhị phân và cách biểu diễn số nguyên trong máy tính.
Giải thích được ứng dụng của hệ nhị phân để tính toán trong máy tính.
2. Năng lực 
Năng lực chung:
Giải quyết được những nhiệm vụ học tập một cách độc lập, làm việc nhóm và thể hiện sự sáng tạo. 
Góp phần phát triển năng lực giao tiếp và hợp tác qua hoạt động nhóm và trao đổi công việc với giáo viên.
Năng lực riêng: 
Chuyển đổi được số từ hệ thập phân sang hệ nhị phân.
Thực hiện các phép tính cộng và nhân trong hệ nhị phân.
Năng lực số:
1.1.NC1b: Áp dụng được kỹ thuật tìm kiếm để lấy được dữ liệu, thông tin và nội dung trong môi trường số.
1.3.NC1b: Triển khai được việc tổ chức và sắp xếp dữ liệu, thông tin và nội dung trong môi trường có cấu trúc.
5.2.NC1b: Áp dụng được các công cụ số khác nhau và các giải pháp công nghệ có thể có để giải quyết vấn đề.
6.1.NC1a: HS sử dụng công cụ AI hoặc sản phẩm số do GV cung cấp để tiếp nhận thông tin, trả lời câu hỏi đơn giản.
2.1.NC1a: HS thực hiện các tương tác cơ bản với học liệu số (xem video, trả lời câu hỏi trên môi trường số).
1.1.NC1a: HS tiếp cận, khai thác được thông tin từ nguồn học liệu số dưới sự hướng dẫn của GV.
3. Phẩm chất
Nâng cao khả năng tự học và ý thức học tập, có ý thức làm việc nhóm, tôn trọng ý kiến các thành viên khi hợp tác.
Tự giải quyết vấn đề có sáng tạo.
Chăm học, ham học, có tinh thần tự học; chịu khó đọc sách giáo khoa, tài liệu và thực hiện các nhiệm vụ cá nhân.
II. THIẾT BỊ DẠY HỌC VÀ HỌC LIỆU 
- GV: KHBD, SGK, SBT Tin học 10 – Kết nối tri thức, bài trình chiếu (Slide), phòng thực hành máy tính kết nối Internet, máy chiếu, video AI tạo bằng công cụ AI được dùng để khởi động bài học, bộ câu hỏi trắc nghiệm trên phần mềm Quizizz.
- HS: SGK, SBT Tin học 10 – Kết nối tri thức, vở ghi.
III. TIẾN TRÌNH DẠY HỌC
1. HOẠT ĐỘNG KHỞI ĐỘNG 
a) Mục tiêu: HS được gợi mở về hệ nhị phân và biểu diễn số nguyên.
b) Nội dung: HS trả lời câu hỏi về lợi ích của việc đổi hệ thập phân sang hệ nhị phân và các câu hỏi gợi mở.
c) Sản phẩm: HS trả lời được câu hỏi về lợi ích của việc đổi các số từ hệ thập phân sang hệ nhị phân.
d) Tổ chức thực hiện: 
Bước 1: GV chuyển giao nhiệm vụ: 
- GV yêu cầu xem video AI được thiết kế để phục vụ bài dạy và trả lời câu hỏi xuất hiện trong video đó.
- GV yêu cầu HS: Trong hệ thập phân, mỗi số có thể được phân tích thành tổng các lũy thừa của 10 với hệ số của mỗi số hạng chính là các chữ số tương ứng của số đó. Ví dụ số 513 có thể viết thành: 5 × 102 + 1 × 101 + 3 × 100.
Ta cũng có thể phân tích một số thành tổng các lũy thừa của 2, chẳng hạn 13 có thể viết thành: 1 × 23 + 1 × 22 + 0 × 21 + 1 × 20 với các hệ số chỉ là 0 hay 1.
Khi đó, có thể thể hiện 13 bởi 1101 được không? Em hãy cho biết việc thể hiện giá trị của một số bằng dãy bit có lợi gì?
Bước 2: HS thực hiện nhiệm vụ học tập: 
- HS xem video và suy nghĩ câu trả lời.
- HS chú ý lắng nghe, suy nghĩ câu trả lời.
Bước 3: Báo cáo kết quả hoạt động, thảo luận: 
- GV gọi một số HS trả lời, HS khác nhận xét, bổ sung.
Bước 4: Đánh giá kết quả thực hiện: 
- GV nhận xét, đánh giá và kết luận.
[6.1.NC1a: HS sử dụng công cụ AI hoặc sản phẩm số do GV cung cấp để tiếp nhận thông tin, trả lời câu hỏi đơn giản.
2.1.NC1a: HS thực hiện các tương tác cơ bản với học liệu số (xem video, trả lời câu hỏi trên môi trường số).
1.1.NC1a: HS tiếp cận, khai thác được thông tin từ nguồn học liệu số dưới sự hướng dẫn của GV.]
- GV dẫn dắt vào bài học: Để hiểu hệ nhị phân có lợi ích gì khi sử dụng máy tính để lưu trữ, chúng ta vào bài học ngày hôm nay “Bài 4 - Hệ nhị phân và dữ liệu số nguyên”.
2. HÌNH THÀNH KIẾN THỨC MỚI
Hoạt động 1: Biểu diễn một số dưới dạng tổng các lũy thừa của 2
a) Mục tiêu: HS phát hiện ra hệ đếm nhị phân và biểu diễn số như hệ thập phân thông qua ví dụ phân tích một số thành tổng của các lũy thừa của 2.
b) Nội dung: HS đọc SGK và trả lời câu hỏi, hoạt động cá nhân, thảo luận nhóm xây dựng kiến thức bài mới, làm Hoạt động 1, trả lời Câu hỏi và bài tập củng cố 1, 2.
c) Sản phẩm: HS biểu diễn được số nguyên dương trong máy tính, từ đó trả lời Câu hỏi và bài tập củng cố 1, 2 (SGK) về biểu diễn số sang hệ nhị phân và hệ thập phân.
d) Tổ chức thực hiện:
[BẢNG] HOẠT ĐỘNG CỦA GV VÀ HS | SẢN PHẨM DỰ KIẾN | NLS
[BẢNG] Bước 1: GV chuyển giao nhiệm vụ:- GV cho HS hoạt động cá nhân thực hiện Hoạt động 1.- GV đặt câu hỏi cho HS: “Theo em, việc biểu diễn chỉ với các chữ số 0 và 1 có lợi gì?”- GV giới thiệu khái niệm hệ nhị phân với ba đặc trưng là các chữ số, cách biểu diễn và cách tính giá trị từ biểu diễn số.- GV viết biểu diễn tổng quát của một số dưới dạng tổng các lũy thừa của 2:N = dk 2k  + dk-1 2k - 1 + dk-2 2k - 2 + ... + d1. 2 + d0từ đó đưa ra nhận xét, trừ số hạng cuối d0, còn tất cả các số hạng trước đó đều chia hết cho 2 nên d0 chính là phần dư của phép chia N cho 2 với thương là:N1 = dk 2k - 1 + dk-1 2k - 2 + dk-2 2k - 3 + ... + d2. 2 + d1- GV giải thích thêm rằng dk, dk - 1, dk - 2,..., d1 có thể tìm được bằng cách chia đôi liên tiếp và tách phần dư.- GV lấy ví dụ việc đổi số 19 sang số nhị phân để minh họa:Ta được số nhị phân cần tìm: 1910 = 100112.- GV yêu cầu HS đọc thông tin mục c) SGK trang 21 và trả lời câu hỏi: “Để biểu diễn số có dấu, ta có thể sử dụng một số cách mã hóa nào?”- GV lấy ví dụ số 19 và -19 để minh họa và phân tích thêm cho HS.- HS đọc lại khung kiến thức trọng tâm.- HS làm Câu hỏi và bài tập củng cố 1, 2  SGK trang 21 theo nhóm đôi.Bước 2: HS thực hiện nhiệm vụ: - HS thảo luận nhóm, suy nghĩ để trả lời các vấn đề được đưa ra. - HS suy nghĩ, đọc SGk- GV hỗ trợ, quan sát.Bước 3: Báo cáo kết quả hoạt động, thảo luận: - Đại diện nhóm trình bày.- Một số HS khác nhận xét, bổ sung cho bạn. - HS trả lời câu hỏi của GV để xây dựng bài.Bước 4: Đánh giá kết quả thực hiện: - GV nêu nhận xét, tổng quát lại kiến thức. | 1. Hệ nhị phân và biểu diễn số nguyêna) Hệ nhị phân- Kết quả phân tích số 19 sẽ là 24 + 21 + 20 hoặc viết dưới dạng đầy đủ của các lũy thừa:19 = 1 × 24 + 0 × 23 + 0 × 22 + 1 Trong hệ nhị phân số 19 có thể biểu diễn bởi 10011.- Lợi ích của việc biểu diễn các số chỉ bằng chữ số 0 và 1 là có thể biểu diễn được số trong máy tính điện tử.b) Đổi biểu diễn số nguyên dương từ hệ thập phân sang hệ nhị phânN = dk 2k  + dk-1 2k - 1 + dk-2 2k - 2 + ... + d1. 2 + d0 | 1.3.NC1b: HS biểu diễn được dữ liệu dưới dạng nhị phân.
Hoạt động 2: Phép tính trong hệ nhị phân
a) Mục tiêu: Làm quen và kiểm chứng các phép toán cộng và nhân trong hệ nhị phân.
b) Nội dung: HS thực hiện phép tính cộng và nhân trong hệ nhị phân, hoàn thiện Hoạt động 2, làm Câu hỏi và bài tập củng cố (SGK – tr23).
c) Sản phẩm: HS trình bày kết quả của phép tính cộng và nhân trong hệ nhị phân, trả lời Câu hỏi và bài tập củng cố (SGK – tr23).
d) Tổ chức thực hiện: 
[BẢNG] HOẠT ĐỘNG CỦA GV VÀ HS | SẢN PHẨM DỰ KIẾN | NLS
[BẢNG] Bước 1: GV chuyển giao nhiệm vụ:- GV yêu cầu HS thực hiện Hoạt động 2 theo nhóm đôi.- GV chia lớp thành 2 nhóm, đọc thông tin SGK trang 22 và thực hiện nhiệm vụ:+ Nhóm 1: Tìm hiểu về phép cộng hai số nhị phân. Cho ví dụ minh họa.+ Nhóm 2: Tìm hiểu về phép nhân hai số nhị phân. Cho ví dụ minh họa.- GV yêu cầu: Các nhóm tổng hợp kết quả vào Padlet chung của lớp.- HS đọc lại khung kiến thức trọng tâm.- HS làm Câu hỏi và bài tập củng cố SGK trang 23 theo nhóm đôi.Bước 2: HS thực hiện nhiệm vụ: - HS theo dõi SGK, chú ý nghe, tiếp nhận kiến thức, hoàn thành các yêu cầu, hoạt động cặp đôi, kiểm tra chéo đáp án.- Các nhóm đăng tải thông tin lên Padlet.- GV: quan sát và trợ giúp HS. Bước 3: Báo cáo kết quả hoạt động, thảo luận: - GV chiếu Padlet. Đại diện các nhóm báo cáo kết quả thảo luận.- Một số HS khác nhận xét, bổ sung cho bạn. Bước 4: Đánh giá kết quả thực hiện: GV tổng quát lưu ý lại kiến thức và yêu cầu HS ghi chép đầy đủ vào vở. | 2. Các phép tính số học trong hệ nhị phâna) Cộng hai số nhị phân- Thực hiện từ trái sang phải.- Khi cộng hai bit có kết quả là 10 thì ghi 0 ở hàng tương ứng dưới tổng và nhớ 1 sang hàng bên trái.- Khi cộng hai bit 1 mà phải nhớ 1 từ hàng trước chuyển sang thì kết quả sẽ là 11.- Ví dụ: b) Nhân hai số nhị phân- Thực hiện tương tự như trong hệ thập phân: Nhân thừa số thứ nhất lần lượt với từng chữ số của thừa số thứ hai, theo thứ tự từ trái sang phải và đặt kết quả cần phải theo đúng vị trí chữ số của thừa số thứ hai, rồi cộng tất cả lại.- Ví dụ:Câu hỏi và bài tập củng cố:a) 101101 + 11001 = 1000110 (45 + 25 = 70)b) 100111 × 1011 = 110101101 (39 × 11 = 429) | - 2.1.NC1a: Lựa chọn được công nghệ số cụ thể để tương tác trong lớp học.- 2.4.NC1a: HS lựa chọn công cụ Padlet được xác định rõ ràng để hợp tác tổng hợp kết quả nhóm.- 1.3.NC1b: HS thực hiện được các phép tính trong hệ nhị phân.
3. HOẠT ĐỘNG LUYỆN TẬP
a) Mục tiêu: Học sinh củng cố lại kiến thức về phép tính cộng và nhân trong hệ nhị phân.
b) Nội dung: HS vận dụng các kiến thức đã học để giải bài tập trong phần Luyện tập (SGK - tr23).
c) Sản phẩm học tập: HS giải được các bài tập liên quan đến thực hiện phép tính cộng và nhân trong hệ nhị phân.
d) Tổ chức thực hiện: 
Bước 1: GV chuyển giao nhiệm vụ: 
- GV tổng hợp các kiến thức cần ghi nhớ cho HS.
- GV cho HS thực hiện bài tập 1, 2 phần Luyện tập SGK tr23.
- GV tổ chức trò chơi trắc nghiệm nhanh trên Quizizz để củng cố toàn bài.
- GV cung cấp mã QR hoặc đường Links cho HS trả lời nhanh một số câu hỏi trắc nghiệm tổng kết bài học.
Câu 1: Em hãy đổi biểu diễn số 217 từ hệ thập phân sang hệ nhị phân.
A. 1110                B. 11011001                C. 1100110               D. 101010
Câu 2: Đổi biểu diễn số 110111 từ hệ nhị phân sang hệ thập phân là:
A. 52                       B. 53                         C. 54                        D. 55
Câu 3: Thực hiện phép tính cộng sau đây trong hệ nhị phân: 11001 + 10110
A. 101111               B. 110111                 C. 111101                 D. 110111
Câu 4: Đổi dữ liệu từ hệ thập phân sang hệ nhị phân, sau đó thực hiện phép nhân trong hệ nhị phân: 6 × 5, ta được kết quả là:
 A. 11010                B. 10101                   C. 11110                   D. 10111
Bước 2: HS thực hiện nhiệm vụ: HS suy nghĩ, hoàn thành các bài tập GV yêu cầu.
- GV quan sát và hỗ trợ, hướng dẫn.
Bước 3: Báo cáo kết quả hoạt động, thảo luận: 
- GV gọi 6 HS bất kì lên bảng chữa bài. Các HS khác chú ý chữa bài, theo dõi nhận xét bài các nhóm trên bảng.
Kết quả: 
Luyện tập 1:
a) 125 + 17  1111101 + 10001 = 10001110  142.
b) 250 + 175  11111010 + 10101111 = 110101001  425.
c) 75 + 112  1001011 + 1110000 = 10111011  187.
Luyện tập 2: 
a) 15 × 6  1111 × 110 = 1011010  90.
b) 11 × 9  1011 × 1001 = 1100011  99.
c) 125 × 4  1111101 × 100 = 111110100  500.
[1.3.NC1b: HS biểu diễn được dữ liệu dưới dạng nhị phân và thực hiện được các phép tính trong hệ nhị phân.]
Trắc nghiệm:
[BẢNG] Câu 1 | Câu 2 | Câu 3 | Câu 4
[BẢNG] B | D | A | C
[2.1.NC1a: HS thực hiện các tương tác được xác định rõ ràng với công nghệ số (làm bài tập online) trong lớp học.]
Bước 4: Đánh giá kết quả thực hiện: 
- GV chữa bài, chốt đáp án, tuyên dương các hoạt động tốt, nhanh và chính xác.
4. HOẠT ĐỘNG VẬN DỤNG
a) Mục tiêu: Học sinh thực hiện làm bài tập vận dụng để nắm vững kiến thức.
b) Nội dung: HS sử dụng SGK, tìm hiểu trên Internet và vận dụng kiến thức đã học để làm bài tập Vận dụng (SGK – tr23).
c) Sản phẩm: HS đổi được phần thập phân của một số trong hệ thập phân sang hệ đếm nhị phân.
d) Tổ chức thực hiện: 
Bước 1: GV chuyển giao nhiệm vụ
- GV yêu cầu HS hoạt động cá nhân, hoàn thành bài tập 1 phần Vận dụng (SGK -tr23): Em hãy tìm hiểu trên Internet hoặc các tài liệu khác cách đổi phần thập phân của một số trong hệ thập phân sang hệ đếm nhị phân.
Bước 2: HS thực hiện nhiệm vụ
- HS tự tìm hiểu cách đổi phần thập phân của một số trong hệ thập phân sang hệ đếm nhị phân.
- GV điều hành, quan sát, hỗ trợ.
Bước 3: Báo cáo kết quả hoạt động, thảo luận
- HS trình bày kết quả hoạt động, các bạn khác theo dõi, đưa ý kiến.
Đáp án:
Vận dụng 1: Cách đổi phần thập phân của một số sang hệ nhị phân bằng cách nhân 2 và tách phần nguyên liên tiếp qua ví dụ đổi số 0172.
[BẢNG] Phép tính | Kết quả | Phần nguyên | Phần lẻ
[BẢNG] 0,72 × 2 | 1,44 | d-1 = 1 | 0,44
[BẢNG] 0,44 × 2 | 0,88 | d -2 = 0 | 0,88
[BẢNG] 0,88 × 2 | 1,76 | d -3 = 1 | 0,76
[BẢNG] 0,76 × 2 | 1,52 | d -4 = 1 | 0,52
[BẢNG] … | … | … | …
[BẢNG] Phần nguyên0 | Phần lẻ × 272
[BẢNG] d-1  = 1d-2  = 0d-3  = 1d-4  = 1 | 44887652
Vậy 0,7210 = 0,1011100…2
Lưu ý: Quá trình này có thể không bao giờ kết thúc. Chúng ta sẽ phải dừng ở một bước nào đó và chịu một sai số làm tròn.
Bước 4: Đánh giá kết quả thực hiện
- GV nhận xét, đánh giá, đưa ra một vài ý mà HS còn thiếu, chốt đáp án.
[1.1.NC1b: Áp dụng được kỹ thuật tìm kiếm để lấy được dữ liệu, thông tin và nội dung trong môi trường số.
5.2.NC1b: HS sử dụng công cụ số để tìm kiếm thông tin.]
* HƯỚNG DẪN VỀ NHÀ
Ghi nhớ kiến thức trong bài. 
Hoàn thành bài tập 2 phần Vận dụng SGK trang 23 và các bài tập trong SBT.
Chuẩn bị bài mới Bài 5 - Dữ liệu lôgic.
```

</details>

