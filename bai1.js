const mang = [1, 'abc', 3, 'xyz', 5, 6.7, 'ghi'];
let tonTaiSoNguyen = false;
for (let i = 0; i < mang.length; i++) {
    if (Number.isInteger(mang[i])) {
        console.log(`Phần tử số nguyên: ${mang[i]}`);
        tonTaiSoNguyen = true;
    }
}
if (!tonTaiSoNguyen) {
    console.log("Trong mảng không tồn tại số nguyên");
}
