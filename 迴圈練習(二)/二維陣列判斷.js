// 請寫一個函式，這個函式會傳回兩個陣列的差，也就是將只存在於陣列1或陣列2
// ，但沒有都存在於兩個陣列中的值印出來。


let newArr = [];

function exist(x, ary) {
  let i;
  for (i = 0; i < ary.length; i++) { 
      if (x === ary[i]) {
          return true;
      }
  }
  return false;
}

function onlyInFirst(first, second) {
  // Looping through an array to find elements that don't exist in another array
  for (let i = 0; i < first.length; i++) {
    if (!exist(first[i], second)) {
      // Pushing the elements unique to first to newArr
      newArr.push(first[i]);
    }
  }
}
  
function diffArray(arr1, arr2) {
  newArr = [];
  onlyInFirst(arr1, arr2);
  onlyInFirst(arr2, arr1);

  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 4, 5]));
console.log(diffArray([1, 2], [1, 2, 3, 4, 5]));
console.log(diffArray([1, 2, 3, 5], [3, 4, 5]));