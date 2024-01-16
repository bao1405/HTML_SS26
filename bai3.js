const mangSoNguyen = [2, 5, 3, 2, 8, 2, 3, 1, 7, 5, 2];
const soNhapVao = parseInt(prompt("Nhập vào một số nguyên:"));
let soLanXuatHien = 0;
for (let i = 0; i < mangSoNguyen.length; i++) {
    if (mangSoNguyen[i] === soNhapVao) {
        soLanXuatHien++;
    }
}
console.log(`Số ${soNhapVao} xuất hiện ${soLanXuatHien} lần trong mảng.`);
