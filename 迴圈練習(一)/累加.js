"use strict";

function sum(n) {
    let sum = 0;
    for (let i=0; i<=n; i++){
        sum += i;
    }
    return sum;
}

console.log(sum(3));
console.log('----');
console.log(sum(5));
