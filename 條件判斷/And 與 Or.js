"use strict";

let chinese = 80, english = 70, math = 65;
if ((chinese >= 90) || (english >= 90) && (math >= 90))
    console.log('三科都在60分以上，而且有任何一科90分或以上');
else
    console.log('三科都在60分以上，而且有任何一科90分或以上的條件不成立');

chinese = 90;
if ((chinese >= 90) || (english >= 90) && (math >= 90))
    console.log('三科都在60分以上，而且有任何一科90分或以上');
else
    console.log('三科都在60分以上，而且有任何一科90分或以上的條件不成立');