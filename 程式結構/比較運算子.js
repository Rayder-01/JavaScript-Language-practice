// 嚴謹的比較：
console.log(3 === '3');   // false
console.log(0 === '');    // false
console.log(1 !== '1');   // true
console.log(0 !== '');    // true

// 寬鬆的比較：
console.log(3 == '3');    // true
console.log(0 == '');     // true
console.log(1 != '1');    // false
console.log(0 != '');     // false