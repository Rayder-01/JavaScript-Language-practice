"use strict";

function test(n, n1, n2) {
    if ((n % n1 === 0) && ((n % n2) === 0)) 
        return true;
    else 
        return false;
}

console.log(test(10, 2, 5));
console.log(test(24, 3, 8));

function sum(n1, n2) {
    let sum = 0;
    for (let i = 1; i <= 100; i++) {
        if (test(i,n1,n2)){
            sum += i
        }
    }
    return sum;
}

console.log(sum(2, 5));
console.log(sum(3, 8));
