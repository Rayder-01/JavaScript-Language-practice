// 執行並對照這幾行程式碼的執行結果

console.log(3);
console.log(3 + 4);
console.log("Hi");
console.log(3 === 3);
console.log('-------');

let price = 10;
price = price + 2;
console.log(price);
console.log('-------');

let a = 3, b = 4;
if (a > b) {
    console.log('a is larger than b')
    console.log('a: ' + a + ' b: ' + b);
} else {
    console.log('b is larger than a')
    console.log('a: ' + a + ' b: ' + b);
}
console.log('-------');

for (let i = 0; i < 2; i++) {
    console.log('執行' + i + '次');
}
console.log('-------');

function areaOfRectangle(l, w) {
    return l * w;
}

console.log(areaOfRectangle(2, 3));