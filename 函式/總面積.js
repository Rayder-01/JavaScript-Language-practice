// 通常為了要解決一個大又複雜的問題， 我們都會將此問題拆成許多子問題， 然後再分別求出子問題的答案。 在解決某一層次的問題時， 又會引出下一層次的問題， 此過程就稱為top-down design。

// 現在我們要計算下面圖形的面積， 首先我們必須先計算上層的圓面積、 接著計算中間三角形的面積， 最後計算最下層方形的面積， 接著再加總起來就是我們所要得到的答案。


"use strict";

function total_area(r, l, w) {
    return circle(r) + triangle(l, w) + rectangle(l, w);
}

function circle(r) {
    return r * r * 3.14159;
}

function triangle(l, w) {
    let a = w*l/2
    return a
}
function rectangle(l, w) {
    let a = w* l
    return a
}


console.log(total_area(5, 10, 5));
console.log(total_area(3, 12, 4));