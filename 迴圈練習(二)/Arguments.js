"use strict";

function demo1() {
    console.log(arguments[0], arguments[1], arguments[2]);
}

demo1('a', 'b', 'c');

function demo2(x, y) {
    console.log(x, y);  
    console.log(arguments[0], arguments[1]);
    console.log(arguments[2], arguments[3], arguments[4]);
}

demo2(1, 2, 'a', 'b', 'c');

