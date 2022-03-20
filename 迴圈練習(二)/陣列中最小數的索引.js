"use strict";

function minIndex(ary) {
    //記住最小值是什麼數
    let min = ary[0];
    let now = 0
    //記住目前最小值的INDEX
    let num=0;
    //跑迴圈，過程當中有新的最小值，要更新舊的最小值
    for (let i = 0;i<ary.length;i++) {
        now = ary[i]
        //比目前最小值還小就要更新
        if (min>ary[i]) {
            //更新最小值與INDEX
            min = ary[i];
            num = i;
        }
    }

    return num;      
}

console.log(minIndex([0]));
console.log(minIndex([1, 2, 3]));
console.log(minIndex([4, 1, 2, 3]));
console.log(minIndex([4, 1, 2, 0]));
