"use strict";

let anyCar = function(ary) {
    let i = 0;
    while (i < ary.length) { 
        // 當 i 小於 ary.length 時才繼續執行迴圈內的程式碼
        if (ary[i] === 'car'){
            return true;
        }
        i++;  // 將 i 的值加 1
    }
    return false;
}

let anyOneHasCar = function(ary) {
    let i = 0;
    while (i < ary.length) { 
        // 當 i 小於 ary.length 時才繼續執行迴圈內的程式碼
        if (anyCar(ary[i])){
            return true;
        }
        i++;  // 將 i 的值加 1
    }
    return false;
}

console.log(anyOneHasCar([]));
console.log(anyOneHasCar([["tv", "chair", "audio"], ["video", "air cond"]]));
console.log(anyOneHasCar([["tv", "chair", "audio"], ["radio", "car"], ["pc", "phone", "table", "speaker"]]));
