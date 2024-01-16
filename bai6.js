const mangSoNguyen = [2, -5, 1, -3, 8, -7, 4, 6, -9];
let indexAm = 0;
let indexDuong = mangSoNguyen.length - 1;
while (indexAm < indexDuong) {
    while (mangSoNguyen[indexAm] < 0 && indexAm < indexDuong) {
        indexAm++;
    }
    while (mangSoNguyen[indexDuong] >= 0 && indexAm < indexDuong) {
        indexDuong--;
    }
    if (indexAm < indexDuong) {
        let temp = mangSoNguyen[indexAm];
        mangSoNguyen[indexAm] = mangSoNguyen[indexDuong];
        mangSoNguyen[indexDuong] = temp;
    }
}
console.log("Mảng sau khi di chuyển các số âm lên đầu và dương về cuối:");
console.log(mangSoNguyen);
