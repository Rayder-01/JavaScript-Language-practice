function sort3(x, y, z) {
    if (x>y && x>z) {
        console.log(x,y,z);
    } else if (y>x && y >z) {
        console.log(y,z,x);
    } else if (z>x && z>y) {
        console.log(z,y,x);
    }        
}

sort3(1, 2, 3);
sort3(-4, 1, 0);
sort3(4, 9, 7);