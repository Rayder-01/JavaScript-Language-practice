"use strict";

let anyT = function(ary) {
    for (let i = 0;  i < ary.length; i++) { 
        // 當 i 小於 ary.length 時才繼續執行迴圈內的程式碼
        if (ary[i] === true) {
            return true;
        }
        // console.log(i);
    }
    return false;
}

console.log(anyT([]));
console.log(anyT([false, false, false]));
console.log(anyT([false, false, true, false])); 