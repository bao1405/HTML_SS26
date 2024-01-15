let a = +prompt('Nhập số nguyên a: ');
let b = +prompt('Nhập số nguyên b: ');
let c = +prompt('Nhập số nguyên c: ');
let d = +prompt('Nhập số nguyên d: ');

let i = Math.max(a, b, c, d);

while (true) {
    if (i % a === 0 && i % b === 0 && i % c === 0 && i % d === 0) {
        console.log(`Bội chung nhỏ nhất của ${a}, ${b}, ${c}, ${d} là: ${i}`);
        break;
    }
    i++;
}
