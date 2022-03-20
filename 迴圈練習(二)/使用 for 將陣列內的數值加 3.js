let ary = [1, 2, 3];

function add_3(ary) {
    for (let i = 0; i < ary.length; i++) {
        ary[i] += 3;
    }
    return ary;
}

console.log(add_3(ary));
console.log(add_3(ary));