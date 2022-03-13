"use strict";

function addNum(num1, num2) {
    return num1 + num2;
}

console.log(addNum(3, 10)); // 這次的呼叫會將 3 傳給 num1，並將 10 傳給 num2。
console.log(addNum(7, addNum(2, 9)) === 18); // 呼叫 function 得到的結果，可以成為傳入下一次呼叫的值

let count = 0;
function subNum(num1, num2) {
    count = count + 1;
    return num1 - num2;
}

console.log(subNum(3, 10));
console.log(subNum(7, subNum(2, addNum(9, 3))));   
console.log(count === 3)