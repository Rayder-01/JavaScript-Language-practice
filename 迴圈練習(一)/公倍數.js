"use strict";

function test(n) {
    if ((n % 3 === 0) && (n % 8 === 0)) // % 可計算餘數
        return true;
    else 
        return false;
}

console.log(test(5));
console.log(test(24));
console.log(test(48));
