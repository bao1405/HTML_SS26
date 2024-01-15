let chieuDai = parseInt(prompt("Nhập chiều dài của hình chữ nhật: "));
let chieuRong = parseInt(prompt("Nhập chiều rộng của hình chữ nhật: "));
let ucln = 1;
let minSide = Math.min(chieuDai, chieuRong);
for (let i = 1; i <= minSide; i++) {
    if (chieuDai % i === 0 && chieuRong % i === 0) {
        ucln = i;
    }
}
let soHinhVuong = (chieuDai * chieuRong) / (ucln * ucln);
let kichCoHinhVuong = ucln;
console.log("Số hình vuông tối thiểu có thể cắt từ hình chữ nhật là:", soHinhVuong);
console.log("Kích cỡ mỗi hình vuông là:", kichCoHinhVuong);