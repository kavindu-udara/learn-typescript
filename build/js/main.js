"use strict";
// Type Aliases
// interface PostId = stringOrNumber
// ! Literal types
let myName;
// myName = 'Kavindu'
let userName;
userName = 'Geemi';
// userName = 'test';
// DRY - Don't Repeat Yourself
// ! functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg('Hellow');
logMsg(add(2, 4));
// logMsg(add('a', 5));
let subtract = function (c, d) {
    return c - d;
};
// interface mathFunction { (a: number, b: number): number };
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 2));
// ! Optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
// ! default param value
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
// logMsg(addAll(2, 3, 7));
// logMsg(addAll(2, 3));
// logMsg(sumAll(2, 3));
// logMsg(sumAll(undefined, 3));
// ! Rest Parameters
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1, 2));
// ! never type
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
// custom type guard
const isNumber = (value) => {
    return typeof value === 'number'
        ? true : false;
};
// use of the never type
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (isNumber(value))
        return 'number';
    return createError('This should never happen!');
};
