"use strict";

let anyFail = function(ary) {
    let i = 0;
    while (i < ary.length) { 
        // 當 i 小於 ary.length 時才繼續執行迴圈內的程式碼
        if (ary[i]<60){
            return true;
        }
        i++;  // 將 i 的值加 1
    }
    return false;

}

console.log(anyFail([]));
console.log(anyFail([90, 87, 60]));
console.log(anyFail([78, 90, 79, 59]));
