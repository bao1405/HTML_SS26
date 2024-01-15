let mang1 = [1, 2, 3, 4, 5];
let mang2 = [-3, -1, 0, 1, 5];
let mang3 = [1, 5, 6, 7];
let i = 0, j = 0, k = 0;
console.log("Các phần tử chung của cả 3 mảng là:");
while (i < mang1.length && j < mang2.length && k < mang3.length) {
    if (mang1[i] === mang2[j] && mang2[j] === mang3[k]) {
        console.log(mang1[i]);
        i++;
        j++;
        k++;
    } else if (mang1[i] < mang2[j]) {
        i++;
    } else if (mang2[j] < mang3[k]) {
        j++;
    } else {
        k++;
    }
}