"use strict";

var a;
console.log(a);

a = null;
console.log(a);

if (a) // a evaluate to false
    console.log(1);
else
    console.log(2);
    
if (undefined) // undefined evaluate to false
    console.log(1);
else
    console.log(3);
    
if ("")  // "" evaluate to false
    console.log(1);
else
    console.log(4);
    
if (0)  // 0 evaluate to false
    console.log(1);
else
    console.log(5);

let pass = false;
if (pass) {   // 不用寫成 pass === false
    console.log("Pass!");
} else {
    console.log('Fail!');
}

let memberType = 4;
if (memberType) {   // 不用寫成 memberType === 4
    console.log(`你可以享有${memberType}折`);
} else {
    console.log("你不可以享有折扣");
}