// 若傳入 goodGrade 的國、英、數三科都 60 分及以上，
// 而且有任何一科 90 分或以上，則 return true，要不然
// 則 return false。

"use strict";

let goodGrade = function(a,b,c){
    if ((a>60 && b>60 && c>60) && (a>=90 || b>=90 || c>=90) ){
    
        return true;
    }
    else
        return false;
}

console.log(goodGrade(90, 80, 70));
console.log(goodGrade(90, 55, 70));
console.log(goodGrade(80, 70, 85));
