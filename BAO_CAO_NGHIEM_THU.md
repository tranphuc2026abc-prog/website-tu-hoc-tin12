# Báo cáo nghiệm thu hồ sơ kỹ thuật – Website Tự học Tin học THPT

**Ngày kiểm kê:** 08/11/2026  
**Nhánh tài liệu:** `docs/cap-nhat-3-khoi`  
**Phạm vi:** kiểm chứng cấu trúc, quy mô dữ liệu, chức năng hiện có, build/CI và các điểm cần rà soát. Không thay đổi mã ứng dụng hoặc học liệu.

## 1. Quy mô đã kiểm chứng

Đối chiếu catalog `data/catalog-10.js`, `data/catalog-11.js`, `data/catalog.js`, danh sách tệp ở Git tree `main` (`8da565d63e90e23f9e75019ac3b5f8c66fcf806d`), các JSON nguồn 10–11, JSON nguồn 12 và dữ liệu `data/questions/`.

| Khối | Số bài trong catalog | Câu hỏi nguồn | Trắc nghiệm nguồn | Đúng/sai nguồn | Tự luận nguồn | Câu trong website | Trắc nghiệm website | Đúng/sai website | Tự luận website | Đối chiếu |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| 10 | 34 | 850 | 748 | 34 | 68 | 850 | 748 | 34 | 68 | Đủ 25 câu/bài |
| 11 | 31 | 775 | 682 | 31 | 62 | 775 | 682 | 31 | 62 | Đủ 25 câu/bài |
| 12 | 28 | 700 | 616 | 28 | 56 | 743 | 651 | 33 | 59 | Đủ 700 câu nguồn; giữ thêm 43 câu website-only |
| **Tổng** | **93** | **2.325** | **2.046** | **93** | **186** | **2.368** | **2.081** | **98** | **189** | **Không thiếu câu theo nguồn đã kiểm kê** |

### Kiểm kê theo bài

- Khối 10: 34/34 bài có tệp JSON nguồn và 34/34 tệp câu hỏi website; mỗi bài có 25 câu gồm 22 trắc nghiệm, 1 đúng/sai, 2 tự luận. Tổng 850 câu; không có chênh lệch số lượng theo bài.
- Khối 11: 31/31 bài có tệp JSON nguồn và 31/31 tệp câu hỏi website; mỗi bài có 25 câu gồm 22 trắc nghiệm, 1 đúng/sai, 2 tự luận. Tổng 775 câu; không có chênh lệch số lượng theo bài.
- Khối 12: 28 JSON nguồn, mỗi bài 25 câu; 28 tệp website có 743 câu. Báo cáo nguồn/đích cũ `BAO_CAO_NGHIEM_THU.md` ghi 700 câu nguồn khớp ID/nội dung, 43 câu website-only được giữ, không loại câu trùng. Kiểm tra trực tiếp lại tổng số và phân loại tệp hiện tại cho kết quả 700 nguồn, 743 trong chương trình; không phát hiện bản ghi chưa duyệt trong 743 câu (`st=ok`).
- Đối chiếu quan sát trước đó 34/31/28: **khớp hoàn toàn** với ba catalog.

### Chủ đề chính trong giao diện

- Khối 10: dữ liệu, Internet, đồ họa, Python. Catalog có 14/34 bài xếp vào “Chủ đề chưa phân loại”.
- Khối 11: hệ điều hành, cơ sở dữ liệu, đồ họa, phim (theo mô tả thẻ khối trên `index.html`); catalog chia thành 5 nhóm chủ đề.
- Khối 12: AI, mạng, giải quyết vấn đề và ứng dụng Tin học (theo mô tả thẻ khối); catalog có 7 chủ đề.

## 2. Chức năng và dữ liệu đã kiểm tra trong mã

