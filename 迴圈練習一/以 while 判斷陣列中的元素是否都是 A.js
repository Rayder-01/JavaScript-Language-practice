"use strict";

let allA = function(ary) {
    // 比較ary[i]是否是'A'可以用： ary[i] !== 'A' 或 ary[i] === 'A'
    let i = 0;  // 設定迴圈控制變數 i 的初值
    while (i <= ary.length) { 
        // 當 i 小於 ary.length 時才繼續執行迴圈內的程式碼
        let Anum = 0;
        if (ary[i] === 'A'){

            Anum += 1 ;
            console.log('1:'+Anum);
        }
        if (ary[i] !== 'A' && (Anum === i)) {
            return true;
        }

        // console.log('(I)='+i+'(Anum)='+Anum);
        else
            return false;    
        i++;
    }
    // console.log('1'+i);
    

}

console.log(allA([]));
console.log(allA(['A', 'A', 'A']));
console.log(allA(['A', 'A', true, false]));