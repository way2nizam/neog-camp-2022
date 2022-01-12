// [ES6+ Assignment Questions](https://www.notion.so/ES6-Assignment-Questions-533721cd486b4a1d87d4403089429a81)

// 1. Try converting these codes to ES6 syntax-

//question code ...

var aloo = 1;
if (aloo == 1) {
  var a = 2;
  console.log(a);
}
console.log(aloo);

// solution:

const aloo = 1;
if (aloo == 1) {
  const a = 2;
  console.log(a);
}
console.log(aloo);

// here i have use 'const' instead of 'var'

//question code ...

var multiply = function (x, y) {
  return x * y;
};

//solution:

const multiply = (x, y) => x * y;

// use of arrow function one liner

//question code ...

var customer = {
  name: 'Bhaalo',
};
var card = {
  amount: 20,
  product: 'Aaalo',
  unitprice: 50,
};
var message =
  'Hello ' +
  customer.name +
  ' wants to buy ' +
  card.amount +
  ' ' +
  card.product +
  ' for price of ' +
  card.unitprice +
  ' per piece';

//solution

const customer = {
  name: 'Bhaalo',
};
const card = {
  amount: 20,
  product: 'Aaalo',
  unitprice: 50,
};

const message = `Hello ${customer.name} wants to buy ${card.amount} ${card.product} for price of ${card.unitprice} per piece`;

// use of 'const' and template literal

//question code ...

var Neog = ['Tanvi', 'Swap', 'Tanay', 'MA', 'CA', 'PA', 'TA'],
  CEO = Neog[0],
  Mentor = Neog[2];

//solution

const Neog = ['Tanvi', 'Swap', 'Tanay', 'MA', 'CA', 'PA', 'TA'],
  CEO = Neog[0],
  Mentor = Neog[2];

console.log(CEO);

//her use of const instead of var

//question code ...

var arr = ['MA', 'TA', 'PA', 'CA'];
var firstName = arr[0];
var surname = arr[1];
console.log(firstName);
console.log(surname);

//solution

const arr = ['MA', 'TA', 'PA', 'CA'];
const [firstName, surname] = [arr[0], arr[1]]; // object destructing
console.log(`${firstName} ${surname}`); //use of template literal

//question code ...

var Aaloo = 'Tasty';
var Bhaloo = 'Cute';
var Obj = {
  Aaloo: Aaloo,
  Bhaloo: Bhaloo,
};

//solution

const Aaloo = 'Tasty';
const Bhaloo = 'Cute';
const Obj = {
  Aaloo,
  Bhaloo,
};

// when key and value are same, we can se the shorthand property value

//question code ...

var a = 5;
var b = 10;
console.log('Fifteen is '.concat(a + b, ' and n0t ').concat(2 * a + b, '.'));

//solution

const a = 5;
const b = 10;
console.log(`Fifteen is ${a + b} and n0t ${2 * a + b}.`);

// use of const and template literal

//question code ...

var arithmeticsObj = {
  sum: function sum(num1, num2) {
    return num1 + num2;
  },
  multiply: function multiply(num1, num2) {
    return num1 * num2;
  },
};

//solution

const arithmeticsObj = {
  sum: (num1, num2) => num1 + num2,
  multiply: (num1, num2) => num1 * num2,
};

// here i am using arrow funtion.

//question code ...

var avengers = {
  operation: 'Assemble',
  members: [
    {
      ironMan: 'Tony Stark',
    },
    {
      captainAmerica: 'Steve Rogers',
    },
    {
      blackWidow: 'Natasha Romanoff',
    },
  ],
};
var operation = avengers.operation,
  members = avengers.members;

//solution

const avengers = {
  operation: 'Assemble',
  members: [
    {
      ironMan: 'Tony Stark',
    },
    {
      captainAmerica: 'Steve Rogers',
    },
    {
      blackWidow: 'Natasha Romanoff',
    },
  ],
};
const operation = avengers['operation'];
const members = avengers['members'];

// here i am using [] notation instead of dot notation
