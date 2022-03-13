"use strict";

let colors = ['blue', 'purple'];
colors.unshift("white");
console.log(colors);

console.log();

let aColor = colors.shift();
console.log(colors);
console.log(aColor);
console.log(aColor === 'white');