- `index.html` chọn khối 10/11/12; `course.html` tải catalog theo `grade` qua `assets/js/course-loader.js`.
- Catalogs chứa 34, 31 và 28 bài, cùng `qfiles` tương ứng theo khối. `assets/js/app.js` tải dữ liệu từ `data/lessons/` và `data/questions/`.
- Ba dạng câu hỏi trong logic luyện tập: `mcq`, `tf`, `essay`. Câu tự luận được tự đánh giá, không chấm như MCQ; đúng/sai nhiều mệnh đề được chấm riêng; MCQ và đúng/sai có đáp án/giải thích khi xem lại.
- Luyện tập lọc theo bài và loại câu hỏi, chọn tối đa 10 câu/lượt, dùng lịch sử câu đã xuất hiện để ưu tiên câu chưa gặp trong chu kỳ hiện tại; khi hết ngân hàng thì tạo chu kỳ mới. Có lịch sử lượt làm và chức năng làm lại câu sai.
- Ôn tập có 9 chế độ trong `assets/js/app.js`: theo bài, chủ đề, nhiều bài, toàn bộ, thuật ngữ, câu từng trả lời sai, nội dung đã đánh dấu, ngẫu nhiên nhanh và học kỳ. Có thẻ ghi nhớ.
- Tiến độ cục bộ lưu bằng `localStorage`, khóa theo khối `tin10.v1`, `tin11.v1`, `tin12.v1`; hỗ trợ xuất/nhập JSON. Ứng dụng cũng giữ dữ liệu phiên và đường đi riêng cho tài khoản đăng nhập.
- `scripts/build_single.py` tạo `Tin12_MotFile.html` từ catalog, 28 bài khối 12, ngân hàng khối 12, CSS và mã giao diện; bản một tệp không gộp khối 10–11.
- Danh sách gốc có `data/lesons/` bên cạnh `data/lessons/`; trang tải dữ liệu ở `data/lessons/`. Chưa xóa thư mục sai chính tả.

## 3. Kết quả build và kiểm thử

### Kiểm tra trực tiếp trong phiên lập hồ sơ

- Đã kiểm tra Git tree `main` bằng GitHub API ở commit `8da565d63e90e23f9e75019ac3b5f8c66fcf806d`: 473 mục, có đủ catalog, dữ liệu, nguồn, script và `tests/e2e.js`.
- Đã đọc/đếm các catalog, JSON nguồn và JavaScript ngân hàng qua GitHub Connector; số liệu tổng hợp ở mục 1 là kết quả thực tế, không ước lượng.
- Thử `python scripts/build_all_grades.py nguon`: **không chạy được** vì môi trường không có lệnh `python`; thử `py -3` cũng không khả dụng. Bản workspace cục bộ không phải checkout đầy đủ và thiếu khối 12.
- Thử `node tests/e2e.js http`: **không chạy được cục bộ** vì thư mục workspace không có `tests/e2e.js`. Tệp này có trên GitHub; lỗi là giới hạn bản sao làm việc, không phải kết quả lỗi từ E2E của repository.
- Không chụp và lưu ảnh minh họa vào repository: phiên này không có checkout đầy đủ kèm Playwright/Chromium và không có đường dẫn ghi ảnh từ tab trình duyệt vào repository qua công cụ đang dùng.

### Bằng chứng CI trên repository

