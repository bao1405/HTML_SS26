let mang = prompt("Nhập mảng số nguyên, mỗi số cách nhau bằng dấu phẩy: ");
mang = mang.split(",").map(Number);
mang.sort((a, b) => a - b);
let phanTuChuaXuatHien = 1;
for (let i = 0; i < mang.length; i++) {
    if (mang[i] <= 0) {
        continue;
    }
    if (mang[i] === phanTuChuaXuatHien) {
        phanTuChuaXuatHien++;
    } else {
        break;
    }
}
console.log("Phần tử lớn hơn 0 nhỏ nhất chưa xuất hiện trong mảng là:", phanTuChuaXuatHien);
