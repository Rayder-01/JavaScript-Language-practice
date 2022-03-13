let a = 3;

if (true) {
    let a = 5;
    
    if (true) {
        let a = 7;
        let b = 9;
        console.log(a === 7)
    }
    console.log(a === 5);
    // console.log('b 不在此區塊內' + b); // 請刪除註解執行看看
}

console.log(a === 3);