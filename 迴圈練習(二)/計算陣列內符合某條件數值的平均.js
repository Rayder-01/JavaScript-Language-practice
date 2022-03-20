"use strict";

var averageOfPass = function(ary) {
    let count = 0;
    let num = 0;
    for (let i = 0; i < ary.length; i ++) {
      
        if (ary[i]>=60)   {
            num += ary[i];
            count ++;           
        }

    }
    return (num/count);

}

console.log(averageOfPass([]));
console.log(averageOfPass([81, 72, 63]));
console.log(averageOfPass([80, 99, 12.3, 54]));
