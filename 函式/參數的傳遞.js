"use strict";

function hello(name) { // 這是定義 hello function，name 可以儲存呼叫時傳入的值
    console.log("Hello! " + name);
}
hello("張三"); // 這是用 （"張三"） 呼叫 hello function，這時 name 對應 "張三"
hello("李四");
hello("王五");
