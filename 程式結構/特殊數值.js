// 因為電腦有限的記憶體，無法精準的儲存某些小數
// 所以以下的程式碼會印出 true
console.log((0.1 + 0.2) === 0.30000000000000004); 

// 以下是一些特殊的數值
console.log((1 / 0) === Infinity);
console.log((-1 / 0) === -Infinity);
console.log(0 / 0); // NaN, Not a Number