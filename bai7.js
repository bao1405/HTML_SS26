const mangNguyen = [1, 5, 6, 3, 2, 1, 1, 5, 6, 7];
const soNhapVao = parseInt(prompt("Nhập vào một số:"));
let mangCon = null;
for (let i = 0; i < mangNguyen.length; i++) {
    let currentSum = 0;
    let tempMangCon = [];
    for (let j = i; j < mangNguyen.length; j++) {
        currentSum += mangNguyen[j];
        tempMangCon.push(mangNguyen[j]);
        if (currentSum === soNhapVao) {
            mangCon = tempMangCon;
            break;
        }
    }

    if (mangCon) {
        break;
    }
}
if (mangCon) {
    console.log(`Mảng con có tổng bằng ${soNhapVao}: [${mangCon.join(', ')}]`);
} else {
    console.log("Không có mảng con thỏa mãn");
}
