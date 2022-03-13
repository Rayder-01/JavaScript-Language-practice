"use strict";

let chinese = 90, english = 78, math = 65;
if ((chinese >= 60) && (english >= 60) && (math >= 60))
    console.log('All pass!');
else 
    console.log('至少一科不及格');

// 請填入一個數字，讓以下的程式碼可以輸出'至少一科不及格'
english = 59;  
if ((chinese >= 60) && (english >= 60) && (math >= 60))  
    console.log('All pass!');
else 
    console.log('至少一科不及格');