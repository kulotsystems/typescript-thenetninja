"use strict";
let greet;
// greet = 'hello';
greet = () => {
    console.log('hello, again');
};
// const add = (a: number, b: number, c?: number | string) => {
const add = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
add(5, 10, '20');
const minus = (a, b) => {
    return a - b;
};
let result = minus(10, 7);
// result = 'something else';
