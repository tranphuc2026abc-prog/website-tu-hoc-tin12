# Phân hệ ôn thi tốt nghiệp THPT môn Tin học

## Nguồn và trạng thái
- 48 mã đề năm 2025 và 48 mã đề năm 2026 (0501–0548).
- Đáp án năm 2025: `data/exams/2025/dap-an.pdf` (chưa được tải lên).
- Đáp án tham khảo năm 2026: https://cmcu.edu.vn/cap-nhat-de-thi-tin-hoc-tot-nghiep-thpt-nam-2026-chinh-thuc-va-dap-an/
- Danh mục PDF đã thiết lập; **các tệp PDF chưa có trong repository**, cần tải lên qua GitHub. Tránh nhầm giao diện đã triển khai với kho đề đã triển khai.

## Bổ sung PDF
Đưa các PDF vào `data/exams/2025/0501.pdf` … `0548.pdf` và `data/exams/2026/0501.pdf` … `0548.pdf`.
Sau khi các tệp có mặt thật, cập nhật `data/exams/manifest.json` theo mẫu:

```json
{"files":{"2025":{"0501":"data/exams/2025/0501.pdf"},"2026":{"0501":"data/exams/2026/0501.pdf"}}}
```

Không đưa các đường dẫn chưa tồn tại vào manifest.

## Ngân hàng thi thử
`data/exams/questions.json` với `questions` là mảng câu hỏi đã nhập từ đề gốc và đối chiếu đáp án:

```json
{"schema_version":1,"questions":[
 {"id":"2025-0501-01","canonical_id":"cau-trung-goc-001","year":2025,"source_code":"0501","type":"mcq","track":"common","prompt":"Nội dung câu hỏi gốc","options":["A","B","C","D"],"answer":0},
 {"id":"2025-0501-25","canonical_id":"cau-trung-goc-025","year":2025,"source_code":"0501","type":"tf","track":"ict","prompt":"Đoạn dẫn gốc","options":["Ý a","Ý b","Ý c","Ý d"],"answer":[true,false,true,false]}
]}
```

`answer` của MCQ là chỉ số 0–3; câu đúng/sai là mảng boolean 4 phần tử. `track` có thể là `common`, `ict`, `cs`.

**Không sử dụng ví dụ trên làm đề thi thật**: nội dung chỉ minh họa cấu trúc dữ liệu.

## Bảo toàn dự án
Chỉ thay đổi đường dẫn trang chủ tới `de-thi-tot-nghiep.html`, giao diện ôn thi và các tệp trong `data/exams`. Không sửa ngân hàng câu hỏi các khối 10, 11, 12.