- GitHub Actions run [42482710967](https://github.com/tranphuc2026abc-prog/website-tu-hoc-tin12/actions/runs/42482710967), commit `8da565d63e90e23f9e75019ac3b5f8c66fcf806d`, workflow `Validate and deploy Tin hoc 12`: **completed / success**.
- Workflow `pages.yml` chạy build ba khối (`python scripts/build_all_grades.py nguon`), build bản một tệp (`python scripts/build_single.py`), xác nhận catalog có lần lượt 34/31/28 bài và chạy E2E qua HTTP bằng Playwright/Chromium. Theo kết quả workflow, các bước trên đạt.
- Workflow `question-bank-e2e.yml` chạy E2E HTTP cho website nhiều tệp và E2E `file` cho bản `Tin12_MotFile.html`; lịch sử PR #25 hiển thị hai check thành công trước khi hợp nhất. Kết quả này không thay thế việc chạy lại cục bộ trong phiên hiện tại.

## 4. Vấn đề phát hiện, xếp theo ưu tiên

### Ưu tiên cao – cần làm rõ trước khi giới thiệu sản phẩm

1. **Mô tả ngoại tuyến/không tài khoản chưa khớp toàn bộ mã.** `assets/js/course-loader.js` nạp `supabase-config.js` và `supabase-cloud.js`; `assets/js/supabase-config.js` có cấu hình dịch vụ công khai, còn mã có luồng phiên, đăng nhập và đồng bộ. Học liệu tĩnh và lưu cục bộ có thể dùng độc lập, nhưng không thể mô tả toàn bộ hệ thống là không tài khoản/không server/không Internet khi phần này còn được bật. Cần chủ sản phẩm quyết định tắt hay công bố rõ phần trực tuyến.
2. **Chưa có LICENSE và ghi nhận bản quyền hình ảnh chưa rõ.** Repository có thư mục `assets/images/` nhưng chưa có tệp giấy phép hoặc ghi nguồn/điều kiện sử dụng cho mọi ảnh. Chưa thêm LICENSE theo yêu cầu; cần chủ sản phẩm/đơn vị xác nhận quyền sử dụng và chọn giấy phép trước khi phát hành rộng rãi.

### Ưu tiên vừa – ảnh hưởng tính rõ ràng và điều hướng

3. **14/34 bài Tin học 10 chưa được phân loại chủ đề** trong catalog. Các bài vẫn có mặt trong danh sách/bản đồ, nhưng nên rà lại nhóm chủ đề và bản đồ chương trình.
4. **Nhãn học kỳ không phù hợp khối 10 và 11.** Bộ lọc đọc `C.hk` theo catalog (10: 1–17/18–34; 11: 1–16/17–31; 12: 1–14/15–28), nhưng nhãn giao diện trong `assets/js/app.js` ghi cố định 1–14/15–28.
5. **Thư mục `data/lesons/` trùng sai chính tả với `data/lessons/`.** Mã loader dùng `data/lessons/`; thư mục sai chính tả vẫn nằm trong Git tree với dữ liệu khối 12. Cần kiểm tra lịch sử/tham chiếu trước khi dọn.
6. **Mục ôn thi tốt nghiệp và đề tham khảo đang tạm khóa** theo giao diện `index.html`.

### Ưu tiên thấp – hồ sơ

7. Chưa có ảnh màn hình lưu trong `assets/screenshots/`.
8. Chưa thẩm định chuyên môn thủ công cả 93 bài trong nhiệm vụ hồ sơ này; kết quả chỉ xác nhận cấu trúc, số liệu, liên kết mã và trạng thái CI.

## 5. Nguồn và ghi chú quyền sử dụng

- README khối 10/11 mô tả tài liệu được chuyển đổi từ KHBD Word do giáo viên cung cấp; báo cáo ngân hàng của mỗi khối ghi 25 câu/bài và mô tả câu hỏi được biên soạn từ KHBD.
- `nguon/BAO_CAO_KIEM_KE.md` và `nguon/DE_XUAT_WEBSITE.md` xác định học liệu khối 12 đối chiếu SGK Tin học 12 định hướng ICT, bộ Kết nối tri thức với cuộc sống.
- Chưa xác định được thông tin cấp phép cho ảnh và toàn bộ học liệu từ chính repository. Không đưa kết luận pháp lý; cần xác nhận nguồn, quyền sử dụng và điều kiện phân phối.

## 6. Việc cần chủ sản phẩm quyết định

- Chọn phạm vi phát hành: ngoại tuyến thuần túy hay gồm cả đăng nhập/đồng bộ Supabase.
- Xác nhận quyền sử dụng hình ảnh/học liệu và lựa chọn giấy phép; repository hiện chưa có `LICENSE`.
- Rà soát 14 bài khối 10 chưa phân loại và yêu cầu sửa nhãn học kỳ theo catalog.
- Nếu muốn có ảnh minh họa, chạy bộ Playwright trong checkout đầy đủ rồi lưu PNG vào `assets/screenshots/`.

**Kết luận:** quy mô 93 bài và 2.368 câu trong website đã được kiểm tra từ catalog và dữ liệu thực tế; các số quan sát 34/31/28 là chính xác. Build và E2E cục bộ không chạy được do workspace không đầy đủ, nhưng GitHub Actions gần nhất trên commit hiện tại báo thành công. Hồ sơ tài liệu đã nhận diện rõ các điểm cần chủ sản phẩm quyết định; chưa thay đổi logic, dữ liệu học liệu, cấu hình hoặc chức năng ứng dụng.

