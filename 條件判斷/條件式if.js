"use strict";

let a = 3;

// 如果 a 等於 3 則執行 console.log(1)
if (a === 3) 
    console.log(1);   // 只有一個句子時, 可以用也不不用 { }

// 如果 a 小於 4 則執行 console.log(2) 及 console.log(3)
if (a < 4) {
    // 在同一條件下要執行多個句子時，一定要用 { } 刮起來
    console.log(2);   
    console.log(3);
}