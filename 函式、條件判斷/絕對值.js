"use strict";

let abs = function(n) {
    if (n >= 0) 
        return n;
    else
        return -n;
}

console.log(abs(-3));
console.log(abs(5));
console.log(abs(0));