// 1. Guess the output

const hello = () => 'Hello';
const welcome = () => 'Welcome';
const [Hello = hello(), Welcome = welcome()] = ['Namaste'];
console.log(Hello, Welcome);

//output: Namaste Welcome beacause in line 5 array destructing changes the value from hello to Namaste.

// question code ...

const obj = {
  aloo: 1,
  bhallo: 2,
};

const { c: aloo = [2, 3, 6, 8, 4].push(5), aloo } = obj;

console.log(aloo);

//solution: Syntax Error because aloo is declared already
