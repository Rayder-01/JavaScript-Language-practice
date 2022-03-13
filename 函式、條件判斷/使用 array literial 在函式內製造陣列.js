"use strict";

let sort2 = function(n1, n2) {
    if (n1 > n2) {
        // construct an array with array literal
        return [n2, n1];  
    } else {
        return [n1, n2];
    }
}

console.log(sort2(2, 3));
console.log(sort2(4, 1));
