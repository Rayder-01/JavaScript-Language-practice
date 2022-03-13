let num2 = 10, num3 = 4, num4 = 6;  // global variable

function addNumbers(num1, num2) { // local variable
    let num3 = 5; // local variable
    let result = num1 + num2 + num3 + num4;  // num4 reference a global variable
    return result; 
}

console.log((addNumbers(5, 7) === 23));

function addNum2(num1, num2) { // local variable
    let num3 = 3; // local variable
    let result = num1 + num2 + num3;  // no global variable is used here
    return result; 
}

console.log((addNum2(5, 7) === 15));
