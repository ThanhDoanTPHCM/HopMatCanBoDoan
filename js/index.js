/* ==========================================================================
   XỬ LÝ LẤY TÊN TỪ TALLY VÀ HIỂN THỊ LÊN THIỆP
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Lấy tất cả tham số từ URL
    const urlParams = new URLSearchParams(window.location.search);
    
    // 2. Tìm giá trị của tham số "name" (Phải khớp với ID trường trên Tally)
    // Nếu trên Tally bạn đặt là "ho_ten" thì đổi 'name' thành 'ho_ten'
    const userName = urlParams.get('name');

    // 3. Tìm phần tử hiển thị tên trên giao diện
    const nameElement = document.querySelector('.officer-name');

    if (nameElement) {
        if (userName) {
            // Giải mã URL (xử lý dấu tiếng Việt và khoảng trắng)
            const decodedName = decodeURIComponent(userName);
            
            // Hiển thị tên kèm tiền tố "Đồng chí"
            nameElement.textContent = `Đồng chí ${decodedName}`;
        } else {
            // Nếu không có tên trên URL, có thể để mặc định hoặc ẩn đi
            nameElement.textContent = "Quý Đại biểu"; 
        }
    }
});