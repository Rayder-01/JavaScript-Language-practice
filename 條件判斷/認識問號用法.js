//認識 _ ? _ : _ 的語法
//a ? b : c 的意義是如果 a 的值是 true，則傳回 b 的值；要不然則傳回 c 的值
"use strict";

let n = 3;
console.log((n >= 0) ? n : -n);

n = -4;
console.log(((n >= 0) ? n : -n) + 5);