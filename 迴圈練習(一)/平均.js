"use strict";
let sum = 0; 
let average = function(n) {
    for (let i = 0 ;i<=n;i++){
        sum += (i/n);
    }
    return sum;
}

console.log(average(5));    