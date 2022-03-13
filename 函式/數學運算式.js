//請寫一計算此運算式的程式：
//m * n + m % ( n + m ) - n

"use strict";

function math(m,n) {
    return m * n + m % ( n + m ) - n
}

console.log(math(2, 3));
console.log(math(4, 5));
