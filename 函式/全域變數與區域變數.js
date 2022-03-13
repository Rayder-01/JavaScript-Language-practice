"use strict";

// num3 is a global variable
let num3 = 4;  

function addNumbers(num1, num2) { 
    // num1, num2 are local variables
    
    let result = num1 + num2 + num3;  
    // result ia a local variable
    
    return result;                   
}

console.log(addNumbers(5, 2));
console.log((addNumbers(5, 5) === 14));
