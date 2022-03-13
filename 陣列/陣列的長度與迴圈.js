let food = ['meat', 'fruit', 'cake'];
console.log(food.length === 3);

for (let i = 0; i < food.length; i++) {
    console.log(food[i]);
}

// 試試另一種寫法：
for (let i = 0; i <= food.length - 1; i++) {
    console.log(food[i]);
}
