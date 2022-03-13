// 如果 score >= 90, 則等級是 a;
// 要不然如果 score >= 80, 則等級是 b;
// 要不然如果 score >= 70, 則等級是 c;
// 要不然如果 score >= 60, 則等級是 d;
// 要不然則等級是 f。

"use strict";

let letterGrade = function(a) {
    if (a>=90){
        return 'A';
    }
    else if(a>=80){
        return 'B';
    }
    else if(a>=70){
        return 'C';
    }
    else if(a>=60){
        return 'D';
    }
    else
        return 'F';
}

console.log(letterGrade(90));
console.log(letterGrade(86));
console.log(letterGrade(77));
console.log(letterGrade(69));
console.log(letterGrade(54));
