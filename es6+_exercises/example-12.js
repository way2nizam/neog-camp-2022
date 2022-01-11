// section 4: rest and spread

// example 12

// Topic: rest

const restExample = (a, ...rest) => {
  console.log(a, rest); // output: 2, [3, 4, 5, 6, 7, 8, 9, 10]
};

restExample(2, 3, 4, 5, 6, 7, 8, 9, 10);

// output: 2, [3, 4, 5, 6, 7, 8, 9, 10] because here we have pass multiple arguments, so 'a' assign with 3 and rest of arguments will get assign in rest in array form.

// example 13

// Topic: spread with object

const spreadExample = ({ a, b }) => {
  console.log(a, b);
};

const obj = { a: 1, b: 2 };

spreadExample(obj);

// output: 1 2 beacuse can can also pass object and it will access the value. need to add more details ...

// example 14

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const spreadExample2 = ([first, second, ...rest]) => {
  console.log(first, second, rest);
};

console.log(spreadExample2(array));

// rest with spread
console.log(spreadExample2([...array, 11, 12, 13]));

//output: 1 2 [3,4,5,6,7,8,9,10] because spreads behave reverse of rest, we can pass array an it will assign the first two value for first two variable rest is assign  to rest in array form.
// in this case we can pass value with array or two array.

// example 15

// Topic: spread ( can rename parameters )

const spreadExample = ({ a: aaloo, b: bhaaloo }) => {
  //destructuring;
  //console.log(a, b); // ReferenceError, a is not defined
  console.log(aaloo, bhaaloo);
};

const obj = { a: 1, b: 2 };
spreadExample(obj);

// output: 1 2

//example 16

const spreadExample = ({ b: bhaaloo, a: aaloo }) => {
  console.log(aaloo, bhaaloo);
};

const obj = { a: 1, b: 2 };
spreadExample(obj);

// output: 1 2
