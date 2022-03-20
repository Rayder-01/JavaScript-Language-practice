let ary = [1, 2, 3];

function add3(ary) {
    let newArray = [];  // 新陣列的初值
    for (let i = 0; i < ary.length; i = i + 1) {
        newArray.push(ary[i]+3);
    }
    return newArray;
}

let newAry = add3(ary);
console.log(newAry);