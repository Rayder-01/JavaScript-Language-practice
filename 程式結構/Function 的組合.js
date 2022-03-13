function areaOfRectangle(l, w) {
    return l * w;
}

function areaOfCircle(r) {
    return 3.14159 * r * r;
}

function totalArea() {
    return areaOfRectangle(2, 3) + areaOfCircle(3);
}

console.log(totalArea());
