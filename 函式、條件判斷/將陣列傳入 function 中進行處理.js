"use strict";

let and2 = function(ary) {
    if (ary[0]&&ary[1])
        return true;
    else
        return false;
}

console.log(and2([true, true]));
console.log(and2([true, false]));
console.log(and2([false, true]));
console.log(and2([false, false]));
