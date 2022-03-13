let i = 0;

console.log(i++ === 0);  // i++ 會先回傳 i 的值；與 0 比較後，再加 1
console.log(i);
i = 0;
console.log(++i === 1);  // ++i 會將 i 加 1 後，再比較
console.log(i);
i = 0;
console.log(i-- === 0);   // i-- 會先回傳 i 的值；與 0 比較後，再減 1
console.log(i);
i = 0;
console.log(--i === -1);  // --i 會將 i 減 1 後，再比較
console.log(i);
