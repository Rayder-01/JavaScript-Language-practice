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

let anyOneFail = function(ary) {
    // 想想看 anyOneFail 是否可以呼叫 anyFail(ary[i])？
    // 這時的 ary[i] 是什麼？
    let i = 0;
    while (i < ary.length) { 
        // 當 i 小於 ary.length 時才繼續執行迴圈內的程式碼
        if (anyFail(ary[i])){
            return true;
        }
        i++;  // 將 i 的值加 1
    }
    return false;
}

console.log(anyOneFail([]));
console.log(anyOneFail([[90, 87, 60], [89, 77]]));
console.log(anyOneFail([[90, 87, 60], [89, 77], [78, 90, 79, 59]]));