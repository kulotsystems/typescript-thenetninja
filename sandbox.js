// explicit types
var character;
var age;
var isLoggedIn;
// age = 'luigi';
age = 30;
// isLoggedIn = 25;
isLoggedIn = true;
// arrays
var ninjas = []; // it's best to initialize with empty array
// ninjas = [10, 23];
ninjas = ['yoshi', 'mario'];
ninjas.push('shaun');
// union types
var mixed = [];
mixed.push('hello');
mixed.push(20);
mixed.push(false);
console.log(mixed);
var uid; // no need of parenthesis for normal variables
uid = '123';
uid = 123;
// uid = false;
// objects
var ninjaOne;
ninjaOne = {
    name: 'yoshi',
    age: 30
};
// ninjaOne = 'hello';
// declare types of properties
var ninjaTwo;
ninjaTwo = {
    name: 'mario',
    age: 20,
    beltColour: 'black'
};
