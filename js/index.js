console.log("Script đã kết nối thành công!");

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const userName = urlParams.get('ten');
    
    console.log("Tên lấy được từ URL là:", userName);

    const nameElement = document.querySelector('.officer-name');
    console.log("Phần tử hiển thị tên là:", nameElement);

    if (nameElement) {
        if (userName) {
            nameElement.textContent = "Đồng chí " + decodeURIComponent(userName);
        } else {
            nameElement.textContent = "Quý Đại biểu";
            console.log("Không tìm thấy tham số 'ten' trên URL");
        }
    } else {
        console.error("Lỗi: Không tìm thấy class '.officer-name' trong HTML!");
    }
});