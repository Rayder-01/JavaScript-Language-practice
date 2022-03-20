"use script";

let anyFail = function() {
    let i = 0;
    while (i < arguments.length) { 
        if (arguments[i] < 60) {
            return true;
        }
        i++;
    }
    return false;
}

console.log(anyFail());
console.log('-------');
console.log(anyFail(59));
console.log('-------');
console.log(anyFail(70, 59));
console.log('-------');
console.log(anyFail(90, 87, 60));
console.log('-------');
let grades = [99, 83, 72, 93, 78]
console.log(anyFail.apply(null, grades));

