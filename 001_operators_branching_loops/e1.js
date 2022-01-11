// 1. Write a program to add 5 numbers. The value of numbers are num1=5, num2=13, num3=7, num4=21 and num5=48.

// version 1 - without using any function

const num1 = 5;
const num2 = 13;
const num3 = 7;
const num4 = 21;
const num5 = 48;
let finalsum1 = num1 + num2 + num3 + num4 + num5;
console.log(
  'Total Sum = ' + finalsum1 + '. (version 1 - without using any function)'
);

// version 2 - using Named Function

const arrayOfNumber = [5, 13, 7, 21, 48];

let finalSum2 = 0;

function add2(n) {
  for (let i = 0; i < arrayOfNumber.length; i++) {
    finalSum2 += n[i];
  }
}
add2(arrayOfNumber);

console.log(`Total Sum = ${finalSum2}. (version 2 - using Named Function)`);

// version 3 - using Arrow Function

let finalSum3 = 0;

let add3 = (n) => {
  for (let i = 0; i < arrayOfNumber.length; i++) finalSum3 += n[i];
};

add3(arrayOfNumber);

console.log(`Total Sum = ${finalSum3}. (version 3 - using Arrow Function)`);

// version 4 - using higher order function

let finalSum4 = 0;

let add4 = (n, f) => {
  for (i = 0; i < arrayOfNumber.length; i++) f(n);
};

let run = (n) => (finalSum4 += n[i]);

add4(arrayOfNumber, run);

console.log(
  `Total Sum = ${finalSum4}. (version 4 - using Higher Order Function)`
);

// version 5 - using ForEach() method

let finalSum5 = 0;

arrayOfNumber.forEach((element) => (finalSum5 += element));

console.log(`Total Sum = ${finalSum5}. (version 5 - using forEach() method)`);

// version 6

finalSum6 = 0;
for (const value of arrayOfNumber) {
  finalSum6 += value;
}
console.log(
  `Total Sum = ${finalSum6}. (version 6 - using for...of iterating over an Array)`
);
