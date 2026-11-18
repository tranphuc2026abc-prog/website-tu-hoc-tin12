# Import bộ câu hỏi Tin học 10 đã thẩm định

Bản nguồn gốc **34 bài / 1.117 câu** được xác thực bằng SHA256 trước khi thay thế.

**Cách nạp dữ liệu một lần:** vào thư mục này trên nhánh `main`, chọn
**Add file → Upload files**, tải lên tệp:

`NGAN_HANG_CAU_HOI_TIN_10_DA_THAM_DINH.zip`

SHA256 bắt buộc: `7d27a4752e591505a0aa648afdb25a0811978a13196044b6ebc1ba76fc17ebbe`.

GitHub Actions sẽ tự trích xuất 34 JSON sang `nguon/khoi-10/ngan-hang-cau-hoi/`,
xây dựng 34 tệp JavaScript câu hỏi `data/questions/ICT10_BNN.js`, kiểm tra
tổng số 1.117 câu và commit thay thế dữ liệu khối 10. Sau khi hoàn thành,
workflow xóa tệp ZIP tạm này.

Không tác động đến tệp ngân hàng câu hỏi khối 11 hoặc khối 12.
