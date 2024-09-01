"use strict";
let stringArr = ['one', 'hey', 'dave'];
let guitars = ['Start', 'Les Paul', 5150];
let mixedData = ['EVH', 1984, true];
stringArr[0] = '42';
stringArr.push('hey');
guitars[0] = 10;
guitars.unshift('true');
// guitars = stringArr;
// guitars = mixedData;
let test = [];
let bands = [];
bands.push('Van Halen');
// tuples
let myTuple = ['Dave', 42, true];
let mixed = ['John', 1, false];
// myTuple[0] = 42;
// ! Objects
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: 'Kavindu',
    prop2: true,
};
exampleObj.prop1 = 'false';
exampleObj.prop2 = false;
let evh = {
    name: 'Kavindu',
    active: false,
    albums: [1984, 5150, 'OUB12']
};
let JP = {
    name: 'Kavindu',
    albums: ['I', "II", 'IV']
};
evh = JP;
// make property optional - prop?
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}!`;
    }
    return 'Hellow';
    // return `Hello ${guitarist.name?.toUpperCase()}!`;
};
// console.log(greetGuitarist(JP));
// ! Enums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
