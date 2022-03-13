let car = ['Colf', 'Altis', 'Camary', 'Tiida'];
//console.log(car);
// 在 car 的 index 1 的位置開始刪除兩個元素，
// 並將刪除的元素存入 deletedCar 中
let deletedCar = car.splice(1, 2);
console.log(car);
console.log(deletedCar);

// 在 car 的 index 1 的位置加入 'vios'
car.splice(1, 0, 'vios');  // 0 代表不刪除元素
console.log(car);