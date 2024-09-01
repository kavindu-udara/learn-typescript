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
let bands: string[] = [];
bands.push('Van Halen');

// tuples
let myTuple : [String, number, boolean] = ['Dave', 42, true];
let mixed = ['John', 1, false];
// myTuple[0] = 42;

// ! Objects
let myObj: object
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};

const exampleObj = {
    prop1: 'Kavindu',
    prop2: true,
}

exampleObj.prop1 = 'false';
exampleObj.prop2 = false;

interface Guitarist  {
    name: string,
    active?: boolean,
    albums: (string | number)[]
}

let evh: Guitarist = {
    name: 'Kavindu',
    active: false,
    albums: [1984, 5150, 'OUB12']
}

let JP: Guitarist = {
    name: 'Kavindu',
    albums: ['I', "II", 'IV']
}

evh = JP;

// make property optional - prop?

const greetGuitarist = (guitarist: Guitarist) => {
    if(guitarist.name){
        return `Hello ${guitarist.name.toUpperCase()}!`;
    }
    return 'Hellow';
    // return `Hello ${guitarist.name?.toUpperCase()}!`;
}

// console.log(greetGuitarist(JP));

// ! Enums
enum Grade{
    U = 1,
    D, 
    C,
    B,
    A
}

console.log(Grade.U);