// 單、雙引號都可以用來寫 string
console.log('Hello ' + "World!"); // concatenate two strings
console.log("It's ok");
console.log('Her name is "Mary"');
console.log('-------');

// escape character
console.log('It\'s ok!');
console.log("Her name is \"Mary\"");
console.log('+++++++');

// 為了方便也容許自動型態轉換(type coercion) 
console.log(1 + 2 + "3");
console.log('1 + 2 + '+ 3);
console.log('=======');

// string 也可以互相比較
console.log("a" < "b");
// string 可以使用 length 傳回其長度
console.log("abcd".length === 4);
// 也可以抓到某個位置的字元
console.log("abcd"[0] === 'a');
console.log("abcd"[3] === "d");
