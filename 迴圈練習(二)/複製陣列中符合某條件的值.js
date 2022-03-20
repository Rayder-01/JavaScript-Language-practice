"use strict";

let pickA = function(ary) {
    let rsl = [];
    for (let i = 0; i < ary.length; i = i + 1) {
        if (ary[i] === 'A')
        rsl.push(ary[i]);
    }
    return rsl;
}
console.log(pickA([]));
console.log(pickA(['A', 'A']));
console.log(pickA(['A', 'A', 3, 'A']));
