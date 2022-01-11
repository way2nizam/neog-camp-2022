//1. Fizzbuzz - Write a program to return an array from 1 to 100. But for every multiple of 3, replace the number with "Fizz", for every multiple of 5, replace the number with "Buzz" and for every multiples of 3 & 5, replace with "FizzBuzz".

// Your output should look something like this 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, 17 .....

// Version 1 - using for loop and Array push() method with Named Function

let arrayOfNumber = [];

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      arrayOfNumber.push('FizzBuzz');
    } else if (i % 3 == 0) {
      arrayOfNumber.push('Fizz');
    } else if (i % 5 == 0) {
      arrayOfNumber.push('Buzz');
    } else arrayOfNumber.push(i);
  }
}

fizzBuzz(100); // here 100 in the input number

console.log(arrayOfNumber);
console.log(
  'Version 1 - using for loop and Array push() method with Named Function'
);

// Version 2 - using for loop and Array push() method with Arrow Function

let arrayOfNumber2 = [];

let fizzBuzz2 = (n) => {
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      arrayOfNumber2.push('FizzBuzz');
    } else if (i % 3 == 0) {
      arrayOfNumber2.push('Fizz');
    } else if (i % 5 == 0) {
      arrayOfNumber2.push('Buzz');
    } else arrayOfNumber2.push(i);
  }
};

fizzBuzz2(100); // here 100 in the input number

console.log(arrayOfNumber2);
console.log(
  'Version 2 - using for loop and Array push() method with Arrow Function'
);
