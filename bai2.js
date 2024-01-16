const mangSoNguyen = [2, 5, 3, 8, 1, 7, 4, 6];
const giaTriNhap = parseInt(prompt("Nhập vào một giá trị:"));
let viTriTimThay = -1;
for (let i = 0; i < mangSoNguyen.length; i++) {
    if (mangSoNguyen[i] === giaTriNhap) {
        viTriTimThay = i;
        break;
    }
}
if (viTriTimThay !== -1) {
    console.log(`Phần tử ${giaTriNhap} được tìm thấy tại vị trí ${viTriTimThay} trong mảng.`);
} else {
    console.log("Phần tử không tồn tại trong mảng.");
}
