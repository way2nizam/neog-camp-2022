// section 3: default parameters

// example 11

const defaultExample = (a, b) => a + b;
console.log(defaultExample(2));

// output: NaN, beacuse here we have pass only single value and here b is undefined by deafult and there sum becomes NaN.

const defaultExample = (a, b) => {
  if (b === undefined) {
    b = 5;
  }
  return a + b;
};

console.log(defaultExample(2));

// output 7, because here undefined value of 5 is check with === and we get b=5 and result is 7.

// Instead

const defaultExample2 = (a, b = 5) => a + b;

console.log(defaultExample(2, 4)); // output: 6
console.log(defaultExample2(3)); // output: 8

// Will we get an error?

const defaultExample3 = (a, b = 5, c = 22) => a + b + c;

console.log(defaultExample3(1, 2, 3));

// console.log(defaultExample3(1, , 3)); // syntax error we can use in between like this. for default value works only for end argument.
