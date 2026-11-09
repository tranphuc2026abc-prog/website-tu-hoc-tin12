# Báo cáo bằng chứng giao diện

Ngày kiểm tra: 09/11/2026  
Nhánh: `chuan-hoa/giao-dien-bang-chung`, phụ thuộc PR-1 #28. Chưa merge, chưa triển khai.

## Tóm tắt trước và sau

| Hạng mục | Trước | Sau |
|---|---|---|
| Điều hướng | Glyph và nhãn chữ bị lặp trong tên truy cập | Còn SVG trang trí và một nhãn chữ |
| Vùng chạm trên 360 px | Logo cao 38 px, theme rộng 42 px, ô bài 39 × 39 px | Các mục đo được đạt tối thiểu 44 × 44 px |
| Nhãn thương hiệu | Hero/bản đồ có cụm tiếng Anh | Các nhãn phụ đã chuyển sang tiếng Việt |
| Màn hình | Chưa có ảnh 360/768/1366 | 81 ảnh trước và 81 ảnh sau trong artifact Actions |
| Tiến độ | Đọc khóa cũ `tin10.v1`, `tin11.v1`, `tin12.v1` | Không đổi khóa; kiểm tra tương thích cũ chạy lại đạt |

## Kiểm thử và kết quả

Workflow [Bằng chứng giao diện — run #14](https://github.com/tranphuc2026abc-prog/website-tu-hoc-tin12/actions/runs/42549392559), run ID `42549392559`, kết thúc thành công.

- Build: `python scripts/build_all_grades.py nguon` và `python scripts/build_single.py` đều hoàn tất. Log ghi khối 10: 34 bài/850 câu, khối 11: 31/775, khối 12: 28/743; bản một tệp được dựng.
- Tương thích tiến độ: `node tests/compatibility-progress.js` thành công, 13/13 trường hợp theo log kiểm thử: ba khóa cũ và bài tiếp tục tương ứng, học sinh mới, JSON hỏng, localStorage bị chặn.
- E2E hiện có: `node tests/e2e.js http` và `node tests/e2e.js file Tin12_MotFile.html` đều thoát thành công trong cùng job.
- Playwright giao diện: `node tests/ui-evidence.js` thành công; tạo 81 ảnh. Các kiểm tra DOM đều đạt: học sinh mới không thấy thẻ tiếp tục; ba thẻ tiếp tục mở đúng khối/bài; không tràn ngang ở 360 px trên trang chọn khối và tổng quan; focus nhìn thấy; không điều khiển thiếu tên; không mục tiêu chạm nhỏ hơn 44 px; nhãn điều hướng không còn glyph lặp.
- Trong mẫu chữ có nền phẳng, không còn cảnh báo tương phản. Các tỷ lệ token chi tiết được ghi trong [thiết kế](THIET_KE_GIAO_DIEN.md).
- Artifact ảnh sau: [mở và tải ảnh](https://github.com/tranphuc2026abc-prog/website-tu-hoc-tin12/actions/runs/42549392559). Ảnh trước: [artifact run #8](https://github.com/tranphuc2026abc-prog/website-tu-hoc-tin12/actions/runs/42548475155).

## Phạm vi thay đổi và dữ liệu

So sánh nhánh PR-2 với PR-1 cho thấy thay đổi chỉ ở workflow kiểm tra, CSS/HTML/JavaScript trình bày, kiểm thử và tài liệu. Không có tệp trong `data/`, `nguon/`, Supabase hay workflow triển khai thay đổi. Không đổi ID, localStorage, câu hỏi, đáp án hoặc logic chấm điểm.

Build trong CI tái tạo một số tệp sinh trong workspace của runner nhưng các tệp này không được commit vào PR. Nhánh PR chỉ có các thay đổi giao diện, kiểm thử và tài liệu.

## H1–H9

- H1: đúng một phần ở bản trước; nhãn hero/bản đồ bằng tiếng Anh đã được Việt hóa.
- H2: sai; thẻ tiếp tục tồn tại theo tiến độ. Playwright mới kiểm tra đúng liên kết cho cả ba khối và ẩn khi chưa có tiến độ.
- H3: sai; mục ôn thi đã thu gọn thành “Sắp có”.
- H4: đúng ở bản trước; đã bỏ glyph lặp và xác nhận tên điều hướng qua DOM.
- H5: đúng một phần; có khung chờ và hướng dẫn lỗi, chưa có bộ khung chờ nội dung.
- H6: sai; tiêu đề và document title nêu đúng khối.
- H7: sai; mặc định sáng, có theme tối. Chưa có nghiên cứu mỏi mắt thực nghiệm.
- H8: đúng trên Pages/main trước PR-1; 14 bài khối 10 được xếp chưa phân loại. PR-1 cập nhật nhãn nguồn độ tin cậy cao; chưa triển khai cho đến khi merge.
- H9: đúng một phần; các chỉ số đã nêu đạt trên phạm vi đo. Chưa thử screen reader, chưa rà toàn bộ bàn phím, mọi màu trạng thái hoặc mạng yếu.

## Chưa kiểm chứng / còn tồn tại

- Không thử với học sinh, trình đọc màn hình thật hoặc thiết bị cũ thực tế.
- Kiểm tra focus bàn phím chỉ xác nhận focus nhìn thấy ở trang chủ và trang khóa học; chưa đi hết tất cả thành phần trên mọi trang.
- Kiểm tra tràn ngang tự động tập trung vào trang chọn khối/tổng quan ở 360 px. Ảnh các màn còn lại có ở artifact nhưng chưa có phép đo tràn ngang cho từng ảnh.
- Tỷ lệ tương phản là phép tính các token màu phẳng; gradient, ảnh và phản hồi đúng/sai cần kiểm riêng.
- Ảnh trước/sau chưa nằm trong `docs/ui/anh/`; workflow đã tải artifact thành công. Liên kết artifact hết hạn sau 30 ngày.
- Nhóm fallback “Chủ đề chưa phân loại” không còn dữ liệu minh họa sau khi build nhánh PR-1 nên chưa có ảnh nhóm này.
- Không chạy Lighthouse; không dùng phần mềm đọc màn hình.
