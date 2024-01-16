const a = parseInt(prompt("Nhập vào số nguyên dương a:"));
const b = parseInt(prompt("Nhập vào số nguyên dương b:"));
const mangKetQua = [];
for (let i = 1; i <= a; i++) {
    if (i % b === 0) {
        mangKetQua.push(i);
    }
}
for (let i = 1; i <= b; i++) {
    if (i % a === 0 && !mangKetQua.includes(i)) {
        mangKetQua.push(i);
    }
}
console.log(`Các số chia hết cho ${b} hoặc ${a} trong khoảng từ 1 đến ${Math.max(a, b)} là:`);
console.log(mangKetQua);
