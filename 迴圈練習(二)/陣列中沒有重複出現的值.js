"use strict";

let count = function(n ,ary) {
    let count = 0;
    for (let i = 0; i <ary.length; i++) {
        if (ary[i] === n) {
            count++;
        }
    }
    return count;
}

function unique(ary){
    let newAry = [];
    for (let i=0; i < ary.length; i++){
        if (count(ary[i],ary) === 1){
            newAry.push(ary[i]);
        }
    }
    return newAry;
}

console.log(unique([1, 2, 3, 2, 1]));
console.log(unique([1, 2, 3, 3, 1]));
console.log(unique([2, 3, 2, 1]));