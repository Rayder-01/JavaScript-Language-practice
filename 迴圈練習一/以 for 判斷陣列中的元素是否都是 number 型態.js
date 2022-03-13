"use strict";

let allNumber = function(ary) {
    // 可以使用 (typeof ary[i] !== 'number') 判斷某個 value 的型態
    for (let i = 0;  i < ary.length; i++) { 
        // 當 i 小於 ary.length 時才繼續執行迴圈內的程式碼
        if (typeof ary[i] !== 'number') {
            return false;
        }

        // console.log(typeof ary[i]);
    }
    return true;
}

console.log(allNumber([]));
console.log(allNumber([1, 2, 3]));
console.log(allNumber([3, 4.5, 9, 'A']));
