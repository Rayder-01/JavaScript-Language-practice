"use strict";

function addNumbers(num1, num2) {  
    if ((num1 === 0) && (num2 === 0))
        return 0;  // 如果這一行被執行，function 就 return 了，其餘的程式碼不會被執行
    return (num1 + num2) + 10 ; 
}

let sum = addNumbers(5, 2);
console.log(sum ===17);
console.log(addNumbers(0, 0) === 0);
console.log(addNumbers(3, 7) === 20);

function noReturn() {
    console.log("No return returns undefined.")
}

console.log(noReturn());
// 以上程式碼在執行 noReturn 後會轉換成
// console.log(undefined);