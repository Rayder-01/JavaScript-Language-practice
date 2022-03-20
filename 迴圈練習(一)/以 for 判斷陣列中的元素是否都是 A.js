"use strict";

let anyA = function(ary) {
    for (let i = 0;  i < ary.length; i++) { 
        // 當 i 小於 ary.length 時才繼續執行迴圈內的程式碼
        if (ary[i] === 'A') {
            return true;
        }
        i++;  // 將 i 的值加 1
    }
    return false;
}

console.log(anyA([]));
console.log(anyA([false, false, false]));
console.log(anyA([false, false, 'A', false]));
