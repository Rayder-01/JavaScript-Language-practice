"use strict";

let product = function(ary) {
    let rsl = [];
    let num = 1;
    for (let i = 0; i < ary.length; i = i + 1) {
        num *= ary[i];
    }
    return num;
}

console.log(product([]));
console.log(product([1, 2, 3]));
console.log(product([8, 9, 12.1, 5.34]));
