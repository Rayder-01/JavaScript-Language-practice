"use strict";

console.log(addNum(1, 2));

function addNum(num1, num2) {
    return num1 + num2;
}

//console.log(addNum2(1, 2));  // 請將此行註解，以完成測試

let addNum2 = function(num1, num2) {  
    return num1 + num2;
}

console.log(addNum2(1, 2));