"use strict";

let first = function(n, ary) {
    let rsl = [];

    for (let i = 0; i < n && ary.length; i = i + 1) {
        rsl.push(ary[i]);   
    }

    return rsl;

}

console.log(first(3, []));
console.log(first(2, ['B', 'A']));
console.log(first(3, ['A', 'A', 3, 'A']));
