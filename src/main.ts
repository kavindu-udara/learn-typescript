
// Type Aliases

type stringOrNumber = string | number

type stringOrNumberArray = (string | number)[];

interface Guitarist {
    name: string,
    active?: boolean,
    albums: (string | number)[]
}

type UserId = stringOrNumber

// interface PostId = stringOrNumber

// ! Literal types
let myName: 'Kavindu'
// myName = 'Kavindu'

let userName: 'Kavindu' | 'Udara' | 'Geemi';
userName = 'Geemi';
// userName = 'test';

// DRY - Don't Repeat Yourself

// ! functions
const add = (a: number, b: number): number => {
    return a + b;
}

const logMsg = (message: any): void => {
    console.log(message);
}

logMsg('Hellow');
logMsg(add(2, 4));
// logMsg(add('a', 5));

let subtract = function (c: number, d: number): number {
    return c - d;
}

type mathFunction = (a: number, b: number) => number;
// interface mathFunction { (a: number, b: number): number };

let multiply: mathFunction = function (c, d) {
    return c * d;
}

logMsg(multiply(2, 2));

// ! Optional parameters
const addAll = (a: number, b: number, c?: number): number => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
}

// ! default param value
const sumAll = (a: number = 10, b:number, c:number=2) : number => {
    return a+b+c;
}

// logMsg(addAll(2, 3, 7));
// logMsg(addAll(2, 3));
// logMsg(sumAll(2, 3));
// logMsg(sumAll(undefined, 3));

// ! Rest Parameters
const total = (a:number,...nums: number[]): number => {
    return a+ nums.reduce((prev, curr) => prev + curr);
}
logMsg(total(1,2));

// ! never type
const createError = (errMsg:string) : never => {
    throw new Error(errMsg);
}

const infinite = () => {
    let i : number = 1;
    while(true){
        i++;
        if(i > 100) break;
    }
}

// custom type guard
const isNumber = (value: any): boolean => {
    return typeof value === 'number' 
    ? true : false
}

// use of the never type
const numberOrString = (value:number | string): string => {
    if(typeof value === 'string') return 'string';
    if(isNumber(value)) return 'number';
    return createError('This should never happen!');
}