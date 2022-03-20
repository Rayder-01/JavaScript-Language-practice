"use strict";

function evenOdd(n) {
    let rsl = [];
    let num = 0;
    while (num<=n){
        rsl.push(num);
        num ++;
    }

    for (let i=0;i<num;i++) {
        if (rsl[i]%2 ===0){
            console.log(rsl[i]+" is even");            
            
        }
        else{
            console.log(rsl[i]+" is odd");              
        }
    }
}

evenOdd(4);
evenOdd(9);
