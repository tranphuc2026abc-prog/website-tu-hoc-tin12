# Tự học Tin học THPT

Website hỗ trợ học Tin học cho học sinh THPT khối 10, 11 và 12. Kho dữ liệu hiện có 93 bài học và 2.368 câu hỏi thuộc ba dạng trắc nghiệm, đúng/sai và tự luận. Học sinh có thể đọc bài, ôn tập, luyện câu hỏi và theo dõi tiến độ lưu trong trình duyệt. Nội dung học tập chính nằm trong các tệp tĩnh; một số mã đăng nhập/đồng bộ Supabase cũng đang có trong repository nên cần Internet khi dùng chức năng đó.

**Bản demo:** [Tự học Tin học THPT](https://tranphuc2026abc-prog.github.io/website-tu-hoc-tin12/)

## Quy mô học liệu

| Khối | Bài học | Câu hỏi trong website | Trắc nghiệm | Đúng/sai | Tự luận | Chủ đề chính |
|---|---:|---:|---:|---:|---:|---|
| 10 | 34 | 850 | 748 | 34 | 68 | Dữ liệu, Internet, đồ họa, Python |
| 11 | 31 | 775 | 682 | 31 | 62 | Hệ điều hành, cơ sở dữ liệu, đồ họa, phim |
| 12 | 28 | 743 | 651 | 33 | 59 | AI, mạng, giải quyết vấn đề, ứng dụng Tin học |
| **Tổng** | **93** | **2.368** | **2.081** | **98** | **189** | |

Khối 10 và 11 có 25 câu mỗi bài. Khối 12 có 700 câu trong bộ nguồn; website giữ thêm 43 câu chỉ có trong ngân hàng hiện hành. Số liệu được đối chiếu với các catalog, tệp ngân hàng và báo cáo thống kê trong repository ngày 08/11/2026.

## Tính năng

- Chọn khối học, xem bản đồ và danh sách bài theo chủ đề.
- Đọc nội dung bài học, tìm kiếm bài và thuật ngữ.
- Ôn bằng thẻ ghi nhớ hoặc câu hỏi theo bài, chủ đề, nhiều bài, toàn bộ phạm vi, thuật ngữ, câu từng làm sai, nội dung đã đánh dấu, lượt ngẫu nhiên hoặc học kỳ.
- Luyện tập theo bài và dạng câu hỏi; lượt luyện chọn tối đa 10 câu, có chấm điểm, xem đáp án/giải thích và làm lại câu sai.
- Theo dõi trạng thái bài học, câu trả lời, lịch sử và các lượt câu hỏi đã xuất hiện.
- Sao lưu và khôi phục tiến độ bằng tệp JSON; có giao diện sáng/tối.
- Mã ứng dụng có tích hợp đăng nhập và đồng bộ qua Supabase. Chức năng này dùng Internet và dịch vụ ngoài; không nên mô tả toàn bộ sản phẩm là “không tài khoản, không server” khi cấu hình hiện còn bật.
- Mục “Ôn thi tốt nghiệp và đề tham khảo” đang tạm khóa để rà soát.

## Cách sử dụng

### Trên web

Mở [bản demo GitHub Pages](https://tranphuc2026abc-prog.github.io/website-tu-hoc-tin12/), chọn khối rồi chọn chức năng. Bài học và dữ liệu tĩnh được đóng gói trong website; đăng nhập/đồng bộ Supabase cần kết nối Internet.

### Trên máy tính

Tải ZIP của repository, giải nén toàn bộ thư mục rồi mở `index.html` bằng Chrome hoặc Edge. Giữ nguyên cấu trúc thư mục để các tệp dữ liệu và giao diện được tải đầy đủ. Một số tính năng xác thực/đồng bộ cần Internet.

### Trên điện thoại

Dùng bản web GitHub Pages. `Tin12_MotFile.html` là bản gộp riêng của khối 12, không chứa khối 10 và 11; không có bản một tệp gộp cả ba khối.

## Tiến độ và dữ liệu trên thiết bị

Tiến độ cục bộ lưu trong `localStorage` của từng trình duyệt/thiết bị và được tách theo khối (`tin10.v1`, `tin11.v1`, `tin12.v1`). Dữ liệu này không tự đồng bộ giữa các thiết bị. Vào **Tiến độ → Sao lưu tiến độ (JSON)** để lưu bản sao; dùng **Khôi phục từ tệp** để nạp lại. Xóa dữ liệu trình duyệt hoặc đổi thiết bị có thể làm mất tiến độ chưa sao lưu. Mã Supabase có cơ chế riêng cho phiên đăng nhập và đồng bộ trực tuyến.

## Cấu trúc repository

- `index.html`, `course.html`: màn hình chọn khối và trang học dùng chung.
- `assets/css/`, `assets/js/`, `assets/images/`: giao diện, logic, hình ảnh.
- `data/catalog.js`, `data/catalog-10.js`, `data/catalog-11.js`: catalog của ba khối; `data/lessons/`, `data/questions/`: dữ liệu website tải.
- `data/lesons/`: thư mục cũ viết sai chính tả, hiện vẫn có trong repository; ứng dụng nạp dữ liệu từ `data/lessons/`.
- `nguon/khoi-10/`, `nguon/khoi-11/`: KHBD đã chuyển đổi và ngân hàng JSON theo từng bài.
- `nguon/kien-thuc-chuan-hoa/`, `nguon/ngan-hang-cau-hoi/`: học liệu và ngân hàng khối 12.
- `scripts/`: dựng dữ liệu ba khối và đóng gói bản một tệp khối 12.
- `tests/e2e.js`, `.github/workflows/`: kiểm thử trình duyệt và quy trình kiểm tra/xuất bản.
- `docs/`: tài liệu kiểm kê, tích hợp ngân hàng và cấu hình thử nghiệm Supabase.
- `supabase/`: migration và mã chức năng máy chủ cho phần tài khoản.
- `Tin12_MotFile.html`: bản gộp của khối 12.

## Cập nhật nội dung và dựng dữ liệu

Sửa học liệu trong `nguon/`, giữ nguyên cấu trúc JSON/Markdown mà bộ dựng đang sử dụng. Với Python 3, chạy từ thư mục gốc:

```sh
python scripts/build_all_grades.py nguon
python scripts/build_single.py
```

Lệnh thứ nhất dựng dữ liệu ba khối; lệnh thứ hai tạo lại `Tin12_MotFile.html`. Quy trình GitHub Actions trên commit `8da565d63e90e23f9e75019ac3b5f8c66fcf806d` đã chạy hai lệnh này thành công.

## Kiểm thử

Trong môi trường có Node.js, Playwright và Chromium, quy trình CI kiểm tra catalog 34/31/28 bài, dựng ba khối và bản một tệp, sau đó chạy:

```sh
node tests/e2e.js http
node tests/e2e.js file Tin12_MotFile.html
```

Kiểm thử HTTP bao gồm chọn khối, mở bài, số câu, luyện tập, chấm điểm, tiến độ, sao lưu/khôi phục, giao diện responsive, lỗi JavaScript và hoạt động khi ngắt mạng. Bản một tệp hiện chỉ kiểm thử khối 12. Trong môi trường biên soạn tài liệu lần này, không chạy được lệnh build cục bộ vì thiếu Python; thư mục làm việc cũng thiếu `tests/e2e.js`. Kết quả CI gần nhất được ghi trong [báo cáo nghiệm thu](BAO_CAO_NGHIEM_THU.md).

## Tình trạng và hạn chế đã xác minh

- Có đủ catalog 34 bài khối 10, 31 bài khối 11 và 28 bài khối 12; ngân hàng website có 2.368 bản ghi.
- 14/34 bài khối 10 đang được catalog xếp vào “Chủ đề chưa phân loại”.
- Nhãn chế độ ôn theo học kỳ vẫn ghi cố định “Bài 1–14 / Bài 15–28”, trong khi catalog khối 10 chia 1–17/18–34 và khối 11 chia 1–16/17–31. Logic lọc dùng khoảng bài trong catalog, nhưng nhãn trên giao diện cần được sửa.
- Repository có cấu hình Supabase và mã xác thực/đồng bộ. Cần quyết định rõ phạm vi vận hành ngoại tuyến và trực tuyến trước khi giới thiệu tính năng “không tài khoản, không server”.
- Thư mục `data/lesons/` cũ vẫn còn bên cạnh `data/lessons/`; chưa xóa vì cần rà soát tham chiếu trước.
- Phần ôn thi tốt nghiệp và đề tham khảo đang khóa.
- Chưa có `LICENSE`; nguồn sử dụng lại và quyền phân phối của hình ảnh (`assets/images/`) chưa có ghi chú rõ trong repository. Cần chủ sản phẩm xác nhận trước khi phát hành rộng rãi.
- Chưa thẩm định chuyên môn thủ công toàn bộ 93 bài trong đợt cập nhật tài liệu này.

## Nguồn nội dung và bản quyền

Kho khối 10 và 11 ghi nhận học liệu được chuyển đổi từ KHBD Word do giáo viên cung cấp; báo cáo ngân hàng cho biết câu hỏi được biên soạn từ mục tiêu/chủ đề KHBD, không chép nguyên văn. Tài liệu khối 12 xác định đối chiếu SGK Tin học 12 định hướng ICT, bộ Kết nối tri thức với cuộc sống. Repository chưa có tuyên bố giấy phép, giấy phép phân phối cho hình ảnh hoặc hướng dẫn trích dẫn thống nhất; thông tin này cần được chủ sản phẩm và đơn vị sở hữu quyền xác nhận. Chưa thêm `LICENSE`.

## Tác giả và đơn vị

Tổ Toán–Tin, trường THCS & THPT Phạm Kiệt.

**Cập nhật ngày 08/11/2026.**

