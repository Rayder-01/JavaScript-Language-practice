"use strict";

let y = 3;

function square(x) {
    x = x * x 
    return x;
}

let result = square(y);
// 以上程式碼會轉換成：
// let result = square(3);  之後再呼叫 square

console.log(result);

console.log(y); // 所以 y 仍然是 3 沒有改變