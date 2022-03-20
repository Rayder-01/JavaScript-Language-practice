"use strict";

let removeA = function(ary) {
    let rsl = [];
    for (let i = 0; i < ary.length; i = i + 1) {
        if (ary[i] !== 'A')
        rsl.push(ary[i]);
    }
    return rsl;
}

console.log(removeA([]));
console.log(removeA(['B', 'A']));
console.log(removeA(['A', 2, 'A', 3, 'A']));
