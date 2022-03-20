"use strict";

let countA = function(ary) {
    let count = 0;
    for (let i = 0; i < ary.length; i++) {
        if (ary[i] === 'A'){
            count +=1;
        }
    }
    return count;
}

console.log(countA([]));
console.log(countA(['A', 'A']));
console.log(countA(['A', 'A', 3, 'A']));