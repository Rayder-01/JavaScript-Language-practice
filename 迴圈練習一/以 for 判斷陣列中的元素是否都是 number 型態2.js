"use strict";

let anyNumber = function(ary) {
    let i = 0;  // 設定迴圈控制變數 i 的初值
    while (i < ary.length) { 
        // 當 i 小於 ary.length 時才繼續執行迴圈內的程式碼
        if (ary[i] === true) {
            return ary[i];
        }
        i++;  // 將 i 的值加 1
    }
    return false;
}

console.log(anyNumber([]));
console.log(anyNumber([true, 'A', 4]));
console.log(anyNumber([false, false, 'A', false]));