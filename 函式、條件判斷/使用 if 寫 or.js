"use strict";

let myOr = function(a, b) {
    if (a||b)
        return true;
    else
        return false;
}

console.log(myOr(true, true));
console.log(myOr(true, false));
console.log(myOr(false, true));
console.log(myOr(false, false));