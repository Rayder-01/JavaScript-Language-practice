// 有一個小孩從小就開始 把自己的零用錢，投進自己的存錢筒裡。 請撰寫一程式，計算出存錢筒中金錢的總額。 
// (註：硬幣種類有1元、5元、10元、50元)

// 本題需使用Math.floor方法，例如：Math.floor(1.6)的回傳值是 1，也就是去掉小數的部分。


"use strict";

console.log(Math.floor(1.6) === 1);
console.log(Math.floor(32/10)===3);
 // console.log(Math.floor((1642/10)*1)*10);

function convert(one_d, five_d, ten_d, fifty_d) {
    let total = one_d*1 + five_d*5 + ten_d*10 + fifty_d*50
    // console.log(total)
    let total_t = Math.floor(total/1000); 
    let total_hun = Math.floor((total-1000)/100);
    let total_ten = Math.floor((total-Math.floor((total/100)*1)*100)/10);
    let total_one = Math.floor((total-Math.floor((total/10)*1)*10)/1);
	console.log('您的錢總共有 ' + total_t + ' 千 ' + total_hun + ' 百 ' + total_ten + ' 十 ' +  total_one + ' 元');
}

convert(17, 7, 54, 21);
convert(7, 1, 20, 20);
