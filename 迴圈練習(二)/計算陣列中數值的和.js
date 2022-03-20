"use strict";

let sum = function(ary) {
    let rsl = [];
    let num = 0;
    for (let i = 0; i < ary.length; i = i + 1) {
        num += ary[i];
    }
    return num;
}

console.log(sum([]));
console.log(sum([1, 2, 3]));
console.log(sum([8, 9, 12.3, 5]));
