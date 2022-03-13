// 宣告一個沒有儲存值的陣列
let ary1 = [];

// 宣告一個儲存三個數字的陣列
let ary2 = [1, 3, 5];

// 宣告一個儲存兩個字串的陣列
let ary3 = ['a', 'b']; 

// 新增儲存值 
ary1[0] = 'x';         
ary1[1] = 'y';         

// 陣列能夠使用 index 存取資料，例如：
console.log(ary1[0]);  // 傳回 x
console.log(ary1[1]);  // 傳回 y 

console.log(ary2[0]);  // 傳回 1 
console.log(ary2[1]);  // 傳回 3 
console.log(ary2[2]);  // 傳回 5 

ary3[0] = 'm';         // 取代原來的儲存值
ary3[1] = 'n';         // 取代原來的儲存值

console.log(ary3[0]);  // 傳回 m
console.log(ary3[1]);  // 傳回 n 

// 陣列內的儲存值可以是不同的型態
let ary4 = ['Toyota', 3, 'Nissan', 4];
console.log(ary4);