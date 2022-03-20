"use strict";  


let num = [];
let productSum = function(ary) {
    let rsl = 0;

    for (let i = 0; i < ary.length; i++) {
            rsl += product( ary[i] );
    }
    return rsl;
}

let product = function(ary) {
    let rsl = 1;
    for (let i = 0; i < ary.length; i++) {
            rsl *= ary[i];
            num.push(ary[i]);
    }
    // console.log('pr: '+rsl);
    // console.log('num: '+num);
    return rsl;
}
console.log(productSum([]));
console.log(productSum([[1, 2, 3], [3, 9], [5]]));
console.log(productSum([[8, 9, 12.1, 5.3], [7.6, 3]]));
