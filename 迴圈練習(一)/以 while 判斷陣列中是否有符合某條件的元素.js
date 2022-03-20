"use strict";

let anyT = function(ary) {
    let i = 0;  // 設定迴圈控制變數 i 的初值
    while (i < ary.length) { 
        // 當 i 小於 ary.length 時才繼續執行迴圈內的程式碼
        if (ary[i] === true) {
            return true;
        }
        i++;  // 將 i 的值加 1
        // console.log(i);
    }
    return false;
}

console.log(anyT([]));
console.log(anyT([false, false, false]));
console.log(anyT([false, false, true, false]));