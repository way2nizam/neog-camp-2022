// Topic: TDZ. Temporal Dead Zone What will be the output of this? And why?

//example-02

function something() {
  console.log(a);
  let a = 2;
}

something();

// output: ReferenceError, beacuse a is in temporal dead zone (TDZ) from the start of the block until the initialization has completed.
// link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let

// example-03

//Topic: Hoisting.

function something() {
  // a = undefined
  console.log(a);
  var a = 2;
}

something();

// output: undefined (No Error). Beacuse here comes the concept of hoisting. declared with 'var' are processed/available with 'undefined' before any code is executed. This is called hoisting.

// example - 04

// Topic: const VS var

const tanay = 2;
tanay = 3;

// output: we can not change the variable declared with 'const' keyword.
// 1. temporal dead zone also apply on const like let.
// 2. we must specify its value in the same statement. we can not use like 'let'. for reference see example 1 last code script.
// 3. window object not available for const also like let and unlike var.

// example - 05

const obj = { a: 1, b: 2 };
obj.a = 22;
console.log(obj);

// output: { a: 22, b: 2 } beacuse in case of object and array its properties or items can be updated or removed.

const obj = { a: 1, b: 2 };
const obj2 = { a: 3, b: 4 };
obj = obj2; // TypeError
console.log(obj);

// we are trying to assign the const object but we with const declaration assignment is not allowed. Means we can not change the value of a contant using reassignment (Assignment operator).

//example - 06
//Topic: const with arrays

const array = [1, 2, 3, 4];
array.push(55);
console.log(array);

// output: [ 1, 2, 3, 4, 55 ] beacuse in case of object and array its properties or items can be updated or removed.

const array = [1, 2, 3, 4];
array = array.push(55);
console.log(array); // Type Error

//output: we can not change the value of a contant using reassignment (Assignment operator).
