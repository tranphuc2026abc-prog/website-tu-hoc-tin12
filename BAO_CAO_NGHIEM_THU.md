# Báo cáo nghiệm thu (trạng thái thực tế, 28/10/2026)

## Đã làm và đã kiểm thử
- 28/28 bài học nạp từ kho kiến thức, đủ 7 mục mỗi bài; danh mục và thứ tự lấy từ CSV.
- Ngân hàng câu hỏi nạp đủ **31 câu**: 23 trắc nghiệm 4 lựa chọn, 5 câu Đúng/Sai (20 nhận định, chấm từng ý), 3 câu Luyện tập/Vận dụng (tự đánh giá).
- Trang chủ, danh mục, trang bài (tóm tắt, tiến độ, đánh dấu đã học/cần ôn, kiến thức liên quan, xem kết quả mã HTML), tìm kiếm có/không dấu, luyện tập/kiểm tra có chọn bài–dạng–số câu–trộn, làm lại câu sai, lịch sử điểm, 9 chế độ ôn tập, thẻ ghi nhớ, sao lưu/khôi phục JSON, xóa dữ liệu có xác nhận kép, sáng/tối.
- Kiểm thử tự động Chromium (30 kiểm tra, 0 lỗi) ở `file://`, `http://localhost` và bản một tệp; ngắt mạng vẫn mở bài; không có yêu cầu tài nguyên ngoài; không lỗi JS; không tràn ngang ở 390 px và 820 px.

## Hạn chế / chưa làm
- Chưa có: kéo thả/sắp xếp/ghép nối, điền khuyết (nguồn không có câu loại này), liên kết tự động từng thuật ngữ, Service Worker/PWA và script máy chủ Windows. Website vẫn chạy offline khi mở trực tiếp.
- Chưa thử trên Windows thật, điện thoại thật, Safari, Firefox.
- Thang chấm Đúng/Sai 0,1–0,25–0,5–1 là tùy chọn của website (cấu trúc đề thi THPT từ 2025; cần đối chiếu văn bản hiện hành); hồ sơ nguồn không quy định điểm.

## Vấn đề của dữ liệu nguồn (cần giáo viên rà soát; không tự sửa)
1. **18/28 bài chưa có câu hỏi** (B05, 06, 08, 09, 11, 12, 14, 15, 16, 18, 19, 20, 21, 22, 23, 25, 26, 28) dù CSV ghi “Đầy đủ”. Các bài này ôn bằng thẻ ghi nhớ.
2. Nhóm “Bài 24–28” có 2 câu trắc nghiệm không ghi rõ bài: gắn B24 (Google Drive) và B27 (nhúng Biểu mẫu) theo đối chiếu kho kiến thức; đánh dấu “cần rà soát”.
3. Tên chủ đề trong `DE_XUAT_WEBSITE.md` khác CSV (ví dụ Chủ đề 4, 7); website dùng CSV.
4. Bài 19 có chữ “Cổ đẳng” (nghi là “Cao đẳng”): giữ nguyên văn.
5. Quan hệ giữa các bài chỉ dựa trên căn cứ văn bản (Bài 8←7, 18←7–17, 28←23–27, chuỗi bài trong `DE_XUAT_WEBSITE.md` mục IV.1), mỗi quan hệ hiển thị kèm căn cứ.
