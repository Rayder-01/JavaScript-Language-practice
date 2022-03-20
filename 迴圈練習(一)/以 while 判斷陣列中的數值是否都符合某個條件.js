"use strict";

let allPass = function(ary) {
    let i = 0;  // 設定迴圈控制變數 i 的初值
    while (i < ary.length) { 
        // 當 i 小於 ary.length 時才繼續執行迴圈內的程式碼
        if (ary[i]<=60){
            return false;
        }
        i++;  // 將 i 的值加 1
    }
    return true;
}


console.log(allPass([]));
console.log(allPass([98, 79, 80]));
console.log(allPass([70, 84, 65, 50]));