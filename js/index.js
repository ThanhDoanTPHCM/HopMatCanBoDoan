console.log("Script đã kết nối thành công!");

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const userName = urlParams.get('ten');
    
    console.log("Tên lấy được từ URL là:", userName);

    const nameElement = document.querySelector('.officer-name');
    console.log("Phần tử hiển thị tên là:", nameElement);

    if (nameElement) {
        if (userName) {
            nameElement.innerHTML = `<span class="style-dong-chi">Đồng chí</span> ${decodeURIComponent(userName)}`;
        } else {
            nameElement.textContent = "Quý Đại biểu";
            console.log("Không tìm thấy tham số 'ten' trên URL");
        }
    } else {
        console.error("Lỗi: Không tìm thấy class '.officer-name' trong HTML!");
    }
});


// Chờ cho toàn bộ trang web (hình ảnh, font, css) tải xong hoàn toàn
window.addEventListener('load', () => {

    console.log("Trang đã tải xong. Chuẩn bị hiệu ứng...");

    // Tìm phần tử chứa mã QR
    const qrContainer = document.querySelector('.qr-container');

    // Nếu tìm thấy (đề phòng lỗi HTML quên không cho vào)
    if (qrContainer) {
        // Đặt thời gian trễ: 1000 mili giây (tức là 1 giây)
        // Bạn có thể tăng giảm số này tùy thích
        setTimeout(() => {
            // Xóa class ẩn
            qrContainer.classList.remove('qr-hidden');
            // Thêm class hiện (kích hoạt hiệu ứng CSS transition)
            qrContainer.classList.add('qr-visible');
            console.log("Hiệu ứng QR đã kích hoạt!");
        }, 1000);
    }

});

// Đợi cho đến khi tất cả Font chữ được tải xong hoàn toàn
document.fonts.ready.then(function () {
    console.log("Phông chữ đã sẵn sàng!");
    
    // Thêm một class vào body để thông báo là đã tải xong
    document.body.classList.add('finished-loading');

    // Kích hoạt hiệu ứng hiện mã QR (nếu bạn muốn)
    const qr = document.querySelector('.qr-container');
    if (qr) {
        qr.classList.remove('qr-hidden');
        qr.classList.add('qr-visible');
    }
});