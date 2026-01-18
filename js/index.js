console.log("Script đã kết nối thành công!");

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    
    // --- XỬ LÝ TÊN (Code cũ) ---
    const userName = urlParams.get('ten');
    const nameElement = document.querySelector('.officer-name');

    if (nameElement) {
        if (userName) {
            nameElement.innerHTML = `<span class="style-dong-chi">Đồng chí</span> ${decodeURIComponent(userName)}`;
        } else {
            nameElement.textContent = "Quý Đại biểu";
        }
    } else {
        console.error("Lỗi: Không tìm thấy class '.officer-name'");
    }

    // --- XỬ LÝ CHỨC VỤ (Mới thêm) ---
    // 1. Lấy tham số 'chucvu' từ URL
    const userPosition = urlParams.get('chucvu');
    console.log("Chức vụ lấy được là:", userPosition);

    // 2. Tìm phần tử HTML để hiển thị chức vụ
    const positionElement = document.querySelector('.officer-position');

    if (positionElement) {
        if (userPosition) {
            // Giải mã URL (decode) để hiển thị tiếng Việt đúng
            positionElement.textContent = decodeURIComponent(userPosition);
            // Đảm bảo nó hiện lên (phòng trường hợp CSS đang ẩn)
            positionElement.style.display = 'block';
        } else {
            // Nếu không có chức vụ trên URL thì ẩn dòng này đi cho đẹp
            positionElement.style.display = 'none';
            console.log("Không có chức vụ, đã ẩn dòng chức vụ.");
        }
    } else {
        console.warn("Lưu ý: Chưa có class '.officer-position' trong HTML để hiện chức vụ.");
    }
});

// --- PHẦN HIỆU ỨNG QR (Giữ nguyên) ---
window.addEventListener('load', () => {
    console.log("Trang đã tải xong. Chuẩn bị hiệu ứng...");
    const qrContainer = document.querySelector('.qr-container');
    if (qrContainer) {
        setTimeout(() => {
            qrContainer.classList.remove('qr-hidden');
            qrContainer.classList.add('qr-visible');
            console.log("Hiệu ứng QR đã kích hoạt!");
        }, 1000);
    }
});