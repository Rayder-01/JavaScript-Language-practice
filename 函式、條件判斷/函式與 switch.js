"use strict";

let grade = function(score) {
    switch (Math.floor(score / 10)) {
        case 9:
            console.log('Good');
            break;
        case 8:
            console.log('Good');
            break;
        case 7:
            console.log('Fair');
            break;
        case 6:
            console.log('Pass');
            break;
        default:
            console.log('Fail');
            break;
    }
}

grade(93);
grade(87);
grade(76);
grade(60);
grade(54);