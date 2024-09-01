"use strict";
// ! convert to more or less specific
let a = 'hello';
let b = a; // less specific
let c = a; // more specific
let d = 'word';
let e = 'word';
const addOrConcat = (a, b, c) => {
    if (c === 'add') {
        return a + b;
    }
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
// Be careful! string is returned
let nextVal = addOrConcat(2, 2, 'concat');
10;
10;
// The DOM
const img = document.querySelector('img');
const myImg = document.getElementById('#img'); // ! - not null
const nextImg = document.getElementById('#img'); // this will not work for tsx files
img.src;
myImg.src;
