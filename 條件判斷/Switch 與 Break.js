"use strict";  

// Math.floor 函式會捨棄小數點以下的數字，所以以下程式碼會印出 9
console.log(Math.floor(92 / 10));   

let score = 92;
switch (Math.floor(score / 10)) {
    case 9:
        console.log('A');
        break;
    case 8:
        console.log('B');
        break;
    case 7:
        console.log('C');
        break;
    case 6:
        console.log('D');
        break;
    default:
        console.log('F');
        break;
}

score = 60;
switch (Math.floor(score / 10)) {
    case 9:
    case 8:
    case 7:
    case 6:
        // 9, 8, 7, 6 都符合印出 Pass 的條件
        console.log('Pass');
        break;
    default:
        console.log('Fail');
        break;
}

score = 50;
switch (Math.floor(score / 10)) {
    case 9:
    case 8:
    case 7:
    case 6:
        console.log('Pass');
        break;
        // 9, 8, 7, 6 都不符合，則執行 default 後的程式碼
    default:
        console.log('Fail');
        break;
}

const expr = '木瓜';
switch (expr) {
  case '橘子':
    console.log('橘子好吃');
    break;
  case '芒果':
  case '木瓜':
    console.log('芒果或木瓜也不錯');
    break;
  default:
    console.log(`抱歉沒賣： ${expr}.`);
}