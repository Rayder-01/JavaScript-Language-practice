"use strict";

let myAnd = function(a, b) {
    if (a)
        return b;
    else
        return false;
}

console.log(myAnd(true, true));
console.log(myAnd(true, false));
console.log(myAnd(false, true));
console.log(myAnd(false, false));