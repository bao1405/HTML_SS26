let a= +prompt('Nhập a');;
let tongle = 0;
if(!isNaN(a) && a > 0) {
    for (let i = 1; i <= a; i++) {
        console.log(i);
        if (i % 2 !== 0) {
            tongle += i;
        }
    }
} else {
    console.log("Vui lòng nhập một số nguyên dương.");
}
console.log('Tổng các số lẻ từ 1 đến ' + a + ' là: ' + tongle);
