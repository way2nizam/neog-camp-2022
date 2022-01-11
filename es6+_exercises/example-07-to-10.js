// section 2: arrow functions
// Topic: Short arrow function/Lamda function/Fat arrow function

//example 07 - Can you convert below arrow function into function declaration (normal function) format?

// with no parameter
const getNum = () => 2; // output: 2

// Ans - Normal Formal
function getNum() {
  return 2;
}

// ES5 function
function getNum() {
  return 2;
}

// with one parameter
// Function
const isOne = (num) => num == 1; // HW: === vs == in JavaScript, write a blog.

// Ans - Normal Formal
function isOne(num) {
  return num == 1;
}

// Calling the function
console.log(isOne(12));

// Vinay

function isOne(num) {
  return num === 1 ? true : false;
}

// Hiren
function isOne(num) {
  console.log(num);
}

// example - 08

// Topic: Arrow function with more than 1 parameter

const isBigger = (a, b) => a > b;
console.log('Is 2 bigger than 3?', isBigger(2, 3));

// output: Is 2 bigger than 3? false, beacuse on calling isBigger(2,3) function with arguments, a becomes 2 and b becomes 3. and 2 is less than 3.

// How would you write this with the least amount of characters

function Add22andReturn(num) {
  let sum = 0;
  sum = num + 22;
  return sum;
}

// ans - with least number of charaters

// Version 1
const Add22andReturn = (num) => {
  let sum = 0;
  sum = num + 22;
  return sum;
};

// Version 2
const Add22andReturn = (num) => {
  return num + 22;
};

// Version 3
const Add22andReturn = (num) => num + 22;

[
  // Doing it on an array
  (1, 2, 3, 4, 5),
].map((num) => num + 22);

// example 09

// Topic: Arrow function when there are more than 1 statement

const printSomethingAndReturn = (a) => {
  console.log('squaring a.....');
  return a * a;
};
console.log(printSomethingAndReturn(2));

// example 10

const giveMeAnObject = (a) => ({ value: a });

console.log(giveMeAnObject(5));
// here we are returning the object placed in parenthesis (Bracket). here parenthesis work as to combine complete object in a single line that's why is is a Short arrow funtion while returning an object / object literal syntax.
