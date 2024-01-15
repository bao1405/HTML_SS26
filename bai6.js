let n =+prompt("Nhập vào số nguyên dương n:");
if (!isNaN(n) && n > 0) {
    let fi = [0, 1];
    while (fi.length <= n) {
        fi.push(fi[fi.length - 1] + fi[fi.length - 2]);
    }

    console.log(`Số Fibonacci thứ ${n}: ${fi[n]}`);
} else {
    console.log("Vui lòng nhập vào một số nguyên dương.");
}
