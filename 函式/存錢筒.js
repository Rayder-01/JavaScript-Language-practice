// 有一個小孩從小就開始 把自己的零用錢，投進自己的存錢筒裡。 請撰寫一程式，計算出存錢筒中金錢的總額。 
// (註：硬幣種類有1元、5元、10元、50元)

"use strict";

function convert(a,b,c,d){
    let total_dollars
    total_dollars = a*1+b*5+c*10+d*50

	console.log('您的錢總共有 ' + total_dollars + ' 元');
}

convert(17, 7, 54, 21);
convert(7, 1, 20, 20);
